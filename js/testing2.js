// var slideIndex, slides, dots, captiontext;

// function initGallery(){
//     slideIndex = 0;
//     slides = document.getElementsByClassName("imageHolder");
//     slides[slideIndex].style.opacity = 1; /**This makes the current image to show as the opacity that was set to zero by default in the css has now changed to 1.*/

//     /** Here all my caption text are accessed*/
//     captiontext = document.querySelector(".captionHolder .captionText");
//     captiontext.innerText = slides[slideIndex].querySelector('.captionText').innerText;

//     dots = [];
//     var dotContainer = document.getElementById("dotsContainer");

//     for(var i=0; i<slides.length; i++)
//     {
//         var dot = document.createElement("span");
//         dot.classList.add("dots"); /*This is to add css*/
//         dotContainer.append(dot);
//         dots.push(dot);
//     }
//     dots[slideIndex].classList.add("active"); /** Color added is taken from the dots.active in the css */
// }
// initGallery();

// function plusIndex(n){ /**This function is to increment the index of the slide as to enhance click action*/
//     moveSlides(slideIndex + n);
// }

// function moveSlides(n)
// {
//     var i, currentSlide, nextSlide;

//     /* Object for the current and next slide*/
//     var moveSlidesAnimateClass = {
//         forCurrent:"",
//         forNext:""
//     }

//     /* Specification of the direction of the slides*/
//     if(n > slideIndex)
//     {
//         if(n > slides.length){
//             n = 0              /**This is to make it loop*/
//         }
//         moveSlidesAnimateClass.forCurrent = "moveLeftCurrentSlide";
//         moveSlidesAnimateClass.forNext = "moveLeftNextSlide";
//     }else if(n < slideIndex){
//         if(n < 0)
//         {
//             n = slides.length-1;
//         }
//         moveSlidesAnimateClass.forCurrent = "moveRightCurrentSlide";
//         moveSlidesAnimateClass.forNext = "moveRightNextSlide";
//     }
    
//     if(n != slideIndex){
//         next = slides(n);
//         current = slides[slideIndex];
//         for(i = 0; i < slides.length; i++)
//         {
//             slides[i].className = "imageHolder";
//             slides[i].style.opacity = 0;
//             dots[i].classList.remove("active"); /**Removes the previously active grey color*/
//         }
//         current.classList.add(moveSlidesAnimateClass.forCurrent);
//         next.classList.add(moveSlidesAnimateClass.forNext);
//         dots[i].classList.add("active"); /**Adds the currently active grey color*/
//         slideIndex = n;
//     }
// }

/******************************************* JavaScript code for auto image slide show ******************************************/
var slideIndex = 0;
changeImage();

function changeImage() {
    var i;
    var x = document.getElementsByClassName("EducationImage");
    for (i = 0; i < x.length; i++)
	{
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(changeImage, 5000); // Change image every 10 seconds
}

/******************************************* JavaScript code for manual image slide show ******************************************/
    var index = 1;

    function plusIndex(n)
    {
        index = index + 1;
        showImage(index);
    }

    showImage(1);

    function showImage(n)
    {
    var i;
    var x = document.getElementsByClassName("EducationImage");
    if(n > x.length)
        {
            index = 1;
        }if(n < 1)
        {
            index = x.length;
        }

    for(i=0; i<x.length; i++)
        {
            x[i].style.display = "none";
        }
        x[index-1].style.display = "block";
    }
