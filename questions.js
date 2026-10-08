// ===============================================================
//  並べ替え問題のデータ
//  問題を差し替えるときは、このファイルだけを書き換えてください。
//
//  ja    : 日本語の意味（画面にヒントとして表示されます）
//  words : 正しい順番に並べた単語（この順番が正解になります）
//          ※ 文頭の大文字もそのまま書いてください（例: "She"）
//            カードでは文頭の語を自動で小文字にします（"I" はそのまま）
//  end   : 文末の記号（"." や "?"）。カードにはならず、最後に自動で付きます
//  exp   : 答え合わせのあとに表示する短い解説（日本語）
//  alt   : （任意）別の正解の並び順があるときだけ書きます
//  capital : （任意）文頭が人名・地名などで大文字のまま出すときだけ true
// ===============================================================
const QUESTIONS = [
  {
    ja: "私は毎朝7時に起きます。",
    words: ["I", "get", "up", "at", "seven", "every", "morning"],
    end: ".",
    exp: "get up で「起きる」。at seven（7時に）と every morning（毎朝）は文の後ろに置きます。",
  },
  {
    ja: "彼女は今、公園でテニスをしています。",
    words: ["She", "is", "playing", "tennis", "in", "the", "park", "now"],
    end: ".",
    exp: "〈is + 〜ing〉で「〜しているところ」。in the park（場所）と now（時）はどちらが先でも正解です。",
    alt: [["She", "is", "playing", "tennis", "now", "in", "the", "park"]],
  },
  {
    ja: "あなたは朝食に何を食べましたか。",
    words: ["What", "did", "you", "eat", "for", "breakfast"],
    end: "?",
    exp: "「何を」の What を文の最初に置きます。過去の疑問文なので did を使い、eat はそのままの形です。",
  },
  {
    ja: "この本はあの本よりもおもしろいです。",
    words: ["This", "book", "is", "more", "interesting", "than", "that", "one"],
    end: ".",
    exp: "more interesting than 〜 で「〜よりおもしろい」。one は book のくり返しをさけることばです。",
  },
  {
    ja: "私は10年間ずっと群馬に住んでいます。",
    words: ["I", "have", "lived", "in", "Gunma", "for", "ten", "years"],
    end: ".",
    exp: "〈have + 過去分詞〉で「ずっと〜している」。for ten years は「10年間」です。",
  },
  {
    ja: "彼は将来、医者になりたいと思っています。",
    words: ["He", "wants", "to", "be", "a", "doctor", "in", "the", "future"],
    end: ".",
    exp: "want to be 〜 で「〜になりたい」。He なので wants と s が付きます。in the future は「将来」です。",
  },
  {
    ja: "その手紙は私の祖母によって書かれました。",
    words: ["The", "letter", "was", "written", "by", "my", "grandmother"],
    end: ".",
    exp: "〈was + 過去分詞〉で「〜された」。by 〜 は「〜によって」です。",
  },
  {
    ja: "ドアのそばに立っている男の子を知っていますか。",
    words: ["Do", "you", "know", "the", "boy", "who", "is", "standing", "by", "the", "door"],
    end: "?",
    exp: "who is standing by the door が the boy を後ろから説明します。人を説明するときは who を使います。",
  },
  {
    ja: "私たちにとって本を読むことは大切です。",
    words: ["It", "is", "important", "for", "us", "to", "read", "books"],
    end: ".",
    exp: "It is 〜 for 人 to … で「人にとって…することは〜だ」。It は to read books のことです。",
  },
  {
    ja: "このコンピューターの使い方を私に教えてください。",
    words: ["Please", "tell", "me", "how", "to", "use", "this", "computer"],
    end: ".",
    exp: "how to 〜 で「〜のしかた」。tell 人 もの で「人にものを教える」。Please は文の最初に置きます。",
  },
];
