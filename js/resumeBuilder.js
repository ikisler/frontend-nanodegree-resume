
var work = {
	"jobs": [{
		"employer": "ZeroChaos",
		"title": "Google Ads Quality Rater",
		"location": "Marysville, WA",
		"dates": "October 2014 to Present",
		"description": ["Worked with Google to track visual quality and content accuracy of advertisements.",
 			"Examined advertising related data, and provided feedback and analysis.",
			"Analyzed data using in-depth familiarity with web culture, and broad knowledge of topics.",
			"Worked in a team setting to clarify issues and solve rating problems."]
	},
	{
		"employer": "YMCA of San Benito County",
		"title": "After School Program Leader",
		"location": "Hollister, CA",
		"dates": "September 2013 to June 2014",
		"description": ["Tutored elementary school students in a variety of subjects.",
			"Taught enrichment curriculum, including crafts, outdoor games, literature activities, and service learning.",
			"Frequently engaged in curriculum development, or adjustment of curriculum to better suit age ranges of students.",
			"Kept parents, many whom did not speak English, updated on homework status and behavior.",
			"Assisted in student observations and placement decisions, and maintaining organization."]
	},
	{
		"employer": "YMCA of Silicon Valley",
		"title": "After School Program Leader",
		"location": "Gilroy, CA",
		"dates": "September 2013 to June 2014",
		"description": ["Tutored elementary and middle school students in a variety of subjects.",
			"Taught enrichment curriculum, including crafts, outdoor activities, and science projects.",
			"Assisted in making student observations and decisions, and maintaining organization."]
	}]
};

var projects = {
	"projects": [{
		"title": "Online Portfolio",
		"dates": "June 2015",
		"description": "An online portfolio which describes the projects I'm working on for my Udacity Nanodegree.",
		"images": ["images/headshot.jpg", "images/headshot.jpg"]
	}]
};

var bio = {
	"name": "Isabeau Kisler",
	"role": "Front-End Web Dev",
	"welcomeMessage": "Hello there!  Welcome to my interactive resume.",
	"contact": {
		"mobile": "111-111-1111",
		"email": "ikisler@csumb.edu",
		"github": "ikisler",
		"location": "Marysville, WA"
	},
	"skills": ["awesomeness", "smartness", "coolness", "radicalness"],
	"pic":"images/headshot.jpg"
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

bio.display = function() {
	var formattedImage;
	var formattedWelcome;

	if(bio.role) {
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);
	}

	if (bio.name) {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$('#header').prepend(formattedName);
	}

	formattedImage = HTMLbioPic.replace("%data%", bio.pic);
	$("#header").append(formattedImage);

	formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcome);

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		var formatedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formatedSkill);
		formatedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formatedSkill);
		formatedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formatedSkill);
		formatedSkill = HTMLskills.replace("%data%", bio.skills[3]);
		$("#skills").append(formatedSkill);
	}

}

bio.display();

/*** Adds Work Info ***/
work.display = function () {

	var formattedEmployer;
	var formattedTitle;
	var formattedDates;
	var formattedLocation;
	var formattedDescription;

	for(job in work.jobs) {
		// Add Employer and Title
		$("#workExperience").append(HTMLworkStart);
		formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		$(".work-entry:last").append(formattedEmployer + formattedTitle);

		// Add Date
		formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		// Add Location
		formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		// Add Description
		$(".work-entry:last").append(HTMLworkDescriptionStart);

		for(var i=0; i<work.jobs[job].description.length; i++)
		{
			formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description[i]);
			$(".work-description:last").append(formattedDescription);
		}
		//formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		//$(".work-entry:last").append(formattedDescription);	
	}
}

work.display();

/*** Adds Project Info ***/
projects.display = function() {
	var formattedTitle;
	var formattedDates;
	var formattedDescription;
	//var formattedImage;

	for(proj in projects.projects) {
		// Add Project section
		$("#projects").append(HTMLprojectStart);

		// Add Title
		formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[proj].title);
		$(".project-entry:last").append(formattedTitle);

		// Add Dates
		formattedDates = HTMLprojectDates.replace("%data%", projects.projects[proj].dates);
		$(".project-entry:last").append(formattedDates);

		// Add Description
		formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[proj].description);
		$(".project-entry:last").append(formattedDescription);

		if(projects.projects[proj].images.length > 0) {

			for(img in projects.projects[proj].images) {
				formattedImage = HTMLprojectImage.replace("%data%", projects.projects[proj].images[img]);
				$(".project-entry:last").append(formattedImage);
			}
		}

	}
}

projects.display();

education.display = function() {
	var formattedName;
	var formattedDegree;
	var formattedDates;
	var formattedLocation;
	var formattedMajor;
	var formattedTitle;
	var formattedSchool;
	var formattedURL;

	for(school in education.schools) {

		$("#education").append(HTMLschoolStart);

		formattedName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
		formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedName + formattedDegree);

		formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedDates + formattedLocation);

		formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedMajor);


	}

	// Add header for online classes
	$(".education-entry:last").append(HTMLonlineClasses);

	for(newClass in education.onlineCourse) {

		formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourse[newClass].title);
		formattedTitle = formattedTitle.replace("#", education.onlineCourse[newClass].url);
		formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourse[newClass].school);
		$(".education-entry:last").append(formattedTitle + formattedSchool);

		formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourse[newClass].dates);
		$(".education-entry:last").append(formattedDates);

		formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourse[newClass].url);
		formattedURL = formattedURL.replace("#", education.onlineCourse[newClass].url);
		$(".education-entry:last").append(formattedURL);
	}
}

education.display();

/*** Random Bits of Code ***/
$(document).click(function(loc) {

	logClicks(loc.pageX,loc.pageY);

});

function locationizer(work_obj) {
	var locations = [];

	for(job in work_obj.jobs)
	{
		locations.push(work_obj.jobs[job].location);
	}

	return locations;
}


/*** This is the original code as shown in the video.  It does NOT work.
$("#main").append(internationalizeButton);

function inName(origName) {
	var names = origName.trim().split(" ");
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	name[1] = name[1].toUpperCase();

	return name.join(" ");
}***/

function inName() {
  var name = window.name;
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  
  return name[0] +" "+ name[1];	
}

var name = $("#name").text();

$('#main').append(internationalizeButton);

$("#mapDiv").append(googleMap);

$(function(){
	$(".work-entry").toggle();
	$(".project-entry").toggle();
	$(".education-entry").toggle();
	$("#map").toggle();

	$("#workExperience").click(function(){
		$(".work-entry").toggle();
	});

	$("#projects").click(function(){
		$(".project-entry").toggle();
	});

	$("#education").click(function(){
		$(".education-entry").toggle();
	});

    $("#map-title").click(function(){
        $("#map").toggle();
        initializeMap();
        map.fitBounds(mapBounds);

        if($("#map").css("display") ==="none") {
    		$("#mapDiv").css("height","100px");
    	}
    	else
    	{
    		$("#mapDiv").css("height","300px");
    	}
    });
});