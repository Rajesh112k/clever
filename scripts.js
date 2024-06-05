let slideIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.card');
  
  if (index >= slides.length) {
    slideIndex = 0;
  }
  
  if (index < 0) {
    slideIndex = slides.length - 1;
  }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  
  slides[slideIndex].style.display = 'block';
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

document.addEventListener('DOMContentLoaded', function () {
  showSlide(slideIndex);
});


// Get references to the buttons and the image tag
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const mainImage = document.getElementById("mainImage");

// Add event listeners to each button
btn1.addEventListener("click", function() {
  mainImage.src = "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64bb2507621d0bf7da369_Demand%20forecasting-p-1080.webp";
});

btn2.addEventListener("click", function() {
  mainImage.src = "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64b9dd79c71fad2f6ea24_S%26OP-p-1080.webp";
});
btn3.addEventListener("click", function() {
    mainImage.src = "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64bb2507621d0bf7da369_Demand%20forecasting-p-1080.webp";
  });
  
  btn4.addEventListener("click", function() {
    mainImage.src = "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64b9dd79c71fad2f6ea24_S%26OP-p-1080.webp";
  });
  btn5.addEventListener("click", function() {
    mainImage.src = "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64bb2507621d0bf7da369_Demand%20forecasting-p-1080.webp";
  });
  
  btn6.addEventListener("click", function() {
    mainImage.src = "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64b9dd79c71fad2f6ea24_S%26OP-p-1080.webp";
  });
  btn7.addEventListener("click", function() {
    mainImage.src = "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64bb2507621d0bf7da369_Demand%20forecasting-p-1080.webp";
  });
  
  
// function applyInitialColor() {
//     // Get the initially opened accordion item (if any)
//     const initiallyOpenedItem = document.querySelector('.accordion-item.show .accordion-button');
//     // If an initially opened item exists, apply color to its button
//     if (initiallyOpenedItem) {
//       initiallyOpenedItem.classList.add('active');
//     }
//   }
function toggleColor(itemNumber) {
    // Reset color for all accordion buttons
    document.querySelectorAll('.accordion-button').forEach(function(button) {
      button.classList.remove('active');
    });
    // Set color for the clicked accordion button
    document.querySelector('#accordionExample .accordion-item:nth-child(' + itemNumber + ') .accordion-button').classList.add('active');
  }
//   applyInitialColor();
