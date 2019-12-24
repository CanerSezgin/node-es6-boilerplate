import mongoose from 'mongoose';

// Set Schema Name
export default mongoose.model("Feature", new mongoose.Schema({
    // Set Props
    name: {
        type: String
    }
}));