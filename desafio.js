let nome = "Link";
let experiencia = 6365;
let nivel;

const niveis = {
    1000: "Ferro",
    2000: "Bronze",
    5000: "Prata",
    7000: "Ouro",
    8000: "Platina",
    9000: "Ascendente",
    10000: "Imortal",
};

for (let exp in niveis) {
    if (experiencia <= exp) {
        nivel = niveis[exp];
        break;
    }
}

if (!nivel) {
    nivel = "Radiante"; // Se a experiência for maior que o valor máximo definido
}

console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);