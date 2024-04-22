document.addEventListener('DOMContentLoaded', function () {
    // Function to update copyright year
    const updateCopyrightYear = () => {
        const copyrightYearElement = document.getElementById('copyright-year');
        if (copyrightYearElement) {
            const currentYear = new Date().getFullYear();
            copyrightYearElement.textContent = currentYear;
        } else {
            console.error("Element with ID 'copyright-year' not found.");
        }
    };

    // Function to display the current date in a specific format
    const displayCurrentDate = () => {
        const currentDate = new Date();
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        const dayOfWeek = dayNames[currentDate.getDay()];
        const month = monthNames[currentDate.getMonth()];
        const day = currentDate.getDate();
        const year = currentDate.getFullYear();

        const formattedDate = `${dayOfWeek}, ${month} ${day}, ${year}`;

        const currentDateElement = document.getElementById('current-date');
        if (currentDateElement) {
            currentDateElement.textContent = formattedDate;
        } else {
            console.error("Element with ID 'current-date' not found.");
        }
    };

    // Call functions to update copyright year and display current date
    updateCopyrightYear();
    displayCurrentDate();
});



