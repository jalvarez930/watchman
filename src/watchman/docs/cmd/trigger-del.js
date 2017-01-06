/**
 * @generated
 * @jsx React.DOM
 */
var React = require("React");
var layout = require("DocsLayout");
module.exports = React.createClass({
  render: function() {
    return layout({metadata: {"id":"cmd.trigger-del","title":"trigger-del","layout":"docs","category":"Commands","permalink":"docs/cmd/trigger-del.html"}}, `
Deletes a named trigger from the list of registered triggers.  This disables
and removes the trigger from both the in-memory and the saved state lists.

\`\`\`bash
$ watchman trigger-del /root triggername
\`\`\`
`);
  }
});
