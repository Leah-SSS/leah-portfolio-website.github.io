// Construct Variable to attach JS Event, and program change
const changeBlockWebsite = document.querySelector(".body_box_content");
const changeWebsite = document.querySelector("#website");

// initiate Event
changeWebsite.addEventListener("click", (event) => {
    console.log("<<< Website Event Testing Check >>>");

    // ------------------------------------
    // <<< UPDATE PROJECT TOP - TITLE >>>
    // ------------------------------------
    const projectTopTitle = document.querySelector("#project_title h3");
    projectTopTitle.innerText = "ウェブ開発";

    const projectTopIntro = document.querySelector("#project_intro p");
    projectTopIntro.innerText = `
    ウェブの UI・UX に興味を持ったことをきっかけに、プログラミングスクールの Le Wagon でウェブ制作を学びました。
    個人で制作した作品には、API を活用した「ぷちポケモン図鑑」サイトと、ポートフォリオサイトがあります。
    `;

    

    // ------------------------------------------
    // <<< UPDATE PROJECT CENTER - CONTENT >>>
    // ------------------------------------------
    const projectCenter = document.querySelector(".project_body");


  
    const projectBody01 = document.querySelector("#project_body_01");
    projectBody01.querySelector("h3").innerText = "１．ぷちポケモン図鑑：API";
    projectBody01.querySelector(".project_part_content p").innerText = `
    大学の生物学研究において、専門のデータ分析アプリにAPIを応用してデータベースへアクセスする機能を実装したことが、API技術を深く学びたいと考えるきっかけとなりました。
    そこで、無料で利用可能な「PokéAPI」を用いたウェブサイト制作プロジェクトを開始しました。開発途中にいくつかのエラーに直面しましたが、それらを円滑に解決することで、API技術の実践的な理解を深めることができました。
    `;
    projectBody01.querySelector("img").src = "image/dummy_screen_03.png";


    const projectBody02 = document.querySelector("#project_body_02");
    projectBody02.querySelector("h3").innerText = "２．ぶちポケモン図鑑：フルスタック";
    projectBody02.querySelector(".project_part_content p").innerText = `
    「PokéAPI」を活用したウェブサイト制作において、HTML、CSS、JavaScriptを駆使してフロントエンドを構築しました。
    JavaScriptのfetch APIを用いて非同期通信を行い、APIから取得したJSON形式のデータを動的に処理・表示する機能を実装しています。
    また、開発過程では、フロントエンドのオブジェクト構造やブロック間の間隔を視覚的に把握しやすくするため、CSSで区切り用のHTMLブロックに背景色や枠線を付与するデバッグ手法を取り入れ、効率的にレイアウト調整を行いました。
    `; 
    projectBody02.querySelector("img").src = "image/dummy_screen_03.png";


    const projectBody03 = document.querySelector("#project_body_03");
    projectBody03.querySelector("h3").innerText = "１．ポートフォリオ：フロントエンド";
    projectBody03.querySelector(".project_part_content p").innerText = `
    ポートフォリオサイトもHTML、CSS、JavaScriptを用いて自作しました。
    単一のHTMLファイルで完結させるシングルページアプリケーション（SPA）の構成を採用し、JavaScriptによって複数のコーディングプロジェクト間をシームレスに切り替える機能を実装しました。
    これにより、ページ遷移を伴わずにスムーズな閲覧体験を提供するとともに、効率的なサイト運用を実現しています。
    `;
    projectBody03.querySelector("img").src = "image/dummy_screen_03.png"; 
    
    
    const projectBody04 = document.querySelector("#project_body_04");
    projectBody04.querySelector("h3").innerText = "２．ポートフォリオ：デバグ";
    projectBody04.querySelector(".project_part_content p").innerText = `
    JavaScriptファイルを用いてHTMLとの連携動作を確認し、データが正しく取得・表示されているかを検証しました。
    特に、ブラウザコンソール（Console）を駆使して、DOM操作によるUIの動的変化や、データフローの監視・調整を行いました。
    このように、データとUIの相互作用を細かくテスト・デバッグする反復的なプロセスを通じて、高品質なウェブサイトを構築することができました。
    `;
    projectBody04.querySelector("img").src = "image/dummy_screen_03.png";  



    // ------------------------------------
    // <<< UPDATE PROJECT BOTTOM - SKILLS
    // ------------------------------------
    const projectBottom = document.querySelector(".project_skills_list");

    const skillSet01 = projectBottom.querySelector("#skill_set01");
    const skillSet02 = projectBottom.querySelector("#skill_set02");
    const skillSet03 = projectBottom.querySelector("#skill_set03");

    skillSet01.querySelector("#skill01").innerText = "HTML";
    skillSet01.querySelector("#skill02").innerText = "CSS";
    skillSet01.querySelector("#skill03").innerText = "JAVASCRIPT";

    skillSet02.querySelector("#skill04").innerText = "DOM操作";
    skillSet02.querySelector("#skill05").innerText = "NODE.JS";
    skillSet02.querySelector("#skill06").innerText = "デバグ";

    skillSet03.querySelector("#skill07").innerText = "フロントエンド開発";
    skillSet03.querySelector("#skill08").innerText = "API";
    skillSet03.querySelector("#skill09").innerText = "ーーー";


    // ---------------------------------------
    // <<< UPDATE REFRENCE >>>
    // ---------------------------------------
    const projectReference = document.querySelector("#body_reference");
    console.log("Zanadria")

    projectReference.querySelector("#ref_01_item span").innerText = "HTMLチュートリアル　：";
    projectReference.querySelector("#ref_01_item a").innerText = "https://www.w3schools.com/html/";
    projectReference.querySelector("#ref_01_item a").href = "https://www.w3schools.com/html/";

    projectReference.querySelector("#ref_02_item span").innerText = "JAVASCRIPT公式チュートリアル　：";
    projectReference.querySelector("#ref_02_item a").innerText = "https://ja.javascript.info/";
    projectReference.querySelector("#ref_02_item a").href = "https://ja.javascript.info/";

    projectReference.querySelector("#ref_03_item span").innerText = "ポケモンAPI　：";
    projectReference.querySelector("#ref_03_item a").innerText = "https://pokeapi.co/";
    projectReference.querySelector("#ref_03_item a").href = "https://pokeapi.co/";

    projectReference.querySelector("#ref_04_item span").innerText = "GITHUB（ページ）チュートリアル　：";
    projectReference.querySelector("#ref_04_item a").innerText = "https://docs.github.com/en/pages/quickstart";
    projectReference.querySelector("#ref_04_item a").href = "https://docs.github.com/en/pages/quickstart";

    projectReference.querySelector("#ref_05_item span").innerText = "Javascriptで画像モーダル生成チュートリアル";
    projectReference.querySelector("#ref_05_item a").innerText = "https://dev.to/salehmubashar/create-an-image-modal-with-javascript-2lf3";
    projectReference.querySelector("#ref_05_item a").href = "https://dev.to/salehmubashar/create-an-image-modal-with-javascript-2lf3";

});