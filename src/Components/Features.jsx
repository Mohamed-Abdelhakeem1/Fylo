import icon1 from "/assets/images/icon-access-anywhere.svg";
import icon2 from "/assets/images/icon-security.svg";
import icon3 from "/assets/images/icon-collaboration.svg";
import icon4 from "/assets/images/icon-any-file.svg";
import FeatureBox from "./FeatureBox";

const Features = () => {
  const items = [
    {
      icon: icon1,
      title: "Acces your files, anywhere",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, molestiae fugit nihil neque maiores ut doloremque vitae sit, nulla repellat, earum optio error aspernatur dolor est dolore suscipit.",
    },
    {
      icon: icon2,
      title: "Security you can trust",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, molestiae fugit nihil neque maiores ut doloremque vitae sit, nulla repellat, earum optio error aspernatur dolor est dolore suscipit.",
    },
    {
      icon: icon3,
      title: "Real-time collaboration",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, molestiae fugit nihil neque maiores ut doloremque vitae sit, nulla repellat, earum optio error aspernatur dolor est dolore suscipit.",
    },
    {
      icon: icon4,
      title: "Store any type of files",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, molestiae fugit nihil neque maiores ut doloremque vitae sit, nulla repellat, earum optio error aspernatur dolor est dolore suscipit.",
    },
  ];
  return (
    <section>
      <div
        className="container text-white grid gap-12 grid-cols-1 md:grid-cols-2 xl:grid-cols-4
       pb-16"
      >
        {items.map((item, idx) => {
          return (
            <FeatureBox
              key={idx}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Features;
