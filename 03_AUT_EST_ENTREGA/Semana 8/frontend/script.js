function myFunction() {
  document.getElementById("field2").value = document.getElementById("field1").value;
}

api = 'http://127.0.0.1:3071/'


$(document).ready(() => {
    users.list();
});


var users = {
    
    list() {
        $.ajax({
            url: api + '/users',
            type: 'GET',
            success: data => {
                var tx = '';
                tx += '<div class="insert" onclick="user.insert()">Inserir</div>';
                data.forEach(element => {
                    tx += '<div class="user">';
                        tx += '<div class="title">' + element.title + '</div>';
                        tx += '<div class="actions">';
                            tx += '<div class="action" onclick="user.update(' + element.userId + ',\'' + element.title + '\')">Editar</div>';
                            tx += '<div class="action" onclick="user.delete(' + element.userId + ')">Excluir</div>';
                        tx += '</div>';
                    tx += '</div>';
                });
                $('#main').html(tx);
            }
        });
        
    }
    
};

var user = {

    insert() {
        var title = prompt('Digite o nome:');
        if (title) {
            if (title.trim() != '') {
                $.ajax({
                    type: 'POST',
                    url: api + '/userinsert',
                    data: {title: title},
                }).done(function () {
                    users.list();
                }).fail(function (msg) {
                    //console.log('FAIL');
                }).always(function (msg) {
                    //console.log('ALWAYS');
                });
            }
        }
    },


    update(userId, oldTitle) {

        var title = prompt('Digite o novo nome:', oldTitle);
        if (title) {
            if (title.trim() != '') {
                $.ajax({
                    type: 'POST',
                    url: api + '/userupdate',
                    data: {title: title, userId: userId},
                }).done(function () {
                    users.list();
                }).fail(function (msg) {
                    //console.log('FAIL');
                }).always(function (msg) {
                    //console.log('ALWAYS');
                });
            }
        }
    },

    delete(userId) {

        if (confirm('Confirma a exclusão?')) {
            $.ajax({
                type: 'api',
                url: api + '/userdelete',
                data: {userId: userId},
            }).done(function () {
                users.list();
            }).fail(function (msg) {
                //console.log('FAIL');
            }).always(function (msg) {
                //console.log('ALWAYS');
            });
        }
    },

}

var getDBResDiv = "#getDB";


/* Função que faz uma requisição GET */
function TestGETDB(){
    var url = "http://127.0.0.1:3071/users";
    var resposta;

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor

    resposta = JSON.parse(xhttp.responseText);
    
    $(getDBResDiv).append("<br /><br />" + JSON.stringify(resposta));
    $(getDBResDiv).append("<br /><br />* Seleção do atributo 'title' do primeiro usuario:<br />" + resposta[0].title);
    //console.log(xhttp.responseText);
}