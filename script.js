// complete the given function

function palindrome(str){
    let strb = str.tolowerCase()
    let reverse = strb.split("").reverse().join("")
    if (reverse === strb)return true;
    return false;
}

module.exports = palindrome
