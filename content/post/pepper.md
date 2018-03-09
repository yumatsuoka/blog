---
title: "友達の猫の写真をまとめてみた。"
date: 2018-01-26
draft: false
categories: [ブログ, ねこ, 留学, ボルチモア]

autoThumbnailImage: false
thumbnailImagePosition: left
thumbnailImage: //farm5.staticflickr.com/4800/39808147185_7a70898473_m.jpg
#coverImage: 

---

ボルチモアの友達の家にいるねこの写真をまとめて貼ってみた。  
ついでにjekyllとmarkdownを使ってブログを書く練習。画像を貼ってみる。  

<!--more-->

<!-- toc -->

## ボルチモアで一番仲の良い友達の家にいるねこが好きすぎる

アメリカのボルチモアに住み始めてはや4ヶ月。  
ジョンズホプキンス大学の大学院生として、研究に集中できる環境をもらっており  
平日はアジア人らしく、夜遅くまでラボに残っている。  
一方で週末はbarに飲みに行ったり、友達の家でchillingしている。  

その友達(自分より１０歳年上のworker)の家のねこが好きすぎて  
ひたすら可愛がっている。  
餌をねだる姿が可愛すぎて、さんかく(三角形のねこの固形餌)をついつい与えすぎ、  
ダイエット中の彼女をつい太らせてしまう。  

ねこの名前は、pepper。  


## さっそくpepperの写真を貼っていきたいがどう画像を表示していきたい....

minimal-mistakesの公式のexampleをみてみると、以下のように書くようだ。  

<https://mmistakes.github.io/minimal-mistakes/post%20formats/post-image-standard/>

```
# markdownの画像の貼り方。
![pepper01](画像のPATH)

# PATHの指定は以下のように。
PATH = {{ site.url }}{{ site.baseurl }}/assets/images/hoge.jpg
```

## pepperの写真を貼っていく

上のmarkdownの記法のうち、下の文法を使って  
画像を貼ってみる。  


![pepper01]({{ site.url }}{{ site.baseurl }}/assets/images/01.jpg)
![pepper02]({{ site.url }}{{ site.baseurl }}/assets/images/02.jpg)
![pepper03]({{ site.url }}{{ site.baseurl }}/assets/images/03.jpg)
![pepper04]({{ site.url }}{{ site.baseurl }}/assets/images/04.jpg)
![pepper05]({{ site.url }}{{ site.baseurl }}/assets/images/05.jpg)
![pepper06]({{ site.url }}{{ site.baseurl }}/assets/images/06.jpg)
![pepper010]({{ site.url }}{{ site.baseurl }}/assets/images/07.jpg)
![pepper08]({{ site.url }}{{ site.baseurl }}/assets/images/08.gif)
![pepper09]({{ site.url }}{{ site.baseurl }}/assets/images/09.gif)

{{< image classes="clear" src="https://farm5.staticflickr.com/4799/40699154741_d388e9a620_m.jpg" thumbnail-width="150px" thumbnail-height="300px" >}}

{{< image classes="clear" src="https://farm5.staticflickr.com/4801/39803597085_c1d9cea2fd_m.jpg" thumbnail-width="150px" thumbnail-height="300px" >}}

{{< image classes="clear" src="https://farm5.staticflickr.com/4786/40699154911_6fde3e72b3_m.jpg" thumbnail-width="150px" thumbnail-height="300px" >}}

{{< image classes="clear" src="https://farm5.staticflickr.com/4772/39803597245_8cd66ffa39_m.jpg" thumbnail-width="150px" thumbnail-height="300px" >}}

{{< image classes="clear" src="https://farm5.staticflickr.com/4793/40699155071_7bc0e4d4d8_m.jpg" thumbnail-width="150px" thumbnail-height="300px" >}}

{{< image classes="clear" src="https://farm5.staticflickr.com/4787/39803597615_633413a7d5_m.jpg" thumbnail-width="150px" thumbnail-height="300px" >}}

{{< image classes="clear" src="https://farm5.staticflickr.com/4799/40699155171_e5a46b2b6e_m.jpg" thumbnail-width="150px" thumbnail-height="300px" >}}


## 追記

jekyll+minimal-mistakesからHugoに運用を変更したので、
以下のように画像を載せた。

画像はクラウドストレージ(自分はgoogle photo)にアップロードしてurlのシェア

画像を記事に載せる場合の記法。
```
{{< image classes="fancybox right clear" src="image2.png" thumbnail="http://google.fr/images/image125.png" group="group:travel" thumbnail-width="150px" thumbnail-height="300px" title="A beautiful sunrise" >}}
```
<https://github.com/kakawait/hugo-tranquilpeak-theme/blob/master/docs/user.md#image>
これをもとに適切にArgumentを編集。
srcのArgumentに上のクラウドストレージのurlを記入。
`{{< image classes="clear" src="URL" thumbnail-width="150px" thumbnail-height="300px" >}}
`
こんな感じ。
