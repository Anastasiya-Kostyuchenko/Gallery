# Gallery — Gallery Module

**Gallery** is a simple yet powerful gallery module written in vanilla HTML, CSS, and JavaScript.
It allows developers to easily embed an image slider into any webpage using only an array of image URLs.
Features include autoplay with adjustable intervals, navigation arrows and dots, infinite or finite scrolling, and a customizable onChange event for handling slide changes.

## Tech Stack

- HTML
- CSS
- JavaScript (Vanilla)

## 🚀 Features

- Automatic image switching with a timer
- Previous/Next arrows (optional)
- Navigation dots (optional)
- Infinite or finite scrolling
- Click on image to go to the next slide (optional)
- `onChange` event that triggers whenever the active slide changes

## 🔧 Usage

1. Include the module on your page:

   ```html
   <script src="galilei.js"></script>
   <link rel="stylesheet" href="galilei.css" />
   ```

2. Create a container in HTML:
```
<div id="gallery"></div>
```

3. Initialize the gallery in JS:

```<script>
  const gallery = new Galilei({
    container: "#gallery",
    images: [
      "https://picsum.photos/400/200?random=1",
      "https://picsum.photos/400/200?random=2",
      "https://picsum.photos/400/200?random=3"
    ],
    autoPlay: true,         // enable autoplay
    interval: 3000,         // time between slides in ms
    arrows: true,           // show arrows
    dots: true,             // show navigation dots
    infinite: true,         // enable infinite loop
    clickNext: false,       // click on image = next slide
    onChange: (index) => {  // event on slide change
      console.log("Current index:", index);
    }
  });
</script>
```

## Options

| Option      | Type     | Default  | Description                                         |
| ----------- | -------- | -------- | --------------------------------------------------- |
| `container` | string   | required | CSS selector for the gallery container              |
| `images`    | array    | required | List of image URLs                                  |
| `autoPlay`  | boolean  | `false`  | Enable/disable autoplay                             |
| `interval`  | number   | `3000`   | Interval in ms for autoplay                         |
| `arrows`    | boolean  | `true`   | Show navigation arrows                              |
| `dots`      | boolean  | `true`   | Show navigation dots                                |
| `infinite`  | boolean  | `true`   | Enable infinite loop                                |
| `clickNext` | boolean  | `false`  | Click on image goes to next slide                   |
| `onChange`  | function | `null`   | Callback triggered on slide change (receives index) |
