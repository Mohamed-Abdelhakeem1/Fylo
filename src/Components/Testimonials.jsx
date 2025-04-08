import TestimonialBox from "./TestimonialBox";
import profile1 from "/assets/images/profile-1.jpg";
import profile2 from "/assets/images/profile-2.jpg";
import icon from "/assets/images/bg-quotes.png";

const Testimonials = () => {
  const leaders = [
    {
      name: "Ahmed",
      image: profile1,
    },
    {
      name: "Mohamed",
      image: profile2,
    },
    {
      name: "Sayed",
      image: profile1,
    },
  ];
  return (
    <section className="my-20">
      <div className="container flexCenter gap-8 flex-wrap relative">
        <div className="absolute top-[-30px] left-20">
          <img src={icon} alt="quote"></img>
        </div>
        {leaders.map((leader, idx) => (
          <TestimonialBox key={idx} name={leader.name} image={leader.image} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
