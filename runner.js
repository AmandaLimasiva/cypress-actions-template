const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjllYjk2OGRiLWFkODEtNDVkNS1iYjU5LWE0YmQ4ZTQwNGMwMy0xNjgyMTIwMzU0MjM3IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiOWQ4YTg4N2EtYTlmNC00YWRmLTgyNTItMzFmYjNjNWVkNGNlIiwidHlwZSI6InQifQ.gvHuZ69w-aYXu2CBK7GLxxNn2Drn2wsVRfX4KYmGURM'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
