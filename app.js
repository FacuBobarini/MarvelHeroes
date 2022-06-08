const container = document.getElementById('heroesWrap');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');
const btnPrevFive = document.getElementById('btnPrevFive');
const btnNextFive = document.getElementById('btnNextFive');
const sIcon = document.getElementById('sIcon');
const title = document.getElementById('title');
let srch = false;
let page = 0;
let srchString = ""

function idFnc(id){
    localStorage.setItem("idCard", id);

}

title.addEventListener('click', () => {
    srch = false;
    page = 0;
    characterCatalogue();
});

btnNext.addEventListener('click', () => {
    if (page < 15) {
        page += 1;
    }
    characterCatalogue();
});
btnPrev.addEventListener('click', () => {
    if (page > 1) {
        page -= 1;
    }
    characterCatalogue();
});



btnNextFive.addEventListener('click', () => {
    if (page < 10) {
        page += 5;
    } else {
        page = 15;
    }
    characterCatalogue();
});
btnPrevFive.addEventListener('click', () => {
    if (page > 5) {
        page -= 5;
    } else {
        page = 0;
    }
    characterCatalogue();
});



sIcon.addEventListener('click', () => {
    let cadena = document.getElementById('search').value;
    stringCheckout(cadena);
});



const characterCatalogue = async () => {
    try {
        const res = await fetch(
            srch ?
                `https://gateway.marvel.com:443/v1/public/characters?name=${srchString}&ts=1&apikey=7f7955c6f06419c5f8221b2891d78a70&hash=1a4efd8d1b9854873faf635b8e761244`
                : `https://gateway.marvel.com:443/v1/public/characters?limit=100&offset=${page}00&ts=1&apikey=7f7955c6f06419c5f8221b2891d78a70&hash=1a4efd8d1b9854873faf635b8e761244`
        );
        let characters = '';
        const cards = await res.json();
        if(cards.data.total < 1){
            container.innerHTML = `
            <h1 class='characterNotFound'>
                Hero not nound, try specified full name
            </h1>`
        }else{
        cards.data.results.map((results) => {
             characters +=  `
                    <div class='characterWrap'>
                        <div class='character'>
                            <a class='charName' onclick='idFnc(${results.id})' href='character.html' >${results.name}</a>
						    <a  class='charImgWrap' onclick='idFnc(${results.id})' href='character.html' ><img class='charImg' src='${results.thumbnail.path}.${results.thumbnail.extension}'></a>					
                            </div>
                    </div>`;                        
        });
        srchString = '';
        container.innerHTML = characters;
        document.getElementById('pages').innerHTML = page + 1;
        }
        
    }
    catch (err) {
        console.log(err)
    }
}



characterCatalogue();




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




