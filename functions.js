function wHeart(id){
    if (id != (localStorage.getItem(`idLike${id}`))) {
        return hLike = 'hEmpty'
    } else {
        return hLike = 'hFull'
    };
  }
  
  
  function likeFnc(id, hname, sourc) {
    if (id != (localStorage.getItem(`idLike${id}`))) {
        localStorage.setItem(`idLike${id}`, id);
        hLike = 'hFull';
        addLike(id, `${hname}`, `"${sourc}"`);
    } else {
        localStorage.removeItem(`idLike${id}`);
        hLike = 'hEmpty';
        deleteLike(id);
    };
    document.getElementById(id).classList = hLike;
  };
  
  function addLike(charId, hname, sourc) {
    try {
        character = JSON.parse(localStorage.getItem('hero'));
        character.likes.push(
            {
                id: charId,
                name: hname,
                path: sourc
            });
        window.localStorage.setItem('hero', JSON.stringify(character));
    } catch {
        character = {
            likes: [
                {
                    id: charId,
                    name: hname,
                    path: sourc
                }
            ]
        };
        window.localStorage.setItem('hero', JSON.stringify(character));
    }
  }
  
  function deleteLike(idChar){
    character = JSON.parse(localStorage.getItem('hero'));
    character.likes = character.likes.filter((res) => res.id !== idChar);
    window.localStorage.setItem('hero', JSON.stringify(character));
  }


function stringCheckout(strings) {
    for (var i = 0; i < strings.length; i++) {
        var caracter = strings.charAt(i);
        if (caracter === ' ') {
            srchString += '%20';
        } else {
            caracter = caracter.toLowerCase()
            srchString += caracter;
        }
    }
    srch = true;
    characterCatalogue();
}

function idFnc(id) {
    localStorage.setItem("idCard", id);
}


