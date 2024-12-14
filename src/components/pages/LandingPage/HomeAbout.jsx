import { motion } from "framer-motion";
import { useGradientUpdater } from "../../hooks/useGradientUpdater";
import { Lottie } from "../../hooks/lottie/lottie";

const UPLIFT_DELIVERY_DATA = [
  {
    id: "uplift_1",
    icon: "https://lottie.host/d4392835-632b-4f74-a7ae-5f5390a7ffe7/31aRmCtS1n.json",
    title: "Aim",
    h: "120px",
    w: "120px",
    description:
      "We aim to enhance coding skills and foster innovation through interactive events and workshops. We provide a platform for hands-on learning, collaboration, and preparation for future tech challenges.",
  },
  {
    id: "uplift_2",
    icon: "https://lottie.host/896c317c-62e2-40a1-b6b3-29811c436add/RkxZid3wpL.json",
    title: "Mission",
    h: "120px",
    w: "120px",
    description:
      "Our mission is to foster the growth and excellence of our college's coding culture. We strive to build a community that inspires creativity, teamwork, and a passion for technology.",
  },
  {
    id: "uplift_3",
    icon: "https://lottie.host/8fa8caaf-55e1-4fee-a878-fceb4ef7aa64/qIhS3VcrZ6.json",
    h: "120px",
    w: "120px",
    title: "Vision",
    description:
      "Our vision is to empower students in coding and technology by fostering innovation, collaboration, and hands-on learning, shaping skilled developers for the tech industry's future.",
  },
];

const HomeAbout = () => {
  const gradientRefs = useGradientUpdater();
 
  return (
    <section className="h-auto bg-gray-900 text-white py-10 px-4 mx-auto relative overflow-hidden z-50">
   
      {/* <div className="absolute inset-0 z-0 grid grid-cols-7 grid-rows-7 gap-0 opacity-5">
        {[...Array(49)].map((_, index) => (
          <div key={index} className="border border-gray-700"></div>
        ))}
      </div> */}

      <div className="max-w-[1200px] mx-auto z-10 relative">
        <div className="flex flex-col items-center justify-center max-w-[1020px] mx-auto text-center font-montserrat flex-1 relative z-20 mt-[20px] px-4 h-auto">
          <h1 className="text-white font-bold xl:text-[54px] lg:text-5xl text-4xl leading-[1.25] h-auto mx-auto">
            About Us
          </h1>
        </div>
        <motion.div
          className="rounded-3xl p-[3px] mt-10 backface-visibility-hidden transform-style-flat will-change-transform"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="rounded-xl flex flex-col justify-center items-center h-full md:min-h-[180px] min-h-auto w-full bg-[rgba(255,255,255,0.1)] py-3 px-2 z-50 mx-auto">
            <h4 className="lg:mt-3 md:mt-3 mt-2 mx-auto mb-3 lg:text-xl md:text-lg text-lg text-white text-center px-4 z-50 font-montserrat">
              The Coders & Developers Club MMMUT fosters a strong coding culture
              by empowering students with continuous learning, tech awareness,
              and active contest involvement. Collaborating with faculty and
              alumni, we equip members with industry-relevant skills, inspiring
              innovation, teamwork, and technical excellence.
            </h4>
          </div>
        </motion.div>
      </div>

      <section className="lg:py-[65px] py-10 px-4 mx-auto relative z-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 s:grid-cols-2 xxl:gap-10 xl:gap-18 lg:gap-18 gap-28 lg:mt-5 md:mt-3 mt-4">
            {UPLIFT_DELIVERY_DATA?.map(
              ({ id, title, icon, description, w, h }, index) => (
                <motion.div
                  key={id}
                  className="bg-grad-theme-135 z-20 rounded-2xl p-[3px] md:min-h-[215px] xxs:min-h-[215px] min-h-auto mb-2"
                  ref={(el) => (gradientRefs.current[index] = el)}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="rounded-2xl bg-jet flex flex-col items-center h-full lg:p-4 md:p-2 p-2 pt-0 relative">
                    <div className="absolute -top-16 left-1/2 transform -translate-x-[60%]  w-24 h-24 ">
                      <Lottie link={icon} wid={w} hig={h} />
                    </div>
                    <h4 className="lg:text-2xl md:text-xl font-extrabold text-base text-center text-blue-100 font-montserrat mt-10 sm:mt-7 mb-3">
                      {title}
                    </h4>
                    <p className="lg:text-base text-sm font-source-sans text-white text-center p-4 lg:mx-4">
                      {description}
                    </p>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>
    </section>
  );
};

export default HomeAbout;
