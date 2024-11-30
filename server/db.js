// Mongoose
import mongooes from 'mongoose';

const connectToDatabase = async () => {
	try {
		mongooes.set('strictQuery', false);
		const connect = await mongooes.connect(process.env.MONGO_URI);
		// {useUnifiedTopology: true,
		// useNewUrlParser: true}
		console.log(`MongoDB Connected ${connect.connection.host}`);
	} catch (error) {
		console.log(`Error: ${error.message}`);
	}
};

export default connectToDatabase;
