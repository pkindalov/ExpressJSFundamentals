const http = require('http')
const port = 3000
const handlers = require('./handlers')

http
    .createServer((req, res) => {
      for (let handler of handlers) {
        if (!handler(req, res)) {
          break
        }
      }

      // res.writeHead(200, {
      //   'Content-type': 'text/plain'
      // })

      // res.write('Hello!')
      // res.end()
    })
    .listen(port)

console.log('works')
