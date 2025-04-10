
export interface TestimonialType {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

export const testimonials: TestimonialType[] = [
  {
    id: "1",
    name: "Siva",
    role: "Marketing Director",
    company: "vijay auto cosulting",
    content: "NISOB Technology delivered an exceptional e-commerce platform (car reselling)that exceeded our expectations. Their team was responsive, professional, and brought creative solutions to every challenge.",
    avatar: ""
  },
  {
    id: "2",
    name: "kalaikumar",
    role: "student",
    company: "Dhirajlal gandhi college of technology",
    content: "NISOB Technology delivered an exceptional symposium website that exceeded our expectations. Their team was responsive, professional, and brought creative solutions to every challenge.",
    avatar: ""
  },


];
