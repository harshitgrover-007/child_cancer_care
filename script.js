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




document.querySelector("#close").addEventListener("click", function() {
  hidePopup();
});

document.getElementById("rounded").onclick = function() {
  hidePopup();
};

// Function to show the popup
function showPopup() {
  document.getElementById("pop").classList.add("visible");
}

// Function to hide the popup
function hidePopup() {
  document.querySelector(".popup").classList.add("hide-animation");
  setTimeout(function() {
      document.getElementById("pop").style.display = "none";
      document.querySelector(".popup").classList.remove("hide-animation");
  }, 300); // Wait for 300ms for the animation to complete before hiding the popup
}

// Show the popup when the page loads
showPopup();

// Show the popup after 7 seconds
setTimeout(hidePopup, 7000);





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


  
  
  
  

  