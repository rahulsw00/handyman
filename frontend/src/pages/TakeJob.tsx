import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Inline JobNode component to remove external import
const JobNode = () => {
  return (
    <div className="w-[350px] p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="mb-2">
        <h3 className="text-xl font-bold">Plumber</h3>
      </div>
      <div className="space-y-2">
        <div className="flex items-center text-muted-foreground">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span>Dummy, Location</span>
        </div>
        <div className="flex items-center text-muted-foreground">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>$####</span>
        </div>
      </div>
      <div className="mt-4 text-sm text-muted-foreground">
        Looking for plumber
      </div>
      <div className="mt-4 flex justify-between">
        <button className="px-4 py-2 border rounded bg-white hover:bg-gray-100">
          Learn More
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Take job
        </button>
      </div>
    </div>
  );
};

export default function TakeJob() {
  const jobNodes = Array.from({ length: 10 }, (_, index) => (
    <JobNode key={index} />
  ));

  return (
    <>
      <div className="category flex flex-wrap gap-1 mb-4">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="software">Software Engineering</SelectItem>
            <SelectItem value="design">Design</SelectItem>
            <SelectItem value="marketing">Marketing</SelectItem>
            <SelectItem value="sales">Sales</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="san-francisco">San Francisco</SelectItem>
            <SelectItem value="new-york">New York</SelectItem>
            <SelectItem value="remote">Remote</SelectItem>
            <SelectItem value="hybrid">Hybrid</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-wrap justify-center items-center w-screen">
        <div className="container w-full h-full flex flex-wrap gap-4 justify-center items-start">
          {jobNodes}
        </div>
      </div>
    </>
  );
}
