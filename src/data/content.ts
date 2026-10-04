// All site copy lives here so the portfolio can be updated without touching components.

export const profile = {
  name: 'Nikhil',
  fullName: 'Nikhil Yengala Reddy',
  roles: ['Bioinformatics Analyst', 'Data Scientist', 'UI/UX Designer'],
  email: 'nikhilyv@hotmail.com',
  resume: '/NYResume.pdf',
  photo: '/images/profile.jpg',
  logo: '/images/logo.jpg',
}

export const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nikhil-yengala-reddy-b318b1229/', icon: 'linkedin' },
  { label: 'Instagram', href: 'https://www.instagram.com/r.nikhil10/', icon: 'instagram' },
] as const

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const about = [
  'As a recent Bioinformatics graduate from Johns Hopkins University with a foundation in interdisciplinary research, I excel at bridging the gap between biology, data science, and technology to help in innovation, data analysis, and machine learning processes. With the Master’s degree, I bring unique skills that allow me to help develop new products for users and upkeep databases that assist clients.',
  'Expanding beyond bioinformatics, I have also experimented in the field of data science and UI/UX designs where I apply my analytical abilities and creative problem-solving skills to enhance user experience and data visualizations. Using a multidisciplinary approach enables me to provide comprehensive solutions that are user-friendly, intuitive, and effective. My objective is to make difficult information understandable and useful, whether that is accomplished through developing data-driven strategies or creating visually appealing and useful interfaces.',
  'My experience in the field of bioinformatics, enhanced with data science techniques and UI/UX design concepts, demonstrates my dedication to creativity and quality. I have a strong goal to leverage my broad skill set to further the creation of platforms and tools that facilitate important research and produce memorable user experiences.',
  'Beyond my professional aspects, I find pleasure in a variety of hobbies that enrich my life and creativity. Photography holds a special place in my heart, and I have a passion for capturing nature and subjects that can be showcased at lmpbay.com. Basketball and hiking also play a vital role in my life by allowing me to stay active and engage in friendly competition while team building and connecting with nature during my hiking sessions. I am motivated by a desire to acquire new things whenever I have the opportunity, whether they are experiences, skills, or pieces of knowledge.',
]

export type TimelineItem = { period: string; title: string; detail?: string }

export const education: TimelineItem[] = [
  { period: '2021 – 2023', title: 'MS in Bioinformatics', detail: 'Johns Hopkins University, Maryland' },
  { period: '2018 – 2021', title: 'BS in Molecular Biology, Minor Chemistry', detail: 'San Jose State University, California' },
]

export const experience: TimelineItem[] = [
  { period: '2024 – Present', title: 'AMD Bioinformatician', detail: 'Florida Health · Remote' },
  { period: '2024', title: 'Associate Scientist', detail: 'Thermo Fisher Scientific · Madison, WI' },
  { period: '2020', title: 'Research', detail: 'Department of Microbiology and Bioinformatics · San Jose State University' },
  { period: '2019', title: 'Bioinformatics Academic Project', detail: 'Department of Bioinformatics · San Jose State University' },
]

export const skills: { name: string; detail?: string }[] = [
  { name: 'Python', detail: 'Pandas, Spark, Jupyter' },
  { name: 'R', detail: 'ggplot, Shiny' },
  { name: 'SQL' },
  { name: 'Java' },
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JavaScript' },
  { name: 'Linux/Unix' },
  { name: 'NGS' },
  { name: 'Tableau' },
]

export type Project = {
  icon: 'dna' | 'python' | 'web'
  title: string
  description: string
  link?: { label: string; href: string }
}

export const projects: Project[] = [
  {
    icon: 'dna',
    title: 'Genomic Analyst',
    description:
      "I'm a specialist in genomic analysis, where I use cutting-edge computational tools to interpret the huge and complicated data recorded within genomes. I draw on my experience in bioinformatics and data science in this work. In order to find patterns, variations, and possible biomarkers related to health, disease, and evolutionary biology, I collect, analyze, and interpret genetic data using a combination of bioinformatics tools and machine learning techniques. Below is one of my Tableau projects on Clear Renal Cell Carcinoma.",
    link: {
      label: 'View Tableau dashboard',
      href: 'https://public.tableau.com/views/Normal_TumorRCC/ClearRCCDashboard?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link',
    },
  },
  {
    icon: 'python',
    title: 'Python Developer',
    description:
      "I use my experience to design, develop, and implement strong software solutions that are scalable and efficient in the field of Python programming. With my extensive knowledge in bioinformatics and data science, along with my fluency in Python, I am able to design methods and create applications that tackle challenging data analysis problems. I am proficient with several of Python's many libraries and frameworks, including Pandas for data analysis, Matplotlib and Seaborn for data visualization, NumPy for manipulating numerical data, and SciPy for scientific computing.",
  },
  {
    icon: 'web',
    title: 'Web Developer',
    description:
      'Creating seamless user experiences (UX) with accessible and responsive design concepts at the forefront is the focus of my user-centered approach to web development. I make sure that the web applications I create are not only functional but also accessible and pleasurable to use on a variety of platforms and devices by incorporating my UI/UX design talents.',
  },
]

// Google Apps Script endpoint that appends contact-form submissions to a Google Sheet.
export const contactFormEndpoint =
  'https://script.google.com/macros/s/AKfycbzq0lnTm4a75JI21gHnW0R3UhtIUT0QBJoMKehHObpZtCgA4hgKYt8hJRP7d7dLX422/exec'
