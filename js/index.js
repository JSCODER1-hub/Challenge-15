const bar = document.querySelector("main .share .bar");
const icon = document.querySelector("main .share .icon");

icon.onclick = function (){
    if (bar.style.display == "flex")
    bar.style.display = "none"
    else{
        bar.style.display = "flex"
    }
}