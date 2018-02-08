var store = [{
        "title": "First post. 書きたいこと。",
        "excerpt":"このブログで書きたいことをまとめてみる。ブログのモチベーション情報系の学生なのにWeb系の知識がないなーと思ったので、JekyllとGithubを使ってWebページを作ってみました。このブログをちょこちょこいじってWeb系の知識を学んでいきたいと思います。書く(かもしれない)こと  日々のできごと  留学中のボルチモアの話  Johns Hopkins Univerisity(ジョンズホプキンス大学)のこと  Web系の知識で学んだことのまとめ  クライミング のこと三日坊主にならないように頑張ります。","categories": ["ブログ","モチベーション"],
        "tags": [],
        "url": "https://yumatsuoka.github.io/blog/%E3%83%96%E3%83%AD%E3%82%B0/%E3%83%A2%E3%83%81%E3%83%99%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3/first-post/",
        "teaser":"https://yumatsuoka.github.io/blog/assets/images/teaser_500x300.jpg"},{
        "title": "友達の猫の写真をまとめてみた。",
        "excerpt":"ボルチモアの友達の家にいるねこの写真をまとめて貼ってみた。ついでにjekyllとmarkdownを使ってブログを書く練習。画像を貼ってみる。ボルチモアで一番仲の良い友達の家にいるねこが好きすぎるアメリカのボルチモアに住み始めてはや4ヶ月。ジョンズホプキンス大学の大学院生として、研究に集中できる環境をもらっており平日はアジア人らしく、夜遅くまでラボに残っている。一方で週末はbarに飲みに行ったり、友達の家でchillingしている。その友達(自分より１０歳年上のworker)の家のねこが好きすぎてひたすら可愛がっている。餌をねだる姿が可愛すぎて、さんかく(三角形のねこの固形餌)をついつい与えすぎ、ダイエット中の彼女をつい太らせてしまう。ねこの名前は、pepper。さっそくpepperの写真を貼っていきたいがどう画像を表示していきたい….minimal-mistakesの公式のexampleをみてみると、以下のように書くようだ。https://mmistakes.github.io/minimal-mistakes/post%20formats/post-image-standard/# markdownの画像の貼り方。![pepper01](画像のPATH)# PATHの指定は以下のように。PATH = https://yumatsuoka.github.io/blog/assets/images/hoge.jpgpepperの写真を貼っていく上のmarkdownの記法のうち、下の文法を使って画像を貼ってみる。","categories": ["ブログ","ねこ","留学","ボルチモア"],
        "tags": [],
        "url": "https://yumatsuoka.github.io/blog/%E3%83%96%E3%83%AD%E3%82%B0/%E3%81%AD%E3%81%93/%E7%95%99%E5%AD%A6/%E3%83%9C%E3%83%AB%E3%83%81%E3%83%A2%E3%82%A2/pepper/",
        "teaser":"https://yumatsuoka.github.io/blog/assets/images/teaser_500x300.jpg"},{
        "title": "Github Pages + Jekyll で作るブログ",
        "excerpt":"GitHub Pages + Jekyll + minimal-mistakesを使ってブログを作ってみた。その作業の備忘録。モチベーション 自分の専門以外、日常を気軽にかけるブログ作る Markdownを使ってかけるブログ作りたい 少しでもweb系の勉強してみたい Githubの恩恵をもっと預かりたいそんな気持ちから、はてなブログでも良かったが無料でブログを開設できる(かっこ良さげなgithub.ioドメインを使える) Github pages + Jekyll + minimal mistakesでブログを作った。この作業をする時点で、webの知識ゼロ、Jekyllは名前すら知らなかった。Github Pagesでwebページを作成してみたとりあえず下記サイトを参考にhttps://qiita.com/budougumi0617/items/221bb946d1c90d6769e9Github PagesのAutomatic Page Generator(自動生成機能)を使ってテーマはシンプルな、Minimalを選びwebページを公開するところまでやってみたが、ブログ形式のwebページを作る方法がわからない。テーマの公式サイト、レポジトリを見てもわからない(自分がwebの知識ゼロ)https://orderedlist.com/minimal/JekyllとMinimal Mistakesを使ったwebページの作成そんな状態でおもむろにminimal github pages ブログでググってみたところ、以下のサイトを参考にすることでやりたいことができそうなので、みながら作業していった。xk11i.bizhttp://k11i.biz/blog/2016/08/11/starting-jekyll-with-Minimal-Mistakes/markdownで記事を書けばブログ公開…そんな楽な環境を目指していたが、Jekyllを使って手動でデプロイという思わぬコストが発生してしまった。自動化できそうだから、そのうちやる！# メモ：以下でググって作業github pages jekyll 自動デプロイそんなこんなで作業開始。詳しくはxk11i.bizを参照。# minimal-mistakesを落としてくる。git clone git@github.com:mmistakes/minimal-mistakes.git# ディレクトリに移動して、Gemfileをいじる# Minimal Mistakesのインストールに向けてvim Gemfile# ブログの情報やデザインなどいじるvim _config.yml# wehページのビルドbundle exec jekyll cleanbundle exec jekyll build# 今回はプロジェクトのGithub Pagesを使ったので、# docsディレクトリにhtmlをコピー。copy -r _site...","categories": ["blog","web"],
        "tags": ["jekyll","web","minimal-mistakes"],
        "url": "https://yumatsuoka.github.io/blog/blog/web/blog-jekyll/",
        "teaser":"https://yumatsuoka.github.io/blog/assets/images/teaser_500x300.jpg"},{
        "title": "アメリカのクライミング事情とホームジム",
        "excerpt":"アメリカに留学して5ヶ月が過ぎようとしているいま、趣味と呼べるのは、クライミングになった。 アメリカでクライミングをして気づいた日本との違いを書いてみた。アメリカでクライミングをやる気になったアメリカのジョンズホプキンズ大学に留学してから、クライミングを始めた。楽しすぎて、いまは週３で登っている。これまで日本(東京)では、不定期に３、４回くらいボルダリングジムに行ったことがあり、初心者が登れそうな部分を何度か登っては、それから１週間筋肉痛で苦しむというサイクルを繰り返していた。「ボルダーしたことがある。」と言える程度だった。そのとき続かなかった理由を考えると、  1回の利用料金が高い(2000円くらい？)  生活範囲から遠い、わざわざ電車に乗って移動する必要があった。  日本でクライミングをしている友達がいなかった。  腕がすぐパンプしてお金がもったいない。であったような気がする。アメリカに来てから、仲の良い友達がトップロープクライミングをたまにする人でちゃちゃーと車でジムまで連れて行ってくれたので、週末に登るのが楽しみになった。アメリカと日本のクライミングの環境の違い初めてアメリカのクライミングジムに行った時、アメリカで「クライミング」というと、メインはロープクライミング(トップ・リード)であることに驚いた。また、男女の比率が同じくらいであることも驚いた。あとは、子供の誕生日パーティーがクライミングジムで開かれて、20人くらいの小学生くらいの子供達がパーティーを楽しみながら、クライミングを楽しんでいる姿も興味深かった。アメリカでは、子供の頃から、クライミングは娯楽のひとつであり、様々な年代の人が休日に楽しむスポーツであると感じた。(5年住んでいた)東京では、ほぼクライミングといえば、ボルダリングであり、むしろロープができる設備があるジムの方が圧倒的に少ない感じがしていた。(ちなみに生まれ育った広島では、クライミングという言葉すら聞いたことがなかったし、体験したことがある人は周りに皆無だった。)東京で最寄りのクライミングジムだったランナウト(西国分寺駅)は行った中でゆいいつ、ロープの設備があった。しかし、ロープを使うとなると、特別、難しい気がして、一度もトライすることが無く、ボルダリングのみ体験していた。その理由としては、  なんかロープ使うから難しそう  ロープの方が料金が割高で、よくわからんのに差額のお金払ってまでやるのもなぁ…という感じだったと思う。当時は、シリアスな雰囲気でもくもくと登る雰囲気が好きになれなかった。上記をまとめると、日本と違って、アメリカにはロープクライミングもボルダリングも等しく扱われ、男女年齢関係なくスポーツを楽しむ環境があるということがあった。僕はアメリカのクライミングジムの雰囲気が雰囲気が好きだ。よく行くジムアメリカでよく行くクライミングジムは、２つある。Earth Treks１つ目は、Earth Treks( https://www.earthtreksclimbing.com/ )でかなり大きめの体育館くらいの大きさの施設であり、ロープは5.6から5.12dくらいまでそれぞれ４本ずつくらい用意されている。ボルダリング は５面くらいある。一番驚いたのは、子供専用の(そこまで高くない)トップロープの壁が普通のロープの壁と同じくらい別に用意されていることである。 スペースに余裕のあるアメリカだからできることだと思うが、このような工夫が人々の日常にクライミング を根付かせるポイントなのかなーと思った。料金に関しては、１日利用が２２ドル(2300円くらい)シューズ・ハーネス・ビレーデバイスのレンタルセットが11ドル(1200円くらい)なので、おそらく日本のジムの方が安い。普段は次に説明する大学の壁を登って、大学が使えない期間や、グレードの甘いここで自信をつけるためにたまに登りにいく。体感で、ホームの大学の壁と３つくらいグレードが違う。(例)ホプキンス10a -&gt; Earth Treks 11aホプキンス11b -&gt; Earth Treks 12aジョンズホプキンズ大学の大学のジムの壁いま週３で通っているのが、留学先のジョンズホプキンズ大学の壁である。ホプキンスの学生ならトップロープ壁もボルダーも無料で使えて、シューズのレンタルは1ドル(100円くらい)だが、学生が大学の施設を運営していることもあり、実際のところ無料。大学に雇われている人(ポスドク・教授・従業員)とその家族は年間１万円くらい？でクライミングの壁まで揃った豪華なジムが使いたい放題である。壁では、様々な人種の同じ学生がたくさんいて、洋楽の最新のPOPが大音量で流れる空間で、英語を使って和気あいあいと話し、完登したら近くの人とハイタッチするような雰囲気である。最初はビレーパートナーがいなかったので、ボルダーのみここでやっていると、たまたま日本人ポスドクとボルダー壁で出会い(キャンパスに日本人は5人もいない)、当時僕がホプキンスでV2を楽しんでいた(パンプしながら苦しんでいた)ときに、その人はホプキンスでV5, 5.11aを登っていたのでムーブを教えてもらっている間に意気投合して、今では週３でビレーパートナーをしている。たまたまではあるが、ジョンズホプキンズ大学に留学したことで、クライミングが無料、歩いて５分の立地、一緒に頑張る仲間を見つけ、バンプも少しは耐えられるようになり、日本でクライミングを続けられなかったであろう理由  1回の利用料金が高い(1500円くらい？)  生活範囲から遠い、電車に乗る必要があった。  日本でクライミングをしている友達がいなかった。  腕がすぐパンプしてお金がもったいない。を全て満たした感じがする。もともとは、Earth Treksでトップロープを体験したことが事の始まりで、連れてってくれていた友達には感謝している。恵まれた環境にいるので、これからもどんどん登っていきたい。","categories": ["ブログ","クライミング","留学","ホプキンス"],
        "tags": [],
        "url": "https://yumatsuoka.github.io/blog/%E3%83%96%E3%83%AD%E3%82%B0/%E3%82%AF%E3%83%A9%E3%82%A4%E3%83%9F%E3%83%B3%E3%82%B0/%E7%95%99%E5%AD%A6/%E3%83%9B%E3%83%97%E3%82%AD%E3%83%B3%E3%82%B9/climbing-first/",
        "teaser":"https://yumatsuoka.github.io/blog/assets/images/teaser_500x300.jpg"},{
        "title": "アメリカの危険な場所の見分け方",
        "excerpt":"ボルチモアで学んだアメリカの治安の悪い場所の見分け方、気をつける場所についてまとめてみた。ボルチモアや周辺都市の治安の悪さアメリカや世界の危険な都市ランキングで上位にランクインするボルチモアに住んで5ヶ月。その治安の悪さを説明している記述はネットにたくさんあり、  ボルチモアは、アメリカの治安の良い都市ランキングで29都市中23位、治安の悪い都市ランキングでワースト7位に入ってしまう、あまり治安の良くない街です。http://ryugaku-kuchikomi.com/blog/baltimore-safetyアメリカの最も危険な16の街と、街を体現する若手ラッパーたち。http://raq-hiphop.com/post-1401/では、その１６の街にランクインしている。アメリカに行くなら、避けて通るべき危険な都市25http://karapaia.com/archives/52198336.htmlでは、７位にランクインしている。隣の大きな都市のワシントンD.C.やフィラデルフィアもランクインしているのが気になるところ。行ってみて感じたのは、どの都市も観光地は日本の安全感覚のまま観光しても安全ということ。移動するときに、Uberを使えば問題はほぼ起こらないでしょう。しかし、住むとなると話は別だと思う。観光地の高級なホテルに住み続けるわけにいかず、危険な地域を歩く場合もある。いまのところ、事件に巻き込まれたことはなく楽しく過ごしている。こっちに来てから、現地の人から教えてもらったり、自分で気づいたアメリカで事件に巻き込まれない方法、つまり自分の身を守る方法をここに書く。アメリカの危険な場所の見分け方と気をつけることまずリストで書き出し、それぞれその理由をあとで書く。  一人で外で行動しない。  夜、日が暮れてからは絶対に歩かない。  人が歩いていない道・通りは歩かない。  店や家の窓に鉄格子がはまっているところは危険。  落書きのあるところは危険。  ゴミが落ちている場所は危険。  周りに自然を感じない、住宅街は危険。  近くにliqur shopのある場所は危険。  近くにMacDonaldやケンタッキー(KFC)のある場所は危険。  crimemappingのwebサイトを見て、街の危険な場所を把握しておく。  現金は外で絶対に見せない。  歩きスマホをしない。一人で外で行動しない。これは、一人で行動していると、背後にスキが生まれてしまったり、すぐに助けを呼べない点から良くありません。可能なら誰かと2人以上で行動する方が良い。(特に初めて歩く場所など)夜、日が暮れてからは絶対に歩かない。一番重要なことです。これさえ守っていれば事件に巻き込まれることは少ない。夜に移動する必要がある場合は、車を使うべきで、持っていないなら絶対にUberを使うべき。お金をケチるより、命の方が大切なので、夜は歩かない。もちろん自転車なんて乗っている人はいない。人が歩いていない道・通りは歩かない。人が歩いていない通り(特にダウタウン)は、ドラッグ(麻薬)の取引に使われることが多い、また犯罪者が襲いやすいので、歩くときは道の前後を見渡して人が他に歩いているかどうかを確認すべき。何人か人が歩いている場合は、女性やグループの後ろを歩くと危険度が下がる。まず、アメリカでは歩くこと自体がありえないので、悪いことは言わないので自分の車かUberを使うべき。店や家の窓に鉄格子がはまっているところは危険。店や家はその場所に長く存在するので、その場所の危険性を表している。店や家の特に１階部分の窓や扉に鉄格子がはまっている場所は注意すべき。住んでいる家の隣のブロックのコインランドリーの写真。窓には全て鉄格子がはまっており、入り口の窓ガラスは割れている。さらに上下水システムが壊れて、道路が水浸しになり、そのまま凍りついている。落書きのある場所、ゴミが落ちている場所は危険。建物の壁に落書きがある場所や家の前、歩道にゴミが落ちている場所は、危険な地域である場合が多い。その理由は、犯罪に関わる人々のナワバリを示すためにペイントしていたり、そのような人々が近くにいる可能性がある。ゴミが落ちている場所は、ゴミを道に平気で捨てる人(日本人だとありえない感覚)が歩いている、車を止めている場所であり、同時にその通りに住む人も同じような人である可能性が高いので、近づかないほうが良い。周りに自然を感じない、住宅街は危険。貧困層の家には木や芝生などが少ない傾向があるので、歩くなら自然を感じる場所・通りが良い。危ない通り安全な通り近くにliqur shopのある場所は危険。ボルチモアのあるメリーランド州はお酒・アルコールを販売できる店が決まっており、grocery store(スーパー)やSeven-eleven(コンビニ)には基本的には売っていない。liqur shopはお酒を売ることができる専門店で、その地域の雰囲気にあった外見や店内の雰囲気をしている。しかしながら、犯罪に関わる人々や、(アルコールや薬物)中毒者などが周りに立っていたり(座っていたり)するので、必要以上に近づかない、近くに住まないほうが良い。夜は絶対に近づいてはいけない場所の1つ。近くにMacDonaldやケンタッキー(KFC)のある場所は危険。MacDonaldやKFCは、物価の高いアメリカでは日本以上に安価に食事ができる外食店であるため、それらの外食店がある場所は、そのターゲットとなる貧困層の客(地域の住人)が多い傾向がある。そのため、それらの店がある周りは、犯罪率が高い傾向がある。昼ならましだが、夜は近づかない方が良いし、絶対にその店がある通りを歩いてはいけない。crimemappingのwebサイトを見て、町の危険な場所を把握しておく。crime maphttps://spotcrime.com/を使って、自分の家の周りやその都市の犯罪の分布を事前に確認しておくことで、危険な場所を避けることができる。以下に2017年11月某日のボルチモアの犯罪の分布図を載せる。ボルチモアの中心部の１日か２日間の犯罪一覧shooting(発砲事件)のみ表示(1ヶ月間くらい)ボルチモアなら、Penn Stationを中心にして西側と東側が危ないことが画像からわかる。※他の都市はここまで犯罪が起きていない。図の中に1つもアイコンが無いことが普通。現金は外で絶対に見せない。もともとアメリカでは現金で買い物することがないので、現金はできるだけ持ち歩かない方が良い。現金は奪われる可能性があるので、持っていることを周りの人に知られてはいけない。例えば、車の中なら、窓より下で出すをすべきだし、イスに座っているなら足の間、人のかげで出すべき。一方で、銃やナイフなどを突きつけられて強盗される可能性があるので、誰かに襲われ命の危険がある場合に備えて、10ドルや20ドル(1000, 2000円くらい)ほど現金をさっと手渡せるように用意しておくのは良いと思う。歩きスマホをしない。歩きスマホをしているとそのまま、ケータイを強奪されるので、歩きスマホは絶対にしないほうが良い。2018年2月4日時点でまとめてみたが、他にもポイントがある気がする。何か思い出した場合、気づいた場合はここに追記するかもしれない。※  危険な場所では写真を撮れないのであまり載せていないが、後日写真等追加するかもしれない。命が一番重要なので、守れるように準備をしておくべき。また、事件に巻き込まれても大変なので、アメリカに住む予定の人は日本とアメリカの治安は全く異なる。その違いを理解して、危険を察知する能力は身につけておくべきだと思う。","categories": ["ブログ","留学","ボルチモア","アメリカ"],
        "tags": [],
        "url": "https://yumatsuoka.github.io/blog/%E3%83%96%E3%83%AD%E3%82%B0/%E7%95%99%E5%AD%A6/%E3%83%9C%E3%83%AB%E3%83%81%E3%83%A2%E3%82%A2/%E3%82%A2%E3%83%A1%E3%83%AA%E3%82%AB/danger-notication/",
        "teaser":"https://yumatsuoka.github.io/blog/assets/images/teaser_500x300.jpg"},{
        "title": "ボルチモアの移動手段と公共交通機関とその危険性",
        "excerpt":"ボルチモアはアメリカではそこまで都会な街では無いため、ニューヨークやワシントンD.C.で発達している市街地を網羅する地下鉄のような公共交通機関が無い。そのため、ボルチモアで生活する場合は移動手段として車が必須になる。どうやってこれまで車を確保してきたか、公共交通機関をどうなるか体験談を交えてまとめてみた。ボルチモアは危険で車は必須ボルチモアは過去の記事で書いたように、アメリカでもダントツに治安の悪い街だ。そのため、ボルチモアの生活で街を歩く、という選択肢はもともと存在せず、さらに日本でいう東京や大阪、アメリカでいうニューヨークやワシントンD.C.にあるような街全体を網羅する電車(地下鉄)は存在しない。そうなると、移動手段は車となる。1年以上ボルチモアに住む、収入が安定している人は車を購入することをオススメする。その場合は中古でたくさん車が出ているので、その車を購入して、帰国の際にまた売りに出すことで滞在期間に合わせて自分で自由に使える車を手に入れることができる。もし車を購入しないという選択をする場合は、車での移動が必要なとき一時的に車をレンタルする、またはUberを使うことになると思う。一時的に車が必要な場合日本のようにレンタカー屋さんがたくさんあるわけでは無いので、カーシェアリングサービスのZipcarを使うことがオススメだ。自分で運転する必要がない場合は、Uberを絶対的にオススメする。自分はZipcarを使ったことがないが、車が必要な場合は現地の人はだいたいZipcarを勧める。初めて使う場合は、インターネットで登録し、登録した住所に書類が届くらしい。そのあとは、Penn station や inner habor、ジョンズホプキンス大学の周りなど、人がよく集まる場所にはだいたい使用可能な車があるので、それを借りられる。借りるときの注意点は、短時間の利用が安くてオススメで、数日間など長い期間でZipcarを使って車をレンタルする場合は割高になることらしい。例えば、だいたい郊外にある日本の食材が手に入るスーパーH Martで大量に買い込むために数時間車が必要になる場合、半日だけ隣の州のスキー場に行く場合など。数日必要になる場合は、他のサービスを考える必要がある。しかし、いまのところ必要になったことはないのでわからない。車で30分以内の移動する場合は、Uberを確実に勧める。初乗りが5ドルちょい(600円)で、30分乗ったとしても、25ドル(3000円)程度で済む。1ヶ月ばんばん使用すると、200ドル(2万円以上)超えることもあるが、車を中古で買い駐車料金を払って維持するより安いし、スマホさえあればドアtoドアで送迎してくれ、なによりボルチモアでは一番安全な交通手段だ。公共交通機関は使わない方がいいボルチモア内を公共交通機関で移動する場合は、バス、ライトレール(路面電車)がある。ボルチモアで公共交通機関を使うことはオススメしない。特に、バスは使うべきではない。また州をまたぐような長距離の移動は、飛行機、高速バス、高速鉄道(amtrak)がある。この場合でも、バスは使うべきではないと言う。短距離の移動に関しては、主観的な意見ではあるが、バス(ライトレールも含む)は車を所有できない(貧困層の)人が使用する交通機関であると経験から感じる。そのため、日本とは異なる異様な雰囲気のバスに乗る勇気が必要で、乗ったとしてもトラブルに巻き込まれる可能性がある。ボルチモアの地元の友達に、「この前バスに乗ったんだ」と話すと、勇気があるね、Uber使いなよと言われる。ボルチモアに実際に来ないと、この文章だけでは伝わらないものがあると思うが、個人的には車を所有していないのであれば、いつでもUberを使用することを勧める。長距離の移動に関してもバスはオススメしない。ニューヨークまで20ドル程度(2000円)の激安で移動できるが、上記のような理由で乗っている間は生きた心地がしないし、トラブルに巻き込まれる可能性がある。高速列車のamtrakは治安も悪くなく、快適な旅ができる。ボルチモアとワシントンD.C.間は8ドル(900円)という格安で移動できるし、使ったことはないがニューヨークの方にもそこまで高くない価格で移動できるはずだ。最後に、(ほとんど乗ったことがないが)バスに乗るたびに日本じゃありえない、驚くようなトラブルに巻き込まれているのでその体験を書いて終わりとする。遭遇した具体的な騒動ボルチモアの最寄り空港BWIからボルチモアの北側の家まで深夜に帰宅したときにお金がないのにバスに乗り込んできた乗客がいた話。一時的にお金がなさすぎて、Uberを使えなかった時にバスを利用した。2つのバスを乗り継いで帰宅することになったが、1つ目のバスはバスのお金の払い方がわからず手間取ってしまい、満員のバスの乗客を怒らせてしまい、険悪な雰囲気の状態で３０分程度乗った。その後１５分間でバスを乗り継ぐことになったが、乗り継ぐ場所がダウンタウンの西側のとても治安の悪い場所で、100mおきに警察車両がライトを光らせて止まっている。それが意味するのは、とても治安の悪いということだが、実際に真夜中に道を乗り換えまで歩いている時に道路で寝ているホームレスの人の横を歩くときはとても怖かった。また、バスを待っている時も生きた心地がしなかった。少し待ってバスに乗り込んだ後は、バスは家に近づいて行くが、バスを待っている人を守るために?警察車両が待機しているバス停に止まるたびに恐怖を感じた。あるバス停で乗ってきた乗客は、お金を払わず乗車し、その乗客がお金を払う気がないのを察した運転手はその乗客がお金を払うまで注意し出発を待った。その間、他の乗客はその客に向けてバスから出ろとFワードを連発した。問題の客は、自分がお金が無いのに乗るのが当然かのような態度で、運転手や他の乗客に、自分がヒスパニックだから差別的に無料で乗せず、誰も自分にDonation(その人がバスに乗るための募金)しないのかと言い続け(日本人だとお金が無いとバスに乗れるはずがないことを誰もが理解している)、最終的に降りるまで20分間ほどゴミや罵声が飛び交っていた。怖かった。これが最初で最後の市内でのバスの利用である。もう1つの話は、ニューヨークとボルチモア間の25ドルの長距離バスで移動している時の話。バスはバス停もない道端で乗客(自分)をピックアップとなっていて、このピックアップポイントには自分一人しかおらずマイナス4度の気温で雪が降る中、１時間半外で待たされた。バス到着後は運転手は何事もなかったかのように謝りもせず、「早く乗れ！」と言った。この瞬間にアメリカの文化を少し理解した。そのあとは４時間の移動の中で1度の休憩を挟んだ。休憩の際に、weed(マリファナ、大麻)を吸ってきた人がいてバス中が大麻くさくて耐えられなくなった。車内には子供も乗っているのに、バスの中でさえハイになりたい人がいてまたアメリカに失望した。休憩は１０分だったが、20分待っても戻ってこない客がいて、その弟を名乗る客がバスを降りてその客(兄)を探しにいった。その後10分して探しに出た弟だけが戻ってきて、運転手に「乗らないらしい」と伝えて、その客(兄)を置いてバスが出発することになった。その後、自分は寝ていたが、急に高速道路の緊急用の路肩にバスは停車した。そこで目がさめると、乗客の男(白人)が騒ぎだし、運転手とFワードを言い合い、殴り合いに発展しそうになった。そしてその白人の隣に座っていた女性客(黒人の女性)が仲裁に入ると、今度はその白人の男が女性に向かって差別的な発言をしだし、最終的にNから始まるもっとも危険な単語を黒人の女性に言った瞬間、その女性は思いっきり男性客の顔を殴り、その音が車内に響いた。同時に男性客が持っていたスマホも吹っ飛び車内の何処かに消えた。このタイミングで白人の男性は静かになり、運転手は運転に戻り、大幅に遅れて目的地に着いた。こんなことが目の前であったので二度とアメリカでバスを使うことはないだろう。近くの移動ならUber、遠くなら飛行機かamtrak。そう心に誓った。","categories": ["ブログ","留学","ボルチモア","アメリカ"],
        "tags": [],
        "url": "https://yumatsuoka.github.io/blog/%E3%83%96%E3%83%AD%E3%82%B0/%E7%95%99%E5%AD%A6/%E3%83%9C%E3%83%AB%E3%83%81%E3%83%A2%E3%82%A2/%E3%82%A2%E3%83%A1%E3%83%AA%E3%82%AB/transportation/",
        "teaser":"https://yumatsuoka.github.io/blog/assets/images/teaser_500x300.jpg"},{
        "title": "クライミングの自分の練習内容をまとめてみた",
        "excerpt":"週３回で2ヶ月続けている２時間のクライミングの練習を振り返るためにまとめてみた。5.11aクライマーのビギナーな内容なので、参考程度に読んでください。１週間のトレーニングスケジュール１週間のうち、火水木曜日の3日連続で2時間登るようにしている。というのも、筋肉には増強を効率化させる超回復というタイミングが存在し、その超回復の期間は筋肉によって異なっているらしいので、筋肉の成長に必要な超回復と分割法より引用。パンプしやすく筋肉痛になりやすい(細かい筋肉の集まりである)前腕の回復が２４時間なので、連続で3日間やっていても超回復の恩恵を受けることができる。三角筋や広背筋など大きい筋肉は超回復が遅く、数日の間をあける必要があるが、休憩の多い２時間のトップロープではそれら大きい筋肉を追い込みきれないことが多いので、3日連続でトレーニングして、残りの４日間(96時間)で完全に休めて超回復を促すようにしている。これが１週間の流れ。※ (1) これまで関節や腱について考えていなかったので、このスケジュールでは筋肉以外の部分がケガするかもしれない。※ (2) 上記の筋肉の超回復という理論が本当に存在しているのか、筋肉ごとに超回復に必要な期間が異なることは、自分で科学的な文献を調べて引用していないので、真偽はわからない。しかし、経験から納得できる内容であったために、信用し実際のトレーニングに適用している。アップいきなり登り始めると腕がすぐパンプして、体を鍛えたり体の使い方を身につける前に登れなくなるのはもったいないので、以下のアップを行なっている。クライミングは夜の20時から22時まで２時間行なっている。 クライミングの練習の質を上げるために、練習の前にランニングをしている。体を動かし始める30分前にBCAAs(アミノ酸)のドリンクを作り、少しずつ飲み始める運動することによって筋肉が急激に分解されるのを防ぐために、運動を始める30分前からアミノ酸を飲んでいる。アミノ酸は飲んでからだんだんと体内にいき渡り、分解されていく。飲んでから30分がそのピークということ(をどこかで読んだの)で運動を始める30分前から飲み始めている。(アマチュアが練習するのにそこまで考える必要は無いかもしれない。)アミノ酸はそのまま最後までちびちび飲み続ける。バナナがあればついでに食べる。クライミングを始める前に10分間ランニングするランニングをして、体の血液の循環を促すことで、筋肉に飲んだアミノ酸や糖分を行き渡らせるのが目的。あと、汗をかくほど走っておくことで、クライミングで筋肉に生じた乳酸が血液の循環で排出されやすくなり、パンプするのを防止する(遅らせる)のが狙い。このランニングをするようになってから、(パンプに耐えて)トライできる回数が増えた気がする。(ただの思い込みかも)ビレーパートナーと合流して、ストレッチを１０分間しながら登る内容など話す。ここから２時間。ビレーパートナーとクライミングをする。  ボルダリングでもこっから合流して、2人で登る。このサイトのストレッチみたいなものを中高の部活の内容を思い出しながら10分間ほどやっている。実際に壁を登るすべてのルートで５回以上完登(レッドポイント)することを目標として練習している。最初は休み休みでも良いので、上まで登るのを目標にする。1度上まで登ったルートは、レッドポイント(R.P.)を目指して登る。最終的には5回完登を目指す。1回以上登りきったルートをアップで登るR.P.はまだ少し難しいかも、休みながらなら確実に登れると思う程度のルートを1つ以上登る。腕がパンプして登れなくなるまで、本命の登れていないルートを登る本命の登りきれていない(休憩しても登りきれていない、格上の)ルートを腕が死んで登れなくなるまでトライし続ける。そこまで苦労せずに登れた場合は、R.P.目指してそのまま連続で登れるだけ登る。1回以上完登経験のあるルートを登るノルマの5回完登を目指し、完登経験のある(登るのがいまではそこまで苦ではない)ルートを時間いっぱいまで登る。ダウンプロテインを30分以内に飲む。とりあえず、チョークまみれの手を洗うついでに、水を給水機からもらってプロテインを作る。そしてそのまま飲む。その場で飲めなければ帰宅してすぐ飲む。このときバナナが手元にあれば一緒に食べるとベストプロテインを飲んでから30分以上空けてから、炭水化物とタンパク質を中心に夜ご飯プロテインを飲んだ後すぐにご飯を食べるとプロテインの消化が遅れるために、30分以上時間を空けて食べるようにしている。プロテインでタンパク質は取っているため、炭水化物(ごはん)と野菜を中心に食べている。食事で油っぽいもの食べるくらいなら、肉などタンパク質をとる。まだ実現できていない(けどやりたいと思っている)ダウン  バケツに氷水をはって、二の腕まで15分くらいつけてアイシング  10分間のストレッチ3日連続で登ることもあり、ダウンがとても重要だと思っているが、帰宅時に23時程度になることもあり、思っているほど実践できていないのが現状。特に、手から二の腕(前腕)までのアイシングはとても重要だと思っている。(やらなきゃ！)おわりにこれまでの悩みは、最初にグレード少し落とした完登ギリギリラインのトップロープを１本登ったくらいでけっこう腕がパンプして困っていた。これは、クライミング前にランニングをすることで少しだけ緩和した(気がする)。一方で、最近、クライミングをやり始めて45日後くらいから、左手の指(特に人差し指と中指)が痛くなり、思いっきり握れなくなった。ケガをすることが一番よくないので、この指の痛み(拳を作った時、深く限界まで曲げた時に痛む)を(大きなケガになる前にできるだけ早く)なんとかする必要があると思う。アイシングだけでもしようかなぁと考えている。アメリカでどこでバケツ買えばいんだ？？？指について進展(良くなったり悪化したり)があればまた記事を書くと思う。","categories": ["ブログ","クライミング"],
        "tags": [],
        "url": "https://yumatsuoka.github.io/blog/%E3%83%96%E3%83%AD%E3%82%B0/%E3%82%AF%E3%83%A9%E3%82%A4%E3%83%9F%E3%83%B3%E3%82%B0/climb-practice/",
        "teaser":"https://yumatsuoka.github.io/blog/assets/images/teaser_500x300.jpg"},{
        "title": "クライミングを初めて2ヶ月の進捗 V4と5.11aまで",
        "excerpt":"クライミングを初めて2ヶ月の進捗を印象的な内容とともに、時系列に振り返ってみる。クライミングを始めてから2ヶ月初めてトップロープを登ったのは去年、2017年11月某日。そこから11月の間に3度くらい登りに行った。毎週末にふらっと行っていた感じ。11月末の時点で、完登したグレードのベストはV2, 5.7だった。@(グレードの設定の甘い)Earth Trecksその後、2017年11月30日にジョンズホプキンス大学のクライミングジムのボルダ壁を初めて登り、いまビレーパートナーをしている人と運よく出会った。そこからは高校の部活並みに本気でクライミングに打ち込むようになった。ということで、本気でクライミングを始めたのは2017年12月5日で、スタートのグレードはボルダーV2, トップロープ5.7。いま記事を書いている、今日2月7日でちょうど2ヶ月たったので、それぞれクライミングの進捗をまとめようと思う。時系列に進捗を追ってみる2017年12月以降、2ヶ月間は週3(連続3日、火水木曜連続)登る生活を続けている。ホームジムは、ホプキンスの大学の壁(無料)で普通の民間のジムよりグレードが3以上難しいイメージ。だいたいトップロープをやって、たまにボルダーをやる日々。基本的に1つの課題はできるだけ時間を置かずに５回ずつ登るようにしている。  2017年12月05日, (Earth TrecksでR.P 5.7だったのに)いきなりホプキンスの5.8から登らされて、5.8グレードルードを全部登り、5.9を1つ完登。  2017年12月10日, ボルダリングシューズ(スクワマ)とハーネスとチョーク・バッグ、ビレーデバイスを買い、クライミングにのめり込む  2017年12月14日, 年内のホプキンスの壁の営業が次の日で終わり、トップロープは5.9を全て登りきりR.Pは5.9、ハングをこえる5.9+を登りきれず終了。  2017年12月15日, この週4日目にボルダーをして、V3を全部完登(R.P)。V4はレベルが違いまったく歯が立たなかった。  2017年12月23日, Earth Trecksに行って、年内(2017年)の登り納め。グレードの設定が簡単なため、攻めて5.10bまで完登。  2018年01月09日, 2018年の登り始め。２週間ぶりだったが、昨年の宿敵5.9+のハングをクリアして、5.9ルート群の５回登りのノルマをこなす。  2018年01月16日, 初めて5.10aをクリア。初めてのトライで完登。ここからコツコツ5.10ルート群をこなしていく。  2018年02月01日, 初めてボルダーV4を完登、しかもオンサイト。トップロープのトレーニングのおかげか、急に全てのV4のルートが登れそうな気がしてきた。  2018年02月02日, 1月の間に課題が2個増え、2週間くらい苦しんでいた増えた課題の5.10bをクリア。もう1つの新しい5.10cをクリアすれば5.10完全制覇。  2018年02月06日, 全ての5.10を制覇。この日から5.11を始める。記念にトライしてみた5.11aをそのまま完登。ということで、2ヶ月週3でクライミングをした結果、5.11aまで完登しました。(Earth Trecksなら5.12aが今月には登れそうなレベルなはず。)R.P.は、ボルダーV4、トップロープ5.10d、オンサイトはボルダーV4、5.9。最後に過去に記念で撮った写真など貼ります。初めて登った5.10aのルート。クライミングを初めて実質1ヶ月くらい。これがジョンズホプキンス大学の5.10d(クラックあり)で、５回完登した際に記念に撮ってもらった動画(のgif)。2018年02月06日に登れた最後の5.10の課題。女の子が作った黄色のハートの課題で、身長が低い人は最初からハング越えのジャンプ(課題作った本人もジャンプ)、ポケットの連続のあとの2度目のハングからは傾斜があるのに足が置きづらく、腕で持ち上げていくラスト4ホールドちょうど2ヶ月のタイミングで一発完登した、初めての5.11台のルート(5.11a)。横の壁と壁の境目の出っ張り(arete)を使って登る。腕はほぼ使わず、どれだけ工夫して体を上に押し上げるかの課題。あと半年で、ホプキンスの5.12aまで登るのが目標。これから地獄のように難しい課題ばかりですが、頑張ります。","categories": ["ブログ","留学","クライミング"],
        "tags": [],
        "url": "https://yumatsuoka.github.io/blog/%E3%83%96%E3%83%AD%E3%82%B0/%E7%95%99%E5%AD%A6/%E3%82%AF%E3%83%A9%E3%82%A4%E3%83%9F%E3%83%B3%E3%82%B0/past-climb/",
        "teaser":"https://yumatsuoka.github.io/blog/assets/images/teaser_500x300.jpg"}]
