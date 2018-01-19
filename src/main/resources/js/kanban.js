function apply_DLS_custom_css() {
  var boardnumber = /RapidBoard\.jspa\?.*rapidView=([0-9]+)/.exec(window.location.href);
  if (boardnumber) {
    var boardcss = {};

    // board number 1 is only used in the development environment
    boardcss[1] = 'https://DiamondLightSource.github.io/jira-customjs/scisoftmx.css';

    // Scisoft MX boards
    boardcss[1677] = boardcss[2007] = boardcss[2019] = boardcss[2027] =
      'https://DiamondLightSource.github.io/jira-customjs/scisoftmx.css';

    if (boardcss[boardnumber[1]]) {
      var boardcsslink = document.createElement('link');
      boardcsslink.rel = 'stylesheet';
      boardcsslink.href = boardcss[boardnumber[1]];
      window.console.log("Applying custom styling from " + boardcsslink.href + " for board number " + boardnumber[1]);
      document.head.appendChild(boardcsslink);
    }
  }
}
apply_DLS_custom_css();
