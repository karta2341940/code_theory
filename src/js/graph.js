var num = 0;
mermaid.initialize({ startOnLoad: false, theme: 'neutral'});
window.$docsify = {
  name: '文件名稱',
  markdown: {
    renderer: {
      code: function (code, lang) {
        if (lang === "mermaid") {
          return (
            '<div class="mermaid">' + mermaid.render('mermaid-svg-' + num++, code) + "</div>"
          );
        }
        return this.origin.code.apply(this, arguments);
      }
    }
  }
}