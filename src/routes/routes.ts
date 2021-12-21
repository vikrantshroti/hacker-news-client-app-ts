import News from "../components/pages/News/News";
import Newest from "../components/pages/Newest/Newest";
import Comments from "../components/pages/Comments/Comments";
import Ask from "../components/pages/Ask/Ask";
import Show from "../components/pages/Show/Show";
import Jobs from "../components/pages/Jobs/Jobs";
import Guidelines from "../components/pages/Guidelines/Guidelines";
import FAQ from "../components/pages/FAQ/FAQ";
import Security from "../components/pages/Security/Security";
import Lists from "../components/pages/Lists/Lists";
import Bookmarklet from "../components/pages/Bookmarklet/Bookmarklet";

const ROUTES = [
  {
    path: "/",
    exact: true,
    component: News,
  },
  {
    path: "/news",
    exact: true,
    component: News,
  },
  {
    path: "/newest",
    exact: true,
    component: Newest,
  },
  {
    path: "/item",
    exact: true,
    component: Comments,
  },
  {
    path: "/ask",
    exact: true,
    component: Ask,
  },
  {
    path: "/show",
    exact: true,
    component: Show,
  },
  {
    path: "/jobs",
    exact: true,
    component: Jobs,
  },
  {
    path: "/guidelines",
    exact: true,
    component: Guidelines,
  },
  {
    path: "/faq",
    exact: true,
    component: FAQ,
  },
  {
    path: "/security",
    exact: true,
    component: Security,
  },
  {
    path: "/lists",
    exact: true,
    component: Lists,
  },
  {
    path: "/bookmarklet",
    exact: true,
    component: Bookmarklet,
  },
];

export default ROUTES;
