import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import BookingRow from "./BookingRow/BookingRow";

const Bookings = () => {
  const { user } = useContext(AuthContext);

  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:4000/bookings/?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url]);

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want to delete");
    if (proceed) {
      fetch(`http://localhost:4000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Item deleted");
            const remaining = bookings.filter((item) => item._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  const handleConfirm = (id) => {
    fetch(`http://localhost:4000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("Booked");
          const remaining = bookings.filter((booking) => booking._id !== id);
          const updated = bookings.find((booking) => booking._id !== id);
          updated.status = "confirm";
          const newBooking = [updated, ...remaining];
          setBookings(newBooking);
        }
      });
  };
  return (
    <div>
      <h2 className="text-3xl text-center">
        Your bookings length: {bookings.length}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Service</th>
                <th>Price</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings?.map((booking, idx) => (
                <BookingRow
                  key={idx}
                  booking={booking}
                  handleDelete={handleDelete}
                  handleConfirm={handleConfirm}
                />
              ))}
            </tbody>
          </table>
        </div>
      </h2>
    </div>
  );
};

export default Bookings;
