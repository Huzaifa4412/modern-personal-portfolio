import { defineType, defineField } from "sanity";

export default defineType({
    name: "project",
    title: "Projects",
    type: "document",
    fields: [
        defineField({ name: "title", type: "string", title: 'Title' }),
        // defineField({ name: "slug", type: "slug", options: { source: "title" } }),
        defineField({ name: "description", type: "text", title: 'Description' }),
        // defineField({ name: "tech", type: "array", of: [{ type: "string" }] }),
        defineField({ name: "liveUrl", type: "url", title: 'Live URL' }),
        defineField({ name: "image", type: "image", options: { hotspot: true }, title: 'Image' }),
    ],
});
