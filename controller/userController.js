const Product = require("../module/Product");

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.log(error);
    res.json({ message: "مشکلی از سمت سرور پیش آمد" });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.json({ messageSUC: "محصول جدید ایجاد شد" });
  } catch (error) {
    console.log(error);
    res.json({ message: "مشکلی از سمت سرور پیش آمد" });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await Product.deleteOne({ _id: req.body.id });
    res.json({ messageSUC: "محصول مورد نظر پاک شد" });
  } catch (error) {
    console.log(error);
    res.json({ message: "مشکلی از سمت سرور پیش آمد" });
  }
};

exports.editProduct = async (req, res) => {
  try {
    const product = await Product.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.json(product)
  } catch (error) {
    console.log(error);
    res.json({ message: "مشکلی از سمت سرور پیش آمد" });
  }
};
