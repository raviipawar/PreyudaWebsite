import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

export function ServiceCard({ title, description, image }: ServiceCardProps) {
  return (
    <div className="bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition p-6 flex flex-col items-center text-center max-w-xs mx-auto h-72">
      <img
        src={image}
        alt={title}
        className="h-24 w-24 object-contain mb-6"
        loading="lazy"
      />
      <Link
        href="/"
        className="text-lg font-semibold mb-4 text-black hover:underline truncate max-w-full"
      >
        {title}
      </Link>
      <p className="text-gray-300 text-sm leading-relaxed hidden sm:block flex-grow overflow-hidden line-clamp-3">
        {description}
      </p>
    </div>
  );
}
