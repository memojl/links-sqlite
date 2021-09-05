//import '../assets/js/sweetalert2.all.min.js';
//LINKS.JS

const linksList = async () => {
  let url = 'http://localhost/MisSitios/links/api/v1/links/';
  const response = await fetch(url);
  const data = await response.json();
  //consoleLocal('log',data);
  data.forEach(element => {
    const {ID, title, url, description, category, user_id, created_at, updated_at} = element;
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
                  <p class="m-2">${description}</p>
                  <p class="text-muted">
                      ${created_at}
                  </p>
                  <button class="btn btn-danger">Borrar</button>
                  <!--a class="btn btn-danger" href="#/links/delete/${ID}">Borrar</a-->
                  <a class="btn btn-secondary" href="#/links/edit/${ID}">Editar</a>
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

  //let btnBorrar = document.querySelectorAll('.btnDanger');
  let btnBorrar = document.getElementsByClassName('.btnDanger');
  console.log(btnBorrar);
  btnBorrar.addEventListener('click', borrar);
/*
  $(document).on('click','.btnDanger', function () {
    //e.preventDefault();
    const element = $(this)[0].parentElement;
    const id = $(element).attr('id');
    Swal.fire({
      title: 'Â¿Esta seguro de eliminar el registro (' + id + ')?',
      text: "Â¡Esta operaciÃ³n no se puede revertir!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Borrar'
    }).then((result) => {
      if(result.value) {
        console.log('Link Borrado');
        Swal.fire('Â¡Eliminado!', 'El registro ha sido eliminado.', 'success')
      }
    })
  });
*/
}

function borrar(e) {
  console.log('Click Eliminar');
}

function links(){
  //Retardo para activar btnLogin
  setTimeout(function(){
    console.log('links Activado');
    linksList();
  },1000);
}

export {links};