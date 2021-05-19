# Angular basic course

## Keynote

- Introduction to Angular
- Components
- Routing & Lazy modules
- Standalone Components
- Updating Angular
- Templates
- Custom pipes & directives
- Services
- New control flow
- Forms
- Async
- Signals
- HTTP
- PWA & SSR
- What's next

---

## 1. Introduction to Angular

### Reference

- IDE (Integrated Development Environment) https://code.visualstudio.com/
- Angular CLI (Command Line Interface) https://angular.io/cli
- Typescript https://www.typescriptlang.org/
- Angular components https://angular.io/guide/component-overview
- Fonts and Icons https://fonts.google.com/

### Demo

- Creating new project
- IDE setup
- knowing the structure
- Creating new component
- Google Fonts and Icons

### Hands On

- clone this repository: https://github.com/hittten/angular-material-ecommerce.
  Run `git clone https://github.com/hittten/angular-material-ecommerce.git`
- Install dependencies `npm run clean-packages`
- Move to `./move/to init`
- Start the project `npm start`
- You have to see something like this https://classroom-playground-view.web.app/init
- Create your first component header.
- Try to set up Google fonts and icons

Goal: https://classroom-playground-view.web.app/header

Solution: `./move/to header`

---

## 2. Components

### Reference

- Interpolation https://angular.io/guide/interpolation
- Template expressions https://angular.io/guide/understanding-template-expr-overview#understanding-template-expressions
- Expression Context https://angular.io/guide/understanding-template-expr-overview#expression-context
- NgFor https://angular.io/api/common/NgForOf
- Inputs https://angular.io/guide/inputs-outputs
- Modules https://angular.io/guide/ngmodules
- Angular material https://material.angular.io/
- Material color tools https://m2.material.io/design/color/the-color-system.html#tools-for-picking-colors

### Hands On

- Install Angular material
- Create `productList` component
- Make a product list with this mock https://gist.github.com/hittten/ce366d076fc5d58fa6b1fcad3ba207a2
- Use Input to pass products to the component
- For products descriptions with more than 150 characters, short the text with "..."

Goal: https://classroom-playground-view.web.app/product-list

Solution: `./move/to product-list`

---

## 3. Routing & Lazy modules

### Reference

- Router Reference https://angular.io/guide/router-reference
- Lazy modules https://angular.io/guide/lazy-loading-ngmodules
- Preloading https://angular.io/guide/lazy-loading-ngmodules#preloading

### Hands On

- Create Lazy routes: `/products` and `/shopping-cart`, for `productsPage` & `shoppingCartPage` components
- Update Header menu to navigate to `products` and `shopping-cart`
- Use a new mock for shopping cart Input.
- Refactor product list component to reuse it for shopping cart

Goal: https://classroom-playground-view.web.app/lazy-modules

Solution: `./move/to lazy-modules`

---

## 4. Standalone Components

### Reference

- Standalone components https://angular.io/guide/standalone-components
- Standalone migration https://angular.io/guide/standalone-migration

### Hands On

- Try to migrate the application `ng generate @angular/core:standalone`
- Change Lazy routers for standalone lazy components
- Try to create a new standalone app `ng new myApp --standalone`

Solution: `./move/to standalone`

---

## 5. Updating Angular

### Reference

- Update https://angular.io/guide/update-to-version-16
- How to update guide https://update.angular.io/

### Hands On

- Read all the update guide
- Run `ng update`
- See the output and run all the ng update packages `ng update package1 package2 ...`
- Start the server `npm start`, fix any error
- Create a new app with the new cli `npm i -g @angular/cli` and compare files
- Remove packages and install again `rm -rf node_modules package-lock.json && npm i`
- Start the server `npm start` and you finish

Solution: `./move/to update`

---

## 6. Templates

### Reference

- Property binding https://angular.io/guide/property-binding
- Attribute, class, and style bindings https://angular.io/guide/attribute-binding
- NgClass https://angular.io/api/common/NgClass
- Event binding https://angular.io/guide/event-binding
- Pipes https://angular.io/guide/pipes

### Hands On

- Add an uppercase pipe to product name
- Add the product creation date, before the description and apply a date pipe with 'dd/MM/yy' format
- Add two new icons `view_list` and `view_module`
- Change attributes interpolation for attributes binding
- Use Material button toggle for manage `list` and `grid` views

Goal: https://classroom-playground-view.web.app/gridview-pipes

Solution: `./move/to gridview-pipes`

---

## 7. Custom pipes & directives

### Reference

- Creating pipes for custom data
  transformations https://angular.io/guide/pipes#creating-pipes-for-custom-data-transformations
- Inputs https://angular.io/guide/inputs-outputs
- Building an attribute directive https://angular.io/guide/attribute-directives

### Hands On

- Create a euroCurrency pipe and apply to price
- Create a highlight directive and apply to price

Goal: https://classroom-playground-view.web.app/custom-directive-pipes

Solution: `./move/to custom-directive-pipes`

---

## 8. Services

### Reference

- Dependency injection in Angular https://angular.dev/guide/di/dependency-injection

### Hands On

- Refactor product list component to use a product service.

Solution: `./move/to service`

---

## 9. New control flow

### Reference

- Control Flow https://angular.dev/guide/templates/control-flow

### Hands On

- Try to run `ng g @angular/core:control-flow`
  Solution: `./move/to control-flow`

---

## 10. Forms

### Reference

- Introduction to forms in Angular https://angular.dev/guide/forms
- Reactive forms https://angular.dev/guide/forms/reactive-forms
- Material forms https://material.angular.io/components/form-field/overview

### Hands On

- Create a new component page `productCreatePage` with lazy loading
- Create new function in product service `create` to add new products to mock file
- Create new function in product service `addToShoppingCart` to add products to shopping cart mock file
- Create new function in product service `removeFromShoppingCart` to remove products from shopping cart mock file
- Do refactor in product-list for handle the button clic, to add or remove products

Goal : https://classroom-playground-view.web.app/form-file

Solution: `./move/to forms`

---

## 11. Async

### Reference

- Javascript promises https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises
- RxJS https://rxjs.dev/
- Async Pipe https://angular.dev/api/common/AsyncPipe

### Hands On

- Make an async simulator for mock data with observables

Goal: https://classroom-playground-view.web.app/fake-http

Solution: `./move/to fake-http`

---

## 12. Signals

### Reference

- Signals https://angular.dev/guide/signals
- RxJS Interop https://angular.dev/guide/signals/rxjs-interop

### Hands On

Solution: `./move/to signals`

---

## 13. HTTP

### Reference

- Communicating with backend services using HTTP https://angular.dev/guide/http/setup

### Hands On

- Implement real HTTP services (change ${user} with your name with only letters):
  * API URL: https://us-central1-classroom-playground.cloudfunctions.net
  * products endpoint [GET,POST]: `/products/${user}/`,
  * shoppingCart endpoint [GET,PUT]: `/shoppingCart/${user}/`,
  * shoppingCart endpoint [DELETE]: `/shoppingCart/${user}/${productId}`,

Goal: https://classroom-playground.web.app

Solution: `./move/to http`

---

## 14. PWA & SSR

### Reference

- PWA https://angular.dev/ecosystem/service-workers/getting-started
- SSR https://angular.dev/guide/ssr#enable-server-side-rendering
- Deployment https://angular.dev/tools/cli/deployment

### Hands On

Goal: https://classroom-playground.web.app

Solution: `./move/to main`

---

## 15. What's next

### Reference

- Deferrable Views https://angular.dev/guide/defer
- Image optimization https://angular.dev/guide/image-optimization
- Custom elements https://angular.dev/guide/elements
- Performance optimization https://angular.dev/best-practices/runtime-performance
- Security https://angular.dev/guide/security
- Reinforce knowledge and more with tutorials https://angular.dev/tutorials
- Localizing your app https://angular.dev/guide/i18n
- DevTools https://angular.dev/tools/devtools
