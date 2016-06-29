console.log('script.js loaded');

if (!localStorage.getItem('count')) {
  localStorage.setItem('count', 0);  
}

var countNumber = localStorage.getItem('count');

var countPiece = document.getElementById('count');
var upButton = document.getElementById('upButton');
var downButton = document.getElementById('downButton');

function updateCountNumber() {
  localStorage.setItem('count', countNumber);
  var newCount = localStorage.getItem('count');
  countPiece.innerHTML = newCount;
  console.log('The count is now: ' + newCount);
}

updateCountNumber();

upButton.addEventListener('click', function() {
  countNumber++;
  updateCountNumber();
});

downButton.addEventListener('click', function() {
  countNumber--;
  updateCountNumber();
});
