import React from "react";

interface headingProps {
  headingLevel: any;
  title: string;
}

const heading = (props: headingProps) => {
  const { headingLevel, title } = props;

  const validHeadingLevels = ["h1", "h2", "h3", "h4", "h5", "h6"];
  const safeHeading = headingLevel ? headingLevel.toLowerCase() : "";
  const Title = validHeadingLevels.includes(safeHeading) ? safeHeading : "p";

  return <Title>{title}</Title>;
};

export default heading;
