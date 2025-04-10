
import React, { useState } from "react";
import { projects, ProjectType } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  // Get unique categories
  const categories = ["All", ...Array.from(new Set(projects.map((project) => project.category)))];
  
  // Filter projects based on active filter
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="heading-lg mb-4">Our Portfolio</h2>
          <p className="subtitle">
            Explore our latest projects and see how we've helped businesses achieve their digital goals.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md group">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <a 
            href={project.link || "#"} 
            className="bg-white text-primary p-3 rounded-full transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300"
          >
            <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg">{project.title}</h3>
          <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
            {project.category}
          </span>
        </div>
        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span key={index} className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-700">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
