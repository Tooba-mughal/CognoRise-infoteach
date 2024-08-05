document.addEventListener('DOMContentLoaded', function () {
    const bmiForm = document.getElementById('bmiForm');
    const bmiValueElement = document.getElementById('bmiValue');
    const bmiCategoryElement = document.getElementById('bmiCategory');

    bmiForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get user input values
        const weight = parseFloat(document.getElementById('weight').value);
        const heightCm = parseFloat(document.getElementById('height').value);

        // Check if inputs are valid
        if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
            alert('Please enter valid positive numbers for weight and height.');
            return;
        }

        // Convert height from centimeters to meters
        const heightM = heightCm / 100;

        // Calculate BMI using the formula: weight / (height in meters)^2
        const bmi = weight / (heightM * heightM);

        // Determine BMI category
        let category = '';
        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi < 24.9) {
            category = 'Normal weight';
        } else if (bmi < 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obesity';
        }

        // Display the result
        bmiValueElement.textContent = bmi.toFixed(2);
        bmiCategoryElement.textContent = category;
    });
});
