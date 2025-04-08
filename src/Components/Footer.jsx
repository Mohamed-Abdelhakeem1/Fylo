import logo from "/assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="pb-20">
      <div className="container text-white">
        <div className="text-center">
          <img src={logo} className="mx-auto" alt="Logo Image"></img>
        </div>
        <div className="flexCenter items-center md:items-start justify-between flex-wrap flex-col md:flex-row mt-12 gap-10 ">
          <div className="w-full md:w-1/2 lg:w-1/4 flex gap-4">
            <i className="fa-solid fa-location-dot  text-2xl"></i>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
              molestiae fugit nihil neque maiores ut doloremque vitae sit, nulla
              repellat, earum optio error aspernatur dolor est dolore suscipit.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-phone-volume text-lg"></i>
              <p>+20123456789</p>
            </div>
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-square-envelope text-lg"></i>
              <p>example@fylo.com</p>
            </div>
          </div>
          <div className="text-lg flex gap-7">
            <div className="flex flex-col gap-5">
              <a href="/" className="cursor-pointer hover:underline">
                About Us
              </a>
              <a href="/" className="cursor-pointer hover:underline">
                Jobs
              </a>
              <a href="/" className="cursor-pointer hover:underline">
                Press
              </a>
              <a href="/" className="cursor-pointer hover:underline">
                Blog
              </a>
            </div>
            <div className="flex flex-col gap-5">
              <a href="/" className="cursor-pointer hover:underline">
                Contact Us
              </a>
              <a href="/" className="cursor-pointer hover:underline">
                Terms
              </a>
              <a href="/" className="cursor-pointer hover:underline">
                Privacy
              </a>
            </div>
          </div>
          <div className="flex gap-10 text-xl">
            <i className="fa-brands fa-facebook cursor-pointer p-3 border-white border rounded-full"></i>
            <i className="fa-brands fa-twitter cursor-pointer p-3 border-white border rounded-full"></i>
            <i className="fa-brands fa-instagram cursor-pointer p-3 border-white border rounded-full"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
