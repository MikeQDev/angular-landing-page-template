## DEPRECATED

Check out https://github.com/MikeQDev/landing-page-gen-jekyll/ instead

# Angular Landing Page Template

Quickly generate landing pages based on premade components

[View live demo](https://mikeqdev.github.io/angular-landing-page-template/)

![lighthouse results](lighthouse-results.jpg)

## Quick-start

1. `npm install` to install dependencies
2. Update `src/app/index.html` to set page title and metatags
3. Update `src/app/app.component.{html,ts}` to configure page content
4. Update `src/variables.scss` and `src/variables.ts` to set color scheme and mobile-width
5. Update `src/favicon.ico` to use a custom favicon
6. `ng serve [--host 0.0.0.0]` to view page
7. Deploy `ng build && scp -r dist/landing-page/ x@y.com:`

TODO: explore breaking out components into separate librraries, for easier versioning & updating

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
