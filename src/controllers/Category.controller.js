import Category from "../models/Category";

class CategoryController {
  static async create(req, res) {
    try {
      const category = await Category.create(req.body);

      return res.status(201).json(category);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

export default CategoryController;
