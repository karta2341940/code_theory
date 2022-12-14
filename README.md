<style>
    body{
        margin:0px;
    }
</style>
# HuffmanCode

- [HuffmanCode](#huffmancode)
  - [Introduction](#introduction)
  - [Feature](#feature)
  - [Environment](#environment)
  - [How to use](#how-to-use)
  - [How to compile](#how-to-compile)
  - [Reference](#reference)
    - [Framework](#framework)
    - [package](#package)

## Introduction 

本程式使用JaveScript與HTML完成，並且採用Chrome為載體執行所有的程式邏輯與UI呈現。
主程式的部分實質上為一個網頁，經過後期用[Webpack](https://webpack.js.org/) 做bundle、obfuscate、minify後再由[Electron](https://electronjs.org)將網頁包進去使其成為一個獨立的執行檔。其中Electron負責把網頁與chrome結合，並可透過Electron與系統溝通，使網頁有更多可能性。

本程式的UI採用[Vue.js](https://vuejs.org/)及[Bootstrap](https://getbootstrap.com/)為框架去構建，其中Vue.js在這當中扮演著與HTML DOM溝通的橋梁，使JavaScript與HTML的DOM可以更方便的溝通。並且能快速的繪製大部分重複性的場景，而Bootstrap在這當中擔任美化的作用。

## Feature
* 計算Huffman Code
* 計算Entropy 與 Average Length
* 可設定radix

## Environment
This program can support Windows 10 21H2 or newer also it doesn't support the other OS

## How to use

Click "Huffman Coing 1.0.0.exe" and fill in the symbols and probabilities then click 'Execute' the result will show in the row of "Huffman code"


## How to compile

First of all you must to install [Node.js](https://nodejs.org/en/) on your computer also open the terminal and go to the folder of "code_theory" and execute the following cammand : 
```
npm install && npm run build
```
The web files will in the folder *dist* and the executable file will at the following path : *build/win/Huffman Coding 1.0.0.exe*

## Reference

### Framework
* [Vue.js](https://vuejs.org/)
* [Bootstrap](https://getbootstrap.com/)
### package 
* [Webpack](https://webpack.js.org/)
* [Electron](https://electronjs.org)
* [electron-build](https://www.electron.build/)