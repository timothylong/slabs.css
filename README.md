# slabs.css

An automated, object-oriented SCSS framework for small and medium-sized applications.

### Prerequisites

In order to use slabs.css you will need [Node.js](https://nodejs.org), [npm](https://www.npmjs.com), and [gulp.js](https://gulpjs.com) installed globally on your system.

### Environment Setup

1. Change directory to root folder:
```
cd  [project folder]
```

2. Install modules and dependencies:
```
npm install
```

3. Run gulp:   
```
gulp
```

### CSS File Structure

- `/1-settings`: Preprocessors, fonts, variables
- `/2-tools`: Mixins, functions
- `/3-generic`: Resets or normalizing files
- `/4-elements`: Bare HTML elements (H1, a, p, etc…)
- `/5-components`: Majority of code goes here to style specific UI components
- `/6-utilities`: Utilities and helper classes that have the most authority

The starter `main.scss`:

```scss
/* 1: Settings */
@import "partials/1-settings/settings.variables";

/* 2: Tools */
@import "partials/2-tools/tools.mixins";

/* 3: Generic */
@import "partials/3-generic/generic.reset";

/* 4: Elements */
@import "partials/4-elements/elements.page";
@import "partials/4-elements/elements.headings";
@import "partials/4-elements/elements.images";

/* 5: Components */
@import "partials/5-components/components.layout";
@import "partials/5-components/components.buttons";

/* 6: Utilities */
@import "partials/6-utilities/utilities";
```

### Built With

* [Node.js](https://nodejs.org)
* [Sass](https://sass-lang.com)
* [gulp.js](https://gulpjs.com)
* [bijou.css](https://github.com/timothylong/bijou.css)
