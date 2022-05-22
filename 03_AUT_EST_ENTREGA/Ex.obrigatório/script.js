/* 
=======================
Declaração de variáveis
=======================
*/

var calcResDiv = "#calc";


/* 
=======================
Event Listener
=======================
*/

/* A adição dessa função que "escuta" um evento permite que 
   verifiquemos se a página foi carregada para só então chamar
   a função CalcAddAndShow, pois ela só funcionará depois da 
   criação da div de resultado, com id "result" */
$(document).ready( function() {
    var x0 = 10, y0 = 20;
    CalcAddAndShow(x0, y0);
});



/* 
=======================
Funções
======================= 
*/

/* Função que calcula uma soma e mostra a operação realizada e o resultado obtido */
function CalcAddAndShow(x, y){
    var op = "+";
    var result = Calc(x, y, op);
    ShowOp(x, y, op);
    ShowResult(result);
}


/* Função que calcula uma operação entre dois números recebidos como parâmetro */
function Calc(x, y, op){
    var result;
    if (op == "+") {
        result = x + y;
    };
    return result;
}


/* Função que mostra a operação realizada */
function ShowOp(x, y, op){
    $(calcResDiv).append(`<br />${x} ${op} ${y} = `);
}


/* Função que mostra o resultado obtido */
function ShowResult(res){
    $(calcResDiv).append(res);
}



var btn = document.querySelector('button');
var txt = document.querySelector('p');

btn.addEventListener('click', updateBtn);

function updateBtn() {
   if (btn.textContent === 'Colocar preço') {
       btn.textContent = 'Parar preço';
       txt.textContent = 'Preço final!';
   } else {
       btn.textContent = 'preço';
       txt.textContent = 'preço.';
   }
}



import java.util.Scanner;
/**
 * ====================================
 *           eXcript.com
 *          fb.com/eXcript
 * ====================================
 */

public class J0011 {

    //Lendo e imprimindo textos e números
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        // 1) pedir pro usuário informar:
            //1) Nome
        System.out.println("Digite o seu nome: ");
        String nome = in.nextLine();
            //2) Idade
            System.out.println("Informe a sua idade: ");
            int idade = in.nextInt();
            //3) Cidade
            System.out.println("Informe a sua cidade de nascimento: ");
            String cidade = in.next();

        // 2) armazenar as informações do usuário em variáveis
        // 3) alterar a frase do enunciado
        // Ola. Meu nome é <nome>, sou natural de <cidade>,
        //  tenho <idade> anos, e estou aprendendo a programar.
            System.out.print("Ola. Meu nome é "+nome);
            System.out.print(", sou natural de "+cidade);
            System.out.print(", tenho "+idade);
            System.out.print(" anos, e estou aprendendo a programar.");
    }
}