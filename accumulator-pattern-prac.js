let board = [
    ['-','-','-'],
    ['-','-','-'],
    ['-','-','-']
]

board[2][2] = 'x';
//these next two are the same vv
board[2][1] = 'o';
(['-', '-', 'x'])[1] = 'o';   


var battleShip {
    player1: [
        ['-','-','-'],
        ['-','-','-'],
        ['-','-','-'] 
    ]
    player2: [
        ['-','-','-'],
        ['-','-','-'],
        ['-','-','-'] 
    ]
    
}

//this wouldn't work - objects access keys with brackets, not index, so this isn't trying to find index 2, it's trying to find key 2; 
battleship[2][0] = 'x';

battleShip.player2[2][0] = 'x';


//more candy code examples
// var result = store1['2015-01-06'][0]
// var candy1 = store1['2015-01-06'][0]
// var candy2 = store1['2015-01-06'][1]
// var candy1Sold = store1['2015-01-06'][0][2]
// var candy2Sold = store1['2015-01-06'][1][2]
//for ( var i = 0; i < store1['2015-01-06'].length; i++){
//  result += store1['2015-01-06'][i][2];
//}
