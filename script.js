let inputCalc = document.querySelector('.account'),
      resultCalc = document.querySelector('.result');


function input(i){
    inputCalc.value = inputCalc.value + i
}

function result(){
    if(eval(inputCalc.value)== undefined){
        resultCalc.value = '0,00';
        inputCalc.value = '0,00';
    }if(eval(inputCalc.value) == Infinity){
        resultCalc.value = '0,00';
        inputCalc.value = 'efegwtgtgr'
    }
    resultCalc.value = eval(resultCalc.value);
    inputCalc.value = eval(inputCalc.value);
}