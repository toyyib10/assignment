var gen = 0;
var audio = new Audio('Sia_-_Unstoppable_CeeNaija.com_.mp3')
var win =new Audio('Right_Said_Fred_-_Stand_Up_For_The_Champions__[NaijaGreen.Com]_.mp3')
count = 0;
countCom = 0;
audio.loop = true;
audio.play()

function pla(){
  var name = playerName.value;
  // var rounds = round.value;
  var val = value.value;
  if(val >= 1 && val <= 3 && name != "" ){
    gen = Math.ceil(Math.random() * 3)
    if(gen == 1){
      computerResult.innerText = 'Computer choosed Rock';
    }
    else if(gen == 2){
      computerResult.innerText = 'Computer choosed Paper';
    }
    else if(gen == 3){
      computerResult.innerText = 'Computer choosed Scissors';
    }
    if(val == 2 && gen == 1){
      outputThree.innerText = 'you choosed Paper'
      outputOne.innerText = 'Paper wraps Rock';
      outputTwo.innerText = name + ' wins the round';
      audio.pause()
      win.play()
      count += 1;
    }
    else if(val == 1 && gen == 3){
      outputThree.innerText = 'you choosed Rock'
      outputOne.innerText = 'Rock blunts Scissors';
      outputTwo.innerText = name + ' wins the round';
      audio.pause()
      win.play()
      count += 1;
    }
    else if(val == 3 && gen == 2){
      outputThree.innerText = 'you choosed Scissors'
      outputOne.innerText = 'Scissors cuts Paper';
      outputTwo.innerText = name + ' wins the round';
      audio.pause()
      win.play()
      count += 1;
    }
    else if(gen == 2 && val == 1){
      outputThree.innerText = 'you choosed Rock'
      outputOne.innerText = 'Paper wraps Rock';
      outputTwo.innerText = 'computer wins the round';
      countCom += 1
      win.pause()
      audio.play()
      
    }
    else if(gen == 1 && val == 3){
      outputThree.innerText = 'you choosed Scissors'
      outputOne.innerText = 'Rock blunts Scissors';
      outputTwo.innerText = 'computer wins the round';
      countCom += 1;
      win.pause()
      audio.play()
      
    }
    else if(gen == 3 && val == 2){
      outputThree.innerText = 'you choosed Paper'
      outputOne.innerText = 'Scissors cuts Paper';
      outputTwo.innerText = 'computer wins the round';
      countCom += 1
      win.pause()
      audio.play()
    }
    else if (gen == val){
      if (val == 2){
        outputThree.innerText = 'you choosed Paper'
      }
      else if (val == 3){
        outputThree.innerText = 'you choosed Scissors'
      }
      else if (val == 1){
        outputThree.innerText = 'you choosed Rock'
      }
      outputOne.innerText = ' It is a tie';
      outputTwo.innerText = 'No one wins the round';
      win.pause()
      audio.play()
    }
    outputFour.innerText = count + ':' + countCom;
  }
  else{
    alert('input nickname or input valid number or round')
  }
}