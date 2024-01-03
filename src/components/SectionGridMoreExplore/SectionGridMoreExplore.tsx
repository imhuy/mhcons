"use client";

import CardCategory4 from "@/components/CardCategories/CardCategory4";
import Heading from "@/components/Heading/Heading";
import { FC, useState } from "react";
import { DEMO_MORE_EXPLORE_DATA, ExploreType } from "./data";

export interface SectionGridMoreExploreProps {
  className?: string;
  gridClassName?: string;
  boxCard?: "box1" | "box4" | "box6";
  data?: ExploreType[];
}

const SectionGridMoreExplore: FC<SectionGridMoreExploreProps> = ({
  className = "",
  boxCard = "box4",
  gridClassName = "grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
  data = DEMO_MORE_EXPLORE_DATA.filter((_, i) => i < 6),
}) => {
  const [tabActive, setTabActive] = useState("Man");

  const renderCard = (item: ExploreType) => {
    return (
      <CardCategory4
        bgSVG={item.svgBg}
        featuredImage={item.image}
        key={item.id}
        color={item.color}
        {...item}
      />
    );
  };

  const renderHeading = () => {
    return (
      <div>
        <Heading
          className="mb-12 lg:mb-14 text-neutral-900 dark:text-neutral-50 font-sans"
          fontClass="text-3xl md:text-4xl 2xl:text-5xl font-semibold "
          isCenter
          desc=""
        >
          Đối Tác
        </Heading>

      </div>
    );
  };

  return (
    <div className={`nc-SectionGridMoreExplore relative ${className}`}>
      {renderHeading()}
      <div className={`grid gap-4 md:gap-7 ${gridClassName}`}>
        {data.map((item) => renderCard(item))}
      </div>
    </div>
  );
};

export default SectionGridMoreExplore;
