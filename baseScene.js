class BaseScene extends Scene {
  constructor(image, width, height)　{
    super();
    // 背景
    var sceneImage = new Sprite(width, height);
    sceneImage.image = image;

    // テキストエリア
    var sceneText = new TextWindow(width, height);

    this.addChild(sceneImage);
    this.addChild(sceneText);

  }
}
