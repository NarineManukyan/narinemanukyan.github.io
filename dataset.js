let db = require('simple-postgres')
let writeFile = require('fs').writeFile

db.rows('SELECT * FROM state_populations_joined_searches LIMIT 100')
  .then(function (rows) {
    return new Promise((resolve, reject) => {
      writeFile('dataset.json', JSON.stringify(rows, null, 2), 'utf8', (err) => {
        if (err) {reject(err)} else {resolve()}
      })
    })
  })
  .then(() => process.exit())
  .catch(err => console.error(err.stack))
