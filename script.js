const loremIpsumText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const result = document.getElementById("result");
const btn = document.getElementById("generate");
const paraInput = document.querySelectorAll(".para input");
const numOfPara = document.querySelector(".numOfParaDisplay");
const rangeOfPara = document.querySelector(".rangeOfPara");




// const generateText = ()=>{
    paraInput.forEach(input =>{
        input.addEventListener("input", e =>{
            let paraNum = parseInt(paraInput[0].value),
            paraNumSlider = parseInt(paraInput[1].value);
            // wordCountNum = parseInt(paraInput[2].value),
            // wordCountSlider = parseInt(paraInput[3].value);

            if(e.target.className === "numOfPara"){
                paraInput[1].value = paraNum;
                console.log(paraNumSlider);
                }
                else{
                   paraInput[0].value= paraNumSlider;
                }
                
                })
                })
        // }

        
            
            
// btn.addEventListener("click", generateText);