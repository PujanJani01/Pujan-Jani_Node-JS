const readline = require('readline');
const { movies } = require('./modules/movies.js');
const { numOfTickets } = require('./modules/numOfTickets.js');
const { timing } = require('./modules/timing.js');
const { ticketType } = require('./modules/ticketType.js');
const { availabelSeats } = require('./modules/availabelSeats.js');
const { beverages } = require('./modules/beverages.js');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function movieTicketBooking() {
console.log('\nWelcome to movie ticket booking\n');

rl.question('Running movies: \n1.Jawan \n2.3 Ekka \n3.Gadar 2 \n4.Dream girl 2 \n\nChoose a movie: ',
    (ans) => {
        let movie = movies(ans);
        if (movie == "Invalid input") {
            console.log('\nInvalid input');
            movieTicketBooking();
        }
        rl.question('How many tickets do you want? ', (tickets) => {
            let ticketCount = numOfTickets(tickets);
            rl.question('Timing list: \n1. 9:00 AM \n2. 12:00 PM \n3. 3:00 PM \n4. 6:00 PM \n\nChoose a timing: ',
                (time) => {
                    let selectedTime = timing(time);
                    if(selectedTime == "Invalid input") {
                        console.log('\nInvalid input');
                        movieTicketBooking();
                    }
                    rl.question('Choose ticket type: \n1. Silver-Rs.150 \n2. Gold-Rs.200 \n3. Platinum-Rs.300 \n\nChoose a ticket type: ',
                        (type) => {
                            let selectedTicketType = ticketType(type);
                            if(selectedTicketType == "Invalid input") {
                                console.log('\nInvalid input');
                                movieTicketBooking();
                            }
                            console.log("Available seats: ", availabelSeats());
                            rl.question('\nSelect beverage (Rs.50): \n1. Pepsi \n2. Coke \n3. Fanta \n4. Sprite \n5. Skip\n\nChoose a beverage: ',
                                (beverage) => {
                                    let selctedBeverage = beverages(beverage);
                                    if(selctedBeverage == "Invalid input") {
                                        console.log('\nInvalid input');
                                        movieTicketBooking();
                                    }
                                    let beveragePrice = (selctedBeverage == "Not Selected") ? 0 : 50;
                                    let totalAmount = ticketCount * selectedTicketType.slice(selectedTicketType.indexOf('.') + 1) + beveragePrice;
                                    console.log('\nYour ticket detials: \nMovie: ' + movie + '\nNumber of tickets: ' + ticketCount + '\nTiming: ' + selectedTime + '\nTicket type: ' + selectedTicketType + '\nBeverage: ' + selctedBeverage + '\nTotal amount: ' + totalAmount + '\n');
                                    rl.question('\nConfirm booking? (y/n) ', (ans) => {
                                        if (ans.toLowerCase() == 'y') {
                                            console.log('\nYour ticket is booked');
                                        } else if (ans.toLowerCase() == 'n') {
                                            console.log('\nYour ticket is not booked');
                                        }
                                        else {
                                            console.log('\nInvalid input');
                                        }
                                        rl.close();
                                    });
                                });
                        });
                });
        });
    });
}

movieTicketBooking();
