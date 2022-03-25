var myPicture = document.getElementById("Games");
var counter = 0;

var digital;
digital = [
			"imgs/PlayStation4.jpg",
			"imgs/Xbox1.jpg",
			"imgs/WiiU.jpg",
			"imgs/NintendoSwitch.jpg"
			];

var description = [
	"The PlayStation 4 (PS4) is a home video game console developed by Sony Computer Entertainment. Announced as the successor to the PlayStation 3 in February 2013, it was launched on November 15, 2013 in North America, November 29, 2013 in Europe, South America and Australia, and on February 22, 2014 in Japan. A console of the eighth generation, it competes with Microsoft's Xbox One and Nintendo's Wii U and Switch.", 
	"The Xbox One is a home video game console developed by Microsoft. Announced in May 2013, it is the successor to Xbox 360 and the third base console in the Xbox series of video game consoles. It was first released in North America, parts of Europe, Australia, and South America in November 2013, and in Japan, China, and other European countries in September 2014. It is the first Xbox game console to be released in China, specifically in the Shanghai Free-Trade Zone. Microsoft marketed the device as an 'all-in-one entertainment system', hence the name 'Xbox One'. A console of the eighth generation, it mainly competes against Sony's PlayStation 4 and Nintendo's Wii U and Switch.", 
	"The Wii U (/ˌwiː ˈjuː/ WEE YOO) is a home video game console developed by Nintendo as the successor to the Wii. Released in late 2012, it is the first eighth-generation video game console and competed with Microsoft's Xbox One and Sony's PlayStation 4.", 
	"The Nintendo Switch is a video game console, developed by Nintendo and released worldwide in most regions on March 3, 2017. It is a hybrid console that can be used as either a home console or a portable device. Its wireless Joy-Con controllers, with standard buttons and directional analog sticks for user input, motion sensing, and tactile feedback, can attach to both sides of the console to support handheld-style play. They can also connect to a grip accessory to provide a traditional home console gamepad form, or be used individually in the hand like the Wii Remote and Nunchuk, supporting local multiplayer modes. The Nintendo Switch's software supports online gaming through Internet connectivity, as well as local wireless ad hoc connectivity with other consoles. Nintendo Switch games and software are available on both physical flash-based ROM cartridges and digital distribution via Nintendo eShop; the system has no region lockout. A handheld-focused revision of the system, called the Nintendo Switch Lite, was released on September 20, 2019."
				  ];

var gameLink = [
	"https://www.playstation.com/en-us/",
	"https://www.microsoft.com/en-us/",
	"https://www.nintendo.com/",
	"https://www.nintendo.com/"
			   ];

function changeGameSystem()
{
	if (counter > digital.length-1)
	{
		counter = counter * 0;
		myPicture.src = digital[counter];
		document.getElementById("descriptions").innerHTML = description[counter];
		document.getElementById("gameLinks").innerHTML = gameLink[counter];
	}

	else
	{
		counter++;
		myPicture.src = digital[counter-1];
		document.getElementById("descriptions").innerHTML = description[counter-1];
		document.getElementById("gameLinks").innerHTML = gameLink[counter-1];
	}
}

function changeGameSystemToTheLeft()
{
	if (counter < 0)
	{
		counter = digital.length;
		myPicture.src = digital[counter];
		document.getElementById("descriptions").innerHTML = description[counter];
		document.getElementById("gameLinks").innerHTML = gameLink[counter];
	}

	else
	{
		counter--;
		myPicture.src = digital[counter];
		document.getElementById("descriptions").innerHTML = description[counter];
		document.getElementById("gameLinks").innerHTML = gameLink[counter];
	}
}

