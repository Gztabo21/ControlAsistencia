'use strict';
//express
let express = require('express');
let app = express();
//routa
app.get('/',(req,res)=>{
    res.status(200).send('hello World')
})

//excutar
app.listen(8080, ()=>{
    console.log('Escuchando peticiones en el puertos 8080');
});