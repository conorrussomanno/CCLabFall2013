function Race(numberOfRacers){
	var self = this;
	self.numRacers = numberOfRacers;
	self.racers = []; //array of Racer objects
	self.distance = 200;
	self.hasRaceStarted = false;
	self.raceTrack = new RaceTrack(); //this is the canvas ... also a RaceTrack Object

	for(var i = 0; i<self.numRacers; i++){
		var tempRacer = new Racer(i);
		self.racers[i] = tempRacer;
	}

	self.updateRace = function (){
		if(self.hasRaceStarted){
			console.log("updating");
			for(var i = 0; i < self.numRacers; i++){
				self.racers[i].updateRacer();
				self.racers[i].drawRacer(i, self.raceTrack);
			}
		}
	};
}