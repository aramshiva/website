import fs from "fs";
import { Feed } from "feed";
import { getAllPosts } from "../../lib/api";

export default async function generateRssFeed() {
   const site_url = "https://aram.sh";
   const allPosts = getAllPosts([
      "title",
      "date",
      "slug",
      "author",
      "coverImage",
      "content",
   ]);

   const feedOptions = {
      title: "Aram's blog",
      description: "Welcome to my blog! I infrequently post here!",
      id: site_url,
      link: site_url,
      image: `${site_url}/favicon/favicon.png`,
      generator: "Feed for Node.js",
      favicon: `${site_url}/favicon/favicon.png`,
      copyright: `All rights reserved ${new Date().getFullYear()}, Aram Shiva`,
      feedLinks: {
         rss2: `${site_url}/blog/rss.xml`,
      },
   };

   const feed = new Feed(feedOptions);

   allPosts.forEach((post) => {
      feed.addItem({
         title: post.title,
         id: `${site_url}/blog/posts/${post.slug}`,
         link: `${site_url}/blog/posts/${post.slug}`,
         description: post.description,
         date: new Date(post.date),
         image: post.coverImage,
         content: post.content,
      });
   });

   fs.writeFileSync("./public/blog/rss.xml", feed.rss2());
}
