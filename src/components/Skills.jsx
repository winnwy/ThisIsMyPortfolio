const Skills = () => {
    const skills = {
      Languages: ["Python", "JavaScript", "Java", "C/C++", "SQL", "HTML/CSS"],
      Frameworks: ["React", "Django", "Node.js", "Spring Boot"],
      Tools: ["Git", "Docker", "Postman", "VS Code", "IntelliJ IDEA"],
    };
  
    return (
      <section className="py-20 border-b border-neutral-900">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-bold text-neutral-300 mb-12">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-neutral-900 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-purple-400 mb-4">{category}</h3>
                <ul className="space-y-2">
                  {items.map((skill) => (
                    <li key={skill} className="text-neutral-300">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;