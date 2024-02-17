//Calculadora de Partidas Rankeadas.

let v= 70 //Entrada do Numero de Vitorias.
let d = 45 //Entrada do Numero de Derrotas.
let result =saldo(v,d)//Entrada dos Valores para função.



//Função para calcurar diferença de ditória e derrota.
function saldo( vit,der){
    let dif = vit - der
    return dif
}


let calcV=calc(v) //Entrada quandtidade de vitorias para a função.

//Função para calcular o nivel em que jogador está.
function calc(vit){
   let nivel;
  for(let i=1;i<101;i++){
      
     if (vit <= 10){
      nivel = "Ferro"
      }
     else if (vit >= 11 && vit <= 20)
      nivel = "Bronze";
      
    else if ( vit >= 21 && vit <= 50)
      nivel = "Prata";
      
    else if ( vit >= 51 && vit <= 80)
      nivel = "Ouro";
      
    else if ( vit >= 81 && vit <= 90)
      nivel = "Diamante";
      
    else if ( vit >= 91 && vit <= 100)
      nivel = "Lendário";
      
    else {
      nivel = "Imortal";}
   }

   return nivel
}

//Mensagem de saida do saldo e do nével.
console.log("O Herói tem de saldo de "+ result + " está no nível de "+ calcV)
