# Sass Header Example

This repository contains examples for using Sass in a React app.

## Notes

1. Run `npm i node-sass` in the root of the project in order to process the scss files.

2. Create one 'master' scss file (App.scss is a good contender).

3. Partials are files which contain scss snippets. They are good for compiling all your styling together in one place.
    * Create a partial by naming a file in this pattern: `_filename.scss`
    * Import partials into the 'master' scss file like this: `@import 'pathname/filename'`
        * Note: do not use the `.scss` extention or the leading `_` when importing a partial

4. Create variables with `$`.

5. Create mixins with `@mixin name(parameters) {}`

6. Extend styles from other classes with `@extend`.
    * Create placeholder classes with `%`.

7. Nest things, but be careful not to nest too deep as it makes your styling inflexible and is bad practice.

## Other Resources

There is a lot more you can do with Sass - this really is only the tip of the iceberg. Here are some articles you can read to learn more:

* [Sass Basics Guide](https://sass-lang.com/guide)
* [How to Use Sass Mixins](https://scotch.io/tutorials/how-to-use-sass-mixins)
* [Advanced SCSS](https://gist.github.com/jareware/4738651)
* [Official Sass Documentation](https://sass-lang.com/documentation)

