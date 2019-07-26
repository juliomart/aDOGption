const express = require('express');
const server = express();

server.use(express.json());

//Define port
const port = process.env.PORT || 5000;
//Instruct server to listen
server.listen(port, () => console.log(`\n Runing on port ${port}`));

server.get('/', (req, res) => {
	res.send('TEST');
});
