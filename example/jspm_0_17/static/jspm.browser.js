SystemJS.config({
  baseURL: "/static",
  paths: {
    "npm:": "jspm_packages/npm/",
    "jspm_0_17/": "js/"
  },
  bundles: {
    "SYSTEMJS/bundles/main.js": [
      "jspm_0_17/main.js",
      "jspm_0_17/myapp/app.js",
      "npm:systemjs-plugin-babel@0.0.13/babel-helpers/classCallCheck.js",
      "npm:systemjs-plugin-babel@0.0.13.json"
    ]
  }
});
