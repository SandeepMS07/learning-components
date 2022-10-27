import React from "react";
interface ParagraphWithSubHeadingProps {
  headingClassname: string;
  headingText: string;
  ParagraphClassname: string;
  Description: string;
}

const ParagraphWithSubHeading = (props: ParagraphWithSubHeadingProps) => {
  const { headingClassname, headingText, ParagraphClassname, Description } =
    props;
  return (
    <div>
      <h2 className={headingClassname}>{headingText}</h2>
      <p className={ParagraphClassname}>{Description}</p>
    </div>
  );
};

export default ParagraphWithSubHeading;
