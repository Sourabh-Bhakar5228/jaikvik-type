import { lazy } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";

// layouts
import AppLayout from "../layouts/AppLayout";
import JavaScript from "../pages/language_page/JavaScript";
import Java from "../pages/language_page/Java";
import JQuery from "../pages/language_page/jQuery";
import Laravel from "../pages/language_page/Laravel";
import MongoDB from "../pages/language_page/MongoDB";
import NodeJS from "../pages/language_page/NodeJS";
import Python from "../pages/language_page/Python";
import ReactJS from "../pages/language_page/ReactJS";
import SQL from "../pages/language_page/SQL";
import Wordpress from "../pages/language_page/Wordpress";
import PrivacyPolicy from "../pages/service/PrivacyPolicy";
import Portfolio from "../pages/service/Portfolio";

// pages
const Home = lazy(() => import("../pages/home/Home"));
const About = lazy(() => import("../pages/about/About"));
const Blogs = lazy(() => import("../pages/blogs/Blogs"));
const ContactUs = lazy(() => import("../pages/contact/ContactUs"));
const Careers = lazy(() => import("../pages/careers/Careers"));
const CRMPage = lazy(() => import("../pages/service/CRMPage"));
const Mobile = lazy(() => import("../pages/service/Mobile_Application"));
const ERPPage = lazy(() => import("../pages/service/ERPPage"));
const CoustmisedSoftware = lazy(
  () => import("../pages/service/CoustmisedSoftware")
);
const WebDevelopment = lazy(() => import("../pages/service/Web_Development"));
const DigitalMarketing = lazy(
  () => import("../pages/service/Digital_Marketing")
);
const SocailMediaMarketting = lazy(
  () => import("../pages/service/Socail_Media")
);
const YoutubeMetaAds = lazy(() => import("../pages/service/Youtube_Meta_Ads"));
const Branding = lazy(() => import("../pages/service/Brand_Promotion"));
const SeoServices = lazy(() => import("../pages/service/Seo_Services"));
const FilmProduction = lazy(() => import("../pages/service/Film_Production"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollRestoration />
        <AppLayout />
      </>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "careers",
        element: <Careers />,
      },
      {
        path: "crm",
        element: <CRMPage />,
      },
      {
        path: "mobile-application",
        element: <Mobile />,
      },
      {
        path: "erp",
        element: <ERPPage />,
      },
      {
        path: "coustmised-software",
        element: <CoustmisedSoftware />,
      },
      {
        path: "web-development",
        element: <WebDevelopment />,
      },
      {
        path: "digital-marketing",
        element: <DigitalMarketing />,
      },
      {
        path: "social-media-marketing",
        element: <SocailMediaMarketting />,
      },
      {
        path: "youtube-meta-ads",
        element: <YoutubeMetaAds />,
      },
      {
        path: "branding",
        element: <Branding />,
      },
      {
        path: "seo-services",
        element: <SeoServices />,
      },
      {
        path: "film-production",
        element: <FilmProduction />,
      },
      {
        path: "packaging",
        element: <CRMPage />,
      },
      {
        path: "javascript",
        element: <JavaScript />,
      },
      {
        path: "java",
        element: <Java />,
      },
      {
        path: "jquery",
        element: <JQuery />,
      },
      {
        path: "laravel",
        element: <Laravel />,
      },
      {
        path: "mongodb",
        element: <MongoDB />,
      },
      {
        path: "node-js",
        element: <NodeJS />,
      },
      {
        path: "python",
        element: <Python />,
      },
      {
        path: "react-js",
        element: <ReactJS />,
      },
      {
        path: "sql",
        element: <SQL />,
      },
      {
        path: "wordpress",
        element: <Wordpress />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
    ],
  },
]);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
