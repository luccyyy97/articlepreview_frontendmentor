const shareIcon = document.getElementById("share-icon");

shareIcon.addEventListener("click", function(event) {
        const displayCheck = document.querySelectorAll(".pop-up");
        const shareIcon = document.querySelectorAll(".share-icon-wrapper");

        if (displayCheck[0].style.opacity == 0) {
            displayCheck[0].style.opacity = 1;
            document.getElementById("share-icon").style.fill = "#FFF";
            displayCheck[0].style.visibility = "visible";
            shareIcon[0].classList.add("toggler");

        } else {
            displayCheck[0].style.opacity = 0;
            document.getElementById("share-icon").style.fill = "#6E8098";
            displayCheck[0].style.visibility = "hidden";
            shareIcon[0].classList.remove("toggler");
        } 
});

// var color = window.getComputedStyle(document.querySelector('.element'), ':before').getPropertyValue('color');




