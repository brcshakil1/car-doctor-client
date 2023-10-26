import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "./../../provider/AuthProvider";

const Checkout = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  console.log(service);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const price = form.price.value;
    const booking = {
      name,
      date,
      img: service?.img,
      email,
      price,
      service: service?.title,
    };

    fetch(`http://localhost:4000/checkout`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Booked");
        }
      });
  };
  return (
    <div>
      <h2 className="text-3xl text-center">{service?.title}</h2>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="form-control">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              defaultValue={user?.displayName}
              name="name"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="date"
              className="input input-bordered"
              name="date"
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
              name="email"
              defaultValue={user?.email}
              required
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Price"
              name="price"
              defaultValue={service?.price}
              className="input input-bordered"
              required
            />
          </div>
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
