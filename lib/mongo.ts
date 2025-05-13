import { MongoClient, ServerApiVersion } from 'mongodb'

if (!process.env.MONGO_URI) {
    throw new Error("Invalid/Missing environment variable: MONGO_URI")
}

const uri = process.env.MONGO_URI
const options = {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// Extend the global type to include the custom MongoDB properties
declare global {
    var _mongoClientPromise: Promise<MongoClient> | undefined;
    var __mongoClientPromise: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === 'development') {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    let globalWithMongo = global as typeof globalThis & {
        _mongoClientPromise: Promise<MongoClient> | undefined;
        __mongoClientPromise: Promise<MongoClient> | undefined;
    };

    if (!globalWithMongo._mongoClientPromise) {
        client = new MongoClient(uri, options);
        globalWithMongo._mongoClientPromise = client.connect();
    }
    clientPromise = globalWithMongo._mongoClientPromise;
} else {
    // In production mode, it's best to not use a global variable.
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

export default clientPromise