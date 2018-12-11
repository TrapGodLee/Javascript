/1ste foto slide/
var teller = 1;
var slideholder1 = document.getElementById("slideholder1");
slideholder1.style.background = "url('img/al1.jpg')";
slideholder1.style.backgroundSize = "300px";

/on click komt 2de foto/
slideholder1.addEventListener("click", function() {
    slideholder1.style.backgroundImage = "url('img/al" + getAl() + ".jpg')";
});

function getAl() {
    if(teller >= 2){
        teller = 1;
    } else {
        teller++;
    }
    console.log(teller);
    return teller;
}

/2de foto slide/
var teller2 = 3;
var slideholder2 = document.getElementById("slideholder2");
slideholder2.style.background = "url('img/fa3.jpg')";
slideholder2.style.backgroundSize = "300px";

/on click komt 2de foto/
slideholder2.addEventListener("click", function() {
    slideholder2.style.backgroundImage = "url('img/Fa" + getFa() + ".jpg')";
});

function getFa() {
    if(teller2 >= 4){
        teller2 = 3;
    } else {
        teller2++;
    }
    console.log(teller2);
    return teller2;
}

/3de foto slide/
var teller3 = 5;
var slideholder3 = document.getElementById("slideholder3");
slideholder3.style.background = "url('img/bet5.jpg')";
slideholder3.style.backgroundSize = "300px";

/on click komt 2de foto/
slideholder3.addEventListener("click", function() {
    slideholder3.style.backgroundImage = "url('img/bet" + getBet() + ".jpg')";
});

function getBet() {
    if(teller3 >= 6){
        teller3 = 5;
    } else {
        teller3++;
    }
    console.log(teller3);
    return teller3;
}
