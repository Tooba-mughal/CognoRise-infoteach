document.addEventListener('DOMContentLoaded', function () {
    const countdownForm = document.getElementById('countdownForm');
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    function updateCountdown(targetDate) {
        const now = new Date();
        const timeDifference = targetDate - now;

        if (timeDifference <= 0) {
            clearInterval(countdownInterval);
            daysElement.textContent = "0 Days";
            hoursElement.textContent = "0 Hours";
            minutesElement.textContent = "0 Minutes";
            secondsElement.textContent = "0 Seconds";
            return;
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        daysElement.textContent = `${days} Days`;
        hoursElement.textContent = `${hours} Hours`;
        minutesElement.textContent = `${minutes} Minutes`;
        secondsElement.textContent = `${seconds} Seconds`;
    }

    let countdownInterval;

    countdownForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const dateInput = document.getElementById('date').value;
        const timeInput = document.getElementById('time').value;
        const targetDateTime = `${dateInput}T${timeInput}`;
        const targetDate = new Date(targetDateTime);

        if (countdownInterval) {
            clearInterval(countdownInterval);
        }

        // Initial call to update the countdown immediately
        updateCountdown(targetDate);

        // Update countdown every second
        countdownInterval = setInterval(function () {
            updateCountdown(targetDate);
        }, 1000);
    });
});
