    $(document).ready(function () {
        $('.slick').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            dots: false,
            infinite: true,
            arrows: false,
            speed: 1000,
            cssEase: 'ease-in-out',
            
            responsive: [
                {
                    breakpoint: 768, // Breakpoint for mobile devices
                    settings: {
                        slidesToShow: 1, // Show only 1 slide on mobile
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });

const faqItemHead = document.querySelectorAll('.faq-item-head');


faqItemHead.forEach((head, index) => {
    head.addEventListener('click', () => {
        let icon = head.querySelector('.faq-item-icon').firstElementChild;
        if(icon.className == "fa fa-chevron-down"){
            head.nextElementSibling.classList.add('show-para');
            icon.className = "fa fa-chevron-up";
        } else if(icon.className == "fa fa-chevron-up"){
            head.nextElementSibling.classList.remove('show-para');
            icon.className = "fa fa-chevron-down";
        }
    });
});

function isInViewport(element, offset = 100) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top + offset >= 0 &&
      rect.left >= 0 &&
      rect.bottom - offset <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function handleScrollAnimations() {
    const faqItems = document.querySelectorAll('.faq-item');
    const headings = document.querySelectorAll('.fade-zoom-heading');
    const videoDiv = document.querySelector('.fade-zoom-video');
    
    if (isInViewport(videoDiv)) {
      videoDiv.style.opacity = '1';
      videoDiv.style.transform = 'scale(1)';
    }
    
    headings.forEach((heading) => {
      if (isInViewport(heading)) {
        heading.style.opacity = '1';
        heading.style.transform = 'scale(1)';
      }
    });
    
    faqItems.forEach((item) => {
      if (isInViewport(item)) {
        item.style.opacity = '1';
        item.style.transform = 'scale(1)';
      }
    });
  }
  
  window.addEventListener('scroll', handleScrollAnimations);
  handleScrollAnimations(); // Apply animations initially
  
  // You can also add an event listener for the "resize" event to handle animations if the window size changes
  window.addEventListener('resize', handleScrollAnimations);

  
  const menuButton = document.getElementById('menu');
const closeButton = document.getElementById('close');
const menuSection = document.querySelector('.menu');

menuButton.addEventListener('click', () => {
  menuSection.classList.remove('d-none');
  menuSection.classList.add('slide-in'); // Add slide-in animation class
});

closeButton.addEventListener('click', () => {
  menuSection.classList.remove('slide-in'); // Remove slide-in class
  
});
