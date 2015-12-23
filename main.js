function TicToe() {
	var playerSymbols = ['O', 'X'];
	var currentPlayer = 0;
	var numSquares = 3;
	var board = {};

	function initialization(){
		for (var i = 0; i < numSquares; i++) {
			for (var j = 0; i < numSquares; j++) {
				board[i+""+j] = null;
			}
		}
	}

	function togglePlayer(){
		currentPlayer = (currentPlayer + 1) % 2;
	}

	function  paintSquare(pos) {
		if (_.isEmpty(board[pos])) {
			togglePlayer();
			board[pos] = playerSymbols[currentPlayer];
			monitorBoard(pos)
		} else {
			console.log("Square already stamped");
		}
	}

	function monitorBoard(pos) {
		possibleCombination(pos)
	}

	function possibleCombination (pos){
		var combinationResult = [];
		getDiagnoal(pos);
		getHorizontal(pos);
		getVertical(pos);
	}

	function generateArray(num) {
		var result = [], i = 0;
		while(i<num) {
			result.push(i);
		}
		return result;
	}

	function getDiagnoal(pos) {
		var copyPos = pos;
		var boardIndex = pos.split('');
		var squareValues = generateArray(numSquares);
		var result = [];
		for (var i=0; i< boardIndex.length; i++) {
			var comb = _.pull(squareValues, boardIndex[i]);
			comb.map(function(b){
				return copyPos[i] = b;
			});
			
		}

	}
	function getHorizontal(pos) {
	}

	function getVertical(pos) {
	}

	function crossSquares() {

	}
	return this;
}

(function($){
	$.fn.ticToe = function(){
		wrapper = this;


	}
}(jQuery))
