import React from "react";

function AboutUs() {
  return (
    <div className="bg-white text-gray-800">
        <h1 className="text-center text-4xl font-bold">About Us</h1>
      {/* Section 1 - Image on Right */}
      <section className="mt-6">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div>
              <div className="max-w-lg md:max-w-none">
                <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                  Building the Future, One Line of Code at a Time
                </h2>
                <p className="mt-4 text-gray-700">
                  At our core, we are developers, designers, and thinkers striving to build modern solutions for everyday problems using cutting-edge technologies.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop"
                className="rounded shadow"
                alt="Team working"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Image on Left */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8 md:flex-row-reverse">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop"
                className="rounded shadow"
                alt="Our culture"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="max-w-lg md:max-w-none">
                <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                  A Culture That Inspires Growth
                </h2>
                <p className="mt-4 text-gray-700">
                  We foster a work culture that values creativity, collaboration, and continuous learning — helping our team and clients grow together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
