import Service from "../models/Service";

class ServiceController {
  static async getResume(req, res) {
    try {
      const services = await Service.find();

      return res.status(201).json(services);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async create(req, res) {
    try {
      const service = await Service.create(req.body);

      return res.json(service);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

export default ServiceController;
