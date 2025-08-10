"use strict";

const {
  useEffect,
  useMemo,
  useRef,
  useState
} = React;

// --- Inline SVG Icons (replaces lucide-react) ---
const Icon = ({
  name,
  className
}) => {
  const icons = {
    search: /*#__PURE__*/React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: className
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "8"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "21",
      y1: "21",
      x2: "16.65",
      y2: "16.65"
    })),
    x: /*#__PURE__*/React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: className
    }, /*#__PURE__*/React.createElement("line", {
      x1: "18",
      y1: "6",
      x2: "6",
      y2: "18"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "6",
      y1: "6",
      x2: "18",
      y2: "18"
    })),
    sparkles: /*#__PURE__*/React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: className
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 3L9.5 8.5L4 11L9.5 13.5L12 19L14.5 13.5L20 11L14.5 8.5L12 3z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 3v4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19 17v4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 5h4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M17 19h4"
    })),
    chevronDown: /*#__PURE__*/React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: className
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "6 9 12 15 18 9"
    })),
    externalLink: /*#__PURE__*/React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: className
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "15 3 21 3 21 9"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "10",
      y1: "14",
      x2: "21",
      y2: "3"
    })),
    history: /*#__PURE__*/React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: className
    }, /*#__PURE__*/React.createElement("path", {
      d: "M1 4v6h6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3.51 15a9 9 0 1 0 2.19-9.51L1 10"
    })),
    trash2: /*#__PURE__*/React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: className
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "3 6 5 6 21 6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "10",
      y1: "11",
      x2: "10",
      y2: "17"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "14",
      y1: "11",
      x2: "14",
      y2: "17"
    })),
    clipboardCopy: /*#__PURE__*/React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: className
    }, /*#__PURE__*/React.createElement("rect", {
      x: "9",
      y: "9",
      width: "13",
      height: "13",
      rx: "2",
      ry: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
    })),
    info: /*#__PURE__*/React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: className
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "16",
      x2: "12",
      y2: "12"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "8",
      x2: "12.01",
      y2: "8"
    })),
    check: /*#__PURE__*/React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: className
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "20 6 9 17 4 12"
    })),
    bookOpen: /*#__PURE__*/React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: className
    }, /*#__PURE__*/React.createElement("path", {
      d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
    })),
    book: /*#__PURE__*/React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: className
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
    })),
    utensils: /*#__PURE__*/React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: className
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7 2v20"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3z"
    })),
    plane: /*#__PURE__*/React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: className
    }, /*#__PURE__*/React.createElement("path", {
      d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
    })),
    users: /*#__PURE__*/React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: className
    }, /*#__PURE__*/React.createElement("path", {
      d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "7",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M22 21v-2a4 4 0 0 0-3-3.87"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 3.13a4 4 0 0 1 0 7.75"
    })),
    trendingUp: /*#__PURE__*/React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: className
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "23 6 13.5 15.5 8.5 10.5 1 18"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "17 6 23 6 23 12"
    })),
    podcast: /*#__PURE__*/React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: className
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "4"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "2",
      y: "8",
      width: "20",
      height: "8",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 16v3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 19h8"
    })),
    magnet: /*#__PURE__*/React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: className
    }, /*#__PURE__*/React.createElement("path", {
      d: "M14 9l-4 4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14 2H8a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 2v4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14 2v4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 16h4"
    }))
  };
  return icons[name] || null;
};

// --- Search Engines (Massively Expanded) ---
const ENGINES = {
  web: {
    Google: q => `https://www.google.com/search?q=${q}`,
    Bing: q => `https://www.bing.com/search?q=${q}`,
    DuckDuckGo: q => `https://duckduckgo.com/?q=${q}`,
    Brave: q => `https://search.brave.com/search?q=${q}`,
    Ecosia: q => `https://www.ecosia.org/search?q=${q}`,
    Perplexity: q => `https://www.perplexity.ai/search?q=${q}`,
    You: q => `https://you.com/search?q=${q}`,
    Startpage: q => `https://www.startpage.com/search?q=${q}`,
    Qwant: q => `https://www.qwant.com/?q=${q}`,
    Searx: q => `https://searx.space/search?q=${q}`,
    MetaGer: q => `https://metager.org/meta/meta.ger3?eingabe=${q}`,
    Swisscows: q => `https://swisscows.com/web?query=${q}`
  },
  news: {
    "Google News": q => `https://news.google.com/search?q=${q}`,
    Reuters: q => `https://www.reuters.com/site-search/?query=${q}`,
    "Associated Press": q => `https://apnews.com/search?q=${q}`,
    BBC: q => `https://www.bbc.co.uk/search?q=${q}`,
    "The Guardian": q => `https://www.theguardian.com/search?q=${q}`,
    "New York Times": q => `https://www.nytimes.com/search?query=${q}`,
    Clarín: q => `https://www.clarin.com/buscar/${q}`,
    "La Nación": q => `https://www.lanacion.com.ar/buscador/?query=${q}`,
    Infobae: q => `https://www.infobae.com/buscador/?s=${q}`,
    Perfil: q => `https://www.perfil.com/buscador?q=${q}`,
    "El Cronista": q => `https://www.cronista.com/search/?q=${q}`,
    "Ámbito": q => `https://www.ambito.com/buscar?q=${q}`
  },
  images: {
    Google: q => `https://www.google.com/search?q=${q}&tbm=isch`,
    Bing: q => `https://www.bing.com/images/search?q=${q}`,
    Unsplash: q => `https://unsplash.com/s/photos/${q}`,
    Pexels: q => `https://www.pexels.com/search/${q}`,
    Pinterest: q => `https://www.pinterest.com/search/pins/?q=${q}`,
    Flickr: q => `https://www.flickr.com/search/?text=${q}`,
    "Getty Images": q => `https://www.gettyimages.es/search/2/image?phrase=${q}`,
    "Adobe Stock": q => `https://stock.adobe.com/search?k=${q}`,
    DeviantArt: q => `https://www.deviantart.com/search?q=${q}`
  },
  videos: {
    YouTube: q => `https://www.youtube.com/results?search_query=${q}`,
    Vimeo: q => `https://vimeo.com/search?q=${q}`,
    TikTok: q => `https://www.tiktok.com/search?q=${q}`,
    Dailymotion: q => `https://www.dailymotion.com/search/${q}`,
    Twitch: q => `https://www.twitch.tv/search?term=${q}`,
    Rumble: q => `https://rumble.com/search/video?q=${q}`,
    Odysee: q => `https://odysee.com/$/search?q=${q}`
  },
  shopping: {
    "Mercado Libre": q => `https://listado.mercadolibre.com.ar/${q}`,
    Amazon: q => `https://www.amazon.com/s?k=${q}`,
    eBay: q => `https://www.ebay.com/sch/i.html?_nkw=${q}`,
    "Google Shopping": q => `https://www.google.com/search?q=${q}&tbm=shop`,
    "Tiendamia": q => `https://tiendamia.com/ar/search?q=${q}`,
    "Buscapé": q => `https://www.buscape.com.ar/search?q=${q}`,
    Frávega: q => `https://www.fravega.com/l/?keyword=${q}`,
    Musimundo: q => `https://www.musimundo.com/search?=${q}`,
    "OLX Argentina": q => `https://www.olx.com.ar/items/q-${q}`
  },
  jobs: {
    LinkedIn: q => `https://www.linkedin.com/jobs/search?keywords=${q}`,
    Indeed: q => `https://ar.indeed.com/jobs?q=${q}`,
    Bumeran: q => `https://www.bumeran.com.ar/empleos-busqueda-${q}.html`,
    "Zona Jobs": q => `https://www.zonajobs.com.ar/empleos-busqueda-${q}.html`,
    Computrabajo: q => `https://www.computrabajo.com.ar/ofertas-de-trabajo/?q=${q}`,
    "Get on Board": q => `https://www.getonbrd.com/jobs/${q}`,
    Wellfound: q => `https://wellfound.com/jobs?q=${q}`,
    Upwork: q => `https://www.upwork.com/search/jobs/?q=${q}`
  },
  maps: {
    "Google Maps": q => `https://www.google.com/maps/search/${q}`,
    Waze: q => `https://www.waze.com/ul?q=${q}`,
    OpenStreetMap: q => `https://www.openstreetmap.org/search?query=${q}`,
    "Bing Maps": q => `https://www.bing.com/maps?q=${q}`,
    "HERE WeGo": q => `https://wego.here.com/search/${q}`,
    "Yandex Maps": q => `https://yandex.com/maps/?text=${q}`
  },
  dev: {
    GitHub: q => `https://github.com/search?q=${q}`,
    StackOverflow: q => `https://stackoverflow.com/search?q=${q}`,
    npm: q => `https://www.npmjs.com/search?q=${q}`,
    MDN: q => `https://developer.mozilla.org/search?q=${q}`,
    "crates.io": q => `https://crates.io/search?q=${q}`,
    DockerHub: q => `https://hub.docker.com/search?q=${q}`,
    GitLab: q => `https://gitlab.com/search?search=${q}`,
    SourceForge: q => `https://sourceforge.net/directory/?q=${q}`
  },
  social: {
    "X (Twitter)": q => `https://twitter.com/search?q=${q}`,
    Reddit: q => `https://www.reddit.com/search/?q=${q}`,
    Instagram: q => `https://www.instagram.com/explore/tags/${q}/`,
    Facebook: q => `https://www.facebook.com/search/top/?q=${q}`,
    TikTok: q => `https://www.tiktok.com/search/user?q=${q}`,
    Mastodon: q => `https://mastodon.social/explore/tags/${q}`,
    Tumblr: q => `https://www.tumblr.com/search/${q}`
  },
  academic: {
    "Google Scholar": q => `https://scholar.google.com/scholar?q=${q}`,
    JSTOR: q => `https://www.jstor.org/action/doBasicSearch?Query=${q}`,
    SciELO: q => `https://search.scielo.org/?q=${q}`,
    arXiv: q => `https://arxiv.org/search/?query=${q}`,
    PubMed: q => `https://pubmed.ncbi.nlm.nih.gov/?term=${q}`,
    "Semantic Scholar": q => `https://www.semanticscholar.org/search?q=${q}`,
    BASE: q => `https://www.base-search.net/Search/Results?q=${q}`
  },
  travel: {
    Skyscanner: q => `https://www.skyscanner.net/search/flights?q=${q}`,
    "Booking.com": q => `https://www.booking.com/searchresults.html?ss=${q}`,
    Airbnb: q => `https://www.airbnb.com/s/${q}`,
    "Despegar.com": q => `https://www.despegar.com.ar/search/global/${q}`,
    Kayak: q => `https://www.kayak.com.ar/flights?q=${q}`,
    Expedia: q => `https://www.expedia.com/Hotel-Search?q=${q}`,
    Almundo: q => `https://almundo.com.ar/flights/results/${q}`
  },
  recipes: {
    YouTube: q => `https://www.youtube.com/results?search_query=${q}+receta`,
    Allrecipes: q => `https://www.allrecipes.com/search/results/?search=${q}`,
    "Kiwilimón": q => `https://www.kiwilimon.com/busqueda?s=${q}`,
    "Bon Appetit": q => `https://www.bonappetit.com/search?q=${q}`,
    Epicurious: q => `https://www.epicurious.com/search?q=${q}`,
    "Food.com": q => `https://www.food.com/search/${q}`
  },
  finance: {
    "Google Finance": q => `https://www.google.com/finance/search?q=${q}`,
    "Yahoo Finance": q => `https://finance.yahoo.com/lookup?s=${q}`,
    Bloomberg: q => `https://www.bloomberg.com/search?query=${q}`,
    "TradingView": q => `https://www.tradingview.com/symbols/${q}/`,
    Reuters: q => `https://www.reuters.com/search/news?blob=${q}`,
    "Investing.com": q => `https://www.investing.com/search/?q=${q}`
  },
  books: {
    "Google Books": q => `https://www.google.com/search?tbm=bks&q=${q}`,
    Goodreads: q => `https://www.goodreads.com/search?q=${q}`,
    Amazon: q => `https://www.amazon.com/s?k=${q}&i=stripbooks`,
    "Internet Archive": q => `https://archive.org/search.php?query=${q}&mediatype=texts`,
    "Project Gutenberg": q => `https://www.gutenberg.org/ebooks/search/?query=${q}`,
    "Cúspide": q => `https://www.cuspide.com/catalogsearch/result/?q=${q}`
  },
  podcasts: {
    Spotify: q => `https://open.spotify.com/search/${q}`,
    "Apple Podcasts": q => `https://podcasts.apple.com/us/search?term=${q}`,
    "Google Podcasts": q => `https://podcasts.google.com/search/${q}`,
    "Listen Notes": q => `https://www.listennotes.com/search/?q=${q}`,
    iVoox: q => `https://www.ivoox.com/escuchar-audios_${q}_1.html`,
    "Pocket Casts": q => `https://play.pocketcasts.com/web/search?q=${q}`
  },
  torrents: {
    "1337x": q => `https://1337x.to/search/${q}/1/`,
    "The Pirate Bay": q => `https://thepiratebay.org/search.php?q=${q}`,
    RARBG: q => `https://rargb.to/search?search=${q}`,
    YTS: q => `https://yts.mx/browse-movies/${q}/all/all/0/latest/0/all`,
    EZTV: q => `https://eztv.re/search/${q}`
  }
};
const CATEGORIES = [{
  key: "web",
  label: "Web",
  icon: /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    className: "h-4 w-4"
  })
}, {
  key: "news",
  label: "Noticias",
  icon: /*#__PURE__*/React.createElement("span", {
    className: "text-lg"
  }, "\uD83D\uDCF0")
}, {
  key: "images",
  label: "Imágenes",
  icon: /*#__PURE__*/React.createElement("span", {
    className: "text-lg"
  }, "\uD83D\uDDBC\uFE0F")
}, {
  key: "videos",
  label: "Videos",
  icon: /*#__PURE__*/React.createElement("span", {
    className: "text-lg"
  }, "\uD83C\uDFAC")
}, {
  key: "shopping",
  label: "Compras",
  icon: /*#__PURE__*/React.createElement("span", {
    className: "text-lg"
  }, "\uD83D\uDED2")
}, {
  key: "jobs",
  label: "Empleos",
  icon: /*#__PURE__*/React.createElement("span", {
    className: "text-lg"
  }, "\uD83D\uDCBC")
}, {
  key: "maps",
  label: "Mapas",
  icon: /*#__PURE__*/React.createElement("span", {
    className: "text-lg"
  }, "\uD83D\uDDFA\uFE0F")
}, {
  key: "dev",
  label: "Dev",
  icon: /*#__PURE__*/React.createElement("span", {
    className: "text-lg"
  }, "\uD83D\uDCBB")
}, {
  key: "social",
  label: "Social",
  icon: /*#__PURE__*/React.createElement(Icon, {
    name: "users",
    className: "h-4 w-4"
  })
}, {
  key: "academic",
  label: "Académico",
  icon: /*#__PURE__*/React.createElement(Icon, {
    name: "bookOpen",
    className: "h-4 w-4"
  })
}, {
  key: "travel",
  label: "Viajes",
  icon: /*#__PURE__*/React.createElement(Icon, {
    name: "plane",
    className: "h-4 w-4"
  })
}, {
  key: "recipes",
  label: "Recetas",
  icon: /*#__PURE__*/React.createElement(Icon, {
    name: "utensils",
    className: "h-4 w-4"
  })
}, {
  key: "finance",
  label: "Finanzas",
  icon: /*#__PURE__*/React.createElement(Icon, {
    name: "trendingUp",
    className: "h-4 w-4"
  })
}, {
  key: "books",
  label: "Libros",
  icon: /*#__PURE__*/React.createElement(Icon, {
    name: "book",
    className: "h-4 w-4"
  })
}, {
  key: "podcasts",
  label: "Podcasts",
  icon: /*#__PURE__*/React.createElement(Icon, {
    name: "podcast",
    className: "h-4 w-4"
  })
}, {
  key: "torrents",
  label: "Torrents",
  icon: /*#__PURE__*/React.createElement(Icon, {
    name: "magnet",
    className: "h-4 w-4"
  })
}];

// --- Utility Functions ---
const openUrlSafe = url => window.open(url, "_blank", "noopener,noreferrer");
const enc = s => encodeURIComponent(s.trim());

// --- UI Components ---
function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  children
}) {
  if (!isOpen) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-gray-800 rounded-xl shadow-2xl p-6 w-full max-w-sm text-white border border-gray-700 fade-in",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-bold text-teal-300"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 text-gray-300 text-sm"
  }, children), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 flex justify-end gap-3"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "px-4 py-2 rounded-md text-sm font-medium bg-gray-600 hover:bg-gray-500 transition-colors"
  }, "Cancelar"), /*#__PURE__*/React.createElement("button", {
    onClick: onConfirm,
    className: "px-4 py-2 rounded-md text-sm font-medium bg-teal-600 hover:bg-teal-500 transition-colors"
  }, "Continuar"))));
}
function SmartSearchApp() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("web");
  const [recents, setRecents] = useState([]);
  const [isCopied, setIsCopied] = useState(false);
  const [isConfirmModalOpen, setConfirmModalOpen] = useState(false);
  const inputRef = useRef(null);
  useEffect(() => {
    setQuery(localStorage.getItem("smartsearch:lastQuery") || "");
    setCategory(localStorage.getItem("smartsearch:lastCat") || "web");
    try {
      const saved = JSON.parse(localStorage.getItem("smartsearch:recents") || "[]");
      if (Array.isArray(saved)) setRecents(saved.slice(0, 12));
    } catch {}
  }, []);
  useEffect(() => {
    localStorage.setItem("smartsearch:lastQuery", query);
  }, [query]);
  useEffect(() => {
    localStorage.setItem("smartsearch:lastCat", category);
  }, [category]);
  const categoryEngines = useMemo(() => ENGINES[category], [category]);
  const hasQuery = query.trim().length > 0;
  const addQueryToRecents = () => {
    if (hasQuery) {
      setRecents(prev => {
        const next = [query, ...prev.filter(x => x !== query)].slice(0, 12);
        localStorage.setItem("smartsearch:recents", JSON.stringify(next));
        return next;
      });
    }
  };
  const handleOpen = engineName => {
    const fn = categoryEngines[engineName];
    if (!fn) return;
    const url = fn(enc(query));
    openUrlSafe(url);
    addQueryToRecents();
  };
  const handleSearchAll = () => {
    setConfirmModalOpen(true);
  };
  const executeSearchAll = () => {
    Object.values(categoryEngines).forEach(fn => {
      const url = fn(enc(query));
      openUrlSafe(url);
    });
    addQueryToRecents();
    setConfirmModalOpen(false);
  };
  useEffect(() => {
    const onKey = e => {
      const isMac = navigator.platform.toUpperCase().includes("MAC");
      if ((isMac ? e.metaKey : e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
        inputRef.current?.select();
      }
      if (e.key === "Escape") {
        if (query) setQuery("");
      }
      if (e.key === "Enter" && document.activeElement === inputRef.current) {
        const firstEngineName = Object.keys(categoryEngines)[0];
        if (firstEngineName && hasQuery) handleOpen(firstEngineName);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [categoryEngines, hasQuery, query]);
  const copyQuery = () => {
    if (!query || !navigator.clipboard) return;
    navigator.clipboard.writeText(query).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }).catch(err => console.error("Failed to copy: ", err));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen text-gray-200 p-4 font-sans selection:bg-teal-500 selection:text-white"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full max-w-3xl mx-auto fade-in pb-8"
  }, /*#__PURE__*/React.createElement("header", {
    className: "text-center mb-6"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500"
  }, "Buscador Inteligente"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-400 mt-1"
  }, "Tu centro de b\xFAsqueda para toda la web.")), /*#__PURE__*/React.createElement("main", {
    className: "bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl shadow-black/20 p-6 flex flex-col gap-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative",
    role: "search"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute left-4 top-1/2 -translate-y-1/2 opacity-80 pointer-events-none"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    className: "h-5 w-5 text-gray-400"
  })), /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    id: "query",
    value: query,
    onChange: e => setQuery(e.target.value),
    placeholder: "Escribe tu b\xFAsqueda aqu\xED\u2026",
    autoFocus: true,
    autoComplete: "off",
    className: "w-full px-4 py-3 pl-12 pr-24 rounded-lg bg-gray-900 text-gray-100 border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: copyQuery,
    title: "Copiar",
    className: "p-1 rounded hover:bg-gray-700/60 disabled:opacity-50",
    disabled: !hasQuery || isCopied
  }, isCopied ? /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "h-4 w-4 text-teal-400"
  }) : /*#__PURE__*/React.createElement(Icon, {
    name: "clipboardCopy",
    className: "h-4 w-4"
  })), hasQuery && /*#__PURE__*/React.createElement("button", {
    onClick: () => setQuery(""),
    title: "Limpiar (Esc)",
    className: "p-1 rounded hover:bg-gray-700/60"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    className: "h-5 w-5"
  })))), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 -mt-1"
  }, "Atajos: ", /*#__PURE__*/React.createElement("kbd", {
    className: "px-1.5 py-0.5 text-xs rounded bg-gray-700 border-b-2 border-gray-600"
  }, "Ctrl"), "+", /*#__PURE__*/React.createElement("kbd", {
    className: "px-1.5 py-0.5 text-xs rounded bg-gray-700 border-b-2 border-gray-600"
  }, "K"), " enfoca \u2022", /*#__PURE__*/React.createElement("kbd", {
    className: "px-1.5 py-0.5 text-xs rounded bg-gray-700 border-b-2 border-gray-600"
  }, "Enter"), " busca \u2022", /*#__PURE__*/React.createElement("kbd", {
    className: "px-1.5 py-0.5 text-xs rounded bg-gray-700 border-b-2 border-gray-600"
  }, "Esc"), " limpia"), /*#__PURE__*/React.createElement("label", {
    className: "block text-sm"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-gray-400 font-medium mb-2 block"
  }, "Categor\xEDa"), /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("select", {
    className: "w-full appearance-none px-4 py-3 rounded-lg bg-gray-900 text-gray-100 border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all pr-10",
    value: category,
    onChange: e => setCategory(e.target.value),
    "aria-label": "Seleccionar categor\xEDa"
  }, CATEGORIES.map(c => /*#__PURE__*/React.createElement("option", {
    key: c.key,
    value: c.key
  }, c.label))), /*#__PURE__*/React.createElement("div", {
    className: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none flex items-center gap-2"
  }, CATEGORIES.find(c => c.key === category)?.icon, /*#__PURE__*/React.createElement(Icon, {
    name: "chevronDown",
    className: "h-4 w-4"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "border-t border-gray-700 pt-5 min-h-[140px]"
  }, !hasQuery ? /*#__PURE__*/React.createElement("div", {
    className: "text-center text-gray-500 flex flex-col items-center justify-center h-full pt-4 fade-in"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    className: "h-10 w-10 mb-2 opacity-30"
  }), /*#__PURE__*/React.createElement("p", null, "Escribe algo para ver los motores de b\xFAsqueda.")) : /*#__PURE__*/React.createElement("div", {
    className: "fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
  }, Object.entries(categoryEngines).map(([name], i) => /*#__PURE__*/React.createElement("button", {
    key: name,
    onClick: () => handleOpen(name),
    title: `Buscar en ${name}`,
    className: "bg-gray-700/50 text-gray-200 border border-gray-600 rounded-lg p-3 hover:bg-teal-500 hover:text-white hover:border-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-teal-500 transition-all text-sm font-medium active:scale-95 flex items-center justify-between gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "truncate"
  }, name), /*#__PURE__*/React.createElement(Icon, {
    name: "externalLink",
    className: "h-4 w-4 opacity-80"
  })))))), recents.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "mt-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between text-xs text-gray-400 mb-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "history",
    className: "h-3.5 w-3.5"
  }), " Recientes"), /*#__PURE__*/React.createElement("button", {
    className: "inline-flex items-center gap-1 hover:text-red-300",
    onClick: () => {
      localStorage.removeItem("smartsearch:recents");
      setRecents([]);
    },
    title: "Borrar historial"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash2",
    className: "h-3.5 w-3.5"
  }), " Limpiar")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, recents.map(q => /*#__PURE__*/React.createElement("button", {
    key: q,
    className: "text-xs bg-gray-800/70 border border-gray-700 rounded-full px-2.5 py-1 hover:bg-gray-700 transition-colors",
    onClick: () => setQuery(q),
    title: q
  }, q)))), /*#__PURE__*/React.createElement("details", {
    className: "text-sm text-gray-300/90 mt-4"
  }, /*#__PURE__*/React.createElement("summary", {
    className: "cursor-pointer text-teal-400 hover:text-teal-300 transition-colors inline-flex items-center gap-1 font-medium"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    className: "h-4 w-4"
  }), " Ayuda: Lista completa de operadores"), /*#__PURE__*/React.createElement("div", {
    className: "bg-gray-900/50 p-4 mt-2 rounded-md border border-gray-700"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2 text-xs"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", {
    className: "text-teal-300 bg-gray-700 px-1.5 py-0.5 rounded"
  }, "\"frase exacta\""), " \u2013 Frase exacta"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", {
    className: "text-teal-300 bg-gray-700 px-1.5 py-0.5 rounded"
  }, "-palabra"), " \u2013 Excluye una palabra"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", {
    className: "text-teal-300 bg-gray-700 px-1.5 py-0.5 rounded"
  }, "palabra1 OR palabra2"), " \u2013 Una u otra palabra"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", {
    className: "text-teal-300 bg-gray-700 px-1.5 py-0.5 rounded"
  }, "palabra1 AND palabra2"), " \u2013 Ambas palabras"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", {
    className: "text-teal-300 bg-gray-700 px-1.5 py-0.5 rounded"
  }, "*"), " \u2013 Comod\xEDn para una palabra"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", {
    className: "text-teal-300 bg-gray-700 px-1.5 py-0.5 rounded"
  }, "( )"), " \u2013 Agrupa t\xE9rminos"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", {
    className: "text-teal-300 bg-gray-700 px-1.5 py-0.5 rounded"
  }, "site:dominio.com"), " \u2013 Dominio espec\xEDfico"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", {
    className: "text-teal-300 bg-gray-700 px-1.5 py-0.5 rounded"
  }, "filetype:pdf"), " \u2013 Tipo de archivo"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", {
    className: "text-teal-300 bg-gray-700 px-1.5 py-0.5 rounded"
  }, "ext:pdf"), " \u2013 Extensi\xF3n de archivo"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", {
    className: "text-teal-300 bg-gray-700 px-1.5 py-0.5 rounded"
  }, "related:URL"), " \u2013 Sitios relacionados"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", {
    className: "text-teal-300 bg-gray-700 px-1.5 py-0.5 rounded"
  }, "cache:URL"), " \u2013 Versi\xF3n en cach\xE9"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", {
    className: "text-teal-300 bg-gray-700 px-1.5 py-0.5 rounded"
  }, "intitle:palabra"), " \u2013 Palabra en el t\xEDtulo"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", {
    className: "text-teal-300 bg-gray-700 px-1.5 py-0.5 rounded"
  }, "allintitle:palabras"), " \u2013 Todas en el t\xEDtulo"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", {
    className: "text-teal-300 bg-gray-700 px-1.5 py-0.5 rounded"
  }, "inurl:palabra"), " \u2013 Palabra en la URL"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", {
    className: "text-teal-300 bg-gray-700 px-1.5 py-0.5 rounded"
  }, "allinurl:palabras"), " \u2013 Todas en la URL"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", {
    className: "text-teal-300 bg-gray-700 px-1.5 py-0.5 rounded"
  }, "intext:palabra"), " \u2013 Palabra en el texto"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", {
    className: "text-teal-300 bg-gray-700 px-1.5 py-0.5 rounded"
  }, "allintext:palabras"), " \u2013 Todas en el texto"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", {
    className: "text-teal-300 bg-gray-700 px-1.5 py-0.5 rounded"
  }, "before:AAAA-MM-DD"), " \u2013 Antes de fecha"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", {
    className: "text-teal-300 bg-gray-700 px-1.5 py-0.5 rounded"
  }, "after:AAAA-MM-DD"), " \u2013 Despu\xE9s de fecha"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", {
    className: "text-teal-300 bg-gray-700 px-1.5 py-0.5 rounded"
  }, "define:palabra"), " \u2013 Definici\xF3n"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", {
    className: "text-teal-300 bg-gray-700 px-1.5 py-0.5 rounded"
  }, "source:nombre"), " \u2013 Fuente de noticias")))))), /*#__PURE__*/React.createElement(ConfirmModal, {
    isOpen: isConfirmModalOpen,
    onClose: () => setConfirmModalOpen(false),
    onConfirm: executeSearchAll,
    title: "Confirmar B\xFAsqueda M\xFAltiple"
  }, /*#__PURE__*/React.createElement("p", null, "Esto abrir\xE1 ", /*#__PURE__*/React.createElement("strong", null, categoryEngines ? Object.keys(categoryEngines).length : 0), " pesta\xF1as nuevas en tu navegador."), /*#__PURE__*/React.createElement("p", {
    className: "mt-2"
  }, "\xBFEst\xE1s seguro de que quieres continuar?")));
}
ReactDOM.render(/*#__PURE__*/React.createElement(SmartSearchApp, null), document.getElementById('root'));