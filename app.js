document.onkeydown = function(e){
    console.log("Key code is : ",e.keyCode);
    if (e.keyCode == 38){
        dino = document.querySelector(".dino");
        dino.classList.add("animationDino");
        setTimeout(() => {
            dino.classList.remove("animationDino");
        }, 700);
    }
}