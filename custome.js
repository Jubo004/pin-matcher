// common function

// Empty Value
function emptyValue(id){
    document.getElementById(id).value = '';
}
// Empty Text
function emptyText(id){
    document.getElementById(id).innerText = '';
}

// Display None
function displayNone(id){
    document.getElementById(id).style.display = 'none';
} 

// Display Block
function displayBlock(id){
    document.getElementById(id).style.display = 'block';
} 


// Generate Random Number / Pin Number
function randomNumFun(){
    var randomNumber = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('generateNum').value = randomNumber;
    emptyValue('inputPin')
    displayNone('matched')
    displayNone('unmatched')
    displayNone('tryContent')

}

// Input Number Value
function btnKey(id){

   let PreValue = document.getElementById('inputPin').value;
   let key = document.getElementById(id).innerHTML;
   document.getElementById('inputPin').value = PreValue + key;

}

// Clean / Clear Input Value
function clean(){
    document.getElementById('inputPin').value = '';
}

// Last value Remove / Backspace Button
function cleanLast(){
    inputResult = document.getElementById('inputPin').value;
    var removeValue = inputResult.slice(0, inputResult.length - 1);
    document.getElementById('inputPin').value = removeValue;
}

// Submit Button (Pin Match / Didn't Matching Condition)
function submitBtn(){
    var randomNumber = document.getElementById('generateNum').value;
    var typeNum =  document.getElementById('inputPin').value;

    // pin Matching Condition
    if(randomNumber == typeNum){
        displayBlock('matched')
        displayNone('unmatched')
        displayNone('tryContent')
    }
    else{
        displayBlock('unmatched')
        displayNone('matched')
        tryLeft('tryLeft')
        displayBlock('tryContent')
    }
}

// Pin Match Error / Try Left 3

function tryLeft(id){
    var tryAgain = document.getElementById(id).innerHTML;
    document.getElementById(id).innerHTML -= 1;
    if(tryAgain == '1'){
        disableBtn('submit')
    }
}

// Try Left Expired - Submit Button Disable
function disableBtn(id){
    let button = document.getElementById(id);
    button.style.cursor = "not-allowed";
    button.setAttribute('disabled', 'true');
    button.title = "Please Reload Page";
}