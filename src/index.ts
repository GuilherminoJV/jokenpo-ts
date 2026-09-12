const input = require("prompt-sync")();

const movimentos: string[] = ["Pedra", "Papel", "Tesoura"];

// 1. Interface alinhada (usando 'pontos' em tudo)
interface Jogador {
  avatar: string;
  pontos: number;
}

// 2. Objetos FORA do loop para os pontos acumularem
const jogador: Jogador = { avatar: "", pontos: 0 };
const computador: Jogador = { avatar: "Computador", pontos: 0 };

// 3. Pergunta o nome ANTES do loop (para não perguntar a cada rodada)
console.log("=== BEM-VINDO AO JOKENPO ===");
jogador.avatar = input("Digite o nome do seu avatar: ");

do {
  console.log("\nEscolha sua jogada, " + jogador.avatar + ":");
  console.log("==========================================");
  console.log("1 - " + movimentos[0]);
  console.log("2 - " + movimentos[1]);
  console.log("3 - " + movimentos[2]);

  let escolhaMovimento: number = parseInt(input("Digite o número da sua jogada: "));

  if (escolhaMovimento < 1 || escolhaMovimento > 3) {
    console.log("Jogada inválida!");
    process.exit();
  }

  let escolhaComputador: number = Math.floor(Math.random() * 3) + 1;
  let jogadaJogador: string = movimentos[escolhaMovimento - 1];
  let jogadaComputador: string = movimentos[escolhaComputador - 1];

  console.log("\n--- REVELANDO AS JOGADAS ---");
  console.log(jogador.avatar + " escolheu: " + jogadaJogador);
  console.log(computador.avatar + " escolheu: " + jogadaComputador);
  console.log("----------------------------");

  if (escolhaMovimento === escolhaComputador) {
    console.log("Empate! Ambos escolheram " + jogadaJogador);
  } else if (
    (escolhaMovimento === 1 && escolhaComputador === 3) ||
    (escolhaMovimento === 2 && escolhaComputador === 1) ||
    (escolhaMovimento === 3 && escolhaComputador === 2)
  ) {
    console.log("Você venceu! " + jogadaJogador + " vence " + jogadaComputador);
    jogador.pontos++;
  } else {
    console.log("O computador venceu! " + jogadaComputador + " vence " + jogadaJogador);
    computador.pontos++;
  }

  console.log("==========================================");
  console.log(`Placar atual: ${jogador.avatar} ${jogador.pontos} x ${computador.pontos} ${computador.avatar}`);
  console.log("==========================================");

} while (input("Você deseja jogar novamente? (S/N): ").toUpperCase() === "S");

console.log("\nObrigado por jogar!");
