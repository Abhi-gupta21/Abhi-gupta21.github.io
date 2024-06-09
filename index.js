function displaytime(){
    document.getElementById('digit-clock').innerHTML="Current time: " + Date(); 
}
setInterval(displaytime,500);


var shown = false;
function showhideemail(){
	if (shown){
		document.getElementById('email').innerHTML="Show my email";
		shown = false;
	}
	else{
		var myemail = "<a href='mailto:ketepask"+"@"+"ucmail.uc.edu'>ketepask"+"@"+"mail.uc.edu</a>";
		document.getElementById('email').innerHTML=myemail;
		shown=true;
	}
} 



function greet(){
    alert("Thank you for downloading my resume, hope you like it :)")
}
$(".pdf").click(greet)



function joke(){
    $.get("https://v2.jokeapi.dev/joke/Any?type=single", 
        function(result){
            if(result.length==0) return;
            console.log("From jokeapi: "+JSON.stringify(result));
            $("#response").html("A joke of the day: " + result.joke);
        }
    );
}
joke()
setInterval(joke,60000);

$.get("https://api.weatherbit.io/v2.0/current?lat=39.103699&lon=-84.513611&key=895a3d4574b3464ebccb923a947e25a9&include=minutely",
    function(result){
        if(result.length==0) return;
        $("#weather").html("description - " + result['data'][0]['weather']['description']);
    }
);

if(document.cookie.indexOf("username")<0){
    alert('welcome to the homepage for the first time!');
    document.cookie= new Date();
}else
    alert("my cookie: your last visit =" + document.cookie);
    document.cookie = new Date();