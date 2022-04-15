npm run build &&
git checkout gh-pages &&
rm -rf !dist
mv dist/* ./ &&
rm -rf dist &&
git add . &&
git commit -m "update" &&
git push  &&
git checkout -