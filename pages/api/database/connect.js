import { MongoClient } from 'mongodb'

const url = `mongodb://localhost:27017`; // replace with .env in production

const openDbConnection = url => {
	const p = new Promise((resolve, reject) => {
	  MongoClient.connect(
		url,
		{ useUnifiedTopology: true, useNewUrlParser: true },
		async (error, client) => {
		  if (error) {
			reject(error);
			return;
		  }
  
		  const dbName = "test";
		  const db = client.db(dbName);
  
		  resolve({ client, db });
		}
	  );
	});
	p.catch(err => console.log("ERROR: openDbConnection", err));
	return p;
  };
  
  const createDbConnection = async () => {
	
  
	try {
	  return await openDbConnection(url);
	} catch (err) {
	  throw `ERROR: createDbConnection - ${err}`;
	}
  };
  
  export default createDbConnection;