var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
];

var Compliment = function(){

};

Compliment.all = function(){
  return compliments;
};

Compliment.create = function(compliment){
  compliments.push(compliment);
  return compliment;
};

module.exports = Compliment;
