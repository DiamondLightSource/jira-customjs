function apply_DLS_custom_css() {
  var boardnumber = /RapidBoard\.jspa\?.*rapidView=([0-9]+)/.exec(window.location.href);
  if (boardnumber) {
    var boardcss = {};

    // Board number 1 is only used in the development environment.
    boardcss[1] = 'https://DiamondLightSource.github.io/jira-customjs/scisoftmx.css';

    // Scisoft MX boards
    boardcss[2007] = boardcss[2026] =
      'https://DiamondLightSource.github.io/jira-customjs/scisoftmx.css';

    if (boardcss[boardnumber[1]]) {
      var boardcsslink = document.createElement('link');
      boardcsslink.rel = 'stylesheet';
      boardcsslink.href = boardcss[boardnumber[1]];
      window.console.log("Applying custom styling from " + boardcsslink.href + " for board number " + boardnumber[1]);
      document.head.appendChild(boardcsslink);
    }

    // Fix bug of the column group headers appearing in wrong location
    // when sidebar is already collapsed on page load.
    window.addEventListener('DOMContentLoaded',  function () {
      // While DOMContentLoaded is strictly too early, there are a number of
      // other timeout events queueing up already, so adding the event here
      // should work correctly. If this causes problems use
      //   window.addEventListener('load', function () {
      // instead.
      window.setTimeout(GH.WorkView.handleResizeEvent, 1);
    }, false);
  }
}
apply_DLS_custom_css();
