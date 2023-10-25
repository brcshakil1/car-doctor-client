import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const service = useLoaderData();
  console.log(service);
  return (
    <div>
      <h2>{service?.title}</h2>
      <form className="card-body">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="form-control">
            <input
              type="text"
              placeholder="First Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Last Name"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="form-control">
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control mb-6">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your message"
            className="border"
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#FF3811] btn-block text-white">
            Order Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
