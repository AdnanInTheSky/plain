// pages.config.js (updated)
export default {
  title: "NGO Article Site",
  description: "A static publishing site for NGO updates",
  contentDir: "content/articles",
  dataDir: "data",
  outputDir: ".",
  collections: {
    team: {
      dir: "content/team",
      slug: "{{name | slugify}}",
      output: false,
      dataOutput: "team.json" // 👈 This tells PagesCMS to generate data/team.json
    }
  },
  routes: {
    "/": "index.html",
    "/activities": "activities.html",
    "/article/:id": "article.html",
    "/team": "team.html",
    "/about": "about.html",
    "/contact": "contact.html"
  }
};