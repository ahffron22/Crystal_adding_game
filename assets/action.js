$(document).ready(function() {
  var random = Math.floor(Math.random() * 120) + 19;
  var crys1 = Math.floor(Math.random() * 12) + 1;

  var crys2 = Math.floor(Math.random() * 12) + 1;
  var crys3 = Math.floor(Math.random() * 12) + 1;
  var crys4 = Math.floor(Math.random() * 12) + 1;
  var userScore = 0;
  var wins = 0;
  var loses = 0;
  $(".random").text(random);

  $(".crys").click(function() {
    userScore = userScore + parseInt($(this).attr("value"));

    $(".userScore").text(userScore);
    if (userScore === random) {
      wins++;

      $(".wins").text(wins);
      reset();
    } else if (userScore > random) {
      loses++;
      $(".loses").text(loses);
      reset();
    }
  });

  function crystalValue() {
    $(".crystal1").attr("value", crys1);
    $(".crystal2").attr("value", crys2);
    $(".crystal3").attr("value", crys3);
    $(".crystal4").attr("value", crys4);
    $(".userScore").text(userScore);
  }

  crystalValue();

  function reset() {
    userScore = 0;
    random = Math.floor(Math.random() * 120) + 19;
    crys1 = Math.floor(Math.random() * 12) + 1;
    crys2 = Math.floor(Math.random() * 12) + 1;
    crys3 = Math.floor(Math.random() * 12) + 1;
    crys4 = Math.floor(Math.random() * 12) + 1;
    $(".random").text(random);
    crystalValue();
  }
});
