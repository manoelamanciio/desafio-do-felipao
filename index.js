//Inicio do Desafio
console.log("   INÍCIO    ");
let nomePersonagem = "Dark Lord";
let xpHeroi = 9000;
let nivel;

for (let i = 0; i <= 1; i++) {
  if (xpHeroi < 1000) {
    nivel = "Ferro";
  } else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    nivel = "Bronze";
  } else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    nivel = "Prata";
  } else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    nivel = "Ouro";
  } else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    nivel = "Platina";
  } else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    nivel = "Ascendente";
  } else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    nivel = "Imortal";
  } else {
    nivel = "Radiante";
  }

  console.log(
    "O Héroi de nome " + nomePersonagem + " está no nível de " + nivel + "!!"
  );
}
