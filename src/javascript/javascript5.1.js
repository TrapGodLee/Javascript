pics = document.getElementById("pics");
//defines the function
createPicsHolder();
createAnimeImages();
//creation of the function
function createPicsHolder(){
    //loop dat ervoor zorgt dat elke er 9 id's aangemaakt worden
    //en elke id krijgt een nummer van 1-9
    for(var i = 0; i < 9; i++){
        //div geconnect aan html genaamd id=pics
        pictureHolder = document.createElement("div");
        //gemaakte id geconnect aan css genaamd anime
        pictureHolder.className = "picture-holder";
        //id gelinked aan variable i komt er steeds 1 bij
        pictureHolder.id = "picture-holder" + i;
        //picture holder is kind van pics
        pics.appendChild(pictureHolder);
    }
}

function createAnimeImages() {
    //check javascript-interactief vid23
    pictureHolders = document.getElementsByClassName("picture-holder");
    for(var i = 0; i < pictureHolders.length; i++) {
        favoriet = document.createElement("div");
        favoriet.className = "favoriet";
        favoriet.id = "favoriet" + (i+1);
        animePlaatje = document.createElement("img");
        animePlaatje.src = "img/gokuvsjiren" + (i+1) + ".gif";
        animePlaatje.id = (i+1);
        animePlaatje.addEventListener("click", function() {
            maakFavoriet(this.id);
        });
        pictureHolders[i].appendChild(favoriet);
        pictureHolders[i].appendChild(animePlaatje);
    }
}

function maakFavoriet(id) {
    console.log("maak mijn favoriet!" + id);
    notsofavoriet = document.getElementsByClassName("favoriet");

    for(var i = 0; i < notsofavoriet.length; i++) {
        notsofavoriet[i].style.backgroundImage = "none";
    }

    favoriet = document.getElementById("favoriet" + id);
    favoriet.style.backgroundImage = "url('img/bleach.gif')";
}


//picHolder
