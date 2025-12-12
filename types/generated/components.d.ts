import type { Schema, Struct } from '@strapi/strapi';

export interface LayoutServicesSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_services_sections';
  info: {
    displayName: 'ServiceCard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    iconKey: Schema.Attribute.String;
    title: Schema.Attribute.String;
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
      'layout.services-section': LayoutServicesSection;
      'offer.section': OfferSection;
    }
  }
}
