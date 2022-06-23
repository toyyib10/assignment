var input = 0;
var iff = 0;
var ifs = 0;
var fir =0;
var cval = '';
function math(val){
  if (inp.value == '0'){
    if (val == '*' || val == '/' || val == '%'){
      input = ' '+ val + ' ';
      ino.value += input;
      ifs = ino.value.split(' ')
      cval = val;
    }
    else{
      input = ' '+ val;
      ino.value += input;
      iff = ino.value.split(' ')
    }
  }
}
function button(obj){
  if (inp.value == '0'){
    input = obj;
    ino.value += input;
    if (ino.value != ''){
      if(cval == '*' || cval == '/' || cval == '%'){
        ifs = ino.value.split(' ')
      }
      else if(cval != '*' || cval != '/' || cval != '%'){
        iff = ino.value.split(' ')
      }
    }
    else if (ino.value == ''){
      inp.value == NaN;
    }
  }
  
}
function result(){
  if (inp.value == '0'){
    if (iff == null || iff[iff.length -1] == '' || ifs == null || ifs[ifs.length -1] == ''){
      inp.value = 'syntax error'
    }
    else if(iff != '' || ifs != ''){
      if(cval == '*' || cval == '/' || cval == '%'){
        for (u = 0; u < ifs.length; u++){
          if (cval == '*'){
            fir = Number(ifs[0]) * Number(ifs[ifs.length - 1])
            iff = 0;
            cval = 0;
          }
          else if (cval == '/'){
            fir = Number(ifs[0]) / Number(ifs[ifs.length - 1])
            iff = 0;
            cval = 0;
          }
          else if (cval == '%'){
            fir = Number(ifs[0]) % Number(ifs[ifs.length - 1])
            iff = 0;
            cval = 0;
          }
        }
        inp.value = fir;
        fir = 0;
        iff = 0;
        ifs = 0;
      }
      else if(cval != '*' || cval != '/' || cval != '%'){
        for (i = 0; i < iff.length; i++){
          fir += Number(iff[i])
        }
        inp.value = fir;
        fir = 0;
        iff = 0;
        ifs = 0;
      }
    }
  }
}
function del(v){
  if (v == 'AC'){
    inp.value = 'off';
    ino.value = '';
    fir = 0;
  }
  else if(v == 'ON'){
    inp.value = 0;
    ino.value = '';
    fir = 0;
  }
  else if(v == 'DEL'){
    ino.value = '';
    inp.value = 0;
    fir = 0;
  }
  else if(v == 'ans'){
    ino.value = inp.value;
    inp.value = 0;
    fir = 0;
    ifs = 0;
    iff = 0;
  }
}
