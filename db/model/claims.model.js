import Mongoose from 'mongoose';

let claimsSchema = new Mongoose.Schema({
    customer_claim_id: {
        type: String   
    },
    facility_id: {
        type: String,
    },
    quantity: {
        type: Number
    },
    document_type :{
        type : String
    },
    claim_amount :{
        type : Number
    },
    service_provider_claim_id :{
        type : String
    },
    claim_type :{
        type : String
    },
    claim_status :{
        type : String
    }
})

var claims = Mongoose.model('Claims', claimsSchema)
export default claims