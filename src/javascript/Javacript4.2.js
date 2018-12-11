/eerste foto dat in een div is geplaatst/
var plaatjes = [1,2,3,4,5,6,7,8,9];
var teller = 0;
var slideholder = document.getElementById("slideholder");
slideholder.style.background = "url('img/anime1.jpg')";
slideholder.style.backgroundSize = "300px";

/2de foto dat gelinked is aan een div met een functie dat alleen op klik een andere foto laat zien/
slideholder.addEventListener("click", function() {
    slideholder.style.backgroundImage = "url('img/anime" + getAnime() + ".jpg')";
});

/deze functie zorgt ervoor dat je kan blijven klikken dan komt het eerste en tweede foto om en om tevoorschijn/
function getAnime() {
    if(teller >= plaatjes.length) {
        teller = 1;
    } else {
        teller++;
    }
    console.log(teller);
    return teller;
}


