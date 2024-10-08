// import aboutimage
// import CV from '../assets/CV.pdf'

export const AboutData = [
	{
		Image: "My Photo",
		AboutMe: "Hi! I'm Ghifary",
		AboutContactText: "Feel free to contact me!",
		Email: "mhghifaryy@gmail.com",
		// CV: "CV",
		CV: "https://drive.google.com/file/d/10280JV24xYFbG8uciBBqhy3P2VIQFnkl/view?usp=sharing",
		Skilsheets:
			"https://docs.google.com/spreadsheets/d/1mBgAAr7vxLdhk8nsI9AC8aUps85WfmldcvvM0OvO6yU/edit?usp=sharing",
	},
]

export const SkillsData = [
	{
		skillName: "PHP / Laravel",
		percentage: 85,
	},
	{
		skillName: "React JS",
		percentage: 40,
	},
	{
		skillName: "MySQL",
		percentage: 70,
	},
	{
		skillName: "Python",
		percentage: 70,
	},
	{
		skillName: "DevOps",
		percentage: 40,
	},
]

export const TestimonialsData = [
	{
		testText:
			"pokonya okeLorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi atque enim alias similique, officia doloremque, sunt, iusto unde molestias totam eveniet labore molestiae harum voluptates inventore sint architecto dolores voluptas?",
		name: "arib",
		info: "xd",
	},
	{
		testText: "pokonya sip",
		name: "renpi",
		info: "uwu",
	},
]

// Services
import { RiComputerLine } from "react-icons/ri"
import { MdOutlineAppRegistration } from "react-icons/md"
import { MdOutlineWeb } from "react-icons/md"

export const ServicesData = {
	services: [
		{
			icon: RiComputerLine,
			proCount: "7 Projects",
			name: "Web Development",
			textInfo: "Create/Impelement UI/UX Design into Website",
		},
		{
			icon: MdOutlineWeb,
			proCount: "5 Projects",
			name: "Web Design",
			textInfo: "Design the Website",
		},
		{
			icon: MdOutlineAppRegistration,
			proCount: "3 Projects",
			name: "Software Development",
			textInfo: "Software making",
		},
	],
}

// Projects

import kipkImage from "../assets/projects/kip-k.jpeg"
import simpenmasImage from "../assets/projects/simpenmas.jpeg"
import scrImage from "../assets/projects/scr.jpeg"
import imapsImage from "../assets/projects/imaps.png"
import mapnetworkImage from "../assets/projects/mapnetwork.png"
import treetrunkImage from "../assets/projects/treetrunk.jpeg"

export const ProjectsData = [
	{
		projectImage: simpenmasImage,
		category: "Information Systems",
		title: "SIMPENMAS",
		info: "A Lecturer of ITENAS only website.",
		projectLink: "https://simpenmas-new.itenas.ac.id",
	},
	{
		projectImage: kipkImage,
		category: "Information Systems",
		title: "KIPK ITENAS",
		info: "a CRUD website for new students to input their financial and family data, which is used to determine scholarship recipients at Institut Teknologi Nasional (National Institute of Technology).",
		projectLink: "https://kip-k.itenas.ac.id",
	},
	{
		projectImage: scrImage,
		category: "Front-End",
		title: "SCR ITENAS",
		info: "a website that enables lecturers to request the use of specific rooms at Institut Teknologi Nasional (National Institute of Technology).",
		projectLink: "#",
	},
	{
		projectImage: mapnetworkImage,
		category: "Interactive Websites",
		title: "Map Network ITENAS",
		info: "an interactive website to display network speed data for Institut Teknologi Nasional (National Institute of Technology).",
		projectLink: "https://map.network.itenas.ac.id",
	},
	{
		projectImage: imapsImage,
		category: "Interactive Websites",
		title: "Interactive Map of ITENAS",
		info: "an interactive map website showcasing Institut Teknologi Nasional (National Institute of Technology)",
		projectLink: "https://hghif.github.io/ ",
	},
	// {
	// 	projectImage: "image1",
	// 	category: "Information Systems",
	// 	title: "KPNAS",
	// 	info: "a mock-up CodeIgniter-based website to facilitate student enrollment for internship registration",
	// 	projectLink: "#",
	// },
	{
		projectImage: treetrunkImage,
		category: "Simple Software",
		title: "Detect/Identify Tree Ages",
		info: "Python program for detecting the age of a tree based on the number of rings in its trunk",
		projectLink: "#",
	},
]
