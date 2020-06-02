//mouseover
const allAs = document.querySelectorAll('a');
const allAsArray = Array.from(allAs);

for (let i = 0; i < allAsArray.length; i++) {
    allAsArray[i].addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'orange';
        event.target.style.border = '5px solid purple';
    
        setTimeout(function() {
            event.target.style.backgroundColor = "";
            event.target.style.border = "";
        }, 1000);
    }, false);  
}


//keydown
const containerHomeImg = document.querySelector('.container.home img');

function removeBusOnEsc(event) {
    if (event.key === 'Escape') {
        containerHomeImg.style.display = 'none';
    }
}; 
document.addEventListener("keydown", removeBusOnEsc);

const inverseContentImg = document.querySelector('.inverse-content img');

function removeInverseOnEsc(event) {
    if (event.key === 'Escape') {
        inverseContentImg.style.display = 'none';
    }
}; 
document.addEventListener("keydown", removeInverseOnEsc);



//wheel
const letsGoImg = document.querySelector('.img-content');

function zoom(event){
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    letsGoImg.style.transform = `scale(${scale})`;
}

let scale = 1;
letsGoImg.addEventListener('wheel', zoom);

//click
const allBtns = document.getElementsByClassName('btn');
const allBtnsArray = Array.from(allBtns);

function btnOnClick(event) {
    event.target.style.backgroundColor = '#ff00ff';
}
function btnOnClick2(event) {
    event.target.style.backgroundColor = '#ff00bf';
}
function btnOnClick3(event) {
    event.target.style.backgroundColor = '#ff0080';
}

allBtns[0].addEventListener('click', btnOnClick);
allBtns[1].addEventListener('click', btnOnClick2);
allBtns[2].addEventListener('click', btnOnClick3);

//dblclick 
allBtns[0].addEventListener('dblclick', (event) => {
    allBtns[0].classList.toggle('large');
});


const allDestinations = document.querySelectorAll('.destination p');

Array.from(allDestinations).forEach(function(destination) {
    destination.addEventListener('dblclick', btnOnClick);
});








  