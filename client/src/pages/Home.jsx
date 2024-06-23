import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Tasks from "../components/Tasks";
import MainLayout from "../layouts/MainLayout";
import "../styling/style.css";

const Home = () => {
  const authState = useSelector((state) => state.authReducer);
  const { isLoggedIn } = authState;

  useEffect(() => {
    document.title = authState.isLoggedIn
      ? `${authState.user.name}'s tasks`
      : "Task Manager";
  }, [authState]);

  return (
    <>
      <MainLayout>
        {!isLoggedIn ? (
          <div className="bg-gray-400 text-dark h-[60vh] py-20 text-center flex flex-col justify-center items-center ">
            <h1
              className="mb-5 text-center sm:text-left"
              style={{
                fontFamily: "Helvetica, sans-serif",
                fontStyle: "italic",
                fontSize: "3rem",
              }}
            >
               <p style={{fontFamily:"cursive",fontSize:"30px"}}  class=" mx-2 text-white no-underline ...">Create | Read | Update | Delete</p>
        
            </h1>
            <h3
              className="mb-5 text-center sm:text-left"
              style={{ fontFamily: "roboto", fontSize: "2rem" }}
            >
              <b>"Your Task Our Priority"</b>
            </h3>
            <Link
              to="/signup"
              className="mt-10 text-xl block space-x-2 hover:space-x-4"
            >
              <span className="py-2 px-3 bg-yellow-200 cursor-pointer hover:bg-yellow-400 transition rounded-sm transition-[margin]">
                Get Started
              </span> 
            </Link>
          </div>
        ) : (
          <>
            <h1 className="text-lg mt-8 mx-8 border-b border-b-gray-300">
            <b>Hi, {authState.user.name} !</b>{" "}
            
            </h1>

            <Tasks />
          </>
        )}
      </MainLayout>
    </>
  );
};

export default Home;
