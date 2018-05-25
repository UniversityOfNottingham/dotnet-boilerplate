# .NET Boilerplate

> Re-usable code and templates for .NET Core development

# Frontend

In here is everything you need for a .NET Core project that has a web frontend (e.g. MVC).

The files in here will enable you to:

* Manage dependencies using npm
* Use Gulp for building frontend assets
  * Comes with defaults ready to use for SASS, ES2015+
  * Gulp dependencies already included
* Use JQuery, Bootstrap, FontAwesome
  * Comes with the UoN Bootstrap theme by default
  * Dependencies already included
* Tooling to help adhere to JS and CSS standards
  * ESLint config and gulp tasks
  * SASSLint config and gulp tasks
  * EditorConfig and Prettier to ensure style for `.js` and `.scss` files
  * Note that VS (at the time of writing) doesn't work brilliantly with the linters, so you may find an alternative editor such as VS Code useful for frontend file work

You can (should!) copy the contents of this folder wholesale to the root of your Web Project's folder and it will Just Work™.

## Notes

* You must have a modern version of Node installed (the important thing is to have npm > 5)
  * Version check node and npm as follows:
    * `node -v`
    * `npm -v`
* You may want to be able to run `gulp` globally, so make sure you have `gulp-cli` installed globally
  * You can install it as follows: `npm i -g gulp-cli`
* Because this is a boilerplate, it doesn't keep a `package-lock.json`.
  * Your project will lock versions when you first `npm install`.
  * This means that this repo does not resolve any package dependency vulnerabilities. It is **your responsibility** to run `npm audit` in the context of **your own project** and **resolve vulnerabilities**.
