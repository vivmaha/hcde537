controllers.controller('home', ['$scope',
    function($scope) {
        
        function QuotationSellingPoint(type, callToAction, quote, attribution, attributionDescription) {
            this.type = type;
            this.callToAction = callToAction;
            
            this.quote = {
                text : quote,
                attribution : {
                    text : attribution,
                    caption : attributionDescription
                }
            };
        }
        
        $scope.content = {};
        $scope.content.sellingPoints = [ 
            new QuotationSellingPoint(
                'quotation',
                'Learn more about our classrooms',
                'Jack is always happy when I pick him up!',
                '-Karen Smith',
                'Mom to 4-month old Jack'
            ),
            new QuotationSellingPoint(
                'quotation',
                'Learn about our learning environment',
                'Olivia already knows the periodic table, and she\'s only four!',
                '-Will Edwards',
                'Dad to 4-year old Olivia'
            ),
        ];
    }
]);
