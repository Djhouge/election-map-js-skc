var createCandidate = function(name, partyColor) {

  var candidate = {};
  candidate.name = name;
  candidate.electionResults = null;
  candidate.totalVotes = 0;
  candidate.partyColor = partyColor;

  candidate.tallyVotes = function() {
    this.tallyVotes = 0;
    for (var i = 0; i < this.electionResults.length; i++) {
      this.tallyVotes = this.tallyVotes + this.electionResults[i];
      console.log(this.tallyVotes);
    }
  };

  return candidate;
};

var beatrice = createCandidate("Beatrice Sanders", [132, 17, 11]);
var eliza = createCandidate("Eliza Warren", [245, 141, 136]);


beatrice.electionResults = [5, 1, 7, 2, 17, 6, 4, 2, 1, 1, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 11, 3, 2, 11, 1, 3, 7, 2];

eliza.electionResults = [4, 2, 4, 4, 38, 3, 3, 1, 2, 28, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 27, 3, 1, 2, 11, 2, 3, 1];

beatrice.electionResults[9] = 1;
eliza.electionResults[9] = 28;

beatrice.electionResults[4] = 17;
eliza.electionResults[4] = 38;

beatrice.electionResults[43] = 11;
eliza.electionResults[43] = 27;

var setStateResults = function(state) {
  theStates[state].winner = null;

  if (beatrice.electionResults[state] > eliza.electionResults[state]) {
    theStates[state].winner = beatrice;
  } else if (eliza.electionResults[state] > beatrice.electionResults[state]) {
    theStates[state].winner = eliza;
  }
  var stateWinner = theStates[state].winner;
  if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.partyColor;      
      }
  else {theStates[state].rgbColor = [11, 32, 57];}
  
 var stateInfoTable = document.getElementById('stateResults');

var header = stateInfoTable.children[0].children[0];
var body = stateInfoTable.children[1];

var stateName = header.children[0];
stateName.innerText = theStates[state].nameFull;
var abbrev = header.children[1];
abbrev.innerText = "(" + theStates[state].nameAbbrev + ")";

var candidate1Name = body.children[0].children[0];
candidate1Name.innerText = beatrice.name;
var candidate2Name = body.children[1].children[0];
candidate2Name.innerText = eliza.name;

var candidate1Results = body.children[0].children[1];
candidate1Results.innerText = beatrice.electionResults[state];
var candidate2Results = body.children[1].children[1];
candidate2Results.innerText = eliza.electionResults[state];

var winnersName = body.children[2].children[1];

if (theStates[state].winner === null) {
  winnersName.innerText = "DRAW";
} else {
winnersName.innerText = theStates[state].winner.name;
} 

}

beatrice.tallyVotes();
eliza.tallyVotes();


var winner = "???";
if (beatrice.tallyVotes > eliza.tallyVotes) {
  winner = beatrice.name;

} else if (beatrice.tallyVotes < eliza.tallyVotes) {
  winner = eliza.name;

} else {
  winner = "the election is a tie"
};

var countryInfoTable = document.getElementById('countryResults');
var row = countryInfoTable.children[0].children[0];
row.children[0].innerText = beatrice.name;
row.children[1].innerText = beatrice.tallyVotes;
row.children[2].innerText = eliza.name;
row.children[3].innerText = eliza.tallyVotes;
row.children[5].innerText = winner;


//console.log("The winner is..." + winner + "!!!");
