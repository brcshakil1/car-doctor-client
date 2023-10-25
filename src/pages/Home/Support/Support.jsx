import { SlCalender } from "react-icons/sl";
import { BsTelephoneFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";

const Support = () => {
  return (
    <div className="flex rounded-lg flex-col md:flex-row items-center px-4 py-8 gap-6 md:justify-around lg:py-20 bg-[#151515] text-white">
      <div className="flex items-center gap-4">
        <div>
          <SlCalender className="text-[#FF3811] text-3xl" />
        </div>
        <div>
          <p>We are open monday-friday</p>
          <h3 className="text-2xl font-bold ">7:00 am - 9:00 pm</h3>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div>
          <BsTelephoneFill className="text-[#FF3811] text-3xl" />
        </div>
        <div>
          <p>Have a question?</p>
          <h3 className="text-2xl font-bold">+2546 251 2658</h3>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div>
          <ImLocation2 className="text-[#FF3811] text-3xl" />
        </div>
        <div>
          <p>Need a repair? our address</p>
          <h3 className="text-2xl font-bold">Liza Street, New York</h3>
        </div>
      </div>
    </div>
  );
};

export default Support;
