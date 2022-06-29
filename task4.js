function clearScreen() {
    document.getElementById("result").value = "";
}


function display(value) {
    document.getElementById("result").value += value;
}

function calculate() {
    var p = document.getElementById("result").value;
    var q;
    if ( q = eval(p))
    {
        document.getElementById("result").value = q;
    }
    else
    {
        document.getElementById("result").value = "Input error";
        document.getElementById("result").value = "";
    }
}

//for sound effect
const sound=document.getElementById("sound");
const correct=document.getElementsByTagName("button");
correct.addEventListener("click",function(){
    sound.play();
});