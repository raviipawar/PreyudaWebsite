import { ServiceCard } from './ServiceCard';

const services = [
  {
    title: 'Healthcare & Pharma',
    description: 'Advancing healthcare solutions for a healthier tomorrow.',
    image: '/images/healthcare.jpg',
  },
  {
    title: 'Education & Learning',
    description: 'Innovative e-learning platforms tailored for all ages.',
    image: '/images/education.jpg',
  },
  {
    title: 'Yoga & Fitness',
    description: 'Empowering holistic well-being through movement and mindfulness.',
    image: '/images/yoga.jpg',
  },
  {
    title: 'Software Services',
    description: 'Software services designed to meet customer needs.',
    image: '/images/education.jpg',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-4 py-12">
      <h3 className="text-3xl font-bold mb-8 text-center">Our Services</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
}