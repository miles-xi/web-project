imageUrls = ["images/0rose.jpeg", "images/1rose.jpeg",
    "images/2caplace.jpeg", "images/3caplace.jpeg",
    "images/4capilano.jpeg", "images/5capilano.jpeg", 
    "images/6lookout.jpeg", "images/7lookout.jpeg",
    "images/8bcplace.jpeg", "images/9bcplace.jpeg",
    "images/beach.jpeg","images/sunset.jpeg"];

function sizeChangeCallback(size){
    console.log('Screen size is '+ size);

    var oldGallery = document.getElementById("imagesGrid");
    if (oldGallery != null) oldGallery.innerHTML = '';

    var newGallery = PhotoGalleryLib.generateGrid(imageUrls, size);
    if ((oldGallery != null)) oldGallery.appendChild(newGallery);
}

PhotoGalleryLib.onSizeClassChange(sizeChangeCallback);
