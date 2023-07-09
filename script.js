// Get the input field
var input = document.getElementById("search");
           
// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("image-button").click();
  }
});


function FocusOnInput()
{
     document.getElementById("search").focus();
}
const colors = [
  '#711c91',
  '#ea00d9',
  '#0abdc6',
  '#133e7c'
];

createSquare = () => {
  const section = document.querySelector('section');
  const square = document.createElement('figure');
  
  const size = Math.random() * 50;
  
  square.style.width = 20 + size + 'px';
  square.style.height = 20 + size + 'px';
  
  square.style.top = Math.random() * innerHeight + 'px';
  square.style.left = Math.random() * innerWidth + 'px';
  
  square.style.background = colors[Math.floor(Math.random() * colors.length)];
  section.appendChild(square);
  
  setTimeout(() => {
    square.remove()
  }, 5000);
}

setInterval(createSquare, 150);

    let myDate = new Date();    
    var hrs = myDate.getHours();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dayName = days[new Date().getDay()];

    var greet;


    if (hrs < 12)

        greet = 'Good Morning';

    else if (hrs >= 12 && hrs <= 17)
        greet = 'Good Afternoon';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Good Evening';

    document.getElementById('lblGreetings').innerHTML =
        '<b>' + greet + '</b><b> Sir ! </b>';

    document.getElementById('lblDay').innerHTML = 
    '<br> Today is ' + dayName + ' !';

    const tap = document.querySelector('.profile');
  tap.addEventListener('click', function(){
       const toggleMenu = document.querySelector('.menu');
  toggleMenu.classList.toggle('active');
});

const bodyElement = document.querySelector("body");
const menuToggle = document.querySelector(".profile");
const heroElement = document.querySelector(".hero");

menuToggle.addEventListener("click", function () {
  bodyElement.classList.toggle("is-open");
  heroElement.classList.add("is-open");
});

//Add eventListener to the window object to close when we click outside
window.addEventListener("click", function (e) {
  let clickedElement = e.target;

  if (clickedElement.matches(".is-open")) {
    bodyElement.classList.remove("is-open");
    heroElement.classList.remove("is-open");
  }
});
function handleClick() {
  // Handle the click event here
  console.log("The left div was clicked!");
  // You can perform any desired action when the div is clicked
}