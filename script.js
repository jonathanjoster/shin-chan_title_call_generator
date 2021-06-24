function speak(){
    const title_text = document.querySelector('.text').value;

    var speak   = new SpeechSynthesisUtterance();
    speak.text  = title_text;
    speak.rate  = .9; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
    speak.pitch = 0;　// 声の高さ 0-2 初期値:1(0で女性の声) 
    speak.lang  = 'ja-JP'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)
    
    change_title(title_text);
    audio.play();
    setTimeout(() => {
        speechSynthesis.speak(speak);
    }, 1000);
}

function change_title(title_text) {
    document.querySelector('#title').innerText = title_text;
}