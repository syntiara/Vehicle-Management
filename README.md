# Vehicle Management System

Vehicle management application is built to automate the registration and stock count of vehicles
-----

## Technologies Used

- Angular
- .NetCore
- SQL
- Entityframework Core
- AuthO

## How To Install And Run The Application

### Prerequisites

The following should be installed in your machine:

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download)

### Instructions

- Clone this Repo with `$ git clone https://github.com/syntiara/Vehicle-Management`
- Change into the directory of the angular project `vehicle-management/clientapp`
- Use `$ npm install` to install all the dependencies of the project.
- Create an angular environment folder with prod and developemnt file in project root and define variables from /VEEGA_APP/ClientApp/src/environments
- Use `$ npm start` to start the application.
- open up chrome browser and  navigate to `localhost:4200` to view the application

## Database Setup

### Prerequisite

- [Install SQL Database](http://www.sqlservertutorial.net/install-sql-server/)

###Instructions
- Create a `Database`
- Create the `tables` as the name appears in the `vehicle-management/core/entities`

### .NetCore Setup

- create an `appsettings.Development.json` file and define variables from `appsettings.sample.json`

### Auth0 Setup

- Configure [AuthO](https://auth0.com/) to work with application
- Register with Auth0 to integrate authorization and authentication. You can create a free account.

- Read the [docs](https://auth0.com/docs/quickstart/spa/angular2) for setting it up 
