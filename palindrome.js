const palindromeInp = document.getElementById('palindromeInp');
const checkBtn = document.getElementById('checkBtn');
const head1 = document.getElementById('head1');


checkBtn.addEventListener('click' , function(e){
    let PalindromeString = palindromeInp.value;
    PalindromeString = PalindromeString.toLowerCase();
    let convertPalindrome = PalindromeString.split("");
    let reversedPalindrome = convertPalindrome.reverse();
    let convertedString = reversedPalindrome.join("");

    console.log(PalindromeString , convertPalindrome , reversedPalindrome , convertedString);
    if(PalindromeString == convertedString){
        head1.innerText = `The Word ${PalindromeString} is a Palindrome`
    }
    else{
        head1.innerText = `The Word ${PalindromeString} is Not a Palindrome`

    }

});