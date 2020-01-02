# HTML/CSS Day 2

### Position
The position property, or layout sets the position of an element on the screen.

* Properties...
    * relative
        * positioned relative to its normal position on page.
        * Other content will not be adjusted to fit into any gap left by the element.
    * absolute
        * positioned relative to the nearest positioned ancestor
        * If no positioned ancestor, positions relative to body
        * Removed from flow of page, does not affect other elements positioning
    * fixed
        * is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled.
    * sticky
        * newer
        * behaves like position: relative within its parent, until a given offset threshold is met in the viewport
    * static
        * Default position
        * not considered a positioned element
        * positioned according to normal flow of page

### Display
The display property defines the behavior of an element. Can reference the contents inside the container, or the container itself.

* Properties...
    * block
    * inline
    * inline-block
    * flex
    * grid
    * none

* Inline elements (span, a tag, etc.):
    * respect left & right margins and padding, but not top & bottom
    * cannot have a width and height set
    * allow other elements to sit to their left and right.
    * see very important side notes on this here.
* Block elements (div, p tag, etc):
    * respect all of those
    * force a line break after the block element
    * acquires full-width if width not defined
* Inline-block elements (button, select):
    * allow other elements to sit to their left and right
    * respect top & bottom margins and padding
    * respect height and width

### Flexbox
Flexbox is mostly styling that is added to the parents element. It can alter its contents width, height, order, direction, and spacing. It is referred to as ‘direction agnostic’.

* Flex Properties
    * flex-direction
    * flex-wrap
    * justify-content
    * align-items
    * align-content
    * flex (grow, shrink, basis)

* Additional help.
    * Flexbox Help - http://flexbox.help/
    * Flexbox Froggy - https://flexboxfroggy.com/
    * Flexbox Tower Defence - http://www.flexboxdefense.com/
    * Flexbox Zombie - https://mastery.games/p/flexbox-zombies

### Overflow
* Properties...
    * Visible
    * Hidden
    * Scroll
    * Auto