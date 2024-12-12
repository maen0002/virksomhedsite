
document.querySelector("#txt1").addEventListener("mouseover", moover1);
document.querySelector("#txt1").addEventListener("mouseout", moovout1);
document.querySelector("#txt2").addEventListener("mouseover", moover2);
document.querySelector("#txt2").addEventListener("mouseout", moovout2);
document.querySelector("#txt3").addEventListener("mouseover", moover3);
document.querySelector("#txt3").addEventListener("mouseout", moovout3);


function moover1() {
    document.querySelector("#img1").classList.add("scale")
}

function moovout1() {
    document.querySelector("#img1").classList.remove("scale")
}

function moover2() {
    document.querySelector("#img2").classList.add("scale")
}

function moovout2() {
    document.querySelector("#img2").classList.remove("scale")
}

function moover3() {
    document.querySelector("#img3").classList.add("scale")
}

function moovout3() {
    document.querySelector("#img3").classList.remove("scale")
}