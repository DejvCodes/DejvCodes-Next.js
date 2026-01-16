"use client";
import Link from "next/link";
import {PROJECTS} from "../constants";
import ScrollReveal from "./ScrollReveal";

const Projects = () => {
  return <section id="projects" className="relative bg-slate-900/30 py-17 sm:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal>
        <div className="mb-7">
          <h2 className="text-white font-bold text-3xl md:text-4xl mb-2">
            Selected <span className="text-light-blue">Works</span>
          </h2>
          <div className="w-20 h-1.5 bg-light-blue rounded-full" />
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {PROJECTS.map((project, index) => {
          return (
            <ScrollReveal key={project.id} delay={index * 100}>
              <div
                key={project.id}
                className="h-55 sm:h-63 group relative overflow-hidden rounded-2xl bg-slate-900/30"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700"
                />

                <div className="absolute inset-0 flex flex-col justify-end bg-slate-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-7">
                  <div className="transform group-hover:translate-y-0 transition-transform duration-500">
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-between items-end"
                    >
                      <h4 className="text-2xl font-bold text-white">
                        {project.title}
                      </h4>
                      <svg className="w-8 h-8 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7V17"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )
        })}
      </div>
    </div>
  </section>
}

export default Projects