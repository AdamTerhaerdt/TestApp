import 'url-search-params-polyfill';
import { createClient } from "@sanity/client";

export const client = createClient({
    projectId: '3s47rjjr',
    dataset: 'production',
    apiVersion: '2023-03-05',
    useCdn: true,
})

export default client;