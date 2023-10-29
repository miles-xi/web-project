window.onload = function(){
    var timer = false;
    var currentIndex = 0; // Add a currentIndex variable

    var closeButton = function(){
        if (timer) clearInterval(timer);
        PhotoGalleryLib.closePresentationModal();
    }
    var previousBtnCb = function(){
        var images = document.querySelectorAll('#imagesGrid img');
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        console.log('currrent index= ' + currentIndex + ' in previousBtnCb');
        var src = images[currentIndex].src;
        PhotoGalleryLib.setModalImgSrc(src);
    }
    var nextBtnCb = function(){
        var images = document.querySelectorAll('#imagesGrid img');
        currentIndex = (currentIndex + 1) % images.length;
        console.log('currrent index= ' + currentIndex + ' in nextBtnCb');
        var src = images[currentIndex].src;
        PhotoGalleryLib.setModalImgSrc(src);
    }

    
    /* the following is for the requirement that when a picture is clicked, 
    enters 'presentation mode' */
    var imgClickCallback = function(index){
        var images = document.querySelectorAll('#imagesGrid img');
        src = images[index].src;
        console.log('index= ' + index + ' in imgClickCallback');
        PhotoGalleryLib.createModal();
        PhotoGalleryLib.setModalImgSrc(src);
        PhotoGalleryLib.openPresentationModal();
        var previousBtn = function(){
            if (index == 0){ 
                index = images.length - 1;
                src = images[index].src;
            }
            else{
                index = index-1;
                src = images[index].src;
            }
            PhotoGalleryLib.setModalImgSrc(src);
        }

        var nextBtn = function(){
            if (index == images.length - 1){
                index = 0;
                src = images[index].src;
            }
            else{
                index = index + 1;
                src = images[index].src;
            }
            PhotoGalleryLib.setModalImgSrc(src);
        }

        PhotoGalleryLib.initModal(closeButton,
            previousBtn, nextBtn);
    }
    PhotoGalleryLib.addImageClickHandlers(imgClickCallback);
    
    window.addEventListener('resize', function() {
        PhotoGalleryLib.addImageClickHandlers(imgClickCallback);
    });

    //the following is for 'automatic slide show'
    function initSlideshow(){
        var images = document.querySelectorAll('#imagesGrid img');
        currentIndex = 0;
        src = images[currentIndex].src;
        console.log('current index= ' + currentIndex + ' in initSlidehow');
        PhotoGalleryLib.createModal();
        PhotoGalleryLib.setModalImgSrc(src);
        PhotoGalleryLib.openPresentationModal();
        PhotoGalleryLib.initModal(closeButton,
            previousBtnCb, nextBtnCb);        
        }

    function makeSlideshow(){
        var images = document.querySelectorAll('#imagesGrid img');
        timer = setInterval(function(){
            currentIndex = (currentIndex + 1) % images.length;
            console.log('currrent index= ' + currentIndex + ' in timer');
            var src = images[currentIndex].src;
            PhotoGalleryLib.setModalImgSrc(src);
        }, 3000);
    }

    var slideshowButton = document.getElementsByClassName('slideshowButton')[0];
    slideshowButton.addEventListener('click', function(){
        initSlideshow();
        makeSlideshow();
    });

}