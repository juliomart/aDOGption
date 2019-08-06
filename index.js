const express = require('express');
const server = express();

const visitorRoutes = require('./routes/visitors-routes');
const adminRoutes = require('./routes/admin-routes');

server.use(express.json());

server.use('/api/visitors', visitorRoutes);
server.use('/api/admin', adminRoutes);

//Define port
const port = process.env.PORT || 5000;
//Instruct server to listen
server.listen(port, () => console.log(`\n Runing on port ${port}`));

server.get('/', (req, res) => {
	res.send('TEST');
});
