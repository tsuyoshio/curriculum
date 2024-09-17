//Humanクラスを作成
class taiyaki {

  //コンストラクタ
  constructor(nakami) {
      this.nakami = nakami;    
  }
  cook(){
    console.log('中身は'+this.nakami+'です');
    }
}

let anko = new taiyaki('あんこ');
anko.cook();
let cream = new taiyaki('クリーム');
cream.cook();
let chese = new taiyaki('チーズ');
chese.cook();
