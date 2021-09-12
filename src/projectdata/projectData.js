const projectData = [
    {
        id: "p1_bootstrap_example",

        title: "Bootstrap example",

        urlSite: "https://p1bootstrapexample.netlify.app/",

        technologies:"HTML, CSS, JS, BOOTSTRAP",

        brief: "In this project I built a web page about a fictitious JS conf with fictional characters just to make use of bootstrap technology.",

        description: "The web page is simple, but friendly. There are some displayable menus, a modal window that appears when you click " +
            "'Register Now' or 'Don’t Miss Out Register Now!'. You can navigate scrolling, using the navigation menu and even jump to the " +
            "'Speakers' section by clicking 'See Speakers'. Finally, if you click the “Presented by” you will be redirected to my Personal website. " +
            "At first, using bootstrap can seem different, but like any other technology is just conquering the learning process. Once you get used " +
            "to it, you see the advantages and disadvantages of using it. While some may see that is a heavy and not original stuff, " +
            "it can save you a lot of time.",

        images: [
             require('../projectdata/projects_images/p1_bootstrap_example_images/p1_bootstrap_example_img_1.JPG').default,
             require('../projectdata/projects_images/p1_bootstrap_example_images/p1_bootstrap_example_img_2.JPG').default,
             require('../projectdata/projects_images/p1_bootstrap_example_images/p1_bootstrap_example_img_3.JPG').default,
             require('../projectdata/projects_images/p1_bootstrap_example_images/p1_bootstrap_example_img_4.JPG').default,
        ]
    },
    {
        id: "p2_data_pagination_and_filtering",

        title: "Data pagination and filtering",

        urlSite: "https://p2datapaginationandfiltering.netlify.app/",

        technologies: "HTML, CSS, JS",

        brief:"In this project I built a basic web app to show some images from and API request. " +
            "The goal was to show the data in a specific format and to allow the user to search for a specific person. " +
            "The page updates according to the search results.",

        description: "Here I show a small list of students with some styling and responsive presentation" +
        "There is also a search bar that allows the user to look for someone and see the list update at the moment",

        images: [
            require('../projectdata/projects_images/p2_data_pagination_and_filtering_images/p2_data_pagination_and_filtering_img_1.JPG').default,
            require('../projectdata/projects_images/p2_data_pagination_and_filtering_images/p2_data_pagination_and_filtering_img_2.JPG').default,
            require('../projectdata/projects_images/p2_data_pagination_and_filtering_images/p2_data_pagination_and_filtering_img_3.JPG').default,
        ]
    },
    {
        id: "p_3_interactive_form_with_regex_validation",

        title: "Interactive form with regex validation",

        urlSite: "https://p3interactiveformwithregexvalidators.netlify.app/",

        technologies: "HTML, CSS, JS",

        brief: "This project consists in a web interactive form that extensively uses JS to achieve validation",

        description: "Even when there are excellent validator packages in npm, one as JS a developer needs to have a basic understanding " +
            "of the full validation process trough regex, so that’s the primary purpose of this project. The \"user-name\" field has real time validation " +
            "that checks if the user has entered a name, if not, there will be an alert icon and message. The \"email\" field also has a real time validation " +
            "that checks if the user has entered a valid email, this is done by using regex testing. This field shows two different messages, " +
            "depending on the user input: \"Email field cannot be empty\" (when length is less than 1) or \"Email address must be formatted correctly\". " +
            "The \"register activities\" checkbox has also a real time validation that is triggered if the user does not select any activity when submitting " +
            "the form. If the credit card payment method is selected, the form validates in real time the following aspects: credit card number validation " +
            "with regex, zip code number validation with regex, cvv number validation with regex",

        images: [
            require('../projectdata/projects_images/p3_interactive_form_with_regex_validators_images/p3_interactive_form_with_regex_validators_img_1.JPG').default,
            require('../projectdata/projects_images/p3_interactive_form_with_regex_validators_images/p3_interactive_form_with_regex_validators_img_2.JPG').default,
            require('../projectdata/projects_images/p3_interactive_form_with_regex_validators_images/p3_interactive_form_with_regex_validators_img_3.JPG').default,

        ]
    },
    {
        id: "p4_omnifoods_responsive_web_page",

        title: "Omnifoods responsive web page",

        urlSite: "https://p4omnifoodsresponsivewebpage.netlify.app/",

        technologies: "HTML, CSS, JS",

        brief: "A responsive web page with a nice professional look",

        description: "This project was part of an extensive course for personal update about HTML, JS and CSS. " +
            "It is a responsive web page about a fictitious company that delivers meals. The principal objective was to achieve a professional " +
            "look even when there is not enough functionality to make it a production ready app. But with a little more work it could easily " +
            "match and outperform commercial pages already active online.",

        images: [
            require('../projectdata/projects_images/p4_omnifoods_responsive_web_page_images/p4_omnifoods_responsive_web_page_img_1.JPG').default,
            require('../projectdata/projects_images/p4_omnifoods_responsive_web_page_images/p4_omnifoods_responsive_web_page_img_2.JPG').default,
            require('../projectdata/projects_images/p4_omnifoods_responsive_web_page_images/p4_omnifoods_responsive_web_page_img_3.JPG').default,
            require('../projectdata/projects_images/p4_omnifoods_responsive_web_page_images/p4_omnifoods_responsive_web_page_img_4.JPG').default,
            require('../projectdata/projects_images/p4_omnifoods_responsive_web_page_images/p4_omnifoods_responsive_web_page_img_5.JPG').default,
            require('../projectdata/projects_images/p4_omnifoods_responsive_web_page_images/p4_omnifoods_responsive_web_page_img_6.JPG').default,
            require('../projectdata/projects_images/p4_omnifoods_responsive_web_page_images/p4_omnifoods_responsive_web_page_img_7.JPG').default,
            require('../projectdata/projects_images/p4_omnifoods_responsive_web_page_images/p4_omnifoods_responsive_web_page_img_8.JPG').default

        ]
    },
    {
        id: "p5_phrase_hunter_game",

        title: "Phrase hunter",

        urlSite: "https://p5phrasehunterwordgame.netlify.app/",

        technologies: "HTML, CSS, JS",

        brief: "A simple game to make use of oop in combination with JS.",

        description: "This project consists of a game to find the correct letters that form a phrase that comes from a movie or a famous situation. " +
            "Whenever the player makes a mistake, loses a heart. The game ends if the player loses all the hearts or if it finds out the correct phrase. " +
            "In any case a simple animation will trigger, and the game would be restarted when the 'start game' button is clicked.",

        images: [
            require('../projectdata/projects_images/p5_oop_word_game_images/p5_oop_word_game_img_1.JPG').default,
            require('../projectdata/projects_images/p5_oop_word_game_images/p5_oop_word_game_img_2.JPG').default,
            require('../projectdata/projects_images/p5_oop_word_game_images/p5_oop_word_game_img_3.JPG').default,
            require('../projectdata/projects_images/p5_oop_word_game_images/p5_oop_word_game_img_4.JPG').default,
            require('../projectdata/projects_images/p5_oop_word_game_images/p5_oop_word_game_img_5.JPG').default,
        ]
    },

    {
        id: "p6_public_api_request",

        title: "Public API request",

        urlSite: "https://p6publicapirequest.netlify.app/",

        technologies: "HTML, CSS, JS",

        brief: "This project is about making an api request to show that data in a nice way. There is a modal window to see the current person and you can " +
            "click in it to navigate along the faces and info.",

        description: "The pieces of the project are made by several functions that work like a perfect team to handle what the user does. For example, " +
            "the modal window works in addition with the searching function so you can navigate only across the found results and not all the faces in the page. " +
            "Every function is called when needed and information pass through them in a some 'state' management attempt.",

        images: [
            require('../projectdata/projects_images/p6_public_api_request_images/p6_public_api_request_img_1.JPG').default,
            require('../projectdata/projects_images/p6_public_api_request_images/p6_public_api_request_img_2.JPG').default,
            require('../projectdata/projects_images/p6_public_api_request_images/p6_public_api_request_img_3.JPG').default,
            require('../projectdata/projects_images/p6_public_api_request_images/p6_public_api_request_img_4.JPG').default,
        ]

    },

    {
        id: "p7_maze_game",

        title: "Maze game",

        urlSite: "https://p7mazegame.netlify.app/",

        technologies: "HTML, CSS, JS",

        brief: "A little game of a maze that makes use of a 2D engine to power this app.",

        description: "Making use of an algorithm the maze is randomly built in each refresh, making sure there is a way out in every construction. " +
            "The controllers of the ball are the arrows. And even with the little bugs I found in the 2D JS engine, the app works very well with a low speed ball." +
            " At the end, if you finished, the maze is destroyed, and a little phrase appears on the screen.",

        images: [
            require('../projectdata/projects_images/p7_maze_game_images/p7_maze_game_img_1.JPG').default,
            require('../projectdata/projects_images/p7_maze_game_images/p7_maze_game_img_2.JPG').default,
            require('../projectdata/projects_images/p7_maze_game_images/p7_maze_game_img_3.JPG').default,
        ]
    },

    {
        id: "p8_react_image_search",

        title: "React image search",

        urlSite: "https://p8reactimagerequest.netlify.app/",

        technologies: "HTML, CSS, JS, REACT",

        brief: "A project to make api requests with axios and React to get some images and show them in a grid according to size.",

        description: " the primary objective of this project is not to make a fancy looking app, but to create some components " +
            "in react and make them interact. The principal one is a class-based component since one as a JS developer should " +
            "know how to use Hooks in combination with class components. One may think that every project works with the most advanced " +
            "and modern React features, but this is not always true. We should be ready to rewrite components from class-based to functional style. ",

        images: [
            require('../projectdata/projects_images/p8_react_image_api_requests_images/p8_react_image_api_requests_img1.JPG').default,
            require('../projectdata/projects_images/p8_react_image_api_requests_images/p8_react_image_api_requests_img2.JPG').default,
            require('../projectdata/projects_images/p8_react_image_api_requests_images/p8_react_image_api_requests_img3.JPG').default
        ]
    },

    {
        id: "p9_react_youtube_api_requests",

        title: "React YouTube api's request",

        urlSite: "https://p9reactvideorequest.netlify.app/",

        technologies: "HTML, CSS, JS, REACT",

        brief: "A project to make api requests with axios and react to get some videos from YouTube and show them in an interactive grid",

        description: "This project' intention is to make some components in ReactJS and handle the state from beginning to end. " +
            "There is good combination among class-based components and functional ones. Whenever the user opens the app, there is " +
            "an initial setup to avoid an empty screen. Once the user makes a search, the videos are shown in the right panel and " +
            "the principal one is shown in the center of the screen. Some functionalities of YouTube are disabled, " +
            "but there are enough videos to see a nice working app.",

        images: [
            require('../projectdata/projects_images/p9_react_video_youtube_requests_images/p9_react_video_youtube_requests_img_1.JPG').default,
            require('../projectdata/projects_images/p9_react_video_youtube_requests_images/p9_react_video_youtube_requests_img_2.JPG').default,
            require('../projectdata/projects_images/p9_react_video_youtube_requests_images/p9_react_video_youtube_requests_img_3.JPG').default,
        ]
    }
]

export default projectData;
