
function formatDate(inputDate) {
    const dateObject = new Date(inputDate);
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const formattedDate = dateObject.toLocaleDateString('en-US', options);
    return formattedDate;
  }



function timeAgo(pastDate) {
  // Parse the input strings to Date objects
  const past = new Date(pastDate);
  const currentDate = new Date();
  

 

  // Calculate the difference in milliseconds
  const timeDiff = Math.abs(currentDate - past);

  // Calculate the difference in years, months, and days
    const yearDiff = Math.floor(timeDiff / (365.25 * 24 * 60 * 60 * 1000));
    const monthDiff = Math.floor(timeDiff / (30.44 * 24 * 60 * 60 * 1000));
    const dayDiff = Math.floor(timeDiff / (24 * 60 * 60 * 1000));
    const hourDiff = Math.floor(timeDiff / (60 * 60 * 1000));
    const minuteDiff = Math.floor(timeDiff / (60 * 1000));


  // Determine the appropriate unit of difference
  if (yearDiff > 0) {
    return `${yearDiff === 1 ? 'a year ago' : `${formatDate(past)}`} `;
} else if (monthDiff > 0) {
    return `${monthDiff} ${monthDiff === 1 ? 'month' : 'Months'} Ago`;
} else if (dayDiff > 0) {
    return `${dayDiff} ${dayDiff === 1 ? 'Day' : 'days'} Ago`;
} else if (hourDiff > 0) {
    return `${hourDiff} ${hourDiff === 1 ? 'Hour' : 'Hours'} Ago`;
} else if (minuteDiff > 0) {
    return `${minuteDiff} ${minuteDiff === 1 ? 'Minute' : 'Minutes'} Ago`;
} else {
    return 'Just now';
}
}


 

  export default timeAgo