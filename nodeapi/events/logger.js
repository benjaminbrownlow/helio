const EventEmitter = require('events')

class Logger extends EventEmitter {
    log(message) {
    //Send HTTP request
    console.log(message)

   //Raise Event
    this.emit('messageLogged', { id: 1, url: 'http://'})

}
}


module.exports = Logger
