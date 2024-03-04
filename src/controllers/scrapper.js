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
    const defaultProducts = [
      {
        "id": "MOBGHWFHABH3G73H",
        "name": "Apple iPhone 14 (Starlight, 128 GB)",
        "url":
          "https://www.flipkart.com/apple-iphone-14-starlight-128-gb/p/itm3485a56f6e676?pid=MOBGHWFHABH3G73H&lid=LSTMOBGHWFHABH3G73H644UNJ&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=search&fm=organic&iid=213912bc-f8ef-4842-adb4-0acba6a83335.MOBGHWFHABH3G73H.SEARCH&ppt=None&ppn=None&ssid=xgtoqkvx0g0000001709537406866&qH=0b3f45b266a97d70",
        "image":
          "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/m/o/b/-original-imaghx9qkugtbfrn.jpeg?q=70",
        "price": "₹58,999",
      },
      {
        "id": "MOBGHWFHECFVMDCX",
        "name": "Apple iPhone 14 (Midnight, 128 GB)",
        "url":
          "https://www.flipkart.com/apple-iphone-14-midnight-128-gb/p/itm9e6293c322a84?pid=MOBGHWFHECFVMDCX&lid=LSTMOBGHWFHECFVMDCXXRTRJG&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_2&otracker=search&fm=organic&iid=213912bc-f8ef-4842-adb4-0acba6a83335.MOBGHWFHECFVMDCX.SEARCH&ppt=None&ppn=None&ssid=xgtoqkvx0g0000001709537406866&qH=0b3f45b266a97d70",
        "image":
          "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70",
        "price": "₹59,999",
      },
      {
        "id": "MOBGHWFHQFSQYBFU",
        "name": "Apple iPhone 14 (Purple, 128 GB)",
        "url":
          "https://www.flipkart.com/apple-iphone-14-purple-128-gb/p/itm0b581eba85e08?pid=MOBGHWFHQFSQYBFU&lid=LSTMOBGHWFHQFSQYBFUUF0OWI&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_3&otracker=search&fm=organic&iid=213912bc-f8ef-4842-adb4-0acba6a83335.MOBGHWFHQFSQYBFU.SEARCH&ppt=None&ppn=None&ssid=xgtoqkvx0g0000001709537406866&qH=0b3f45b266a97d70",
        "image":
          "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/u/f/-original-imaghxa5hvapbfds.jpeg?q=70",
        "price": "₹58,999",
      },
      {
        "id": "MOBGHWFHSV7GUFWA",
        "name": "Apple iPhone 14 (Blue, 128 GB)",
        "url":
          "https://www.flipkart.com/apple-iphone-14-blue-128-gb/p/itmdb77f40da6b6d?pid=MOBGHWFHSV7GUFWA&lid=LSTMOBGHWFHSV7GUFWAFEQJQ4&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&srno=s_1_4&otracker=search&fm=organic&iid=213912bc-f8ef-4842-adb4-0acba6a83335.MOBGHWFHSV7GUFWA.SEARCH&ppt=None&ppn=None&ssid=xgtoqkvx0g0000001709537406866&qH=0b3f45b266a97d70",
        "image":
          "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70",
        "price": "₹58,999",
      },
      {
        "id": "MOBGTAGPAQNVFZZY",
        "name": "Apple iPhone 15 (Blue, 128 GB)",
        "url":
          "https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZYO7HQ2L&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&srno=s_1_5&otracker=search&fm=organic&iid=213912bc-f8ef-4842-adb4-0acba6a83335.MOBGTAGPAQNVFZZY.SEARCH&ppt=None&ppn=None&ssid=xgtoqkvx0g0000001709537406866&qH=0b3f45b266a97d70",
        "image":
          "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=70",
        "price": "₹72,999",
      },
      {
        "id": "MOBGTAGPNMZA5PU5",
        "name": "Apple iPhone 15 (Pink, 128 GB)",
        "url":
          "https://www.flipkart.com/apple-iphone-15-pink-128-gb/p/itm7579ed94ca647?pid=MOBGTAGPNMZA5PU5&lid=LSTMOBGTAGPNMZA5PU5O32WJC&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&srno=s_1_6&otracker=search&fm=organic&iid=213912bc-f8ef-4842-adb4-0acba6a83335.MOBGTAGPNMZA5PU5.SEARCH&ppt=None&ppn=None&ssid=xgtoqkvx0g0000001709537406866&qH=0b3f45b266a97d70",
        "image":
          "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/c/k/-original-imagtc5fuzkvczr7.jpeg?q=70",
        "price": "₹72,999",
      },
      {
        "id": "MOBG6VF5ADKHKXFX",
        "name": "Apple iPhone 13 (Starlight, 128 GB)",
        "url":
          "https://www.flipkart.com/apple-iphone-13-starlight-128-gb/p/itmc9604f122ae7f?pid=MOBG6VF5ADKHKXFX&lid=LSTMOBG6VF5ADKHKXFXZVXGTL&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&srno=s_1_7&otracker=search&fm=organic&iid=213912bc-f8ef-4842-adb4-0acba6a83335.MOBG6VF5ADKHKXFX.SEARCH&ppt=None&ppn=None&ssid=xgtoqkvx0g0000001709537406866&qH=0b3f45b266a97d70",
        "image":
          "https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg?q=70",
        "price": "₹52,999",
      },
      {
        "id": "MOBGHWFHVCB2YZYR",
        "name": "Apple iPhone 14 Plus (Starlight, 128 GB)",
        "url":
          "https://www.flipkart.com/apple-iphone-14-plus-starlight-128-gb/p/itmc922ddc8af349?pid=MOBGHWFHVCB2YZYR&lid=LSTMOBGHWFHVCB2YZYREG7ZLM&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&srno=s_1_8&otracker=search&fm=organic&iid=213912bc-f8ef-4842-adb4-0acba6a83335.MOBGHWFHVCB2YZYR.SEARCH&ppt=None&ppn=None&ssid=xgtoqkvx0g0000001709537406866&qH=0b3f45b266a97d70",
        "image":
          "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/l/v/8/-original-imaghx9qudmydgc4.jpeg?q=70",
        "price": "₹66,999",
      },
      {
        "id": "MOBGC9VGSU9DWGJZ",
        "name": "Apple iPhone 13 (Green, 128 GB)",
        "url":
          "https://www.flipkart.com/apple-iphone-13-green-128-gb/p/itm18a55937b2607?pid=MOBGC9VGSU9DWGJZ&lid=LSTMOBGC9VGSU9DWGJZUXUVYB&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&srno=s_1_9&otracker=search&fm=organic&iid=213912bc-f8ef-4842-adb4-0acba6a83335.MOBGC9VGSU9DWGJZ.SEARCH&ppt=None&ppn=None&ssid=xgtoqkvx0g0000001709537406866&qH=0b3f45b266a97d70",
        "image":
          "https://rukminim2.flixcart.com/image/312/312/l0igvww0/mobile/r/q/m/-original-imagca5ajerqpfjy.jpeg?q=70",
        "price": "₹52,999",
      },
      {
        "id": "MOBGTAGPYYWZRUJX",
        "name": "Apple iPhone 15 (Green, 128 GB)",
        "url":
          "https://www.flipkart.com/apple-iphone-15-green-128-gb/p/itm235cd318bde73?pid=MOBGTAGPYYWZRUJX&lid=LSTMOBGTAGPYYWZRUJXXIP6YM&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&srno=s_1_10&otracker=search&fm=organic&iid=213912bc-f8ef-4842-adb4-0acba6a83335.MOBGTAGPYYWZRUJX.SEARCH&ppt=None&ppn=None&ssid=xgtoqkvx0g0000001709537406866&qH=0b3f45b266a97d70",
        "image":
          "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/z/3/-original-imagtc5fqyz8tu4c.jpeg?q=70",
        "price": "₹72,999",
      },
      {
        "id": "MOBG6VF5SMXPNQHG",
        "name": "Apple iPhone 13 (Blue, 128 GB)",
        "url":
          "https://www.flipkart.com/apple-iphone-13-blue-128-gb/p/itm6c601e0a58b3c?pid=MOBG6VF5SMXPNQHG&lid=LSTMOBG6VF5SMXPNQHGMMXJDB&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&srno=s_1_11&otracker=search&fm=organic&iid=213912bc-f8ef-4842-adb4-0acba6a83335.MOBG6VF5SMXPNQHG.SEARCH&ppt=None&ppn=None&ssid=xgtoqkvx0g0000001709537406866&qH=0b3f45b266a97d70",
        "image":
          "https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/2/y/o/iphone-13-mlpk3hn-a-apple-original-imag6vpyur6hjngg.jpeg?q=70",
        "price": "₹52,999",
      },
      {
        "id": "MOBGHWFHFBJVSW22",
        "name": "Apple iPhone 14 ((PRODUCT)RED, 128 GB)",
        "url":
          "https://www.flipkart.com/apple-iphone-14-product-red-128-gb/p/itm1f78a4e1a1d76?pid=MOBGHWFHFBJVSW22&lid=LSTMOBGHWFHFBJVSW22H8TJ3V&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&srno=s_1_12&otracker=search&fm=organic&iid=213912bc-f8ef-4842-adb4-0acba6a83335.MOBGHWFHFBJVSW22.SEARCH&ppt=None&ppn=None&ssid=xgtoqkvx0g0000001709537406866&qH=0b3f45b266a97d70",
        "image":
          "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/k/o/-original-imaghx9qtwbnhwvy.jpeg?q=70",
        "price": "₹58,999",
      },
      {
        "id": "MOBGTAGPRSYPVZXR",
        "name": "Apple iPhone 15 Plus (Green, 256 GB)",
        "url":
          "https://www.flipkart.com/apple-iphone-15-plus-green-256-gb/p/itm9784729def342?pid=MOBGTAGPRSYPVZXR&lid=LSTMOBGTAGPRSYPVZXRFVNQUJ&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&srno=s_1_13&otracker=search&fm=organic&iid=213912bc-f8ef-4842-adb4-0acba6a83335.MOBGTAGPRSYPVZXR.SEARCH&ppt=None&ppn=None&ssid=xgtoqkvx0g0000001709537406866&qH=0b3f45b266a97d70",
        "image":
          "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/6/x/t/-original-imagtc6ffhgm3f2g.jpeg?q=70",
        "price": "₹92,999",
      },
      {
        "id": "MOBGTAGPWKT2VSBB",
        "name": "Apple iPhone 15 Plus (Black, 256 GB)",
        "url":
          "https://www.flipkart.com/apple-iphone-15-plus-black-256-gb/p/itm4b0608e773fc5?pid=MOBGTAGPWKT2VSBB&lid=LSTMOBGTAGPWKT2VSBBYV0FGC&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&srno=s_1_14&otracker=search&fm=organic&iid=213912bc-f8ef-4842-adb4-0acba6a83335.MOBGTAGPWKT2VSBB.SEARCH&ppt=None&ppn=None&ssid=xgtoqkvx0g0000001709537406866&qH=0b3f45b266a97d70",
        "image":
          "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/8/9/n/-original-imagtc6fyrstd4jm.jpeg?q=70",
        "price": "₹92,999",
      },
      {
        "id": "MOBGTAGPKKYDGYYQ",
        "name": "Apple iPhone 15 Plus (Pink, 256 GB)",
        "url":
          "https://www.flipkart.com/apple-iphone-15-plus-pink-256-gb/p/itm4b552466e479e?pid=MOBGTAGPKKYDGYYQ&lid=LSTMOBGTAGPKKYDGYYQUHQZDF&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&srno=s_1_15&otracker=search&fm=organic&iid=213912bc-f8ef-4842-adb4-0acba6a83335.MOBGTAGPKKYDGYYQ.SEARCH&ppt=None&ppn=None&ssid=xgtoqkvx0g0000001709537406866&qH=0b3f45b266a97d70",
        "image":
          "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/c/6/r/-original-imagtc6fn8fecysv.jpeg?q=70",
        "price": "₹92,999",
      },
      {
        "id": "MOBG6VF5Q82T3XRS",
        "name": "Apple iPhone 13 (Midnight, 128 GB)",
        "url":
          "https://www.flipkart.com/apple-iphone-13-midnight-128-gb/p/itmca361aab1c5b0?pid=MOBG6VF5Q82T3XRS&lid=LSTMOBG6VF5Q82T3XRSOXJLM9&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&srno=s_1_16&otracker=search&fm=organic&iid=213912bc-f8ef-4842-adb4-0acba6a83335.MOBG6VF5Q82T3XRS.SEARCH&ppt=None&ppn=None&ssid=xgtoqkvx0g0000001709537406866&qH=0b3f45b266a97d70",
        "image":
          "https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70",
        "price": "₹52,999",
      },
      {
        "id": "MOBGNHT7HJFDHHAC",
        "name": "Apple iPhone 14 (Yellow, 128 GB)",
        "url":
          "https://www.flipkart.com/apple-iphone-14-yellow-128-gb/p/itmaa0785520dd68?pid=MOBGNHT7HJFDHHAC&lid=LSTMOBGNHT7HJFDHHACULC6HX&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&srno=s_1_17&otracker=search&fm=organic&iid=213912bc-f8ef-4842-adb4-0acba6a83335.MOBGNHT7HJFDHHAC.SEARCH&ppt=None&ppn=None&ssid=xgtoqkvx0g0000001709537406866&qH=0b3f45b266a97d70",
        "image":
          "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/l/d/-original-imagnhusa2upmgeq.jpeg?q=70",
        "price": "₹59,999",
      },
      {
        "id": "MOBGHWFHYFJWRHAG",
        "name": "Apple iPhone 14 Plus (Purple, 128 GB)",
        "url":
          "https://www.flipkart.com/apple-iphone-14-plus-purple-128-gb/p/itm7a759a472d863?pid=MOBGHWFHYFJWRHAG&lid=LSTMOBGHWFHYFJWRHAGIWEYST&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&srno=s_1_18&otracker=search&fm=organic&iid=213912bc-f8ef-4842-adb4-0acba6a83335.MOBGHWFHYFJWRHAG.SEARCH&ppt=None&ppn=None&ssid=xgtoqkvx0g0000001709537406866&qH=0b3f45b266a97d70",
        "image":
          "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/v/0/t/-original-imaghxa5rgcv5enm.jpeg?q=70",
        "price": "₹67,999",
      },
      {
        "id": "MOBG6VF5GXVFTQ5Y",
        "name": "Apple iPhone 13 (Pink, 128 GB)",
        "url":
          "https://www.flipkart.com/apple-iphone-13-pink-128-gb/p/itm6e30c6ee045d2?pid=MOBG6VF5GXVFTQ5Y&lid=LSTMOBG6VF5GXVFTQ5YWKHB1V&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&srno=s_1_19&otracker=search&fm=organic&iid=213912bc-f8ef-4842-adb4-0acba6a83335.MOBG6VF5GXVFTQ5Y.SEARCH&ppt=None&ppn=None&ssid=xgtoqkvx0g0000001709537406866&qH=0b3f45b266a97d70",
        "image":
          "https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/8/z/w/iphone-13-mlph3hn-a-apple-original-imag6vzzhrxgazsg.jpeg?q=70",
        "price": "₹52,999",
      },
      {
        "id": "MOBGHWFH4H3MMRAA",
        "name": "Apple iPhone 14 (Midnight, 256 GB)",
        "url":
          "https://www.flipkart.com/apple-iphone-14-midnight-256-gb/p/itmdb32e3c997112?pid=MOBGHWFH4H3MMRAA&lid=LSTMOBGHWFH4H3MMRAAQSJTKY&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&srno=s_1_20&otracker=search&fm=organic&iid=213912bc-f8ef-4842-adb4-0acba6a83335.MOBGHWFH4H3MMRAA.SEARCH&ppt=None&ppn=None&ssid=xgtoqkvx0g0000001709537406866&qH=0b3f45b266a97d70",
        "image":
          "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70",
        "price": "₹68,999",
      },
      {
        "id": "MOBGHWFHQHE7ZPSB",
        "name": "Apple iPhone 14 (Purple, 256 GB)",
        "url":
          "https://www.flipkart.com/apple-iphone-14-purple-256-gb/p/itmb2bf402090fae?pid=MOBGHWFHQHE7ZPSB&lid=LSTMOBGHWFHQHE7ZPSBYPXODK&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&srno=s_1_21&otracker=search&fm=organic&iid=213912bc-f8ef-4842-adb4-0acba6a83335.MOBGHWFHQHE7ZPSB.SEARCH&ppt=None&ppn=None&ssid=xgtoqkvx0g0000001709537406866&qH=0b3f45b266a97d70",
        "image":
          "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/u/f/-original-imaghxa5hvapbfds.jpeg?q=70",
        "price": "₹68,999",
      },
      {
        "id": "MOBGTAGPNRQA7CS3",
        "name": "Apple iPhone 15 Plus (Black, 128 GB)",
        "url":
          "https://www.flipkart.com/apple-iphone-15-plus-black-128-gb/p/itme3a53984760fb?pid=MOBGTAGPNRQA7CS3&lid=LSTMOBGTAGPNRQA7CS3L7XK7L&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&srno=s_1_22&otracker=search&fm=organic&iid=213912bc-f8ef-4842-adb4-0acba6a83335.MOBGTAGPNRQA7CS3.SEARCH&ppt=None&ppn=None&ssid=xgtoqkvx0g0000001709537406866&qH=0b3f45b266a97d70",
        "image":
          "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/8/9/n/-original-imagtc6fyrstd4jm.jpeg?q=70",
        "price": "₹82,999",
      },
      {
        "id": "MOBGTAGPE4F2HAW7",
        "name": "Apple iPhone 15 Plus (Blue, 128 GB)",
        "url":
          "https://www.flipkart.com/apple-iphone-15-plus-blue-128-gb/p/itm4022c14383050?pid=MOBGTAGPE4F2HAW7&lid=LSTMOBGTAGPE4F2HAW7NDYSPY&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&srno=s_1_23&otracker=search&fm=organic&iid=213912bc-f8ef-4842-adb4-0acba6a83335.MOBGTAGPE4F2HAW7.SEARCH&ppt=None&ppn=None&ssid=xgtoqkvx0g0000001709537406866&qH=0b3f45b266a97d70",
        "image":
          "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/1/i/x/-original-imagtc6fhhtqjnr9.jpeg?q=70",
        "price": "₹82,999",
      },
      {
        "id": "MOBGTAGPGF8HJGS7",
        "name": "Apple iPhone 15 (Green, 256 GB)",
        "url":
          "https://www.flipkart.com/apple-iphone-15-green-256-gb/p/itmc24db2484dee9?pid=MOBGTAGPGF8HJGS7&lid=LSTMOBGTAGPGF8HJGS7FKUSRQ&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&srno=s_1_24&otracker=search&fm=organic&iid=213912bc-f8ef-4842-adb4-0acba6a83335.MOBGTAGPGF8HJGS7.SEARCH&ppt=None&ppn=None&ssid=xgtoqkvx0g0000001709537406866&qH=0b3f45b266a97d70",
        "image":
          "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/z/3/-original-imagtc5fqyz8tu4c.jpeg?q=70",
        "price": "₹82,999",
      },
    ];
    res.status(500).json({
      defaultProducts,
      msg: "Some internal server error occur, meanwhile have a look at this",
    });
  }
};
