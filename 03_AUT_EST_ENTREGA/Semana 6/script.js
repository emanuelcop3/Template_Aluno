function myFunction() {
  document.getElementById("field2").value = document.getElementById("field1").value;
}





$(document).ready(function(){
    curiculo.list("2")
})
var  curiculo = {
    list(eixoId){
            $.ajax({
                type:'GET',
                url:  'http://localhost:127.0.0.1:5500/' + eixoId,
                success: function(resultados){
           //         document.getElementById("questionsHeader").textContent = resultados.user.nome
           resultados.questoes.forEach(questao => {
var element = `<p><a href="https://github.com/emanuelcop3">Acesse meu perfil no GitHub</a></p>`
document.getElementById("list").innerHTML += element

        });
                }
            })
    }
}