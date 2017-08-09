# CotcotIdle

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.6.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4321/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.


# Deploy on github

- Push the project to github:
  `git remote add origin https://github.com/USERNAME/PROJECT_NAME.git`
  `git push origin master`
- Install angular-cli-ghpages: `npm i -g angular-cli-ghpages`
- Insert in package.json ->script-> `"deploy": "ng build -sm -ec -bh /cotcot-idle/ & ngh"`
