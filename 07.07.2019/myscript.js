var targetBack = document.getElementById("rightdiv").children
var nextBtn = document.getElementById("nxtBtn")
var clrArr = [];
var check = 0;

function checkFinal() {
//     added delay 
    setTimeout(function(){
            document.body.innerHTML = ""
            var suprise = document.createElement("h1")
            suprise.innerText = "TƏBRİKLƏR SİZ BUTUN BAYRAQLARI UĞURLA TAPDINIZ"
            suprise.style.color = "green";
            suprise.style.textAlign = "center";
            document.body.append(suprise)
        },300);
}


nextBtn.addEventListener("click", function () {
    for (let i = 0; i < targetBack.length; i++) {
        targetBack[i].style.backgroundColor = ""
        clrArr = []
        console.log(clrArr)
    }
})

var flags = [
    {
        az: ["blue", "red", "green"],
        tr: ["red", "red", "red"],
        ru: ["white", "blue", "red"],
        sp: ["red", "yellow", "red"],
        ge: ["black", "red", "yellow"],
        ir: ["green", "white", "red"]
    }
]

var colors = document.getElementsByClassName("colors");

for (let i = 0; i < colors.length; i++) {
    colors[i].addEventListener("dragstart", myDragStart)
}

var dropZones = document.querySelectorAll(".dragDiv div");

for (let i = 0; i < dropZones.length; i++) {
    dropZones[i].addEventListener("dragenter", myDragEnter);
    dropZones[i].addEventListener("dragleave", myDragleave);
    dropZones[i].addEventListener("dragover", myDragOver);
    dropZones[i].addEventListener("drop", myDragDrop)
}

function myDragEnter(e) {
    e.preventDefault()

}

function myDragleave(e) {
    e.preventDefault()
}

function myDragOver(e) {
    e.preventDefault()
}


function myDragStart(e) {
    e.dataTransfer.setData("c", e.target.style.backgroundColor);
}



function myDragDrop(e) {
    e.target.style.backgroundColor = e.dataTransfer.getData("c")

    if (clrArr.length != 3) {
        clrArr.push(e.target.style.backgroundColor)
    } else {
        clrArr = []
        clrArr.push(e.target.style.backgroundColor)
    }

    if (clrArr.length == 3 && targetBack[0].style.backgroundColor != ""
        && targetBack[1].style.backgroundColor != ""
        && targetBack[2].style.backgroundColor != "") {
        for (let item in flags) {
            if (flags[item].az.toString() == clrArr.toString() && flags[item].az.toString() != "true") {
                flags[item].az = ["true"];
                check++;
                checkFinal()
                var azFlag = document.getElementById("az")
                azFlag.style.color = "green";
                azFlag.style.fontSize = "1.1em"
                azFlag.innerText += ": Təbriklər Azərbaycan bayrağın uğurla tapdınız"
                return;
            } else if (flags[item].tr.toString() == clrArr.toString() && flags[item].tr.toString() != "true") {
                flags[item].tr = ["true"];
                check++;
                checkFinal()
                var trFlag = document.getElementById("tr")
                trFlag.style.color = "green";
                trFlag.style.fontSize = "1.1em"
                trFlag.innerText += ": Təbriklər Türkiyə bayrağın uğurla tapdınız"
                return;
            } else if (flags[item].ru.toString() == clrArr.toString() && flags[item].ru.toString() != "true") {
                flags[item].ru = ["true"];
                check++;
                checkFinal()
                var ruFlag = document.getElementById("ru")
                ruFlag.style.color = "green";
                ruFlag.style.fontSize = "1.1em"
                ruFlag.innerText += ": Təbriklər Rusiya bayrağın uğurla tapdınız"
                return;
            }
            else if (flags[item].sp.toString() == clrArr.toString() && flags[item].sp.toString() != "true") {
                flags[item].sp = ["true"];
                check++;
                checkFinal()
                var spFlag = document.getElementById("sp")
                spFlag.style.color = "green";
                spFlag.style.fontSize = "1.1em"
                spFlag.innerText += ": Təbriklər Ispanya bayrağın uğurla tapdınız"
                return;
            } else if (flags[item].ge.toString() == clrArr.toString() && flags[item].ge.toString() != "true") {
                flags[item].ge = ["true"];
                check++;
                checkFinal()
                var geFlag = document.getElementById("ge")
                geFlag.style.color = "green";
                geFlag.style.fontSize = "1.1em"
                geFlag.innerText += ": Təbriklər Almanya bayrağın uğurla tapdınız"
                return;
            } else if (flags[item].ir.toString() == clrArr.toString() && flags[item].ir.toString() != "true") {
                console.log("Tebrikler siz İran bayragini duzeltdiniz")
                flags[item].ir = ["true"];
                check++;
                checkFinal()
                var irFlag = document.getElementById("ir")
                irFlag.style.color = "green";
                irFlag.style.fontSize = "1.1em"
                irFlag.innerText += ": Təbriklər İran bayrağın uğurla tapdınız"
                return;
            } else {
                console.log("Siz bu bayrağı artıq düzətmisiniz və ya sistemdə belə bir bayraq yoxdur");
                return;
            }
        }
    }
}

