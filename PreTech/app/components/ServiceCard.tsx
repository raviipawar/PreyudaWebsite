interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

export function ServiceCard({ title, description, image }: ServiceCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden max-w-xs mx-auto">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-contain p-4 bg-gray-100 dark:bg-gray-800 rounded-t-xl"
        loading="lazy"
      />
      <div className="p-5">
        <h4 className="text-lg font-semibold text-indigo-700 dark:text-indigo-400 mb-2 text-center">
          {title}
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-300 text-center leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
