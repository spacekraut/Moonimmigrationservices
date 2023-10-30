const maleCheckbox = document.getElementById('flexCheckDefault');
const femaleCheckbox = document.getElementById('flexCheckChecked');

maleCheckbox.addEventListener('change', function () {
  if (maleCheckbox.checked) {
    femaleCheckbox.checked = false;
  }
});

femaleCheckbox.addEventListener('change', function () {
  if (femaleCheckbox.checked) {
    maleCheckbox.checked = false;
  }
});


function changeImage(){
    var img = document.getElementById('responsive-shrek');
    img.src = 'Shrek_(character).png'
}

const shrek = document.getElementById('shrek-btn');

// shrek.addEventListener('');


const startingMinutes = 10;
let time = startingMinutes * 60; 

const countdownEL = document.getElementById('countdown');

setInterval(updateCountdown, 1000);

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60; 


  countdownEL.innerHTML = `${minutes}: ${seconds}`;
  time--;

};

