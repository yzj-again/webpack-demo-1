npm run build
git checkout gh-pages
find . ! -name "dist" -exec rm -rf {} \
mv dist/* ./
rm -rf dist
git add .
git commit -m "update"
git push --set-upstream origin gh-pages