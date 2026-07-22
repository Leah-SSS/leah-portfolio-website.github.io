// Construct Variable to attach JS Event, and program change
const changeBlock = document.querySelector(".body_box_content");
const changePython = document.querySelector("#python");

// initiate Event
changePython.addEventListener("click", (event) => {
    console.log("<<< Python Event Testing Check >>>");

    // ------------------------------------
    // <<< UPDATE PROJECT TOP - TITLE >>>
    // ------------------------------------
    const projectTopTitle = document.querySelector("#project_title h3");
    projectTopTitle.innerText = "PYTHON";

    const projectTopIntro = document.querySelector("#project_intro p");
    projectTopIntro.innerText = `サイバーセキュリティに興味を持ち初め、
    暗号化技術への関心から Python で簡易な暗号化ゲームを作成したことは、プログラミング学習において印象的な体験となりました。
    また、Codewars の問題を定期的に解くことで知識の維持を図るとともに、コード管理の効率化に不可欠な「パッケージ化とモジュラー化」の実践的スキルを習得できました。
    `;

    

    // ------------------------------------------
    // <<< UPDATE PROJECT CENTER - CONTENT >>>
    // ------------------------------------------
    const projectCenter = document.querySelector(".project_body");
  
    const projectBody01 = document.querySelector("#project_body_01");
    projectBody01.querySelector("h3").innerText = "１．暗号当てゲーム：基礎知識の習得";
    projectBody01.querySelector("p").innerText = `
    暗号化技術の学習と実践のため、Pythonを用いた「暗号化当てゲーム」の制作を決定しました。
    開発に先立ち、暗号化の基礎知識を習得するとともに、Pythonで標準的に利用される信頼性の高いライブラリであるcryptographyパッケージを特定しました。
    最終目標から逆算して重要な実装要件を抽出し、綿密な開発プランを策定したことで、コーディング工程の効率化と円滑なプロジェクト進行を実現できました。
    `;
    projectBody01.querySelector("img").src = "image/python_img/encryption_research.png";


    const projectBody02 = document.querySelector("#project_body_02");
    projectBody02.querySelector("h3").innerText = "２．暗号当てゲーム：イテレーション開発";
    projectBody02.querySelector("p").innerText = `
    部分的なコードテストとデバッグを繰り返すイテレーティブな開発手法により、コードの修正と正常性の検証を効率的に行いました。
    特に、cryptographyパッケージの「Fernet」暗号化実装で問題が発生した際は、事前に確認していた公式ドキュメントを参照することで原因を特定し、迅速に解決することができました。
    `; 
    projectBody02.querySelector("img").src = "image/python_img/encryption_01.png";


    const projectBody03 = document.querySelector("#project_body_03");
    projectBody03.querySelector("h3").innerText = "１．CodeWars：データ操作と構造";
    projectBody03.querySelector("p").innerText = `
    CodeWarsでのコーディング課題への挑戦を通じて、Pythonにおけるデータ操作の基礎と制御構造を効果的に強化できました。
    多様なアルゴリズム問題に取り組むことで、問題分析力と解決能力が向上し、実装前の計画的なアプローチ（プランニング）を身につける貴重な経験となりました。
    `;
    projectBody03.querySelector("img").src = "image/python_img/codewars_01.png"; 
    
    
    const projectBody04 = document.querySelector("#project_body_04");
    projectBody04.querySelector("h3").innerText = "２．CodeWars：モジュール化";
    projectBody04.querySelector("p").innerText = `
    まず、コードを機能ごとに分割する「モジュール化」を実践したことで、管理コストの低減とエラー特定の迅速化を実現しました。
    さらに、テキスト、数値、リストなど多様なランダムデータを生成するロジックを独立した関数として外部ファイルに実装し、これを任意のプロジェクトからインポートして再利用可能な「自作パッケージ」として整備しました。
    これにより、データ生成の自動化とコード資産の蓄積・共有が可能となり、開発効率を劇的に向上させることができました。
    `;
    projectBody04.querySelector("img").src = "image/python_img/codewars_03.png";  



    // ------------------------------------
    // <<< UPDATE PROJECT BOTTOM - SKILLS
    // ------------------------------------
    const projectBottom = document.querySelector(".project_skills_list");

    const skillSet01 = projectBottom.querySelector("#skill_set01");
    const skillSet02 = projectBottom.querySelector("#skill_set02");
    const skillSet03 = projectBottom.querySelector("#skill_set03");

    skillSet01.querySelector("#skill01").innerText = "Python";
    skillSet01.querySelector("#skill02").innerText = "データ操作";
    skillSet01.querySelector("#skill03").innerText = "条件分岐＆ループ";

    skillSet02.querySelector("#skill04").innerText = "モジュール化!";
    skillSet02.querySelector("#skill05").innerText = "増分テスト＆デバグ";
    skillSet02.querySelector("#skill06").innerText = "目標駆動型開発";

    skillSet03.querySelector("#skill07").innerText = "問題分析能力";
    skillSet03.querySelector("#skill08").innerText = "ーーー";
    skillSet03.querySelector("#skill09").innerText = "ーーー";

});