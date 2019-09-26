import Service from "../models/Service";

class ServiceController {
  static async getOverview(req, res) {
    try {
      const services = await Service.find();

      return res.status(200).json(services);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async getById(req, res) {
    const { id } = req.params;

    try {
      const service = await Service.findById(id);

      return res.status(200).json(service);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async create(req, res) {
    try {
      const service = await Service.create(req.body);

      return res.status(201).json(service);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

export default ServiceController;
