'use strict';
//express
let express = require('express');
let app = express();
const express_graphl = require('express-graphql');
const {buildSchema} = require('graphql');

const schema = buildSchema(`
	type Query {
		messsage:String
	}
	`);
const root = {
	messsage:()=>'hello World'
}
//routa
//app.get('/',(req,res)=>{
 //   res.status(200).send('hello World')
//})
app.use('/graphql',express_graphl({
	schema:schema,
	root:root,
	graphiql:true
}));
//excutar
app.listen(8080, ()=>{
    console.log('Escuchando peticiones en el puertos 8080');
});