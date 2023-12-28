// lenteles uzpildymas
function submitForm() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var subscriptionType = document.querySelector('input[name="sub"]:checked');

    if (firstName === '' || lastName === '' || phoneNumber === '' || !subscriptionType) {
        alert('uzpildykite visus laukelius!');
        return;
    }

    alert('uzpildytas');
}

// burbuliuku paspaudimas
document.addEventListener('DOMContentLoaded', function () {
    const bullets = document.querySelectorAll('.fixed-bullet');

    bullets.forEach(bullet => {
        bullet.addEventListener('click', function () {
            // Toggle 'active' class on click
            bullet.classList.toggle('active');
        });
    });

    // navigacijos scrolinimas
    const navigationLinks = document.querySelectorAll('.top-menu-button');

    document.addEventListener('click', function (event) {
        const targetLink = event.target.closest('.top-menu-button');
        if (targetLink) {
            event.preventDefault();
            const targetSectionId = targetLink.getAttribute('data-section-id');
            scrollToSection(targetSectionId);
        }
    });

    function scrollToSection(sectionId) {
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    }
});


// section3

var tabs = document.getElementsByClassName("swipe-button");

for (var x of tabs) {
    x.addEventListener("click", function () {
        for (var x of tabs) {
            x.classList.remove("active");
        }
        var index = this.getAttribute("index");
        swiper.slideTo(index, 1000);
        this.classList.add("active");
    });
}


// JavaScript
// document.addEventListener('DOMContentLoaded', function () {
//     const buttons = document.querySelectorAll('.swipe-button');
//     const texts = document.querySelectorAll('.swiper-text');
  
//     buttons.forEach(button => {
//       button.addEventListener('click', function () {
//         // Paslėpkite visus tekstus
//         texts.forEach(text => {
//           text.classList.remove('visible');
//         });
  
//         // Raskite paspausto mygtuko indeksą
//         const index = this.getAttribute('index');
  
//         // Parodykite atitinkamą tekstą
//         const selectedText = document.getElementById(`text-${index}`);
//         selectedText.classList.add('visible');
//       });
//     });
//   });
  