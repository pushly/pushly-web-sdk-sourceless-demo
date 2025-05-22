# Pushly Web SDK Sourceless IFrame Example

This is a simple example project demonstrating how to integrate the Pushly Web SDK into a web application using a sourceless iframe. The project serves a single page with the Pushly Web SDK integration and provides the necessary service worker file.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm or yarn

## Installation

1. Clone this repository:
   ```
   git clone https://github.com/pushly/pushly-web-sdk-sourceless-demo.git
   cd pushly-web-sdk-sourceless-demo
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```

## Building the Project

Compile the TypeScript code to JavaScript:

```
npm run build
# or
yarn build
```

## Running the Server

You must specify your Pushly SDK Key by setting the SDK_KEY environment variable, and then you can start the server:

```
SDK_KEY=REPLACE_WITH_SDK_KEY npm start
# or
SDK_KEY=REPLACE_WITH_SDK_KEY yarn start
```

The server will start on port 3000 by default. You can access the demo at:

```
http://localhost:3000
```

You can also specify a different port by setting the PORT environment variable:

```
PORT=8080 npm start
# or
PORT=8080 yarn start
```

## Project Structure

- `src/index.ts` - Main server code example
- `public/assets/pushly/pushly-sdk-worker.js` - Pushly service worker file
