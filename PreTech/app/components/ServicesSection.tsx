import { ServiceCard } from "./ServiceCard";
import Link from "next/link";

const services = [
  {
    title: "Ideation",
    description: "Brainstorming and conceptualizing innovative ideas.",
    link: "/",
    image: "/images/applogo.png",
  },
  {
    title: "Design",
    description: "Crafting intuitive UI/UX designs.",
    link: "/",
    image: "/images/applogo.png",
  },
  {
    title: "Development",
    description: "Building scalable and maintainable software.",
    link: "/",
    image: "/images/applogo.png",
  },
  {
    title: "Support",
    description: "Providing ongoing assistance and troubleshooting.",
    link: "/",
    image: "/images/applogo.png",
  },
];

const successStories = [
  {
    title: "Hospital Digitalization",
    description: "Transformed hospital operations with AI-powered solutions.",
    link: "/",
    image: "/images/success/applogo.png",
  },
  {
    title: "MR Productivity Boost",
    description: "Enabled MRs to increase outreach by 40% using smart routing.",
    link: "/",
    image: "/images/success/applogo.png",
  },
  {
    title: "Real-time Pharma Insights",
    description: "Live dashboards to track medicine sales across regions.",
    link: "/",
    image: "/images/success/applogo.png",
  },
  {
    title: "AI-Driven Patient Care",
    description: "Improved adherence by 30% through intelligent tracking.",
    link: "/",
    image: "/images/success/applogo.png",
  },
];

export function ServicesSection() {
  return (
    <section className="w-full bg-[#0B0F19] text-white py-16 px-4 sm:px-6 md:px-10 space-y-20">
      {/* Software Development Framework */}
      <div>
        <h3 className="text-2xl font-bold mb-6 text-center">Our Services</h3>
        <p className="max-w-3xl mx-auto mb-10 text-center text-gray-300">
          We Provide Services and Solution in Below Sectors
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map(({ title, description, link, image }, idx) => (
            <Link
              key={idx}
              href={link}
              className="block bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex flex-col items-center justify-center text-center text-black dark:text-white">
                <h4 className="text-lg font-bold mb-2">{title}</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Success Stories */}
      <div>
        <h3 className="text-2xl font-bold mb-6 text-center">Testimonial</h3>
        <p className="max-w-3xl mx-auto mb-10 text-center text-gray-300">
          <b>Listen To What Our Happy Client Say</b>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {successStories.map(({ title, description, link, image }, idx) => (
            <Link
              key={idx}
              href={link}
              className="block bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex flex-col items-center justify-center text-center text-black dark:text-white">
                <h4 className="text-lg font-bold mb-2">{title}</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
