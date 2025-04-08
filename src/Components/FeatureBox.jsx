import PropTypes from 'prop-types';

const FeatureBox = ({ icon, title, desc }) => {
  return (
    <div className="flexCenter flex-col gap-3 text-center">
      <img src={icon} className=" h-[80px] object-contain"></img>
      <h2 className="text-2xl md:text-3xl">{title}</h2>
      <p className="text-sm">{desc}</p>
    </div>
  );
};

FeatureBox.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default FeatureBox;