import Celtx from "@/images/logo-celtx.svg"
import EffortlessAdmin from "@/images/logo-effortless-admin.svg"
import HubbleHQ from "@/images/logo-hubblehq.svg"
import Neowin from "@/images/logo-neowin.svg"
import OlympiaTrustCompany from "@/images/logo-olympia-trust-company.svg"
import ThomsonReuters from "@/images/logo-thomson-reuters.svg"
import UniversityOfCalgary from "@/images/logo-university-of-calgary.svg"

const home = {
  education: [
    {
      company: "University of Calgary",
      brandColor: "#E42124",
      href: "https://ucalgary.ca",
      isFocus: true,
      logo: { type: "component", component: UniversityOfCalgary },
      positions: [
        {
          title: "Bachelor of Science - Computer Science 2015",
          time: "2011 - 2015",
        },
      ],
    },
  ],
  work: [
    {
      company: "HubbleHQ",
      brandColor: "#FF377A",
      href: "https://hubblehq.com",
      isFocus: true,
      logo: { type: "component", component: HubbleHQ },
      positions: [
        {
          title: "Engineering Manager",
          time: "January 2020 - Current",
        },
        {
          title: "Lead Product Engineer",
          time: "July 2019 - January 2020",
        },
        {
          title: "Product Engineer",
          time: "March 2019 - July 2019",
        },
        {
          title: "Product Engineer (contractor)",
          time: "November 2018 - March 2019",
        },
      ],
    },
    {
      company: "Thomson Reuters",
      brandColor: "#E6772B",
      href: "https://thomsonreuters.com",
      isFocus: true,
      logo: { type: "component", component: ThomsonReuters },
      positions: [
        {
          title: "Web Developer (contractor)",
          time: "March 2016 - October 2018",
        },
      ],
    },
    {
      company: "Effortless Admin",
      brandColor: "#1B9AD6",
      href: "https://effortlessadmin.com",
      logo: { type: "component", component: EffortlessAdmin },
      positions: [
        {
          title: "Web Developer",
          time: "May 2015 - March 2016",
        },
      ],
    },
    {
      company: "Olympia Trust Company",
      brandColor: "#AC8A2E",
      href: "https://olympiatrust.com",
      logo: { type: "component", component: OlympiaTrustCompany },
      positions: [
        {
          title: ".NET Developer (intern)",
          time: "Summers 2013 and 2014",
        },
      ],
    },
    {
      company: "Celtx",
      brandColor: "#000000",
      href: "https://www.celtx.com",
      logo: { type: "component", component: Celtx },
      positions: [
        {
          title: "Developer (intern)",
          time: "Summers 2008, 2010, 2011 and 2012",
        },
      ],
    },
    {
      company: "Neowin.net",
      brandColor: "#1E5078",
      href: "https://neowin.net",
      logo: { type: "component", component: Neowin },
      positions: [
        {
          title: "Developer (part time)",
          time: "December 2007 - January 2011",
        },
      ],
    },
  ],
}

export default home
