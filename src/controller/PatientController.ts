import { Request, Response } from 'express';
import patientModel from '../model/patientModel';

export default class PatientController {
  public async index(req: Request, res: Response): Promise<Response> {
    const data = await patientModel.find();
    return res.send(data);
  }
}
