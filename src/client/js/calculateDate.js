const calcDate = (tripDate, shortDate) => {
    // console.log("Trip Date= " + tripDate);
    // console.log("Short Date= " + shortDate);
    var timeDiff = tripDate - shortDate;
    // console.log("Printing TimeDiff")
    // console.log(timeDiff)
    const timeDiffDays = timeDiff/86400000;
    return timeDiffDays
    // console.log(timeDiffDays);
    
};

export {calcDate}