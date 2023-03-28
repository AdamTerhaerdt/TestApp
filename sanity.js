import 'url-search-params-polyfill';
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url"

export const client = createClient({
    projectId: '3s47rjjr',
    dataset: 'production',
    apiVersion: '2023-03-05',
    useCdn: true,
})

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;