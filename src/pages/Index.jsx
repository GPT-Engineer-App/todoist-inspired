import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl">Welcome to Todo App</h1>
      <p>Get started by navigating to one of the sections below:</p>
      <div className="mt-4 space-x-4">
        <Link to="/inbox" className="text-blue-500 underline">Inbox</Link>
        <Link to="/today" className="text-blue-500 underline">Today</Link>
        <Link to="/upcoming" className="text-blue-500 underline">Upcoming</Link>
      </div>
    </div>
  );
};

export default Index;