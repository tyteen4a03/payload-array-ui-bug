import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
    {
      name: "array",
      type: "array",
      fields: [
        {
          name: "test",
          type: "text",
        },
        {
          name: "testuiclient",
          type: 'ui',
          admin: {
            components: {
              Field: '@/ClientTestComponent'
            }
          }
        },
        {
          name: "testuiserver",
          type: 'ui',
          admin: {
            components: {
              Field: '@/ServerTestComponent'
            }
          }
        },
      ],
      admin: {
        components: {
          RowLabel: '@/ServerTestComponent',
        }
      }
    },
    {
      name: "addRowButton",
      type: 'ui',
      admin: {
        components: {
          Field: '@/AddRowButton'
        }
      }
    },
  ],
  upload: true,
}
