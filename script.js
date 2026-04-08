// script.js

// Basic JavaScript Functionality

// Function to display current date and time in UTC
function displayDateTime() {
    const now = new Date();
    const utcDate = now.toISOString().replace(/T/, ' ').replace(/Z/, '');
    return utcDate;
}

console.log('Current Date and Time (UTC):', displayDateTime());