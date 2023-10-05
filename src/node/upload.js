const { Actor, HttpAgent } = require('@dfinity/agent');
const { idlFactory } = require('./canister.did.js'); // The candid for your canister
const MongoClient = require('mongodb').MongoClient;

// Initialize the agent
const agent = new HttpAgent({ host: 'https://ic0.app' }); // Or your custom replica URL

// Fetch root key for agent
await agent.fetchRootKey();

// Create an actor with the candid interface
const actor = Actor.createActor(idlFactory, { agent, canisterId: 'your-canister-id' });

// Set up your database connection
const uri = "mongodb+srv://<username>:<password>@cluster0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  if (err) throw err;
  console.log('Connected to database');

  const collection = client.db("your-db-name").collection("your-collection-name");

  // Define your update function
  async function updateData() {
    // Fetch data from your database
    const cursor = collection.find();

    // Loop through the results and call your canister's function for each one
    while(await cursor.hasNext()) {
      const data = await cursor.next();
      const result = await actor.yourCanisterFunction(data);
      console.log(result);
    }
  }

  updateData();
});
