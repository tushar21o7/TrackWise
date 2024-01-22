import cheerio from "cheerio";
import request from "request";

const getAllProducts = async (req, res) => {
  const query = req.params.productName;
  if (query === undefined) {
    return res.send("Bad Request");
  }

  //   if (cache.get(query)) {
  //     return res
  //       .status(200)
  //       .render("products.ejs", {
  //         products: cache.get(query),
  //         isLoggedIn: req.session.user !== undefined,
  //       });
  //   }

  const url = `https://www.flipkart.com/search?q=${query}`;
  request(url, cb);
  async function cb(err, res, html) {
    if (err) {
      console.log(err);
    } else {
      getHtml(html);
    }
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

  async function getHtml(html) {
    let $ = cheerio.load(html);

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

    // let products = new Map();
    let products = [];

    for (let i = 0; i < selTool.length; i++) {
      let product = { id: IDs[i] };
      product.name = $(selTool[i]).find(classes.name).text();
      product.url = "https://www.flipkart.com" + links[i];
      product.image = images[i];
      product.price = $(selTool[i]).find(classes.price).text();
      // if (i == 0) {
      //   console.log(product.name, " ", product.price);
      // }
      // products.set(IDs[i], product);
      products.push(product);
    }

    // cache.set(query, products);
    res.status(200).json({ products, msg: "Success" });
  }
};

export { getAllProducts };
