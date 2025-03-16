//Task 1: Creating the Base Structure
const riskDashboard = document.getElementById("riskDashboard");
console.log("risk dashboard loaded");

function addRiskItem(riskName, riskLevel, department) {
    const riskCard = document.createElement("div");
    riskCard.className = "riskCard";

    updateRiskCardStyle(riskCard, riskLevel);
    
    riskCard.innerHTML = `
    <p><strong>risk name:</strong>${riskName}</p>
    <p><strong>risk level:</strong><span class="riskLevelText">${riskLevel}</span></p>
    <p><strong>department:</strong>${department}</p>
    <button class="resolveButton">resolve</button>
    `;
//Task 3: Removing Risk Items
const resolveButton = riskCard.querySelector(".resolveButton");
resolveButton.addEventListener("click", function (event) {
//Task 6: Handling Event Propagation
event.stopPropagation();
riskDashboard.removeChild(riskCard);
});

riskCard.addEventListener("click", function (event) {
event.stopPropagation();
});

riskDashboard.appendChild(riskCard);
}

//Task 5: Implementing Bulk Updates
function increaseRiskLevels () {
    const riskCards = document.querySelectorAll(".riskCard");
    riskCards.forEach((riskCard) => {
        const riskLevelText = riskCard.querySelector(".riskLevelText");
        let currentLevel = riskLevelText.textContent.trim();

        switch (currentLevel.toLowerCase()) {
            case "low":
                riskLevelText.textContent = "medium";
                updateRiskCardStyle(riskCard, "medium");
                break;
            case "medium":
                riskLevelText.textContent = "high";
                updateRiskCardStyle(riskCard, "high");
                break;
            case "high":
                default: // does nothing
        }
    });
}
//Task 4: Categorizing Risks by Level
function updateRiskCardStyle(riskCard, riskLevel) {
    switch (riskLevel.toLowerCase()) {
        case "low":
            riskCard.style.backgroundColor = "green";
            break;
        case "medium":
            riskCard.style.backgroundColor = "yellow";
            break;
        case "high":
            riskCard.style.backgroundColor = "red";
            break;
        default:
            riskCard.style.backgroundColor = "white";
    }
}
document.getElementById("riskForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const riskName = document.getElementById("riskName").value;
    const riskLevel = document.getElementById("riskLevel").value;
    const department = document.getElementById("department").value;


//Task 2: Adding Risk Items Dynamically
addRiskItem(riskName, riskLevel, department);
document.getElementById("riskForm").reset();
});
document.getElementById("increaseRiskLevels").addEventListener("click", increaseRiskLevels);

// test cases task 2
addRiskItem("Software System Failure", "High", "IT");
addRiskItem("Legal Liabilities from Contracts", "Medium", "Legal");

// test case task 3
addRiskItem("Equipment Failure", "Medium", "Manufacturing");

// test cases task 4
addRiskItem("Customer Data Privacy Violation", "High", "IT");
addRiskItem("HR compliance issue", "Low", "human resources");

// test case task 5
addRiskItem("Employee Retention", "Low", "HR");

