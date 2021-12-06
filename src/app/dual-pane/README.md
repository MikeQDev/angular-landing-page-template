# Dual-Pane

## Fields

`headline`: string

`description`: string

`buttons`: array of `{text,href}` objects

`orientation`: typically `left` or `center`; defaults to `left`

`imageUrl`: URL of image

`imageFirst`: set to `true` if want text content to display before image; defaults to `false`

`imageOverflow`: set to `visible` if want image to overflow out of component (ie: rotated image); defaults to `hidden`

`imageWidth`: CSS value for image width; defaults to `auto`

`imageHeight`: CSS value for image height; defaults to `auto`

`imageTransform`: ; CSS transformation value, ie: `rotate(45deg)`; defaults to `none`

## Sample HTML usage

```
  <div class="section-container">
    <lp-dual-pane
      orientation="center"
      [imageUrl]="dualPaneImageUrl"
      [headline]="'center ' + dualPaneheader"
      [description]="dualPaneDescription"
      imageTransform="rotate(15deg)"
    ></lp-dual-pane>
  </div>
  <div class="section-container">
    <lp-dual-pane
      [imageUrl]="dualPaneImageUrl"
      [imageFirst]="true"
      [headline]="dualPaneheader"
      [description]="dualPaneDescription"
      [buttons]="dualPaneButtons"
    ></lp-dual-pane>
  </div>
```

## Sample TS config

```
  dualPaneheader = 'Dual-pane header';
  dualPaneDescription = 'Lorem Ipsum...';
  dualPaneImageUrl = 'https://images.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
  dualPaneButtons =  [
    { text: 'buttonA', href: 'https://google.com' },
    { text: 'buttonB', href: 'https://google.com' },
  ];
```
