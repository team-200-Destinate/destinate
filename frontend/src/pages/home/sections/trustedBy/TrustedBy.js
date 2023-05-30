import React from "react";
import { Link } from "react-router-dom";
import ButtonEM from "../../../../components/ButtonEM/ButtonEM";

function TrustedBy() {
  return (
    <section className=".trusted-by">
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-2 gap-10 sm:gap-y-16 sm:grid-cols-3 xl:grid-cols-6">
            <div>
              <img
                className="object-contain w-auto mx-auto h-14"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-1.png"
                alt=""
              />
            </div>

            <div>
              <img
                className="object-contain w-auto mx-auto h-14"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-2.png"
                alt=""
              />
            </div>

            <div>
              <img
                className="object-contain w-auto mx-auto h-14"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-3.png"
                alt=""
              />
            </div>

            <div>
              <img
                className="object-contain w-auto mx-auto h-14"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-4.png"
                alt=""
              />
            </div>

            <div>
              <img
                className="object-contain w-auto mx-auto h-14"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-5.png"
                alt=""
              />
            </div>

            <div>
              <img
                className="object-contain w-auto mx-auto h-14"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-6.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <section class="py-10 bg-gray-100 sm:py-16 lg:py-24">
          <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div class="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
              <div class="relative mb-12">
                <img
                  class="w-full rounded-md"
                  src="https://images.pexels.com/photos/8828672/pexels-photo-8828672.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />

                <div class="absolute w-full max-w-xs px-4 -translate-x-1/2 sm:px-0 sm:max-w-sm left-1/2 -bottom-12 ">
                  <div class="overflow-hidden bg-white rounded shadow-lg">
                    <div class="px-8 py-6">
                      <div class="flex items-center">
                        <p class="flex-shrink-0 text-3xl font-bold text-blue-600 sm:text-4xl">
                          90%
                        </p>
                        <p class="pl-6 text-sm font-medium text-black sm:text-lg">
                          Supported countries,
                          <br />
                          Airlines and Hotels.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div class="flex items-center justify-center w-16 h-16 bg-white rounded-full">
                  <svg
                    class="w-8 h-8 text-orange-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h2 class="mt-10 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                  Find the cheapest flight within secondes !
                </h2>
                <p class="mt-6 text-lg leading-relaxed text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia conse duis enim velit mollit.
                  Exercitation veniam.
                </p>
                <Link to="/planing" className="button-link">
                  <ButtonEM />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}

export default TrustedBy;
