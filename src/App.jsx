
import { useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  FileText,
  Video,
  Mail,
  Menu,
  X,
  GraduationCap,
  BriefcaseBusiness,
  Award,
  Globe,
  Sparkles,
  FolderOpen,
  Send,
  GitBranch,
} from 'lucide-react';

import './App.css';

const translations = {
  EN: {
    nav: ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Portfolio'],
    eyebrow: 'PERSONAL PORTFOLIO ',
    greeting: 'Hello, I am',
    name: 'Hanine Ben Romdhane',
    role: 'Computer Science Student',
    heroDescription:
      'Curious by nature, passionate about technology and interested in building meaningful digital experiences. Currently developing my skills and exploring the world of software development.',
    explore: 'Explore my portfolio',
    download: 'Download my CV',
    scroll: 'SCROLL TO EXPLORE',
    aboutLabel: 'A LITTLE ABOUT ME',
    aboutTitle: 'Getting to know me',
    aboutText:
      "I am a third-year Computer Science student at ISITCom, Hammam Sousse. I enjoy understanding how things work, solving problems and turning ideas into functional applications.",
    aboutText2:
      'My academic journey has allowed me to explore different areas of computing, from object-oriented programming and databases to web development. I am particularly interested in software development and intelligent applications.',
    aboutText3:
      'Beyond technology, I enjoy reading, painting and sharing knowledge through teaching. I believe that curiosity and continuous learning are essential to personal and professional growth.',
    education: 'Education',
    degree: 'Bachelor’s Degree in Computer Science',
    school: 'ISITCom · Hammam Sousse, Tunisia',
    period: '2024 – Present',
    languages: 'Languages',
    french: 'French',
    english: 'English',
    arabic: 'Arabic',
    fluent: 'C1 · Advanced',
    skillsLabel: 'WHAT I WORK WITH',
    skillsTitle: 'Skills & expertise',
    skillsDescription:
      'A selection of technologies and tools I have explored through coursework and practical projects.',
    programming: 'Programming',
    web: 'Web development',
    databases: 'Databases & tools',
    concepts: 'Computer science',
    soft: 'Professional skills',
    certifications: 'Certifications',
    experienceLabel: 'MY JOURNEY',
    experienceTitle: 'Experience',
    experienceDescription:
      'Experiences that have contributed to my professional and personal development.',
    teaching: 'English Language Tutor',
    teachingPlace: 'Private tutoring / Study centre',
    teachingDescription:
      'Teaching English to middle-school and primary-school students, preparing lessons and adapting explanations to different learning levels.',
    internship: 'Accounting & Audit Intern',
    internshipPlace: 'Russell Bedford · Qatar',
    internshipDescription:
      'Exposure to a professional accounting and audit environment, supporting the team and discovering business processes.',
    leadership: 'President · Gaming Freaks Club',
    leadershipPlace: 'ISITCom',
    leadershipDescription:
      'Coordinating club activities, contributing to event organization and encouraging collaboration among members.',
    projectsLabel: 'WHAT I HAVE BUILT',
    projectsTitle: 'Selected projects',
    projectsDescription:
      'Academic and personal projects where I put my technical knowledge into practice.',
    project1: 'Réservi',
    project1Type: 'Web application',
    project1Description:
      'A reservation platform connecting clients with service providers, featuring dedicated client, professional and administrator spaces.',
    project2: 'EduMatch',
    project2Type: 'Database application',
    project2Description:
      'An academic project focused on database design and management, using PostgreSQL and a Node.js backend.',
    project3: 'Secure Voting Platform',
    project3Type: 'Academic project',
    project3Description:
      'A university voting platform designed to support secure and structured electronic voting for faculty elections.',
    stack: 'Technologies',
    portfolioLabel: 'MY PROFESSIONAL DOCUMENTS',
    portfolioTitle: 'My portfolio',
    portfolioDescription:
      'A collection of documents presenting my background, professional profile and motivation.',
    cvTitle: 'Curriculum Vitae',
    cvDescription:
      'Discover my academic background, technical skills, experience and qualifications.',
    frenchCV: 'French CV',
    englishCV: 'English CV',
    videoTitle: 'Video CV',
    videoDescription:
      'Get to know me through a short personal introduction.',
    watchVideo: 'Watch my video',
    letterTitle: 'Motivation Letter',
    letterDescription:
      'Learn more about my professional goals, motivation and interest in internship opportunities.',
    viewLetter: 'View my letter',
    contactLabel: 'LET’S CONNECT',
    contactTitle: 'Have an opportunity in mind?',
    contactDescription:
      'I am open to internship opportunities, professional exchanges and collaborations. Feel free to get in touch.',
    email: 'Email me',
    linkedinText: 'Connect on LinkedIn',
    footer: 'Designed with care by Hanine Ben Romdhane.',
    rights: 'All rights reserved.',
    backTop: 'Back to top',
    unavailable: 'Add your document to the documents folder to activate this link.',
    skill1: 'Problem solving',
    skill2: 'Time management',
    skill3: 'Communication',
    skill4: 'Teamwork',
    skill5: 'Adaptability',
    skill6: 'Public speaking',
    certificationsList: [
      { name: 'DataCamp — Data Manipulation with pandas', file: '/certificates/datacamp-pandas.pdf' },
      { name: 'DataCamp — Introduction to Statistics in Python', file: '/certificates/datacamp-statistics.pdf' },
      { name: 'HP LIFE — Data Science & Analytics', file: '/certificates/hplife-data-science.pdf' },
      { name: 'HP LIFE — Introduction to Cybersecurity', file: '/certificates/hplife-cybersecurity.pdf' }
    ],
    aboutTag: 'Curiosity · Creativity · Continuous learning'
  },

  FR: {
    nav: ['Accueil', 'À propos', 'Compétences', 'Expérience', 'Projets', 'Portfolio'],
    eyebrow: 'PORTFOLIO PERSONNEL ',
    greeting: 'Bonjour, je suis',
    name: 'Hanine Ben Romdhane',
    role: 'Étudiante en informatique',
    heroDescription:
      "Curieuse de nature et passionnée par la technologie, je m'intéresse à la création d'expériences numériques utiles. Je développe actuellement mes compétences et explore différents domaines du développement logiciel.",
    explore: 'Découvrir mon portfolio',
    download: 'Télécharger mon CV',
    scroll: 'DÉFILER POUR EXPLORER',
    aboutLabel: 'À PROPOS DE MOI',
    aboutTitle: 'Faisons connaissance',
    aboutText:
      "Je suis étudiante en troisième année de Licence en Computer Science à l'ISITCom, Hammam Sousse. J'aime comprendre le fonctionnement des choses, résoudre des problèmes et transformer des idées en applications fonctionnelles.",
    aboutText2:
      "Mon parcours universitaire m'a permis d'explorer plusieurs domaines de l'informatique, notamment la programmation orientée objet, les bases de données et le développement web. Je m'intéresse particulièrement au développement logiciel et aux applications intelligentes.",
    aboutText3:
      "En dehors de l'informatique, j'aime la lecture, la peinture et le partage des connaissances à travers l'enseignement. Je considère la curiosité et l'apprentissage continu comme des éléments essentiels de l'évolution personnelle et professionnelle.",
    education: 'Formation',
    degree: 'Licence en Computer Science',
    school: 'ISITCom · Hammam Sousse, Tunisie',
    period: '2024 – Présent',
    languages: 'Langues',
    french: 'Français',
    english: 'Anglais',
    arabic: 'Arabe',
    fluent: 'C1 · Avancé',
    skillsLabel: 'MES COMPÉTENCES',
    skillsTitle: 'Compétences & expertise',
    skillsDescription:
      "Une sélection de technologies et d'outils étudiés et pratiqués à travers mes cours et projets.",
    programming: 'Programmation',
    web: 'Développement web',
    databases: 'Bases de données & outils',
    concepts: 'Informatique',
    soft: 'Compétences professionnelles',
    certifications: 'Certifications',
    experienceLabel: 'MON PARCOURS',
    experienceTitle: 'Expériences',
    experienceDescription:
      'Des expériences qui ont contribué à mon développement professionnel et personnel.',
    teaching: "Enseignante d'anglais",
    teachingPlace: 'Cours particuliers / Centre de soutien',
    teachingDescription:
      "Enseignement de l'anglais aux élèves du primaire et du collège, préparation des cours et adaptation des explications aux différents niveaux.",
    internship: 'Stagiaire en comptabilité et audit',
    internshipPlace: 'Russell Bedford · Qatar',
    internshipDescription:
      "Découverte d'un environnement professionnel en comptabilité et audit, accompagnement de l'équipe et découverte des processus de gestion.",
    leadership: 'membre · Gaming Freaks Club',
    leadershipPlace: 'ISITCom',
    leadershipDescription:
      "partcipation aux activités du club.",
    projectsLabel: 'MES RÉALISATIONS',
    projectsTitle: 'Projets sélectionnés',
    projectsDescription:
      'Des projets académiques et personnels dans lesquels je mets en pratique mes connaissances techniques.',
    project1: 'Réservi',
    project1Type: 'Application web',
    project1Description:
      "Une plateforme de réservation mettant en relation les clients et les prestataires de services, avec des espaces dédiés aux clients, professionnels et administrateurs.",
    project2: 'EduMatch',
    project2Type: 'Application avec base de données',
    project2Description:
      "Un projet académique axé sur la conception et la gestion de bases de données, utilisant PostgreSQL et un backend Node.js.",
    project3: 'Plateforme de vote sécurisée',
    project3Type: 'Projet académique',
    project3Description:
      "Une plateforme universitaire conçue pour organiser des élections électroniques de manière structurée et sécurisée.",
    stack: 'Technologies',
    portfolioLabel: 'MES DOCUMENTS PROFESSIONNELS',
    portfolioTitle: 'Mon portfolio',
    portfolioDescription:
      'Un ensemble de documents présentant mon parcours, mon profil professionnel et mes motivations.',
    cvTitle: 'Curriculum Vitae',
    cvDescription:
      'Découvrez mon parcours académique, mes compétences techniques, mes expériences et mes qualifications.',
    frenchCV: 'CV en français',
    englishCV: 'CV en anglais',
    videoTitle: 'CV vidéo',
    videoDescription:
      'Découvrez mon profil à travers une courte présentation personnelle.',
    watchVideo: 'Voir ma vidéo',
    letterTitle: 'Lettre de motivation',
    letterDescription:
      "Découvrez mes objectifs professionnels, mes motivations et mon intérêt pour les opportunités de stage.",
    viewLetter: 'Consulter ma lettre',
    contactLabel: 'RESTONS EN CONTACT',
    contactTitle: 'Une opportunité à partager ?',
    contactDescription:
      "Je suis ouverte aux opportunités de stage, aux échanges professionnels et aux collaborations. N'hésitez pas à me contacter.",
    email: 'M’envoyer un email',
    linkedinText: 'Me retrouver sur LinkedIn',
    footer: 'Conçu avec soin par Hanine Ben Romdhane.',
    rights: 'Tous droits réservés.',
    backTop: 'Retour en haut',
    unavailable: 'Ajoutez votre document dans le dossier documents pour activer ce lien.',
    skill1: 'Résolution de problèmes',
    skill2: 'Gestion du temps',
    skill3: 'Communication',
    skill4: 'Travail en équipe',
    skill5: 'Adaptabilité',
    skill6: 'Prise de parole en public',
    certificationsList: [
      { name: 'DataCamp — Data Manipulation with pandas', file: '/certificates/datacamp-pandas.pdf' },
      { name: 'DataCamp — Introduction aux statistiques avec Python', file: '/certificates/datacamp-statistics.pdf' },
      { name: 'HP LIFE — Data Science & Analytics', file: '/certificates/hplife-data-science.pdf' },
      { name: 'HP LIFE — Introduction à la cybersécurité', file: '/certificates/hplife-cybersecurity.pdf' }
    ],
    aboutTag: 'Curiosité · Créativité · Apprentissage continu'
  }
};

const skillGroups = [
  {
    key: 'programming',
    items: ['Java', 'Python', 'C', 'JavaScript']
  },
  {
    key: 'web',
    items: ['HTML', 'CSS', 'React', 'Next.js']
  },
  {
    key: 'databases',
    items: ['PostgreSQL', 'pgAdmin', 'SQL', 'Git']
  },
  {
    key: 'concepts',
    items: ['OOP', 'Algorithms', 'Operating Systems', 'Database Design']
  }
];

const projects = [
  {
    id: '01',
    title: 'project1',
    type: 'project1Type',
    description: 'project1Description',
    image: '/images/projects/reservi.png',
    github: 'https://github.com/haninebenromdhane/Reservi',
    technologies: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    id: '02',
    title: 'project2',
    type: 'project2Type',
    description: 'project2Description',
    image: '/images/projects/edumatch.png',
    github: 'https://github.com/haninebenromdhane/Match-students',
    technologies: ['PostgreSQL', 'Node.js', 'JavaScript'],
  },
  {
    id: '03',
    title: 'project3',
    type: 'project3Type',
    description: 'project3Description',
    image: '/images/projects/votecom.png',
    github: 'https://github.com/haninebenromdhane/VoteAPP',
    technologies: ['Database Design', 'Security', 'Web Development']
  }
];

function SectionHeading({ label, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{label}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function App() {
  const [language, setLanguage] = useState('EN');
  const [menuOpen, setMenuOpen] = useState(false);

  const t = translations[language];

  const navigate = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const sections = ['home', 'about', 'skills', 'experience', 'projects', 'portfolio'];

  const documents = {
    frenchCV: '/documents/CV_Hanine_FR.pdf',
    letter: '/documents/Lettre_Motivation.pdf',
    video: '/documents/CV_Video.mp4'
  };

  return (
    <>
      <header className="navbar">
        <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
          H<span>.</span>
        </a>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {t.nav.map((item, index) => (
            <button key={item} onClick={() => navigate(sections[index])}>
              {item}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="language-switch"
            onClick={() => setLanguage(language === 'EN' ? 'FR' : 'EN')}
            aria-label="Change language"
          >
            <Globe size={15} />
            {language}
          </button>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero section-container" id="home">
          <div className="hero-content">
            <span className="eyebrow hero-eyebrow">
              <span className="status-dot" />
              {t.eyebrow}
            </span>

            <p className="hero-greeting">{t.greeting}</p>
            <h1>
              Hanine
              <br />
              <span>Ben Romdhane.</span>
            </h1>

            <h2 className="hero-role">{t.role}</h2>

            <p className="hero-description">{t.heroDescription}</p>

            <div className="hero-buttons">
              <button className="button button-dark" onClick={() => navigate('about')}>
                {t.explore}
                <ArrowUpRight size={17} />
              </button>

              <a
                className="button button-outline"
               href={documents.frenchCV}
                download
              >
                {t.download}
                <Download size={16} />
              </a>
            </div>

            <div className="hero-socials">
              <a href="mailto:benromdhanehanine1@gmail.com" aria-label="Email">
                <Mail size={17} />
              </a>
              <a
                href="https://www.linkedin.com/in/hanine-ben-romdhane-1b2502371"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <span className="linkedin-icon">in</span>
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-frame">
              <img
                src="/images/hanine-portrait.jpg"
                alt="Portrait of Hanine Ben Romdhane"
                onError={(event) => {
                  event.currentTarget.style.display = 'none';
                  event.currentTarget.nextElementSibling.style.display = 'flex';
                }}
              />

              <div className="portrait-placeholder">
                <span>Your professional portrait</span>
                <small>Add hanine-portrait.jpg to public/images</small>
              </div>
            </div>

            <div className="portrait-caption">
              <Sparkles size={16} />
              <span>{t.aboutTag}</span>
            </div>

            <div className="floating-note">
              <span className="floating-note-number">03</span>
              <span>YEAR OF<br />COMPUTER SCIENCE</span>
            </div>
          </div>

          <button className="scroll-indicator" onClick={() => navigate('about')}>
            <span>{t.scroll}</span>
            <ArrowDown size={15} />
          </button>
        </section>

        {/* ABOUT */}
        <section className="section-container section-padding" id="about">
          <SectionHeading
            label={t.aboutLabel}
            title={t.aboutTitle}
          />

          <div className="about-grid">
            <div className="about-main">
              <span className="large-quote">“</span>
              <p className="about-lead">{t.aboutText}</p>
              <p>{t.aboutText2}</p>
              <p>{t.aboutText3}</p>
            </div>

            <div className="about-details">
              <div className="detail-card">
                <GraduationCap size={22} />
                <h3>{t.education}</h3>
                <strong>{t.degree}</strong>
                <p>{t.school}</p>
                <span>{t.period}</span>
              </div>

              <div className="detail-card">
                <Globe size={22} />
                <h3>{t.languages}</h3>
                <div className="language-row">
                  <span>{t.french}</span>
                  <strong>{t.fluent}</strong>
                </div>
                <div className="language-row">
                  <span>{t.english}</span>
                  <strong>{t.fluent}</strong>
                </div>
                <div className="language-row">
                  <span>{t.arabic}</span>
                  <strong>Native</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="section-container section-padding skills-section" id="skills">
          <SectionHeading
            label={t.skillsLabel}
            title={t.skillsTitle}
            description={t.skillsDescription}
          />

          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article className="skill-card" key={group.key}>
                <span className="card-index">0{index + 1}</span>
                <h3>{t[group.key]}</h3>
                <div className="skill-tags">
                  {group.items.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="soft-skills">
            <h3>{t.soft}</h3>
            <div className="soft-tags">
              {[t.skill1, t.skill2, t.skill3, t.skill4, t.skill5, t.skill6].map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>

          <div className="certifications">
            <h3><Award size={20} /> {t.certifications}</h3>
            <ul>
              {t.certificationsList.map((certification) => (
                <li key={certification.file}>
                  <a href={certification.file} target="_blank" rel="noreferrer">
                    {certification.name}
                    <ArrowUpRight size={13} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="section-container section-padding" id="experience">
          <SectionHeading
            label={t.experienceLabel}
            title={t.experienceTitle}
            description={t.experienceDescription}
          />

          <div className="timeline">
            <article className="timeline-item">
              <div className="timeline-icon"><BriefcaseBusiness size={19} /></div>
              <div className="timeline-content">
                <span className="timeline-number">01</span>
                <h3>{t.teaching}</h3>
                <strong>{t.teachingPlace}</strong>
                <p>{t.teachingDescription}</p>
              </div>
            </article>

            <article className="timeline-item">
              <div className="timeline-icon"><BriefcaseBusiness size={19} /></div>
              <div className="timeline-content">
                <span className="timeline-number">02</span>
                <h3>{t.internship}</h3>
                <strong>{t.internshipPlace}</strong>
                <p>{t.internshipDescription}</p>
              </div>
            </article>

            <article className="timeline-item">
              <div className="timeline-icon"><Award size={19} /></div>
              <div className="timeline-content">
                <span className="timeline-number">03</span>
                <h3>{t.leadership}</h3>
                <strong>{t.leadershipPlace}</strong>
                <p>{t.leadershipDescription}</p>
              </div>
            </article>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section-container section-padding projects-section" id="projects">
          <SectionHeading
            label={t.projectsLabel}
            title={t.projectsTitle}
            description={t.projectsDescription}
          />

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.id}>
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={`${t[project.title]} interface screenshot`}
                    loading="lazy"
                  />
                </div>

                <div className="project-card-content">
                  <div className="project-top">
                    <span>{project.id} / 03</span>
                    <FolderOpen size={21} />
                  </div>

                  <span className="project-type">{t[project.type]}</span>
                  <h3>{t[project.title]}</h3>
                  <p>{t[project.description]}</p>

                  <div className="project-technologies">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <a
                    className="project-github"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${t[project.title]} on GitHub`}
                  >
                    <GitBranch size={17} />
                    View on GitHub
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PORTFOLIO DOCUMENTS */}
        <section className="section-container section-padding portfolio-section" id="portfolio">
          <SectionHeading
            label={t.portfolioLabel}
            title={t.portfolioTitle}
            description={t.portfolioDescription}
          />

          <div className="documents-grid">
            <article className="document-card cv-card">
              <div className="document-icon"><FileText size={25} /></div>
              <span className="document-category">01 / DOCUMENT</span>
              <h3>{t.cvTitle}</h3>
              <p>{t.cvDescription}</p>

              <div className="document-links">
  <a href={documents.frenchCV} target="_blank" rel="noreferrer">
    {t.frenchCV} <ArrowUpRight size={16} />
  </a>
</div>
            </article>

            <article className="document-card video-card">
              <div className="document-icon"><Video size={25} /></div>
              <span className="document-category">02 / VIDEO</span>
              <h3>{t.videoTitle}</h3>
              <p>{t.videoDescription}</p>

              <video
                className="cv-video"
                controls
                preload="metadata"
              >
                <source src={documents.video} type="video/mp4" />
                Your browser does not support video playback.
              </video>

              <a className="document-action" href={documents.video} target="_blank" rel="noreferrer">
                {t.watchVideo} <ArrowUpRight size={16} />
              </a>
            </article>

            <article className="document-card letter-card">
              <div className="document-icon"><Mail size={25} /></div>
              <span className="document-category">03 / LETTER</span>
              <h3>{t.letterTitle}</h3>
              <p>{t.letterDescription}</p>

              <a
                className="document-action"
                href={documents.letter}
                target="_blank"
                rel="noreferrer"
              >
                {t.viewLetter} <ArrowUpRight size={16} />
              </a>
            </article>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact-section" id="contact">
          <div className="section-container contact-inner">
            <span className="eyebrow">{t.contactLabel}</span>
            <h2>{t.contactTitle}</h2>
            <p>{t.contactDescription}</p>

            <div className="contact-buttons">
              <a className="button button-light" href="mailto:benromdhanehanine1@gmail.com">
                <Send size={16} />
                {t.email}
              </a>
              <a
                className="button button-contact-outline"
                href="https://www.linkedin.com/in/hanine-ben-romdhane-1b2502371"
                target="_blank"
                rel="noreferrer"
              >
                <span className="linkedin-icon">in</span>
                {t.linkedinText}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">H<span>.</span></div>
        <p>{t.footer}</p>
        <span>© 2026 · {t.rights}</span>
        <button onClick={() => navigate('home')}>
          {t.backTop} <ArrowDown className="back-top-icon" size={14} />
        </button>
      </footer>
    </>
  );
}

export default App;
