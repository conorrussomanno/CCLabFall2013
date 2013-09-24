document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        initApplication();
    }
}

function initApplication(){
	var grandPrix = new Race(5);

	document.getElementById("theBody").onclick = function(){
		console.log("clicked");
		grandPrix.hasRaceStarted = true;
	}

	setInterval(grandPrix.updateRace, 1000/24);
}

function Race(numberOfRacers){
	var self = this;
	self.numRacers = numberOfRacers;
	self.racers = []; //array of Racer objects
	self.distance = 200;
	self.hasRaceStarted = false;
	self.raceTrack = document.getElementById("raceTrackCanvas"); //this is the canvas ... also a RaceTrack Object
	self.raceTrack.context = self.raceTrack.getContext('2d');
	self.raceTrack.width = window.innerWidth;
	self.raceTrack.height = window.innerHeight; 


	for(var i = 0; i<self.numRacers; i++){
		var tempRacer = new Racer(i);
		self.racers[i] = tempRacer;
	}

	self.updateRace = function (){
		if(self.hasRaceStarted == true){
			console.log("updating");
			for(var i = 0; i < self.numRacers; i++){
				self.racers[i].updateRacer();
				self.racers[i].drawRacer(i, self.raceTrack);
			}
		}
	};
}

function Racer(racerNumber){
	var self = this;
	self.name = "Racer" + racerNumber + 1;
	self.color = [ Math.floor(Math.random()*255) , Math.floor(Math.random()*255) , Math.floor(Math.random()*255) ];

	self.position = 0;
	self.speed = 0;
	self.acceleration = (Math.random())*.5;

	self.maxSpeed = 50;

	self.updateRacer = function (){
		if(self.speed <= self.maxSpeed){
			self.speed += self.acceleration;
		}
		self.position += self.speed;
	}

	self.drawRacer = function (_racerNumber, _raceTrack){
		console.log("drawing");
		// console.log(self.name);
		// console.log(self.color);
		// console.log(self.position);
		// console.log(self.speed);
		// console.log(self.acceleration);
		if (_racerNumber < 1) {
			_raceTrack.context.fillStyle = "rgba(255,255,255,.5)";
			_raceTrack.context.fillRect (0, 0, window.innerWidth, window.innerHeight);
		};

		console.log(_raceTrack.context);
		// canvas.context.fillStyle = "rgb(0,0,0)";
		console.log(self.color[0] + "," + self.color[1] + "," + self.color[2]);
		_raceTrack.context.fillStyle = "rgb(" + self.color[0] + "," + self.color[1] + "," + self.color[2] + ")";
		console.log(self.position);
		_raceTrack.context.fillRect (self.position, (_racerNumber*75)+10, 75, 50);

	}
}

// function RaceTrack(){
// 	var self = this;
// 	self.canvas = document.getElementById("raceTrackCanvas");
// 	self.context = self.canvas.getContext('2d');
// 	self.canvas.width = window.innerWidth;
// 	self.canvas.height = window.innerHeight;
// 	// return self.canvas;
// }























