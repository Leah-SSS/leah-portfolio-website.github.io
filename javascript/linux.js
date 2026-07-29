// Construct Variable to attach JS Event, and program change
const changeBlockLinux = document.querySelector(".body_box_content");
const changeLinux = document.querySelector("#linux");

// initiate Event
changeLinux.addEventListener("click", (event) => {
    console.log("<<< Website Event Testing Check >>>");

    // ------------------------------------
    // <<< UPDATE PROJECT TOP - TITLE >>>
    // ------------------------------------
    const projectTopTitle = document.querySelector("#project_title h3");
    projectTopTitle.innerText = "LINUX";

    const projectTopIntro = document.querySelector("#project_intro p");
    projectTopIntro.innerText = `
    セキュリティへの意識を高め、ソフトウェアと OS の仕組みを深く理解したいと考え、Windows から Linux へ移行しました。
    その結果、Linux 環境に直接触れ、実践的に学ぶ機会を得ることができました。
    `;

    

    // ------------------------------------------
    // <<< UPDATE PROJECT CENTER - CONTENT >>>
    // ------------------------------------------
    const projectCenter = document.querySelector(".project_body");
  
    const projectBody01 = document.querySelector("#project_body_01");
    projectBody01.querySelector("h3").innerText = "１．Linux：OSのインストール";
    projectBody01.querySelector(".project_part_content p").innerText = `
    ダウンロードした Linux を PC にインストールし、自身の好みに合った UI と操作性を持つディストリビューションを見つけることができました。
    使用したのは Arch Linux ベースの「Garuda」です。 
    `;
    projectBody01.querySelector("img").src = "image/linux_software/linux_OS.png";


    const projectBody02 = document.querySelector("#project_body_02");
    projectBody02.querySelector("h3").innerText = "２．Linux：AiChatbotと公式ドキュメント";
    projectBody02.querySelector(".project_part_content p").innerText = `
    Linux 初心者として、AI チャットボットを活用して用語の意味を学びながら基礎知識を蓄積し、Arch Linux の公式ドキュメント（Wiki）で内容を検証・理解する力を身につけることができました。

    `; 
    projectBody02.querySelector("img").src = "image/linux_software/linux_offical_chatbot_jp.png";


    const projectBody03 = document.querySelector("#project_body_03");
    projectBody03.querySelector("h3").innerText = "３．Linux：ソフトウェアのインストール";
    projectBody03.querySelector(".project_part_content p").innerText = `
    Arch Linux において、pacman、yay、paru、snap などのコマンドを用いたソフトウェアインストールを経験しました。 
    調査の結果、pacman は公式リポジトリ（Arch Linux 運営管理）を、yay や paru は AUR（ユーザー管理）をそれぞれ扱う異なる役割があることを理解しました。 
    本チュートリアルを通じて、リポジトリの仕組みへの理解を深めるとともに、コマンドライン操作および Linux でのソフトウェア管理に関する実践的な知識と習熟度を高めることができました。
    `;
    projectBody03.querySelector("img").src = "image/linux_software/linux_software_jp.png"; 
    
    
    const projectBody04 = document.querySelector("#project_body_04");
    projectBody04.querySelector("h3").innerText = "４．Linux：Windows依存ソフトウェアのインストール";
    projectBody04.querySelector(".project_part_content p").innerText = `
    Windows 依存のソフトも Linux で利用したく、Bottles や Wine を活用して様々な方法を試みました。
    CLIP STUDIO PAINT などのソフトウェアも、Bottles による隔離環境を用いれば、必要な依存パッケージと共に動作させることが可能です。 また、この過程で Bottles 環境が Flatpak のサンドボックス機能 を応用したセキュリティ隔離技術であることを理解でき、ソフトウェアのセキュリティツールについて学ぶことができました。
    `;
    projectBody04.querySelector("img").src = "image/linux_software/linux_flatpak.png";  



    // ------------------------------------
    // <<< UPDATE PROJECT BOTTOM - SKILLS
    // ------------------------------------
    const projectBottom = document.querySelector(".project_skills_list");

    const skillSet01 = projectBottom.querySelector("#skill_set01");
    const skillSet02 = projectBottom.querySelector("#skill_set02");
    const skillSet03 = projectBottom.querySelector("#skill_set03");

    skillSet01.querySelector("#skill01").innerText = "LINUX";
    skillSet01.querySelector("#skill02").innerText = "";
    skillSet01.querySelector("#skill03").innerText = "JAVASCRIPT";

    skillSet02.querySelector("#skill04").innerText = "DOM操作";
    skillSet02.querySelector("#skill05").innerText = "NODE.JS";
    skillSet02.querySelector("#skill06").innerText = "デバグ";

    skillSet03.querySelector("#skill07").innerText = "ーーー";
    skillSet03.querySelector("#skill08").innerText = "ーーー";
    skillSet03.querySelector("#skill09").innerText = "ーーー";


    // ----------------------------
    // <<< UPDATE REFERENCES >>>
    // ----------------------------
    const projectReference = document.querySelector("#body_reference");
    console.log("Kaspania")


    projectReference.querySelector("#ref_01_item span").innerText = "LINUX （GARUDA）インストール";
    projectReference.querySelector("#ref_01_item a").innerText = "https://garudalinux.org/installation";
    projectReference.querySelector("#ref_01_item a").href = "https://garudalinux.org/installation";

    projectReference.querySelector("#ref_02_item span").innerText = "ARCH-LINUX　ソフトウェアインストール（PACMAN)：";
    projectReference.querySelector("#ref_02_item a").innerText = "https://wiki.archlinux.org/title/Pacman";
    projectReference.querySelector("#ref_02_item a").href = "https://wiki.archlinux.org/title/Pacman";

    projectReference.querySelector("#ref_03_item span").innerText = "ARCH-LINUX　ソフトウェアインストール（AUR)　：";
    projectReference.querySelector("#ref_03_item a").innerText = "https://wiki.archlinux.org/title/AUR_helpers";
    projectReference.querySelector("#ref_03_item a").href = "https://wiki.archlinux.org/title/AUR_helpers";

    projectReference.querySelector("#ref_04_item span").innerText = "ARCH-LINUX (FLATPAK）：";
    projectReference.querySelector("#ref_04_item a").innerText = "https://wiki.archlinux.org/title/Flatpak";
    projectReference.querySelector("#ref_04_item a").href = "https://wiki.archlinux.org/title/Flatpak";

    projectReference.querySelector("#ref_05_item span").innerText = "Window依存ソフトインストール（クリスタ）";
    projectReference.querySelector("#ref_05_item a").innerText = "https://github.com/parka6060/CSPenguin-Installer";
    projectReference.querySelector("#ref_05_item a").innerText = "https://github.com/parka6060/CSPenguin-Installer";

});