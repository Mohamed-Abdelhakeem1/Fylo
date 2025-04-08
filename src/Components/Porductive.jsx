import productiveImg from "/assets/images/illustration-stay-productive.png";
import productiveIcon from "/assets/images/icon-arrow.svg";

const Porductive = () => {
  return (
    <section className="my-12">
      <div className="container flexCenter flex-col lg:flex-row justify-between text-white gap-6">
        <div className="leftImg w-3/4 lg:w-[900px]">
          <img src={productiveImg} className="w-full"></img>
        </div>
        <div className="flex flex-col gap-5 justify-start text-center lg:text-left">
          <h2 className="text-2xl lg:text-3xl">
            Stay productive, <br />
            Wherever you are
          </h2>
          <p className="text-sm tracking-wider">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
            molestiae fugit nihil neque maiores ut doloremque vitae sit, nulla
            repellat, earum optio error aspernatur dolor est dolore suscipit.
          </p>
          <p className="text-sm tracking-wider">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
            molestiae fugit nihil neque maiores ut doloremque vitae sit, nulla
            repellat, earum optio error aspernatur dolor est dolore suscipit.
          </p>
          <a
            href="/"
            className="border-b-2 border-blue-300 w-fit mx-auto lg:mx-0 pb-1 pr-2 flexCenter gap-2 text-xl"
          >
            <p className="text-blue-400 hover:text-blue-300 transition-all duration-300">
              See how Fylo works
            </p>
            <img
              className="w-6 animate-[moveRight_1s_infinite_ease]"
              src={productiveIcon}
            ></img>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Porductive;
