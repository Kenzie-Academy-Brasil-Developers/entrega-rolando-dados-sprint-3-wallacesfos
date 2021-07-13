
let dadoUm = 0
let dadoDois = 0

let count = [0,0,0,0,0,0,0,0,0,0,0]

for(let i = 0; i < 1000; i++){
    dadoUm = Math.floor(Math.random() * 6 + 1)
    dadoDois = Math.floor(Math.random() * 6 + 1)
    
    let rollOfDice = parseInt(dadoUm + dadoDois)
    
    count[rollOfDice - 2] += 1
}

for(let x = 0; x <= 10; x++){
   document.write(`${x + 2} : ${count[x]} <br>`)
}
document.write('<h1>Rolando Dados</h1>')

let pai = document.getElementById('div')


for(let i = 0; i <= 10; i++){
    let largura = count[i] / 2;
    let retangulo = document.createElement('p');
    pai.appendChild(retangulo);
    retangulo.style.height = '20px';
    retangulo.style.margin = '10px';
    retangulo.style.backgroundColor = corAleatoria();
    retangulo.style.width = largura + '%';
}

document.write(cores);

function corAleatoria(){
    let cor = Math.floor(Math.random() * 4);
       switch (cor) {
            case 0:
               return 'green'
            case 1:
               return 'red'
            case 2:
               return 'yellow'
            case 3:
                return 'blue'
       }
}
