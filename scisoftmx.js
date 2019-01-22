function DLS_update_issue_css() {
  $('div.ghx-issue:has(span.ghx-priority[title="High"])').addClass('major-issue');
  $('div.ghx-issue:has(span.ghx-priority[title="Major"])').addClass('major-issue');
  $('div.ghx-issue:has(span.ghx-priority[title="Highest"])').addClass('critical-issue');
  $('div.ghx-issue:has(span.ghx-priority[title="Critical"])').addClass('critical-issue');
  $('div.ghx-issue:has(span.ghx-priority[title="Low"])').addClass('minor-issue');
  $('div.ghx-issue:has(span.ghx-priority[title="Minor"])').addClass('minor-issue');
  $('div.ghx-issue:has(span.ghx-priority[title="Lowest"])').addClass('trivial-issue');
  $('div.ghx-issue:has(span.ghx-priority[title="Trivial"])').addClass('trivial-issue');
}

function DLS_tick() {
  GH.CallbackManager.registerCallback('gh.work.pool.rendered', 'DLS_event', DLS_tock);
}
function DLS_tock() {
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
