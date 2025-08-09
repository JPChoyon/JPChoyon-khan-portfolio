import { useState, useEffect, useRef } from "react";
import rateHomepageImg from "../../assets/images/project/rate-my-byte.png";
import bloodHomepageImg from "../../assets/images/project/blood donation full.png";
import userHomepageImg from "../../assets/images/project/user full.png";
import carHomepageImg from "../../assets/images/project/car full.png";
import blood1 from "../../assets/images/project/blood1.png";
import blood2 from "../../assets/images/project/blood2.png";
import blood3 from "../../assets/images/project/blood3.png";
import blood4 from "../../assets/images/project/blood4.png";
import blood5 from "../../assets/images/project/blood5.png";
import user1 from "../../assets/images/project/user 1.png";
import user2 from "../../assets/images/project/user 2.png";
import user3 from "../../assets/images/project/user 3.png";
import user4 from "../../assets/images/project/user 4.png";
import car1 from "../../assets/images/project/car 1.png";
import car2 from "../../assets/images/project/car 2.png";
import car3 from "../../assets/images/project/car 3.png";
import car4 from "../../assets/images/project/car 4.png";
import car5 from "../../assets/images/project/car 5.png";
import car6 from "../../assets/images/project/car 6.png";

import ProjectDetails from "./ProjectDetails";
import SectionHeader from "../../SectionHeader/SectionHeader";

// ===== Project Data =====
const projectsData = [
  {
    id: 1,
    title: "Rate My Byte",
    scrollImg: rateHomepageImg,
    images: [rateHomepageImg, rateHomepageImg, rateHomepageImg],
    shortDescription:
      "Find, share, and review the best street food spots in your city.",
    duration: "2 months",
    fullDetails:
      "Rate My Byte is a fully responsive Next.js web application that enables users to discover, post, and review street food spots. It offers both standard and premium content, with a range of interactive features such as upvoting, commenting, and star-based ratings. Users can register, manage their profiles, and access exclusive content via a subscription. The admin dashboard allows for content moderation, post approval, and user management. Key functionalities include search and filtering, image uploads, and secure JWT-based authentication. A payment gateway is integrated for subscription management. Rate My Byte is a full-stack food discovery and review platform that helps users explore restaurants, rate dishes, and share authentic food experiences. The platform features user-generated reviews, trending food spots, and local food event listings.",
    features: [
      "User Authentication: Register & login with email/password, JWT secure auth, Profile management",
      "Food Discovery: Browse street food spots, search & filter, view details",
      "Content Creation: Post new discoveries, upload images, categorize & tag",
      "Interaction: Upvote/downvote, rate, comment",
      "Premium Features: Subscribe, payment gateway, manage subscription",
      "Admin Dashboard: Approve posts, mark premium, moderate, manage users",
      "Responsive Design: Mobile-first, all devices",
    ],
    technologies: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Mongoose",
      "Prisma",
      "React Hook Form",
      "Zod",
      "JWT",
      "ShurjoPay",
    ],
    links: {
      githubClient: "https://github.com/JPChoyon/rate-my-bite-client",
      githubBackend: "https://github.com/JPChoyon/rate-my-byte-server",
      live: "https://rate-my-byte.vercel.app",
    },
  },

  {
    id: 2,
    title: "DropSync",
    scrollImg: bloodHomepageImg,
    images: [blood1, blood2, blood3, blood4, blood5],
    shortDescription:
      "Blood donation website that connects blood donors and those in need of blood.",
    duration: "1 months",
    fullDetails:
      "Welcome to the Blood Donation System Website! This web application is built using Next.js, a React framework for building server-side rendered and statically generated web applications. DropSync's main objective is to provide an effective and user-friendly blood donation website that connects blood donors and those in need of blood. By streamlining the blood donation procedure, the platform hopes to facilitate communication and coordination between blood donors and recipients or those in need of blood.",
    features: [
      "User Authentication: Users can sign up, log in, and log out securely to access the blood donation system functionalities",
      "Blood Donation Requests: Users can request blood donations by specifying their blood type and the quantity needed",
      "Donor Registration: Donors can register themselves by providing their details including blood type, contact information, and availability",
      "Search Donors: Users can search for donors based on their blood type, location, and availability",
      "Dashboard: Users and donors have personalized dashboards to manage requests, donations, and profile information",
    ],
    technologies: [
      "JavaScript",
      "Next.js",
      "Tailwind CSS",
      "Firebase",
      "React Hook Form",
      "Zod",
      "MongoDB",
      "Node.js",
      "Express.js",
      "stripe",
      "JWT",
    ],
    links: {
      githubClient: "https://github.com/JPChoyon/DropSync",
      githubBackend: "https://github.com/JPChoyon/Blood-donation-server",
      live: "https://rate-my-byte.vercel.app",
    },
  },
  {
    id: 3,
    title: "Car Store Manager",
    scrollImg: carHomepageImg,
    images: [car1, car2, car3, car4, car5, car6],
    shortDescription:
      "In the modern digital age, purchasing a car no longer starts at the dealership",
    duration: "1 week",
    fullDetails:
      "In the modern digital age, purchasing a car no longer starts at the dealership — it begins online. The Car Store Website is a comprehensive, user-centric platform designed to revolutionize how individuals explore, evaluate, and purchase vehicles. By offering a seamless browsing experience, detailed vehicle information, financing tools, and user account management, the website caters to both buyers and sellers in the automotive space.",
    features: [
      "User Authentication: Secure sign-up, login, and logout functionality for both buyers and sellers",
      "Vehicle Listings: Sellers can create detailed car listings with images, specifications, and pricing",
      "Advanced Search & Filter: Buyers can search vehicles by make, model, year, price range, mileage, and location",
      "Vehicle Comparison: Users can compare multiple cars side-by-side based on specifications and features",
      "Financing Tools: Built-in loan calculators and financing options to help buyers estimate monthly payments",
      "Favorites & Watchlist: Buyers can save favorite cars and receive notifications about price drops or availability",
      "Dashboard: Personalized dashboard for buyers to track saved cars and for sellers to manage their listings",
      "Direct Messaging: Secure in-platform chat between buyers and sellers for inquiries and negotiations",
      "Review & Rating System: Buyers can rate and review sellers to ensure trust and transparency",
      "Responsive Design: Fully optimized for desktop, tablet, and mobile browsing",
    ],
    technologies: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Shadcn/ui",
      "Mongoose",
      "Prisma",
      "Node.js",
      "Express.js",
      "ShurjoPay",
      "JWT",
    ],
    links: {
      githubClient: "https://github.com/JPChoyon/l2-assignment-4",
      githubBackend: "https://github.com/JPChoyon/car-store-server",
      live: "https://car-management-delta.vercel.app",
    },
  },
  {
    id: 4,
    title: "User Manager",
    scrollImg: userHomepageImg,
    images: [user1, user2, user3, user4],
    shortDescription:
      "Web-based platform to manage users, roles, and permissions efficiently.",
    duration: "1 week",
    fullDetails:
      "A comprehensive web-based user management system that allows administrators to easily create, edit, and delete user accounts, assign roles, and manage permissions in real-time. The platform includes secure authentication, profile management, and activity tracking to ensure smooth and controlled access across the system. Designed with a user-friendly interface and responsive design, it offers efficient search, sorting, and filtering features for quick user access. Ideal for businesses, organizations, or teams needing centralized control over user accounts and access levels.",
    features: [
      "User Authentication: Secure sign-up, login, and logout functionality with encrypted password storage",
      "Role Management: Assign, update, and revoke user roles such as Admin, Editor, or Viewer",
      "Permission Control: Define and manage access levels for different user roles to ensure data security",
      "User Profiles: Create and update detailed user profiles with personal and contact information",
      "Search & Filter: Quickly locate users by name, email, role, or status",
      "Sorting: Sort user lists by registration date, role, or activity",
      "Activity Logs: Track and monitor user actions for security and auditing purposes",
      "Bulk Actions: Perform batch operations like activating, deactivating, or deleting multiple users",
      "Responsive Dashboard: Admin dashboard for managing users, roles, and permissions from any device",
      "Notifications: Send alerts or updates to users regarding account status or role changes",
    ],

    technologies: [
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Firebase",
      "React Hook Form",
      "MongoDB",
      "Emailjs",
      "Node.js",
      "Express.js",
    ],
    links: {
      githubClient: "https://github.com/JPChoyon/user-management-system",
      githubBackend: "https://github.com/JPChoyon/user-management-backend",
      live: "https://usermangement-jpck.web.app",
    },
  },
];

// ===== Auto-Scrolling Image Component =====
const AutoScrollImage = ({ image, height }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let scrollAmount = 0;
    let direction = 2;

    const interval = setInterval(() => {
      if (container) {
        scrollAmount += direction;
        container.scrollTop = scrollAmount;

        if (scrollAmount >= container.scrollHeight - container.clientHeight) {
          direction = -2;
        } else if (scrollAmount <= 0) {
          direction = 2;
        }
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className={`${height} overflow-hidden`}>
      <img src={image} alt="project" className="w-full" />
    </div>
  );
};

// ===== Project Card =====
const ProjectCard = ({ project, onDetails }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
      <AutoScrollImage image={project.scrollImg} height="h-48" />

      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-[#00ADB5]">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-3">{project.shortDescription}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <button
          onClick={onDetails}
          className="btn bg-[#49d4db] hover:bg-[#28888d] border-0 text-[#EEEEEE] transform transition-transform duration-300 hover:-translate-y-1"
        >
          Details
        </button>
      </div>
    </div>
  );
};

// ===== Main Projects Section =====
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="project" className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <SectionHeader title={"Recent"} subtitle={"Project"}></SectionHeader>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center justify-content-center">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onDetails={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl w-full relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-red-500 hover:text-gray-800 text-xl"
            >
              ✖
            </button>

            <ProjectDetails project={selectedProject} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
