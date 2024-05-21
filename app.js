alert('bem vindo ao jogo do numero secreto');
let numeroMaximo = 1000;
console.log('Boas vindas');
let nome = 'Gabi';
console.log(`Ola, ${nome}!`);
nome = prompt('Insira o seu nome');
alert(`Boas vindas ${nome}`);
diaDaSemana = prompt('Qual é o dia da semana?');
if (diaDaSemana == 'Sábado') { alert('Bom fim de semana!');
} else if (diaDaSemana == 'Domingo') { alert('Bom fim de semana!');
} else { alert('Boa semana!');
} 
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
   chute = prompt(`escolha um numero entre 1 e ${numeroMaximo}`);
   if (chute == numeroSecreto) {
       break
    } else {
        if (chute > numeroSecreto) {
            alert(`o numero secreto é menor que ${chute}`);
        } else {
            alert(`o numero secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}
let palavraTentativa = tentativas < 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);