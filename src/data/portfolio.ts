
export interface ProjectType {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  tags: string[];
  link?: string;
}

export const projects: ProjectType[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-featured online store with catalog, shopping cart, and secure payment processing.",
    imageUrl: "/lovable-uploads/95661185-00ca-426d-83af-95af44674e26.png",
    category: "Web Development",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#project1"
  },
  {
    id: "2",
    title: "Finance Dashboard",
    description: "Interactive analytics dashboard for financial data visualization and reporting.",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    category: "Web Application",
    tags: ["Vue.js", "D3.js", "Firebase"],
    link: "#project2"
  },
  {
    id: "3",
    title: "Health & Fitness App",
    description: "Mobile app for tracking workouts, nutrition, and personal wellness goals.",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    category: "Mobile Development",
    tags: ["React Native", "GraphQL", "AWS"],
    link: "#project3"
  },
  {
    id: "4",
    title: "Real Estate Marketplace",
    description: "Property listing platform with advanced search, virtual tours, and agent networking.",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    category: "Web Development",
    tags: ["Angular", "Express.js", "PostgreSQL"],
    link: "#project4"
  },
  {
    id: "5",
    title: "Learning Management System",
    description: "Educational platform for course delivery, student management, and progress tracking.",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    category: "Web Application",
    tags: ["Next.js", "Django", "MySQL"],
    link: "#project5"
  },
  {
    id: "6",
    title: "IoT Control Center",
    description: "Dashboard for monitoring and controlling smart home and industrial IoT devices.",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    category: "IoT",
    tags: ["React", "WebSockets", "Python"],
    link: "#project6"
  }
];
