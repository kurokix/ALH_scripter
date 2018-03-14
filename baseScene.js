class BaseScene extends Scene {

  constructor(core, width, height)　{
    super();

    // 背景定義
    var sceneImage = new Sprite(width, height);

    // テキストウィンドウ定義
    var sceneText = new TextWindow(width, height);

    // タッチイベント
    this.addEventListener('touchstart', function() {
      var textSprite = sceneText.childNodes[1];

      // テキスト表示中はクリック不可
      if (textSprite.clickable == false) {
        return;
      }
      // 一定行表示したら文クリアして次の文章表示
      if (this.archiveText.length - 1 < this.lineNo) {
        textSprite.text　= '';
        this.nextLines();
      }

      // 表示文章取得
      var dispText = textSprite.text + this.archiveText[this.lineNo];
      this.lineNo++;

      textSprite.clickable = false;　// クリックイベント非活性
      var dispSize = dispText.length;　// 改行判定用
      var textIndex = textSprite.text.length; // 表示文字判定用
      // 文章を順に表示
      textSprite.onenterframe = function () {
        if (this.text.length < dispSize) {
          this.text += dispText.substring(textIndex, textIndex + 1);
          textIndex++;
          if (this.text.length == dispSize) {
            this.text += '<br>';
            this.clickable = true;
          }
        }
      }
    });

    this.addChild(sceneImage);　// 背景画像セット
    this.addChild(sceneText); // テキストウィンドウセット
  }

  // 抽象メソッド
  nextLines() {
  }
}
