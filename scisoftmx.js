function DLS_update_issue_css() {
  $('div.ghx-issue:has(span.ghx-priority[title="Low"])').addClass('minor-issue');
  $('div.ghx-issue:has(span.ghx-priority[title="Minor"])').addClass('minor-issue');
  $('div.ghx-issue:has(span.ghx-priority[title="Lowest"])').addClass('trivial-issue');
  $('div.ghx-issue:has(span.ghx-priority[title="Trivial"])').addClass('trivial-issue');
}

function DLS_tick() {
  window.console.log("TICK!");
  GH.CallbackManager.registerCallback('gh.work.pool.rendered', 'DLS_event', DLS_tock);
}
function DLS_tock() {
  window.console.log("TOCK!");
  DLS_update_issue_css();
  GH.CallbackManager.registerCallback('gh.work.pool.loaded', 'DLS_event', DLS_tick);
}
DLS_tick();

/* Another option:
 *   AJS.$(document).bind('showLayer', function () {
 *    ...
 *   })
 * but that one is triggered twice
 */
