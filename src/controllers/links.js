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
              <div class="card-body">
                  <a href="${url}" target="_blank">
                      <h3 class="card-title text-uppercase">
                          ${title}
                      </h3>
                  </a>
                  <p class="m-2">${description}</p>
                  <p class="text-muted">
                      ${created_at}
                  </p>
                  <a class="btn btn-danger" href="#/links/delete/${ID}">Borrar</a>
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
}

function links(){
  //Retardo para activar btnLogin
  setTimeout(function(){
    console.log('links Activado');
    linksList();
  },1000);
}

export {links};