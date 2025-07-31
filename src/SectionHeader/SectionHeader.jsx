import './SectionHeader.css'

const SectionHeader = ({title,subtitle}) => {
  return (
    <div className="font md:w-5/12 mx-auto text-center my-8 ">
      <h1 className="title-header  text-3xl uppercase py-2 section-header">
        {title} <span className="text-[#00ADB5]"> {subtitle}</span>
      </h1>
    </div>
  );
};

export default SectionHeader;