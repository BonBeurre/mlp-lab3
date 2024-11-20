const mongoose = require('mongoose');


// Connect to MongoDB
const dbURI = "mongodb+srv://alexandredibon37:ZtoOb7pdRKr3lyey@cluster-lab3mlp.a21yk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-lab3mlp";

mongoose.connect(dbURI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB:', err));

// Define a schema and model for Hotel Room
const hotelRoomSchema = new mongoose.Schema({
    roomNumber: { type: Number, required: true, unique: true },
    roomType: { type: String, required: true },
    pricePerNight: { type: Number, required: true },
    isBooked: { type: Boolean, default: false }
});

const HotelRoom = mongoose.model('HotelRoom', hotelRoomSchema);

module.exports = HotelRoom;