import React from "react";
import "./infoAbout.scss";
import { FaUsers, FaBookOpen } from "react-icons/fa";

function InfoAbout() {
  const team = [
    {
      avatar:
        "https://cdn.discordapp.com/attachments/1111616935579373670/1113111212109086872/sham.png",
      name: "Sham Jalal",
      title: "Desinger/coder",
      desc: "A great team member and hard working very glad she is part of the team.",
      linkedin: "https://www.linkedin.com/in/sham-ahmad-b75984250/",
     
      github: "https://github.com/orgs/team-200-Destinate/people/ShamAhmad2022",
    },
    {
      avatar:
        "https://avatars.githubusercontent.com/u/101422079?v=4",
      name: "Mohammed Attala",
      title: "CIS engineer/coder",
      desc: "A great team member and hard working very glad he is part of the team.",
      linkedin: "https://www.linkedin.com/in/mohammad-attallah-01601b1a4/",
     
      github: "https://github.com/mohAttallah",
    },
    {
      avatar:
        "https://avatars.githubusercontent.com/u/92924350?v=4",
      name: "Saleh Almashni",
      title: "Software engineer/coder/Lead desinger",
      desc: "A very skilled and  helpful dude that i am glad he is on our team.",
      linkedin: "https://www.linkedin.com/in/saleh-almashni/",
     
      github: "https://github.com/saleh2001k:void(0)",
    },
    {
      avatar:
        "https://avatars.githubusercontent.com/u/67604121?v=4",
      name: "Laith Saleem",
      title: "Coder/Engineer",
      desc: "A great team member and hard working very glad he is part of the team.",
      linkedin: "https://www.linkedin.com/in/laith-s-757591112/",
     
      github: "https://github.com/Laith-Vlad",
    },
  ];
  return (
    <section className="info-about">
      <div className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 lg:items-stretch md:grid-cols-2 gap-y-8 gap-x-12 xl:gap-x-20">
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3">
                <img
                  className="object-cover w-full h-96 rounded-xl"
                  src="https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/2020-08/shutterstock_1731284125_0.jpg?itok=89UrdUt_"
                  alt=""
                />
              </div>

              
            </div>

            <div className="flex flex-col justify-between md:py-5">
              <blockquote>
                <p className="text-2xl leading-relaxed text-black">
                Welcome to our aspiring team of young developers dedicated to creating a reliable and exceptional service for travelers like you. At our core, we are driven by a passion for innovation and a deep understanding of the evolving needs of modern-day adventurers.</p>
              </blockquote>


            </div>
          </div>
        </div>
      </div>
      {/* ---- */}
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid items-center md:grid-cols-2 md:gap-x-20 gap-y-10">
            <div className="relative pl-16 pr-10 sm:pl-6 md:pl-0 xl:pr-0 md:order-2">
              <img
                className="absolute top-6 -right-4 xl:-right-12"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/features/3/dots-pattern.svg"
                alt=""
              />

              <div className="relative max-w-xs ml-auto">
                <div className="overflow-hidden aspect-w-3 aspect-h-4 rounded-xl">
                  <img
                    className="object-cover w-full h-full scale-150"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/features/3/man-woman-discussing.jpg"
                    alt=""
                  />
                </div>

                <div className="absolute bottom-0 -left-16">
               
                </div>
              </div>
            </div>

            <div className="md:order-1">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Our vision 
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
              At Destinate, our vision is to redefine the way people experience travel. We are driven by a relentless commitment to providing our customers with the best and most effective travel solutions available. Through innovative technologies, personalized experiences, and a dedicated team, we aim to transform the way you explore the world. Join us on this exciting journey as we strive to make travel effortless, enriching, and unforgettable. 
              </p>


            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <div className="vew"></div>
      {/*  */}
      <section className="team py-14">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="max-w-xl">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Meet our talent team
            </h3>
            <p className="text-gray-600 mt-3">

            </p>
          </div>

          <div class="relative">
            {/* <img class="absolute top-0 left-0" src="https://picsum.photos/536/354" alt="Workplace" width="600" />

<img class=" absolute top-0 left-0 mt-32 ml-40 hover:shadow-outline" src="https://picsum.photos/535/354" width="600" /> */}
          </div>

          <div className="mt-12 membres">
            <ul className="grid gap-8 lg:grid-cols-2">
              {team.map((item, idx) => (
                <li key={idx} className="gap-8 sm:flex">
                  <div className="w-96 h-60">
                    <img
                      src={item.avatar}
                      className="w-60 h-60 object-cover object-center shadow-md rounded-xl"
                      alt=""
                    />
                  </div>
                  <div className="mt-4 sm:mt-0">
                    <h4 className="text-lg text-gray-700 font-semibold">
                      {item.name}
                    </h4>
                    <p className="text-indigo-600">{item.title}</p>
                    <p className="text-gray-600 mt-2">{item.desc}</p>
                    <div className="mt-3 flex gap-4 text-gray-400">
                     
                      <a href={item.github}>
                        <svg
                          className="w-5 h-5 duration-150 hover:text-gray-500"
                          fill="currentColor"
                          viewBox="0 0 48 48"
                        >
                          <g fill="currentColor" clip-path="url(#clip0_910_44)">
                            <path
                              fill-rule="evenodd"
                              d="M24 1A24.086 24.086 0 008.454 6.693 23.834 23.834 0 00.319 21.044a23.754 23.754 0 003.153 16.172 23.98 23.98 0 0012.938 10.29c1.192.221 1.641-.518 1.641-1.146 0-.628-.024-2.45-.032-4.442-6.676 1.443-8.087-2.817-8.087-2.817-1.089-2.766-2.663-3.493-2.663-3.493-2.178-1.478.163-1.45.163-1.45 2.413.17 3.68 2.461 3.68 2.461 2.138 3.648 5.616 2.593 6.983 1.976.215-1.545.838-2.596 1.526-3.193-5.333-.6-10.937-2.647-10.937-11.791a9.213 9.213 0 012.472-6.406c-.246-.6-1.069-3.026.234-6.322 0 0 2.015-.64 6.602 2.446a22.904 22.904 0 0112.017 0c4.583-3.086 6.594-2.446 6.594-2.446 1.307 3.288.484 5.714.238 6.322a9.194 9.194 0 012.476 6.414c0 9.163-5.615 11.183-10.957 11.772.859.742 1.626 2.193 1.626 4.421 0 3.193-.028 5.762-.028 6.548 0 .636.433 1.38 1.65 1.146a23.98 23.98 0 0012.938-10.291 23.754 23.754 0 003.151-16.175A23.834 23.834 0 0039.56 6.69 24.086 24.086 0 0024.009 1H24z"
                              clip-rule="evenodd"
                            />
                            <path d="M9.089 35.264c-.052.119-.243.154-.398.071-.155-.083-.27-.237-.214-.36.056-.122.242-.154.397-.07.155.082.274.24.215.359zM10.063 36.343a.4.4 0 01-.493-.11c-.155-.167-.187-.396-.068-.499.12-.102.334-.055.489.11.155.167.19.396.072.499zM11.008 37.714c-.147.103-.397 0-.536-.206a.395.395 0 010-.569c.147-.098.397 0 .537.202.139.202.143.47 0 .573zM12.292 39.042c-.131.146-.397.106-.616-.091-.219-.198-.27-.467-.139-.609.131-.142.397-.102.624.091.226.194.27.466.131.609zM14.092 39.816c-.06.186-.33.269-.6.19-.27-.08-.449-.3-.397-.49.051-.19.326-.277.6-.19.274.087.449.297.397.49zM16.056 39.95c0 .194-.223.36-.509.364-.286.004-.52-.154-.52-.348 0-.193.222-.36.508-.363.286-.004.52.15.52.347zM17.884 39.646c.036.194-.163.395-.45.443-.285.047-.536-.067-.572-.257-.035-.19.171-.395.45-.447.278-.05.536.068.572.261z" />
                          </g>
                          <defs>
                            <clipPath id="clip0_910_44">
                              <path fill="currentColor" d="M0 0h48v48H0z" />
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                      <a href={item.linkedin}>
                        <svg
                          className="w-5 h-5 duration-150 hover:text-gray-500"
                          fill="none"
                          viewBox="0 0 48 48"
                        >
                          <g clip-path="url(#clip0_17_68)">
                            <path
                              fill="currentColor"
                              d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_17_68">
                              <path fill="currentColor" d="M0 0h48v48H0z" />
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
}

export default InfoAbout;