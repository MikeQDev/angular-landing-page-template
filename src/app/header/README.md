# Header

## Fields

`orientation`: typically `left` or `center`

`headline`: string

`description`: string

`buttons`: array of `{text,href}` objects

`imageCss`: image in form of CSS `background-image`, typically `'url(...)'` or `'none'`

`belowButtonText`: faded text near bottom of component

`submitSettings`: object of `{target, buttonText, buttonClickAlertText, textFieldCssWidth}`

## Sample HTML usage

```
  <div class="section-container">
    <lp-header
      orientation="left"
      [headline]="'left ' + headerHeadline"
      [description]="headerDescription"
      [buttons]="headerButtons"
      [imageCss]="imageCss"
      [belowButtonText]="belowButtonText"
    >
    </lp-header>
  </div>
  <div class="section-container">
    <lp-header
      [headline]="'center email ' + headerHeadline"
      [description]="headerDescription"
      belowButtonText="No spam - we promise!"
      [submitSettings]="submitSettings"
    >
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
