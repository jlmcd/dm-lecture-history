# HTML/CSS 3

## Media Queries

Media queries are a tool to help us create mobile responsive web applications. Here's the syntax:

```css
  @media ( /* some media feature */ ) {
    /* The styles to be applied under the above media feature */
  }
```

Some essential media features include: 

1. `min-width: ____px` - This will apply the styles in the media query for any screens at least this wide.
2. `max-width: ____px` - This will apply the styles in the media query for any screens this wide or smaller.

Note: Media queries should be placed underneath your regular styles. Because CSS cascades downward, placing media queries at the end of the file will ensure they are not inadvertantly overwritten by other styles.

```css
  @media (max-width: 375px) {
    nav {
      display: none;
    }
  }
```

## Animations

### Transition

**Transition** is the simplest form of CSS animation. When an element changes states (i.e. when you hover over it), you can change its styles using pseudo-selectors:

```css
  .link {
    color: #000000;
  }
  .link:hover {
    color: #444444;
  }
```

To animate between these states, we can use the `transition` property:

```css
  .link {
    color: #000000;
    transition: .3s;
  }
  .link:hover {
    color: #444444;
  }
```

This property tells CSS to take .3 seconds to make the change between black (`#000000`) and gray (`#444444`), resulting in a less jarring state change.

### Keyframes

If we want to be more specific with our animations, we can define a set of **keyframes** to use:

```css
@keyframes nameOfAnimation {
  0% {
    /* some styles to be applied at the beginning of the animation. for example: */
    color: blue;
  }
  100% {
    /* some styles to be applied at the end of the animation. for example: */
    color: red;
  }
}
```

Keyframes allow us to have more control over our animations. We don't have to only have 0% and 100%. We can specify what happens at 38% through the timeline of our animation, and every step in between.

To implement an animation, we add it to the element we want to run it on:

```css
.box {
  width: 100px;
  height: 100px;
  animation: nameOfAnimation 1s linear infinite;
}
```
* The `linear` value is not required, but describes the timing function to use (other examples include ease, ease-in, ease-out, or cubic-bezier).
* The `infinite` value is also not required, but describes the number of times to run the animation (i.e. `5` will run the animation 5 times).