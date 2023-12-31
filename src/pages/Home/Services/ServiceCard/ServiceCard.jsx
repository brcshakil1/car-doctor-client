import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl border p-5">
      <figure className="h-[280px]">
        <img src={service?.img} alt="" className="rounded-xl h-full" />
      </figure>
      <div className="  pt-4">
        <h2 className="card-title">{service?.title}</h2>
        <div className="flex items-center justify-between">
          <p className="text-[#FF3811] font-bold">Price: ${service?.price}</p>
          <Link to={`/book/${service._id}`}>
            <button className="btn btn-circle">
              <AiOutlineArrowRight className="text-[#FF3811] text-xl" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
