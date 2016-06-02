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
            paragraph : 'All children embark on their own educational journey with enormous potential, which is nurtured through personal experience. We believe each journey, during these formative years, is more nourishing if it takes place within a warm, deeply-connected, and diverse community.',
        },
        [   
            {
                heading : 'infancy to kindergarten',
                paragraph : 'Each stage of infancy and early childhood brings with it unique and exciting milestones. A Child’s Journey School is committed to the healthy intellectual, social, and emotional growth of each child during these formative years.',
            }, {
                heading : 'joyful approach',
                paragraph : 'A fun, friendly, and energetic environment makes A Child’s Journey School a vibrant place to be. Teachers are enthusiastic about creating an place where children love to learn.',
            }, {
                heading : 'commitment to safety and child security',
                paragraph : 'We are committed to the safety and security of your child. Through continuous supervision, classroom rules, a clean and healthy environment, and teacher-parent communication, you can be rest assured that your child is in good hands.',
            }, {
                heading : 'partnership with families and the community',
                paragraph : 'From the moment you step into A Child’s Journey School, you will witness the strong sense of community that exists here. The welcoming atmosphere and rich social environment created by our devoted faculty and staff, working together with invested families, is defining trait of our program. We encourage active participation of families and want to make sure that everyone is comfortable within the community and our classrooms.',
            },
        ]
    );
    
    createController(
        'our commitment to learning and growing',
        {
        },
        [   
            {
                image : 'images/pages-OurCommitmentToLearningAndGrowing-AchieveDistinction.png',
                heading : 'Achieve Distinction',
                paragraph : 'We celebrate the uniqueness of every child and encourage every child to explore their interests and special talents.',
            }, {
                image : 'images/pages-OurCommitmentToLearningAndGrowing-ExploreOpportunities.png',                
                heading : 'Explore Opportunities',
                paragraph : 'Exposure to a broad range of academic, artistic, and movement activities fosters children’s growth.',
            }, {
                image : 'images/pages-OurCommitmentToLearningAndGrowing-BecomeYourself.png',
                heading : 'Become Yourself',
                paragraph : 'Through maintaining a low student to teacher ratio and taking a personal approach to a student’s school experience, we support the development of each child as they become confident, conscientious, and capable.',
            }, {
                image : 'images/pages-OurCommitmentToLearningAndGrowing-CharacterDevelopment.png',
                heading : 'Commit to Character Development',
                paragraph : 'Strong values and conduct is fundamental to a healthy community and we purposefully encourage self-awareness, teach responsible habits of the mind and body, and promote appropriate behavioral conduct.',
            }, {                
                image : 'images/pages-OurCommitmentToLearningAndGrowing-InteractionTeacherKids.jpg',
                heading : 'Interaction between teachers and kids',
                paragraph : 'Our teachers provide a structured and loving environment for children to be immersed in lessons and engage with one another. Children are encouraged to develop their individual strengths and each child’s contribution to their community is valued. Our teachers provide parents with information about what happened during school hours each day. They want to share each child’s experiences, joys, and accomplishments with families.',
            }, {
                image : 'images/pages-OurCommitmentToLearningAndGrowing-IndividualInstruction.jpg',                
                heading : 'Individualized instruction',
                paragraph : 'The intimate size of our community enables each child to be known, valued, and guided as an individual. Teachers interact with children individually, are familiar with their development, and appreciate their differences.',
            },
        ]
    );
    
    createController(
        'why families love us',
        {
            paragraph : 'Great programs. Fun activities. Caring staff — what’s not to love?<br/><br/>Here’s what some of our current families have to say.',
        },
        [   
            {
                heading: 'Melanie E.',
                image : 'images/pages-WhyFamiliesLoveUs-MelanieE.jpg',                
                paragraph : '“Great school. The staff is absolutely wonderful and all genuinely seem to enjoy doing what they do. My daughter loves going to this school and is absolutely thriving thanks to the excellent curriculum and skilled staff. Two thumbs up from me based on our experience!”',
            }, {
                heading: 'Kate M.',                
                paragraph : '“This is our first time using all-day daycare. We were amazed by how much our toddler loves it. He looks forward to going, always seems happy there and even NAPS for two hours (something he doesn\'t do at home!) The teachers in the duckling room are lovable and caring with our kiddo and we are grateful for their attention. I appreciate the Montessori approach and the large outdoor area. Our kiddo is very active and I want this encouraged as much as possible.”',
            }, {
                image : 'images/pages-WhyFamiliesLoveUs-CaitM.jpg',
                heading : 'Cait M.',
                paragraph : '“My daughter is spelling and starting to read at 3 years old thanks to the wonderful phonics program they offer. My son just turned 2 and is counting, singing the alphabet and recognizing the letters in his name. Needless to say the teachers here take pride in their classrooms and thrive on seeing these kids succeed.”',
            },
            // TODO : add facebook and yelp
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
            {
                heading : 'Mission',
                paragraph : 'Students from 12 weeks to 5 years of age will be equipped with the essential knowledge, skills, curiosity, and strength of character required to flourish as joyous children today and successful adults in the future. An exceptionally low student to teacher ratio ensures that each infant and child is known and valued.',
            }, 
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
        'learning approach',
        {
        },
        [   
            {
                image : 'images/pages-LearningApproach-LearningShouldBeJoyfulAndFun.jpg',
                heading : 'Learning should be joyful and fun',
                paragraph : 'Our play-based curriculum provides the right materials, activities, and guidance to enhance children’s cognitive, language, social-emotional, creative, and physical delopment. Children are encouraged to express themselves through music, painting, drama, song, movement, and play. These activities are intermixed with other learnings key to early success including literacy, mathematics, science, social studies and health and safety.',
            }, {
                image : 'images/pages-LearningApproach-PreparingForKindergarten.jpg',
                heading : 'Preparing for kindergarten',
                paragraph : 'We help children become independent thinkers, problem solvers, and skilled communicators. Our teachers model respectful, effective communication as well as kindness, acceptance, and consideration for others. This helps our kids develop the necessary social-emotional skills critical for success as they transition to kindergarten.',
            }, {
                heading : 'The Reggio Emilia Approach',
                paragraph : 'The Reggio Emilia Approach is based on the principles of respect, responsibility and community. It emphasizes exploration and discovery in a supportive enriching environment based on the interests of children. This Approach surrounds and guides all that we do. It is the primary basis of our program.',
                // todo make this work
                callToAction : {
                    title: 'Learn more about the Reggio Program',
                    link: '/#/learning-approach/reggio'
                }
            }, {
                heading : 'The Montessori Approach',
                paragraph : 'Montessori education helps children become independent through opportunities to move, to dress themselves, to choose what they want to do, and to help the adults with tasks. When the children are able to do things for themselves it boosts their self-belief, self-confidence and esteem with lifelong results. We incorporate the active learning principles of the Montessori program to create a well-rounded individualized educational and developmental experience.',
                // todo make this work
                callToAction : {
                    title: 'Learn more about how Montessori enhances our programs',
                    link: '/#/learning-approach/montessori'
                }
            },
        ]
    );
    
    createController(
        'Montessori',
        {
            paragraph: '“Never help a child with a task at which he feels he can succeed.” – Maria Montessori',
        },
        [   
            {
                heading : 'The Montessori approach',
                paragraph : 'The Montessori Method is a child-centered educational approach that fosters learning by developing a child’s natural eagerness for knowledge. It recognizes a child’s need for independence through initiating learning in a supportive, thoughtfully prepared environment. It is an approach that values the human spirit and the development of the whole child—physical, social, emotional, cognitive. AJCS combines these principles with the Reggio methods is designed to provide a well-rounded, individualized educational and developmental experience.',
            }, {
                heading : 'Individual development through creative learning',
                paragraph : 'The principal aim of AJCS is to assist child in helping him/her to develop each of their potentialities as fully as possible in keeping with their unique pattern of development. Learning and discovery is encouraged through activities that children naturally enjoy. Through this approach, children develop positive attitudes towards themselves, towards learning and towards their environment. This provides a strong foundation for a lifetime of creative learning.',
            }, {
                heading : 'Children learn from each other',
                paragraph : 'For children over the age of 2 ½, we have created a collaborative atmosphere for learning where children learn to help and be helped by other children. They gain an appreciation for their achievement boosting their self-esteem and are naturally challenged by their peers. Older children learn patience, tolerance and serve as role models; younger children learn courtesy, manners and conflict resolution by watching.',
            }, {
                heading : 'Opportunities to become independent',
                paragraph : 'Montessori education helps the child become independent. This is achieved by giving children opportunities. Opportunities to move, to dress themselves, to choose what they want to do, and to help the adults with tasks. When the children are able to do things for themselves there is an increase in their self-belief, self-confidence and esteem that they may carry on throughout their life.',
            }, {
                heading : 'Developing children to their full potential',
                paragraph : 'Every child has a right to develop his or her own fullest potential. We know that all children progress through “sensitive periods” – phases of development appropriate to learning of specific motor and cognitive skills. Montessori provides the framework for instructors to spot these phases and tune lessons to meet individual growth. We also assist the child in sharpening their powers of observation, in developing their initiative in learning and through a wide variety of sensory-discrimination activities which will enable them gain clear perceptions of quality and quantity in their environment.',
            }, 
        ]
    );
    
    createController(
        'Reggio',
        {
            paragraph: 'A Journey full of exploration and discovery',
        },
        [   
            {
                heading : 'The Reggio Emilia Approach',
                paragraph : 'The Reggio Emilia Approach began in the Municipal Infant-Toddler Centers and Preschools of Reggio Emilia, Italy, and has inspired other schools all over the world. It is based on the principles of respect, responsibility and community. It emphasizes exploration and discovery in a supportive enriching environment based on the interests of children. In this approach children have some control over the direction of their learning and have many ways and opportunities to express themselves. Parents are also a key component and are viewed as important partners and collaborators.<br/><br/>This Approach surrounds and guides all that we do. It is the primary basis of our program. Some of the key components incorporated in our program include:',
            }, {
                heading : 'Collaborative cooperative education ',
                paragraph : 'Communication between children, parents, and teachers/staff is emphasized. Everyone works together in spirit of cooperation and collaboration and with a common purpose. The importance of observation and documentation. Teachers create portfolios for each child filled with pictures and observations to document that child’s development and learning. Documentation reflects interactions between teachers and children and among children.',
            }, {
                heading : 'Daily observation and documentation ',
                paragraph : 'Documenting children’s daily experiences and on-going projects allows teachers to gain valuable insight into the thoughts and learning of children. It can inform future activities, materials, and topics for investigation.',
            }, {
                heading : 'The “hundred languages of children”',
                paragraph : 'We emphasize the use of many different “languages” or modes of expression including words, movement, music, drawing, sculpting, painting, collage, dramatic play and writing. Children are encouraged to explore their environment, express themselves and demonstrate their understanding using many different representations.',
            }, {
                heading : 'An enriching environment',
                paragraph : 'The environment is often called the “third teacher.” It is safe, nurturing, engaging, stimulating and creates a feeling of belonging. Supportive learning environments are designed with children in mind; allowing babies, toddlers, & preschoolers to explore, learn and develop. Classrooms are welcoming, comfortable places that promote bonds between staff and young children. There is ample physical space. The layout encourages interaction, communication, and relationships. The arrangement of structures, objects and activities encourages problem solving and new discoveries. There are doors to the outside in each classroom. Entries and hallways as well as classroom walls capture the attention of both children and adults through photographs and displays of children’s work (often accompanied by transcriptions of their discussions).',
            },  
        ]
    );
    
    createController(
        'staff',
        {
        },
        [
            {
                image : 'images/pages-Staff-Lina.png',
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
