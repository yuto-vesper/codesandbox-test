import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する。
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除する関数
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //liタグの生成
  const li = document.createElement("li");
  //console.log(li);

  //divタグの生成
  const div = document.createElement("div");
  div.className = "list-row";

  //pタグの生成
  const p = document.createElement("p");
  p.innerText = text;

  //button(完了)タグの生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された削除ボタンの親タグを(div)を未完了リストから削除
    const completeParent = completeButton.parentNode;
    deleteFromIncompleteList(completeParent.parentNode);

    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    //TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    //liタグを生成
    const p = document.createElement("p");
    p.innerText = text;

    //button（戻す）タグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    //button（戻す）にクリックイベントを追加
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグ（div)を完了リストから削除
      document.getElementById("complete-list").removeChild(li);

      //テキストを取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    //divタグの子要素に各要素を設定
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(li);
  });

  //button(削除)タグの生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグを(div)を未完了リストから削除
    const deleteparent = deleteButton.parentNode;
    deleteFromIncompleteList(deleteparent.parentNode);
  });

  //divタグの子要素に各要素を設定する
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
