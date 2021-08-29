/* VARIABLES CONSTANTES*/
var loc = window.location;
const host = loc.host;
const dominio = loc.origin + '/';
const path_url1 = loc.pathname;
var path_url = path_url1.replace("/", "");
var page_url = dominio + path_url;
const api_login = page_url + 'api/';

function btnAdd(){
  const formulario = document.getElementById('form-add');
  formulario.addEventListener('submit', btnGuardar);
}

function btnGuardar(e){
  e.preventDefault();
  console.log('Validación de Datos');
  let tok1 = localStorage.getItem('Token');
  let tok2 = tok1.replace('"', '');
  let Token = tok2.replace('"', '');
  console.log('TOKEN: ' + Token);
  let tit = document.getElementById('title').value;
  let url = document.getElementById('url').value;
  let des = document.getElementById('description').value;
  //let cat = document.getElementById('cate').value;
  //var datos = new FormData(formulario);
  var datos = {
      //ID: 4,
      title: tit,
      url: url,
      description: des,
      cate: 'web',
      user_id: 1,
      created_at: '2021-08-28 21:03:04',
      token: Token
  }
  //console.log(datos);
  const api_url = api_login + 'v1/links';//console.warn(api_url);  
  fetch(api_url,{
      method: 'POST',
      headers: {
          'Content-Type':'application/json'
      },
      body: JSON.stringify(datos)
  }).then(res=>res.json()).then(data=>{
      console.log(data);
      //Redireccionar al Dashboard
      location.href= dominio + path_url + '#/links';
  })
  .catch(err=>console.error(err));
  
}

function linksAdd(){
    //Retardo para activar btnLogin
    setTimeout(function(){
      console.log('linksAdd Activado');
      btnAdd();
    },1000);
  }
  
  export {linksAdd};