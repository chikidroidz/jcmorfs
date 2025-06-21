import React from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  demoUrl?: string;
  repoUrl?: string;
  imageUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Bantay Baha",
    description:
      "A personal portfolio website built with React and Tailwind CSS.",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://your-demo-url.com",
    repoUrl: "https://github.com/yourusername/portfolio",
    // Using placehold.co with custom text and colors
    imageUrl: "https://placehold.co/400x200/007bff/ffffff?text=Portfolio+Site",
  },
  {
    id: 2,
    title: "Chat App",
    description: "Realtime chat application using Firebase and React.",
    techStack: ["React", "Firebase", "CSS"],
    demoUrl: "https://your-chatapp-demo.com",
    repoUrl: "https://github.com/yourusername/chat-app",
    // Using placehold.co with custom text and different colors
    imageUrl:
      "https://placehold.co/400x200/28a745/ffffff?text=Chat+Application",
  },
  {
    id: 3, // Added a third dummy project for demonstration
    title: "E-commerce Store",
    description: "A full-stack e-commerce platform with Stripe integration.",
    techStack: ["Next.js", "Node.js", "Express", "MongoDB", "Stripe"],
    demoUrl: "https://your-ecommerce-demo.com",
    repoUrl: "https://github.com/yourusername/ecommerce-store",
    // Using placehold.co with simple dimensions and default colors
    imageUrl: "https://placehold.co/400x200",
  },
  // Add more projects here
];

const ProjectsGallery: React.FC = () => {
  return (
    <section id="projects">
      <div className="flex flex-col  justify-center aspect-video  max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-left text-white">
          Projects
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
          {projects.map(
            ({
              id,
              title,
              description,
              techStack,

              imageUrl,
            }) => (
              <div
                key={id}
                className="bg-white  rounded-lg shadow-md overflow-hidden flex flex-col
             transform transition-transform duration-300 hover:scale-105 cursor-pointer"
              >
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt={`${title} screenshot`}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-black  flex-grow">{description}</p>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                      <li
                        key={tech}
                        className="bg-blue-100 text-black text-xs font-medium px-2.5 py-0.5 rounded"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGallery;
