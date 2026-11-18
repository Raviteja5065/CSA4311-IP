
interface Candidate {
    id: number;
    name: string;
    votes: number;
}

var candidates: Candidate[] = [
    { id: 1, name: "Candidate A", votes: 0 },
    { id: 2, name: "Candidate B", votes: 0 },
    { id: 3, name: "Candidate C", votes: 0 }
];

console.log("Election Candidates");

for (var c of candidates) {
    console.log(c.id + ". " + c.name);
}

var voterID: string = "V101";
var selected: number = 2;

candidates[selected - 1].votes++;

console.log("Voter ID: " + voterID);
console.log("Vote submitted successfully");

console.log("Election Results");

for (var c of candidates) {
    console.log(c.name + ": " + c.votes);
}