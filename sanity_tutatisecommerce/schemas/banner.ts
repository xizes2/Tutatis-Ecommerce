const fieldsNames = [
  "buttonText",
  "product",
  "description",
  "smallText",
  "midText",
  "largeText1",
  "largeText2",
  "discount",
  "saleTime",
];

export default {
  name: "banner",
  title: "Banner",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    ...fieldsNames.map((fieldName) => {
      return {
        name: fieldName,
        title: fieldName[0].toUpperCase() + fieldName.slice(1),
        type: "string",
      };
    }),
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "product",
        maxLength: 90,
      },
    },
  ],
};
