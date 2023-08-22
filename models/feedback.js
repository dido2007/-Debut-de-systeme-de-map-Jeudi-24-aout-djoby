import { Schema, model, models } from 'mongoose';

const FeedbackSchema = new Schema({
  title: String,
  description: String,
});

const Feedback = models.Feedback || model('Feedback', FeedbackSchema);

export default Feedback;