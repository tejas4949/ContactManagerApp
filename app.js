// const http=require("node:http");
// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{"content-type":"text/plain"});
//     res.end("hello world");
// });
// server.listen(3000,()=>{
//     console.log("server running");
// })

// function bhai (tejas){
// console.log(`hello $(tejas)`);
// }
// function bhaijaan(upase){
// const tejas="bhaiiii";
// upase(tejas);
// }
// bhaijaan(bhai);

function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
    // Reverse the cleaned string
    const reversedStr = cleanedStr.split('').reverse().join('');
  
    // Check if the cleaned string is equal to its reverse
    return cleanedStr === reversedStr;
  }
  
  const inputString = "A man, a plan, a canal, Panama"; // Change this to the string you want to check
  
  if (isPalindrome(inputString)) {
    console.log(`${inputString} is a palindrome.`);
  } else {
    console.log(`${inputString} is not a palindrome.`);
  }
