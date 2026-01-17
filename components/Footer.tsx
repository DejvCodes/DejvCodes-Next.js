'use client';
import Link from "next/link";
import {FOOTER_CONTENT} from "@/constants";
import ScrollReveal from './ScrollReveal';

const Footer = () => {
  return <footer className="relative border-t border-slate-800/50 overflow-hidden">
    <div className="absolute inset-0 bg-linear-to-b from-slate-900/20 via-slate-950/40 to-black"></div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <ScrollReveal>
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-slate-300 mt-4">
                {FOOTER_CONTENT.name}
              </h2>
            </div>
            <div className="w-20 h-1 bg-linear-to-r from-light-blue to-transparent rounded-full" />
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="space-y-4 md:text-right flex flex-col md:items-end md:justify-center">
            <p className="text-lg text-slate-400">{FOOTER_CONTENT.role}</p>
            <div className="flex flex-col gap-1 text-slate-500">
              <span>{FOOTER_CONTENT.location}</span>
              <span>{FOOTER_CONTENT.ico}</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
      <ScrollReveal delay={200}>
        <div className="border-t border-slate-800/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-2">
              <p className="text-slate-500 text-sm">
                &copy; {FOOTER_CONTENT.year} {FOOTER_CONTENT.copyright}
              </p>
              <Link 
                href={FOOTER_CONTENT.privacyLink} 
                className="text-slate-500 hover:text-light-blue text-sm transition-colors"
              >
                {FOOTER_CONTENT.privacyText}
              </Link>
            </div>
            
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700/50 hover:border-light-blue/30 transition-colors">
                {FOOTER_CONTENT.badge}
              </span>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-light-blue/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
    </div>
  </footer>
}

export default Footer