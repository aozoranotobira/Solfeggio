
# ソルフェジオ周波数


## 再生
---
ソルフェジオ周波数または任意の周波数を再生できます。


## ソルフェジオ周波数の効果
---
各周波数の効果の一覧を紹介します。


## 波形と音色
---
各波形の特徴と音色を紹介します。


## 対応ブラウザ
---
開発および動作確認はChromeで実施しています。

ブラウザ互換性（MDN Web Docsを参照）を以下に示しますが、動作確認は未実施です。

対応ブラウザ
- Chrome
- Edge
- Firefox
- Opera
- Safari
- WebView Android
- Chrome Android
- Firefox for Android
- Opera Android
- Safari on iOS
- Samsung Internet

非対応ブラウザ
- Internet Explorer


## ローカルでの確認方法
---
1. SSL化（http→https）のため、OpenSSLをインストールして、自己証明書を作成
```
openssl req -x509 -newkey rsa:4096 -sha256 -nodes -keyout vscode_live_server.key.pem -out vscode_live_server.cert.pem  -subj "//CN=example.com" -days 3650
```
2. VSCode 拡張機能 Live Server の https 設定に、1.で作成した pem を追加
3. 自己証明書で Service Worker を動かすため、Chrome の起動オプションを追加して起動
```
C:\Program Files\Google\Chrome\Application\chrome.exe" ^
     --user-data-dir=C:\Users\ty331831\Documents\src\ChromeUserData ^
     --unsafely-treat-insecure-origin-as-secure=https://localhost ^
     --allow-insecure-localhost ^
     --ignore-certificate-errors
```
4. index.html を Live Server で起動し、https://127.0.0.1:5500/index.html にアクセス


## 参考文献
---
オシレータ
- http://curtaincall.weblike.jp/portfolio-web-sounder/webaudioapi-basic/oscillator

視覚化
- https://developer.mozilla.org/ja/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API

ソルフェジオ周波数
- http://blog.livedoor.jp/camcamcamc-camcamcamc/archives/39899804.html
- https://www.miki.co.jp/culture/bizdev/miki_music_lab/1343/
- https://soundorbis.com/solfeggio-9/

正弦波 矩形波 ノコギリ波 三角波
- https://dirigent.jp/blog/d-fun4/
- https://synth-voice.sakura.ne.jp/synth-voice/html5/synth-basic01.html
- https://abc-musicschool.com/dtm_blog/?p=3154

