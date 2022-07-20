let key = "X";
let check = false; 
let audio = new Audio('Sia_-_Unstoppable_CeeNaija.com_.mp3')
const load = () => {
  alert("Welcome tic tac toe, register your name before you play, 'Cancel' is to is cancel a game in process if there is a mistake")
}
const start = () =>{
  if(pOne.value != '' && pTwo.value != ''){
    check = true;
    oDisp.innerText = pOne.value;
    tDisp.innerText = pTwo.value;
    ocDisp.innerText = pOne.value;
    tcDisp.innerText = pTwo.value;
  }
  else{
    alert('Complete the information above')
  }
}
const keys = (e) =>{
  if(check == true){
    if (e.target.innerText != ""){}
    else{
      if (key != "O"){
        e.target.innerText = key;
        key = "O";
        if(d1.innerText == "X" && d2.innerText == "X" && d3.innerText == "X"){
          let cScore = Number(ocScore.innerText);
          let score = Number(oScore.innerText);
          score = 1 + score 
          cScore = 1 + cScore;
          ocScore.innerText = cScore;
          oScore.innerText = score;
          alert(`${pOne.value} Won`)
          d1.innerText = "";
          d2.innerText = "";
          d3.innerText = "";
          d4.innerText = "";
          d5.innerText = "";
          d6.innerText = "";
          d7.innerText = "";
          d8.innerText = "";
          d9.innerText = "";
        }
        else if(d4.innerText == "X" && d5.innerText == "X" && d6.innerText == "X"){
          let cScore = Number(ocScore.innerText);
          let score = Number(oScore.innerText);
          score = 1 + score 
          cScore = 1 + cScore;
          ocScore.innerText = cScore;
          oScore.innerText = score;
          alert(`${pOne.value} Won`)
          d1.innerText = "";
          d2.innerText = "";
          d3.innerText = "";
          d4.innerText = "";
          d5.innerText = "";
          d6.innerText = "";
          d7.innerText = "";
          d8.innerText = "";
          d9.innerText = "";
        }
        else if(d7.innerText == "X" && d8.innerText == "X" && d9.innerText == "X"){
          let cScore = Number(ocScore.innerText);
          let score = Number(oScore.innerText);
          score = 1 + score 
          cScore = 1 + cScore;
          ocScore.innerText = cScore;
          oScore.innerText = score;
          alert(`${pOne.value} Won`)
          d1.innerText = "";
          d2.innerText = "";
          d3.innerText = "";
          d4.innerText = "";
          d5.innerText = "";
          d6.innerText = "";
          d7.innerText = "";
          d8.innerText = "";
          d9.innerText = "";
        }
        else if(d1.innerText == "X" && d4.innerText == "X" && d7.innerText == "X"){
          let cScore = Number(ocScore.innerText);
          let score = Number(oScore.innerText);
          score = 1 + score 
          cScore = 1 + cScore;
          ocScore.innerText = cScore;
          oScore.innerText = score;
          alert(`${pOne.value} Won`)
          d1.innerText = "";
          d2.innerText = "";
          d3.innerText = "";
          d4.innerText = "";
          d5.innerText = "";
          d6.innerText = "";
          d7.innerText = "";
          d8.innerText = "";
          d9.innerText = "";
        }
        else if(d2.innerText == "X" && d5.innerText == "X" && d8.innerText == "X"){
          let cScore = Number(ocScore.innerText);
          let score = Number(oScore.innerText);
          score = 1 + score 
          cScore = 1 + cScore;
          ocScore.innerText = cScore;
          oScore.innerText = score;
          alert(`${pOne.value} Won`)
          d1.innerText = "";
          d2.innerText = "";
          d3.innerText = "";
          d4.innerText = "";
          d5.innerText = "";
          d6.innerText = "";
          d7.innerText = "";
          d8.innerText = "";
          d9.innerText = "";
        }
        else if(d3.innerText == "X" && d6.innerText == "X" && d9.innerText == "X"){
          let cScore = Number(ocScore.innerText);
          let score = Number(oScore.innerText);
          score = 1 + score 
          cScore = 1 + cScore;
          ocScore.innerText = cScore;
          oScore.innerText = score;
          alert(`${pOne.value} Won`)
          d1.innerText = "";
          d2.innerText = "";
          d3.innerText = "";
          d4.innerText = "";
          d5.innerText = "";
          d6.innerText = "";
          d7.innerText = "";
          d8.innerText = "";
          d9.innerText = "";
        }
        else if(d1.innerText == "X" && d5.innerText == "X" && d9.innerText == "X"){
          let cScore = Number(ocScore.innerText);
          let score = Number(oScore.innerText);
          score = 1 + score 
          cScore = 1 + cScore;
          ocScore.innerText = cScore;
          oScore.innerText = score;
          alert(`${pOne.value} Won`)
          d1.innerText = "";
          d2.innerText = "";
          d3.innerText = "";
          d4.innerText = "";
          d5.innerText = "";
          d6.innerText = "";
          d7.innerText = "";
          d8.innerText = "";
          d9.innerText = "";
        }
        else if(d3.innerText == "X" && d5.innerText == "X" && d7.innerText == "X"){
          let cScore = Number(ocScore.innerText);
          let score = Number(oScore.innerText);
          score = 1 + score 
          cScore = 1 + cScore;
          ocScore.innerText = cScore;
          oScore.innerText = score;
          alert(`${pOne.value} Won`)
          d1.innerText = "";
          d2.innerText = "";
          d3.innerText = "";
          d4.innerText = "";
          d5.innerText = "";
          d6.innerText = "";
          d7.innerText = "";
          d8.innerText = "";
          d9.innerText = "";
        }
      }
      else{ 
        e.target.innerText = key;
        key = "X";
        if(d1.innerText == "O" && d2.innerText == "O" && d3.innerText == "O"){
          let cScore = Number(tcScore.innerText);
          let score = Number(tScore.innerText);
          score = 1 + score 
          cScore = 1 + cScore;
          tcScore.innerText = cScore;
          tScore.innerText = score;
          alert(`${pTwo.value} Won`)
          d1.innerText = "";
          d2.innerText = "";
          d3.innerText = "";
          d4.innerText = "";
          d5.innerText = "";
          d6.innerText = "";
          d7.innerText = "";
          d8.innerText = "";
          d9.innerText = "";
        }
        else if(d4.innerText == "O" && d5.innerText == "O" && d6.innerText == "O"){
          let cScore = Number(tcScore.innerText);
          let score = Number(tScore.innerText);
          score = 1 + score 
          cScore = 1 + cScore;
          tcScore.innerText = cScore;
          tScore.innerText = score;
          alert(`${pTwo.value} Won`)
          d1.innerText = "";
          d2.innerText = "";
          d3.innerText = "";
          d4.innerText = "";
          d5.innerText = "";
          d6.innerText = "";
          d7.innerText = "";
          d8.innerText = "";
          d9.innerText = "";
        }
        else if(d7.innerText == "O" && d8.innerText == "O" && d9.innerText == "O"){
          let cScore = Number(tcScore.innerText);
          let score = Number(tScore.innerText);
          score = 1 + score 
          cScore = 1 + cScore;
          tcScore.innerText = cScore;
          tScore.innerText = score;
          alert(`${pTwo.value} Won`)
          d1.innerText = "";
          d2.innerText = "";
          d3.innerText = "";
          d4.innerText = "";
          d5.innerText = "";
          d6.innerText = "";
          d7.innerText = "";
          d8.innerText = "";
          d9.innerText = "";
        }
        else if(d1.innerText == "O" && d4.innerText == "O" && d7.innerText == "O"){
          let cScore = Number(tcScore.innerText);
          let score = Number(tScore.innerText);
          score = 1 + score 
          cScore = 1 + cScore;
          tcScore.innerText = cScore;
          tScore.innerText = score;
          alert(`${pTwo.value} Won`)
          d1.innerText = "";
          d2.innerText = "";
          d3.innerText = "";
          d4.innerText = "";
          d5.innerText = "";
          d6.innerText = "";
          d7.innerText = "";
          d8.innerText = "";
          d9.innerText = "";
        }
        else if(d2.innerText == "O" && d5.innerText == "O" && d8.innerText == "O"){
          let cScore = Number(tcScore.innerText);
          let score = Number(tScore.innerText);
          score = 1 + score 
          cScore = 1 + cScore;
          tcScore.innerText = cScore;
          tScore.innerText = score;
          alert(`${pTwo.value} Won`)
          d1.innerText = "";
          d2.innerText = "";
          d3.innerText = "";
          d4.innerText = "";
          d5.innerText = "";
          d6.innerText = "";
          d7.innerText = "";
          d8.innerText = "";
          d9.innerText = "";
        }
        else if(d3.innerText == "O" && d6.innerText == "O" && d9.innerText == "O"){
          let cScore = Number(tcScore.innerText);
          let score = Number(tScore.innerText);
          score = 1 + score 
          cScore = 1 + cScore;
          tcScore.innerText = cScore;
          tScore.innerText = score;
          alert(`${pTwo.value} Won`)
          d1.innerText = "";
          d2.innerText = "";
          d3.innerText = "";
          d4.innerText = "";
          d5.innerText = "";
          d6.innerText = "";
          d7.innerText = "";
          d8.innerText = "";
          d9.innerText = "";
        }
        else if(d1.innerText == "O" && d5.innerText == "O" && d9.innerText == "O"){
          let cScore = Number(tcScore.innerText);
          let score = Number(tScore.innerText);
          score = 1 + score 
          cScore = 1 + cScore;
          tcScore.innerText = cScore;
          tScore.innerText = score;
          alert(`${pTwo.value} Won`)
          d1.innerText = "";
          d2.innerText = "";
          d3.innerText = "";
          d4.innerText = "";
          d5.innerText = "";
          d6.innerText = "";
          d7.innerText = "";
          d8.innerText = "";
          d9.innerText = "";
        }
        else if(d3.innerText == "O" && d5.innerText == "O" && d7.innerText == "O"){
          let cScore = Number(tcScore.innerText);
          let score = Number(tScore.innerText);
          score = 1 + score 
          cScore = 1 + cScore;
          tcScore.innerText = cScore;
          tScore.innerText = score;
          alert(`${pTwo.value} Won`)
          d1.innerText = "";
          d2.innerText = "";
          d3.innerText = "";
          d4.innerText = "";
          d5.innerText = "";
          d6.innerText = "";
          d7.innerText = "";
          d8.innerText = "";
          d9.innerText = "";
        }
      }
      if( d1.innerText != "" && d2.innerText != "" && d3.innerText != "" && d4.innerText != "" && d5.innerText != "" && d6.innerText != "" && d7.innerText != "" && d8.innerText != "" && d9.innerText != ""){
        alert('No one wins round')
        d1.innerText = "";
        d2.innerText = "";
        d3.innerText = "";
        d4.innerText = "";
        d5.innerText = "";
        d6.innerText = "";
        d7.innerText = "";
        d8.innerText = "";
        d9.innerText = "";
      }
    }
  }
  else{
    alert('Fill in player name')
  }
}
const trestart = () =>{
  pOne.value = "";
  pTwo.value = "";
  d1.innerText = "";
  d2.innerText = "";
  d3.innerText = "";
  d4.innerText = "";
  d5.innerText = "";
  d6.innerText = "";
  d7.innerText = "";
  d8.innerText = "";
  d9.innerText = "";
  oDisp.innerText = "Player One";
  ocDisp.innerText = "Player One";
  tDisp.innerText = "Player Two";
  tcDisp.innerText = "Player Two";
  tcScore.innerText = 0;
  tScore.innerText = 0;
  oScore.innerText = 0;
  ocScore.innerText = 0;

}
const restart = () =>{
  pOne.value = "";
  pTwo.value = "";
  d1.innerText = "";
  d2.innerText = "";
  d3.innerText = "";
  d4.innerText = "";
  d5.innerText = "";
  d6.innerText = "";
  d7.innerText = "";
  d8.innerText = "";
  d9.innerText = "";
  oDisp.innerText = "Player One";
  ocDisp.innerText = "Player One";
  tDisp.innerText = "Player Two";
  tcDisp.innerText = "Player Two";
  tcScore.innerText = 0;
  tScore.innerText = 0;
  oScore.innerText = 0;
  ocScore.innerText = 0;
  
}
const tcancel = () => {
  if( d1.innerText != "" && d2.innerText != "" && d3.innerText != "" && d4.innerText != "" && d5.innerText != "" && d6.innerText != "" && d7.innerText != "" && d8.innerText != "" && d9.innerText != ""){
    d1.innerText = "";
    d2.innerText = "";
    d3.innerText = "";
    d4.innerText = "";
    d5.innerText = "";
    d6.innerText = "";
    d7.innerText = "";
    d8.innerText = "";
    d9.innerText = "";
  }
  else{
    alert('There is nothing to cancel')
  }
}
const cancel = () => {
  if( d1.innerText != "" && d2.innerText != "" && d3.innerText != "" && d4.innerText != "" && d5.innerText != "" && d6.innerText != "" && d7.innerText != "" && d8.innerText != "" && d9.innerText != ""){
    d1.innerText = "";
    d2.innerText = "";
    d3.innerText = "";
    d4.innerText = "";
    d5.innerText = "";
    d6.innerText = "";
    d7.innerText = "";
    d8.innerText = "";
    d9.innerText = "";
  }
  else{
    alert('There is nothing to cancel')
  }
}
const tPlay = () =>{
  audio.loop = true;
  audio.play()
}
const tPause = () => {
  audio.pause()
}
const tcPlay = () =>{
  audio.loop = true;
  audio.play()
}
const tcPause = () => {
  audio.pause()
}