import { IProductAdded } from "../../../context/ShopCartContext";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(
  req: { method: string; headers: { origin: any }; body: Array<IProductAdded> },
  res: {
    redirect: (arg0: number, arg1: any) => void;
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: any): void; new (): any };
      end: { (arg0: string): void; new (): any };
    };
    setHeader: (arg0: string, arg1: string) => void;
  }
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
              product_data: {
                name: product.productName,
                images: [img],
              },
              unit_amount: product.productPrice * 100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: product.productQuantity,
          };
        }),
        mode: "payment",
        shipping_options: [
          {
            shipping_rate_data: "shr_1MvKLFHcRskR6ICcZmk6qdkq",
          },
          ,
        ],
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });
      res.redirect(303, session.url);

      // Here I used any type beacause TypeScript cannot determine the type of the error that is being caught in the catch block. This is because the try block can potentially throw any type of error, and TypeScript cannot infer the type of the error at compile-time
    } catch (err: any) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
