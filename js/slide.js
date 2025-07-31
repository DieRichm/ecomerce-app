var slideindex = 1
slideShow(slideindex);

function slideShow(n){
    let slides = document.getElementsByClassName(slides)
    }
        if (n > slides.length) {slideindex = 1 }
        if (n < 1){slideindex = slides.length}

        for(let index = 0; index < slides.length; index++){

        
            slides[index].style.display = "none"
        }

        slides[slideindex-1].style.display = "block"

        function nextslider(n) {
            slideShow(slideindex += n);

            console.log(slideindex)
        }


        

