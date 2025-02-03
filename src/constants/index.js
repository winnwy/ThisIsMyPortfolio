import resumaniac from "../assets/projects/resumaniac/resumaniac.png"
import personal_website from "../assets/projects/personal_website/personal_website.png"
import cartoon_sheep from "../assets/projects/sheepy/cartoon_sheep.png"
import etch_a_sketch from "../assets/projects/etch_a_sketch/etch_a_sketch.png"

export const HERO_CONTENT = `Whether it’s building cool web experiences, coding backend magic, or diving into new tech, I love bringing ideas to life. When I’m not coding, I’m probably chasing the sunset on a run or getting lost in a creative rabbit hole!`;

export const PROJECTS = [
  {
    title: "Resumaniac - Hackathon Project",
    image: resumaniac,
    description:
      "ResuManiac is a fun resume generator that transforms any image—whether a plant, pet, or object—into a quirky CV. From a houseplant as a “Senior Software Engineer” to a pet rock as “CEO of Microsoft,” each object also doubles as a superhero and can talk! ",
    link: "https://terriblehack.com/portfolio/resumaniac/",
    contributions: ["Collaborated with my teammate to build the complete frontend of ResuManiac using React and Tailwind CSS.", "Implemented a live cam video display feature.", " Created the layout and functionality to display the generated resumes."]
  },
  {
    title: "Personal Website - DevSoc Trainee Project",
    image: personal_website,
    description:
      "This personal website was created as part of my application for the DevSoc Trainee Program, with a focus on the theme of time. Built using HTML, CSS, and JavaScript, it features interactive animations designed to engage visitors as they explore the site.",
    link: "https://winnwy.github.io/winnie_website/"
  },
  {
    title: "Sheepy - Course Assignment",
    image: cartoon_sheep,
    description:
      "SHEEPY is a shell-to-Python transpiler that converts shell scripts into Python code. It supports echo, for loops, if statements, and while loops etc. It also handles variable assignments and simple expressions.",
  },
  {
    title: "Etch A Sketch - Online Course Project",
    image: etch_a_sketch,
    description:
      "Etch-a-Sketch is an interactive drawing tool built using HTML, CSS, and JavaScript. Inspired by the classic Etch-a-Sketch toy, this web-based version allows users to draw on a grid of squares, with customizable features such as color selection, grid resizing, and drawing effects.",
    link: "https://winnwy.github.io/etch-a-sketch/"
  },
];

export const CONTACT = {
  email: "winnwyz@gmail.com",
  github: "https://github.com/winnwy"
};
