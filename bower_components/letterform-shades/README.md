# Letterform Shades

A little Sass library to work with the fantastic shadowing examples from [Typekit Practice](http://practice.typekit.com/lesson/using-shades/)

## Installation

Install either from Bower or RubyGems

```
bower install letterform-shades --save-dev
```

or 

```ruby
# Gemfile
gem 'letterform-shades', '~>0.1'
```

## Usage

Import into your stylesheet:

```scss
@import "letterform-shades";
```

## Mixins

**[Close Shade](http://practice.typekit.com/lesson/using-shades/#toc_2)**

```scss
//////////////////////////////
// - $vertical: The color for the vertical shade (consider a lowercase `r`)
// - $horizontal: The color for the horizontal shade (consider the lowercase `r`)
// - $from: Direction shadow comes from. Options are `top right`, `top left`, `bottom right`, `bottom left`
// - $distance: The distance you want the shadow to extend. Must be a positive integer
// - $size: The size you want each slice.
//////////////////////////////
@include close-shade($vertical, $horizontal, $from: 'top right', $distance: 10, $size: 0.005em){}
```

**[Offset Shade](http://practice.typekit.com/lesson/using-shades/#toc_3)**

```scss
//////////////////////////////
// - $background: The color of the background the text is on
// - $shade: The color of the shadow
// - $from: Direction shadow comes from. Options are `top right`, `top left`, `bottom right`, `bottom left`
// - $offset: The distance you want the shade to be offset
// - $size: The size you want the shade to be.
//////////////////////////////
@include offset-shade($background, $shade, $from: 'top right', $offset: .010em, $size: .030em) {}
```

**[Printer's Shade](http://practice.typekit.com/lesson/using-shades/#toc_5)**

```scss
//////////////////////////////
// - $shade: The color for the shade
// - $from: Direction shadow comes from. Options are `top right`, `top left`, `bottom right`, `bottom left`
// - $distance: The distance you want the shadow to extend. Must be a positive integer
// - $size: The size you want each slice.
//////////////////////////////
@include printers-shade($shade, $from: 'top right', $distance: 10, $size: 0.005em) {}
```

**[Split Shade](http://practice.typekit.com/lesson/using-shades/#toc_6)**

```scss
//////////////////////////////
// Sandwich Split Shade
// - $cookie: The color for the "cookie"
// - $flavor: The color for the "ice cream"
// - $from: Direction shadow comes from. Options are `top right`, `top left`, `bottom right`, `bottom left`
// - $cookie-distance: The distance you want the cookie to extend. Must be a positive integer
// - $flavor-distance: The distance you want the flavor to extend. Must be a positive integer
// - $size: The size you want each slice.
//////////////////////////////
@include sandwich-shade($cookie, $flavor, $from: 'top right', $cookie-distance: 12, $flavor-distance: 29, $size: .005em) {}
```

```scss
//////////////////////////////
// Reversing Split Shade
// - $depth: The color for the depth shade
// - $shadow: The color for the shadow
// - $from: Direction shadow comes from. Options are `top right`, `top left`, `bottom right`, `bottom left`
// - $depth-distance: The distance you want the depth to extend. Must be a positive integer
// - $shadow-distance: The distance you want the shadow to extend. Must be a positive integer
// - $size: The size you want each slice.
//////////////////////////////
@include reverse-shade($depth, $shadow, $from: 'top right', $depth-distance: 25, $shadow-distance: 40, $size: .005em) {}
```

## License

(c) Sam Richard, 2014

[MIT](https://github.com/Snugug/letterform-shades/blob/master/LICENSE.txt)