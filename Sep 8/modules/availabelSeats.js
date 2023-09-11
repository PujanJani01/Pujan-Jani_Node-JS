let seat;

exports.availabelSeats = () => {
    let seat = Math.floor(Math.random() * 100);
    return seat;
}