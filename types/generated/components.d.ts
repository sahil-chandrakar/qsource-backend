import type { Schema, Struct } from '@strapi/strapi';

export interface OfferSection extends Struct.ComponentSchema {
  collectionName: 'components_offer_sections';
  info: {
    displayName: 'section';
  };
  attributes: {
    Description: Schema.Attribute.Blocks;
    Heading: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'offer.section': OfferSection;
    }
  }
}
