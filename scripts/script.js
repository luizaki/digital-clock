// main updateTime function
function updateTime() {
    // set up day of week and month arrays for formatting
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG','SEP', 'OCT', 'NOV', 'DEC'];

    // retrieve current datetime
    const current = new Date();

    // retrieving individual datetime components
    let hours = current.getHours().toString().padStart(2, '0');
    let minutes = current.getMinutes().toString().padStart(2, '0');
    let seconds = current.getSeconds().toString().padStart(2, '0');

    let dayOfWeek = days[current.getDay()];
    let month = months[current.getMonth()];
    let day = current.getDate().toString().padStart(2, '0');
    let year = current.getFullYear().toString();

    document.getElementById('time').innerHTML = `${hours}:${minutes}:${seconds}`;
    document.getElementById('date').innerHTML = `${dayOfWeek} ${month} ${day} ${year}`;
}

// call updateTime every 1000 milliseconds
setInterval(updateTime, 1000);