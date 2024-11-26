
function color(z) {
    let a = getComputedStyle(z);
    let b = a.backgroundColor;
    document.getElementsByTagName("BODY")[0].style.backgroundColor=b;
}