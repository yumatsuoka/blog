var store = [{
        "title": "First post. 書きたいこと。",
        "excerpt":"ブログのモチベーション情報系の学生なのにWeb系の知識がないなーと思ったので、JekyllとGithubを使ってWebページを作ってみました。このブログをちょこちょこいじってWeb系の知識を学んでいきたいと思います。書く(かもしれない)こと  日々のできごと  留学中のボルチモアの話  Johns Hopkins Univerisity(ジョンズホプキンス大学)のこと  Web系の知識で学んだことのまとめ  クライミング のこと三日坊主にならないように頑張ります。","categories": ["blog"],
        "tags": ["firstpost","motivation"],
        "url": "https://yumatsuoka.github.io/blog/blog/first-post/",
        "teaser":null},{
        "title": "友達の猫の写真をまとめてみた。",
        "excerpt":"ボルチモアで一番仲の良い友達の家にいるねこが好きすぎるアメリカのボルチモアに住み始めてはや4ヶ月。ジョンズホプキンス大学の大学院生として、研究に集中できる環境をもらっており平日はアジア人らしく、夜遅くまでラボに残っている。一方で週末はbarに飲みに行ったり、友達の家でchillingしている。その友達(自分より１０歳年上のworker)の家のねこが好きすぎてひたすら可愛がっている。餌をねだる姿が可愛すぎて、さんかく(三角形のねこの固形餌)をついつい与えすぎ、ダイエット中の彼女をつい太らせてしまう。ねこの名前は、pepper。さっそくpepperの写真を貼っていきたいがどう画像を表示して行くのだろうか….![pepper01](画像のPATH)or# 出力される画像のサイズを指定。&lt;img src=\"画像のPATH\" width=\"xxxpx\"&gt;# こっちはGIF画像もいける...？今回はローカルでJekyllにより、htmlをコンパイルしてコンパイルずみのhtmlをwebページとして公開するので、PATHはこの記事を書いているmarkdownのファイルからみた画像のディレクトリを相対パスで記していく。pepperの写真を貼っていく上のmarkdownの記法のうち、下の文法を使って画像を貼ってみる。![hoge](https://yumatsuoka.github.io/blog/assets/images/hoge.jpg)","categories": ["blog"],
        "tags": ["cat","pepper","baltimore","us"],
        "url": "https://yumatsuoka.github.io/blog/blog/pepper/",
        "teaser":null},{
        "title": "Github Pages + Jekyll で作るブログ",
        "excerpt":"モチベーション 自分の専門以外、日常を気軽にかけるブログ作る Markdownを使ってかけるブログ作りたい 少しでもweb系の勉強してみたい。 Githubの恩恵をもっと預かりたい。そんな気持ちから、はてなブログでも良かったが無料でブログを開設できる(かっこ良さげなgithub.ioドメインを使える)Github pages + Jekyll + minimal mistakesでブログを作ってみました。この作業をする時点で、webの知識ゼロ、Jekyllは名前すら知らなかった。Github Pagesでwebページを作成してみたとりあえず下記サイトを参考にhttps://qiita.com/budougumi0617/items/221bb946d1c90d6769e9Github PagesのAutomatic Page Generator(自動生成機能)を使ってテーマはシンプルな、Minimalを選びwebページを公開するところまでやってみたが、ブログ形式のwebページを作る方法がわからない。テーマの公式サイト、レポジトリを見てもわからない(自分がwebの知識ゼロ)https://orderedlist.com/minimal/JekyllとMinimal Mistakesを使ったwebページの作成そんな状態でおもむろにminimal github pages ブログでググってみたところ、以下のサイトを参考にすることでやりたいことができそうなので、みながら作業していきました。xk11i.bizhttp://k11i.biz/blog/2016/08/11/starting-jekyll-with-Minimal-Mistakes/markdownで記事を書けばブログ公開…そんな楽な環境を目指していましたが、Jekyllを使って手動でデプロイという思わぬコストが発生してしまいました。自動化できそうだから、そのうちやる！# メモ：以下でググって作業github pages jekyll 自動デプロイそんなこんなで作業開始。詳しくはxk11i.bizを参照。# minimal-mistakesを落としてくる。git clone git@github.com:mmistakes/minimal-mistakes.git# ディレクトリに移動して、Gemfileをいじる# Minimal Mistakesのインストールに向けてvim Gemfile# ブログの情報やデザインなどいじるvim _config.yml# wehページのビルドbundle exec jekyll cleanbundle exec jekyll build# 今回はプロジェクトのGithub Pagesを使ったので、# docsディレクトリにhtmlをコピー。copy -r _site docsgit add *git commit -m \"Add...","categories": ["blog","web"],
        "tags": ["jekyll","web","minimal-mistakes"],
        "url": "https://yumatsuoka.github.io/blog/blog/web/blog-jekyll/",
        "teaser":null}]
