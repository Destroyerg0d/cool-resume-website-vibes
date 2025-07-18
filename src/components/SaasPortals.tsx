
import React from 'react';
import { ExternalLink, Globe, Code, Database, Users } from 'lucide-react';

const SaasPortals = () => {
  const portals = [
    {
      title: "Review Pro Max",
      url: "reviewpromax.com",
      description: "A comprehensive review management platform designed to help businesses collect, manage, and showcase customer reviews across multiple platforms.",
      features: [
        "Multi-platform review aggregation",
        "Automated review collection system",
        "Advanced analytics and reporting",
        "Customer feedback management"
      ],
      tech: ["React", "Node.js", "MongoDB", "API Integration"],
      icon: <Users className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      title: "The Study Hub Library",
      url: "thestudyhublib.site",
      description: "An educational portal providing comprehensive study resources, digital library access, and collaborative learning tools for students and educators.",
      features: [
        "Digital library management system",
        "Interactive study materials",
        "User collaboration features",
        "Progress tracking and analytics"
      ],
      tech: ["React", "Firebase", "Cloud Storage", "Real-time Database"],
      icon: <Database className="w-6 h-6" />,
      gradient: "from-emerald-500 to-teal-600"
    }
  ];

  return (
    <section id="saas-portals" className="py-20 px-4 bg-black/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            SAAS & Portal Development
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Specialized experience in building scalable SAAS platforms and web portals with modern technologies and user-centric design.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {portals.map((portal, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20 group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${portal.gradient} text-white`}>
                    {portal.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {portal.title}
                    </h3>
                    <div className="flex items-center text-gray-400 mt-1">
                      <Globe size={16} className="mr-2" />
                      <span>{portal.url}</span>
                    </div>
                  </div>
                </div>
                <a
                  href={`https://${portal.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <ExternalLink size={20} />
                </a>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {portal.description}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-cyan-400 mb-3 flex items-center">
                  <Code size={18} className="mr-2" />
                  Key Features:
                </h4>
                <ul className="space-y-2">
                  {portal.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-300 flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {portal.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30">
            <span className="text-cyan-300 font-medium">
              Expertise in full-stack development, cloud deployment, and scalable architecture
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaasPortals;
