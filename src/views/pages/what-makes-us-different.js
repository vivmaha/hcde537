(function createControllers() {
    
    var placeholderParagraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla molestie, nulla sed maximus consequat, massa erat bibendum augue, quis commodo ligula dui nec tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis, ante rutrum volutpat dictum, metus nulla malesuada lectus, eget pharetra leo libero vitae dui. Cras in varius massa, vel fermentum justo. Fusce at dui dui. Vivamus convallis sed risus et aliquam. Aliquam magna mi, suscipit ac venenatis id, tempus sed lacus. Duis accumsan nisi ut eros tincidunt, et dictum nunc aliquam. Duis tincidunt augue eu magna eleifend, vitae laoreet lorem dignissim.';
    var placeholderImage = 'http://placehold.it/400x272';
    var placeholderHeading = 'lorem ipsum dolor';
    
    function createController(title, hero, sections) {
        
        function getSentenceCaseTitle(title) {
            function toSentenceCase(str) {
                return str.substring(0,1).toUpperCase() + str.substring(1);
            }
            return title.split(' ').map(toSentenceCase).join('');
        }
        
        function getControllerName(title) {
            return 'page' + getSentenceCaseTitle(title);
        }
        
        function getHeroImage(title) {
            return 'images/pages-' + getSentenceCaseTitle(title) + '-hero.jpg';
        }
        
        var controllerName = getControllerName(title);
        
        controllers.controller(controllerName, ['$scope',
            function($scope) {
                $scope.hero = hero;
                $scope.hero.image = getHeroImage(title);
                $scope.hero.heading = title;
                $scope.sections = sections;
            }
        ]);
    }
    
    createController(
        'what makes us different',
        {
            paragraph : placeholderParagraph,
        },
        [   
            {
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
            },
        ]
    );
    
    createController(
        'our commitment to learning and growing',
        {
            paragraph : placeholderParagraph,
        },
        [   
            {
                image : placeholderImage,
                heading : placeholderHeading,
                paragraph : placeholderParagraph,
            }, {
                heading : placeholderHeading,
                paragraph : placeholderParagraph,
            }, {
                image : placeholderImage,
                heading : placeholderHeading,
                paragraph : placeholderParagraph,
            }, {
                heading : placeholderHeading,
                paragraph : placeholderParagraph,
            },
        ]
    );
    
    createController(
        'why families love us',
        {
            paragraph : placeholderParagraph,
        },
        [   
            {
                image : placeholderImage,
                heading : placeholderHeading,
                paragraph : placeholderParagraph,
            }, {
                heading : placeholderHeading,
                paragraph : placeholderParagraph,
            }, {
                image : placeholderImage,
                heading : placeholderHeading,
                paragraph : placeholderParagraph,
            }, {
                heading : placeholderHeading,
                paragraph : placeholderParagraph,
            },
        ]
    );
    
    createController(
        'fast facts for new families',
        {
            paragraph : placeholderParagraph,
        },
        [   
            {
                image : placeholderImage,
                heading : placeholderHeading,
                paragraph : placeholderParagraph,
            }, {
                heading : placeholderHeading,
                paragraph : placeholderParagraph,
            }, {
                image : placeholderImage,
                heading : placeholderHeading,
                paragraph : placeholderParagraph,
            }, {
                heading : placeholderHeading,
                paragraph : placeholderParagraph,
            },
        ]
    );
     
})();
