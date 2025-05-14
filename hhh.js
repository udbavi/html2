function palindrome(mystring){
var input = mystring.replace(/[^A-Z0-9]/ig,"").toLowerCase();
var reversedinput = input.split('').reverse().join('');
if (input=== reversedinput){
    document.write("<div>" + mystring + "is a palindrome <div>")
}
else{
   document.write("<div>" + mystring + "is not a palindrome <div>") 
}
}
palindrome("level")
   