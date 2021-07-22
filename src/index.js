const server = require('./server');

PORT = process.env.PORT || 4000;
DB = process.env.DB_URI;
HOSTE = process.env.HOST;

server.listen(PORT, () => {
    console.log('Server in port: ' + PORT);
    console.log('DBURL: '+DB );
    console.log("Host: " +HOSTE)
});