var bio = {
    "name": "Sergey Eremeev",
    "role": "Web Developer",
    "contacts": {
        "mobile": "+7-999-710-64-59",
        "email": "13.eremeev.sv@gmail.com",
        "github": "sergeyeremeev",
        "twitter": "@SergeyEremeev13",
        "location": "Russia, Vladimir"
    },
    "welcomeMessage": "Welcome to My Resume Page",
    "skills": ["hard working", "always meet deadlines", "high quality of work", "great communication skills", "always learning new technologies"],
    "biopic": "images/my_photo.jpg",
    "display": function () {
        // header formatted elements
        var formattedName = HTMLheaderName.replace("%data%", bio.name),
            formattedRole = HTMLheaderRole.replace("%data%", bio.role),
            formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile),
            formattedEmail = HTMLemail.replace("%data%", bio.contacts.email),
            formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github),
            formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter),
            formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location),
            formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic),
            formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

        // append elements to header and footer
        $("#header").prepend(formattedName);
        $(formattedRole).insertAfter("#name");
        $("#topContacts, #footerContacts").append(formattedMobile);
        $("#topContacts, #footerContacts").append(formattedEmail);
        $("#topContacts, #footerContacts").append(formattedGithub);
        $("#topContacts, #footerContacts").append(formattedTwitter);
        $("#topContacts, #footerContacts").append(formattedLocation);
        $("#header").append(formattedBioPic);
        $("#header").append(formattedMessage);

        // append skills to header
        if (bio.skills.length > 0) {
            $('#header').append(HTMLskillsStart);

            for (var i = 0, mySkills = bio.skills; i < mySkills.length; i++) {
                var formattedSkill = HTMLskills.replace("%data%", mySkills[i]);
                $("#skills").append(formattedSkill);
            }
        }
    }
};

var education = {
    "schools": [
        {
            "name": "University of Bath",
            "location": "Bath, UK",
            "degree": "BS",
            "majors": ["CivEng"],
            "dates": 2014,
            "url": "http://www.bath.ac.uk/"
        }
    ],
    "onlineCourses": [
        {
            "title": "Javascript Road Trip (part 1, 2, 3)",
            "school": "CodeSchool",
            "date": 2014,
            "url": "https://www.codeschool.com/courses/javascript-road-trip-part-1"
        },
        {
            "title": "Try jQuery, jQuery: The Return Flight",
            "school": "CodeSchool",
            "date": 2013,
            "url": "https://www.codeschool.com/courses/try-jquery"
        },
        {
            "title": "Shaping up with Angular.js, Staying Sharp with Angular.js",
            "school": "CodeSchool",
            "date": 2015,
            "url": "https://www.codeschool.com/courses/shaping-up-with-angular-js"
        },
        {
            "title": "Try Git, Git Real",
            "school": "CodeSchool",
            "date": 2014,
            "url": "https://www.codeschool.com/courses/git-real"
        },
        {
            "title": "Front-end Formations",
            "school": "CodeSchool",
            "date": 2013,
            "url": "https://www.codeschool.com/courses/front-end-formations"
        },
        {
            "title": "Journey Into Mobile",
            "school": "CodeSchool",
            "date": 2013,
            "url": "https://www.codeschool.com/courses/journey-into-mobile"
        },
        {
            "title": "Assembling Sass, Assembling Sass Part 2",
            "school": "CodeSchool",
            "date": 2014,
            "url": "https://www.codeschool.com/courses/assembling-sass"
        },
        {
            "title": "Rails for Zombies Redux, Rails for Zombies 2",
            "school": "CodeSchool",
            "date": 2013,
            "url": "https://www.codeschool.com/courses/rails-for-zombies-redux"
        }
    ],
    "display": function () {
        for (school in education.schools) {
            $("#education").append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name),
                formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree),
                formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates),
                formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);

            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            for (var i = 0, majors = education.schools[school].majors; i < majors.length; i++) {
                var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[i]);
                $(".education-entry:last").append(formattedSchoolMajor);
            }
            $(".education-entry:last").append(formattedSchoolLocation);
        }

        $("#education").append(HTMLonlineClasses);
        for (course in education.onlineCourses) {
            $("#education").append(HTMLschoolStart);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title),
                formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school),
                formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date),
                formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

            $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
            $(".education-entry:last").append(formattedOnlineDates);
            $(".education-entry:last").append(formattedOnlineURL);
        }
    }
};

var work = {
    "jobs": [
        {
            "employer": "The Recon Group Inc",
            "title": "Front End Developer",
            "location": "North Miami Beach, FL",
            "dates": "2014 - present",
            "description": "Full time front end developer, taking care of all html/css and frontend javascript work, cutting PSD files, suggestions for user interface improvement, connecting api to frontend using frameworks such as Angular.js, implementing custom filtering system on a large ecommerce website."
        },
        {
            "employer": "Eboxlab",
            "title": "Wordpress and Front End Developer",
            "location": "Denver, CO",
            "dates": "2012 - 2014",
            "description": "Development of custom Wordpress templates from predesigned PSD's, occasional css/html and javascript fixes on multiple websites, website maintenance."
        }
    ],
    "display": function () {
        for (job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer),
                formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title),
                formattedEmployerTitle = formattedEmployer + formattedTitle,
                formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates),
                formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location),
                formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $(".work-entry:last").append(formattedEmployerTitle);
            $(".work-entry:last").append(formattedDates);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedDescription);
        }
    }
};

var projects = {
    "projects": [
        {
            "title": "TheStore Website",
            "dates": "2014 - present",
            "description": "Cutting designs from PSD's, constant website improvements, working on user experience, suggesting and incorporating new ideas, maintainig and optimising javascript and css code. As the website gets bigger this leads to a constant cycle of testing, debugging and introduction of new features.",
            "images": ["images/thestore.png", "images/thestore1.png"]
        },
        {
            "title": "Html/Css/Js design cut from PSD's for a B2C website",
            "dates": "05/2015",
            "description": "Cutting designs from PSD's for a website, including animations and minor js user interactions, which will be passed to a backend team to be connected to api.",
            "images": ["images/b2c.png", "images/b2c(1).png"]
        },
        {
            "title": "PSD to HTML for a 1-page website",
            "dates": "2011",
            "description": "1 day HTML to PSD cutting project",
            "images": ["images/HeartSmart.jpg"]
        },
        {
            "title": "Custom Wordpress theme for a small dentistry website",
            "dates": "2012",
            "description": "This project included both, PSD to HTML cut as well as a further development of a custom Wordpress template.",
            "images": ["images/neenah.jpg"]
        },
        {
            "title": "Custom Wordpress theme for a clothes designer",
            "dates": "2012",
            "description": "This is my own design, transformed into a Wordpress template for a famous Russian clothes designer.",
            "images": ["images/pereskokov.jpg"]
        }
    ],
    "display": function () {
        for (project in projects.projects) {
            $("#projects").append(HTMLprojectStart);
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title),
                formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates),
                formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);
            for (var i = 0, projectImages = projects.projects[project].images; i < projectImages.length; i++) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[i]);
                $(".project-entry:last").append(formattedProjectImage);
            }
        }
    }
};

bio.display();
work.display();
projects.display();
education.display();

function inName() {
    var name = $("#name").text().trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

/* insert internationalize button to the right of the name */
$("#header").prepend(internationalizeButton);

$('#mapDiv').append(googleMap);


// custom js for animated menu navigation
$(".menu").find("a").click(function (e) {
    e.preventDefault();
    var goTo = $(this).data("page-location");
    $("html, body").animate({
        scrollTop: $("#" + goTo).offset().top
    }, 500);
});

/* to top button */
$(window).scroll(function () {
    if ($(window).scrollTop() >= $("#header").height()) {
        $(".to-top").addClass('visible');
    } else {
        $(".to-top").removeClass('visible');
    }
});

$(".to-top").click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 500);
});

/* images hover animations */
$("#projects").find("img").hover(function () {
    $(this).addClass("zoom");
},
function () {
    $(this).removeClass("zoom");
});
