import mongoose from 'mongoose';

export async function connect() {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error('MONGO_URI environment variable is not set');
        }

        await mongoose.connect(process.env.MONGO_URI);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('✅ MongoDB connected successfully');
        });

        connection.on('error', (err) => {
            console.error('❌ MongoDB connection error:', err);
            process.exit(1);
        });

        connection.on('disconnected', () => {
            console.log('⚠️ MongoDB disconnected');
        });
    } catch (error) {
        console.error('❌ Database connection failed:', error);
        process.exit(1);
    }
}