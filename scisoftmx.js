function DLS_update_issue_css() {
  $('div.ghx-issue:has(span.ghx-priority[title="Low"])').addClass('minor-issue');
  $('div.ghx-issue:has(span.ghx-priority[title="Minor"])').addClass('minor-issue');
  $('div.ghx-issue:has(span.ghx-priority[title="Lowest"])').addClass('trivial-issue');
  $('div.ghx-issue:has(span.ghx-priority[title="Trivial"])').addClass('trivial-issue');
}
window.addEventListener('load', DLS_update_issue_css);
