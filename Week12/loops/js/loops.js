var rando;

var pics = [
	"img/pic1.jpg",
	"img/pic2.jpg",
	"img/pic3.jpg",
	"img/pic4.jpg",
	"img/pic5.jpg"
]

for(i=0; i<10; i++){
	//console.log("hello" + i);
	console.log("hello" + i);	

	rando = Math.random();
	//rando = Math.round(Math.random(100)*100);
	console.log(rando);

	//document.getElementById("pics").innerHTML = "<img src='http://via.placeholder.com/350x150'>";
	//document.getElementById("pics").innerHTML += "<img src='http://via.placeholder.com/350x150'>";
	document.getElementById("pics").innerHTML += "<img src='" + pics[i] + "'>";
}

