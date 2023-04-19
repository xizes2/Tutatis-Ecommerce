const fieldsNames = [
  "buttonText",
  "product",
  "description",
  "smallText",
  "midText",
  "footerBannerText",
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
      name: "imageHeroBanner",
      title: "Image Hero Banner",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "imageFooterBanner",
      title: "Image Footer Banner",
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
