# Visual Responsive Testing Study using Galen

This repo could be used to understand how the Galen Framework works at a glance but the right way to use it with a TDD methodology in mind can be found on the article I wrote on the [David Walsh's blog](http://davidwalsh.name/automated-tests-visual-responsive-layouts).

This repo contains two simple HTML templates with the same layout (pages/html/). It's responsive ready. The first layout is intentionally broken and the second layout works has expected. The goal is to run automated tests on those pages and have a final report. All documentation about Galen can be found on http://galenframework.com

## Testing environnement setup
First, make sure you have [Node.js], [Grunt] and [Galen] 1.6+ installed globally.

Download the .zip file from GitHub and extract it. Then install all node dependencies using:
```sh
npm install
```
Then start a server with:
```sh
grunt server
```
> A URL is needed by Galen for testing pages. I use a server created with Grunt for my personal facilities but you can host them where you want and update the "test-example.test" file. (galen-tests/tests)

### Running Tests
All reports are generated in galen-tests/reports after running tests. Galen generates a lot of stuff but just open the "report.html" file to access to the final report result.

#### First Test: page-fail.html
Open a new tab and run the following command to run tests on "page-fail.html":
```sh
grunt galen-fail
```

#### Second Test: page-success.html
Run the following command to run tests on "page-success.html":
```sh
grunt galen-success
```

[Node.js]: https://nodejs.org/
[Grunt]: http://gruntjs.com/getting-started
[Galen]: http://galenframework.com/docs/getting-started-install-galen/