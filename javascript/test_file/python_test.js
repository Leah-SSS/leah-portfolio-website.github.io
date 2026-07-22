// Construct Variable to attach JS Event, and program change
const changeBlock = document.querySelector(".body_box_content");
const changePython = document.querySelector("#python");

// initiate Event
changePython.addEventListener("click", (event) => {
    console.log("<<< Python Event Testing Check >>>")
    // remove existing content
    changeBlock.replaceChildren();

    // Create the box for new content with same ID and 
    newBlock = document.createElement("div");
    newBlock.id = "box_2_2_2"
    newBlock.classList.add("body_box_content");


    // Create project box - top content with same ID and class
    topBlock = document.createElement("div");
    topBlock.id = "2_2_2_1";
    topBlock.classList.add("body_box_content_top");

    // Create 
    topTitle = document.createElement("h3");
    topTitle.innerText = "Python";
    topTitle.classList.add("")

    topBlock.appendChild("topTitle");
    newBlock.appendChild("topBlock");

})





