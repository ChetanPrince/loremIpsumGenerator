const loremIpsumText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const result = document.getElementById("result");
const btn = document.getElementById("generate");
const paraInput = document.querySelectorAll(".para input");
const numOfParaDisplay = document.querySelector("numOfParaDisplay");
const numOfPara = document.querySelector("numOfPara");




// const generateText = ()=>{
    paraInput.forEach(input =>{
        input.addEventListener("blur", e =>{
            let paraNum = parseInt(paraInput[0].value),
            paraNumSlider = parseInt(paraInput[1].value),
            wordCountNum = parseInt(paraInput[2].value),
            wordCountSlider = parseInt(paraInput[3].value);
            console.log(paraInput[2].value);


            // if(e.target.className === "numOfParaDisplay"){
            //     numOfPara = numOfParaDisplay.Value;
            //     console.log(numOfPara);
            //     }
            //     else{
            //         numOfParaDisplay = numOfPara.value;
            //     }
                
                })
                })
        // }

        
            
            
// btn.addEventListener("click", generateText);