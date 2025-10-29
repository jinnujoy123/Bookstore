import React, { useContext, useEffect, useState } from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
import Footer from "../../components/Footer";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { adminUpdateContext } from "../../contextAPI/ContextShare";
import { toast, ToastContainer } from "react-toastify";
import { updateAdminProfileAPI } from "../../services/allAPI";
import SERVERURL from "../../services/serverURL";

function AdminSettings() {
  const [adminDetails, setAdminDetails] = useState({
    username: "",
    password: "",
    cpassword: "",
    bio: "",
    profile: "",
  });
  const [token, setToken] = useState("");
  const [existingProfile, setExistingProfile] = useState("");
  const [preview, setPreview] = useState("");
  const { adminEditResponse, setAdminEditResponse } =
    useContext(adminUpdateContext);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const userToken = sessionStorage.getItem("token");
      setToken(userToken);
      const user = JSON.parse(sessionStorage.getItem("user"));
      setAdminDetails({
        username: user.username,
        password: user.password,
        cpassword: user.password,
        bio: user.bio,
        role: user.role,
      });
      setExistingProfile(user.profile);
    }
  }, [adminEditResponse]);

  const handlePictureUpload = (e) => {
    console.log(e.target.files);
    setAdminDetails({ ...adminDetails, profile: e.target.files[0] });
    const url = URL.createObjectURL(e.target.files[0]);
    setPreview(url);
  };
  const handleReset = () => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    setAdminDetails({
      profile: "",
      username: user.username,
      password: user.password,
      cpassword: user.password,
      bio: user.bio,
      role: user.role,
    });
    setExistingProfile(user.profile);
    setPreview("");
  };
  const handleUpdate = async () => {
    const { username, password, bio, role, cpassword, profile } = adminDetails;
    if (!username || !password || !cpassword) {
      toast.info("Please fill the form completely");
    } else {
      if (password != cpassword) {
        toast.warning("Password & confirm password doesn't match");
        handleReset();
      } else {
        const reqHeader = {
          Authorization: `Bearer ${token}`,
        };
        const reqBody = new FormData();

        reqBody.append("username", username);
        reqBody.append("password", password);
        reqBody.append("bio", "");
        preview
          ? reqBody.append("profile", profile)
          : reqBody.append("profile", existingProfile);
        try {
          const result = await updateAdminProfileAPI(reqBody, reqHeader);
          if (result.status == 200) {
            sessionStorage.setItem("user", JSON.stringify(result.data));
            handleReset();
            setAdminEditResponse(result.data);
            toast.success("Profile updation completed");
          } else {
            toast.error("Something went wrong");
            console.log(result);
          }
        } catch (err) {
          toast.error("Something went wrong");
          console.log(err);
        }
      }
    }
  };

  return (
    <div>
      <AdminHeader />
      <div className="md:grid grid-cols-5">
        <div className="col-span-1 bg-blue-100">
          <AdminSidebar />
        </div>
        <div className="col-span-4 ">
          <h1 className="text-3xl font-bold text-center py-8">Settings</h1>
          <div className="md:grid grid-cols-2">
            <div className="p-8 text-justify">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis qui asperiores cum, beatae officia, quod voluptas
                vitae ut amet ratione minima similique impedit nostrum
                laudantium eveniet sint atque exercitationem eligendi? <br />
                <br />
                Explicabo sint deserunt quia assumenda, itaque voluptates
                praesentium modi dolor et quos sapiente ut commodi odit
                asperiores quae minima suscipit illo alias labore rerum. Illum
                quis voluptatibus animi quam similique. Tempora eos consequatur
                non quas, ex debitis sapiente est odio praesentium optio,
                accusamus dolorum cupiditate quidem a exercitationem illum
                quibusdam ipsam perferendis totam commodi natus laudantium
                voluptatibus alias! Nesciunt, est!
              </p>
            </div>
            <div className="px-10 py-8">
              <div className="rounded bg-blue-100 p-5 flex flex-col justify-center items-center ">
                <div className="flex justify-center items-center">
                  <input
                    type="file"
                    onChange={(e) => handlePictureUpload(e)}
                    id="adminPic"
                    className="hidden"
                  />
                  <label htmlFor="adminPic">
                    {existingProfile == "" ? (
                      <img
                        className="z-52"
                        src={
                          preview
                            ? preview
                            : "https://img.freepik.com/premium-vector/person-with-blue-shirt-that-says-name-person_1029948-7040.jpg"
                        }
                        alt="profile"
                        style={{
                          width: "200px",
                          height: "200px",
                          borderRadius: "50%",
                        }}
                      />
                    ) : existingProfile.startsWith(
                        "https://lh3.googleusercontent.com/"
                      ) ? (
                      <img
                        className="z-52"
                        src={preview ? preview : existingProfile}
                        alt="profile"
                        style={{
                          width: "200px",
                          height: "200px",
                          borderRadius: "50%",
                        }}
                      />
                    ) : (
                      <img
                        className="z-52"
                        src={
                          preview
                            ? preview
                            : `${SERVERURL}/uploads/${existingProfile}`
                        }
                        alt="profile"
                        style={{
                          width: "200px",
                          height: "200px",
                          borderRadius: "50%",
                        }}
                      />
                    )}

                    <FontAwesomeIcon
                      icon={faPen}
                      style={{ marginLeft: "140px", marginTop: "-100px" }}
                      className="bg-yellow-400 p-1"
                    />
                  </label>
                </div>

                <div className="my-3 ">
                  <input
                    type="text"
                    value={adminDetails.username}
                    onChange={(e) =>
                      setAdminDetails({
                        ...adminDetails,
                        username: e.target.value,
                      })
                    }
                    placeholder="Username"
                    className="bg-white placeholder-gray-200 rounded p-2 w-full mt-3 "
                  />
                  <input
                    value={adminDetails.password}
                    onChange={(e) =>
                      setAdminDetails({
                        ...adminDetails,
                        password: e.target.value,
                      })
                    }
                    type="text"
                    placeholder="Password"
                    className="bg-white placeholder-gray-200 rounded p-2 mt-3 w-full"
                  />
                  <input
                    type="text"
                    value={adminDetails.cpassword}
                    onChange={(e) =>
                      setAdminDetails({
                        ...adminDetails,
                        cpassword: e.target.value,
                      })
                    }
                    placeholder="Confirm Password"
                    className="bg-white placeholder-gray-200 rounded p-2 mt-3 w-full"
                  />
                  <div className="flex my-5">
                    <Link
                      onClick={handleReset}
                      className="rounded p-3 bg-yellow-400 text-white me-2 w-full text-center"
                    >
                      Reset
                    </Link>
                    <Link
                      onClick={handleUpdate}
                      className="rounded p-3 bg-green-800 text-white text-center w-full"
                    >
                      Update
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default AdminSettings;
