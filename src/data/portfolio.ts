
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
    description: "A full-featured online car reselling  store with catalog, shopping cart, and secure payment processing.",
    imageUrl: "/lovable-uploads/95661185-00ca-426d-83af-95af44674e26.png",
    category: "Web Development",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#project1"
  },
  {
    id: "2",
    title: "Finance Dashboard",
    description: " UPCOMING Interactive analytics dashboard for financial data visualization and reporting.",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    category: "Mobile App Application",
    tags: ["Vue.js", "D3.js", "Firebase"],
    link: "#project2"
  },
  {
    id: "3",
    title: "COLLEGE SYMPOSIUM ",
    description: "Web app for tracking registeration.",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    category: "web Development",
    tags: ["React Native", "GraphQL", "AWS"],
    link: "#project3"
  },
];
