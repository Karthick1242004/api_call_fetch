const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://karthick1242004:karthick124@karthick124.8ruyxjc.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect((err) => {
    if (err) {
        console.error('Error connecting to MongoDB:', err);
        return;
    }
    console.log("Connected to MongoDB!");
});
N