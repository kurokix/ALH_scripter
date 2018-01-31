enchant();
/**
 * テキストウィンドウの表示クラス
 */
class TextWindow extends Group {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = (height / 3);
    this.x = 0;
    this.y = height - this.height;
    // シート設定
    var sheet = new PrmSheet(0, 0, width, height);
    sheet.backgroundColor = 'white';
    sheet.opacity = 0.7; // 透明度
    // テキスト設定
    var text = new Text(0,0, 'じゃぶじゃぶ課金したくなるような射幸心を煽る文章', 'black');
    text.width = width;

    this.addChild(sheet);
    this.addChild(text);
  }
}
/**
 * テキスト表示のクラス※クリックイベント作成予定
 ※ @param x x座標
 * @param y y座標
 ※ @param text 表示するテキスト
 * @param color 文字色
 *
 */
class Text extends Label {
  constructor(x, y, text, color) {
    super();
    this.x = x;
    this.y = y;
    this.text = '';
    this.color = color;
    var dispText = text;
    var dispSize = dispText.length;
    var textIndex = 0;
    this.onenterframe = function (){
      if (this.text.length < dispSize) {
        this.text += dispText.substring(textIndex, textIndex + 1);
        textIndex++;
      }
    }
  }
}
/**
 * テキストウィンドウの背景設定クラス
 */
class PrmSheet extends Entity {
  constructor(x, y, width, height) {
    super();
    this.backgroundColor = 'white';
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}
