console.log('Loaded!');
//Chane the main text
var element = document.getElementById('main-text');
element.innerHTML = 'NAVEEN';
//Move the image
var img = document.getElementById('madi');


var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft+10;
    img.style.margin = 'marginLeft'+ 'px';
}
img.onclick = function(){
    var interval = setInterval(moveRight,200);
    img.style.marginLeft = '100px';
    
    
}
