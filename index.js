document.addEventListener('DOMContentLoaded', function () {
    // Set the date we're counting down to
    const countDownDate = new Date().getTime() + 5400000; // 1 hour 30 minutes in milliseconds

    // Update the countdown every 1 second
    const x = setInterval(function () {
        // Get the current date and time
        const now = new Date().getTime();

        // Calculate the remaining time
        const distance = countDownDate - now;

        // Calculate hours, minutes, and seconds
        const hours = Math.floor(distance / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the countdown
        document.querySelector('.hours').textContent = hours + 'hr';
        document.querySelector('.minutes').textContent = minutes + 'mint';
        document.querySelector('.seconds').textContent = ('0' + seconds).slice(-2) + 'sec';

        // If the countdown is over, display a message
        if (distance < 0) {
            clearInterval(x);
            document.getElementById('timer').innerHTML = 'EXPIRED';
        }
    }, 1000);
});
