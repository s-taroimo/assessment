'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');

function removeAllChildren(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

userNameInput.onkeydown = event => {
    if(event.key === 'Enter'){
       assessmentButton.onclick();
    }
}

assessmentButton.onclick = () => {
    const userName = userNameInput.value;
    if(userName.length === 0) {
        //名前が空の時は処理を終了する
        return;   
    }

//診断結果表示エリアの作成
removeAllChildren(resultDivided);
const header = document.createElement('h3');
header.innerText = '診断結果';
resultDivided.appendChild(header);
 
const paragraph = document.createElement('p');
const result = assessment(userName);
paragraph.innerText = result;
resultDivided.appendChild(paragraph);
};

    const answers = [
    '{userName}のいいところは声です。{userName}の特徴的な声は皆を惹きつけ、心に残ります。',
    '{userName}のいいところはまなざしです。{userName}に見つめられた人は気になって仕方ないでしょう。',
    '{userName}のいいところは情熱です。{ userName }の情熱に周りの人は感化されます。',
    '{userName}のいいところは厳しさです。{userName}の厳しさが物事をいつも成功に導きます。',
    '{userName}のいいところは知識です。博学な{userName}を多くの人が頼りにしています。',
    '{userName}のいいところはユニークさです。{userName}だけのその特徴が皆を楽しくさせます。',
    '{userName}のいいところは用心深さです。{userName}の洞察に、多くの人が助けられています。',
    '{userName}のいいところは見た目です。内側から溢れ出る{userName}の良さに皆が気を惹かれます。',
    '{userName}のいいところは決断力です。{userName}がする決断にいつも助けられている人たちがいます。',
    '{userName}のいいところは思いやりです。{userName}に気にかけてもらった多くの人が感謝しています。',
    '{userName}のいいところは感受性です。{userName}が感じたことに皆が共感し、わかりあうことができています。',
    '{userName}のいいところは節度です。強引すぎない{userName}の考えに皆が感謝しています。',
    '{userName}のいいところは好奇心です。新しいことに向かっていく{userName}の心構えが多くの人に魅力的に移ります。',
    '{userName}のいいところは気配りです。{userName}の配慮が多くの人の心を救っています。',
    '{userName}のいいところは声です。{userName}の特徴的な声は皆を惹きつけ、心に残ります。',
    '{userName}のいいところはその全てです。ありのままの{userName}自身がいいところなのです。',
    '{userName}のいいところは自制心です。やばいと思った時にしっかりと衝動を抑えられる{userName}が皆から評価されています。'
];

function assessment(userName){
    //全文字コード番号を取得してそれを足し合わせる
    let sumOfCharcode = 0;
    for (let i = 0; i < userName.length; i++){
    sumOfCharcode = sumOfCharcode + userName.charCodeAt(i);
    }
    //文字のコード番号の合計を回答の数で割って添字の数値を求める
    const index = sumOfCharcode % answers.length;
    let result = answers[index];

    result = result.replace(/\{userName\}/g, userName);
    return result;
}
