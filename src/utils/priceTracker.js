import axios from "axios";
import cheerio from "cheerio";

export const fetchPrice = async (url) => {
  try {
    const resp = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
    });

    let $ = cheerio.load(resp.data);
    const priceString = $(".CEmiEU").find("._30jeq3").text();
    const price = parseInt(Number(priceString.replace(/[^0-9.-]+/g, "")));
    return price;
  } catch (error) {
    console.log(error);
  }
};
