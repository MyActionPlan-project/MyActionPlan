## My Actionlan REST API

## About

This is the backend REST API for the My Actionplan app. It is built using Express, MongoDB, NodeJs, and provides functionality for creating, updating, and deleting actionplans and their associated steps.

Please note that this repository only contains the backend code. To use the app, you will also need to clone the frontend repository, which can be found here: (https://github.com/MyActionPlan-project/MyActionPlan-client)

## Installation

To install the app on your computer, follow these steps:

1. Clone the repository to your local machine using Git:

```
git clone https://github.com/Ironborn-Ironhack-March-2022/ironborn-project-management-api.git
```

2. Navigate to the project directory:

```
cd ironborn-project-management-api
```

3. Install the required dependencies:

```
npm install
```

4. Create a `.env` file in the root directory of the project with the following environment variables:

```
ORIGIN=https://my-actionplan.netlify.app/
TOKEN_SECRET=y0uRt0k3N$eCr3T
PORT=5005
```

## Running the app

To run the My Actionplan REST API on your computer, follow these steps:

1. Start the app in development mode:

```
npm run dev
```

This will start the app and the MongoDB database in development mode.

2. Alternatively, you can start the app in production mode:

```
npm start
```

This will start the app and the MongoDB database in production mode.

That's it! With these instructions, you should be able to clone the My Actionplan REST API repository, install the required dependencies, and run the app on your computer.
