import mongoose from 'mongoose';
import config from 'config';

export default async () => {
  try {
    const connection = await mongoose.connect(config.db.url, { useNewUrlParser: true, useUnifiedTopology: true  });
    return connection.connection.db;
  } catch (error) {
    throw new Error(error)
  }
};