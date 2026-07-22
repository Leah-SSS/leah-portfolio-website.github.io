console.log("Test Javascirpt");

const select_001 = document.querySelector(".project_parts_text");
console.log(`Test the Javian Scripture: ${select_001.innerText}`);

const select_all_001 = document.querySelectorAll(".project_parts_text");
let counter_001 = 1;
select_all_001.forEach((item) => {
    console.log(`No.${counter_001}: ${item.innerText}`);
    counter_001 += 1
});

const listArray_01 = ["Gold", "Silver", "Bronze", "Platinum"];
const listUnorder = document.createElement("ul");
listArray_01.forEach((iteration) => {
    const listItem = document.createElement("li");
    listItem.innerText = iteration;
    console.log(listItem);
    listUnorder.appendChild(listItem);
    console.log(listUnorder);
});

const projectItems = document.querySelectorAll(".project_parts_text");
projectItems.forEach((iteration) => {
    iteration.innerText += "：）";
    console.log(iteration.innerText);
});

const eventTargets = document.querySelectorAll(".project_button");
eventTargets.forEach((projectButton) => {
    projectButton.addEventListener("click", (event) => {
    //codeBlock reponse to eventListener
        console.log("Test the Javaract");
        console.log(event.target);
        // projectButton.style.display = "none";
    });
});


const changeTest = document.querySelector(".body_box_content");

const changePythonTest = document.querySelector("#python");
changePythonTest.addEventListener("click", (event) => {
    console.log("OVER FLOW")
    changeBlockTest.replaceChildren();
})



