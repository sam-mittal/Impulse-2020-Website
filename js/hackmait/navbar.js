
window.addEventListener('mousewheel', (event)=> {

    let originalEvent = event.wheelDeltaY;

    if (event.wheelDeltaY >= 0) {
        document.getElementById('navbar').style.opacity = 1

    }
    else {
        document.getElementById('navbar').style.opacity = 0

    }
});
console.log(document.getElementById('nav-menu'))
document.getElementById('nav-menu').addEventListener('click', () => {
    document.getElementById('navs').style.display = "block"
})

document.getElementById('navs').addEventListener('click',()=>{
    document.getElementById('navs').style.display = "none"

})