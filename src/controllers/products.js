import { StatusCodes } from "http-status-codes";
import { Product } from "../models/Product.js";

const getAllProducts = async (req, res) => {
  const products = await Product.find({ createdBy: req.user._id });
  if (!products) {
    res.status(StatusCodes.OK).json({ msg: "Cart is empty" });
  }
  res.status(StatusCodes.OK).json({ products, msg: "Success" });
};

const createProduct = async (req, res) => {
  req.body.createdBy = req.user._id;
  const { createdBy, id, name } = req.body;

  const alreadyPresent = await Product.findOne({ id, createdBy });

  if (alreadyPresent) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: `You are already watching ${name}` });
  }

  const product = await Product.create(req.body);
  res
    .status(StatusCodes.CREATED)
    .json({ product, msg: `You are now watching ${name}` });
};

const getProduct = async (req, res) => {
  const {
    user: { _id: userId },
    params: { id: productId },
  } = req;

  const product = await Product.findOne({
    id: productId,
    createdBy: userId,
  });

  if (!product) {
    return res.status(StatusCodes.OK).json({ msg: "No product found" });
  }

  res.status(StatusCodes.OK).json({ product, msg: "Success" });
};

const deleteProduct = async (req, res) => {
  const {
    user: { _id: userId },
    params: { id: productId },
  } = req;

  const product = await Product.deleteOne({
    createdBy: userId,
    id: productId,
  });

  if (!product) {
    res
      .status(StatusCodes.NOT_FOUND)
      .json({ msg: "Product not present in DB" });
  }

  res
    .status(StatusCodes.OK)
    .json({ product, msg: "Product deleted successfully" });
};

const updateProduct = async (req, res) => {
  const {
    params: { id: productId },
    user: { _id: userId },
    body,
  } = req;

  const product = await Product.findOneAndUpdate(
    { createdBy: userId, id: productId },
    body,
    {
      new: true,
    }
  );

  res.status(StatusCodes.OK).json({ product, msg: "Updated" });
};

export {
  getAllProducts,
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
};
