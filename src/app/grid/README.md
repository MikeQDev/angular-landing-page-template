# Grid

## Fields

`orientation`: orientation for text-align css value; defaults to `center`

`baseColumns`: numeric value describing how many columns to display on desktop-width. Decreases by 1 when width shrinks, then to 1 on mobile. Defaults to `4`

`content`: object containing `{contentType, title, items}`; see `Content Object` and `Testimonial Object` sections below

### Content Object

`contentType`: string - `content`

`items`: object containing `{header, description}`

`title`: title above items; not required

### Testimonial Object

`contentType`: string - `testimonial`

`items`: object containing `{name, title, testimonial}`

`title`: title above items; not required

## Sample HTML usage

```
  <lp-grid [content]="gridContent" [baseColumns]="gridContent.items.length"></lp-grid>
  <lp-grid orientation="left" type="testimonial" [content]="testimonialContent"
    [baseColumns]="testimonialContent.items.length"></lp-grid>
```

## Sample TS config

```
  gridContent = {
    contentType: 'content',
    items: [
      {
        header: 'xyz',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula felis nibh, vitae elementum eros bibendum ac. Nam sit amet quam urna. Morbi diam orci, varius eu consequat ut, semper eu urna. Praesent id lacus neque. Sed a porta nisl. Aenean egestas leo lectus, quis tempus urna eleifend et. Vestibulum enim turpis, ultricies ut laoreet quis, placerat eu enim. Curabitur at aliquet mauris.',
      },
      {
        header: 'xyz',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula felis nibh, vitae elementum eros bibendum ac. Nam sit amet quam urna. Morbi diam orci, varius eu consequat ut, semper eu urna. Praesent id lacus neque. Sed a porta nisl. Aenean egestas leo lectus, quis tempus urna eleifend et. Vestibulum enim turpis, ultricies ut laoreet quis, placerat eu enim. Curabitur at aliquet mauris.',
      },
      {
        header: 'xyz',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula felis nibh, vitae elementum eros bibendum ac. Nam sit amet quam urna. Morbi diam orci, varius eu consequat ut, semper eu urna. Praesent id lacus neque. Sed a porta nisl. Aenean egestas leo lectus, quis tempus urna eleifend et. Vestibulum enim turpis, ultricies ut laoreet quis, placerat eu enim. Curabitur at aliquet mauris.',
      },
      {
        header: 'xyz',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula felis nibh, vitae elementum eros bibendum ac. Nam sit amet quam urna. Morbi diam orci, varius eu consequat ut, semper eu urna. Praesent id lacus neque. Sed a porta nisl. Aenean egestas leo lectus, quis tempus urna eleifend et. Vestibulum enim turpis, ultricies ut laoreet quis, placerat eu enim. Curabitur at aliquet mauris.',
      },
    ],
  };
  testimonialContent = {
    contentType: 'testimonial',
    title: 'What people are saying',
    items: [
      {
        name: 'Person A',
        title: "Person's title",
        testimonial: 'Sed a porta nisl. Aenean egestas leo lectus, quis tempus urna eleifend et. Vestibulum enim turpis, ultricies ut laoreet quis, placerat eu enim. Curabitur at aliquet mauris.',
      },
      {
        name: 'Person B',
        title: "Person's title",
        testimonial: 'Sed a porta nisl. Aenean egestas leo lectus, quis tempus urna eleifend et. Vestibulum enim turpis, ultricies ut laoreet quis, placerat eu enim. Curabitur at aliquet mauris.',
      },
      {
        name: 'Person C',
        title: "Person's title",
        testimonial: 'Sed a porta nisl. Aenean egestas leo lectus, quis tempus urna eleifend et. Vestibulum enim turpis, ultricies ut laoreet quis, placerat eu enim. Curabitur at aliquet mauris.',
      },
    ],
  };
```
