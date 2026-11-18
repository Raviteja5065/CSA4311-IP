
interface Complaint {
    id: number;
    user: string;
    category: string;
    description: string;
    status: string;
}

var complaints: Complaint[] = [
    {
        id: 101,
        user: "Divya",
        category: "Electricity",
        description: "Power failure",
        status: "Pending"
    },
    {
        id: 102,
        user: "Sri",
        category: "Water",
        description: "Water leakage",
        status: "Pending"
    }
];

console.log("Complaint Details");

for (var c of complaints) {
    console.log("ID: " + c.id);
    console.log("User: " + c.user);
    console.log("Category: " + c.category);
    console.log("Description: " + c.description);
    console.log("Status: " + c.status);
    console.log("----------------");
}

complaints[0].status = "Resolved";

console.log("Updated Status: " + complaints[0].status);