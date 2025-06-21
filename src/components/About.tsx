import React from "react";

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number; // percentage (0–100)
}

interface Job {
  company: string;
  position: string;
  startDate: string; // e.g. "Jan 2022"
  endDate?: string; // e.g. "Present" or "Dec 2023"
  description: string;
  location?: string;
}

interface AboutProps {
  name: string;
  intro: string;
  skills: Skill[];
  jobs: Job[];
  avatarUrl?: string;
  location?: string;
  interests?: string[];
}

const About: React.FC<AboutProps> = ({
  name,
  intro,
  jobs,
  avatarUrl,
  location,
  interests,
}) => {
  return (
    <div
      id="about"
      className="min-h-screen  flex flex-col items-center justify-center px-4 py-12"
    >
      {/* Wrapper container with responsive flex direction */}
      <div className="flex flex-col lg:flex-row max-w-7xl w-full gap-12">
        {/* About Me Section */}
        <section className="flex-1 bg-white shadow-xl rounded-lg p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="flex-shrink-0">
            <img
              src={
                avatarUrl ||
                "https://ui-avatars.com/api/?name=User&background=4F46E5&color=fff&size=128"
              }
              alt={`${name}'s avatar`}
              className="w-40 h-40 rounded-full object-cover border-4 border-indigo-500"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-4xl font-bold text-indigo-700 mb-2">
              About Me
            </h2>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {name}
            </h3>

            {location && (
              <p className="text-sm text-gray-500 mb-2">
                <span className="font-medium">Location:</span> {location}
              </p>
            )}

            <p className="text-gray-700 leading-relaxed mb-6">{intro}</p>

            {/* <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Skills & Tech Stack:
              </h4>
              <ul className="space-y-4">
                {skills.map((skill) => (
                  <li key={skill.name}>
                    <div className="flex items-center mb-1">
                      <span className="text-xl mr-2">{skill.icon}</span>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-indigo-500 h-3 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div> */}

            {interests && interests.length > 0 && (
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Interests:
                </h4>
                <ul className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <li
                      key={interest}
                      className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {interest}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="flex-1 max-w-full bg-white rounded-lg shadow-md p-8 md:p-12">
          <h2 className="text-4xl font-bold text-indigo-700 mb-8">
            Work Experience
          </h2>
          <div className="space-y-8">
            {jobs.map((job, idx) => (
              <div key={idx} className="border-l-4 border-indigo-500 pl-6">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {job.position}
                  </h3>
                  <span className="text-sm text-gray-600">
                    {job.startDate} - {job.endDate || "Present"}
                  </span>
                </div>
                <p className="text-indigo-700 font-medium">{job.company}</p>
                {job.location && (
                  <p className="text-gray-600 italic">{job.location}</p>
                )}
                <p className="mt-2 text-gray-700 leading-relaxed">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
