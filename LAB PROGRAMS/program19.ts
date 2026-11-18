
interface Complaint {
    farmer: string;
    animal: string;
    symptoms: string;
    solution: string;
    status: string;
}

var complaint: Complaint = {
    farmer: "Divya",
    animal: "Cow",
    symptoms: "Fever and loss of appetite",
    solution: "Consult veterinary doctor",
    status: "Pending"
};

console.log("VetCure Complaint Details");

console.log("Farmer: " + complaint.farmer);
console.log("Animal: " + complaint.animal);
console.log("Symptoms: " + complaint.symptoms);

console.log("Doctor Solution: " + complaint.solution);

complaint.status = "Resolved";

console.log("Complaint Status: " + complaint.status);