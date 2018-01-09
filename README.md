# ttt_form

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This is nothing but a page with an input box. Backend source: [ttt_back](https://github.com/sbmthakur/ttt_back).

## Getting Started

### Prerequisites

Your system must have `Node.js` installed. As `ttt_form` heavily uses `ES6` features, it may not work with older versions of `node`. To run this thing on your local system, ensure that you have the backend ready for your system.

### Installing

#### Setup

```
git clone git@github.com:sbmthakur/ttt_form.git
```
Switch to HTTPS URL if necessary. 
First install `react-scripts`:
```
npm install -g react-scripts
```

Now run the following command:

```
cd ttt_form && npm install
```
This will install dependencies. Now, start the server by running following command:
```
PORT=3000 && npm start
```

#### Testing  

Open up your browser and put the following URL:
```
http://localhost:3000
```
And then, input a number.
#### Libraries Used:

* react - For basic components
* react-router - For handling routes
* prop-types - For type checking of `props`
* react-table - For providing the table in result page
* eslint-plugin-react - For linting code

#### Screenshots

![Input = 4](/screenshots/Input_4.png "Input = 4")

Please report any issues that you may encounter. Suggestions are welcome.

