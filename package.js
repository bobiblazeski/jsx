var reactVersion = "0.13.1";

Package.describe({
  name: 'bobiblazeski:jsx',
  version: reactVersion,
  summary: 'Compile React files with extension jsx from JSX syntax is desugared into native JavaScript',
  git: 'https://github.com/bobiblazeski/jsx.git',
  documentation: 'README.md'
});

Npm.depends({
  "react": reactVersion
});

Package.registerBuildPlugin({
  name: "compileJSX",
  use: [],
  sources: [
    "plugin/compile-jsx.js"
  ],
  npmDependencies: {
    "react-tools": reactVersion
  }
});


Package.onUse(function(api) {
  api.use("meteorhacks:inject-initial", "server");

  api.addFiles([
    // On the client, we inject a <script> tag to load the appropriate
    // version of React according to process.env.NODE_ENV.
    "src/inject-react.js",
    // On the server, we use the modules that ship with react.
    "src/require-react.js"
  ], "server");

  // This React variable is defined in src/require-react.js.
  api.export("React", "server");
});