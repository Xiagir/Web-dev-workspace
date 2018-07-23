// var dice = document.getElementByClassName("dices");


function roll() {
  var random = Math.floor(Math.random() * 6) + 1;

  return random;
}
var index = 0;
// function changeSlides () {
//     var counter;
//     var slice = document.getElementsByClassName("Slides");
//     for (counter = 0; counter < slice.length; counter++) {
//         slice[counter].style.display = "none";
//     }
//     index++;
//     if (index > slice.length) {index = 1}
//     slice[index-1].style.display = "block";
//     setTimeout(changeSlides,2000);
// };
// document.addEventListener("DOMContentLoaded", changeSlides);

var gameBox = document.getElementById("gameBox");
function createGameBox (){
//	var myPic = gameBox.appendChild(document.createElement("img"));
//	myPic.setAttribute("src", "throwDice.jpg");
//	myPic.setAttribute("id", "throwDicePic");

	var pic1 = gameBox.appendChild(document.createElement("img"));
	pic1.setAttribute("id", "pic1");
	var pic2 = gameBox.appendChild(document.createElement("img"));
	pic2.setAttribute("id", "pic2");

	var gameStatus = gameBox.appendChild(document.createElement("p"));
	gameStatus.setAttribute("id", "gameStatus");
	gameStatus.appendChild(document.createTextNode("Click Start to play game"));


	var startButton = gameBox.appendChild(document.createElement("button"));
	startButton.setAttribute("id", "start");
	startButton.appendChild(document.createTextNode("Start"));

	var newButton = gameBox.appendChild(document.createElement("button"));
	newButton.setAttribute("id", "newButton");
	newButton.appendChild(document.createTextNode("Roll Again"));
	newButton.style.display = "none";

	var button = gameBox.appendChild(document.createElement("button"));
	button.setAttribute("id", "reset");
	button.appendChild(document.createTextNode("Reset"));
}
createGameBox();

var dice1, dice2;
var gameStatus = document.getElementById("gameStatus");
var newButton = document.getElementById("newButton");
var total;
function playGame() {

//	document.getElementById("throwDicePic").style.display = "none";
	dice1 = roll();
	dice2 = roll();
	total = dice1 + dice2;
	changePictures(dice1, dice2);



	document.getElementById("start").style.display = "none";
	if(total == 7 || total == 11){
		gameStatus.innerText = "That's a natural. You win";
		gameStatus.style.color = "Green";
	}else if (total == 2 || total ==3 || total == 12){
		gameStatus.innerText = "That's a craps. You lose.";
		gameStatus.style.color = "Red";
	}else{
		newButton.style.display = "inline";
		var point = total;
		gameStatus.innerText = "Your point is " + point;
		var askAgain = true;

		document.getElementById("newButton").onclick = function tossAgain(){
			dice1 = roll();
			dice2 = roll();
			total = dice1 + dice2;
			changePictures(dice1, dice2);

			if(total == point){
				gameStatus.innerText = "You made your point. You win";
				gameStatus.style.color = "Green";
				newButton.style.display = "none";
				askAgain =  false;
			}else if (total == 7){
				gameStatus.innerText = "That's a 7. You lose.";
				gameStatus.style.color = "Red";
				newButton.style.display = "none";
				askAgain =false;
			}
		}
	}
}
document.getElementById("start").addEventListener("click", playGame);


function changePictures(dice1, dice2) {

	switch(dice1){
		case 1: sourcePicture1 = '1dot.png'; break;
		case 2: sourcePicture1 = '2dot.png'; break;
		case 3: sourcePicture1 = '3dot.png'; break;
		case 4: sourcePicture1 = '4dot.png'; break;
		case 5: sourcePicture1 = '5dot.png'; break;
		case 6: sourcePicture1 = '6dot.png'; break;
	}
	document.getElementById("pic1").src = sourcePicture1;
	switch(dice2){
		case 1: sourcePicture2 = "1dot.png"; break;
		case 2: sourcePicture2 = "2dot.png"; break;
		case 3: sourcePicture2 = "3dot.png"; break;
		case 4: sourcePicture2 = "4dot.png"; break;
		case 5: sourcePicture2 = "5dot.png"; break;
		case 6: sourcePicture2 = "6dot.png"; break;
	}
	document.getElementById("pic2").src = sourcePicture2;
}
var dice1 = document.getElementById('dice1');


// document.getElementById("dice1").src = roll();
roll(dice1);
