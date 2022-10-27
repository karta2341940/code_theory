// Resource Path: https://ithelp.ithome.com.tw/articles/10234399
const path = require('path');
const builder = require('electron-builder');

builder.build({

    projectDir: path.resolve(__dirname),  // 專案路徑 

    win: ['nsis', 'portable'],  // nsis . portable
    config: {
        "appId": "com.karta2341940.electron.huffman",
        "productName": "Huffman Coing", // 應用程式名稱 ( 顯示在應用程式與功能 )
        "directories": {
            "output": "build/win"
        },
        "win": {
            "icon": path.resolve(__dirname, 'icon.ico'),
        },
    },
})
    .then(
        data => console.log(data),
        err => console.error(err)
    );