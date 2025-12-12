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
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.services-section': LayoutServicesSection;
    }
  }
}
