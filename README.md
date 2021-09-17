# Loan Administrator 

## Do you want to check it?

See [here](https://loan-administrator.netlify.app/).

## Description

Simple React JS project for a Loan Administrator. It is an introduction to use components, props and states.

## Installation

Inside you project folder (i.e: /react-app)
    
    cd react-app
    
    git clone git@github.com:sebastiansperandio/loan-admin-react.git .

Install dependencies:

    npm install

Run the project in local server

    npm start

### Notes

If you want to deploy it into a server you could use:

    npm run build

It will create a folder called /build in your repository and It is only folder you need to move to your server.

### Logic changes

You could find the functions to calculate loans prices in /src/helpers.js file.

**Default calculations:**

    Amount <= 1000 --> %25
    Amount > 1000 and <= 5000 --> %20
    Amount > 5000 and <= 10000 --> %15
    Amount > 10000 --> %10

    Period = 3 months  --> %5
    Period = 6 months  --> %10
    Period = 12 months --> %15
    Period = 24 months --> %20

