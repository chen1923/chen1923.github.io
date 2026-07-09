/* ===========================================================================
   Site configuration — edit images, links, and fonts here.
   ---------------------------------------------------------------------------
   This is the single place to change:
     • which figure/photo files the page uses        -> images
     • profile / social / CV links + contact email   -> links
     • which web fonts load and the font-family stack -> fonts
   main.js reads this object (window.SITE) and wires everything into the page.
   Per-publication DOI links live inline in index.html (they belong to each
   publication entry), not here.
   =========================================================================== */

window.SITE = {

  /* ---- Fonts ----------------------------------------------------------
     googleHref: the <link> stylesheet main.js injects into <head>.
                 Set to null to skip web fonts and use system fonts only.
     serif / sans / mono: CSS font-family stacks applied to --serif/--sans/--mono.
     To swap fonts: change the family on Google Fonts, update googleHref, and
     put the new family first in the matching stack below.                */
  fonts: {
    googleHref: "https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,500;0,8..60,600;1,8..60,400&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap",
    serif: '"Source Serif 4", "Iowan Old Style", Georgia, "Times New Roman", serif',
    sans:  '"Inter", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif',
    mono:  '"IBM Plex Mono", "SF Mono", Menlo, monospace',
  },

  /* ---- Images (keys match data-img="..." in index.html) -------------- */
  images: {
    avatar:             "fig/avatar.png",          // hero portrait
    aboutPoly:          "fig/polycrystal-niti.png", // about — polycrystalline NiTi microstructure
    projectModulation:  "fig/mt_poly.png",         // 01 — 1D nanoscale concentration modulations
    projectConfinement: "fig/soft_hard.png",       // 02 — soft & hard confinement
    projectNi4Ti3:      "fig/ppt.jpeg",            // 03 — Ni4Ti3 precipitation / dissolution
    projectSuperML:     "fig/superconduct_ml.png", // 04 — superconducting ML
    projectAgentMCP:    "fig/mcp_visual.png",      // 05 — agentic AI + MCP
  },

  /* ---- Links (keys match data-link="..." in index.html) -------------- */
  links: {
    email:    "chenzxjeremy@gmail.com",
    email2:   "chenzxjeremy@163.com",
    orcid:    "https://orcid.org/0000-0002-8280-201X",
    scopus:   "https://www.scopus.com/inward/authorDetails.url?authorID=57253838400&partnerID=MN8TOARS",
    scholar:  "https://scholar.google.com/citations?hl=en&user=aPyzF-wAAAAJ",
    linkedin: "https://www.linkedin.com/in/zexu-chen-a43274191",
    github:   "https://github.com/chen1923",
    cv:       "doc/Zexu_Chen_CV.pdf",
    resume:   "doc/Zexu_Chen_Resume.pdf",
  },

};
