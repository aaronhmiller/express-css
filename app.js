// Imports
const express = require('express')
const app = express()
const port = 3000

FOO!!!

// Static Files
app.use(express.static('public'));

// Example for other directories
// app.use('/css', express.static(__dirname + 'public/css'))

// Set Views
app.set('views', './views');
app.set('view engine', 'ejs');

// Navigation
app.get('', (req, res) => {
    res.render('index', { text: 'Hey' })
})

app.get('/about', (req, res) => {
    res.render('about', { text: 'About Page'})
})

// Listen on Port 3000
app.listen(port, () => console.info(`App listening on port ${port}`))
