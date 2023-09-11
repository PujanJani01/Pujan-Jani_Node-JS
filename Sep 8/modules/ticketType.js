let ticketType;

exports.ticketType = (ans) => {
    switch(ans) {
        case "1": ticketType = "Silver-Rs.150"; break;
        case "2": ticketType = "Gold-Rs.200"; break;
        case "3": ticketType = "Platinum-Rs.300"; break;
        default: ticketType = "Invalid ticket type";
    }       
    return ticketType;    
}