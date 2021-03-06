const Joi = require('joi')
const express = require('express')
const app = express()
app.use(express.json())

const wwiphonetics = [
    { id: 1, letter: 'A', name: 'Apples' },
    { id: 2, letter: 'B', name: 'Butter' },
    { id: 3, letter: 'C', name: 'Charlie' }
]
//Validitor using Joi
function validateWwiphonetic(wwiphonetic) {
    const schema ={
        name: Joi.string().min(3).required()
    }
    const result = Joi.validate(wwiphonetic, schema)
}

app.get('/', (req, res) => {
    res.send('Hello World!!!')
})

app.get('/api/wwiphonetics', (req, res) => {
    res.send(wwiphonetics)
})


app.post('/api/wwiphonetics', (req, res) => {
    const { error } = validateWwiphonetic(req.body)
    if (error) {
    res.status(400).send(result.error.details[0].message)
    return
    }
//Handler
    const wwiphonetic ={
        id: wwiphonetics.length + 1,
        letter: req.body.letter,
        name: req.body.name
    }
    wwiphonetics.push(wwiphonetic)
    res.send(wwiphonetic)
})
//404 Not found
app.get('/api/wwiphonetics/:id', (req, res) =>  {
    const wwiphonetic = wwiphonetics.find(c => c.id === parseInt(req.params.id))
    if (!wwiphonetic) res.status(404).send('The phonetic with the given id was not found')
    res.send(wwiphonetic)
})

app.put('/api/wwiphonetics/:id', (req, res) => {
    //Phonetic Lookup and ID Check
    const wwiphonetic = wwiphonetics.find(c => c.id === parseInt(req.params.id))
    if (!wwiphonetic) res.status(404).send('The phonetic with the given id was not found')
    res.send(wwiphonetic)
    //Valitdate
    const { error } = validateWwiphonetic(req.body)
    if (error) {
    res.status(400).send(result.error.details[0].message)
    return
    //Update
    wwiphonetic.name = req.body.name
    res.send(wwiphonetic)
})

//PORT
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Listening on port ${port}...`))

