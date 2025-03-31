document.getElementById("check-btn").addEventListener("click", fillBtn);


function fillBtn() {
  const textInput = document.getElementById("text-input").value;
const resultElement = document.getElementById("result");
  if(!textInput){
  alert("Please input a value");
  return;
  }


const cleanedInput = textInput.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
const reversedInput = cleanedInput.split("").reverse().join("");

if(cleanedInput === reversedInput) {
  resultElement.textContent = `${textInput} is a palindrome.`;
  console.log("GOOD");
} else {
  resultElement.textContent = `${textInput} is not a palindrome.`;
  console.log("ERROR BAD");
}
};
