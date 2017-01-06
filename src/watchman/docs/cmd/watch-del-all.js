/**
 * @generated
 * @jsx React.DOM
 */
var React = require("React");
var layout = require("DocsLayout");
module.exports = React.createClass({
  render: function() {
    return layout({metadata: {"id":"cmd.watch-del-all","title":"watch-del-all","layout":"docs","category":"Commands","permalink":"docs/cmd/watch-del-all.html"}}, `
Available since version 3.1.1.

Removes all watches and associated triggers.

From the command line:

\`\`\`bash
$ watchman watch-del-all
\`\`\`

JSON:

\`\`\`json
["watch-del-all"]
\`\`\`

Analogous to the \`watch-del\` this command will remove all watches and
associated triggers from the running process, and the state file (
unless watchman service was started with
[--no-save-state server option](
/watchman/docs/cli-options.html#server-options)).
`);
  }
});
