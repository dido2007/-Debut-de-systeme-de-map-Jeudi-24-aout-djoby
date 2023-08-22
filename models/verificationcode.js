import { Schema, model, models } from 'mongoose';

const VerificationCodeSchema = new Schema({
    verification_code: Number,
    phone_number: String,
  });
  
  const VerificationCode = models.VerificationCodePost || model("verifcodes", VerificationCodeSchema);
  
  export default VerificationCode;