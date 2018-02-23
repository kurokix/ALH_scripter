class OfficeRoomScene extends BaseScene {

  constructor(image, width, height) {
    super(image, width, height);
    this.lineNo = 0;
    this.archiveText = ['せりふが', '順に表示されるように', 'したんです。', '(川平)'];
  }

  // オーバーライド
  nextLines() {
    this.lineNo = 0;
    this.archiveText = ['ここが', 'シーン1', 'なんです。', '(川平)'];
  }

}
