const engBtn = document.querySelector("#btn_english");

engBtn.addEventListener("click", (event) => { 
    console.log("<<< Grid Check >>>");
    engBtnElement = event.target
    console.log(engBtnElement);

    const gridContent = createGridItemContent();
    // console.log(gridContent);
    const gridImage = createGridItemImage();
    // console.log(gridImage);

    const gridBox = document.createElement("div");
    gridBox.setAttribute("class", "grid_box");
    gridBox.append(gridContent);
    gridBox.append(gridImage);
    console.log(gridBox);
});


// function to create grid content elements
let createGridItemContent = () => {

    // create grid item content_box (will have title box and paragraph element)
    const grid_item_content_box_01 = document.createElement("div");
    grid_item_content_box_01.setAttribute("class", "grid_item_content_box");
    // <div class="grid_item_content_box"></div>  
    
    // create grid item content title box -------------------------------------
    const grid_item_content_title_box_01 = document.createElement("div");
    grid_item_content_title_box_01.setAttribute("class", "grid_item_content_title_box");
    // <div class="grid_item_content_title_box">

    // create grid item content title
    const grid_item_content_title_01 = document.createElement("h3");
    grid_item_content_title_01.setAttribute("class", "grid_item_content_title");
    grid_item_content_title_01.innerText = "--- Title_Placeholder ---";
    // <h3 class="grid_item_contnet_title"> --- Title_Placeholder --- </h3>

    // create grid item content paragraph
    const grid_item_content_paragraph_01 = document.createElement("p");
    grid_item_content_paragraph_01.setAttribute("class", "grid_item_content_paragraph");
    grid_item_content_paragraph_01.innerText = "--- Paragraph_Placeholder --- "
    // <p class="grid_item_content_paragraph"> --- Paragraph_Placeholder --- <p>

    // append child to parent elments
    grid_item_content_title_box_01.append(grid_item_content_title_01);
    grid_item_content_box_01.append(grid_item_content_title_box_01);
    grid_item_content_box_01.append(grid_item_content_paragraph_01);

    // <div class="grid_item_content_box">
        // <div class="grid_item_content_title_box">
            // <h3 class="grid_item_content_title> --- Title_Placeholder --- </h3>
        // </div>
        // <p class="grid_item_content_paragraph"> --- Paragraph_Placeholder --- </p>
    // </div>
    return grid_item_content_box_01;
    // -------------------------------------------------------------------------
};



// function to create grid image element
let createGridItemImage = () => {
    // create grid_item_image_box
    const grid_item_image_box_01 = document.createElement("div");
    grid_item_image_box_01.setAttribute("class", "grid_item_image_box");
    // <div class="grid_item_image_box"></div>

    // create grid_item_image_img_box 
    const grid_item_image_img_box_01 = document.createElement("div");
    grid_item_image_img_box_01.setAttribute("class", "grid_item_image_img_box");
    // <div class="grid_item_image_img_box"></div>

    // create grid image box [left-btn, img, right-btn]
    const grid_item_image_img_btn_left = document.createElement("button");
    grid_item_image_img_btn_left.setAttribute("class", "grid_item_image_img_btn_left");
    grid_item_image_img_btn_left.innerText = "L";
    // <button class="grid_item_image_img_btn_left"> L </button>
    const grid_item_image_img_img = document.createElement("img");
    grid_item_image_img_img.setAttribute("class", "grid_item_image_img_img");
    grid_item_image_img_img.setAttribute("src", "---");
    grid_item_image_img_img.setAttribute("alt", "img")
    // <img class="grid_item_image_img_img" src="---" alt="img">
    const grid_item_image_img_btn_right = document.createElement("button");
    grid_item_image_img_btn_right.setAttribute("class", "grid_item_image_img_btn_right");
    grid_item_image_img_btn_right.innerText = "L";
    // <button class="grid_item_image_img_btn_right"> R </button>


    // create grid_item_image_caption_box
    const grid_item_image_caption_box = document.createElement("div");
    grid_item_image_caption_box.setAttribute("class", "grid_item_image_caption_box");
    // <div class="grid_item_image_caption_box"></div>

    // create grid_item_image_caption_paragraph
    const grid_item_image_caption_paragraph = document.createElement("p");
    grid_item_image_caption_paragraph.setAttribute("class", "grid_item_image_caption_paragraph");
    grid_item_image_caption_paragraph.innerText = "--- Caption_Placeholder ---";
    // <p class="grid_item_image_caption_paragraph"> --- Caption_Placeholder --- </p>


    
    // append child to parent elments
    // --- append image box
    grid_item_image_img_box_01.append(grid_item_image_img_btn_left);
    grid_item_image_img_box_01.append(grid_item_image_img_img);
    grid_item_image_img_box_01.append(grid_item_image_img_btn_right);
    grid_item_image_box_01.append(grid_item_image_img_box_01);

    // --- append caption box
    grid_item_image_caption_box.append(grid_item_image_caption_paragraph);
    grid_item_image_box_01.append(grid_item_image_caption_box);


    return grid_item_image_box_01
};


