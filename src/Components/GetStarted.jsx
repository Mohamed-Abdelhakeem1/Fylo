const GetStarted = () => {
  return (
    <section>
      <div className=" container flexCenter mb-20">
        <div className="bg-[#2f3a55] p-8 w-full  text-center text-white flexCenter flex-col gap-6 rounded-lg">
          <h3 className="text-3xl">Get early access today</h3>
          <p className="text-sm px-3 lg:px-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
            molestiae fugit nihil neque maiores ut doloremque vitae sit.
          </p>
          <form className="flexCenter flex-col md:flex-row gap-4 w-full max-w-[900px]">
            <input
              className="py-3 px-4 border-none outline-hidden block text-[#2f3a55] rounded-full flex-1 w-full"
              type="email"
              placeholder="email@example.com"
            />
            <a href="/" className="btn block w-fit" type="submit">
              Get Started For Free
            </a>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
