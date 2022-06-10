const charCard = document.getElementById('heroesWrap');


function CardFnc() {
  hero = JSON.parse(localStorage.getItem('hero'));
  let characters = '';
  hero.likes.map((results) => {
    wHeart(results.id);
    let id = results.id;
    let hName = results.name;
    let source = results.path;
    characters += `
          <div class='characterWrap'>
              <div class='character'>
                  <a class='charName' onclick='idFnc(${id})' href='character.html' >${hName}</a>
                  <a  class='charImgWrap' onclick='idFnc(${id})' href='character.html' ><img class='charImg' src=${source}></a>					                                
                  <i class="fa fa-heart-o" aria-hidden="true"></i> 
                  <a class='${hLike}' id='${id}' onclick='likeFnc(${id},"${hName}",${source})'><i class="fa fa-heart" aria-hidden="true"></i></div>             
              </div>
          </div>`
  });
  charCard.innerHTML = characters;
}



CardFnc();