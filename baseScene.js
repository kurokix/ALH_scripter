class BaseScene extends Scene {
  constructor(image, width, height)　{
    super();
    // 背景
    var sceneImage = new Sprite(width, height);
    sceneImage.image = image;

    // テキストエリア
    var sceneText = new TextWindow(width, height);

    // タッチイベント
    this.addEventListener('touchstart', function() {
      var textSprite = sceneText.childNodes[1];
      if (textSprite.clickable == false) {
        return;
      }
      textSprite.clickable = false;
      textSprite.text = textSprite.text + '<br>';
      var textIndex = textSprite.text.length;
      var dispText = textSprite.text + 'hogehoge';
      var dispSize = dispText.length;
      textSprite.onenterframe = function () {
        if (this.text.length < dispSize) {
          this.text += dispText.substring(textIndex, textIndex + 1);
          textIndex++;
          if (this.text.length == dispSize) {
            this.clickable = true;
          }
        }
      }
    });

    this.addChild(sceneImage);
    this.addChild(sceneText);

  }
}
