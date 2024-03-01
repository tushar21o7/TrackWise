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
    const resp = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto", {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
    });

    // let $ = cheerio.load(resp.data);

    // const classes =
    //   $(class1.selTool).length != 0
    //     ? class1
    //     : $(class2.selTool).length != 0
    //     ? class2
    //     : class3;

    // const links = $(classes.url)
    //   .get()
    //   .map((x) => $(x).attr("href"));
    // const images = $(classes.image)
    //   .get()
    //   .map((x) => $(x).attr("src"));
    // const IDs = $(classes.selTool)
    //   .parent()
    //   .get()
    //   .map((x) => $(x).attr("data-id"));

    // const selTool = $(classes.selTool);

    // let products = [];

    // for (let i = 0; i < selTool.length; i++) {
    //   let product = { id: IDs[i] };
    //   product.name = $(selTool[i]).find(classes.name).text();
    //   product.url = "https://www.flipkart.com" + links[i];
    //   product.image = images[i];
    //   product.price = $(selTool[i]).find(classes.price).text();
    //   products.push(product);
    // }

    const products = [
      {
        "id": "MOBGHWFHABH3G73H",
        "name": "Apple iPhone 14 (Starlight, 128 GB)",
        "url":
          "https://www.flipkart.com/apple-iphone-14-starlight-128-gb/p/itm3485a56f6e676?pid=MOBGHWFHABH3G73H&lid=LSTMOBGHWFHABH3G73H644UNJ&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=search&fm=organic&iid=c134af8a-04ad-42b1-b732-bac12a8cabb1.MOBGHWFHABH3G73H.SEARCH&ppt=None&ppn=None&ssid=c0lu6bye7k0000001709312570136&qH=0b3f45b266a97d70",
        "image":
          "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/m/o/b/-original-imaghx9qkugtbfrn.jpeg?q=70",
        "price": "₹58,999",
      },
      {
        "id": "MOBGHWFHECFVMDCX",
        "name": "Apple iPhone 14 (Midnight, 128 GB)",
        "url":
          "https://www.flipkart.com/apple-iphone-14-midnight-128-gb/p/itm9e6293c322a84?pid=MOBGHWFHECFVMDCX&lid=LSTMOBGHWFHECFVMDCXXRTRJG&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_2&otracker=search&fm=organic&iid=c134af8a-04ad-42b1-b732-bac12a8cabb1.MOBGHWFHECFVMDCX.SEARCH&ppt=None&ppn=None&ssid=c0lu6bye7k0000001709312570136&qH=0b3f45b266a97d70",
        "image":
          "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70",
        "price": "₹59,999",
      },
      {
        "id": "MOBGHWFHQFSQYBFU",
        "name": "Apple iPhone 14 (Purple, 128 GB)",
        "url":
          "https://www.flipkart.com/apple-iphone-14-purple-128-gb/p/itm0b581eba85e08?pid=MOBGHWFHQFSQYBFU&lid=LSTMOBGHWFHQFSQYBFUUF0OWI&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_3&otracker=search&fm=organic&iid=c134af8a-04ad-42b1-b732-bac12a8cabb1.MOBGHWFHQFSQYBFU.SEARCH&ppt=None&ppn=None&ssid=c0lu6bye7k0000001709312570136&qH=0b3f45b266a97d70",
        "image":
          "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/u/f/-original-imaghxa5hvapbfds.jpeg?q=70",
        "price": "₹58,999",
      },
      {
        "id": "MOBGTAGPNMZA5PU5",
        "name": "Apple iPhone 15 (Pink, 128 GB)",
        "url":
          "https://www.flipkart.com/apple-iphone-15-pink-128-gb/p/itm7579ed94ca647?pid=MOBGTAGPNMZA5PU5&lid=LSTMOBGTAGPNMZA5PU5O32WJC&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&srno=s_1_4&otracker=search&fm=organic&iid=c134af8a-04ad-42b1-b732-bac12a8cabb1.MOBGTAGPNMZA5PU5.SEARCH&ppt=None&ppn=None&ssid=c0lu6bye7k0000001709312570136&qH=0b3f45b266a97d70",
        "image":
          "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/c/k/-original-imagtc5fuzkvczr7.jpeg?q=70",
        "price": "₹72,999",
      },
      {
        "id": "MOBGHWFHSV7GUFWA",
        "name": "Apple iPhone 14 (Blue, 128 GB)",
        "url":
          "https://www.flipkart.com/apple-iphone-14-blue-128-gb/p/itmdb77f40da6b6d?pid=MOBGHWFHSV7GUFWA&lid=LSTMOBGHWFHSV7GUFWAFEQJQ4&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&srno=s_1_5&otracker=search&fm=organic&iid=c134af8a-04ad-42b1-b732-bac12a8cabb1.MOBGHWFHSV7GUFWA.SEARCH&ppt=None&ppn=None&ssid=c0lu6bye7k0000001709312570136&qH=0b3f45b266a97d70",
        "image":
          "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70",
        "price": "₹58,999",
      },
      {
        "id": "MOBGTAGPAQNVFZZY",
        "name": "Apple iPhone 15 (Blue, 128 GB)",
        "url":
          "https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZYO7HQ2L&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&srno=s_1_6&otracker=search&fm=organic&iid=c134af8a-04ad-42b1-b732-bac12a8cabb1.MOBGTAGPAQNVFZZY.SEARCH&ppt=None&ppn=None&ssid=c0lu6bye7k0000001709312570136&qH=0b3f45b266a97d70",
        "image":
          "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=70",
        "price": "₹72,999",
      },
      {
        "id": "MOBGTAGPYYWZRUJX",
        "name": "Apple iPhone 15 (Green, 128 GB)",
        "url":
          "https://www.flipkart.com/apple-iphone-15-green-128-gb/p/itm235cd318bde73?pid=MOBGTAGPYYWZRUJX&lid=LSTMOBGTAGPYYWZRUJXXIP6YM&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&srno=s_1_7&otracker=search&fm=organic&iid=c134af8a-04ad-42b1-b732-bac12a8cabb1.MOBGTAGPYYWZRUJX.SEARCH&ppt=None&ppn=None&ssid=c0lu6bye7k0000001709312570136&qH=0b3f45b266a97d70",
        "image":
          "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/z/3/-original-imagtc5fqyz8tu4c.jpeg?q=70",
        "price": "₹72,999",
      },
      {
        "id": "MOBGHWFHFBJVSW22",
        "name": "Apple iPhone 14 ((PRODUCT)RED, 128 GB)",
        "url":
          "https://www.flipkart.com/apple-iphone-14-product-red-128-gb/p/itm1f78a4e1a1d76?pid=MOBGHWFHFBJVSW22&lid=LSTMOBGHWFHFBJVSW22H8TJ3V&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&srno=s_1_8&otracker=search&fm=organic&iid=c134af8a-04ad-42b1-b732-bac12a8cabb1.MOBGHWFHFBJVSW22.SEARCH&ppt=None&ppn=None&ssid=c0lu6bye7k0000001709312570136&qH=0b3f45b266a97d70",
        "image":
          "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/k/o/-original-imaghx9qtwbnhwvy.jpeg?q=70",
        "price": "₹58,999",
      },
      {
        "id": "MOBGNHT7HJFDHHAC",
        "name": "Apple iPhone 14 (Yellow, 128 GB)",
        "url":
          "https://www.flipkart.com/apple-iphone-14-yellow-128-gb/p/itmaa0785520dd68?pid=MOBGNHT7HJFDHHAC&lid=LSTMOBGNHT7HJFDHHACULC6HX&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&srno=s_1_9&otracker=search&fm=organic&iid=c134af8a-04ad-42b1-b732-bac12a8cabb1.MOBGNHT7HJFDHHAC.SEARCH&ppt=None&ppn=None&ssid=c0lu6bye7k0000001709312570136&qH=0b3f45b266a97d70",
        "image":
          "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/l/d/-original-imagnhusa2upmgeq.jpeg?q=70",
        "price": "₹59,999",
      },
      {
        "id": "MOBGC9VGSU9DWGJZ",
        "name": "Apple iPhone 13 (Green, 128 GB)",
        "url":
          "https://www.flipkart.com/apple-iphone-13-green-128-gb/p/itm18a55937b2607?pid=MOBGC9VGSU9DWGJZ&lid=LSTMOBGC9VGSU9DWGJZUXUVYB&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&srno=s_1_10&otracker=search&fm=organic&iid=c134af8a-04ad-42b1-b732-bac12a8cabb1.MOBGC9VGSU9DWGJZ.SEARCH&ppt=None&ppn=None&ssid=c0lu6bye7k0000001709312570136&qH=0b3f45b266a97d70",
        "image":
          "https://rukminim2.flixcart.com/image/312/312/l0igvww0/mobile/r/q/m/-original-imagca5ajerqpfjy.jpeg?q=70",
        "price": "₹52,999",
      },
      {
        "id": "MOBG6VF59ZFEPEBX",
        "name": "Apple iPhone 13 ((PRODUCT)RED, 128 GB)",
        "url":
          "https://www.flipkart.com/apple-iphone-13-product-red-128-gb/p/itm99b5658d148b0?pid=MOBG6VF59ZFEPEBX&lid=LSTMOBG6VF59ZFEPEBX8XIKMW&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&srno=s_1_11&otracker=search&fm=organic&iid=c134af8a-04ad-42b1-b732-bac12a8cabb1.MOBG6VF59ZFEPEBX.SEARCH&ppt=None&ppn=None&ssid=c0lu6bye7k0000001709312570136&qH=0b3f45b266a97d70",
        "image":
          "https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/a/m/7/iphone-13-mlpj3hn-a-apple-original-imag6vpyk3w4zarg.jpeg?q=70",
        "price": "₹52,999",
      },
      {
        "id": "MOBG6VF5ADKHKXFX",
        "name": "Apple iPhone 13 (Starlight, 128 GB)",
        "url":
          "https://www.flipkart.com/apple-iphone-13-starlight-128-gb/p/itmc9604f122ae7f?pid=MOBG6VF5ADKHKXFX&lid=LSTMOBG6VF5ADKHKXFXZVXGTL&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&srno=s_1_12&otracker=search&fm=organic&iid=c134af8a-04ad-42b1-b732-bac12a8cabb1.MOBG6VF5ADKHKXFX.SEARCH&ppt=None&ppn=None&ssid=c0lu6bye7k0000001709312570136&qH=0b3f45b266a97d70",
        "image":
          "https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg?q=70",
        "price": "₹52,999",
      },
      {
        "id": "MOBG6VF5SMXPNQHG",
        "name": "Apple iPhone 13 (Blue, 128 GB)",
        "url":
          "https://www.flipkart.com/apple-iphone-13-blue-128-gb/p/itm6c601e0a58b3c?pid=MOBG6VF5SMXPNQHG&lid=LSTMOBG6VF5SMXPNQHGMMXJDB&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&srno=s_1_13&otracker=search&fm=organic&iid=c134af8a-04ad-42b1-b732-bac12a8cabb1.MOBG6VF5SMXPNQHG.SEARCH&ppt=None&ppn=None&ssid=c0lu6bye7k0000001709312570136&qH=0b3f45b266a97d70",
        "image":
          "https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/2/y/o/iphone-13-mlpk3hn-a-apple-original-imag6vpyur6hjngg.jpeg?q=70",
        "price": "₹52,999",
      },
      {
        "id": "MOBGHWFHVCB2YZYR",
        "name": "Apple iPhone 14 Plus (Starlight, 128 GB)",
        "url":
          "https://www.flipkart.com/apple-iphone-14-plus-starlight-128-gb/p/itmc922ddc8af349?pid=MOBGHWFHVCB2YZYR&lid=LSTMOBGHWFHVCB2YZYREG7ZLM&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&srno=s_1_14&otracker=search&fm=organic&iid=c134af8a-04ad-42b1-b732-bac12a8cabb1.MOBGHWFHVCB2YZYR.SEARCH&ppt=None&ppn=None&ssid=c0lu6bye7k0000001709312570136&qH=0b3f45b266a97d70",
        "image":
          "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/l/v/8/-original-imaghx9qudmydgc4.jpeg?q=70",
        "price": "₹66,999",
      },
      {
        "id": "MOBGHWFHYFJWRHAG",
        "name": "Apple iPhone 14 Plus (Purple, 128 GB)",
        "url":
          "https://www.flipkart.com/apple-iphone-14-plus-purple-128-gb/p/itm7a759a472d863?pid=MOBGHWFHYFJWRHAG&lid=LSTMOBGHWFHYFJWRHAGIWEYST&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&srno=s_1_15&otracker=search&fm=organic&iid=c134af8a-04ad-42b1-b732-bac12a8cabb1.MOBGHWFHYFJWRHAG.SEARCH&ppt=None&ppn=None&ssid=c0lu6bye7k0000001709312570136&qH=0b3f45b266a97d70",
        "image":
          "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/v/0/t/-original-imaghxa5rgcv5enm.jpeg?q=70",
        "price": "₹67,999",
      },
      {
        "id": "MOBG6VF5GXVFTQ5Y",
        "name": "Apple iPhone 13 (Pink, 128 GB)",
        "url":
          "https://www.flipkart.com/apple-iphone-13-pink-128-gb/p/itm6e30c6ee045d2?pid=MOBG6VF5GXVFTQ5Y&lid=LSTMOBG6VF5GXVFTQ5YWKHB1V&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&srno=s_1_16&otracker=search&fm=organic&iid=c134af8a-04ad-42b1-b732-bac12a8cabb1.MOBG6VF5GXVFTQ5Y.SEARCH&ppt=None&ppn=None&ssid=c0lu6bye7k0000001709312570136&qH=0b3f45b266a97d70",
        "image":
          "https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/8/z/w/iphone-13-mlph3hn-a-apple-original-imag6vzzhrxgazsg.jpeg?q=70",
        "price": "₹52,999",
      },
      {
        "id": "MOBGTAGPKKYDGYYQ",
        "name": "Apple iPhone 15 Plus (Pink, 256 GB)",
        "url":
          "https://www.flipkart.com/apple-iphone-15-plus-pink-256-gb/p/itm4b552466e479e?pid=MOBGTAGPKKYDGYYQ&lid=LSTMOBGTAGPKKYDGYYQUHQZDF&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&srno=s_1_17&otracker=search&fm=organic&iid=c134af8a-04ad-42b1-b732-bac12a8cabb1.MOBGTAGPKKYDGYYQ.SEARCH&ppt=None&ppn=None&ssid=c0lu6bye7k0000001709312570136&qH=0b3f45b266a97d70",
        "image":
          "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/c/6/r/-original-imagtc6fn8fecysv.jpeg?q=70",
        "price": "₹92,999",
      },
      {
        "id": "MOBGTAGPJVGHTAYC",
        "name": "Apple iPhone 15 Plus (Green, 128 GB)",
        "url":
          "https://www.flipkart.com/apple-iphone-15-plus-green-128-gb/p/itmaa50abb5e6c3b?pid=MOBGTAGPJVGHTAYC&lid=LSTMOBGTAGPJVGHTAYCTGIMN2&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&srno=s_1_18&otracker=search&fm=organic&iid=c134af8a-04ad-42b1-b732-bac12a8cabb1.MOBGTAGPJVGHTAYC.SEARCH&ppt=None&ppn=None&ssid=c0lu6bye7k0000001709312570136&qH=0b3f45b266a97d70",
        "image":
          "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/6/x/t/-original-imagtc6ffhgm3f2g.jpeg?q=70",
        "price": "₹82,999",
      },
      {
        "id": "MOBGTAGPXUWEXXWY",
        "name": "Apple iPhone 15 Plus (Pink, 128 GB)",
        "url":
          "https://www.flipkart.com/apple-iphone-15-plus-pink-128-gb/p/itmecb6209a78172?pid=MOBGTAGPXUWEXXWY&lid=LSTMOBGTAGPXUWEXXWYKVXCUT&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&srno=s_1_19&otracker=search&fm=organic&iid=c134af8a-04ad-42b1-b732-bac12a8cabb1.MOBGTAGPXUWEXXWY.SEARCH&ppt=None&ppn=None&ssid=c0lu6bye7k0000001709312570136&qH=0b3f45b266a97d70",
        "image":
          "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/c/6/r/-original-imagtc6fn8fecysv.jpeg?q=70",
        "price": "₹82,999",
      },
      {
        "id": "MOBGTAGPNRQA7CS3",
        "name": "Apple iPhone 15 Plus (Black, 128 GB)",
        "url":
          "https://www.flipkart.com/apple-iphone-15-plus-black-128-gb/p/itme3a53984760fb?pid=MOBGTAGPNRQA7CS3&lid=LSTMOBGTAGPNRQA7CS3L7XK7L&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&srno=s_1_20&otracker=search&fm=organic&iid=c134af8a-04ad-42b1-b732-bac12a8cabb1.MOBGTAGPNRQA7CS3.SEARCH&ppt=None&ppn=None&ssid=c0lu6bye7k0000001709312570136&qH=0b3f45b266a97d70",
        "image":
          "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/8/9/n/-original-imagtc6fyrstd4jm.jpeg?q=70",
        "price": "₹82,999",
      },
      {
        "id": "MOBGTAGPKHHNRHXH",
        "name": "Apple iPhone 15 Pro (Black Titanium, 512 GB)",
        "url":
          "https://www.flipkart.com/apple-iphone-15-pro-black-titanium-512-gb/p/itm6cec19f8ee1c3?pid=MOBGTAGPKHHNRHXH&lid=LSTMOBGTAGPKHHNRHXHIC2MMD&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&srno=s_1_21&otracker=search&fm=organic&iid=c134af8a-04ad-42b1-b732-bac12a8cabb1.MOBGTAGPKHHNRHXH.SEARCH&ppt=None&ppn=None&ssid=c0lu6bye7k0000001709312570136&qH=0b3f45b266a97d70",
        "image":
          "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/0/q/d/-original-imagtc4hzawdcp4g.jpeg?q=70",
        "price": "₹1,58,990",
      },
      {
        "id": "MOBG6VF5Q82T3XRS",
        "name": "Apple iPhone 13 (Midnight, 128 GB)",
        "url":
          "https://www.flipkart.com/apple-iphone-13-midnight-128-gb/p/itmca361aab1c5b0?pid=MOBG6VF5Q82T3XRS&lid=LSTMOBG6VF5Q82T3XRSOXJLM9&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&srno=s_1_22&otracker=search&fm=organic&iid=c134af8a-04ad-42b1-b732-bac12a8cabb1.MOBG6VF5Q82T3XRS.SEARCH&ppt=None&ppn=None&ssid=c0lu6bye7k0000001709312570136&qH=0b3f45b266a97d70",
        "image":
          "https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70",
        "price": "₹52,999",
      },
      {
        "id": "MOBGHWFH4H3MMRAA",
        "name": "Apple iPhone 14 (Midnight, 256 GB)",
        "url":
          "https://www.flipkart.com/apple-iphone-14-midnight-256-gb/p/itmdb32e3c997112?pid=MOBGHWFH4H3MMRAA&lid=LSTMOBGHWFH4H3MMRAAQSJTKY&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&srno=s_1_23&otracker=search&fm=organic&iid=c134af8a-04ad-42b1-b732-bac12a8cabb1.MOBGHWFH4H3MMRAA.SEARCH&ppt=None&ppn=None&ssid=c0lu6bye7k0000001709312570136&qH=0b3f45b266a97d70",
        "image":
          "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70",
        "price": "₹68,999",
      },
      {
        "id": "MOBGC9K3PMJHCXSG",
        "name": "Apple iPhone SE 3rd Gen (Midnight, 64 GB)",
        "url":
          "https://www.flipkart.com/apple-iphone-se-3rd-gen-midnight-64-gb/p/itmb0135e923209e?pid=MOBGC9K3PMJHCXSG&lid=LSTMOBGC9K3PMJHCXSGI1ZEHR&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&srno=s_1_24&otracker=search&fm=organic&iid=c134af8a-04ad-42b1-b732-bac12a8cabb1.MOBGC9K3PMJHCXSG.SEARCH&ppt=None&ppn=None&ssid=c0lu6bye7k0000001709312570136&qH=0b3f45b266a97d70",
        "image":
          "https://rukminim2.flixcart.com/image/312/312/l0igvww0/mobile/9/y/q/-original-imagca67yxswgwqq.jpeg?q=70",
        "price": "₹49,900",
      },
    ];

    res.status(StatusCodes.OK).json({ products, msg: "Success" });
  } catch (error) {
    res.status(501).json({ error });
  }
};
