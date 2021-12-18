const calcDate = (tripDate, shortDate) => {
    // var x = parseInt(tripDate)
    // var y = parseInt(shortDate);
    console.log("Trip Date= " + tripDate);
    console.log("Short Date= " + shortDate);
    var timeDiff = tripDate - shortDate;
    console.log("Printing TimeDiff")
    console.log(timeDiff)
    const timeDiffDays = timeDiff/86400000;
    console.log(timeDiffDays);
    if (timeDiffDays >7){
        console.log("Travel date is further than 7 days away");
        return true;
    } else {
        console.log("Travel Date within the next 7 days");
        return false; 
    }
};

export {calcDate}