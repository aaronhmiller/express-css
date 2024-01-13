// Imports
const express = require('express')
const app = express()
const port = 3000

// Force error
const FORCE_JWT='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'

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
