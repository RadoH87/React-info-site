import React from "react";

const Main = () => {
  return (
    <main className=" px-9 py-14 h-fit">
      <h1 className="text-4xl font-bold mb-20">Fun facts about React</h1>
      <ul className="list-disc marker:text-[#61dafb] marker:text-3xl text-xl">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  );
};

export default Main;
