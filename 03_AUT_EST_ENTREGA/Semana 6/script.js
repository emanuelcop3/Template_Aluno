const express = require('express'); 
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const hostname = '127.0.0.1';

onclick="document.getElementById('demo').innerHTML = Date()"


const port = 3061;
const sqlite3 = require('sqlite3').verbose();
const app = express();
const DBPATH = 'dbUser.db';

app.use(express.static("../Semana 6/"));

app.use(express.json());


/* Definição dos endpoints */

/****** CRUD ******************************************************************/

function myFunction() {
	document.getElementById("field2").value = document.getElementById("field1").value;
  }
  
  
  $(document).ready(function(){
	  curiculo.list("2")
  })
  var  curiculo = {
	  list(Id){
			  $.ajax({
				  type:'GET',
				  url:  'http://localhost:127.0.0.1:5500/' + Id,
				  success: function(resultados){
			 //         document.getElementById("questionsHeader").textContent = resultados.user.nome
			 resultados.forEach(questao => {
  var element = `<p><a href="https://github.com/emanuelcop3">Acesse meu perfil no GitHub</a></p>`
  document.getElementById("list").innerHTML += element
  
		  });
				  }
			  })
	  }
  }
  
  