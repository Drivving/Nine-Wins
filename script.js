document.addEventListener("DOMContentLoaded", function() {
    const notification = document.querySelector('.notification');
    const acceptButton = document.getElementById('accept-button');

    // Function to hide the notification gradually
    function hideNotification() {
        notification.style.opacity = '0'; // Set opacity to 0
        setTimeout(() => {
            notification.style.display = 'none'; // Hide the notification after the transition
        }, 500); // Adjust the duration of the transition
    }

    // Event listener for the "Understood!" button
    acceptButton.addEventListener('click', function() {
        hideNotification();
    });
});
