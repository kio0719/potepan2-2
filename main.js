'use striict';


let display = document.getElementById('display').innerHTML;

  //数字
  function pushNum(num){
    if(display == 'Error'){//エラーだったら
      return display;
    }else if(display == 0 && display.slice(-1) == '.'){//式に小数点が入っていたら
      display += num;
    }else if(display == 0){//式に何も入ってなかったら
      display = num;
    }else if(/[\+\-\×\÷]0/.test(display.slice(-2))){//式の末尾に演算子0があったら
      display = display.slice(0,-1) + num;
    }else{
      display += num;
    }
    document.getElementById('display').innerHTML = display;
  }

  //ゼロ
  function pushZero(zero){
    if(display == 'Error'){//エラーだったら
      return display;
    }else if(display == 0){//式に何も入ってなかったら
      display = '0';
    }else if(/[\+\-\÷\×]/.test(display.slice(-1))){//式の末尾が演算子だったら
      display += 0;
    }else{
      display += zero;
    }
    document.getElementById('display').innerHTML = display;
  }

  //演算子
  function pushOpe(ope){
    if(display == 'Error'){//エラーだったら
      return display;
    }else if(/[\+\-\×\÷]/.test(display.slice(-1))){ //式の末尾に演算子があったら
      display = display.slice(0,-1) + ope;
    }
    else if(display.slice(-1) == '.'){ //式の末尾が小数点だったら
      display = display.slice(0,-1) + ope;
    }
    else{
      display += ope;
    }
    document.getElementById('display').innerHTML = display;
  }

  //小数点
  function pushPoint(){
    if(display == 'Error'){//エラーだったら
      return display;
    }else if(display == 0){//式に何も入ってなかったら
      display = '0.';
    }else if(/[\+\-\×\÷]/.test(display.slice(-1))){//式の末尾が演算子だったら
      display += '0.';
    }
    else if(display.slice(-1) == '.'){//式の末尾に小数点がすでにあったら
      return display;
    }
    else if(/^\d+\.\d+$/.test(display) || /[\+\-\×\÷]\d+\.\d+$/.test(display)){//式の先頭、途中にすでに小数点があったら
      return display;
    }
    else{//式の末尾が数字
      display += '.';
    }
    document.getElementById('display').innerHTML = display;
  }

  //AC
  function pushAC(){
    display = '0';
    document.getElementById('display').innerHTML = display;
  }

  //結果
  function pushEqual(){
    if(display == 'Error'){//エラーだったら
      return display;
    }
    display = display.replace(/×/g,'*');
    display = display.replace(/÷/g,'/');
    display = Function('return ('+display+');')().toString();
    if(display == 'NaN' || display == Infinity){
      display = 'Error';
    }
    document.getElementById('display').innerHTML = display;
  }
