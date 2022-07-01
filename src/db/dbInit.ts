import mongoose from 'mongoose';

function getDbString(dbName: string, hostName: string = 'localhost', portNum: number = 27017) {
    return `mongodb://${hostName}:${portNum}/${dbName}`;
}

function initDb(): mongoose.Connection {
    const connectUri = getDbString('location');
    mongoose.connect(connectUri);
    console.log(`Connecting to '${connectUri}'`)
    return mongoose.connection;
}

export default initDb