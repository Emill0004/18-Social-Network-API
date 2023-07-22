const { connect, connection } = require('mongoose');

// const connectionString = process.env.MONGODB_URI || 'FIGURE THIS OUT'

connect(connectionString);

module.exports = connection;