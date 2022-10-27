import React from "react";

interface headingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  headingLevel: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  title: string;
}

const heading = (props: headingProps) => {
  const { headingLevel, title } = props;

  //   const validHeadingLevels = ["h1", "h2", "h3", "h4", "h5", "h6"];
  //   const safeHeading = headingLevel ? headingLevel.toLowerCase() : "";
  //   const Title = validHeadingLevels.includes(headingLevel) ? headingLevel : "p";
  const Title = headingLevel;

  return <Title>{title}</Title>;
};

export default heading;
