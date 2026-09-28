// ===============================================================
//  並べ替え問題のデータ
//  問題を差し替えるときは、このファイルだけを書き換えてください。
//
//  ja    : 日本語の意味（画面にヒントとして表示されます）
//  words : 正しい順番に並べた単語（この順番が正解になります）
//          ※ 文頭の大文字もそのまま書いてください（例: "I", "She"）
//  end   : 文末の記号（"." や "?"）。カードにはならず、最後に自動で付きます
//  alt   : （任意）別の正解の並び順があるときだけ書きます
// ===============================================================
const QUESTIONS = [
  {
    ja: "私は毎朝7時に起きます。",
    words: ["I", "get", "up", "at", "seven", "every", "morning"],
    end: ".",
  },
  {
    ja: "彼女は今、公園でテニスをしています。",
    words: ["She", "is", "playing", "tennis", "in", "the", "park", "now"],
    end: ".",
    alt: [["She", "is", "playing", "tennis", "now", "in", "the", "park"]],
  },
  {
    ja: "あなたは朝食に何を食べましたか。",
    words: ["What", "did", "you", "eat", "for", "breakfast"],
    end: "?",
  },
  {
    ja: "この本はあの本よりもおもしろいです。",
    words: ["This", "book", "is", "more", "interesting", "than", "that", "one"],
    end: ".",
  },
  {
    ja: "私は10年間ずっと群馬に住んでいます。",
    words: ["I", "have", "lived", "in", "Gunma", "for", "ten", "years"],
    end: ".",
  },
  {
    ja: "彼は将来、医者になりたいと思っています。",
    words: ["He", "wants", "to", "be", "a", "doctor", "in", "the", "future"],
    end: ".",
  },
  {
    ja: "その手紙は私の祖母によって書かれました。",
    words: ["The", "letter", "was", "written", "by", "my", "grandmother"],
    end: ".",
  },
  {
    ja: "ドアのそばに立っている男の子を知っていますか。",
    words: ["Do", "you", "know", "the", "boy", "who", "is", "standing", "by", "the", "door"],
    end: "?",
  },
  {
    ja: "私たちにとって本を読むことは大切です。",
    words: ["It", "is", "important", "for", "us", "to", "read", "books"],
    end: ".",
  },
  {
    ja: "このコンピューターの使い方を私に教えてください。",
    words: ["Please", "tell", "me", "how", "to", "use", "this", "computer"],
    end: ".",
  },
];
