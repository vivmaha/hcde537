controllers.controller('pageHome', ['$scope',
    function($scope) {
        $scope.hero = {
            image : 'images/homepage-hero.png',
            heading : 'welcome',
            paragraph : 'A Child’s Journey School strives to be a welcoming place for both children and their parents. We are delighted at the enthusiasm we have received from our families and it is our hope that this joy and enthusiasm continues to grow.',
        };
        $scope.blades = [ {
           heading: 'What Makes us Different',
           paragraph: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint',
           callToAction: 'some button label',
        }, {
           heading: 'Our commitment to  learning and growing',
           paragraph: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint',
           callToAction: 'some button label',
        }, {
           heading: 'Why people think we are  so great',
           paragraph: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint',
           callToAction: 'some button label',
        }, {
           heading: 'Fast Facts',
           paragraph: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint',
           callToAction: 'some button label',
        }, ];
        for (var i = 0; i < $scope.blades.length; i++) {
            $scope.blades[i].theme = (i % 2 == 0) ? 'dark' : 'light';       
        }
    }
]);