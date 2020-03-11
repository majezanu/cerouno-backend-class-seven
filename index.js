import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import path from 'path';
dotenv.config();
const env = process.env;
const app = express();

app.use(express.static(path.join(__dirname, 'public'), options));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req,res)=>{
    res.render('home');
});

app.use('/api',Router);

app.use((req,res,nex) => {
    res.status(404);
    res.send('404 - Not Found');
})

app.listen(env.PORT, (req, res) => {
    console.log(`Server running on port: ${env.PORT}`);
    console.log('Press Ctrl + C for stop server');
});