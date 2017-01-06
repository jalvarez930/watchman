/**
 * @generated
 * @jsx React.DOM
 */
var React = require("React");
var layout = require("DocsLayout");
module.exports = React.createClass({
  render: function() {
    return layout({metadata: {"id":"cmd.unsubscribe","title":"unsubscribe","layout":"docs","category":"Commands","permalink":"docs/cmd/unsubscribe.html"}}, `
Available starting in version 1.6

Cancels a named subscription against the specified root.  The server side
will no longer generate subscription packets for the specified subscription.

\`\`\`json
["unsubscribe", "/path/to/root", "mysubscriptionname"]
\`\`\`
`);
  }
});
