import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import "../styles/JobDescription.css";

export default function JobDescription() {
  let JobTitle = "Job Title";
  let JobDescription =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis inventore labore molestias exercitationem voluptates quasi recusandae";
  let JobAmount = "###";
  let JobLocation = "Location";

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="card bg-white shadow-md rounded-lg p-6 w-96 m-auto">
        <div className="flex items-center mb-4">
          <Avatar className="mr-4">
            <AvatarImage src="../src/assets/dummypfp.webp" alt="Avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-xl font-bold">{JobTitle}</h2>
          </div>
        </div>
        <div className="grid grid-flow-row">
          <div className="text-balance">
            <p className="jobdes text-balance">
              <b>Job Descritption: </b>
              {JobDescription}
            </p>
          </div>
          <div>
            <p className="jobloc">
              <b>Job Location: {JobLocation}</b>
            </p>
          </div>
        </div>
        <div className="amt-button">
          <div className="flex justify-between items-center absolute bottom-5 w-full pr-10">
            <span className="text-lg font-semibold">${JobAmount}</span>
            <Button>Apply Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
