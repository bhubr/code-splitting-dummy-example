# Code Splitting Dummy Example

Just wanted to try code splitting in a bare React App, after [reading about it](https://create-react-app.dev/docs/code-splitting).

Here's the history of what I did (stripped-down build logs, find the whole logs in `build-logs`).

## Build 00

Bare app generated by CRA

    File sizes after gzip:

      38.54 KB  build/static/js/2.401e4f4f.chunk.js
      783 B     build/static/js/runtime~main.f5ce18de.js
      619 B     build/static/js/main.f2a77337.chunk.js
      517 B     build/static/css/main.2cce8147.chunk.css

## Build 01

Import `Editor` component which uses `react-ace`. Significantly increases bundle size, as was expected.

The CSS probably amounts to a fair part of it.

    File sizes after gzip:

      219.84 KB (+181.29 KB)  build/static/js/2.11589658.chunk.js
      835 B (+216 B)          build/static/js/main.d9675e27.chunk.js
      783 B                   build/static/js/runtime~main.f5ce18de.js
      507 B (-10 B)           build/static/css/main.929a3ee9.chunk.css

## Build 02

Dynamic import. Compressed bundle size is still up by 140k, and the new 38.95k chunk is most likely the JS-only part of React Ace.

    File sizes after gzip:

      180.68 KB (-39.16 KB)  build/static/js/2.8ebb83df.chunk.js
      38.95 KB               build/static/js/3.d07420a3.chunk.js
      1.19 KB (+431 B)       build/static/js/runtime~main.c6a199b6.js
      874 B (+39 B)          build/static/js/main.0c0dbb24.chunk.js
      507 B                  build/static/css/main.929a3ee9.chunk.css
      468 B                  build/static/js/4.70ec07e9.chunk.js

## Build 03

Comment out brace Java&GitHub mode, decreases bundle size but it's still quite heavy.
Since the editor is still correctly styled, and there's an `import "brace";` in `react-ace`'s [split.tsx](https://github.com/securingsincity/react-ace/blob/master/src/split.tsx), there probably still is a large amount of CSS.

    File sizes after gzip:

      117.15 KB (-63.53 KB)  build/static/js/2.d1807f95.chunk.js
      38.95 KB               build/static/js/3.d07420a3.chunk.js
      1.18 KB (-1 B)         build/static/js/runtime~main.c0de14eb.js
      874 B                  build/static/js/main.b27310b6.chunk.js
      507 B                  build/static/css/main.929a3ee9.chunk.css
      453 B (-15 B)          build/static/js/4.ae3281bb.chunk.js
