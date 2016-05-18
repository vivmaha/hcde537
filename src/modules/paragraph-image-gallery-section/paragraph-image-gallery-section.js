directives.directive('tltParagraphImageGallerySection',
    function() {
        return {
            replace: true,
            restrict: 'E',
            scope: {
                data : '='
            },
            templateUrl: 'modules/paragraph-image-gallery-section/paragraph-image-gallery-section.html'
        };
    }
);