const changeBlockOverview = document.querySelector(".body_box_content");
const changeOverview = document.querySelector("#overview");

// initiate Event
changeOverview.addEventListener("click", (event) => { 
    console.log("<<< Python Event Testing Check >>>");


    // ------------------------------------
    // <<< UPDATE PROJECT TOP - TITLE >>>
    // ------------------------------------
    const projectTopTitle = document.querySelector("#project_title h3");
    projectTopTitle.innerText = "概要";

    const projectTopIntro = document.querySelector("#project_intro p");
    projectTopIntro.innerText = `
    「Web開発からゲーム制作、OSインストールに至るまで、幅広いプロジェクトに携わることで、Ruby、Python、JavaScript、フルスタック開発、そしてLinuxの基礎と実践力を身につけました。」
    `;

    

    // ------------------------------------------
    // <<< UPDATE PROJECT CENTER - CONTENT >>>
    // ------------------------------------------
    const projectCenter = document.querySelector(".project_body");
  
    const projectBody01 = document.querySelector("#project_body_01");
    projectBody01.querySelector("h3").innerText = "RUBY";
    projectBody01.querySelector(".project_part_content p").innerText = `
    １．RubyOnRails求人サイト
    `;
    projectBody01.querySelector("img").src = "image/overview_img/ruby_icon_02.jpg";


    const projectBody02 = document.querySelector("#project_body_02");
    projectBody02.querySelector("h3").innerText = "PYTHON";
    projectBody02.querySelector(".project_part_content p").innerText = `
    １．暗号当てゲーム
    ２．CodeWarsアルゴリズム問題
    ３．バトルシップ
    `; 
    projectBody02.querySelector("img").src = "image/overview_img/python_icon_02.jpg";


    const projectBody03 = document.querySelector("#project_body_03");
    projectBody03.querySelector("h3").innerText = "ウェブ開発";
    projectBody03.querySelector(".project_part_content p").innerText = `
    １．ぷちポケモン図鑑API・サイト
    ２．ポートフォリオ・サイト
    `;
    projectBody03.querySelector("img").src = "image/overview_img/javascript_icon.jpg"; 
    
    
    const projectBody04 = document.querySelector("#project_body_04");
    projectBody04.querySelector("h3").innerText = "LINUX";
    projectBody04.querySelector(".project_part_content p").innerText = `
    １．ArchLinuxインストール
    ２．ソフトウェアインストール
    ３．Windows依存アプリインストール
    `;
    projectBody04.querySelector("img").src = "image/overview_img/garuda_icon_02.jpg";  



    // ------------------------------------
    // <<< UPDATE PROJECT BOTTOM - SKILLS
    // ------------------------------------
    const projectBottom = document.querySelector(".project_skills_list");

    const skillSet01 = projectBottom.querySelector("#skill_set01");
    const skillSet02 = projectBottom.querySelector("#skill_set02");
    const skillSet03 = projectBottom.querySelector("#skill_set03");

    skillSet01.querySelector("#skill01").innerText = "RUBY";
    skillSet01.querySelector("#skill02").innerText = "PYTHON";
    skillSet01.querySelector("#skill03").innerText = "JAVASCRIPT";

    skillSet02.querySelector("#skill04").innerText = "LINUX";
    skillSet02.querySelector("#skill05").innerText = "API";
    skillSet02.querySelector("#skill06").innerText = "ターミナル";

    skillSet03.querySelector("#skill07").innerText = "Github";
    skillSet03.querySelector("#skill08").innerText = "プロトタイプ";
    skillSet03.querySelector("#skill09").innerText = "データベース（SQL）";
});