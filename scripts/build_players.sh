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

MODE=players npx astro build

git restore .
