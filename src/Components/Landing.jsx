import landingImage from "/assets/images/illustration-intro.png";

const Landing = () => {
  return (
    <section className="text-white">
      <div className="container py-8">
        <div className="w-[95%] sm:w-3/4 xl:w-2/3 mx-auto">
          <img className="w-full" src={landingImage} alt="Landing Image"></img>
        </div>
        <div className="text-center py-12">
          <h1 className="px-3 lg:px-0 text-2xl leading-[1.4] sm:leading-[1.5] lg:leading-[1.5] sm:text-3xl lg:text-5xl font-semibold">
            All your files in one secure location, <br />
            accessible anywhere.
          </h1>
          <p className="mt-8 w-[90%] sm:w-[70%] xl:w-[50%] mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
            molestiae fugit nihil neque maiores ut doloremque vitae sit, nulla
            repellat, earum optio error aspernatur dolor est dolore suscipit eum
            esse.
          </p>
          <a
            className="mt-8 btn block"
            href="/"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Landing;
