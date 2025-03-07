let btn = document.getElementById("btn");
let errorMessage = document.getElementById("message");
let container = document.getElementById("input-cont");


btn.onclick = function () {
    let input = document.getElementById("input").value;

    if (input === "") {
        errorMessage.textContent = "* Please enter the text";
    } else {
        errorMessage.textContent = ""; 

      
        const sectionEle = document.createElement("section");
        const inputEle = document.createElement("input");
        const labelEle = document.createElement("label");
        let back = document.getElementById("forBack");

       
        sectionEle.id = "added-items";
        labelEle.id = "item";
        labelEle.htmlFor = "items";
        labelEle.textContent = input;
        inputEle.type = "checkbox";
        inputEle.name = "items";
        inputEle.id = "input-items";
        back.style.display = "none";
        
        sectionEle.append(inputEle, labelEle);
        container.append(sectionEle);


        
        inputEle.addEventListener("change", function () {
            if (this.checked) {
                labelEle.style.textDecoration = "line-through";
                labelEle.style.color = "grey"; 
            }
        });
        inputEle.addEventListener("change", function () {
            if (!this.checked) {
                labelEle.style.textDecoration = "none";
                labelEle.style.color = "rgb(22, 231, 36)"; 
            }
        });


       
        document.getElementById("input").value = "";
    }
};