# tech_automation


This assignment was completed using Cypress

================================================
Installing Cypress
================================================
Pre-requisites:
1. Have npm and node js installed
Steps
1. Create a project
2. Open the project using your IDE
3. Open a terminal and run the command: npm install cypress --save-dev
4. Configure Cypress by running the command: ./node_modules/.bin/cypress open
5. Optional: you can add commands to either run or open the Cypress debugger by editing the package.json file
As shown below=>
================================================
"scripts": {
    "test": "cypress run",
    "open": "cypress open"
  }

  This will allow you to quickly run Cypress by using commands as

  npm run open : To open the debugger
  npm run test : To run using headless browser

  ================================================
  Understanding the tests
  ================================================
  The tests and the page objects are to be found under cypress folder.
  1. Under the pom, I clean the code by adding objects (utils file) that relate to each unique page
  2. Under the pom, strings folder, I add the long text found on the website by using key:value pairs
  3. I then call these strings from within tests like web.strings.key
  4. Under fixtures we add the files that we read and write into during the tests. We call them using aliases
  5. Under the support folder, we add the global commands that used within the tests
  6. The cypress.config.js file is where the core configurations are added

   ================================================
 Noted Challenge
  ================================================
  The proxy configurations are blocking the runner from running the tests