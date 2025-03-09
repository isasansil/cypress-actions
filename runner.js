const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjgxNGI3OTlkLTM2MGMtNDQ0Yy04ODk2LWFiMWFmNWZjNTkwNS0xNzQxNTUxNjY2NTk4IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiN2RjOTBhOGUtNjBhYy00YWYwLTg4NzEtZTFhNGVlNzVkMzI0IiwidHlwZSI6InQifQ.oqQqUThxy7e-huXnSG5adiCmEiB_GPA0WEfIEG4cnBk'

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
