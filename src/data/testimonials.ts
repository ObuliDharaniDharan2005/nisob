
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
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechFirm Inc.",
    content: "NISOB Technology delivered an exceptional e-commerce platform that exceeded our expectations. Their team was responsive, professional, and brought creative solutions to every challenge.",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    id: "2",
    name: "David Chen",
    role: "CTO",
    company: "FinanceHub",
    content: "Working with NISOB was a game-changer for our company. Their expertise in developing our analytics dashboard improved our decision-making process drastically.",
    avatar: "https://i.pravatar.cc/150?img=8"
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Founder",
    company: "HealthTech",
    content: "Our mobile application developed by NISOB has received outstanding feedback from users. The attention to detail and focus on user experience has set us apart from competitors.",
    avatar: "https://i.pravatar.cc/150?img=5"
  }
];
