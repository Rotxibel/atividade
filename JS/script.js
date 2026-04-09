 let maxNumero = 100;
    let numeroSecreto = gerarNumero();
    let tentativas = 5;
    let pontos = 100;
    let historico = [];

    function gerarNumero() {
      return Math.floor(Math.random() * maxNumero) + 1;
    }

    function verificarChute() {
      let valor = Number(document.getElementById("chute").value);
      let mensagem = document.getElementById("mensagem");

      if (!valor) {
        mensagem.innerText = "Digite um número válido!";
        return;
      }

      historico.push(valor);
      document.getElementById("historico").innerText =
        "Chutes: " + historico.join(", ");

      tentativas--;
      pontos -= 20;

      if (valor === numeroSecreto) {
        mensagem.innerText = "🎉 Você acertou!";
        finalizarJogo();
      } else if (valor > numeroSecreto) {
        mensagem.innerText = "📉 Muito alto!";
      } else {
        mensagem.innerText = "📈 Muito baixo!";
      }

      document.getElementById("tentativas").innerText =
        "Tentativas: " + tentativas;

      document.getElementById("pontos").innerText =
        "Pontos: " + pontos;

      if (tentativas === 0 && valor !== numeroSecreto) {
        mensagem.innerText = "❌ Fim de jogo! Número era " + numeroSecreto;
        finalizarJogo();
      }

      document.getElementById("chute").value = "";
    }

    function finalizarJogo() {
      document.getElementById("chute").disabled = true;
    }

    function reiniciarJogo() {
      numeroSecreto = gerarNumero();
      tentativas = 5;
      pontos = 100;
      historico = [];

      document.getElementById("mensagem").innerText = "Novo jogo!";
      document.getElementById("tentativas").innerText = "Tentativas: 5";
      document.getElementById("pontos").innerText = "Pontos: 100";
      document.getElementById("historico").innerText = "Chutes: ";
      document.getElementById("chute").disabled = false;
      document.getElementById("chute").value = "";
    }

    function mudarNivel() {
      maxNumero = Number(document.getElementById("nivel").value);
      reiniciarJogo();
    }