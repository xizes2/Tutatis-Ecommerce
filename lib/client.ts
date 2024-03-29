import SanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = SanityClient({
  projectId: "0pe18ibm",
  dataset: "production",
  apiVersion: "2023-03-10",
  useCdn: true,
  token: process.env.SANITY_TOKEN,
  ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: string) => builder.image(source);
