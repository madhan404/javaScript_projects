//  ______________________-------- The OG GAME EVERR!! --------______________________


var gam = confirm("shall we play a game");
if (gam) {
  //console.log(gam?? 'nmaeeeee');
  var rand = Math.floor(Math.random() * 3 + 1);
  console.log(rand);
  var start = prompt("choose one from rock - paper - scisor");
  if (start) {
    var playerinp = start.trim().toLowerCase();
    // console.log("inp vandrichiiiiiiiiiiiiiiiii");
    if (
      playerinp === "rock" ||
      playerinp === "scisor" ||
      playerinp === "paper"
    ) {
      // var rand = Math.floor(Math.random()*3+1);
      // console.log(rand);
      let computerinp = rand === 1 ? "rock" : rand === 2 ? "scisor" : "paper";
      // : rand === 3
      // ? "paper"
      //: "wrong number";

      var op =
        playerinp === computerinp
          ? "Match draw"
          : playerinp === "rock" && computerinp === "scisor"
          ? `player put ${playerinp} and computer puts ${computerinp} soo.. you won`
          : playerinp === "scisor" && computerinp === "rock"
          ? `player put ${playerinp} and computer puts ${computerinp} soo... computer won`
          : playerinp === "paper" && computerinp === "scisor"
          ? `player put ${playerinp} and computer puts ${computerinp} computer won`
          : playerinp === "scisor" && computerinp === "paper"
          ? `player put ${playerinp} and computer puts ${computerinp} soo .... you won`
          : playerinp === "rock" && computerinp === "paper"
          ? `player put ${playerinp} and computer puts ${computerinp} soo .... computer won`
          : playerinp === "paper" && computerinp === "rock"
          ? `player put ${playerinp} and computer puts ${computerinp} soo .... you won`
          : "allu upscand";

      alert(op);
      console.log(op);
      let reloads = prompt(
        " inoru vati shall we play ? -----> edha onusollu s or no"
      );
      reloads === "s"
        ? location.reload()
        : reloads === "no"
        ? alert("tq for playing")
        : alert("wrong value");
      location.reload();

      // reloads?location.reload():

      //    var resultpub =
    } else {
      alert(" kuduthu iruka optn matu solra.. edha yaachum solakoda dhu");
      location.reload();
    }

    //break;
  } else {
    alert(" edhu mae type panala epdi ya veladuva ");
  }
}