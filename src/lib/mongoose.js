import mongoose from 'mongoose';
import config from 'config';

export default async () => {
  const connection = await mongoose.connect(config.db.url, { useNewUrlParser: true });
  return connection.connection.db;
};