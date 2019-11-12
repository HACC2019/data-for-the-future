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
