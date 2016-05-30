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
                
                for (var i = 0; i < sections.length; i++) {
                    sections[i].heading = sections[i].heading.replace(/ /g, '&nbsp;');
                }
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
    
    createController(
        'our school',
        {
        },
        [   
            // todo: classes heading
            {
                image : 'images/pages-OurSchool-Infants.jpg',
                heading : 'Infants',
                paragraph : 'Our infant rooms provide a peaceful, loving flexible environment where babies (aged 12 weeks to 24 months) can explore and feel safe and secure. A high level of personal contact and exposure to music, colorful toys, books, and nature fosters your baby’s physical, emotional, social, and cognitive development. Each child in our care is nurtured with respect and affection.',
            }, {
                heading : 'Preschool',
                paragraph : 'The preschool environment is positive, supportive and non-competitive – and includes a focus on exploration and discovery.  Daily creative play, story time, music and art activities, and outdoor play encourages natural independence and helps children to progress toward important milestones.',
            }, {
                image : 'images/pages-OurSchool-PreKindergarten.jpg',
                heading : 'Pre-Kindergarten',
                paragraph : 'Pre-kindergarten groups focus on growing your child’s language, literacy, early math, and social skills and also builds their knowledge of science, drama, and art. Through hands on learning and learning through indoor and outdoor play, children develop practical skills for independence, fine and gross motor skills, leadership skills, and are well prepared for Kindergarten.',
            }, {
                heading : 'Kindergarten',
                paragraph : 'Our Kindergarten program introduces students to more sophisticated and complex materials and and helps them to develop enhanced knowledge in reading, language, mathematics, science, geography, while also building upon their social foundation and artistic inclinations. Classes are guided by sensitive periods of development to help students acquire the skills they need for the rest of their years in an educational environment.',
            },
            // todo: schedule link
            // todo: facilities heading    
            {
                image : 'images/pages-OurSchool-classrooms.jpg',
                heading : 'Classrooms',
                paragraph : 'Our classrooms are safe, clean, and stimulating places for each child to learn and grow. A meaningful classroom experience is encouraged through different “centers”, which are learning focused and integrate features to develop the cognitive, social, physical, emotional, language, and self-help abilities of each child.',
            }, {
                image : 'images/pages-OurSchool-OurdoorPlaySpaces.jpg',
                heading : 'Outdoor Play Spaces',
                paragraph : 'Our beautiful outdoor classrooms create a fun and engaging environment for children to explore nature together.',
            },
            // todo: organic food heading,
            {
                heading: 'organic food',
                paragraph: 'Mealtime at A Child’s Journey School is truly a delight. The delicious meals and snacks that we provide are created from fresh, organic, and local ingredients sold by local purveyors (within 50 miles) and are homemade daily by our talented chef. We believe in offering nutritious and wholesome meals that meet children’s nutritional requirements. We encourage healthy food choices and emphasize the joy of eating.<br/><br/>In the upcoming years, we will be creating on-site gardens to grow some of our own food. Children will have hands-on experience with planting, upkeep, harvesting, as well as preparing and tasting foods.'
            },
            // todo: academic enrichment heading
            {
                heading:'academic enrichment',
                paragraph: 'Mealtime at A Child’s Journey School is truly a delight. The delicious meals and snacks that we provide are created from fresh, organic, and local ingredients sold by local purveyors (within 50 miles) and are homemade daily by our talented chef. We believe in offering nutritious and wholesome meals that meet children’s nutritional requirements. We encourage healthy food choices and emphasize the joy of eating.<br/><br/>In the upcoming years, we will be creating on-site gardens to grow some of our own food. Children will have hands-on experience with planting, upkeep, harvesting, as well as preparing and tasting foods.'
            },
            // todo: enrichment programs heading
            {
                image : 'images/pages-OurSchool-SpecialActivities.jpg',
                heading : 'Special Activities',
                paragraph : 'Field trips, community events, and other activities are scheduled throughout the year and expose children to a different learning environment',
            }, {
                image : 'images/pages-OurSchool-ExtraSensoryActivities.jpg',
                heading : 'Extra Sensory Activities',
                paragraph : 'Lessons to help children refine their senses span development of auditory, visual, tactile, olfactory and taste. Students work on recognition of identities, contrasts, similarities and differences in the size, color, and shape of objects through observation, consideration, reflection. Sensory training is key for bringing clarity and order to perceived discrimination of size, color, tactile impressions, shape, smells, tastes and sounds. These skills are the basis for mathematics and abstract reasoning.',
            }, {
                heading : 'Weekly Yoga',
                paragraph : 'Yoga is integrated into the curriculum as an introduction to healthy and mindful movement. Through these sessions, children gain confidence, learn how to exercise, and are able to develop concentration.',
            }, {
                heading : 'Drama Classes',
                paragraph : 'Drama classes allow children to engage in structured creative activities and provide an outlet to express themselves while developing artistic, physical, cognitive, and inter/intrapersonal skills.',
            },
        ]
    );
    
    createController(
        'staff',
        {
        },
        [
            {
                image : placeholderImage,
                heading : 'Linda, Owner/Director',
                paragraph : 'Linda graduated from Gonzaga University with a BS in Cognitive Psychology and a minor in Art. She completed her Masters in Marriage & Family Counseling. Linda began her career with Group Health, addressing the needs and supporting teens, youth and parents living in the community.<br/><br/>In her new position as Director/Owner of ‘A Child’s Journey School’, Linda is excited to fulfill a personal goal to help other families educate, develop, and raise their children. With a love for children and gifts of patience and communication and a creative art talent, Linda brings many diverse skills to the school. Linda certified as a Montessori teacher in 2008 and after completing her internship was rewarded with lead teacher classroom roles followed by an Assistant Montessori Director position. Linda is equally qualified for running the business and more importantly the business of education and nurturing children.<br/><br/>A longtime Pacific Northwest resident along with her husband Phil and 4 sons, Linda spends her free time volunteering in the community, supporting her sons sporting events and playing tennis. She is an avid reader and spent some of her early career in the Peace Corps.',
            }, {
                image : 'images/pages-Staff-JannaAllan.jpg',
                heading : 'Janna Allan',
                paragraph : 'Janna has been working with children for the past 3 years and greatly enjoys guiding children’s growth. She believes that infancy and preschool age is a crucial time and feels lucky to help each child become a confident learner. Janna is also a mother to two wonderful children.',
            }, {
                image : 'images/pages-Staff-TinaChasengnou.jpg',
                heading : 'Tina Chasengnou',
                paragraph : 'Tina is the instructor for the Ducklings class and has been caring for children for over 8 years. She looks forward to many rewarding years to come. She is the 4th child of 7 siblings and loves spending time with her big family.',
            }, {
                image : 'images/pages-Staff-KarenModdejonge.jpg',
                heading : 'Karen Moddejonge',
                paragraph : 'Karen has her BA in psychology and understands the different phases of infancy and early childhood extremely well. She finds that working with children has been exceptionally fulfilling and fun and her love of teaching is apparent during every lesson. She spends as much time as she can with her daughter, who was born in 2015.',
            }, {
                image : 'images/pages-Staff-BeckyVaughan.png',
                heading : 'Becky Vaughan',
                paragraph : 'Becky has been working with children for over 20 years.   You can find her assisting teachers in all of the different classrooms. Her commitment to A Child’s Journey School philosophy of creating an environment that supports the whole child, is something she strongly believes in and continuously strives to achieve on a daily basis. Becky also enjoys spending time with her 11 year old daughter and adult son.',
            }, {
                image : 'images/pages-Staff-LeslieWest.jpg',
                heading : 'Leslie West',
                paragraph : 'Leslie has been working with children for nearly 20 years. Her daughter is an alumnus of A Child’s Journey School, and she greatly values the strength of A Child’s Journey School’s community. Phonics instruction is one of the her favorite parts of the program. She especially enjoys watching as each child’s intellect, personality, and confidence blossom.',
            },
        ]
    );
     
})();
