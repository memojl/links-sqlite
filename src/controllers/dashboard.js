//DASHBOARD.JS

function btnSidebar(){
//<![CDATA[
  /*
  if(document.createStyleSheet) {
    document.createStyleSheet('http://localhost/MisSitios/links/src/assets/css/dashboard.css');
  }
  else {
    var styles = "@import url('http://localhost/MisSitios/links/src/assets/css/dashboard.css ');";
    var newSS=document.createElement('link');
    newSS.rel='stylesheet';
    newSS.href='data:text/css,'+escape(styles);
    document.getElementsByTagName("head")[0].appendChild(newSS);
  }
  */
//]]>

let btnSalir = document.querySelector('.bx-log-out')
btnSalir.addEventListener('click',()=>{
  window.location.href='#/logout';
});

let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
 let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
 arrowParent.classList.toggle("showMenu");
  });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("close");
});

}

const links = async () => {
  let url = 'http://localhost/MisSitios/links/api/v1/links/';
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  data.forEach(element => {
    const {id, title, url, description, category, user_id, created_at, updated_at} = element;
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
                  <a class="btn btn-danger" href="#/links/delete/${id}">Borrar</a>
                  <a class="btn btn-secondary" href="#/links/edit/${id}">Editar</a>
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

function dashboard(){
  //Retardo para activar btnLogin
  setTimeout(function(){
    console.log('btnSidebar Activado');
    //btnSidebar();
    links();
  },1000);
}


export {dashboard};