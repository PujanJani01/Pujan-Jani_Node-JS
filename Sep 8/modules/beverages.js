let beverage;

exports.beverages = (ans) => {
    switch(ans) {
        case "1": beverage = "Pepsi"; break;
        case "2": beverage = "Coke"; break;
        case "3": beverage = "Fanta"; break;
        case "4": beverage = "Sprite"; break;
        case "5": beverage = "Not Selected"; break;
        default: beverage = "Invalid beverage";
    }       
    return beverage;    
}