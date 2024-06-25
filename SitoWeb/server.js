const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

var iPortaTcp = 4201;
var sIpAddress = "127.0.0.1"

app.listen(iPortaTcp,sIpAddress, () => console.log('API is running on http://' + sIpAddress + ':' + iPortaTcp));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

//ROUTE 1 HOMEPAGE
app.get('', (req, res) => {
    console.log("You asked me for the homepage");
    res.sendFile("index.html", { root: './htdocs' });
    });

//ROUTE 2 SIGNINGUP PAGE
app.get('/signup.html', (req, res) => {
    console.log("You asked me for the signin up page");
    res.sendFile("/signup.html", { root: './htdocs' });
    });

//ROUTE 3 LOGGINGIN PAGE
app.get('/login.html', (req, res) => {
    console.log("You asked me for the loggin in page");
    res.sendFile("/login.html", { root: './htdocs' });
    });

//FORM ROUTE
app.get('/gestisciDatiForm', (req, res) => {
    console.log("You asked me for the 'gestisciDataForm'page");
    res.send("<html><body> Hello " + req.query.username + ", you just signed up with the following email:"+ req.query.email + "</body></html>" );
});