// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });


document.onkeydown = (e) => {
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  )
    return false;
};


function validateBtn() {
  // Get the value entered in the email input
  var email = document.getElementById("emailInput").value;

  // Check if the email is empty or contains only spaces
  if (email.trim() === "") {
    alert("Email is required.");
  } else {
    // Here, you can add the logic to submit the email or perform other actions
    // For example, you could call a function to handle the email submission.
    // handleEmailSubmission(email);
  }
}

const popup = document.querySelector('.popup');
const close = document.querySelector('.close');

  window.onload = function() {
    setTimeout(function(){
      popup.style.display = "block";
    }, 5000)
  }

  close.addEventListener('click', () => {
    popup.style.display = "none";
  })






const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}

function close() {
  mainMenu.style.top = '-150%';
} 


  
  
  
  

  