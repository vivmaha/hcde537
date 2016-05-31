controllers.controller('pageTuition', ['$scope',
    function($scope) {
        
        $scope.sections = [
            {
                heading: 'tuition',
                paragraph: 'Tuition can be paid monthly or annually as a lump sum.',
                table: {
                    head: [
                        'class',
                        'age',
                        '$ per month',
                        '$ per year',
                    ],
                    body : [ 
                        [
                            'Infants', 
                            '12 weeks to 2 years',
                            '$787.78',
                            '$7,090'
                        ],
                        [
                            'Preschool',
                            '2 years to 3 years',
                            '$527.78',
                            '$4,750',
                        ],
                        [
                            'Pre-Kindergarten',
                            '4 years to 5 years',
                            '$644.45',
                            '$5,800',
                        ],
                        [
                            'Kindergarten',
                            '5 years',
                            '$787.78',
                            '$7,090',
                        ]
                    ],
                }
            }, 
            {
                heading: 'fees',
                paragraph: 'The Activity Fee helps defray the additional costs of field trips and classroom supplies to enhance your child’s educational experience',
                table: {
                    head: [
                        'class',
                        '$ per month',
                        '$ per year',
                    ],
                    body : [ 
                        [
                            'All',
                            '$787.78',
                            '$7,090'
                        ],
                    ],
                }
            }, 
        ]; 
    }
]);