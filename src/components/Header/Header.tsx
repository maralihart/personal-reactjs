import React from "react";
import JobList from "./JobList";

function Header() {

  const currently: string[] = ["Major League Hacking Coach", "Girls Who Code at UVA Technical Lead", "CS1501 Teaching Assistant", "Twitch Content Creator"];
  const previously: string[] = ["Microsoft Software Engineer Intern", "Girls Who Code at Founding President ", "Kode With Klossy Instructor Assistant"];

  return (
    <div>
      {/* Twitch Alert */}
      <h1>Mara.</h1>
      <h2>software developer</h2>
      {/* Social Media */}
      <JobList title="Currently" jobList={currently} />
      <JobList title="Previously" jobList={previously} />
      {/* Currently */}
      {/* Presently */}
      {/* Transparent Photo Of Me */}
    </div>
  );
}

export default Header;
