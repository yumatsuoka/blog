---
title: "Github Pages + Jekyll で作るブログ"
tags: [jekyll, web, minimal-mistakes]
categories: [blog, web]
---

## モチベーション
- 自分の専門以外、日常を気軽にかけるブログ作る
- Markdownを使ってかけるブログ作りたい
- 少しでもweb系の勉強してみたい。
- Githubの恩恵をもっと預かりたい。

そんな気持ちから、はてなブログでも良かったが  
無料でブログを開設できる(かっこ良さげなgithub.ioドメインを使える)  
Github pages + Jekyll + minimal mistakes  
でブログを作ってみました。  

この作業をする時点で、webの知識ゼロ、Jekyllは名前すら知らなかった。  


## Github Pagesでwebページを作成してみた

とりあえず下記サイトを参考に  
https://qiita.com/budougumi0617/items/221bb946d1c90d6769e9  

Github PagesのAutomatic Page Generator(自動生成機能)を使って  
テーマはシンプルな、[Minimal](https://orderedlist.com/minimal/)を選びwebページを公開するところまでやってみたが、  
ブログ形式のwebページを作る方法がわからない。  
テーマの公式サイト、レポジトリを見てもわからない(**自分がwebの知識ゼロ**)  
https://orderedlist.com/minimal/  


## JekyllとMinimal Mistakesを使ったwebページの作成

そんな状態でおもむろに  
```
minimal github pages ブログ
```
でググってみたところ、  
以下のサイトを参考にすることでやりたいことができそうなので、  
みながら作業していきました。  

xk11i.biz  
http://k11i.biz/blog/2016/08/11/starting-jekyll-with-Minimal-Mistakes/  

markdownで記事を書けばブログ公開...  
そんな楽な環境を目指していましたが、  
Jekyllを使って手動でデプロイという思わぬコストが発生してしまいました。  
自動化できそうだから、そのうちやる！  

```
# メモ：以下でググって作業
github pages jekyll 自動デプロイ
```

そんなこんなで作業開始。  
詳しくは  
[xk11i.biz](http://k11i.biz/blog/2016/08/11/starting-jekyll-with-Minimal-Mistakes/)
を参照。  

```
# minimal-mistakesを落としてくる。
git clone git@github.com:mmistakes/minimal-mistakes.git

# ディレクトリに移動して、Gemfileをいじる
# Minimal Mistakesのインストールに向けて
vim Gemfile

# ブログの情報やデザインなどいじる
vim _config.yml

# wehページのビルド
bundle exec jekyll clean
bundle exec jekyll build

# 今回はプロジェクトのGithub Pagesを使ったので、
# docsディレクトリにhtmlをコピー。

copy -r _site docs

git add *
git commit -m "Add docs" 
```

ここまででローカルの作業から、リモートリポジトリにhtml等をデプロイ.  
ここからHTMLの公開に向けて、リポジトリの設定を変更。  

1. githubのリポジトリページに行く
1. Settingを開き、"GitHub Pages"の部分でSourceの部分をいじる
1. `master branch /docs folder`を選択
1. 公開されたwebページにアクセス

ここまでで記事は何もないが、
minimal-mistakesのデザインのページを公開できたはず。

## ブログ

ブログの記事の公開に向けての作業。
基本は、Minimal Mistakesの公式をみて理解していった。
Jekyll
markdownで書いた公開したい記事は`_post`ディレクトリに置けば良い。







