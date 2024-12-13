export const products = {
  mattresses: [
    {
      id: "koala-mattress",
      title: "Koala Mattress",
      description:
        "Australia's top-rated mattress, enhanced support and comfort.",
      price: {
        amount: 1250,
        currency: "USD",
        symbol: "$",
      },
      images: ["koala-mattress-1.webp"],
      options: {
        sizes: [
          { id: "single", label: "Single" },
          { id: "king-single", label: "King Single" },
          { id: "double", label: "Double" },
          { id: "queen", label: "Queen" },
          { id: "king", label: "King" },
          { id: "super-king", label: "Super King" },
        ],
      },
      tags: [
        { id: "most-awarded", label: "Most Awarded" },
        { id: "upgraded", label: "Upgraded" },
      ],
      features: [
        { id: "trial", label: "120-night trial" },
        { id: "delivery", label: "Fast & free delivery" },
        { id: "warranty", label: "10-year warranty" },
      ],
      details: [
        {
          id: "product-description",
          label: "Product description",
          info: "Australia’s top rated mattress is now even better. With 17% more Kloudcell® and the choice of flippable firmness or partner preference, the Koala Mattress delivers life changing sleep.",
        },
        {
          id: "dimensions",
          label: "Dimensions",
          info: [
            { label: "Height", value: "25 cm" },
            { label: "Width", value: "153 cm" },
            { label: "Length", value: "203 cm" },
            { label: "Weight", value: "33.35 kg" },
          ],
        },
        {
          id: "materials-sustainability-care",
          label: "Materials, sustainability & care",
          info: [
            {
              label: "Ticking Fabric",
              value: "83% Recycled Polyester, 17% carbon-zero TENCEL™ Lyocell",
            },
            {
              label: "Side Wall Fabric",
              value: "65% Polyester, 35% Recycled Polyester",
            },
            {
              label: "Anti-Slip Base Fabric",
              value: "100% Polyester with PVC Dot",
            },
            { label: "Other Fabrics", value: "100% Polyester" },
            {
              label: "Sustainability",
              value:
                "CertiPUR-US® certified Foam - Cover made with carbon-zero TENCEL™ Lyocell",
            },
            {
              label: "Country of Origin",
              value: "Designed by Koala in Sydney, Manufactured in China.",
            },
            {
              label: "Protect & Care",
              value: "How to care for your new Koala Mattress",
            },
            {
              label: "Regular care (weekly)",
              value: [
                [
                  "Spot clean only with warm water & mild detergent.",
                  "To dry, lay flat away from direct sunlight.",
                  "Allow to thoroughly dry before re-use.",
                  "Vacuum mattress regularly using low suction.",
                  "Rotate mattress regularly.",
                  "Do not soak filling.",
                  "Do not bleach.",
                  "Do not tumble dry.",
                  "Do not dry clean.",
                  "Do not iron.",
                ],
                "Derived from sustainable wood sources, TENCEL™ Lyocell fibres are naturally soft to the touch and offer long-lasting comfort. Carbon-zero TENCEL™ Lyocell fibers are certified as carbon neutral products by a third party partner. These fibers help mitigate climate impact and protect the environment.",
              ],
            },
          ],
        },
        {
          id: "delivery",
          label: "Delivery",
          info: [
            "We offer same day delivery on furniture and mattress orders in Sydney, Melbourne, Brisbane, Perth and Adelaide (for in-stock products). Delivery is FREE on mattresses and small items and our fast & flexible furniture delivery lets you choose a window that suits you.",
            "Free metro delivery on any order with a mattress. Regional deliveries are charged per item.",
            "Sydney, Melbourne and Brisbane Metro customers can also select premium delivery that includes assembly and rubbish removal on select items at an additional cost.",
            {
              label: "How the Koala Mattress (Queen) Arrives to You",
              value: [
                {
                  label: "Box 1 - Base Layer",
                  value: [
                    "Dimensions: W161 × D40 × H40cm",
                    "Boxed weight: 22.85kg",
                  ],
                },
                {
                  label: "Box 2 - Comfort Layer",
                  value: [
                    "Dimensions: W158 × D29 × H29cm",
                    "Boxed weight: 14.15kg",
                  ],
                },
              ],
            },
          ],
        },
      ],
      reviews: {
        overallRating: {
          score: 4.7,
          quantity: 1911,
        },
        userReviews: [
          {
            user: "User Name",
            date: "2024-12-12T11:53:55.707Z",
            rating: 5,
            title: "Excellent",
            review:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat fugit aliquam minus. Fuga aliquid quasi tempora nobis, maiores quos molestias optio officiis quae libero minima beatae odio provident quam eius!",
          },
        ],
      },
    },
  ],
};
