document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        initApplication();
    }
}

function initApplication(){
	this.grandPrix = new Race(4);

	document.getElementById("theBody").onclick = function(){
		console.log("clicked");
		grandPrix.hasRaceStarted = true;
	}

	setInterval("this.grandPrix.updateRace()", 1000/24);
}

function Race(numberOfRacers){
	this.numRacers = numberOfRacers;
	this.racers = []; //array of Racer objects
	this.distance = 200;
	this.hasRaceStarted = false;
	this.raceTrack = new RaceTrack(); //this is the canvas ... also a RaceTrack Object

	for(var i = 0; i<this.numRacers; i++){
		var tempRacer = new Racer(i);
		this.racers[i] = tempRacer;
	}
}

//variation 2... http://stackoverflow.com/questions/387707/whats-the-best-way-to-define-a-class-in-javascript
Race.prototype.updateRace = function(){
	if(this.hasRaceStarted){
		console.log("updating");
		for(var i = 0; i < this.numRacers; i++){
			this.racers[i].updateRacer();
			this.racers[i].drawRacer(i, this.raceTrack);
		}
	}
}

function Racer(racerNumber){
	var self = this;
	self.name = "Racer" + racerNumber + 1;
	self.color = [ Math.floor(Math.random()*255) , Math.floor(Math.random()*255) , Math.floor(Math.random()*255) ];

	self.position = 0;
	self.speed = 0;
	self.acceleration = .5;

	self.maxSpeed = 50;

	self.updateRacer = function (){
		if(self.speed <= self.maxSpeed){
			self.speed += self.acceleration;
		}
		self.position += self.speed;
	}

	self.drawRacer = function (_raceNumber, canvas){
		console.log("drawing");
		// console.log(self.name);
		// console.log(self.color);
		// console.log(self.position);
		// console.log(self.speed);
		// console.log(self.acceleration);
		if (_raceNumber == 0) {
			canvas.context.fillStyle = "rgb(255,255,255)";
			canvas.context.fillRect (0, 0, window.innerWidth, window.innerHeight);
		};

		console.log(canvas.context);
		// canvas.context.fillStyle = "rgb(0,0,0)";
		console.log(self.color[0] + "," + self.color[1] + "," + self.color[2]);
		canvas.context.fillStyle = "rgb(" + self.color[0] + "," + self.color[1] + "," + self.color[2] + ")";
		console.log(self.position);
		canvas.context.fillRect (self.position, (_raceNumber*75)+10, 75, 50);
	}
}

function RaceTrack(){
	var self = this;
	self.canvas = document.getElementById("raceTrackCanvas");
	self.context = self.canvas.getContext('2d');
	self.canvas.width = window.innerWidth;
	self.canvas.height = window.innerHeight;
}























