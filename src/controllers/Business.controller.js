import Business from "../models/Business";
import Category from "../models/Category";

class BusinessController {
  static async getOverview(req, res) {
    try {
      const businesss = await Business.find();

      return res.status(200).json(businesss);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async getByCategories(req, res) {
    try {
      const { categories } = req.query;
      const buniness = await Business.find({
        category: { $in: categories }
      });

      return res.status(200).json(buniness);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async getById(req, res) {
    const { id } = req.params;

    try {
      const business = await Business.findById(id);

      return res.status(200).json(business);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async create(req, res) {
    try {
      const { category } = req.body;
      const business = await Business.create(req.body);
      const resCategory = await Category.findOneAndUpdate(
        { content: category },
        { $inc: { amount: 1 } },
        { new: true }
      );

      return res.status(201).json({ business, resCategory });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

export default BusinessController;
