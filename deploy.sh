npm run build &&
git checkout gh-pages &&
rm -rf *jpg *js *css
mv dist/* ./ &&
rm -rf dist &&
git add . &&
git commit -m "update" &&
git push  &&
git checkout -