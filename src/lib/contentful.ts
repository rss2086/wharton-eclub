import contentful from "contentful";
import type {EntryFieldTypes} from "contentful";
/*

Name	Field Type	Localisation	
Slug
Entry title
Short text
—	
Title
Short text
—	
Subtitle
Long text
—	
Author
Reference
—	
Published date
Date & time
—	
Featured image
Media
—	
Content
Rich text
—	
Tags
Short text, list
—	
Related blog posts
References, many
—	
Is Featured
Boolean
—	
Views
Integer
—	
Author Social Media
References, many
—	
Author Image
Media
—	
Author Description
Long text
—	

*/

export interface BlogPost {
    contentTypeId: "blogPost",
    fields: {
    slug: EntryFieldTypes.Text,
    title: EntryFieldTypes.Text,
    subtitle: EntryFieldTypes.Text,
    author: EntryFieldTypes.Text,
    publishedDate: EntryFieldTypes.Date,
    featuredImage: EntryFieldTypes.AssetLink,
    content: EntryFieldTypes.RichText,
    tags: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>,
    relatedBlogPosts: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>,
    isFeatured: EntryFieldTypes.Boolean,
    views: EntryFieldTypes.Integer,
    authorSocialMedia: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>,
    authorImage: EntryFieldTypes.AssetLink,
    authorDescription: EntryFieldTypes.Text,
    }
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});