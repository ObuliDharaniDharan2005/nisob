
import React from "react";
import { Monitor, Smartphone, Code, PenTool, BarChart, Zap } from "lucide-react";

const services = [
  {
    icon: <Monitor size={24} />,
    title: "Website Development",
    description: "Custom, responsive websites that engage visitors and convert them into customers."
  },
  {
    icon: <Smartphone size={24} />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android devices."
  },
  {
    icon: <Code size={24} />,
    title: "Custom Software",
    description: "Tailored software solutions that automate processes and solve business challenges."
  },
  {
    icon: <PenTool size={24} />,
    title: "UI/UX Design",
    description: "User-centered design that creates intuitive, engaging digital experiences."
  },
  {
    icon: <BarChart size={24} />,
    title: "Digital Marketing",
    description: "Strategic marketing campaigns that increase visibility and drive conversions."
  },
  {
    icon: <Zap size={24} />,
    title: "Performance Optimization",
    description: "Speed up your digital platforms and improve user experience significantly."
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="heading-lg mb-4">Our Services</h2>
          <p className="subtitle">
            We offer a comprehensive range of digital services to help your business
            thrive in the digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] border border-gray-100"
            >
              <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                <div className="text-primary">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
