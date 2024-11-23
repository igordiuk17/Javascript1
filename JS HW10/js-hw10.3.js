let currentNunber = +localStorage.getItem('number');
currentNunber += 1;
localStorage.setItem('number',currentNunber);

document.getElementById('target').innerText = currentNunber;
