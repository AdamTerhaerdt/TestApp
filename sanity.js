import { defineConfig } from '@sanity/client'
import { ImageUrlBuilder } from "@sanity/image-url";

const client = defineConfig({
    projectId: "3s47rjjr",
    dataset: "production",
    useCdn: true,
});

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;
