# TaskManagement

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


We are designing a tasks application where a engineer and his/her team are coordinating 
with everyone on the team  with tasks. Tasks are of two types 

1. global: defined by team leader and other engineers.
2. personal(not global): defined by the engineer.

In this application we have two pages
 
- Home Page should open on '/home' and '' (redirect '' to '/home')
- Home page one widget should list the tasks which are 'global'
- Home page second widget should list tasks which are personal (not global)
- And a third widget which should have only leader's tasks.
- Tasks page should list out all tasks regardless of global or not
- Tasks needs a way to filter it with personal/leader/other team member
- Tasks needs a way to sort with username
- Tasks in Task page need a way to clear or mark it done (checkbox possibly ?)
- Need a way to add tasks to tasks list. (should not add a empty tasks)
- Whenever a task is marked done or created, reflect it immediately in topbar without refreshing like shown in image(task.png)

Bonus:
- Implement most efficient way in angular and best practices.
- Show notification when done
- Add animations when a task is done/made
- Animation when tasks page is opened and tasks are loaded.
- Sort by date Tasks
- Add animations when opening application
- Good css - scss implementation / BEM methodology
- Show tasks on a seperate calendar page using FullCalendar.

More Info:
- Check task.png
- Use tasks.json as tasks data
- Please do not use NgRx or Redux. Implement with angular / javascript.
- Use Font Awesome for icons.
- If you want to use some components you can use from PrimeNG or anyother library 
- If you want to change/improve the tasks current architecture you can improve it but let us know why you think that would be better.
- If you are adding animations check out Animate.css or implement on your own in Angular
- Zip your project folder without npm_modules or you can upload to your git and send the link.