const loremIpsumText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const result = document.getElementById("result");
const btn = document.getElementById("generate");
const paraInput = document.querySelectorAll(".para input");
const numOfPara = document.querySelector(".numOfParaDisplay");
const rangeOfPara = document.querySelector(".rangeOfPara");
const wordCount = document.querySelector(".wordCount");
const rangeWordCount = document.querySelector(".rangeWordCount");


paraInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let paraNum = parseInt(paraInput[0].value),
        paraNumSlider = parseInt(paraInput[1].value),
        wordCountNum = parseInt(paraInput[2].value),
        wordCountSlider = parseInt(paraInput[3].value);
        if(e.target.className === "numOfPara" || e.target.className === "wordCount"){
            paraInput[1].value = paraNum;
            paraInput[3].value = wordCountNum;
            }
            else{
                paraInput[0].value= paraNumSlider;
                paraInput[2].value = wordCountSlider;
                }
                })
                })
                btn.addEventListener("click", generateText);
                
    function generateText(){
    let wordGen = loremIpsumText.split(" ").slice(0, paraInput[3].value).join(" ");
    
    const tags = document.getElementById("tagsInput");
    const selectedValue = tags.value;
    const yesNo = document.getElementById("need-tags");
    const yesNoVal = yesNo.value;
    console.log(yesNoVal);
    if(yesNoVal === "yes"){
        result.innerHTML = `<${selectedValue}>${wordGen}</${selectedValue}><br>`.repeat(paraInput[1].value);
        }
        else{

            result.innerHTML = `<p>${wordGen}</p><br>`.repeat(paraInput[1].value);
        }
    
    }
    