controllers.controller('home', ['$scope',
    function($scope) {
        
        function QuotationSellingPoint(callToAction, quote, attribution, attributionDescription) {
            this.type = 'quotation';
            this.callToAction = callToAction;
            
            this.quote = {
                text : quote,
                attribution : {
                    text : attribution,
                    caption : attributionDescription
                }
            };
        }
        
        function ChecklistSellingPoint(callToAction, title, items) {
            this.type = 'checklist';
            this.callToAction = callToAction;
            
            this.checklist = {
                title : title,
                items: items,
            }
        }
        
        $scope.content = {};
        $scope.content.sellingPoints = [ 
            new QuotationSellingPoint(
                'Learn more about our classrooms',
                'Jack is always happy when I pick him up!',
                '-Karen Smith',
                'Mom to 4-month old Jack'
            ),
            new QuotationSellingPoint(
                'Learn about our learning environment',
                'Olivia already knows the periodic table, and she\'s only four!',
                '-Will Edwards',
                'Dad to 4-year old Olivia'
            ),
            new ChecklistSellingPoint(
                'See our menu',
                'Our food is:',
                ['organic', 'fresh', 'homemade']
            ),
            new ChecklistSellingPoint(
                'Meet the staff of ACJS',
                'Meet the owner Linda',
                ['Always available', 'Commited to ACJS', 'Passionate']
            ),            
        ];
    }
]);
