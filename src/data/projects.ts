import { Project } from '../types';
import photo1 from '../assets/images/photo1.jpg';
import photo2 from '../assets/images/photo2.jpg';
import photo3 from '../assets/images/photo3.jpg';
import newcosmo from '../assets/images/newcosmo.png';
import imbir from '../assets/images/imbir.jpg';
import xray from '../assets/images/x-ray.png';
import imbirr from '../assets/images/imbirr.png';
export const projects: Project[] = [
  {
    id: 1,
    title: 'Imbir.kg',
    description: 'Innovative digital medical platform with AI integration aimed at transforming the way patients interact with healthcare services. (In progress)',
    image: imbirr,
    technologies: ['React', 'Django', 'ML', 'TensorFlow'],
    link: '#'
  },
  {
    id: 2,
    title: 'Bone Fracture Detection',
    description: 'Deep learning model for bone fracture detection project. This application shows the potencial of using CNN in medical field.',
    image: xray,
    technologies: ['Python', 'CNN', 'Kaggle', 'Jupyter Notebook', 'Matplotlib', 'Pandas', 'Machine Learning'],
    link: 'https://github.com/E1dar821/Bones.git'
  },
  {
    id: 3,
    title: 'Solar System Explorer',
    description: 'Interactive web application that visualizes our solar system, offering users an astronomical view . Built with React and TypeScript, the project provides representation of planetary bodies',
    image: newcosmo,
    technologies: ['React', 'TypeScript', 'TailwindCSS'],
    link: 'https://e1dar821.github.io/NewCosmos/'
  },
];