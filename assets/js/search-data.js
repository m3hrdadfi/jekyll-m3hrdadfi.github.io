// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Here you&#39;ll find my research papers ...",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching-amp-supervision",
          title: "Teaching &amp; Supervision",
          description: "Courses I&#39;ve taught and master&#39;s theses I&#39;ve supervised.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "news-2024-master-39-s-thesis-supervision-open",
          title: '2024 Master&amp;#39;s Thesis Supervision Open',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-02-16-master-thesis-announcement/";
            },},{id: "news-2025-master-39-s-thesis-supervision-open",
          title: '2025 Master&amp;#39;s Thesis Supervision Open',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-07-08-master-thesis-announcement/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/m3hrdadf", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/m3hrdadf", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-5162-1718", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=0raqKZEAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/m3hrdadf", "_blank");
        },
      },];
