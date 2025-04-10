
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 pt-16"
    >
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-up">
          <h1 className="heading-xl text-gray-900">
            Turn <span className="text-primary">Ideas</span> into 
            <span className="text-secondary"> Digital Reality</span>
          </h1>
          <p className="subtitle max-w-md">
            We design and develop exceptional websites and applications
            that drive growth and deliver outstanding user experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="gap-2 group">
              View Our Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              Contact Us
            </Button>
          </div>
          
          <div className="pt-4 flex items-center gap-8">
            <div>
              <p className="font-bold text-3xl text-primary">50+</p>
              <p className="text-sm text-muted-foreground">Projects Completed</p>
            </div>
            <div className="h-12 w-px bg-gray-200"></div>
            <div>
              <p className="font-bold text-3xl text-primary">98%</p>
              <p className="text-sm text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
        
        <div className="relative animate-fade-up animate-delay-200">
          <div className="relative z-10 bg-white p-4 rounded-lg shadow-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80" 
              alt="Digital Solutions" 
              className="w-full h-auto rounded" 
            />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/80 to-transparent"></div>
          </div>
          <div className="absolute top-8 -right-8 w-24 h-24 bg-secondary/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary/5 rounded-full"></div>
    </section>
  );
};

export default Hero;
