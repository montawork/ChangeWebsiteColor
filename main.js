// Add Default Local Storage Class on Body
document.body.classList.add(localStorage.getItem('pageColor') || 'red');

let el = document.querySelectorAll('.switcher li');
let classesList = [];
let i;

// Loop on Elements
for (i = 0; i < el.length; i += 1) {
  // Get Classes List
  classesList.push(el[i].getAttribute('data-color'));

  // Add Click Event To Every Element
  el[i].addEventListener(
    'click',
    function () {
      // Rmove All Old Classes
      document.body.classList.remove(...classesList);
      // Add Current Class From LI Data Attribute (data-color)
      document.body.classList.add(this.getAttribute('data-color'));
      // Add Data to Local Storage
      localStorage.setItem('pageColor', this.getAttribute('data-color'));
    },
    false
  );
}
//localStorage.removeItem('pageColor');
//console.log(localStorage.getItem('pageColor'));
