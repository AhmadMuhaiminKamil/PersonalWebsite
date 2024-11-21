document.addEventListener("DOMContentLoaded", function() {
    
    const currentPage = window.location.pathname.split('/').pop();
    
    
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const currentPage = window.location.pathname.split('/').pop();
    
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});


function showConfirmation(event) {
    event.preventDefault(); 

    Swal.fire({
        title: 'Success!',
        text: 'Form berhasil dikirim',
        icon: 'success',
        confirmButtonText: 'OK'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = 'index.html'; 
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', showConfirmation);
    }
});



window.onload = () => {

    const teksElement = document.querySelector('.teks3');
    function startTeXAnimation() {
        teksElement.style.animation = 'none';  
        teksElement.offsetHeight; 
        teksElement.style.animation = 'typing 1s steps(19, end) 1, blink-caret .5s step-end infinite';  
    }
    
    const typingElement = document.querySelector('.typing-animation');
    function startTypingAnimation() {
        typingElement.style.animation = 'none'; 
        void typingElement.offsetWidth; 
        typingElement.style.animation = 'typing 1s steps(30, end), blink-caret .5s step-end infinite'; 
    }
    
  
    function repeatTypingAnimation() {
        startTeXAnimation(); 
        startTypingAnimation(); 

        setInterval(() => {
            startTeXAnimation();  
            startTypingAnimation();  
        }, 4000); 
    }

    repeatTypingAnimation(); 
};














