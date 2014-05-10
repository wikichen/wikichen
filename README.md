What's Under the Hood
=====================

Welcome to the backstage of my humble theatre on the web. *Mise en Place*.

The purpose of this documentation is twofold:

1. To serve as a reference for my own design and development efforts in the future.
1. To educate and inform those who wish to understand how I've built and maintained the site.

## Workflow

The site is powered by Jekyll.

[write more]

### Build Process

The site uses Gulp to compile, develop, and deploy what is ultimately a performant collection of static files that is then gzipped and uploaded to an Amazon S3 bucket.

The default `gulp` task cleans the build directory, runs jekyll's `build` command, compiles the SASS into minified, autoprefixed CSS, starts a local LiveReload server, watches for any changes and reloads accordingly after a new build.

To learn more about my setup, see `gulpfile.js`.

### Deployment

The site is hosted on an Amazon S3 bucket and served with CloudFront. The `s3_website` gem makes it dead simple to configure and deploy the compiled site build to your S3 bucket.

[write more]

## Style Guide

Writing clean, maintainable code is important to me. Below are some of the standards to which I adhere to ensure code quality. Adapted from [mdo's code guide](https://github.com/mdo/code-guide), here are some pertinent personal highlights:

### HTML
* Don't include a trailing slash in self-closing HTML elements.
* Attribute order: `class`, `id`, `name`, `data-*`, `src`, `for`, `type`, `href`, `title`, `alt`, `aria-*`, `role`.
* Strive to maintain HTML standards and semantics, but not at the expense of practicality.
* Whenever possible, avoid superfluous parent elements when writing HTML.

### CSS
* Lowercase all hex values and use shorthand hex values whenever possible.
* Declaration order: positioning, box model, typographic, visual.
* Place media queries as close to their relevant rule sets whenever possible.
* In instances where a rule set includes only one declaration, remove line breaks for readability and faster editing.
* Limit use of shorthand declarations to instances where you must explicitly set all the available values.
* Use structural or purposeful class names over presentational.
* Use `.js-*` classes to denote behavior (as opposed to style), but keep these classes out of your CSS.
* Use classes over generic element tag for optimum rendering performance.
* Scope classes to the closest parent only when necessary.

### SASS
* Avoid unnecessary nesting. Just because you can nest, doesn't mean you always should.
* I swear by the [BEM methodology](http://bem.info/method/) (Block, Element, Modifier) for naming classes. You can see it in practice in the SASS source files. [This CSS Wizardry tutorial](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) is a great starting point for beginners.

## Services

A big hearty shoutout to the services that power the site.

* [IWantMyName](https://iwantmyname.com/) for domain management
* [Route 53](http://aws.amazon.com/route53/) for DNS
* [Amazon S3](http://aws.amazon.com/s3/) for hosting
* [CloudFront](http://aws.amazon.com/cloudfront/) for distribution
* [Hoefler & Co.](http://www.typography.com/) for serving beautiful screen-optimized webfonts
* [Adobe Typekit](https://typekit.com/) for even more webfont options

---

Questions or comments? Feel free to [reach out to me on Twitter](https://twitter.com/wikichen) or submit an issue. Cheers!
