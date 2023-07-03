import React from "react";

const Banner = () => {
  return (
    <section className="h-96 text-white flex justify-center align-center">
      <div className="text-primaryGray text-center">
        <h2 className="text-4xl pt-28 pb-3">Prognosis Finance</h2>
        <p className="text-lg pt-3">
          Only at Prognosis, you can build a good reliable , scalable
          prediction</p>
          <p className="pb-3 text-lg">analysis based about the best practices... you are one
          click away
        </p>
        <button className="rounded-xl text-base mt-8 mb-10 text-white bg-primaryGreen px-6 py-4">Early Access</button>
      </div>
    </section>
  );
};

export default Banner;
