document.addEventListener('DOMContentLoaded', function () {
    if (typeof ($.fn.lightGallery) === 'function') {
        $('.article').lightGallery({ selector: '.gallery-item'});
    }
    if (typeof ($.fn.justifiedGallery) === 'function') {
        if ($('.justified-gallery > p > .gallery-item').length) {
            $('.justified-gallery > p > .gallery-item').unwrap();
        }
        $('.justified-gallery').justifiedGallery({rowHeight:160, margins:4,
            thumbnailPath: function (currentPath, width, height, image) {
                if (Math.max(width, height) < 400) {
                    return currentPath;
                } else { 
                    return currentPath + "!photo_thumb";
                }
              }
        });
    }
});