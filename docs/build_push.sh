bundle exec jekyll build

rm -rf docs
cp -r _site docs

git commit -am "update an article."
git push origin master
