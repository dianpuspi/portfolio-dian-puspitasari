let menuBtn = document.querySelector('#menu-btn');
let closeBtn = document.querySelector('#close-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () =>{
    navbar.classList.add('active');
}

closeBtn.onclick = () =>{
    navbar.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

// Greeting
function getGreeting() {
    const currentHour = new Date().getHours();
    let greeting;

    if (currentHour >= 5 && currentHour < 12) {
        greeting = "Hello, Good Morning! My Name Is";
    } else if (currentHour >= 12 && currentHour < 17) {
        greeting = "Hello, Good Afternoon! My Name Is";
    } else if (currentHour >= 17 && currentHour < 20) {
        greeting = "Hello, Good Evening! My Name Is";
    } else {
        greeting = "Hello, Good Night! My Name Is";
    }

    return greeting;
}

document.getElementById("greeting").innerText = getGreeting();

  // Clear form before unload
  window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
      form.reset();
    }
  };