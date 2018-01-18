function apply_DLS_custom_css() {
  var boardnumber = /RapidBoard\.jspa\?.*rapidView=([0-9]+)/.exec(window.location.href);
  if (boardnumber) {
    boardnumber = parseInt(boardnumber[1]);
    var boardcss = null;
    if ([1,2007,2019,2027].indexOf(boardnumber) >= 0) {
      boardcss = 'https://DiamondLightSource.github.io/jira-customjs/test.css';
    }
    if (boardcss) {
      var boardcsslink = document.createElement('link');
      boardcsslink.rel = 'stylesheet';
      boardcsslink.href = boardcss;
      window.console.log("Applying custom styling from " + boardcss + " for board number " + boardnumber);
      document.head.appendChild(boardcsslink);
    }
  }
}
apply_DLS_custom_css();
