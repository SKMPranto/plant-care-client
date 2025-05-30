import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { NavLink } from "react-router";
import Swal from "sweetalert2";

const MyPlantCard = ({ plant, onDelete }) => {
  const { plantName, category, careLevel, wateringFrequency, url, _id } = plant;

  const handleDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-soft btn-success me-2",
        cancelButton: "btn btn-soft btn-error",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`https://plant-care-server-dun.vercel.app/plants/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount) {
                swalWithBootstrapButtons.fire({
                  title: "Deleted!",
                  text: "Your plant has been deleted.",
                  icon: "success",
                });
              }
              onDelete(id);
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary plant is safe :)",
            icon: "error",
          });
        }
      });
  };
  return (
    <div className="card bg-base-300 w-96 shadow-gray-50 shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1">
      <figure className="w-full h-62 overflow-hidden">
        <img
          src={url}
          alt="Image"
          className="transition duration-300 ease-in-out transform hover:-translate-y-1 object-contain rounded-t-lg"
        />
      </figure>
      <div className="card-body transition duration-300 ease-in-out transform hover:-translate-y-1">
        <h2 className="card-title">{plantName}</h2>
        <div className="badge badge-outline badge-info">
          Category : {category}{" "}
        </div>
        <div className="badge badge-outline badge-success">
          Care-Level : {careLevel}{" "}
        </div>
        <div className="badge badge-outline badge-warning h-12">
          Watering Frequency: {wateringFrequency} days
        </div>
        <div className="card-footer">
          <p className="text-sm text-gray-500">
            Added on: {new Date().toLocaleDateString()}
          </p>
        </div>
        <div className="join join-vertical lg:join-horizontal gap-x-4 mt-4">
          <NavLink
            to={`/Plants-Details/${_id}`}
            className="btn join-item btn-soft btn-info md:text-lg rounded md:font-extrabold"
          >
            Details{" "}
          </NavLink>
          <NavLink
            to={`/Edit-My-Plants/${_id}`}
            className="btn join-item btn-soft btn-primary md:text-lg rounded md:font-extrabold"
          >
            Edit <FaEdit />
          </NavLink>
          <button
            onClick={() => handleDelete(_id)}
            className="btn join-item btn-soft btn-secondary md:text-lg rounded md:font-extrabold"
          >
            Delete <MdDeleteForever size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyPlantCard;
