// Construct Variable to attach JS Event, and program change
const changeBlockRuby = document.querySelector(".body_box_content");
const changeRuby = document.querySelector("#ruby");

// initiate Event
changeRuby.addEventListener("click", (event) => {
    console.log("<<< Ruby Event Testing Check >>>");

    // ------------------------------------
    // <<< UPDATE PROJECT TOP - TITLE >>>
    // ------------------------------------
    const projectTopTitle = document.querySelector("#project_title h3");
    projectTopTitle.innerText = "RUBY";

    const projectTopIntro = document.querySelector("#project_intro p");
    projectTopIntro.innerText = `
    Le Wagon ブートキャンプで Ruby on Rails を活用し、求人サイトを一から開発しました。
    このフルスクラッチでの構築経験は、Ruby への理解を深める上で最も印象的な学びとなりました。
    `;

    

    // ------------------------------------------
    // <<< UPDATE PROJECT CENTER - CONTENT >>>
    // ------------------------------------------
    const projectCenter = document.querySelector(".project_body");
  
    const projectBody01 = document.querySelector("#project_body_01");
    projectBody01.querySelector("h3").innerText = "１．RubyOnRails：プロトタイプ";
    projectBody01.querySelector("p").innerText = `
    チームでプロジェクト立案してからウェブサイトの核になる機能を模索。
    求人サイト制作の提案をチームが受け入れ、KanbanボードとFigmaでサイトのプロトタイプを作り上げた。
    プロトタイプを作ることで、UI・UXをはっきりさせる他、ドラフト段階で調整と改善が簡単に行える。
    `;
    projectBody01.querySelector("img").src = "image/dummy_screen.png";


    const projectBody02 = document.querySelector("#project_body_02");
    projectBody02.querySelector("h3").innerText = "２．RubyOnRails：データベース";
    projectBody02.querySelector("p").innerText = `
    チームでの役割分担により、私はデータベース設計・構築を担当しました。
    基幹データベースにはPostgreSQLを選定し、開発効率とテストの網羅性を高めるため、ダミーデータを活用して環境を構築しました。
    フレームワークにはRuby on Railsを採用し、データベースとの相互作用には主にActive Recordパターンを利用しました。
    検索結果によると、Active Recordは「テーブルをクラス、レコードをインスタンス」として扱うORM（オブジェクト関係マップ）であり、SQLを直接記述せずに直感的なメソッド呼び出しでCRUD操作（作成・読み取り・更新・削除）を行えるため、開発速度の向上とコードの可読性確保に大きく貢献しました。
    また、PostgreSQLの性能を活かしつつ、大量のダミーデータ生成においてはトランザクション制御やgenerate_series関数などの機能を組み合わせることで、効率的なデータシード環境を実現しています。
    `; 
    projectBody02.querySelector("img").src = "image/dummy_screen.png";


    const projectBody03 = document.querySelector("#project_body_03");
    projectBody03.querySelector("h3").innerText = "３．RubyOnRails：フルスタック";
    projectBody03.querySelector("p").innerText = `
    データベース構築に続き、フロントエンドの「就職検索ページ」制作を担当しました。Ruby on Railsフレームワークを活用し、Ruby、JavaScript、HTML、CSSを駆使して、デザインおよび検索フィルタ機能をゼロから実装しました。
    検索フィルタはフロントエンドとデータベースを連携させる重要な機能であったため、特に厳密なテストとデバッグを行い、データの正確な取得と表示、およびユーザー操作性の確保に注力しました。
    `;
    projectBody03.querySelector("img").src = "image/dummy_screen.png"; 
    
    
    const projectBody04 = document.querySelector("#project_body_04");
    projectBody04.querySelector("h3").innerText = "４．RubyOnRails：その他";
    projectBody04.querySelector("p").innerText = `
    チームでのウェブ制作において、特に貢献した要素はGitHubとアジャイル開発の導入です。
    GitHubは、バージョン管理による変更履歴の追跡やプルリクエストを用いたコードレビューを可能にし、チーム全体のプロジェクト管理とデバッグを大幅に効率化しました。これにより、コードの品質維持と問題の早期発見が実現できました。
    一方、アジャイル開発は、定期的な対話を通じて進捗状況、直面している課題、相談事項、そしてその日の計画を共有する文化を育みました。
    この「透明性」と「迅速なフィードバック」のサイクルが、チームの認識齟齬を防ぎ、円滑な協働体制の構築に大きく寄与しました。
    `;
    projectBody04.querySelector("img").src = "image/dummy_screen.png";  


    
    // ------------------------------------
    // <<< UPDATE PROJECT BOTTOM - SKILLS
    // ------------------------------------
    const projectBottom = document.querySelector(".project_skills_list");

    const skillSet01 = projectBottom.querySelector("#skill_set01");
    const skillSet02 = projectBottom.querySelector("#skill_set02");
    const skillSet03 = projectBottom.querySelector("#skill_set03");

    skillSet01.querySelector("#skill01").innerText = "Ruby";
    skillSet01.querySelector("#skill02").innerText = "GITHUB";
    skillSet01.querySelector("#skill03").innerText = "PostgreSQL";

    skillSet02.querySelector("#skill04").innerText = "HTML";
    skillSet02.querySelector("#skill05").innerText = "CSS";
    skillSet02.querySelector("#skill06").innerText = "JAVASCRIPT";

    skillSet03.querySelector("#skill07").innerText = "プロジェクト管理";
    skillSet03.querySelector("#skill08").innerText = "チームアプリ制作";
    skillSet03.querySelector("#skill09").innerText = "分析能力";


    // ----------------------------
    // <<< UPDATE REFERENCES >>>
    // ----------------------------
    const projectReference = document.querySelector("#body_reference");
    console.log("Kaspania")


    projectReference.querySelector("#ref_01_item span").innerText = "RUBY公式チュートリアル　：";
    projectReference.querySelector("#ref_01_item a").innerText = "https://www.ruby-lang.org/en/documentation/quickstart/";
    projectReference.querySelector("#ref_01_item a").href = "https://www.ruby-lang.org/en/documentation/quickstart/";

    projectReference.querySelector("#ref_02_item span").innerText = "RUBY-ON-RAIL （ACTIVE-RECORD）　：";
    projectReference.querySelector("#ref_02_item a").innerText = "https://guides.rubyonrails.org/active_record_basics.html";
    projectReference.querySelector("#ref_02_item a").href = "https://guides.rubyonrails.org/active_record_basics.html";

    projectReference.querySelector("#ref_03_item span").innerText = "SQLデータベース　（W3SCHOOL）　：";
    projectReference.querySelector("#ref_03_item a").innerText = "https://www.w3schools.com/sql/";
    projectReference.querySelector("#ref_03_item a").href = "https://www.w3schools.com/sql/";

    projectReference.querySelector("#ref_04_item span").innerText = "GITHUBチュートリアル　：";
    projectReference.querySelector("#ref_04_item a").innerText = "https://docs.github.com/en/get-started/start-your-journey/hello-world";
    projectReference.querySelector("#ref_04_item a").href = "https://docs.github.com/en/get-started/start-your-journey/hello-world";

    projectReference.querySelector("#ref_05_item span").innerText = " ーーー　";
    projectReference.querySelector("#ref_05_item a").innerText = "";




});
