/**
 * @generated
 * @jsx React.DOM
 */
var React = require("React");
var layout = require("DocsLayout");
module.exports = React.createClass({
  render: function() {
    return layout({metadata: {"id":"cmd.watch-del","title":"watch-del","layout":"docs","category":"Commands","permalink":"docs/cmd/watch-del.html"}}, `
Removes a watch and any associated triggers.

From the command line:

\`\`\`bash
$ watchman watch-del /path/to/dir
\`\`\`

JSON:

\`\`\`json
["watch-del", "/path/to/dir"]
\`\`\`

The removed watch and any associated triggers will be removed from the state
file and will not be automatically watched if/when watchman is restarted.

However, if \`--no-save-state\` was used to start the watchman service, the watch
and triggers will be deleted from the running process but no changes will be
made to the state file.  If this same directory is listed in the state file,
the watch will be re-established if/when the service is restarted.
`);
  }
});
