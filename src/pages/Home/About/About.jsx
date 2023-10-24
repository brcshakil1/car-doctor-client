import aboutImg1 from "../../../assets/images/about_us/person.jpg";
import aboutImg2 from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero mt-16">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative">
          <img
            src={aboutImg1}
            className="max-w-sm rounded-lg shadow-2xl w-3/4"
          />
          <img
            src={aboutImg2}
            className="max-w-sm rounded-lg border-white shadow-2xl border-8 absolute w-1/2 top-1/2 right-20"
          />
        </div>
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-xl text-[#FF3811] font-bold">About US</h2>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don{`'`}t look even slightly
            believable.
          </p>
          <p className="">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don{`'`}t look even slightly
            believable.
          </p>
          <button className="bg-[#FF3811] text-white font-bold px-6 py-4 rounded-md">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
