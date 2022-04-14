import mongoose, { ConnectOptions } from "mongoose";

const URL: string = process.env.MONGO_URI || 'mongodb://localhost/test';

const connetDB = async () => {
    if(mongoose.connections[0].readyState){
        console.log('MongoDB is connected');
        return;
    }
    mongoose.connect(URL!, {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    } as ConnectOptions, (err) => {
        if(err){
            console.error(err);
            process.exit(1);
        }
        console.log('MongoDB is connected');
    });
};

export default connetDB;