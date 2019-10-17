class Finansa{
        constructor(nome, valor){
          this.nome = nome;
          this.valor = valor;
        }
        toString(){
          return('<td>'+this.nome +'</td>'+ "<td>  " + this.valor+ " R$</td>");
        }
        getValor(){
          return this.valor;
        }
}

var listaDespeza = [];
var listaRenda = [];
var fatura = 0;
var renda = 0;
var saldo = 0;
var resultBusca;

function somaDespesa(){
    var nome = document.getElementById("despeza").value
    var valor  = document.getElementById("valorDespesa").value;
    var despeza = new Finansa (nome, valor);
    listaDespeza.push(despeza);
    fatura = fatura + parseFloat(valor);
    //console.log(imprime());

		//document.getElementById("resltDespeza").innerHTML = listaDespeza.toString();
    saldo = saldo - parseFloat(valor);
    imprime();
}


function somaRenda(){
  var nome1 = document.getElementById("arecadacao").value
  var valor1  = document.getElementById("valorArecadacao").value;
  var ganho = new Finansa (nome1, valor1);
  listaRenda.push(ganho);
  renda = renda + parseFloat(valor1);
  //console.log(imprime());

  // document.getElementById("resltDespeza").innerHTML = listaRenda.toString();
  saldo = saldo + parseFloat(valor1);
 imprimeRendimento();

}

function apagaDespeza(indice){
      var a = listaDespeza[indice];
     listaDespeza.splice(indice, 1);
     saldo = saldo + parseFloat(a.getValor());
     fatura = fatura - parseFloat(a.getValor());
     imprime();
   }


function imprimeDespeza(aluno, i){
    return ('<tr>' + aluno.toString()  + '<td><input type= "button" value="x" id="deleta" onclick= "apagaDespeza(' + i + ')" </td> </tr>' )
}


function apagaRenda(indice){
      var b = listaRenda[indice]
     listaRenda.splice(indice, 1);
     saldo = saldo - parseFloat(b.getValor());
     fatura = fatura + parseFloat(b.getValor());;
     imprimeRendimento();
   }


function imprimeRenda(aluno, i){
    return ('<tr>' + aluno.toString()  + '<td><input type= "button" value="x" id="deleta" onclick= "apagaRenda(' + i + ')" </td> </tr>' )
}



function imprime(){
  var i=0;
  var str = "<table><tr><td>Despeza a pagar</td>  <td>Valor:</td>  </tr>";
  for(i in listaDespeza){
    str = str + imprimeDespeza(listaDespeza[i], i);
  }
  str = str + "</table>";
  document.getElementById("somadorDispeza").innerHTML = ("<h1>Despeza a pagar: " + fatura+" R$<\h3>");
  document.getElementById("resltDespeza").innerHTML = str;
  document.getElementById("saldoTotal").innerHTML = ("<h1>SALDO ATUAL: "+saldo+" R$ <h1>" );
}



function imprimeRendimento(){
   // document.getElementById("resltDespeza").innerHTML = listaRenda.toString();
  var i=0;
  var str1 = "<table><tr><td>Renda arrecadada:  </td>  <td>Valor:</td>  </tr>";
  for(i in listaRenda){
    str1 = str1 + imprimeRenda(listaRenda[i], i);
  }
  str1 = str1 + "</table>";
  document.getElementById("somadorRenda").innerHTML = ("<h1>Renda arrecadada: " + renda+" R$ <\h3>");
  document.getElementById("resultRenda").innerHTML = str1;
  document.getElementById("saldoTotal").innerHTML = ("<h1 class='saldoBom'>SALDO ATUAL: "+saldo+" R$ <\h1>" );
}
