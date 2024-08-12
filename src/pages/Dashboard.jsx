import { useForm } from "react-hook-form";
import { Switch } from "@material-tailwind/react";
import { useEffect } from "react";
import { getBanner, updateBannerDetails } from "../helpers/banner";
import { supabase } from "../helpers/supabase";
import toast, { ToastBar, Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../helpers/auth";
function Dashboard() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    async function getBannerDetails() {
      try {
        const data = await getBanner();
        console.log(data);

        reset({
          banner_link: data[0].banner_link,
          timer: data[0].timer,
          is_visible: data[0].is_visible,
          description: data[0].description,
        });
      } catch (e) {
        console.log(e);
      }
    }

    getBannerDetails();
  }, [reset]);

  async function onSubmit(formData) {
    console.log("submiiteed");
    console.log(formData);

    try {
      const data = await updateBannerDetails(formData);

      if (data) toast.success("Banner details updated successfully");
    } catch (e) {
      toast.error(e.message);
    }
  }

  async function handleLogout() {
    logout();
    navigate('/login');
  }


  return (
    <div className="flex flex-col h-dvh w-[60%] ml-auto items-center justify-center mr-auto">
      <Toaster/>
      <h1 className="text-3xl font-extrabold mb-2">Banner Details</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center gap-2 w-[50%]"
      >
        <div className="flex gap-2 justify-between w-full">
          <label htmlFor="">Visible:</label>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              {...register("is_visible")}
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
        <div className="flex gap-2 justify-between w-full">
          <label htmlFor="">TImer:</label>
          <input
            type="text"
            className="border-gray-400 border-2 rounded-md w-[80%]"
            {...register("timer", { required: true })}
          />
        </div>
        <div className="flex gap-2 justify-between w-full">
          <label htmlFor="">Banner Link:</label>
          <input
            type="text"
            className="border-gray-400 border-2 rounded-md w-[80%]"
            {...register("banner_link", { required: true })}
          />
        </div>
        <div className="flex gap-2 justify-between w-full">
          <label htmlFor="">Description:</label>
          <textarea
            name=""
            className="border-gray-400 border-2 rounded-md w-[80%]"
            id=""
            rows={5}
            {...register("description", { required: true })}
          ></textarea>
        </div>

        <button className="bg-gray-700 border-2 p-2 text-white rounded-md w-full">
          Save
        </button>
      </form>
      <Link to ="/" className="mt-2 bg-blue-400 text-white p-2 rounded-md w-[50%] text-center">Back to Home</Link>
      <buttton onClick={handleLogout}  className="mt-2 bg-blue-400 text-white p-2 rounded-md w-[50%] text-center">Logout</buttton>
    </div>
  );
}

export default Dashboard;
