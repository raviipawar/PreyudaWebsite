import { ServiceCard } from "./ServiceCard";

const services = [
  {
    title: "Ideation",
    description: "Brainstorming and conceptualizing innovative ideas.",
    image: "/images/ideation.svg",
  },
  {
    title: "Design",
    description: "Crafting intuitive UI/UX designs.",
    image: "/images/design.svg",
  },
  {
    title: "Development",
    description: "Building scalable and maintainable software.",
    image: "/images/development.svg",
  },
  {
    title: "New Updates",
    description: "Ensuring software stays up-to-date and efficient.",
    image: "/images/continuous.svg",
  },
  {
    title: "Support",
    description: "Providing ongoing assistance and troubleshooting.",
    image: "/images/support.svg",
  },
];

const whyPreyuda = [
  "15+ years in healthcare market",
  "Highly experienced team",
  "Use live data for testing",
  "Proven successful projects",
];

export function ServicesSection() {
  return (
    <section className="bg-gray-900 max-w-7xl mx-auto px-6 py-16 space-y-20 text-white">
      {/* AI Agent Section */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <img
          src="/images/applogo.png"
          alt="AI Agent"
          className="rounded-lg shadow-lg"
        />
        <p className="text-lg font-medium leading-relaxed">
          An AI agent that will make an application as an essential healthcare tool for MR.
        </p>
      </div> */}

      {/* Software Development Framework */}
      <div>
        <h3 className="text-2xl font-bold mb-8 text-center">
          Software development framework
        </h3>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {services.map(({ title, description, image }, idx) => (
            <ServiceCard
              key={idx}
              title={title}
              description={description}
              image={image}
            />
          ))}
        </div>
      </div>

      {/* Why PreyudaTech */}
      <div>
        <h3 className="text-2xl font-bold mb-6 text-center">Why PreyudaTech</h3>
        <p className="max-w-3xl mx-auto mb-10 text-center">
          As a key player in the pharmaceutical and healthcare industry, we
          understand market needs and develop products accordingly.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {whyPreyuda.map((text, idx) => (
            <div
              key={idx}
              className="bg-gray-700 rounded-md p-6 text-center font-medium text-white"
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
