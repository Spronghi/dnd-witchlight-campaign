#!/bin/sh

rm -rf ./temp
mkdir ./temp

mv ./src/content/docs/for-players/* ./temp

rm -rf ./src/content/docs/*
mv ./temp/* ./src/content/docs

MODE=players npx astro build
