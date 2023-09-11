import mongoose, { Schema, Document } from 'mongoose';

export interface IPerson extends Document {
  name: string;
}

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 20
    }
   
});


export const Person = mongoose.model<IPerson>('Person', userSchema);

