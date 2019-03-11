import agencyMaiLogo from '../assets/images/portfolio/agencymai.jpg';
import autoAuctionMallLogo from '../assets/images/portfolio/autoauctionmall.png';
import automatedInsightsLogo from '../assets/images/portfolio/automatedinsights.png';
import carsonCorporationLogo from '../assets/images/portfolio/carsoncorporation.png';
import directLiquidationLogo from '../assets/images/portfolio/directliquidation.png';
import educatedBodyLogo from '../assets/images/portfolio/educatedbody.svg';
import froggerCloneLogo from '../assets/images/portfolio/froggerclone.png';
import goTRGLogo from '../assets/images/portfolio/gotrg.svg';
import hulqAppLogo from '../assets/images/portfolio/hulqapp.svg';
import hulqLandingLogo from '../assets/images/portfolio/hulqlanding.png';
import mpactDigitalLogo from '../assets/images/portfolio/mpactdigital.png';
import neighborhoodMapLogo from '../assets/images/portfolio/neighborhoodmap.png';
import riverAndWolfLogo from '../assets/images/portfolio/riverandwolf.svg';
import room2Logo from '../assets/images/portfolio/room2.png';
import twitterBotLogo from '../assets/images/portfolio/twitterbot.png';
import vendigitalLogo from '../assets/images/portfolio/vendigital.png';
import vikingCalculatorLogo from '../assets/images/portfolio/vikingcalculator.png';
import vikingColdLogo from '../assets/images/portfolio/vikingcold.png';
import vipOutletLogo from '../assets/images/portfolio/vipoutlet.png';
import yourNextDeveloperLogo from '../assets/images/portfolio/yournextdeveloper.svg';

import agencyMaiVideo from '../assets/videos/agencymai.mp4';
import autoAuctionMallVideo from '../assets/videos/autoauctionmall.mp4';
import automatedInsightsVideo from '../assets/videos/automatedinsights.mp4';
import carsonCorporationVideo from '../assets/videos/carsoncorporation.mp4';
import directLiquidationVideo from '../assets/videos/directliquidation.mp4';
import educatedBodyVideo from '../assets/videos/educatedbody.mp4';
import froggerCloneVideo from '../assets/videos/froggerclone.mp4';
import goTRGVideo from '../assets/videos/gotrg.mp4';
import hulqAppVideo from '../assets/videos/hulqapp.mp4';
import hulqLandingVideo from '../assets/videos/hulqlanding.mp4';
import mpactDigitalVideo from '../assets/videos/mpactdigital.mp4';
import neighborhoodMapVideo from '../assets/videos/neighborhoodmap.mp4';
import riverAndWolfVideo from '../assets/videos/riverandwolf.mp4';
import room2Video from '../assets/videos/room2.mp4';
import twitterBotVideo from '../assets/videos/twitterbot.mp4';
import vendigitalVideo from '../assets/videos/vendigital.mp4';
import vikingCalculatorVideo from '../assets/videos/vikingcalculator.mp4';
import vikingColdVideo from '../assets/videos/vikingcold.mp4';
import vipOutletVideo from '../assets/videos/vipoutlet.mp4';
import yourNextDeveloperVideo from '../assets/videos/nextdeveloper.mp4';

export default () => [
  {
    shortName: 'Room2',
    name: 'Room2',
    url: 'https://www.room2.com/',
    image: room2Logo,
    video: room2Video,
    role: 'Full-stack developer',
    type: 'One-man project',
    description: 'A marketing/booking website for a UK hometel business.',
    tasks_features: [
      'Technologies used: PHP, JavaScript, Scss, Wordpress, Google Maps, Mews booking engine.',
      'Website is tightly packed with visual assets but performance very fast due to extensive optimizations.',
      'Most elements are animated but at the same time there is no stuttering caused by their movement - all a ' +
      'result of very efficiently written scripts following the best practices.',
      'Interesting use of Google Maps API to show a neighborhood map with places of interest and a description of ' +
      'each location.',
      'Booking engine is nicely integrated directly into the website to avoid painful page transitions and make the ' +
      'booking process faster and nicer for the user.',
      'A large amount of different blocks all of which can be easily created from the admin panel meant a very ' +
      'careful design planning of the entire development process before starting the coding stage.',
      'Large amount of differences between desktop and mobile versions (both in terms of looks and blocks order) ' +
      'was a big challenge to overcome. In the end the website looks and functions perfectly on all devices and ' +
      'performance was not affected.',
      'Fully GDPR compliant with the ability for the user to disable all cookies and the website will continue ' +
      'functioning correctly.',
      'Lazyloading images and properly loading all the content for the best user experience and website performance.',
      'All content and all settings are fully customizable by any user with absolutely no previous code expertise.',
    ],
    repository: 'Private repository, all code belongs to Agency,Mai?',
  },
  {
    shortName: 'VikingCalculator',
    name: 'VC Energy Savings Calculator',
    url: 'https://www.vikingcold.com/estimate-energy-savings/',
    image: vikingCalculatorLogo,
    video: vikingCalculatorVideo,
    role: 'Front-end developer',
    type: 'One-man project',
    description: 'Calculator web application for thermal energy-savings solutions.',
    tasks_features: [
      'Technologies used: VueJS, vanilla JavaScript, Scss.',
      'Web application that can be used as a separate web app or embedded on the website in an iframe.',
      'A beautiful design in combination with complex calculations to show the user the true benefits of the ' +
      'developed system.',
      'Ability to use application offline and then sync all the data from the pouchdb once the internet connection ' +
      'is restored.',
      'A custom written translator script, which can automatically translate all text strings of the app from the ' +
      'csv file based on the url language parameter.',
      'Every user action is tracked by Google Analytics, both online and offline. Once the interenet connection is ' +
      'restored the data is sent to GA.',
      'Results are presented in an easy understandable manner to the user via chart.js library.',
      'Multiple APIs integration including Google Analytics, Acton, Pardot, Gravity Forms, pouchdb, chart.js and ' +
      'others to create a complex tool which tracks all the useful data from every action performed by the user.'
    ],
    repository: 'Private repository, all code belongs to Agency,Mai?',
  },
  {
    shortName: 'HulqApp',
    name: 'HULQ leasing calculator web app',
    url: 'https://hulq.io/',
    image: hulqAppLogo,
    video: hulqAppVideo,
    role: 'Front-end developer',
    type: 'Team project',
    description: 'Web application of high complexity targeted at calculating lease price based on numerous factors.',
    tasks_features: [
      'Technologies used: React, Scss, various APIs.',
      'A complex multi-step calculator app to let the user find his/her dream car and get the best leasing terms ' +
      'for it.',
      'Multiple APIs integration to build a large database of cars, calculate lease price based on numerous factors, ' +
      'such as car build, trade-in, credit score, miles per year and many others.',
      'Ability to save calculation process at any step and then come back to it later via link, or share it with a ' +
      'friend via social network of choice.',
      'Every element is animated at least to some degree to provide the smoothest user interface.',
      'Pulling market data from various data sources to provide a comparison in prices for the user.',
      'Advanced performance optimizations and visual enhancements result in a beautiful application of the greatest ' +
      'value to any car lover.'
    ],
    repository: 'Private repository, all code belongs to goTRG.',
  },
  {
    shortName: 'MpactDigital',
    name: 'Mpact Digital',
    url: 'not a live project',
    image: mpactDigitalLogo,
    video: mpactDigitalVideo,
    role: 'Front-end developer',
    type: 'One-man project',
    description: 'Single page digital advertising website tightly packed with engaging visual features.',
    tasks_features: [
      'Technologies used: HTML, SCSS, Gulp, vanilla JS',
      'Self-written full-page scroll implementation using vanilla JS and CSS transforms and transitions',
      'Self-written navigation between full-page sections and inner elements',
      'A large amount of CSS transitions and animations on user scroll, hovers, clicks, etc',
      'A lot of performance optimizations to make sure the animations run smoothly on mobile devices',
      'Self-written cards carousel in the how it works section',
      'Object oriented approach to organize the whole application'
    ],
    repository: 'Private repository, all code belongs to goTRG.',
  },
  {
    shortName: 'TwitterBot',
    name: 'Twitter Bot',
    url: 'https://twitter.com/amsmtechtest',
    image: twitterBotLogo,
    video: twitterBotVideo,
    role: 'Back-end developer',
    type: 'One-man project',
    description: 'Twitter application to automatically pull tweets from any account and combine them with a ' +
      'predefined image.',
    tasks_features: [
      'Technologies used: PHP, TwitterOAuth, Cron.',
      'The goal of application is to pull tweets from an account (or multiple accounts), apply appropriate styling, ' +
      'remove images, emojis and links, and output this text onto a predefined area on an image with PHP GD library. ' +
      'These images then get posted to a selected twitter account.',
      'Script takes care of avoiding duplicate tweets by storing tweet ids in a locally hosted txt file which serves ' +
      'a purpose of simple database.',
      'Images are properly deleted once posted to avoid wasted space on the server.',
      'A script supports an option to send an email report every time it processes new tweets to show which tweets ' +
      'were processed, how many duplicates were there, and how many new ones were posted.'
    ],
    repository: 'Private repository, all code belongs to Agency,Mai?',
  },
  {
    shortName: 'RiverWolf',
    name: 'River And Wolf',
    url: 'https://riverandwolf.com/',
    image: riverAndWolfLogo,
    video: riverAndWolfVideo,
    role: 'Full-stack developer',
    type: 'One-man project',
    description: 'Creation and deep modifications of a website for a respected naming agency followed by a long-term ' +
      'support.',
    tasks_features: [
      'Technologies used: PHP, JavaScript, Scss, WordPress.',
      'Creation of advanced gallery system which resulted in signing a contract with Calvin Klein.',
      'Complex color scheme system with unique color paletter for each page.',
      'Heavy performance optimizations which resulted in 99 mobile google pagespeed score.',
      'All content is fully customizable by any user with absolutely no previous code expertise.',
      'Carefully examining every possible user interaction to achieve the smoothest page transitions and loading ' +
      'animations.',
      'Almost all website functionality, including blog filtering, ajax posts loading, images lazyloading, smart ' +
      'sticky sidebar, custom google map and custom post type management is custom built according to the client ' +
      'requirements with no additional plugin usage.'
    ],
    repository: 'Private repository, all code belongs to Agency,Mai?',
  },
  {
    shortName: 'AutomatedInsights',
    name: 'Automated Insights',
    url: 'https://automatedinsights.com/',
    image: automatedInsightsLogo,
    video: automatedInsightsVideo,
    role: 'Full-stack developer',
    type: 'One-man project',
    description: 'Marketing website for a language-from-data generation platform.',
    tasks_features: [
      'Technologies used: PHP, JavaScript, Scss, WordPress.',
      'Heavy usage of video API to create engaging feel for the website user.',
      'A custom written script to fit any video into any png file seamlessly.',
      'A widget to show alerts filtered by the distance of the event from user via google geolocation API. The user ' +
      'can then interact with the alerts content by moving cursor and the visual data will behave based on user ' +
      'mouse actions.',
      'A very complex blog system with ajax loading and filtering by categories and tags at the same time, which ' +
      'supports browser history and multiple blog sections on the same page.',
      'A script responsible for data-to-text transformation. Can transform random numbers to text and optionally ' +
      'text to another text string if one is provided.',
      'Fully GDPR compliant with the ability for the user to disable all cookies and the website will continue ' +
      'functioning correctly.',
      'Lazyloading images and properly loading all the content for the best user experience and website performance.',
      'All content and all settings are fully customizable by any user with absolutely no previous code expertise.'
    ],
    repository: 'Private repository, all code belongs to Agency,Mai?',
  },
  {
    shortName: 'AutoAuctionMall',
    name: 'AutoAuctionMall',
    url: 'https://autoauctionmall.com',
    image: autoAuctionMallLogo,
    video: autoAuctionMallVideo,
    role: 'Front-end developer',
    type: 'Team project',
    description: 'A large online marketplace aimed at connecting major vehicle auction houses across the North America.',
    tasks_features: [
      'Technologies used: HTML, JavaScript, MeteorJS, Scss',
      'Creating various components and widgets for the website',
      'Experimenting with CSS animations and transitions to achieve an appealing look and interactive feel for ' +
      'the applications',
      'Replacing old CSS with the new more organized structure, implementing new pages using Foundation CSS ' +
      'framework',
      'Continuous testing and fixing of existing and new visual and functional bugs',
      'Getting a strong familiarity with the MeteorJS framework'
    ],
    repository: 'Private repository, all code belongs to goTRG.',
  },
  {
    shortName: 'NeighborhoodMap',
    name: 'Neighborhood Map',
    url: 'http://sergeyeremeev.github.io/map/build/',
    image: neighborhoodMapLogo,
    video: neighborhoodMapVideo,
    role: 'Front-end developer',
    type: 'One-man project',
    description: 'A project for the Frontend Udacity Nanodegree course, aimed at getting experience in writing OOP ' +
      'JavaScript using one of the popular MVC frameworks (KnockoutJS). The goal of the project is to use Google Map ' +
      'API to create an interactive map application, which would allow user to see nearby places of interest with ' +
      'additional information.',
    tasks_features: [
      'KnockoutJS application using best Object Oriented Practices.',
      'Integrating a number of RESTful APIs to create a single page application which is easy to use and which can ' +
      'deliver large amounts of information about any selected place.',
      'Great degree of creativity visible through additional custom features, unique design, achieved both through ' +
      'CSS and JS (via Google Maps API to style the map).',
      'Custom written filtering of the results.',
      'User can get additional information by switching to Yelp/Wiki tabs about any place.',
      'Detailed readme about the project, its features, and instructions about how to run the application.'
    ],
    repository: 'https://github.com/sergeyeremeev/nanodegree-p5',
  },
  {
    shortName: 'goTRG',
    name: 'goTRG',
    url: 'https://gotrg.com',
    image: goTRGLogo,
    video: goTRGVideo,
    role: 'Front-end Developer',
    type: 'One-man project',
    description: 'Reworking the majority of the pages to create a more modern look of the website',
    tasks_features: [
      'Technologies used: HTML, PHP, WordPress, Grunt, Scss, vanilla JS, jQuery',
      'Reworking majority of the pages to have full-height sections using fullpage.js',
      'Adding a lot of CSS animations to create a highly modern and interactive appearance of the website',
      'Creating custom popups and overlays to satisfy ambitious designs',
      'Working with images to create beautiful animations depending on the user actions',
      'Creating custom filter system for the \'careers\' page',
      'Heavily testing the entire website to make sure that new changes don\'t interfere with the rest of the ' +
      'website',
    ],
    repository: 'Private repository, all code belongs to goTRG.',
  },
  {
    shortName: 'EducatedBody',
    name: 'Educated Body',
    url: 'https://educatedbody.com/',
    image: educatedBodyLogo,
    video: educatedBodyVideo,
    role: 'Full-stack Developer',
    type: 'One-man project',
    description: 'Website for an agency specialized in gym and spa sector.',
    tasks_features: [
      'Technologies used: PHP, JavaScript, Scss, WordPress.',
      'This website was even more design-center than others which lead to very detailed analysis of every single ' +
      'element - from the appearing stage to the response to user actions.',
      'Lazyloading taken to next level. Accompanied by the sliding animations of the elements resulted in a super ' +
      'smooth loading and scrolling experiences.',
      'Most blocks are heavily customized to satisfy client\'s needs.',
      'Sliders (slick.js) are customized to have a pagination element to them with nice transitions.',
      'Custom post types for galleries are tailored for client\'s need: each gallery has a custom sticky sidebar ' +
      'which behaves very differently across different screen sizes, transitions are made via ajax for the smoothest ' +
      'feel, browser history API is utilized to provide a comfortable navigation experience for the user.',
      'Team members area is combination of 2 slick.js sliders tied together by a complex custom written solution ' +
      'together with the self-written pagination script, resulting in a block which is both visually pleasing and ' +
      'content-rich.',
      'Responsiveness was a big challenge on this project due to large amount of visuals that had to be scaled down ' +
      'in size without losing their informativeness. A lot of blocks had to be redesigned completely to present ' +
      'content nicely on mobile devices.',
      'Fully GDPR compliant with the ability for the user to disable all cookies and the website will continue ' +
      'functioning correctly.',
      'All content and all settings are fully customizable by any user with absolutely no previous code expertise.'
    ],
    repository: 'Private repository, all code belongs to Agency,Mai?',
  },
  {
    shortName: 'DirectLiquidation',
    name: 'DirectLiquidation',
    url: 'https://directliquidation.com',
    image: directLiquidationLogo,
    video: directLiquidationVideo,
    role: 'Front-end developer',
    type: 'Team project',
    description: 'Continuous frontend developments and updates on an industry leading e-commerce project.',
    tasks_features: [
      'Technologies used: HTML, PHP, WordPress, WooCommerce, Grunt, Scss, vanilla JS, jQuery',
      'Implementing new designs on a regular basis to provide an up-to-date look of the website',
      'Constantly working on adding new features, to make the platform more appealing to businesses around the ' +
      'globe',
      'Ensuring that no visual or functional bugs appear as new features are developed by the backend team',
      'Frequently examining the entire website to check for potential bugs and suggesting possible design ' +
      'improvements',
      'Replacing old CSS with the new more organized structure, implementing new pages using Foundation CSS ' +
      'framework',
      'Setting up Grunt tasks to speed up the development process',
      'Writing a fair amount of php and WordPress related code',
    ],
    repository: 'Private repository, all code belongs to goTRG.',
  },
  {
    shortName: 'FroggerClone',
    name: 'Frogger Game Clone',
    url: 'http://sergeyeremeev.github.io/froggerclone/',
    image: froggerCloneLogo,
    video: froggerCloneVideo,
    role: 'Front-end developer',
    type: 'One-man project',
    description: 'A JavaScript Frogger clone game.',
    tasks_features: [
      'Technologies used: Vanilla JavaScript, Scss.',
      'A little free-time project to practice JavaScript Object Oriented principles in a fun matter.',
      'Completely self-written code covering all aspects of the application, from requesting frames and making sure ' +
      'the app runs at 60 fps to managing position, movement and collisions of all objects.',
      'The initial concept is further customized to include difficulty leves (defined by obstacles, number of ' +
      'enemies and their speed), ability to choose different characters and options to remove/reset obstacles with ' +
      'a single click of a button.',
      'Score system is introduced for added complexity of the application.'
    ],
    repository: 'https://github.com/sergeyeremeev/nanodegree-p3',
  },
  {
    shortName: 'AgencyMai',
    name: 'Agency,Mai?',
    url: 'http://agencymai.com/',
    image: agencyMaiLogo,
    video: agencyMaiVideo,
    role: 'Full-stack developer',
    type: 'One-man project',
    description: 'Marketing website for a web-design agency.',
    tasks_features: [
      'Technologies used: PHP, JavaScript, Scss, WordPress.',
      'This website\'s goal is to showcase what a company can do for your business and this is achieved with a rich ' +
      'visual content in a single-screen web page design.',
      '2 slick.js carousels are tied together on each page with a clever algorythm to create a pagination out of ' +
      'visual elements in a sidebar.',
      'A particular attention was paid towards the loading of the elements. A custom script allows the admin to ' +
      'select the order in which the images will appear for the best looking user interface.',
      'Everything on the website is as smooth as it can get. Lazyloading, smooth carousel transitions and image ' +
      'fade-ins are key to reaching the desired level of smoothness.',
      'All content and all settings for absolutely all elements can be tweaked with ease by any user from the admin ' +
      'panel. Customizability with no code knowledge is key for this project.'
    ],
    repository: 'Private repository, all code belongs to Agency,Mai?',
  },
  {
    shortName: 'VipOutlet',
    name: 'VipOutlet',
    url: 'https://vipoutlet.com',
    image: vipOutletLogo,
    video: vipOutletVideo,
    role: 'Front-end developer',
    type: 'Team project',
    description: 'Continuous frontend developments and updates on a large e-commerce project',
    tasks_features: [
      'Technologies used: HTML, PHP, WordPress, WooCommerce, Grunt, Scss, vanilla JS, jQuery',
      'Implementing new designs on a regular basis to provide an up-to-date look of the website',
      'Ensuring that no visual or functional bugs appear as new features are developed by the backend team',
      'Creation of a very complex checkout page using OOP principles',
      'Being responsible for creation of a complex user area',
      'Frequently examining the entire website to check for potential bugs and suggesting possible design ' +
      'improvements',
      'Getting a strong familiarity with the Foundation CSS framework',
      'Setting up Grunt tasks to speed up the development process',
      'Writing a fair amount of PHP and WordPress related code'
    ],
    repository: 'Private repository, all code belongs to goTRG.',
  },
  {
    shortName: 'HulqLanding',
    name: 'Hulq landing page',
    url: 'https://hulq.com/',
    image: hulqLandingLogo,
    video: hulqLandingVideo,
    role: 'Front-end developer',
    type: 'One-man project',
    description: 'Creation of a landing page for an upcoming car leasing service.',
    tasks_features: [
      'Technologies used: HTML, Webpack, PostCSS, es6',
      'Converting inVision/Zeplin design to web page',
      'Back and forth communication with the designer to go through multiple versions of animations to find ' +
      'the best one',
      'Optimizing performance to avoid negative impact of animating elements, especially on mobile devices',
      'Creating a WordPress blog located at - https://hulq.com/blog/ - in a similar design to the main landing ' +
      'page',
      'Testing animations on all possible resolutions to ensure they do not interfere with page text'
    ],
    repository: 'Private repository, all code belongs to goTRG.',
  },
  {
    shortName: 'Vendigital',
    name: 'Vendigital',
    url: 'https://vendigital.com/',
    image: vendigitalLogo,
    video: vendigitalVideo,
    role: 'Full-stack developer',
    type: 'One-man project',
    description: 'Marketing website for one of the top UK Management Consultancies.',
    tasks_features: [
      'Technologies used: PHP, JavaScript, Scss, WordPress.',
      'A top-level company requires a top-level website. Attention was paid to both, visual aspects to make the ' +
      'website trully beautiful and engagin for the user and performance to make all page loads and user ' +
      'interactions with the website a breeze.',
      'Numerous performance optimizations resulted in super fast page-to-page transitions.',
      'Lazyloading as well as fancy CSS image effects to enhance the smooth feel of the website.',
      'Blog with custom filter script for smooth transition between categories.',
      'All content and all settings are fully customizable by any user with absolutely no previous code expertise.'
    ],
    repository: 'Private repository, all code belongs to Agency,Mai?',
  },
  {
    shortName: 'CarsonCorporation',
    name: 'Carson Corporation',
    url: 'http://www.carsoncorporation.net/',
    image: carsonCorporationLogo,
    video: carsonCorporationVideo,
    role: 'Full-stack developer',
    type: 'One-man project',
    description: 'Marketing website for a construction company.',
    tasks_features: [
      'Technologies used: PHP, JavaScript, Scss, WordPress.',
      'The goal of this website was to have a simplistic yet accurate and beautiful design and, most importantly, ' +
      'clearly lay out the information for potential clients.',
      'Large sections accompanied with images deliver content in a transparent manner without having a bulky feel.',
      'A large number of different blocks was developed to show off a large number of visuals and not be repetitive ' +
      'at the same time.',
      'Video API was utilized to create a nice looking video material that fits into the theme of the website.',
      'A custom written blog brings filtering combined with pagination in a smooth expirience due to ajax and ' +
      'browser history API.',
      'All content and all settings are fully customizable by any user with absolutely no previous code expertise.'
    ],
    repository: 'Private repository, all code belongs to Agency,Mai?',
  },
  {
    shortName: 'VikingCold',
    name: 'Viking Cold Solutions',
    url: 'https://www.vikingcold.com/',
    image: vikingColdLogo,
    video: vikingColdVideo,
    role: 'Full-stack developer',
    type: 'One-man project',
    description: 'Marketing website for a company developing thermal energy-saving solutions.',
    tasks_features: [
      'Technologies used: PHP, JavaScript, Scss, WordPress.',
      'Usage of Vimeo and YouTube APIs to create beautiful video players matching the rest of website design.',
      'A lot of custom build elements like accordions, sticky sidebars, sliding content areas, savings ticker - all ' +
      'coded manually to match the specific requirements of the client.',
      'Fully GDPR compliant with the ability for the user to disable all cookies and the website will continue ' +
      'functioning correctly.',
      'Setup on a Kinsta server for the best WordPress performance and experience.',
      'Lazyloading images and properly loading all the content for the best user experience and website performance.',
      'All content and all settings are fully customizable by any user with absolutely no previous code expertise.'
    ],
    repository: 'Private repository, all code belongs to Agency,Mai?',
  },
  {
    shortName: 'NextDev',
    name: 'Your Next Developer',
    url: 'http://sergeyeremeev.github.io/resume-site/',
    image: yourNextDeveloperLogo,
    video: yourNextDeveloperVideo,
    role: 'Project owner and creator',
    type: 'One-man project',
    description: 'A resume/portfolio website built with React (plus Redux) JavaScript library.',
    tasks_features: [
      'React and Redux to efficiently manage the state of the application and efficiently update the views in ' +
      'response to certain actions',
      'Styled components are used to style the application in a more "reactive" way',
      'A completely custom self-created website design',
      'Project laid out as a single page application',
      'Best practices are ensured with eslint code checking (air-bnb code style) and Flow static type checking',
      'Every single feature, both functional and visual, is built by hand without the use of third-party plugins',
      'The only plugin used is react-custom-scrollbars',
      'Website logo is a vector graphic created by me in InkScape',
    ],
    repository: 'https://github.com/sergeyeremeev/mysite',
  },
];
