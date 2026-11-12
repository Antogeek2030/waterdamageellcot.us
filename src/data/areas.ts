export interface Area {
  slug: string;
  name: string;
  description: string;
  nearbyNote: string;
}

export const areas: Area[] = [
  {
    slug: 'ellicott-city',
    name: 'Ellicott City',
    description: 'As a core service community, we provide fast water damage restoration throughout Ellicott City, including historic Main Street areas and surrounding neighborhoods. Our local knowledge helps us respond efficiently to the unique challenges of older homes and varied terrain in this historic Maryland town.',
    nearbyNote: 'Serving all Ellicott City ZIP codes and nearby streets.',
  },
  {
    slug: 'westminster',
    name: 'Westminster',
    description: 'Based near Westminster, we offer comprehensive water damage services to homes and businesses across the city. From residential neighborhoods to commercial districts, our team is ready for emergency extraction, drying, and full restoration.',
    nearbyNote: 'Our team is familiar with Westminster and Carroll County properties.',
  },
  {
    slug: 'columbia',
    name: 'Columbia',
    description: 'Columbia’s planned communities and diverse housing stock benefit from our responsive water damage restoration. We handle everything from townhome leaks to larger home floods with care and clear communication.',
    nearbyNote: 'Convenient service across all Columbia villages.',
  },
  {
    slug: 'catonsville',
    name: 'Catonsville',
    description: 'Residents and businesses in Catonsville rely on us for prompt water damage response. Whether dealing with basement seepage or storm-related intrusion, we bring professional equipment and experienced technicians.',
    nearbyNote: 'Serving Catonsville and adjacent Baltimore County areas.',
  },
  {
    slug: 'laurel',
    name: 'Laurel',
    description: 'Our service area includes Laurel, where we provide full water damage restoration for homes and commercial properties. Fast extraction and thorough drying help limit disruption after leaks or flooding.',
    nearbyNote: 'Covering Laurel and nearby Prince George’s and Howard County locations.',
  },
  {
    slug: 'clarksville',
    name: 'Clarksville',
    description: 'Clarksville homeowners trust us for discreet, professional water damage services. We understand the value of efficient work that respects your property and schedule.',
    nearbyNote: 'Serving Clarksville and the surrounding rural-residential areas.',
  },
  {
    slug: 'highland',
    name: 'Highland',
    description: 'From Highland we extend reliable water damage restoration to properties that need careful attention after storms or plumbing failures. Our goal is always complete drying and a return to normal.',
    nearbyNote: 'Convenient access to Highland and nearby Howard County communities.',
  },
  {
    slug: 'odenton',
    name: 'Odenton',
    description: 'Odenton residents can count on us for emergency water extraction and full restoration services. We respond to calls across the area with the equipment and expertise needed for effective results.',
    nearbyNote: 'Serving Odenton and neighboring Anne Arundel County locations.',
  },
];

export function getAreaBySlug(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}
