# Header

## Fields

`orientation`: typically `left` or `center`

`headline`: string

`staticHeadlineSize`: CSS value of headlines `font-size`, to avoid growing/shrinking on desktop devices

`description`: string

`buttons`: array of `{text,href}` objects

`imageUrl`: URL of image to display

`imageHideOnMobile`: boolean to hide image on mobile, so user can get right to the content; defaults to `true`

`imageWidth`: CSS value for image width; defaults to `15vw`

`imageTransform`: CSS transformation value, ie: `rotate(45deg)`; defaults to `none`

`imageAltText`: HTML img alt value

`belowButtonText`: faded text near bottom of component

`submitSettings`: object of `{target, buttonText, buttonClickAlertText, textFieldCssWidth, location}` (target is the URL that will receive form info, location is redirect)

## Sample HTML usage

```
  <div class="section-container">
    <lp-header
      orientation="left"
      [headline]="headerHeadline"
      [description]="headerDescription"
      [buttons]="headerButtons"
      [imageUrl]="dualPaneImageUrl"
      [belowButtonText]="belowButtonText"
      [imageHideOnMobile]="false">
    </lp-header>
  </div>
  <div class="section-container">
    <lp-header
      headline="What are you waiting for?"
      description="Join now before times runs out"
      belowButtonText="No spam - we promise!"
      [submitSettings]="submitSettings"
      staticHeadlineSize="32px">
    </lp-header>
  </div>
```

## Sample TS config

```
  headerHeadline = 'headline';
  headerDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius accumsan
    diam et finibus. Ut bibendum urna ex, quis tempus urna semper ac. Vivamus ac
    mi non nunc eleifend sagittis vel ut dui. Etiam eleifend nunc augue. Nunc
    viverra magna lacus, vel semper ipsum sodales sed. Aliquam non vulputate dui.
    Aenean semper nunc et dolor sollicitudin, eu elementum odio maximus. Vivamus
    pellentesque placerat risus.`;
  imageCss =
    "url('https://images.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png')";
  headerButtons = [
    { text: 'buttonA', href: 'https://google.com' },
    { text: 'buttonB', href: 'https://google.com' },
  ];
  belowButtonText = 'No credit card required.';
  submitSettings = {
    target: 'http://192.168.1.170:8000/signup', // don't forget to rate-limit this server-side to avoid spam!
    buttonText: 'Sign up!',
    buttonClickAlertText: 'Thanks for signing up!',
    textFieldCssWidth: '10',
  };
```

## Notes

When using `orientation="center"` and `imageCss` other than none, the background repeats. This may be useful for displaying background patterns
