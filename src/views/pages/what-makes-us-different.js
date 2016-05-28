controllers.controller('pageWhatMakesUsDifferent', ['$scope',
    function($scope) {
        
        var placeholderParagraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla molestie, nulla sed maximus consequat, massa erat bibendum augue, quis commodo ligula dui nec tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis, ante rutrum volutpat dictum, metus nulla malesuada lectus, eget pharetra leo libero vitae dui. Cras in varius massa, vel fermentum justo. Fusce at dui dui. Vivamus convallis sed risus et aliquam. Aliquam magna mi, suscipit ac venenatis id, tempus sed lacus. Duis accumsan nisi ut eros tincidunt, et dictum nunc aliquam. Duis tincidunt augue eu magna eleifend, vitae laoreet lorem dignissim.';
        var placeholderImage = 'http://placehold.it/400x272';
        
        $scope.hero = {
            image : 'images/pages-WhatMakesUsDifferent-hero.jpg',
            heading : 'what makes us different',
            paragraph : placeholderParagraph,
        };
        $scope.sections = [ {
            image : placeholderImage,
            heading : 'infancy to kindergarten',
            paragraph : placeholderParagraph,
        }, {
            heading : 'joyful approach',
            paragraph : placeholderParagraph,
        }, {
            image : placeholderImage,
            heading : 'commitment to safety and child security',
            paragraph : placeholderParagraph,
        }, {
            heading : 'partnership with families and the community',
            paragraph : placeholderParagraph,
        },]
    }
]);