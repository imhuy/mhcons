import imageRightPng from "@/images/hero-right.png";
import imageRightPng2 from "@/images/hero-right-2.png";
import imageRightPng3 from "@/images/promo3.png";

import { Route } from "@/routers/types";
import { StaticImageData } from "next/image";

interface Hero2DataType {
  image: StaticImageData | string;
  heading: string;
  subHeading: string;
  btnText: string;
  btnLink: Route;
}

export const HERO2_DEMO_DATA: Hero2DataType[] = [
  {
    image: imageRightPng,
    heading: "Công ty cổ phần tư vấn và đầu tư xây dựng MHCONS",
    subHeading: "You Are Finding 🔥",
    btnText: "Download now",
    btnLink: "/",
  },
  {
    image: imageRightPng2,
    heading: "Công ty cổ phần tư vấn và đầu tư xây dựng MHCONS",
    subHeading: "You Are Finding 🔥",
    btnText: "Download now",
    btnLink: "/",
  },
  {
    image: imageRightPng3,
    heading: "Công ty cổ phần tư vấn và đầu tư xây dựng MHCONS",
    subHeading: "You Are Finding 🔥",
    btnText: "Download now",
    btnLink: "/",
  },
];
