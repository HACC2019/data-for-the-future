# Data For The Future

## Requirements

1. [Node.js LTS](https://nodejs.org/en/)
2. Expo enabled mobile device (iOS or Android)

Optional: [yarn](https://yarnpkg.com/lang/en/)

## Installing

For installing the client and server:

```bash
cd client
yarn install # or npm install

cd ../server
yarn install # or npm install
```

For configuring the database:

```bash
npx sequelize-cli db:migrate # initialize database tables
npx sequelize-cli db:seed:all # fill database with sample data
```

## Running

In both the client and server folders, type:

```bash
yarn start # or npm start
```

The client uses Expo. Simply open the link provided, and on a device with the Expo application installed, open the camera and scan the QR code on the bottom left.

# Background Information
## Inspiration
The inspiration for creating the Hawaii Green Growth (HGG) community engagement challenge came from two places. Currently, data for HGG projects is being collected in an archaic manner—through paper surveys. Collecting data through paper is not only extremely inefficient and unsustainable, but is the polar opposite of what HGG strives for. Through this application, we can provide a centralized portal that makes it easy to collect data.

Furthermore, Hawaii contains a plethora of untapped, unpublicized projects throughout the island that encourage sustainability and interaction within our local community. Through this application, we can promote these projects and help them gain more traction and visibility. This, in turn, will encourage a healthier environment for future generations and create a sense of community with others towards building a brighter future.

## What It Does
The application is a centralized information hub that allows users to view and create sustainability projects as well as audit the various ways that these projects are assisting in fostering a more sustainable Hawaii. Each project manager is given the tools to track the impact their project is making in different areas. Providing clear visuals and distinct project indicators, this centralized platform allows users to see the “big picture” and the overall impact that these projects have towards the Hawaii Green Growth Initiative.

## How We Built It
The project is composed of three different components, the front-end, the middleware, and the database.

The front-end consists of React Native in order to build the mobile application. In order to accelerate development time, we used a user interface framework called UI Kitten. For routing, we used React Native Router Flux to enable page switching. Finally, to connect the frontend to the middleware, we used a representational state transfer application programmable interface (RESTful API) using the hypertext transfer protocol (HTTP) client “axios”.

The middleware to interface between the user interface and the database we use is hapi.js for rapid development of RESTful APIs. In tandem with Hapi, we used Sequelize as an object relational mapper (ORM) for its promise-based queries to our MySQL server. The configuration options for the models, migrations and seeders are stored alongside the Hapi configurations.

The back-end consists of a MySQL server database. The database contains all of the data needed by our application—from end-user data to project information. 

## Challenges we ran into
The majority of our team was new to many of the concepts required to build a mobile application. For instance, some understood aspects of the frontend, some knew how to manage databases, some knew a mixture of the two, and some knew minimal amounts of programming. Because of this, it was challenging to combine the pre-existing knowledge towards the development of the application. Naturally, with the limited time-frame of the hackathon and the overlap it has with the team members’ daily schedules, balancing this project with other obligations was difficult.

In terms of technical skills, our members found difficulty in learning their respective components and the implementation of their newfound knowledge. For example, one member, while learning React Native, found it difficult to transition from the regular React Web method-of-thinking, which, in comparison to regular React, had a tremendous number of constraints. Another member found it challenging to integrate associations between models due to the nuance in model relations.

## Accomplishments that we're proud of
Our team is proud to have a near-completed application from scratch. We are proud of the techniques implemented in the application, from RESTful APIs to seeding data, and the functionality it provides to the user. 

## What we learned
Members as a whole learned a variety of topics, including database management using MySQL, creating RESTful APIs in Hapi, configuring a database using Sequelize and implementing user interfaces in React Native.

## What's next for Data for the Future
Moving forward, the application needs to be further developed and refined for distribution. Once the product is complete, we would need to spread awareness of this centralized hub, and encourage people to download the app. We would need to go out into the community and promote the potential interactions the app can provide, from finding local events to visualizing the contributions they are making.
