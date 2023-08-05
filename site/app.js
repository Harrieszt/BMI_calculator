// Get the button and content elements
const changeContentBtn = document.getElementById("changeContentBtn");
const welcomeDiv = document.getElementById("welcomeText");
const contentDiv = document.getElementById("content");

// Function to simulate typing effect
function typeWriter(element, text, index, speed) {
    if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(() => typeWriter(element, text, index, speed), speed);
    }
}

// Typing effect on welcome text
const welcomeText = "Welcome to our dynamic website!";
typeWriter(welcomeDiv, welcomeText, 0, 50);

// Add event listener to the button
changeContentBtn.addEventListener("click", () => {
    // Clear the previous content
    contentDiv.innerHTML = "";

    // Set the new content
    const newText = "New dynamic content has been added!";

    // Start the typing effect
    typeWriter(contentDiv, newText, 0, 50);
});
