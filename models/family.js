const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const familySchema = new Schema({
        id: Number,
        first_name: String,
        last_name: String,
        street: String,
        city: String,
        plz: Number,
        children: [
            {
                id: Number,
                first_name: String,
                gender: String
            }
            
        ],
        applications: [ ObjectID(1) ]
    }
    
    const applications =  {
            id: 1,
            status: [String],
            //status: {
            // type: String,
            // enum: ["accepted", "pending", "refused" ]
            kita_id: Number,
            child_id: Number},
        }
}


const Destination = mongoose.model("Destination", destinationSchema);

module.exports = Destination;
