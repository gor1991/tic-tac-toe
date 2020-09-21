
// 1 - X true
// 2 - O false
// 0 - empty

var step = 1;
var opponent = true;

var points = [
    [ 0, 0, 0 ],
    [ 0, 0, 0 ],
    [ 0, 0, 0 ],
];

// 0 - no one wins
// 1 - winner X
// 2 - winner O
function checkWinner() {
    if (
        (points[0][0] === 1 && points[0][1] === 1 && points[0][2] === 1) || 
        (points[1][0] === 1 && points[1][1] === 1 && points[1][2] === 1) || 
        (points[2][0] === 1 && points[2][1] === 1 && points[2][2] === 1) ||
        (points[0][0] === 1 && points[1][0] === 1 && points[2][0] === 1) ||
        (points[0][1] === 1 && points[1][1] === 1 && points[2][1] === 1) ||
        (points[0][2] === 1 && points[1][2] === 1 && points[2][2] === 1) ||
        (points[0][0] === 1 && points[1][1] === 1 && points[2][2] === 1) ||
        (points[0][2] === 1 && points[1][1] === 1 && points[2][0] === 1)
    ) {
        return 1;
    }

    if (
        (points[0][0] === 2 && points[0][1] === 2 && points[0][2] === 2) ||
        (points[1][0] === 2 && points[1][1] === 2 && points[1][2] === 2) ||
        (points[2][0] === 2 && points[2][1] === 2 && points[2][2] === 2) ||
        (points[0][0] === 2 && points[1][0] === 2 && points[2][0] === 2) ||
        (points[0][1] === 2 && points[1][1] === 2 && points[2][1] === 2) ||
        (points[0][2] === 2 && points[1][2] === 2 && points[2][2] === 2) ||
        (points[0][0] === 2 && points[1][1] === 2 && points[2][2] === 2) ||
        (points[0][2] === 2 && points[1][1] === 2 && points[2][0] === 2)
    ) {
        return 2
    }
    
    return 0;
}

function opponentClick(x, y) {
    
    // check the step
    if (step > 9) {
        return false;
    }
    
    // check availability
    if (points[x][y] === 0) {
        points[x][y] = opponent ? 1 : 2;
        // fill the point in html
        document.getElementById('point_' + x + '_' + y).style.backgroundColor = (opponent ? 'red' : 'blue');
        opponent = !opponent;
        step++;
    } else {
        return false;
    }
    
    // check winner
    let winner = checkWinner();
    if (winner === 0) {
        if (step === 9) {
            alert("No one wins!");
        }
    } else if (winner === 1) {
        alert("X wins!");
    } else if (winner === 2) {
        alert("Y wins!");
    }
    
}
