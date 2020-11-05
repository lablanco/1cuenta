const { Alert } = require("bootstrap");

window.sr = ScrollReveal();
sr.reveal('.navbar', {
  duration: 3000,
  origin: 'bottom'
});
window.sr = ScrollReveal();
sr.reveal('.header-content-left', {
  duration: 2000,
  origin: 'top',
  distance: '300px'
});
window.sr = ScrollReveal();
sr.reveal('.header-content-right', {
  duration: 2000,
  origin: 'right',
  distance: '300px'
});
window.sr = ScrollReveal();
sr.reveal('.header-btn', {
  duration: 2000,
  origin: 'right',
  delay: 1000
});
window.sr = ScrollReveal();
sr.reveal('#testimonial', {
  duration: 2000,
  origin: 'left',
  distance: "300px",
  viewfactor: 0.2
});
//smothscrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
});
});

//Grabando datos desde el submit del modal-form.//

document.getElementById('modal-form').addEventListener('submit',saveTask);

function saveTask(e) {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

   const task = {
       name,
       email
   }
    
   if(localStorage.getItem('tasks') === null){
    let tasks = [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

   } else {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
   }

}

