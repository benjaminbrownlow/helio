const express = require('express')
const app = express()
app.use(express.json())

const wwiphonetics = [
    { id: 1, letter: 'A', name: 'Apples' },
    { id: 2, letter: 'B', name: 'Butter' },
    { id: 3, letter: 'C', name: 'Charlie' }
]

app.get('/', (req, res) => {
    res.send('Hello World!!!')
})

app.get('/api/wwiphonetics', (req, res) => {
    res.send(wwiphonetics)
})

app.post('/api/wwiphonetics', (req, res) => {
    if (!req.body.name || req.body.name.length < 3) {
    //400 Bad Request
    res.status(400).send('Name is required and should be a minimum of 3 charaters')
    return
    }


    const wwiphonetic ={
        id: wwiphonetics.length + 1,
        letter: req.body.letter,
        name: req.body.name
    }
    wwiphonetics.push(wwiphonetic)
    res.send(wwiphonetic)
})



app.get('/api/wwiphonetics/:id', (req, res) =>  {
    const wwiphonetic = wwiphonetics.find(c => c.id === parseInt(req.params.id))
    if (!wwiphonetic) res.status(404).send('The phonetic with the given id was not found')
    res.send(wwiphonetic)
})

//PORT
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Listening on port ${port}...`))

