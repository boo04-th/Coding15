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