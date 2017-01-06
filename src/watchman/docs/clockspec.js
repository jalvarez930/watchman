/**
 * @generated
 * @jsx React.DOM
 */
var React = require("React");
var layout = require("DocsLayout");
module.exports = React.createClass({
  render: function() {
    return layout({metadata: {"id":"clockspec","title":"Clockspec","layout":"docs","category":"Queries","permalink":"docs/clockspec.html"}}, `
For commands that query based on time, watchman offers a couple of different
ways to measure time.

 * number of seconds since the unix epoch (unix \`time_t\` style)
 * **recommended for most users**: a named cursor of the form \`n:whatever\`
 * **recommended for advanced users**: a clock id of the form \`c:123:234\`

The first and most obvious is passing a unix timestamp.  Watchman records
the observed time that files change and allows you to find files that have
changed since that time.  Using a timestamp is prone to race conditions
in understanding the complete state of the file tree.

Using an abstract clock id insulates the client from these race conditions by
ticking as changes are detected rather than as time moves.  Watchman returns
the current clock id when it delivers match results; you can use that value as
the clockspec in your next time relative query to get a race free assessment of
changed files.

As a convenience, watchman can maintain the last observed clock for a client by
associating it with a client defined cursor name.  For example, you could
enumerate all the "C" source files on your first invocation of:

\`\`\`bash
watchman since /path/to/src n:c_srcs '*.c'
\`\`\`

and when you run it a second time, it will show you only the "C" source files
that changed since the last time that someone queried using "n:c_srcs" as the
clock spec. However, it's not possible to "roll back" a named cursor, so
advanced users desiring such functionality should use clock ids instead.
`);
  }
});
