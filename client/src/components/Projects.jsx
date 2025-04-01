import authuser from '../assets/authUser.png'
import contact_app from '../assets/contact-app.png'
import eduplay from '../assets/eduplay.png'
export default function Project() {
    const projects = [
      {
        title: 'AuthUser',
        description: 'Built a secure login/register app using React and Node.js. Integrated Google & Local auth via Passport.js, with session handling and user profile management.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
        image: authuser,
        demoLink: 'https://your-ecommerce-demo.com',
        codeLink: 'https://github.com/aravindjadagala21/AuthUser'
      },
      
      {
        title: 'Contact Management App',
        description: 'Built a CRUD contact manager with React Hooks and JSON Server. Users can add/edit/delete contacts with a clean UI',
        technologies: ['React', 'tailwind','jsonserver'],
        image: contact_app,
        
        codeLink: 'https://github.com/aravindjadagala21/contact-app'
      },
      {
        title: 'Eduplay',
        description: 'Developed a kid-friendly educational app with video lessons and interactive games. Created login/registration system and responsive UI',
        technologies: ['Html', 'css','javascript','express','Mysql'],
        image: eduplay,
        
        codeLink: 'https://github.com/aravindjadagala21/eduplay'
      },
    ];
  
    return (
      <section id="projects" 
      className="
      min-h-screen
      flex justify-center items-center
      ">
        <div className="max-w-8xl h-full  py-4 mx-auto mt-0 px-4 sm:px-6 lg:px-8
         shadow-amber-50 sm:shadow-md  shadow-xs">
          <h2 className="text-3xl font-bold text-center text-white mb-12">My Projects</h2>
          <div className="grid gap-8
          grid-cols-[repeat(auto-fit,minmax(300px,1fr))] 
          ">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-gray-500/70 hover:bg-gray-500 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300
                
                "
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-white/70 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    {/* <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 text-sm"
                    >
                      Live Demo
                    </a> */}
                    <a 
                      href={project.codeLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 text-sm"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  