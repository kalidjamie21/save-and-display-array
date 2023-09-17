const userInput = [];
const userInputReserve = []; // this arrays allows storage of input without content deletion for later manipulation

function saveURL() {
    document.querySelector("#button-el").addEventListener("click", function () {
        const val = document.querySelector('input').value;
        if (val == '') {
            console.log("no information given!")
        } else {
            userInput.push(val);
            userInputReserve.push(val);

            document.querySelector("#input-el").value = '';
            
            for (var i = 0; i < userInput.length; i++) {
                
                const para = document.createElement("p");
                const node = document.createTextNode(userInput[i]);
                para.appendChild(node);

                const element = document.querySelector(".para-container");
                element.appendChild(para);
  
                userInput.pop(userInput[i]); // this is included because otherwise, userInput is outputting the entire content instead of current one

                console.log(userInput); 
                console.log(userInputReserve); 

                

            }

        }
    })
}



saveURL();