const calcDate = (tripDate, shortDate) => {
    // console.log("Trip Date= " + tripDate);
    // console.log("Short Date= " + shortDate);
    var timeDiff = tripDate - shortDate;
    // console.log("Printing TimeDiff")
    // console.log(timeDiff)
    const timeDiffDays = timeDiff/86400000;
    const roundedDate = Math.ceil(timeDiffDays);
    return roundedDate
    // console.log(timeDiffDays);
    
};

export {calcDate}