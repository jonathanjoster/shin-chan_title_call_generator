const title = document.querySelector('#title');
const button = document.querySelector('button');

function speak(){
    btnAbleDisable();

    const input_text = document.querySelector('.text').value;
    title.style.opacity = 0;
    remove_title();
    setTimeout(() => {
        title.style.opacity = 1;
        show_title(input_text);
    }, 500);

    audio.play();

    var speak   = new SpeechSynthesisUtterance();
    speak.text  = input_text;
    speak.rate  = .9; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
    speak.pitch = 0;　// 声の高さ 0-2 初期値:1(0で女性の声) 
    speak.lang  = 'ja-JP'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)
    setTimeout(() => {
        speechSynthesis.speak(speak);
    }, 1000);
}

function btnAbleDisable(){
    setTimeout(() => {
        button.disabled = true;
    }, 1);
    setTimeout(() => {
        button.disabled = false;
    }, 5200);
}

function remove_title() {
    title.innerText = '';
}

function show_title(input_text) {
    title.innerText = input_text;
}