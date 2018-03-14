class OfficeRoomScene extends BaseScene {

  constructor(core, width, height) {
    super(core, width, height);
    this.setSceneImage(core);
    this.lineNo = 0;
    this.archiveText = [];//['せりふが', '順に表示されるように', 'したんです。', '(川平)'];
    core.replaceScene(this);
  }

  // オーバーライド
  nextLines() {
    this.lineNo = 0;
    this.archiveText = ['ここが', 'シーン1', 'なんです。', '(川平)'];
  }

  // 画像セット
  setSceneImage (core) {
    this.childNodes[0].image = core.assets['resources/graphic/bg/train_01.png'];
  }

}
