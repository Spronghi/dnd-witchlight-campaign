#!/bin/sh

is_clean=$(git update-index --refresh)

if [ ! -z "$is_clean" ]; then
  echo "git workspace is not clean"
  exit 1
fi

rm -rf ./temp
mkdir ./temp

mv ./src/content/docs/for-players/* ./temp

rm -rf ./src/content/docs/*
mv ./temp/* ./src/content/docs

markdown_paths=$(find . -type f -path "./src/**/*" -name "*.md" -not -path "./node_modules/*")

for markdown_path in $markdown_paths; do
  sed -e s=/for-players==g -i '' $markdown_path
done

MODE=players npx astro build

git restore .
