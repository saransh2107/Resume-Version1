var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;
console.log(navMenuAnchorTags);
for (var i = 0; i < navMenuAnchorTags.length; i++) {
    navMenuAnchorTags[i].addEventListener('click', function(event) {
        event.preventDefault(); //to stop the default behaviour of the element
        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);
        console.log(targetSection);
        interval = setInterval(scrollVertically, 20,targetSection)
    });
}


function scrollVertically(targetSection) {

    var targetSectionCooordinates = targetSection.getBoundingClientRect();
    if (targetSectionCooordinates.top <= 0) {
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 50);

}
var progressBars=document.querySelectorAll('.skill-progress > div');
var skillContainer=document.getElementById('skill-container');
window.addEventListener('scroll',checkScroll);
var animationDone=false;

function initialiseBars(){
    for(let bar of progressBars){
        bar.style.width=0+'%';

    }
}
initialiseBars();

function checkScroll(){
    //We have to check whether skill container is visible
    var coordinates=skillContainer.getBoundingClientRect();
    console.log(coordinates);
    if(!animationDone && coordinates.top<window.innerHeight){
        animationDone=true;
        fillBars();
    }
}
function fillBars(){
    for(let bar of progressBars){
        let targetWidth=bar.getAttribute('data-bar-width');
        console.log(targetWidth);
        let currentWidth=0;
        let interval=setInterval(function(){
            if(currentWidth>targetWidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width=currentWidth+'%';
        },10);

    }

}

function sendEmail() {
    var mail = 'mailto:saranshbatham21@gmail.com';
    var a = document.createElement('a');
    a.href = mail;
    a.click();
    window.alert('Success');
};