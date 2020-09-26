(function () {
    // console.log($);

    var currentPlayer = "player1"; // assigns player 1 to currentPlayer

    function switchPlayer() {
        currentPlayer = currentPlayer === "player1" ? "player2" : "player1";
    }

    // MAIN CLICK HANDLER
    $(".column").on("click", function (e) {
        var col = $(e.currentTarget);
        var slotsInCol = col.children();
        // console.log("slotsInCol:", slotsInCol);
        for (var i = slotsInCol.length - 1; i >= 0; i--) {
            if (
                !slotsInCol.eq(i).hasClass("player1") && // if no slot has class player1/2
                !slotsInCol.eq(i).hasClass("player2")
            ) {
                slotsInCol.eq(i).addClass(currentPlayer); // add class player1 or 2 (determined by currentPlayer)
                break;
            }
        }
        if (i === -1) {
            return;
        }
        var slotsInRow = $(".row" + i);
        // console.log("slotsInRow:", slotsInRow);
        // var slotOnBoard = $(".slots");
        // console.log("slotsOnBoard:", slotOnBoard);
        if (checkForVictory(slotsInCol)) {
            console.log("COLUMN victory");
        } else if (checkForVictory(slotsInRow)) {
            console.log("ROW victory");
        } else if (checkForDiagonals()) {
            console.log("DIAGONAL victory");
        }
        switchPlayer();
        // console.log("i", i);
    });

    function checkForVictory(slots) {
        var count = 0;
        for (var i = 0; i < slots.length; i++) {
            var slot = $(slots[i]); // allows us to call jquery methods on all DOM elements
            // console.log("victory slot", slot);
            if (slot.hasClass(currentPlayer)) {
                count++; //if slot has the class current player, increment count
                console.log("victory count:", count);
                if (count === 4) {
                    return true; // returning true for the callback above in the click event listener on columns
                }
            } else {
                count = 0; //if not reset to 0
            }
        }
    }

    ////////// CLEAR BUTTON
    //grab $(".slot")
    //location.reload - easy way to clear
    var board = $(".slot");
    // console.log(board);
    var clearButton = $(".clear");
    // console.log(clearButton);

    clearButton.on("click", function () {
        board.removeClass("player1");
        board.removeClass("player2");
        // textbox.removeAttr("style");
    });

    ////////// DIAGONALS
    //1. there are 24 possible combinations (of indexes) of diagonal wins - put these inside an array of arrays
    // loop over it (diags): for each of these loop inside of the the arrays and pass into checkForVictory

    function checkForDiagonals() {
        var winningDiagonals = [
            [0, 7, 14, 21],
            [1, 8, 15, 22],
            [2, 9, 16, 23],
            [3, 8, 13, 18],
            [4, 9, 14, 19],
            [5, 10, 15, 20],
            [6, 13, 20, 27],
            [7, 14, 21, 28],
            [8, 15, 22, 29],
            [9, 14, 19, 24],
            [10, 15, 20, 25],
            [11, 16, 21, 26],
            [12, 19, 26, 33],
            [13, 20, 27, 34],
            [14, 21, 28, 35],
            [15, 20, 25, 30],
            [16, 21, 26, 31],
            [17, 22, 27, 32],
            [18, 25, 32, 39],
            [19, 26, 33, 40],
            [20, 27, 34, 41],
            [21, 26, 31, 36],
            [22, 27, 32, 37],
            [23, 28, 33, 38],
        ];

        var allSlots = $(".slot");
        // var count = 0;
        for (var i = 0; i < winningDiagonals.length; i++) {
            var diagonal = winningDiagonals[i];
            //console.log(diagonal);
            var checkDiag = [];
            checkDiag.push(allSlots.eq(diagonal[0]));
            checkDiag.push(allSlots.eq(diagonal[1]));
            checkDiag.push(allSlots.eq(diagonal[2]));
            checkDiag.push(allSlots.eq(diagonal[3]));
            if (checkForVictory(checkDiag)) {
                //var win = true;
                console.log("found win");
                return true;
            }
            // count++;
            // console.log("diag count", count);
        }

        return false;

        // var count = 0;
        // console.log("diagonalSlot:", slot);
        // for (var i = 0; i < diagonals.length; i++) {
        //     var slot = $(slotOnBoard[i]);
        //     if ($.inArray(slot.val(), diagonals[i]) >> -1) {
        // console.log("slotExistsinArray");
        // console.log("slot.val():", slot.val());
        // }
        // console.log("diagonals.length", diagonals.length);
        // console.log("diagonals[i]", diagonals[i]);
        // if (slot.hasClass(currentPlayer)) {
        //     console.log("bledi");
        //     count++;
        //     console.log("countDiagonals:", count);
        // }
        // for (var j = 0; j < diagonals[i].length; j++) {
        // var slot = $(diagonals[i][j]);
        // console.log("slotDiagonal", slot);
        // console.log("diagonals[i].length", diagonals[i].length);
        // console.log("diagonals[i][j]", diagonals[i][j]);
        // if (checkForVictory(diagonals[i])) {
        //     return true;
        //     console.log("victorious diagonals");
    }
    // if ($(diagonals[i][j]).hasClass(currentPlayer)) {
    // investigate how to check class of nested arrays?
    //     return true;
    //     count++;
    // count++;
    // console.log("countDiagonals:", count);
    //             // return;
    //         }
    //     }
    // }

    // 2. X (cross) approach - generate two possible arrays (going diagonally - upwards and downwars)

    // 3. rows and columns - loop over every slot in the board and check 4 down and 4up; then move on to the next slot
    // so you generate 2 arrays that you pass to teh win function; no sequetial checks

    // 4. patterns of 5 and 7 works but requires additional check that each piece/index is sequential (i.e. in sequential columns)

    // 5. column + row approach: add them together (see screenshot);
    //columns - rows (the other diagonal direction) (see screenshot - red)
    // here we need know which row and column we clicked on (for row we can use i = row clicked on)
    // for column - use jquery method 'index' - col.index() - searches for a given element in the given elms
    // you can git both i and col.index()
})();
