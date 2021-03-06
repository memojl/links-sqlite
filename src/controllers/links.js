//LINKS.JS
/* VARIABLES CONSTANTES*/
var loc = window.location;
const host = loc.host;
const dominio = loc.origin + '/';
const path_url1 = loc.pathname;
var path_url = path_url1.replace("/", "");
var page_url = dominio + path_url;
const api_url = (host!='localhost')? dominio + 'api/' : dominio + 'MisSitios/links/api/';

const linksList = async () => {
  let url_get = api_url + 'v2/links/';
  const response = await fetch(url_get);
  const data = await response.json();
  //let datos = data.data;
  //console.log(datos);
  data.forEach(element => {
    const {ID, title, url, description, cate, user_id, created_at} = element;
    let list = document.querySelector('#list');
    if(element){
      list.innerHTML += `
        <div class="col-md-3">
          <div class="card text-center">
              <div id="${ID}" class="card-body">
                  <a href="${url}" target="_blank">
                      <h3 class="card-title text-uppercase">
                          ${title}
                      </h3>
                  </a>
                  <p class="m-2">${cate}</p>
                  <p class="m-2">${description}</p>
                  <p class="text-muted">${created_at}</p>
                  <a class="btn btn-secondary" href="#/links/edit/${ID}"><i class="fa fa-edit"></i> Editar</a>
                  <button data-id="${ID}" class="btn btn-danger"><i class="fa fa-trash"></i> Borrar</button>
              </div>
          </div>
        </div>
      `;    
    }else{
      list.innerHTML += `
      <div class="col-md-4 mx-auto">
          <div class="card card-body text-center">
              <p>There are not Links saved yet.</p>
              <a href="#/links/add">Create One!</a>
          </div>
      </div>
      `;
    }
  });

  let lista = document.getElementById('list');
  let tok1 = localStorage.getItem('Token');
  let tok2 = tok1.replace('"', '');
  let Token = tok2.replace('"', '');//console.log('TOKEN: ' + Token);

    lista.addEventListener('click', (e)=>{
      const id = e.target.getAttribute('data-id');console.log(id);
      if(id!=null){
      Swal.fire({
        title: '??Esta seguro de eliminar el registro (' + id + ')?',
        text: "??Esta operaci??n no se puede revertir!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Borrar'
      }).then((result) => {
        if(result.value) {//console.log('Link Borrado');        
          var datos = {
            //ID: id,
            token: Token
          }
          const url_delete = api_url + 'v2/links/' + id;//console.warn(url_post);  
          fetch(url_delete,{
            method: 'DELETE',
            headers: {
              'Content-Type':'application/json'
            },
            body: JSON.stringify(datos)
          }).then(res=>res.json()).then(data=>{console.log(data);
            //Redireccionar al Dashboard location.href= dominio + path_url + '#/links';
            borrar();
          })
          .catch(err=>console.error(err));
          Swal.fire('??Eliminado!', 'El registro ha sido eliminado.', 'success')
        }
      })
      }
    })
  //})
}

function borrar() {
  console.log('Click Eliminar');
  setTimeout(function(){
    console.log('links Recargado');
    location.href= dominio + path_url + '#/links';
  },2000);
}

function links(){
  //Retardo para activar btnLogin
  setTimeout(function(){
    console.log('links Activado');
    linksList();
  },1000);
}

export {links};