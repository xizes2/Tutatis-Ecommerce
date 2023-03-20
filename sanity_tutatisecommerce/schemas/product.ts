export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{type: "image"}],
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      validation: (Rule: {
        max: (arg0: number) => {
          (): void;
          new (): void;
          warning: {(arg0: string): void; new (): void};
        };
      }): void => Rule.max(30).warning("Max 30 characters!"),
    },
  ],
};
