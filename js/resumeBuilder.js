
/*** Resume Content ***/
var bio = {
	"name": "Isabeau Kisler",
	"role": "Front-End Web Dev",
	"welcomeMessage": "Hello there!  Welcome to my resume, built using jQuery.",
	"contact": {
		"mobile": "111-111-1111",
		"email": "ikisler@csumb.edu",
		"github": "ikisler",
		"blog": "http://www.theweeklywhatwhat.blogspot.com",
		"location": "Marysville, WA"
	},
	"skills": ["HTML", "Javascript", "jQuery", "Responsive Web Design"],
	"pic":"images/headshot.jpg"
};

var work = {
	"jobs": [{
		"employer": "ZeroChaos",
		"title": "Google Ads Quality Rater",
		"location": "Marysville, WA",
		"dates": "October 2014 to Present",
		"description": [
			"Worked with Google to track visual quality and content accuracy of advertisements.",
 			"Examined advertising related data, and provided feedback and analysis.",
			"Analyzed data using in-depth familiarity with web culture, and broad knowledge of topics.",
			"Worked in a team setting to clarify issues and solve rating problems."
		]
	},
	{
		"employer": "YMCA of San Benito County",
		"title": "After School Program Leader",
		"location": "Hollister, CA",
		"dates": "September 2013 to June 2014",
		"description": [
			"Tutored elementary school students in a variety of subjects.",
			"Taught enrichment curriculum, including crafts, outdoor games, literature activities, and service learning.",
			"Frequently engaged in curriculum development, or adjustment of curriculum to better suit age ranges of students.",
			"Kept parents, many whom did not speak English, updated on homework status and behavior.",
			"Assisted in student observations and placement decisions, and maintaining organization."
		]
	},
	{
		"employer": "YMCA of Silicon Valley",
		"title": "After School Program Leader",
		"location": "Gilroy, CA",
		"dates": "October 2008 to June 2009",
		"description": [
			"Tutored elementary and middle school students in a variety of subjects.",
			"Taught enrichment curriculum, including crafts, outdoor activities, and science projects.",
			"Assisted in making student observations and decisions, and maintaining organization."
		]
	}]
};

var projects = {
	"projects": [{
		"title": "Online Portfolio",
		"dates": "June 2015",
		"description": "An online portfolio which describes the projects I've developed for my Udacity Nanodegree.  Developed using Bootstrap and responsive webdesign fundamentals.",
		"images": ["images/portfolio_screenshot_small.jpg"]
	}]
};

var education = {
	"schools": [{
		"name": "California State University, Montery Bay",
		"location": "Monterey, CA",
		"degree": "Bachelor's",
		"majors": ["Business Administration"],
		"dates": "May 2012",
		"url": "http://www.csumb.edu"
	}],
	"onlineCourse": [{
		"title": "Intro to HTML and CSS",
		"school": "Udacity",
		"dates": "June 2015",
		"url": "http://www.udacity.com"
	},
	{
		"title": "Responsive Web Design",
		"school": "Udacity",
		"dates": "June 2015",
		"url": "http://www.udacity.com"
	},
	{
		"title": "Responsive Images",
		"school": "Udacity",
		"dates": "June 2015",
		"url": "http://www.udacity.com"
	},
	{
		"title": "How to Use Git and Github",
		"school": "Udacity",
		"dates": "May 2015",
		"url": "http://www.udacity.com"
	}]
};

/*** Functions that add info to the page ***/
// Adds Bio Info
bio.display = function() {
	var formattedImage;
	var formattedWelcome;

	// Add role
	if(bio.role) {
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);
	}

	// Add name
	if (bio.name) {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$('#header').prepend(formattedName);
	}

	// Add headshot
	formattedImage = HTMLbioPic.replace("%data%", bio.pic);
	$("#header").append(formattedImage);

	// Add welcome message
	formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcome);

	// Add skills
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		for(var i=0; i<bio.skills.length; i++){
			var formatedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formatedSkill);
		}
	}
}

// Adds Contact Info
bio.displayContact = function(divLocation) {
	var formattedMobile;
	var formattedEmail;
	var formattedGithub;
	var formattedBlog;
	var formattedLocation;

	$(divLocation).append(HTMLcontactStart);

	/*** Not sure if I want my phone number on my website yet ***/
	//formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
	//$(".contact").append(formattedMobile);

	// Add email
	formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
	$(".contact:last").append(formattedEmail);

	// Add github
	formattedGithub = HTMLgithub.replace("%data%", bio.contact.github);
	$(".contact:last").append(formattedGithub);

	// Add blog
	formattedBlog = HTMLblog.replace("%data%", bio.contact.blog);
	$(".contact:last").append(formattedBlog);

	// Add location
	formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
	$(".contact:last").append(formattedLocation);
}

// Adds Work Info
work.display = function () {

	var formattedEmployer;
	var formattedTitle;
	var formattedDates;
	var formattedLocation;
	var formattedDescription;

	for(var i=0; i<work.jobs.length; i++) {
		// Add Employer and Title
		$("#workExperience").append(HTMLworkStart);
		formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
		formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
		$(".work-entry:last").append(formattedEmployer + formattedTitle);

		// Add Date
		formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
		$(".work-entry:last").append(formattedDates);

		// Add Location
		formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
		$(".work-entry:last").append(formattedLocation);

		// Add Description
		$(".work-entry:last").append(HTMLworkDescriptionStart);

		for(var j=0; j<work.jobs[i].description.length; j++)
		{
			formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description[j]);
			$(".work-description:last").append(formattedDescription);
		}
	}
}

// Adds Project Info
projects.display = function() {
	var formattedTitle;
	var formattedDates;
	var formattedDescription;
	//var formattedImage;

	for(var i=0; i<projects.projects.length; i++) {
		// Add Project section
		$("#projects").append(HTMLprojectStart);

		// Add Title
		formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
		$(".project-entry:last").append(formattedTitle);

		// Add Dates
		formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
		$(".project-entry:last").append(formattedDates);

		// Add Description
		formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
		$(".project-entry:last").append(formattedDescription);

		if(projects.projects[i].images.length > 0) {

			for(var j=0; j<projects.projects[i].images.length; j++) { //(img in projects.projects[proj].images) {
				formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
				$(".project-entry:last").append(formattedImage);
			}
		}

	}
}

// Adds Education Info
education.display = function() {
	var formattedName;
	var formattedDegree;
	var formattedDates;
	var formattedLocation;
	var formattedMajor;
	var formattedTitle;
	var formattedSchool;
	var formattedURL;

	// Add colleges
	for(var i=0; i<education.schools.length; i++) {

		$("#education").append(HTMLschoolStart);

		formattedName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
		formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
		$(".education-entry:last").append(formattedName + formattedDegree);

		formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
		formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
		$(".education-entry:last").append(formattedDates + formattedLocation);

		formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
		$(".education-entry:last").append(formattedMajor);


	}

	// Add header for online classes
	$(".education-entry:last").append(HTMLonlineClasses);

	// Add online classes
	for(var j=0; j<education.onlineCourse.length; j++) {

		formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourse[j].title);
		formattedTitle = formattedTitle.replace("#", education.onlineCourse[j].url);
		formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourse[j].school);
		$(".education-entry:last").append(formattedTitle + formattedSchool);

		formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourse[j].dates);
		$(".education-entry:last").append(formattedDates);

		formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourse[j].url);
		formattedURL = formattedURL.replace("#", education.onlineCourse[j].url);
		$(".education-entry:last").append(formattedURL);
	}
}

/*** Call Functions to Display Content ***/
bio.displayContact("#header");

bio.display();

work.display();

projects.display();

education.display();

/*** Add Map ***/
$("#mapDiv").append(googleMap);

/*** Footer Contacts ***/
bio.displayContact("#footerContacts");

/*** Toggle Content Sections Open/Close ***/
$(function() {
	// Start with sections closed
	$(".work-entry").toggle();
	$(".project-entry").toggle();
	$(".education-entry").toggle();
	$("#map").toggle();

	// Event handlers which open the sections when they are clicked
	$("#workExperience").click(function() {
		$(".work-entry").toggle();
	});

	$("#projects").click(function() {
		$(".project-entry").toggle();
	});

	$("#education").click(function() {
		$(".education-entry").toggle();
	});

    $("#map-title").click(function() {
        $("#map").toggle();
        initializeMap();
        map.fitBounds(mapBounds);

        // Adjusts the div height based on whether the map is displayed
        if($("#map").css("display") ==="none") {
    		$("#mapDiv").css("height","100px");
    	} else {
    		$("#mapDiv").css("height","300px");
    	}
    });
});