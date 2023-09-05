
// const menuToggle = document.querySelector('.menu-toggle');
// const navLinks = document.querySelector('.nav-links');

// menuToggle.addEventListener('click', () => {
//   navLinks.classList.toggle('active');
// });

function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.classList.toggle("show");
    }

    window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
        }
    }
}  





let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("active-dot");
    }

    slideIndex++;

    if (slideIndex > slides.length) {
    slideIndex = 1;
    }

    

    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].classList.add("active-dot");
    setTimeout(showSlides, 3000) 
}

document.addEventListener("DOMContentLoaded", function () {
const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".carousel-dot");

let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
    if (i === index) {
        slide.style.display = "flex";
    } else {
        slide.style.display = "none";
    }
    });

    dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
    });
}

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
    currentSlide = i;
    showSlide(currentSlide);
    });
});

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 1000);
showSlide(currentSlide);
});

// Achivement section

document.addEventListener("DOMContentLoaded", function () {
const slides = document.querySelectorAll(".achievement-slide");
const dots = document.querySelectorAll(".achievement-dot");

let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
    if (i === index) {
        slide.style.display = "flex";
    } else {
        slide.style.display = "none";
    }
    });

    dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
    });
}

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
    currentSlide = i;
    showSlide(currentSlide);
    });
});

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 1000);
showSlide(currentSlide);
});


// js code to add form data into excel sheet


/*
<script>
        const scriptURL = 'https://script.google.com/macros/s/AKfycbziRQLWhC1MSrc0jpq9fXadcoF1C7TYUOtmImRdKqcU4zuji2MJ2eaQdrSb2bM9VUuZ/exec'
        const form = document.forms['submit-to-google-sheet']

        form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message))
        })
    </script>
    */