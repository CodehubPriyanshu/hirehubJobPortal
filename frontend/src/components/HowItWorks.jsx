import React from "react";
import { LuUserPlus } from "react-icons/lu";
import { VscTasklist } from "react-icons/vsc";
import { BiSolidLike } from "react-icons/bi";

const HowItWorks = () => {
  return (
    <section className="howItWorks">
      <h3>How does it work?</h3>
      <div className="container">
        <div className="card">
          <div className="icon">
            <LuUserPlus />
          </div>
          <h4>Create an Account</h4>
          <p>
          Sign up for a free account as a job seeker or employer. Set up your profile in just minutes to start posting jobs or applying for your next opportunity. Customize your profile to showcase your skills or define your hiring needs and connect with the best talent or roles on HireHub.
          </p>
        </div>
        <div className="card">
          <div className="icon">
            <VscTasklist />
          </div>
          <h4>Post or Browse Jobs</h4>
          <p>
          Employers can share detailed job descriptions, while job seekers explore a wide range of opportunities. Use our advanced filters to quickly find positions that align with your skills and career goals
          </p>
        </div>
        <div className="card">
          <div className="icon">
            <BiSolidLike />
          </div>
          <h4>Hire or Get Hired</h4>
          <p>
          Employers can shortlist top candidates and make job offers, while job seekers review opportunities and accept roles that best match their career aspirations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
