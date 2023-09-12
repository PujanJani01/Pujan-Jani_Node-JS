let timing;

exports.timing = (ans) => {
    switch(ans) {
        case "1": timing = "9:00 AM"; break;
        case "2": timing = "12:00 PM"; break;
        case "3": timing = "3:00 PM"; break;
        case "4": timing = "6:00 PM"; break;
        default: timing = "Invalid input";
    }       
    return timing;    
}