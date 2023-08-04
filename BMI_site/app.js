function calculateBMI() {
    const heightInput = document.getElementById("height");
    const weightInput = document.getElementById("weight");
    const resultElement = document.getElementById("result");

    const height = parseFloat(heightInput.value) / 100; // Convert height from cm to meters
    const weight = parseFloat(weightInput.value);

    if (isNaN(height) || isNaN(weight)) {
        resultElement.textContent = "Please enter valid height and weight.";
        return;
        
    }

    const bmi = weight / (height * height);
    resultElement.textContent = "Your BMI is: " + bmi.toFixed(2); //float 2 point

    // Reset background color for all rows
    const rows = document.getElementsByTagName("tr");
    for (let i = 0; i < rows.length; i++) {
      rows[i].style.backgroundColor = "inherit";
    }

    // Change background color based on BMI range
    if (bmi < 16) {
      document.querySelector(".severely-underweight").style.backgroundColor = "#ffc0cb"; // Light Pink
    } else if (bmi >= 16 && bmi < 17) {
      document.querySelector(".underweight").style.backgroundColor = "#fff0b2"; // Light Yellow
    } else if (bmi >= 17 && bmi < 18.5) {
      document.querySelector(".mildly-underweight").style.backgroundColor = "#ffecb3"; // Light Yellow
    } else if (bmi >= 18.5 && bmi < 25) {
      document.querySelector(".normal-weight").style.backgroundColor = "#c8e6c9"; // Light Green
    } else if (bmi >= 25 && bmi < 30) {
      document.querySelector(".overweight").style.backgroundColor = "#ffe0b2"; // Light Orange
    } else if (bmi >= 30 && bmi < 35) {
      document.querySelector(".obesity-moderate").style.backgroundColor = "#ffcc80"; // Light Orange
    } else if (bmi >= 35 && bmi < 40) {
      document.querySelector(".obesity-severe").style.backgroundColor = "#ffab91"; // Light Orange
    } else {
      document.querySelector(".obesity-very-severe").style.backgroundColor = "#ff8a80"; // Light Red
    }
  }