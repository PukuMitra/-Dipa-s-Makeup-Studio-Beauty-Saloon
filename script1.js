const schemaData = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "name": "Dipa’s Makeup Studio & Beauty Saloon",
  "telephone": "+919547837724",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Gurap Beltala, opposite Gurap Police Station",
    "addressLocality": "Gurap",
    "addressRegion": "West Bengal",
    "postalCode": "712303",
    "addressCountry": "IN"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "10:00",
      "closes": "21:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "15:30",
      "closes": "21:30"
    }
  ]
};

const scriptEl = document.createElement("script");
scriptEl.type = "application/ld+json";
scriptEl.text = JSON.stringify(schemaData);
document.head.appendChild(scriptEl);

//  {
//         "@context": "https://schema.org",
//         "@type": "BeautySalon",
//         "name": "Dipa’s Makeup Studio & Beauty Saloon",
//         "telephone": "+919547837724",
//         "address": {
//           "@type": "PostalAddress",
//           "streetAddress": "Gurap Beltala, opposite Gurap Police Station",
//           "addressLocality": "Gurap",
//           "addressRegion": "West Bengal",
//           "postalCode": "712303",
//           "addressCountry": "IN"
//         },
//         "openingHoursSpecification": [
//           {
//             "@type": "OpeningHoursSpecification",
//             "dayOfWeek": [
//               "Monday",
//               "Tuesday",
//               "Wednesday",
//               "Thursday",
//               "Friday",
//               "Saturday"
//             ],
//             "opens": "10:00",
//             "closes": "21:30"
//           },
//           {
//             "@type": "OpeningHoursSpecification",
//             "dayOfWeek": "Sunday",
//             "opens": "15:30",
//             "closes": "21:30"
//           }
//         ]
//       }