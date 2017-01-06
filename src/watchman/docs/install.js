/**
 * @generated
 * @jsx React.DOM
 */
var React = require("React");
var layout = require("DocsLayout");
module.exports = React.createClass({
  render: function() {
    return layout({metadata: {"id":"install","title":"Installation","layout":"docs","category":"Installation","permalink":"docs/install.html"}}, `
## System Requirements

Watchman is known to compile and pass its test suite on:

 * Linux systems with \`inotify\`
 * OS X (uses FSEvents)
 * BSDish systems (FreeBSD 9.1, OpenBSD 5.2) that have the
   \`kqueue(2)\` facility
 * Illumos and Solaris style systems that have \`port_create(3C)\`

Watchman relies on the operating system facilities for file notification,
which means that you will likely have very poor results using it on any
kind of remote or distributed filesystem.

Watchman does not currently support Windows or any other operating system
not covered by the list above.

## Build/Install

### Installing on OS X via Homebrew

To build the most recent release currently tracked by
[Homebrew](http://brew.sh/):

\`\`\`bash
$ brew update
$ brew install watchman
\`\`\`

To install the latest build from github:

\`\`\`bash
$ brew install --HEAD watchman
\`\`\`

### Installing on OS X via macports

To install the package maintained by [MacPorts](https://www.macports.org):

\`\`\`bash
$ sudo port install watchman
\`\`\`

### Installing from source

You can use these steps below to get watchman built.  You will need \`autoconf\`
and \`automake\`.  You may optionally build watchman with \`pcre\` and \`python\`
support.  See below for some more information on options to configure your
build.

\`\`\`bash
$ git clone https://github.com/facebook/watchman.git
$ cd watchman
$ ./autogen.sh
$ ./configure
$ make
$ sudo make install
\`\`\`

#### Compile Time Configuration Options

Our configure script accepts all the standard options, but there are a couple
that are specific to watchman that might be relevant to your needs:

\`\`\`
--enable-conffile=PATH  Use PATH as the default configuration file name.
                        Default is /etc/watchman.json

--enable-statedir=PATH  Use PATH as the default for state, log files
                        and sockets instead of using your system tempdir

--enable-lenient  Turn off more pedantic levels of warnings
                  and compilation checks

--enable-stack-protector  Enable stack protection in the same
                          way that rpmbuild does on some systems.

--with-buildinfo=TEXT   Include some extra build information that will
                        be reported in the version command output

--with-python        Enable python bindings

--without-pcre       Don't enable pcre support.
--with-pcre=PATH     Enable pcre support.  PATH is location of pcre-config.
                     Default is to enable and look for pcre-config in your
                     $PATH

--with-gimli    Enable support for the gimli process monitor
                https://bitbucket.org/wez/gimli/
\`\`\`

(Run \`./configure --help\` to get the list for the version you checked out)

### Travis CI

We use Travis Continuous Integration to build out every revision and
pull-request to make sure that it we don't accidentally break things.  The
current build status is:

[![Build Status](https://travis-ci.org/facebook/watchman.svg?branch=master)](
https://travis-ci.org/facebook/watchman)

## System Specific Preparation

### Linux inotify Limits

The \`inotify(7)\` subsystem has three important tunings that impact watchman.

 * \`/proc/sys/fs/inotify/max_user_instances\` impacts how many different
   root dirs you can watch.
 * \`/proc/sys/fs/inotify/max_user_watches\` impacts how many dirs you
   can watch across all watched roots.
 * \`/proc/sys/fs/inotify/max_queued_events\` impacts how likely it is that
   your system will experience a notification overflow.

You obviously need to ensure that \`max_user_instances\` and \`max_user_watches\`
are set so that the system is capable of keeping track of your files.

\`max_queued_events\` is important to size correctly; if it is too small, the
kernel will drop events and watchman won't be able to report on them.  Making
this value bigger reduces the risk of this happening.

Watchman has two simple strategies for mitigating an overflow of
\`max_queued_events\`:

 * It uses a dedicated thread to consume kernel events as quickly as possible
 * When the kernel reports an overflow, watchman will assume that all the files
   have been modified and will re-crawl the directory tree as though it had just
   started watching the dir.

This means that if an overflow does occur, you won't miss a legitimate change
notification, but instead will get spurious notifications for files that
haven't actually changed.

`);
  }
});
