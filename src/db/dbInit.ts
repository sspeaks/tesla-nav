import mongoose from 'mongoose';

function getDbString(dbName: string, hostName: string = 'localhost', portNum: number = 27017) {
    return `mongodb://${hostName}:${portNum}/${dbName}`;
}

async function initDb(): Promise<mongoose.Connection> {
    const connectUri = getDbString('location');
    console.log(`Connecting to '${connectUri}'`)
    await mongoose.connect(connectUri);
    return mongoose.connection;
}

export default initDb