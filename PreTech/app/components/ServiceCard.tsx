import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

export function ServiceCard({ title, description, image }: ServiceCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg shadow hover:shadow-lg transition p-6 flex flex-col items-center text-center h-full">
      <img src={image} alt={title} className="h-24 w-24 object-contain mb-4" />
      <Link
        href="/"
        className="text-lg font-semibold mb-2 text-black hover:underline"
      >
        {title}
      </Link>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
}
