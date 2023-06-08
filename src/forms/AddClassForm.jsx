import { useAuth } from "../hooks/useAuth";

const AddClassForm = ({ handleSubmit }) => {
  const { user } = useAuth();
  return (
    <>
      <div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label>
              <p>Class Name-</p>
            </label>
            <div className="form-control">
              <input
                name="class"
                type="text"
                placeholder="Class Name"
                className="input input-bordered block rounded-lg h-16 px-4 py-3 text-gray-800  border border-black-300 focus:outline-blue-500"
              />
            </div>
          </div>
          <div>
            <label>
              <p>Class Image</p>
            </label>
            <div className="form-control">
              <input
                name="image"
                type="text"
                placeholder="CLass Image"
                className="input input-bordered block rounded-lg h-16 px-4 py-3 text-gray-800  border border-black-300 focus:outline-blue-500"
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-2 ">
            {" "}
            <div>
              <label>
                <p>Instructor Name -</p>
              </label>
              <div className="form-control">
                <input
                  readOnly
                  defaultValue={user?.displayName}
                  type="text"
                  placeholder="Seller Name"
                  className="input input-bordered block rounded-lg h-16 px-4 py-3 text-gray-800  border border-black-300 focus:outline-blue-500"
                />
              </div>
            </div>
            <div>
              <label>
                <p>Instructor Email-</p>
              </label>
              <div className="form-control">
                <input
                  readOnly
                  defaultValue={user?.email}
                  type="text"
                  placeholder="Seller Name"
                  className="input input-bordered block rounded-lg h-16 px-4 py-3 text-gray-800  border border-black-300 focus:outline-blue-500"
                />
              </div>
            </div>
          </div>
          <div>
            <label>
              <p>Seat Available</p>
            </label>
            <div className="form-control">
              <input
                name="seats"
                type="text"
                placeholder="Seller Name"
                className="input input-bordered block rounded-lg h-16 px-4 py-3 text-gray-800  border border-black-300 focus:outline-blue-500"
              />
            </div>
          </div>
          <div>
            <label>
              <p>Price</p>
            </label>
            <div className="form-control">
              <input
                name="price"
                type="text"
                placeholder="Seats Available"
                className="input input-bordered block rounded-lg h-16 px-4 py-3 text-gray-800  border border-black-300 focus:outline-blue-500"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full h-14 p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md primary-button"
          >
            Add Class
          </button>
          {/* <span>{ span}</span> */}
        </form>
      </div>
    </>
  );
};

export default AddClassForm;
