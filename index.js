// Code your solutions in this file


function writeCards( namesArray, event ) {
    let thankYouCards = []
    for ( let i = 0; i < namesArray.length; i++ ) {
        thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
    }
    return thankYouCards
}

writeCards(["Ada", "Brendan", "Ali"], "birthday");

function countDown( positiveInteger ) {
    let countdown = positiveInteger;
    while (countdown >= 0) {
        console.log(countdown--);
    }
}

countDown(10)