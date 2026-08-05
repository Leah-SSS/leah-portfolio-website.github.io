// const imgAllModal = document.querySelectorAll(".gallery_item img");

// let imgSrc;
// imgAllModal.forEach((img) => {
//     img.addEventListener("click", (event) => { 
//         console.log("<<< Python Event Testing Check >>>");
//         imgSrc = event.target.src;
//         console.log(imgSrc);
//         imgModal(imgSrc);

//     });
// });

// ------------------------------------------
const imgAllProject = document.querySelectorAll(".project_img_box img");

let imgSrcProject;
imgAllProject.forEach((img) => {
    img.addEventListener("click", (event) => { 
        console.log("<<< Python Event Testing Check >>>");
        imgSrc = event.target.src;
        console.log(imgSrc);
        imgModal(imgSrc);
    });
});



//creating the modal
let imgModal = (src) => {
    const modal = document.createElement("div");
    modal.setAttribute("class", "modal");
    // create <div class="modal"> </div>

    //add the modal to the main section or the parent element
    document.querySelector(".main").append(modal);
    // adds child to <div class="main"> <div class="modal"></div> </div>

    //adding image to modal
    const newImage = document.createElement("img");
    newImage.setAttribute("src", src);
    modal.append(newImage);
    // from function input (src) create and append img element <img src=(src)>

    //creating the close button
    const closeBtn = document.createElement("button");
    closeBtn.setAttribute("class", "closeBtn");
    closeBtn.innerText = "X";
    // create icon element, adding sytle <i class="fas fa-times closeBtn"></i>

    //close function
    closeBtn.onclick = () => {
        modal.remove();
    };
    modal.append(newImage, closeBtn);
};




