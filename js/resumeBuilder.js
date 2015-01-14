// $("#main").append("Craig Conner");
/*
var FirstName = "Craig";

var age =  32;

console.log(FirstName)

var awesomethoughts = "I am craig and i am awesome";

console.log(awesomethoughts)


var funthoughts = awesomethoughts.replace("awesome", "Fun");

$("#main").append(funthoughts);
*/

var formattedName = HTMLheaderName.replace("%data%", "Craig Conner");
var formattedRole = HTMLheaderRole.replace("%data%", "Ninja Assassin");


$("#header").prepend(formattedName);
$("#header").append(formattedRole);






var bio = {

	"name" : "Craig",
	"role" :  "Ninja",
	"contacts": {
	 	"mobile": "888 555 9999",
	 	"email": "ck2@katyperry.com",
	 	"github": "texanconer",
	 	"twitter": "n/a",
	 	"location": "Dallas"
				},
	"biopic" : "images/fry.jpg",
	"welcomeMessage" : "Shut up and Take My Money",
	"skills" : [
		"awesomeness", "mad football skils", "nunchucks", "bo staff"
		]
};

var work = {

	"jobs": [
		{
		"employer": "AT&T",
		"title": "Manager",
		"location": "Dallas, TX",
		"dates": "2011 - Present",
		"description": "Workin' all day"
		},

		{
		"employer": "ARMY",
		"title": "Medic",
		"location": "Iraq",
		"dates": "2002 - 2010",
		"description": "Fightin"
		}
	]

};

var projects = {

	"projects": 
	{
	"title": "Web Page",
	"dates": "2014",
	"description": "Web stuff",
	"images": 
		[
		"URL",
		"URL",
		"URL",
		]
	}

};



var education = {
	"schools": [
	{
		"name": "Texas Tech",
		"location": "Lubbock, TX",
		"degree": "Bachelors",
		"majors": "Electrical Engineering",
		"dates": 2010,
		"url": "www.ttu.edu"
		
	},

	{
		"name": "Udacity",
		"location": "Home",
		"degree": "Nanodegree",
		"major": "Web Development",
		"dates": 2015,
		"url": "www.udacity.com"
	}
	],


	"onlineCourses": [
		{
		"title": "JavaScript",
		"school": "Udacity",
		"dates": 2014,
		"url": "www.udacity/java"
		},

		{
		"title": "HTML/CSS",
		"school": "Udacity",
		"dates": 2014,
		"url": "www.udacity.com"
		}
	]
	
};


var bioPhoto = HTMLbioPic.replace("%data%", bio.biopic);
$("#biopic").append(bioPhoto);


if(bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
};





for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);


	$(".work-entry:last").append(formattedEmployerTitle);
	$(".work-entry:last").append(formattedDates);
	$(".work-entry:last").append(formattedLocation);
	$(".work-entry:last").append(formattedDescription);

}

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});
  
/*
function inName(name){
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] +" "+ name[1];
}
*/


$('#main').append(internationalizeButton);

/*
$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.contactInfo);
$("#main").append(bio.Photo);
$("#main").append(bio.welcomeMessage);
$("#main").append(bio.skills);
$("#main").append(work["position"]);
$("#main").append(education.lastSchool);

*/

