import axios from "axios";
import cheerio from "cheerio";
import { StatusCodes } from "http-status-codes";

export const getAllProducts = async (req, res) => {
  const query = req.params.productName;
  if (query === undefined) {
    return res.json({ msg: "Bad Request" });
  }

  const class1 = {
    selTool: "._2kHMtA",
    name: "._4rR01T",
    url: "._1fQZEK",
    image: "._396cs4",
    price: "._30jeq3",
  };

  const class2 = {
    selTool: "._4ddWXP",
    name: ".s1Q9rs",
    url: "._2rpwqI",
    image: "._396cs4",
    price: "._30jeq3",
  };

  const class3 = {
    selTool: "._1xHGtK._373qXS",
    name: ".IRpwTa",
    url: "._2UzuFa",
    image: "._2r_T1I",
    price: "._30jeq3",
  };

  const url = `https://www.flipkart.com/search?q=${query}`;

  try {
    const resp = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "application/json",
      },
    });

    let $ = cheerio.load(resp.data);

    const classes =
      $(class1.selTool).length != 0
        ? class1
        : $(class2.selTool).length != 0
        ? class2
        : class3;

    const links = $(classes.url)
      .get()
      .map((x) => $(x).attr("href"));
    const images = $(classes.image)
      .get()
      .map((x) => $(x).attr("src"));
    const IDs = $(classes.selTool)
      .parent()
      .get()
      .map((x) => $(x).attr("data-id"));

    const selTool = $(classes.selTool);

    let products = [];

    for (let i = 0; i < selTool.length; i++) {
      let product = { id: IDs[i] };
      product.name = $(selTool[i]).find(classes.name).text();
      product.url = "https://www.flipkart.com" + links[i];
      product.image = images[i];
      product.price = $(selTool[i]).find(classes.price).text();
      products.push(product);
    }

    res.status(StatusCodes.OK).json({ products, msg: "Success" });
  } catch (error) {
    res.status(501).json({ error });
  }
};
