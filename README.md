# Appointments

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.0-rc.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

##Angular - Sturcture
Screens
	Dashboard
		- List Appointments of user 
		- Create Appointment
			opens a popup prompting following details
			
			To (DL: suggetion service ) 
			Subject - 
			Start (default selected as current date and time) - 
			End (default selected as current date and time + 30 min) - 
			Message
			
		
##Web Api - Sturcture
Appointments.Api
	Controllers
		Login - 
		Appointment - CRUD 

Appointments.BL
	business logic
	
Appointments.Model
	data model
	
Appointments.DAL
	data access layer with entity framework

Appointments.Api.Test
	add api test cases
		
