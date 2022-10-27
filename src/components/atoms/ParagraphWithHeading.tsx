interface ParagraphWithHeadingProps {
  headingClassname: string;
  headingText: string;
  ParagraphClassname: string;
  Description: string;
}
const ParagraphWithHeading = (props: ParagraphWithHeadingProps) => {
  const { headingClassname, headingText, ParagraphClassname, Description } =
    props;
  return (
    <div>
      <h1 className={headingClassname}>{headingText}</h1>
      <p className={ParagraphClassname}>{Description}</p>
    </div>
  );
};

export default ParagraphWithHeading;
