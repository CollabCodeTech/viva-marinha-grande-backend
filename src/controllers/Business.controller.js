import aws from "aws-sdk";
import multer from "multer";
import multerS3 from "multer-s3";
import Business from "../models/Business";
import Category from "../models/Category";

const { AWS_ACCESS_KEY, AWS_SECRET_KEY } = process.env;

aws.config.update({
  accessKeyId: AWS_ACCESS_KEY,
  secretAccessKey: AWS_SECRET_KEY
});

const s3 = new aws.S3({});

const storage = multerS3({
  s3,
  bucket: "viva-marinha-grande",
  metadata(req, file, cb) {
    cb(null, { fieldName: file.fieldname });
  },
  key(req, file, cb) {
    cb(null, Date.now().toString());
  }
});

const upload = multer({ storage }).single("photo");

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

  static async uploadPhoto(req, res) {
    upload(req, res, error => {
      return error
        ? res.status(500).json(error)
        : res.status(201).json(req.file);
    });
  }
}

export default BusinessController;
