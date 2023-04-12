import { IProductAdded } from "../../../context/ShopCartContext";
import { NextApiRequest, NextApiResponse } from "next";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

interface ICustomNextApiRequest extends NextApiRequest {
  body: Array<IProductAdded>;
}

export default async function handler(
  req: ICustomNextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const session = await stripe.checkout.sessions.create({
        line_items: req.body.map((product) => {
          const img = product.productImage
            .replace(
              "image-",
              "https://cdn.sanity.io/images/0pe18ibm/production/"
            )
            .replace(/-(jpg|png|webp|jpeg)$/i, ".$1");

          return {
            price_data: {
              currency: "eur",
              unit_amount: product.productPrice * 100,
              product_data: {
                name: product.productName,
                images: [img],
              },
            },
            quantity: product.productQuantity,
          };
        }),
        mode: "payment",
        shipping_options: [
          {
            shipping_rate: "shr_1Mw2WDHcRskR6ICciCI65t8Q",
          },
        ],
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });
      res.json(session);

      // Here I used any type beacause TypeScript cannot determine the type of the error that is being caught in the catch block. This is because the try block can potentially throw any type of error, and TypeScript cannot infer the type of the error at compile-time
    } catch (err: any) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
