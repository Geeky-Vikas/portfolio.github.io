/* =============> OGGLE ICON NAVBAR <============*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');


};

/* =============> Scroll Sections Active link <============*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let leight = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href *= ' + id +']').classList.add('active');
            });
        };
    });
    

/********** sticky navbar ********** */
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

/**********remove toggle icon && navbar when click navbar icon********** */

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');


}; // closing main body 

/*=========================> Scroll Reveal <===================*/

ScrollReveal({
    reset:true,
    distance:'80px',
    duration:2000,
    delay:200


});

ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact', { origin:'bottom' });

ScrollReveal().reveal('.home-content h1, .about-img', { origin:'lef' });
ScrollReveal().reveal('.home-content p, .about-content', { origin:'right' });


/*===============> Typed Animation typed.js <===============*/
const typed = new Typed('.MultipleText', {
    strings: ['ML Engineer', 'Data Scientist','Software Engineer'],
    typedSpeed: 300,
    backSpeed: 100,
    backDelay: 2000,
    loop: true
});

const paragraph = new Typed('.multipara', {
    /* strings: ['तकनीक की उच्चता को देखते हुए,एक रिक्रूटर की राहों में संगीनता हो।AI के साथ बढ़ते हुए संभावनाओं में,वे इन सबकी तलाश में खो जाते हो।', 'इंसानी भावनाओं को समझते हुए,अलग-अलग योग्यताओं की खोज करते हैं। तकनीक की दुनिया को गहराते हुए,उम्मीदों को साकार करते हैं वे भले ढर्रे।',
    'जब दुनिया अद्यतित हो रही है,वे तैयार रहते हैं नये अवसर ढूंढ़ने के।संघर्षों के मध्य उनकी आँखों में,सपनों की आभा पायी जाती है नये रंगों के',
    'आज की परिस्थितियों से जुड़ते हुए,रिक्रूटर एक नयी कहानी बुनते हैं।उनकी तकनीकी दक्षता से प्रेरित होकर,सपनों को वास्तविकता में बदलते हैं वे।',
    'तकनीक की उन्नति के साथ हाथ मिलाकर,रिक्रूटर निरंतर आगे बढ़ते रहते हैं।सबके लिए उम्मीद का प्रकाश बनकर,वे दिखाते हैं सफलता की राह और सफलता के रास्ते।' ], */
    strings : ['Hello, My Name is Vikas Gautam and I am a Data Scientist and work with AI Project as An Intern at Nielit Delhi Center Inderlok (Govt of India). Let me explore more, please scroll-down and know more!'],
    typedSpeed: 100
    // backSpeed: 100,
    // backDelay: 1000,
    // loop: true
    
});
