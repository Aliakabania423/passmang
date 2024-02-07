// JavaScript code in script.js

// Function to save data
function saveData() {
    var password = document.getElementById("passwordInput").value;
    var email = document.getElementById("emailInput").value;

    // Get saved data from local storage
    var savedPasswords = JSON.parse(localStorage.getItem("savedPasswords")) || [];

    // Add new data
    savedPasswords.push({ password: password, email: email });

    // Save updated data to local storage
    localStorage.setItem("savedPasswords", JSON.stringify(savedPasswords));

    alert("Data saved!");

    // Clear input fields
    document.getElementById("passwordInput").value = "";
    document.getElementById("emailInput").value = "";
}

// Function to show saved passwords
function showSavedPasswords() {
    var savedPasswords = JSON.parse(localStorage.getItem("savedPasswords")) || [];

    var savedDataContainer = document.getElementById("savedData");
    savedDataContainer.innerHTML = "";

    if (savedPasswords.length > 0) {
        savedPasswords.forEach(function(item, index) {
            var listItem = document.createElement("li");
            listItem.textContent = "Password: " + item.password + ", Email: " + (item.email || "N/A");

            // Add a delete button
            var deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.onclick = function() {
                deletePassword(index);
            };
            listItem.appendChild(deleteButton);

            savedDataContainer.appendChild(listItem);
        });
    } else {
        var noDataItem = document.createElement("li");
        noDataItem.textContent = "No saved passwords found.";
        savedDataContainer.appendChild(noDataItem);
    }

    // Show the section for saved passwords
    document.getElementById("savedSection").style.display = "block";
}

// Function to delete a password
function deletePassword(index) {
    var savedPasswords = JSON.parse(localStorage.getItem("savedPasswords")) || [];

    // Remove the corresponding password from the array
    savedPasswords.splice(index, 1);

    // Update the data in local storage
    localStorage.setItem("savedPasswords", JSON.stringify(savedPasswords));

    // Reload the displayed passwords
    showSavedPasswords();
}

// JavaScript code in script.js

// Function to check PIN
// JavaScript code in script.js

// Function to check PIN
// JavaScript code in script.js

// Function to check if PIN exists

// JavaScript code in script.js

// Function to check if PIN exists
function checkPIN() {
    var enteredPIN = document.getElementById("pinInput").value;
    var savedPIN = localStorage.getItem("appPIN");

    if (!savedPIN) {
        // If no PIN exists, create a new PIN
        localStorage.setItem("appPIN", enteredPIN);
        document.getElementById("pinEntry").style.display = "none";
        document.getElementById("appContent").style.display = "block";
    } else {
        // If a PIN exists, check if the entered PIN is correct
        if (enteredPIN === savedPIN) {
            document.getElementById("pinEntry").style.display = "none";
            document.getElementById("appContent").style.display = "block";
        } else {
            alert("Incorrect PIN. Please try again.");
        }
    }

    // Clear the PIN input field
    document.getElementById("pinInput").value = "";
}
