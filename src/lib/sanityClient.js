import { createClient } from '@sanity/client';

export const Client = createClient({
  projectId: '11so2e6m', 
  dataset: 'production', // or the name you chose for your dataset
  apiVersion: '2023-05-03', // Use today's date or the version you prefer
  useCdn: true, // Set to false if you want to ensure fresh data
});
