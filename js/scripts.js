var player1;
var player2;
var currentPlayer;
var r1c1; var r1c2; var r1c3; var r2c1; var r2c2; var r2c3; var r3c1; var r3c2; var r3c3

function Player (name, mark) {
  this.name = name;
  this.mark = mark;
  this.spaces = [];
}

function Board (row, column) {
  this.row = row;
  this.column = column;
  this.coordinates = [row, column];
}

var createBoard = function() {
  r1c1 = new Board (1,1);
  r1c2 = new Board (1,2);
  r1c3 = new Board (1,3);
  r2c1 = new Board (2,1);
  r2c2 = new Board (2,2);
  r2c3 = new Board (2,3);
  r3c1 = new Board (3,1);
  r3c2 = new Board (3,2);
  r3c3 = new Board (3,2);
}

var playerSwitch = function() {
  if (currentPlayer === player1) {
    currentPlayer = player2;
  } else {
    currentPlayer = player1;
  }
}

var isWinner = function() {
  var winningCombos = ["1,2,3", "4,5,6", "7,8,9", "1,4,7", "2,5,8", "3,5,8", "1,5,9", "3,5,7"];
  var fixOrder = currentPlayer.spaces.sort();
  var check = fixOrder.toString();
  console.log(check);
  for (index = 0; index < winningCombos.length; index++) {
    if (check.includes(winningCombos[index])) {
      $("#winner").text(currentPlayer.name);
      $(".winner").show();
      //console.log(winningCombos[index]);
    }
  }
}

$(document).ready(function() {
  $("#playerNames").submit(function(event) {
    event.preventDefault();

    var player1Name = $("#namePlayer1").val();
    var player2Name = $("#namePlayer2").val();
    var player1Mark = "X";
    var player2Mark = "O";

    player1 = new Player (player1Name, player1Mark);
    player2 = new Player (player2Name, player2Mark);
    currentPlayer = player1;
    $("#currentPlayer").text(currentPlayer.name);

    //createBoard();

    $("#playerNames").hide();
    $(".board").show();
    $("body h3").show();
  })

  $(".row1 .column1").click(function() {
    if(!$('.row1 .column1 p').length) {
      $(".fail").hide();
      $(".row1 .column1").append("<p>" + currentPlayer.mark + "</p>");
      currentPlayer.spaces.push(1);
      isWinner();
      playerSwitch();
      $("#currentPlayer").text(currentPlayer.name);
    } else {
      $(".fail").show();
    }
  })

  $(".row1 .column2").click(function() {
    if(!$('.row1 .column2 p').length) {
      $(".fail").hide();
      $(".row1 .column2").append("<p>" + currentPlayer.mark + "</p>");
      currentPlayer.spaces.push(2);
      isWinner();
      playerSwitch();
      $("#currentPlayer").text(currentPlayer.name);
    } else {
      $(".fail").show();
    }
  })

  $(".row1 .column3").click(function() {
    if(!$('.row1 .column3 p').length) {
      $(".fail").hide();
      $(".row1 .column3").append("<p>" + currentPlayer.mark + "</p>");
      currentPlayer.spaces.push(3);
      isWinner();
      playerSwitch();
      $("#currentPlayer").text(currentPlayer.name);
    } else {
      $(".fail").show();
    }
  })

  $(".row2 .column1").click(function() {
    if(!$('.row2 .column1 p').length) {
      $(".fail").hide();
      $(".row2 .column1").append("<p>" + currentPlayer.mark + "</p>");
      currentPlayer.spaces.push(4);
      isWinner();
      playerSwitch();
      $("#currentPlayer").text(currentPlayer.name);
    } else {
      $(".fail").show();
    }
  })

  $(".row2 .column2").click(function() {
    if(!$('.row2 .column2 p').length) {
      $(".fail").hide();
      $(".row2 .column2").append("<p>" + currentPlayer.mark + "</p>");
      currentPlayer.spaces.push(5);
      isWinner();
      playerSwitch();
      $("#currentPlayer").text(currentPlayer.name);
    } else {
      $(".fail").show();
    }
  })

  $(".row2 .column3").click(function() {
    if(!$('.row2 .column3 p').length) {
      $(".fail").hide();
      $(".row2 .column3").append("<p>" + currentPlayer.mark + "</p>");
      currentPlayer.spaces.push(6);
      isWinner();
      playerSwitch();
      $("#currentPlayer").text(currentPlayer.name);
    } else {
      $(".fail").show();
    }
  })

  $(".row3 .column1").click(function() {
    if(!$('.row3 .column1 p').length) {
      $(".fail").hide();
      $(".row3 .column1").append("<p>" + currentPlayer.mark + "</p>");
      currentPlayer.spaces.push(7);
      isWinner();
      playerSwitch();
      $("#currentPlayer").text(currentPlayer.name);
    } else {
      $(".fail").show();
    }
  })

  $(".row3 .column2").click(function() {
    if(!$('.row3 .column2 p').length) {
      $(".fail").hide();
      $(".row3 .column2").append("<p>" + currentPlayer.mark + "</p>");
      currentPlayer.spaces.push(8);
      isWinner();
      playerSwitch();
      $("#currentPlayer").text(currentPlayer.name);
    } else {
      $(".fail").show();
    }
  })

  $(".row3 .column3").click(function() {
    if(!$('.row3 .column3 p').length) {
      $(".fail").hide();
      $(".row3 .column3").append("<p>" + currentPlayer.mark + "</p>");
      currentPlayer.spaces.push(9);
      isWinner();
      playerSwitch();
      $("#currentPlayer").text(currentPlayer.name);
    } else {
      $(".fail").show();
    }
  })
})
