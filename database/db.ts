
import mongoose from 'mongoose';



/*asdfa 
* 0 = disconnected 
* 1 = connected
* 2 = connecting
* 3 = disconnecting
*/


const mongooseConnection = {
    isConnected: 0
}

export const connect = async () => {

    if (mongooseConnection.isConnected) {
        console.log('ya estamos conectados');
        return;
    }

    if (mongoose.connections.length > 0) {

        if (mongooseConnection.isConnected === 1) {
            console.log('Usando Conexion Anterior');
            return;
        }

        await mongoose.disconnect();
    }

    await mongoose.connect(process.env.MONGO_URL || '');
    mongooseConnection.isConnected = 1;
    console.log('Conectado a Mongo DB');
}


export const disconnect = async () => {

    if (process.env.NODE_ENV === 'development') {
        return;
    }


    if (mongooseConnection.isConnected === 0) {
        return;
    }

    await mongoose.disconnect();
    console.log('Desconectado a Mongo DB');
}