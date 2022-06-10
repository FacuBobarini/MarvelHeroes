const charCard = document.getElementById('charCard');
const charTitle = document.getElementById('charTitle');




async function CardFnc() {
    idCard = localStorage.getItem("idCard");
    console.log(idCard)
    try {
        const res = await fetch(`https://gateway.marvel.com:443/v1/public/characters/${idCard}?ts=1&apikey=7f7955c6f06419c5f8221b2891d78a70&hash=1a4efd8d1b9854873faf635b8e761244`);
        const cards = await res.json()
        let characters = '';
        cards.data.results.map((result) => {
            charTitle.innerHTML = result.name;
            characters += `
                    <img class='cardImg' src='${result.thumbnail.path}.${result.thumbnail.extension}'></img>
                    <div id='charInfoWrap' class='charInfoWrap'>${result.description}</div>          
        `
        });
        charCard.innerHTML = characters;
    }
    catch (err) {
        console.log(err)
    }
}


CardFnc();