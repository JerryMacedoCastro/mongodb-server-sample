import mongoose, { Document } from 'mongoose';

interface IPatient extends Document {
  name: string;
  birthDate: Date;
  ocupation: string;
}

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    birthDate: {
      type: Date,
      required: true,
    },
    ocupation: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  },
);

const patientModel = mongoose.model<IPatient>(
  'patient',
  patientSchema,
  'patient',
);

export default patientModel;
