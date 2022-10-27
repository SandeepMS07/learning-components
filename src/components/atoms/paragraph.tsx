interface paragraphProps {
  classname: string;
  text: string;
}

const paragraph = (props: paragraphProps) => {
  const { classname, text } = props;
  return (
    <>
      <p className={classname}>{text}</p>
    </>
  );
};

export default paragraph;
