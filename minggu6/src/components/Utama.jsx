import React from "react";

const Utama = () => {
  return (
    <section
      className="text-start md:ps-[10%] py-20 px-6"
      style={{
        backgroundImage: "url(https://i.ibb.co.com/rRkLy7H4/background.jpg)",
        backgroundSize: "cover"
      }}
    >
      <h2 className="text-4xl md:text-8xl font-bold leading-tight">
        Human <br /> stories & ideas
      </h2>
      <p className="text-lg mt-4">
        A place to read, write, and deepen your understanding
      </p>
      <button className="mt-11 md:mt-6 bg-black text-white px-6 py-3 rounded-full text-lg">
        Start reading
      </button>
    </section>
  );
};

export default Utama;
