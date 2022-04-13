import mongoose from 'mongoose';
import config from 'config';

function connect(){
    mongoose.connect("mongodb://localhost:27017/restaurants");
    console.log("Connected to restowan😊");
}

export default connect;