//1) Write a function that displays the current date and time in the format YYYY-MM-DD HH:MM:SS.

function getCurrentDateTime() {
  // Create a date object in IST
  const now = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
  const istDate = new Date(now);

  const year = istDate.getFullYear();
  const month = String(istDate.getMonth() + 1).padStart(2, "0");
  const day = String(istDate.getDate()).padStart(2, "0");

  let hours = istDate.getHours();
  const minutes = String(istDate.getMinutes()).padStart(2, "0");
  const seconds = String(istDate.getSeconds()).padStart(2, "0");

  // Determine AM or PM
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert hours to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12;
  hours = String(hours).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds} ${ampm} IST`;
}

console.log(getCurrentDateTime());

//Output: 2024-07-13 11:07:45 PM IST


//2) Write a function that calculates the number of days between two dates.

function daysBetweenDates(date1, date2) {
  let oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
  let date1Ms = date1.getTime();
  let date2Ms = date2.getTime();
  let differenceMs = Math.abs(date1Ms - date2Ms);
  let days = Math.round(differenceMs / oneDay);
  return days;
}
let date1 = new Date("2024-07-1");
let date2 = new Date("2024-07-18");
let days = daysBetweenDates(date1, date2);
console.log(
  `Number of days between the dates: ${daysBetweenDates(date1, date2)}`
);

//Output: Number of days between the dates: 17


//3) Write a function that returns the day of the week for a given date.

function getDayOfWeek(date) {
  let days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = date.getDay();
  return days[day];
}
let date = new Date("2024-06-23");
let dayOfWeek = getDayOfWeek(date);
console.log(dayOfWeek);

//Output: Sunday

/* -------------------------End------------------------- */

function getDayOfWeek(date) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    // Ensure we're working with a Date object
    const dateObject = new Date(date);
    
    // Get the day index (0-6)
    const dayIndex = dateObject.getDay();
    
    // Return the corresponding day name
    return daysOfWeek[dayIndex];
  }
  
  // Example usage:
  console.log(getDayOfWeek('2024-07-13')); // Saturday
  console.log(getDayOfWeek(new Date())); // Today's day of the week
  console.log(getDayOfWeek('2024-01-01')); // Monday
  console.log(getDayOfWeek('2024-12-25')); // Wednesday