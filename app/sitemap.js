export default function sitemap() {
  return ["", "/privacy", "/terms"].map((p) => ({ url: `https://mapletech.world${p}` }));
}
