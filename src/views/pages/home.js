controllers.controller('pageHome', ['$scope',
    function($scope) {
        $scope.hero = {
            image : 'images/pages-Homepage-hero.png',
            heading : 'welcome',
            paragraph : 'A Child’s Journey School strives to be a welcoming place for both children and their parents. We are delighted at the enthusiasm we have received from our families and it is our hope that this joy and enthusiasm continues to grow.',
        };
        $scope.blades = [ {
           heading: 'What Makes us Different',
           paragraph: 'All children embark on their own educational journey with enormous potential, which is nurtured through personal experience. We believe each journey, during these formative years, is more nourishing if it takes place within a warm, deeply-connected, and diverse community.',
           image: 'images/pages-Homepage-blade-1.png',
           callToAction: {
               text: 'our signature style',
               link: '/#/home/what-makes-us-different',
           },
        }, {
           heading: 'Our commitment to  learning and growing',
           paragraph: 'The intimate size of our community enables each child to be known, valued, and guided as an individual. Teachers interact with children individually, are familiar with their development, and appreciate their differences.',
           image: 'images/pages-Homepage-blade-2.png',
           callToAction: {
               text: 'learn more',
               link: '/#/home/our-commitment-to-learning-and-growing',
           },
        }, {
           heading: 'why families love us',
           paragraph: '“Great school. The staff is absolutely wonderful and all genuinely seem to enjoy doing what they do. My daughter loves going to this school and is absolutely thriving thanks to the excellent curriculum and skilled staff. Two thumbs up from me based on our experience!” - Melanie E.',
           image: 'images/pages-Homepage-blade-3.png',
           callToAction: {
               text: 'see more reviews',
               link: '/#/home/why-families-love-us',
           },
        }, {
           heading: 'fast facts for new families',
           paragraph: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint',
           image: 'images/pages-Homepage-blade-4.png',
           callToAction: {
               text: 'learn more',
               link: '/#/home/fast-facts-for-new-families',
           },
        }, ];
        for (var i = 0; i < $scope.blades.length; i++) {
            $scope.blades[i].theme = (i % 2 == 0) ? 'dark' : 'light';       
        }
    }
]);