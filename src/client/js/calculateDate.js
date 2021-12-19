const calcDate = (tripDate, shortDate) => {//this function calculates how many days from today the user's departure date is
    var timeDiff = tripDate - shortDate;
    const timeDiffDays = timeDiff/86400000;//convert difference (in milliseconds) to days
    const roundedDate = Math.ceil(timeDiffDays);
    return roundedDate    
};

export {calcDate}