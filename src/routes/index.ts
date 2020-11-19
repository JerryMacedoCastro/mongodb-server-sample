import express, { Router, response } from 'express';
import PatientController from '../controller/PatientController';

const routes = express.Router();

const patientsController = new PatientController();

routes.get('/patients', patientsController.index);

export default routes;
