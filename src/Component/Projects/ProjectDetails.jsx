import { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

const ProjectDetails = ({ project }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % project.images.length);
    }, 2000); // Change every 2 seconds
    return () => clearInterval(timer);
  }, [project.images.length]);

  return (
    <div className="max-w-4xl mx-auto p-5">
      {/* Image Slider */}
      <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg shadow-lg">
        {project.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`absolute w-full h-full object-cover 
              transition-all duration-[1500ms] ease-in-out
              ${
                index === currentImage
                  ? "opacity-100 scale-105"
                  : "opacity-0 scale-100"
              }`}
          />
        ))}
      </div>

      {/* Project Links */}
      <div className="flex flex-wrap gap-4 mt-6 justify-center">
        {project.links?.githubClient && (
          <a
            href={project.links.githubClient}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1DA69E] text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            GitHub Client
          </a>
        )}
        {project.links?.githubBackend && (
          <a
            href={project.links.githubBackend}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#51C177] text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            GitHub Backend
          </a>
        )}
        {project.links?.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Live Site
          </a>
        )}
      </div>
      {/* Project Info */}
      <div className="mt-8 space-y-6">
        {/* Overview */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            📝 Overview
          </h2>
          <p className="text-gray-700">{project.shortDescription}</p>
        </section>

        {/* Duration */}
        <section>
          <h3 className="font-medium text-gray-800">⏱️ Duration</h3>
          <p className="text-gray-600">{project.duration}</p>
        </section>

        {/* Full Details */}
        <section>
          <h3 className="font-medium text-gray-800">📖 Full Details</h3>
          <p className="text-gray-700">{project.fullDetails}</p>
        </section>
        {/* Features */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">✨ Features</h2>
          <ul className="space-y-2">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-2" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Technologies */}
        <section>
          <h3 className="font-medium text-gray-800">🛠️ Technologies Used</h3>
          <ul className="list-disc pl-5 text-gray-700">
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetails;
