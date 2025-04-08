import PropTypes from 'prop-types';

const TestimonialBox = ({ name, image }) => {
  return (
    <div className="text-white p-7 bg-[#334463] w-[420px] rounded-lg z-10 shadow-xl">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, molestiae
        fugit nihil neque maiores ut doloremque vitae sit, nulla repellat, earum
        optio error aspernatur dolor est dolore suscipit.
      </p>
      <div className="mt-4 flex gap-4 items-center">
        <img className="w-14 rounded-full" src={image}></img>
        <div>
          <p className="font-semibold text-lg">{name}</p>
          <p className="text-sm">Founder & CEO, Huddle</p>
        </div>
      </div>
    </div>
  );
};

TestimonialBox.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default TestimonialBox;
