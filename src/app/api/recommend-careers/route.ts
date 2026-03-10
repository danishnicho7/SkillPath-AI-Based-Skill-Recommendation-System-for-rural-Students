import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { interest = '', skills = '' } = body;

    const lowerInput = (interest + " " + skills).toLowerCase();

    const careers = [
      // ----------------- IT & SOFTWARE (5) -----------------
      {
        id: 'tech-swe',
        title: 'Full Stack Software Engineer',
        category: 'TECHNOLOGY & IT',
        description: 'Building robust digital platforms and APIs. The core engineering backbone of the modern internet economy.',
        education_req: 'B.Tech/BE in CS/IT, or BCA/MCA.',
        skills_req: ['React/Next.js', 'Node.js', 'PostgreSQL', 'AWS', 'System Design'],
        competition_level: 'High',
        eligibility: 'B.Tech/BE in CS/IT, or BCA/MCA. Strong logical reasoning.',
        exam_required: 'TCS NQT / AMCAT / Private Placements',
        promotion_path: ['Junior Dev', 'Senior Dev', 'Tech Lead', 'Engineering Manager'],
        future_demand_desc: 'India’s IT exports continue to surge, ensuring constant demand despite AI automation. Full stack generalists are safer than niche specialists.',
        salary_timeline: { entry: '₹4.5L - ₹8L', mid: '₹14L - ₹28L', senior: '₹35L - ₹60L+' },
        industry_demand: { past_5_years: '+42%', projected_10_years: '+55%' },
        career_roadmap: [
          { phase: 'High School', action: 'PCM stream. Basic Python/C++.' },
          { phase: 'Undergrad', action: 'B.Tech in CS. Data Structures.' },
          { phase: 'Skill Dev', action: 'Web Dev projects + Leetcode.' },
          { phase: 'Entry', action: 'Campus placements or off-campus startups.' }
        ],
        skill_roadmap: [
          { step: 1, tech: 'Programming Fundamentals' },
          { step: 2, tech: 'Data Structures & Algorithms' },
          { step: 3, tech: 'Frontend (React/Tailwind)' },
          { step: 4, tech: 'Backend (Node/Databases)' }
        ]
      },
      {
        id: 'tech-cloud',
        title: 'Cloud Solutions Architect',
        category: 'TECHNOLOGY & IT',
        description: 'Designing secure, scalable cloud infrastructure across AWS, Azure, and GCP for enterprise clients.',
        education_req: 'B.Tech/BE + Cloud Certifications.',
        skills_req: ['AWS/Azure', 'Kubernetes', 'Terraform', 'Networking', 'Security'],
        competition_level: 'Moderate',
        eligibility: 'Any STEM Bachelor\'s Degree + Core Cloud Certifications (AWS/Azure).',
        exam_required: 'AWS Solutions Architect Associate / Google Cloud ACE',
        promotion_path: ['Cloud Engineer', 'Sr. Cloud Engineer', 'Cloud Architect', 'Principal Architect'],
        future_demand_desc: 'Every modern enterprise is shifting to the cloud. Tremendous gap in the market for actual certified architects vs basic admins.',
        salary_timeline: { entry: '₹8L - ₹12L', mid: '₹22L - ₹35L', senior: '₹50L - ₹80L+' },
        industry_demand: { past_5_years: '+85%', projected_10_years: '+90%' },
        career_roadmap: [
          { phase: 'Foundation', action: 'B.Tech CS/IT. Learn Networking/Linux.' },
          { phase: 'Skill Dev', action: 'Master AWS/GCP base services.' },
          { phase: 'Certs', action: 'Clear AWS Associate Certs.' },
          { phase: 'Entry', action: 'Join as Cloud Engineer / DevOps Junior.' }
        ],
        skill_roadmap: [
          { step: 1, tech: 'Linux System Administration' },
          { step: 2, tech: 'Networking (VPC, DNS, TCP/IP)' },
          { step: 3, tech: 'Core Cloud Compute & Storage' },
          { step: 4, tech: 'Infrastructure as Code (Terraform)' }
        ]
      },
      {
        id: 'tech-cyber',
        title: 'Cybersecurity Analyst',
        category: 'TECHNOLOGY & IT',
        description: 'Protecting networks from digital attacks, ethical hacking, and ensuring enterprise data security.',
        education_req: 'B.Tech CS + CEH / CISSP.',
        skills_req: ['Network Security', 'Pen Testing', 'Cryptography', 'Python', 'SIEM'],
        exams: ['CEH (Certified Ethical Hacker)', 'CompTIA Security+'],
        competition_level: 'Low',
        salary_timeline: { entry: '₹6L - ₹10L', mid: '₹15L - ₹30L', senior: '₹40L - ₹65L+' },
        industry_demand: { past_5_years: '+110%', projected_10_years: '+140%' },
        career_roadmap: [
          { phase: 'Foundation', action: 'B.Tech. Deep dive into Networks and OS.' },
          { phase: 'Skill Dev', action: 'Learn Pen Testing tools (Kali Linux, Wireshark).' },
          { phase: 'Certs', action: 'Clear CEH or OSCP certifications.' },
          { phase: 'Entry', action: 'Security Operations Center (SOC) Analyst.' }
        ],
        skill_roadmap: [
          { step: 1, tech: 'Networking & Protocols' },
          { step: 2, tech: 'Operating Systems (Linux Internals)' },
          { step: 3, tech: 'Vulnerability Scanning' },
          { step: 4, tech: 'Incident Response & SIEM' }
        ]
      },
      {
        id: 'tech-mobile',
        title: 'Mobile App Developer',
        category: 'TECHNOLOGY & IT',
        description: 'Creating high-performance mobile applications for iOS and Android ecosystems.',
        education_req: 'B.Tech/BE or strong portfolio.',
        skills_req: ['Flutter / React Native', 'Swift / Kotlin', 'Firebase', 'State Management'],
        exams: ['JEE Mains'],
        competition_level: 'High',
        salary_timeline: { entry: '₹4L - ₹8L', mid: '₹12L - ₹24L', senior: '₹30L - ₹55L+' },
        industry_demand: { past_5_years: '+30%', projected_10_years: '+40%' },
        career_roadmap: [
          { phase: 'Foundation', action: 'Learn OOPs concepts and basic Java/Swift.' },
          { phase: 'Skill Dev', action: 'Master a cross-platform framework (Flutter).' },
          { phase: 'Portfolio', action: 'Publish 2-3 functional apps on Play/App Store.' },
          { phase: 'Entry', action: 'Apply for Junior App Dev roles in product companies.' }
        ],
        skill_roadmap: [
          { step: 1, tech: 'OOP & Language Basics' },
          { step: 2, tech: 'UI Layouts & Navigation' },
          { step: 3, tech: 'API Integration & State Management' },
          { step: 4, tech: 'App Store Deployment' }
        ]
      },
      {
        id: 'tech-ai',
        title: 'AI / Machine Learning Engineer',
        category: 'TECHNOLOGY & IT',
        description: 'Building intelligent systems using deep learning, NLP, and generative AI models.',
        education_req: 'B.Tech/M.Tech in CS/AI.',
        skills_req: ['Python', 'PyTorch/TensorFlow', 'NLP', 'Computer Vision', 'MLOps'],
        exams: ['GATE DA', 'JEE Advanced'],
        competition_level: 'Very High',
        salary_timeline: { entry: '₹8L - ₹15L', mid: '₹20L - ₹45L', senior: '₹60L - ₹1.2Cr+' },
        industry_demand: { past_5_years: '+200%', projected_10_years: '+180%' },
        career_roadmap: [
          { phase: 'Foundation', action: 'Advanced Mathematics (Linear Algebra, Calculus).' },
          { phase: 'Skill Dev', action: 'Train deep learning models. Read research papers.' },
          { phase: 'Projects', action: 'Build and deploy Generative AI applications.' },
          { phase: 'Entry', action: 'Join AI Research Labs or Tech Giants as ML Engineer.' }
        ],
        skill_roadmap: [
          { step: 1, tech: 'Maths & Core Python' },
          { step: 2, tech: 'Machine Learning (Scikit-Learn)' },
          { step: 3, tech: 'Deep Learning (PyTorch)' },
          { step: 4, tech: 'Model Deployment (MLOps)' }
        ]
      },

      // ----------------- DATA & ANALYTICS (3) -----------------
      {
        id: 'data-scientist',
        title: 'Data Scientist',
        category: 'DATA & ANALYTICS',
        description: 'Extracting intelligence from vast datasets to drive business strategies using predictive modeling.',
        education_req: 'B.Tech/B.Sc in Statistics, Mathematics, or Data Science.',
        skills_req: ['Python', 'SQL', 'Machine Learning', 'Data Visualization', 'Stats'],
        competition_level: 'Moderate',
        eligibility: 'B.Tech/B.Sc in Statistics/Maths. Strong Python skills.',
        exam_required: 'Corporate Assessments / GATE DA (for PSU/MTech)',
        promotion_path: ['Data Analyst', 'Data Scientist', 'Lead Data Scientist', 'VP of Data'],
        future_demand_desc: 'Every company generates data, but few know how to use it. Data Scientists are the bridge between raw data and business profit.',
        salary_timeline: { entry: '₹7L - ₹14L', mid: '₹18L - ₹35L', senior: '₹45L - ₹80L+' },
        industry_demand: { past_5_years: '+75%', projected_10_years: '+120%' },
        career_roadmap: [
          { phase: 'Foundation', action: 'Focus heavily on Statistics and Probability.' },
          { phase: 'Skill Dev', action: 'Master Python Data Stack (Pandas, Numpy).' },
          { phase: 'Projects', action: 'Compete actively on Kaggle.' },
          { phase: 'Entry', action: 'Join as Data Analyst and transition to Scientist.' }
        ],
        skill_roadmap: [
          { step: 1, tech: 'Statistics & Probability' },
          { step: 2, tech: 'Data Wrangling (Pandas/SQL)' },
          { step: 3, tech: 'Machine Learning Models' },
          { step: 4, tech: 'Business Communication / Visualization' }
        ]
      },
      {
        id: 'data-analyst',
        title: 'Data Analyst / BI Developer',
        category: 'DATA & ANALYTICS',
        description: 'Translating raw numbers into digestible dashboards and reports for executive decision-making.',
        education_req: 'Any degree with strong quantitative analytical skills.',
        skills_req: ['SQL', 'Power BI / Tableau', 'Excel', 'Python'],
        exams: ['Any Quantitative Aptitude Test'],
        competition_level: 'High',
        salary_timeline: { entry: '₹3.5L - ₹7L', mid: '₹8L - ₹16L', senior: '₹20L - ₹35L+' },
        industry_demand: { past_5_years: '+50%', projected_10_years: '+80%' },
        career_roadmap: [
          { phase: 'Foundation', action: 'Master Advanced Excel and descriptive statistics.' },
          { phase: 'Skill Dev', action: 'Learn complex SQL queries and joins.' },
          { phase: 'Visualization', action: 'Build interactive dashboards in PowerBI.' },
          { phase: 'Entry', action: 'Join Corporate Strategy or Operations teams.' }
        ],
        skill_roadmap: [
          { step: 1, tech: 'Excel Data Manipulation' },
          { step: 2, tech: 'SQL Databases' },
          { step: 3, tech: 'Power BI / Tableau' },
          { step: 4, tech: 'Data Storytelling' }
        ]
      },
      {
        id: 'data-engineer',
        title: 'Data Engineer',
        category: 'DATA & ANALYTICS',
        description: 'Building and maintaining the massive data pipelines that feed Data Scientists and BI teams.',
        education_req: 'B.Tech CS / IT.',
        skills_req: ['Apache Spark', 'Kafka', 'Hadoop', 'SQL', 'Airflow', 'Python'],
        exams: ['AWS Data Analytics / GCP Data Engineer'],
        competition_level: 'Low',
        salary_timeline: { entry: '₹7L - ₹12L', mid: '₹18L - ₹30L', senior: '₹40L - ₹75L+' },
        industry_demand: { past_5_years: '+130%', projected_10_years: '+150%' },
        career_roadmap: [
          { phase: 'Foundation', action: 'Strong programming and OS fundamentals.' },
          { phase: 'Skill Dev', action: 'Master SQL and distributed computing concepts.' },
          { phase: 'Data Pipelines', action: 'Learn Airflow, Spark, and ETL processes.' },
          { phase: 'Entry', action: 'Join as Junior Data Engineer.' }
        ],
        skill_roadmap: [
          { step: 1, tech: 'Advanced SQL & NoSQL' },
          { step: 2, tech: 'Python/Scala Scripting' },
          { step: 3, tech: 'Big Data Processing (Spark/Kafka)' },
          { step: 4, tech: 'Cloud Data Warehouses (Snowflake/BigQuery)' }
        ]
      },

      // ----------------- GOVT EXAMS & CIVIL SERVICES (5) -----------------
      {
        id: 'gov-ias',
        title: 'UPSC Civil Services (IAS/IPS)',
        category: 'GOVERNMENT & CIVIL SERVICES',
        description: 'The pinnacle of government administration. District management and national policy formulation.',
        education_req: 'Bachelor\'s Degree.',
        skills_req: ['General Knowledge', 'Public Administration', 'Leadership', 'Ethics'],
        exams: ['UPSC CSE'],
        details: { exam_name: 'UPSC CSE', pattern: ['Prelims', 'Mains (9 Papers)', 'Interview'], subjects: ['History, Polity, Economics, Geography, Ethics, Optional subject'] },
        competition_level: 'Extremely High',
        eligibility: 'Any Bachelor\'s Degree (Yes, even a 3-year simple BA/B.Sc is enough). Minimum age 21.',
        exam_required: 'UPSC Civil Services Examination',
        promotion_path: ['SDM', 'District Magistrate (Collector)', 'Divisional Commissioner', 'Secretary to Govt'],
        future_demand_desc: 'Government administration remains absolutely stable. While vacancies are fixed, societal prestige drives relentless elite competition.',
        salary_timeline: { entry: '₹56,100/mo', mid: '₹1,00,000/mo', senior: '₹2,25,000/mo' },
        industry_demand: { past_5_years: 'Flat (~1000 vacancies/yr)', projected_10_years: 'Stable' },
        career_roadmap: [
          { phase: 'Foundation', action: 'Read NCERTs and Daily Newspaper (The Hindu).' },
          { phase: 'Prep', action: 'Dedicated 1-2 years of UPSC coaching/self-study.' },
          { phase: 'Mains', action: 'Rigorous answer writing practice.' },
          { phase: 'Entry', action: 'LBSNAA Training upon selection.' }
        ],
        skill_roadmap: [
          { step: 1, tech: 'NCERT Basics (6th-12th)' },
          { step: 2, tech: 'Core Subjects (Polity, Economy)' },
          { step: 3, tech: 'Current Affairs Analysis' },
          { step: 4, tech: 'Mains Answer Writing' }
        ]
      },
      {
        id: 'gov-bank-po',
        title: 'Probationary Officer (Bank PO)',
        category: 'GOVERNMENT & CIVIL SERVICES',
        description: 'Management trainee position in Public Sector Banks. Handles customer loans, branch operations, and audits.',
        education_req: 'Bachelor\'s Degree.',
        skills_req: ['Quantitative Aptitude', 'Logical Reasoning', 'English', 'Banking Awareness'],
        exams: ['IBPS PO', 'SBI PO'],
        details: { exam_name: 'IBPS / SBI PO', pattern: ['Prelims', 'Mains', 'Interview'], subjects: ['Quant, Reasoning, English, General/Banking Awareness'] },
        competition_level: 'Very High',
        eligibility: 'Any Bachelor\'s Degree from a recognized University.',
        exam_required: 'IBPS PO / SBI PO / RRB PO',
        promotion_path: ['PO', 'Assistant Manager', 'Branch Manager', 'Regional Manager', 'General Manager'],
        future_demand_desc: 'Banking sector continues to grow in India due to digital banking expansion and aggressive financial inclusion programs in rural areas.',
        salary_timeline: { entry: '₹50,000/mo', mid: '₹85,000/mo (Branch Mgr)', senior: '₹1,50,000/mo+ (AGM)' },
        industry_demand: { past_5_years: 'Slight Decline (Privatization)', projected_10_years: 'Stable replacement hiring' },
        career_roadmap: [
          { phase: 'Foundation', action: 'Master speed math and logical puzzles.' },
          { phase: 'Prep', action: 'Practice daily mock tests for speed.' },
          { phase: 'Mains', action: 'Focus on Data Interpretation and Banking GK.' },
          { phase: 'Entry', action: 'Join as PO, undergo 2-year probation.' }
        ],
        skill_roadmap: [
          { step: 1, tech: 'Basic Number System & Arithmetic' },
          { step: 2, tech: 'Puzzles & Seating Arrangements' },
          { step: 3, tech: 'Reading Comprehension & Grammar' },
          { step: 4, tech: 'Current Affairs & Financial GK' }
        ]
      },
      {
        id: 'gov-ssc-cgl',
        title: 'SSC CGL Officer (Income Tax / Excise)',
        category: 'GOVERNMENT & CIVIL SERVICES',
        description: 'Group B and C Gazetted/Non-Gazetted posts in various Ministries and Departments of Gov. of India.',
        education_req: 'Bachelor\'s Degree.',
        skills_req: ['Aptitude', 'English', 'General Awareness', 'Reasoning'],
        exams: ['SSC CGL'],
        details: { exam_name: 'SSC CGL', pattern: ['Tier I', 'Tier II'], subjects: ['Maths, English, Reasoning, General Awareness'] },
        competition_level: 'Extremely High',
        eligibility: 'Any Bachelor\'s Degree. Physical standards apply for certain inspector posts (e.g. Excise/CBI).',
        exam_required: 'SSC Combined Graduate Level (CGL)',
        promotion_path: ['Inspector / ASO', 'Superintendent', 'Assistant Commissioner', 'Joint Commissioner'],
        future_demand_desc: 'Highly coveted due to power and less transfer frequency than Banking. Vacancies fluctuate heavily depending on government policy, but demand is eternal.',
        salary_timeline: { entry: '₹40,000 - ₹70,000/mo', mid: '₹90,000/mo', senior: '₹1,50,000/mo' },
        industry_demand: { past_5_years: 'Volatile (7k-15k vacancies/yr)', projected_10_years: 'Stable' },
        career_roadmap: [
          { phase: 'Foundation', action: 'Learn advanced Maths (Trigonometry, Algebra, Geometry).' },
          { phase: 'Prep', action: 'Memorize vocabulary and grammar rules.' },
          { phase: 'Mocks', action: 'Solve Previous Year Questions (PYQs) repeatedly.' },
          { phase: 'Entry', action: 'Appointed as Inspector or Assistant Section Officer.' }
        ],
        skill_roadmap: [
          { step: 1, tech: 'Advanced Mathematics' },
          { step: 2, tech: 'English Vocab & Comprehension' },
          { step: 3, tech: 'Static GK & History' },
          { step: 4, tech: 'Speed Mathematics' }
        ]
      },
      {
        id: 'gov-railway-ntpc',
        title: 'Railway NTPC (Station Master / Guard)',
        category: 'GOVERNMENT & CIVIL SERVICES',
        description: 'Non-Technical Popular Categories in Indian Railways. Operations, commercial clerical duties, and station management.',
        education_req: '12th Pass or Graduate (Depending on post).',
        skills_req: ['General Awareness', 'Aptitude', 'Reasoning'],
        exams: ['RRB NTPC'],
        details: { exam_name: 'RRB NTPC', pattern: ['CBT-1', 'CBT-2', 'Skill Test/Aptitude Test'], subjects: ['Maths, Reasoning, General Awareness'] },
        competition_level: 'Extremely High (Millions of applicants)',
        eligibility: '12th Pass for Clerical/Typist posts. Any Degree for Station Master / Goods Guard.',
        exam_required: 'RRB Non-Technical Popular Categories (NTPC)',
        promotion_path: ['Station Master', 'Senior Station Master', 'Divisional Operations Manager'],
        future_demand_desc: 'Railway expansion projects (Vande Bharat, Dedicated Freight Corridors) are steadily increasing massive bulk hiring drives.',
        salary_timeline: { entry: '₹35,000/mo', mid: '₹60,000/mo', senior: '₹95,000/mo' },
        industry_demand: { past_5_years: 'Irregular (Hiring in massive batches)', projected_10_years: 'Moderate' },
        career_roadmap: [
          { phase: 'Foundation', action: 'Standard 10th level Maths and Science.' },
          { phase: 'Prep', action: 'Heavy focus on Static GK and Railway History.' },
          { phase: 'Exam', action: 'Clear CBT-1 and post-preference CBT-2.' },
          { phase: 'Entry', action: 'Train as Station Master or Commercial Apprentice.' }
        ],
        skill_roadmap: [
          { step: 1, tech: 'Arithmetic & Number Systems' },
          { step: 2, tech: 'General Science (Phy, Chem, Bio)' },
          { step: 3, tech: 'Current Events & Static GK' },
          { step: 4, tech: 'Logical Reasoning' }
        ]
      },
      {
        id: 'gov-state-psc',
        title: 'State PSC Officer (e.g. TNPSC Group 1)',
        category: 'GOVERNMENT & CIVIL SERVICES',
        description: 'Elite State Administrative roles like Deputy Collector, DSP, and Commercial Tax Officer.',
        education_req: 'Bachelor\'s Degree.',
        skills_req: ['State History/Culture', 'General Studies', 'Aptitude', 'Language/Translation'],
        exams: ['State PSC (e.g., TNPSC/UPPSC)'],
        details: { exam_name: 'State Public Service Commission', pattern: ['Prelims', 'Mains', 'Interview'], subjects: ['State History, General Studies, Aptitude'] },
        competition_level: 'Very High',
        eligibility: 'Any Bachelor\'s Degree. Proficiency in state language (e.g. Tamil for TNPSC) is usually mandatory.',
        exam_required: 'TNPSC Group 1 / Group 2',
        promotion_path: ['Deputy Collector', 'District Revenue Officer', 'Promoted IAS Officer'],
        future_demand_desc: 'Stable state-level hiring. Very popular among rural students because exams can be written entirely in the regional language (Tamil).',
        salary_timeline: { entry: '₹56,100/mo', mid: '₹90,000/mo', senior: '₹1,50,000/mo' },
        industry_demand: { past_5_years: 'Stable', projected_10_years: 'Stable' },
        career_roadmap: [
          { phase: 'Foundation', action: 'Master State board textbooks (6th-12th).' },
          { phase: 'Prep', action: 'Focus on Regional History/Geography.' },
          { phase: 'Mains', action: 'Language papers and essay writing.' },
          { phase: 'Entry', action: 'Appointed as Sub-Collector or DSP.' }
        ],
        skill_roadmap: [
          { step: 1, tech: 'State Specific History & Culture' },
          { step: 2, tech: 'Regional Language Proficiency' },
          { step: 3, tech: 'General Aptitude' },
          { step: 4, tech: 'General Studies' }
        ]
      },

      // ----------------- BUSINESS & MANAGEMENT (4) -----------------
      {
        id: 'bus-ib',
        title: 'Investment Banker',
        category: 'BUSINESS & FINANCE',
        description: 'Advising corporations on M&A, raising capital, and complex financial modeling.',
        education_req: 'MBA Finance (Tier-1) or CA/CFA.',
        skills_req: ['Financial Modeling', 'Valuation', 'Excel', 'Accounting'],
        exams: ['CAT (IIMs)', 'CFA'],
        competition_level: 'Very High',
        salary_timeline: { entry: '₹15L - ₹30L', mid: '₹40L - ₹70L', senior: '₹1Cr+' },
        industry_demand: { past_5_years: '+22%', projected_10_years: '+35%' },
        career_roadmap: [
          { phase: 'Undergrad', action: 'B.Com/Eco/BBA from top college.' },
          { phase: 'Skill Dev', action: 'Master Excel and DCF Valuation.' },
          { phase: 'MBA', action: 'Crack CAT with 99+ percentile.' },
          { phase: 'Entry', action: 'Secure PPO during summer internship.' }
        ],
        skill_roadmap: [
          { step: 1, tech: 'Accounting & Finance Basics' },
          { step: 2, tech: 'Advanced Excel & VBA' },
          { step: 3, tech: 'Financial Statement Analysis' },
          { step: 4, tech: 'M&A Deal Structuring' }
        ]
      },
      {
        id: 'bus-marketing',
        title: 'Digital Marketing Strategist',
        category: 'BUSINESS & MARKETING',
        description: 'Driving brand growth, customer acquisition, and performance marketing across digital channels.',
        education_req: 'Any Degree. Practical portfolio matters more.',
        skills_req: ['SEO/SEM', 'Google Ads', 'Social Media', 'Data Analytics (GA4)', 'Copywriting'],
        exams: ['None (Skill based)'],
        competition_level: 'High',
        salary_timeline: { entry: '₹3L - ₹6L', mid: '₹8L - ₹18L', senior: '₹25L - ₹50L+' },
        industry_demand: { past_5_years: '+85%', projected_10_years: '+60%' },
        career_roadmap: [
          { phase: 'Foundation', action: 'Learn basics of SEO and Social Media algorithms.' },
          { phase: 'Skill Dev', action: 'Run live ad campaigns. Master Google Analytics.' },
          { phase: 'Portfolio', action: 'Grow a personal blog or social media page.' },
          { phase: 'Entry', action: 'Join performance agencies or D2C startups.' }
        ],
        skill_roadmap: [
          { step: 1, tech: 'Content & Copywriting' },
          { step: 2, tech: 'Organic Growth (SEO/SMO)' },
          { step: 3, tech: 'Performance Marketing (Ads)' },
          { step: 4, tech: 'Web Analytics (GA4/Mixpanel)' }
        ]
      },
      {
        id: 'bus-pm',
        title: 'Product Manager',
        category: 'BUSINESS & MANAGEMENT',
        description: 'The CEO of the product. Bridging the gap between engineering, design, and business strategy to build software users love.',
        education_req: 'B.Tech/MBA.',
        skills_req: ['Agile/Scrum', 'Data Analytics', 'Wireframing', 'User Psychology', 'Strategic Thinking'],
        exams: ['CAT (Optional)'],
        competition_level: 'Very High',
        salary_timeline: { entry: '₹12L - ₹20L', mid: '₹25L - ₹45L', senior: '₹60L - ₹1Cr+' },
        industry_demand: { past_5_years: '+110%', projected_10_years: '+95%' },
        career_roadmap: [
          { phase: 'Foundation', action: 'Gain exposure to coding or design.' },
          { phase: 'Skill Dev', action: 'Learn Jira, SQL, and product analytics frameworks.' },
          { phase: 'Portfolio', action: 'Write Product Teardowns (PRDs) for famous apps.' },
          { phase: 'Entry', action: 'Join as Associate Product Manager (APM).' }
        ],
        skill_roadmap: [
          { step: 1, tech: 'Product Discovery & Research' },
          { step: 2, tech: 'Agile Development Lifecycles' },
          { step: 3, tech: 'User Experience (UX) Principles' },
          { step: 4, tech: 'Product Analytics & Metrics tracking' }
        ]
      },
      {
        id: 'bus-stock',
        title: 'Stock Market Trader / Quantitative Analyst',
        category: 'BUSINESS & FINANCE',
        description: 'Analyzing market trends, derivatives, and algorithmic trading to generate alpha.',
        education_req: 'Math/Stat/Finance Degree.',
        skills_req: ['Technical Analysis', 'Derivatives (F&O)', 'Python', 'Algorithmic Trading', 'Risk Management'],
        exams: ['NISM Certifications', 'CFA (Optional)'],
        competition_level: 'High',
        salary_timeline: { entry: '₹5L - ₹10L', mid: '₹15L - ₹40L', senior: '₹50L+ (Performance Based)' },
        industry_demand: { past_5_years: '+150% (Retail boom)', projected_10_years: '+80%' },
        career_roadmap: [
          { phase: 'Foundation', action: 'Learn basic financial literacy and macroeconomics.' },
          { phase: 'Skill Dev', action: 'Master Technical Analysis (Candlesticks, Indicators).' },
          { phase: 'Certifications', action: 'Clear NISM Equity/Derivatives modules.' },
          { phase: 'Entry', action: 'Join Prop Trading Desks or Brokerage firms.' }
        ],
        skill_roadmap: [
          { step: 1, tech: 'Fundamental Stock Valuation' },
          { step: 2, tech: 'Technical Charting & Indicators' },
          { step: 3, tech: 'Options Greeks & Strategies' },
          { step: 4, tech: 'Algorithmic Execution (Python/APIs)' }
        ]
      },

      // ----------------- MEDICAL & HEALTHCARE (2) -----------------
      {
        id: 'med-surgeon',
        title: 'Medical Doctor / Surgeon',
        category: 'MEDICAL & HEALTHCARE',
        description: 'Diagnosing, treating, and operating on patients. Lifesaving and highly respected profession.',
        education_req: 'MBBS + MD/MS.',
        skills_req: ['Clinical Diagnosis', 'Surgical Dexterity', 'Patient Care', 'Anatomy', 'Pharmacology'],
        exams: ['NEET-UG', 'NEET-PG'],
        competition_level: 'Extremely High',
        salary_timeline: { entry: '₹8L - ₹12L', mid: '₹15L - ₹30L', senior: '₹40L - ₹1Cr+' },
        industry_demand: { past_5_years: '+30%', projected_10_years: '+45%' },
        career_roadmap: [
          { phase: 'High School', action: 'PCB stream. Crack NEET-UG (650+).' },
          { phase: 'Undergrad', action: 'Complete 5.5 years MBBS.' },
          { phase: 'Postgrad', action: 'Crack NEET-PG for specialized MD/MS.' },
          { phase: 'Entry', action: 'Senior Residency or Private Clinical Practice.' }
        ],
        skill_roadmap: [
          { step: 1, tech: 'Pre-clinical (Anatomy, Physiology)' },
          { step: 2, tech: 'Para-clinical (Pathology)' },
          { step: 3, tech: 'Clinical Diagnosis' },
          { step: 4, tech: 'Surgical Training' }
        ]
      },
      {
        id: 'med-pharma',
        title: 'Pharmaceutical Researcher',
        category: 'MEDICAL & HEALTHCARE',
        description: 'R&D for new drugs, clinical trials, and bio-tech manufacturing.',
        education_req: 'B.Pharm / M.Pharm / Pharm.D.',
        skills_req: ['Chemistry', 'Clinical Research', 'Pharmacology', 'Regulatory Affairs'],
        exams: ['GPAT', 'NIPER JEE'],
        competition_level: 'Moderate',
        salary_timeline: { entry: '₹3L - ₹6L', mid: '₹8L - ₹15L', senior: '₹20L - ₹35L+' },
        industry_demand: { past_5_years: '+40%', projected_10_years: '+55%' },
        career_roadmap: [
          { phase: 'Foundation', action: 'PCB stream. Join B.Pharm.' },
          { phase: 'Skill Dev', action: 'Focus on organic chemistry and lab techniques.' },
          { phase: 'Postgrad', action: 'Crack GPAT for M.Pharm in Top Institutes.' },
          { phase: 'Entry', action: 'Join R&D labs of Pharma MNCs like Sun Pharma, Cipla.' }
        ],
        skill_roadmap: [
          { step: 1, tech: 'Organic compound synthesis' },
          { step: 2, tech: 'Drug formulation' },
          { step: 3, tech: 'Clinical trial protocols' },
          { step: 4, tech: 'FDA/CDSCO Regulations' }
        ]
      },

      // ----------------- CORE ENGINEERING (2) -----------------
      {
        id: 'core-mech',
        title: 'Core Mechanical / Robotics Engineer',
        category: 'CORE ENGINEERING',
        description: 'Designing physical systems, robotics, HVAC, and manufacturing processes.',
        education_req: 'B.Tech Mechanical/Mechatronics.',
        skills_req: ['CAD/CAM', 'Thermodynamics', 'Kinematics', 'Ansys'],
        exams: ['JEE', 'GATE Mechanical'],
        competition_level: 'High',
        salary_timeline: { entry: '₹3.5L - ₹7L', mid: '₹10L - ₹16L', senior: '₹22L - ₹35L+' },
        industry_demand: { past_5_years: '+15%', projected_10_years: '+35%' },
        career_roadmap: [
          { phase: 'Foundation', action: 'Strong Physics (Mechanics).' },
          { phase: 'Skill Dev', action: 'Master 3D CAD modeling (SolidWorks/Fusion360).' },
          { phase: 'Prep', action: 'Prepare for GATE to enter Core PSUs.' },
          { phase: 'Entry', action: 'Join Auto Sector (Tata/Mahindra) or PSUs.' }
        ],
        skill_roadmap: [
          { step: 1, tech: 'Engineering Mechanics' },
          { step: 2, tech: '3D CAD Modeling' },
          { step: 3, tech: 'FEA/CFD Analysis' },
          { step: 4, tech: 'Mechatronics Integration' }
        ]
      },
      {
        id: 'green-energy',
        title: 'Renewable Energy Engineer',
        category: 'CORE ENGINEERING',
        description: 'Designing solar, wind, and EV infrastructure supporting the transition to Net-Zero.',
        education_req: 'B.Tech Electrical / Energy Engineering.',
        skills_req: ['Power Systems', 'Solar PV Design', 'Battery Tech', 'AutoCAD'],
        exams: ['JEE', 'GATE Electrical'],
        competition_level: 'Low',
        salary_timeline: { entry: '₹4L - ₹8L', mid: '₹10L - ₹18L', senior: '₹25L - ₹40L+' },
        industry_demand: { past_5_years: '+60%', projected_10_years: '+140%' },
        career_roadmap: [
          { phase: 'Foundation', action: 'B.Tech Electrical. Focus on energy electives.' },
          { phase: 'Skill Dev', action: 'Learn PVsyst and electrical grid basics.' },
          { phase: 'Internships', action: 'Intern at Solar EPCs or EV startups.' },
          { phase: 'Entry', action: 'Join as Plant/Design Engineer.' }
        ],
        skill_roadmap: [
          { step: 1, tech: 'Core Electrical Principles' },
          { step: 2, tech: 'Solar PV Systems' },
          { step: 3, tech: 'Li-ion Battery Technology' },
          { step: 4, tech: 'AutoCAD Drafting' }
        ]
      },
      
      // ----------------- CREATIVE & OTHER (2) -----------------
      {
        id: 'ui-ux',
        title: 'UI/UX Product Designer',
        category: 'CREATIVE & DESIGN',
        description: 'Translating user psychology into intuitive digital interfaces.',
        education_req: 'B.Des / Skill Portfolio.',
        skills_req: ['Figma', 'Wireframing', 'Prototyping', 'User Research'],
        exams: ['NID DAT (Optional)'],
        competition_level: 'Moderate',
        salary_timeline: { entry: '₹5L - ₹10L', mid: '₹12L - ₹22L', senior: '₹30L - ₹50L+' },
        industry_demand: { past_5_years: '+55%', projected_10_years: '+65%' },
        career_roadmap: [
          { phase: 'Foundation', action: 'Learn color theory, typography, layouts.' },
          { phase: 'Skill Dev', action: 'Master Figma and build 3-4 deep Case Studies.' },
          { phase: 'Portfolio', action: 'Publish on Behance/Dribbble.' },
          { phase: 'Entry', action: 'Join startups or design agencies.' }
        ],
        skill_roadmap: [
          { step: 1, tech: 'Visual Design Basics' },
          { step: 2, tech: 'Figma Auto-layout & Components' },
          { step: 3, tech: 'UX Research & Personas' },
          { step: 4, tech: 'Interactive Prototyping' }
        ]
      },
      {
        id: 'pol-stra',
        title: 'Political Strategist / Policy Analyst',
        category: 'PUBLIC ADMINISTRATION',
        description: 'Advising political leaders on campaigns, analyzing public policy data, and managing public relations.',
        education_req: 'BA/MA in Political Science, Economics, or Law.',
        skills_req: ['Data Analytics', 'Public Speaking', 'Policy Research', 'Campaign Management'],
        exams: ['CUET PG (For Top Universities)'],
        competition_level: 'Low to Moderate',
        salary_timeline: { entry: '₹6L - ₹10L', mid: '₹15L - ₹25L', senior: '₹35L - ₹80L+ (Consultant)' },
        industry_demand: { past_5_years: '+30%', projected_10_years: '+40%' },
        career_roadmap: [
          { phase: 'Foundation', action: 'Study Political Science/Economy.' },
          { phase: 'Skill Dev', action: 'Learn data analytics for polling metrics.' },
          { phase: 'Internships', action: 'Intern under MPs, NGOs, or PACs (like I-PAC).' },
          { phase: 'Entry', action: 'Join Political Consultancy Firms.' }
        ],
        skill_roadmap: [
          { step: 1, tech: 'Constitutional & Policy Frameworks' },
          { step: 2, tech: 'Survey & Polling Analytics (Excel/SQL)' },
          { step: 3, tech: 'Public Relations & Media Strategy' },
          { step: 4, tech: 'Speechwriting & Communication' }
        ]
      }
    ];

    let matchedCareers = [];

    // V6 STRICT AI COUNSELOR SCHEMA LOGIC
    let field_explanation = "";
    let related_exams: any[] = [];
    let salary_details = "";
    let salary_growth_timeline = [
      { period: "Year 1-3 (Entry)", salary: "₹30,000 - ₹50,000" },
      { period: "Year 5-8 (Mid)", salary: "₹60,000 - ₹1L" },
      { period: "Year 10+ (Senior)", salary: "₹1.5L+" }
    ];
    let career_growth_explanation = "";
    let cutoff_trend_analysis: any = null;
    let future_job_demand = "";
    let recommended_apps: string[] = [];
    let skill_improvement: string[] = [];

    // V6 TN Heuristics Mapping & Context Generation
    if (lowerInput.match(/maths|math|numbers|quant|calculation|reasoning|apti/i)) {
       field_explanation = "Strong Quantitative Aptitude and speed calculation are the absolute backbone for clearing highly secure Government and Banking exams. These sectors provide unmatched job security, lifelong pensions, and extensive benefits. Even a simple 3-year bachelor's degree makes you eligible to become an Officer. By mastering speed math, you bypass the biggest elimination round in these competitive exams.";
       related_exams = [
         { category: "Banking Exams", list: ["IBPS PO", "SBI PO", "RBI Assistant"] },
         { category: "Staff Selection Commission", list: ["SSC CGL", "SSC CHSL"] },
         { category: "Management", list: ["CAT", "TANCET"] }
       ];
       salary_details = "Starting salaries in the Banking/SSC sector range from ₹40,000 to ₹50,000. Under Central Pay Commissions, this scales rapidly with Dearness Allowance (DA). Mid-level Branch Managers earn ₹80,000 – ₹1L/month, while senior officials (AGM/Joint Commissioner) earn ₹1.5L+ along with free housing and medical coverage.";
       salary_growth_timeline = [
         { period: "Year 1-3", salary: "₹40,000 - ₹60,000" },
         { period: "Year 5-8", salary: "₹75,000 - ₹1.2L" },
         { period: "Year 10+", salary: "₹1.5L+" }
       ];
       career_growth_explanation = "In the Banking sector, the hierarchy typically starts at Probationary Officer (PO) ➔ Assistant Manager ➔ Branch Manager ➔ Regional Manager ➔ General Manager. In SSC, you start as an Inspector or ASO and promote to Assistant Commissioner over 10-15 years.";
       cutoff_trend_analysis = {
         exam: "IBPS PO Prelims",
         data: [
           { year: "2021", cutoff: "50.5/100" },
           { year: "2022", cutoff: "49.75/100" },
           { year: "2023", cutoff: "54.25/100" },
           { year: "2025 (Projected)", cutoff: "56.0/100" }
         ],
         explanation: "Competition is slowly increasing as more rural graduates opt for banking security. Speed and accuracy in the Quantitative section are critical to breaching the 55+ mark."
       };
       future_job_demand = "Despite automation, the government mandate for financial inclusion ensuring rural banking expansion guarantees thousands of PO and Clerk vacancies annually. It is a highly stable future market.";
       skill_improvement = ["Solve 50 speed-math puzzles daily", "Memorize squares up to 50 & cubes up to 20"];
       recommended_apps = ["Testbook", "Adda247", "Oliveboard"];
       matchedCareers.push(...careers.filter(c => c.category === 'GOVERNMENT & CIVIL SERVICES' || c.id === 'bus-ib'));
    }
    else if (lowerInput.match(/gk|general knowledge|current affairs|general studies/i)) {
       field_explanation = "A deep understanding of General Knowledge (Current Affairs, Polity, History, Economy) is the primary requirement for elite administrative careers like IAS, IPS, and TNPSC Group 1/2. These roles offer immense societal respect, power to effect real change in Tamil Nadu, and iron-clad job security. Any college degree (Arts, Commerce, Science) is sufficient to appear for these exams.";
       related_exams = [
         { category: "Civil Services", list: ["UPSC CSE (IAS/IPS/IFS)"] },
         { category: "State Exams (Tamil Nadu)", list: ["TNPSC Group 1", "TNPSC Group 2", "TNPSC Group 4"] },
         { category: "Railway Exams", list: ["RRB NTPC", "RRB Group D"] }
       ];
       salary_details = "Government salaries are structured by the 7th Pay Commission. A starting Group 1 Officer or UPSC cleared candidate starts at ₹56,100 basic pay (Gross ~₹80,000). Mid-career salaries cross ₹1.2L/month, and senior Secretaries draw ₹2.25L/month, excluding extensive perks like official cars and bungalows.";
       salary_growth_timeline = [
         { period: "Year 1-3", salary: "₹50,000 - ₹80,000" },
         { period: "Year 5-8", salary: "₹90,000 - ₹1.2L" },
         { period: "Year 10+", salary: "₹1.5L - ₹2.5L+" }
       ];
       career_growth_explanation = "In TNPSC Group 1, you begin as a Deputy Collector. Within 8-12 years, you are promoted into the IAS cadre as a District Revenue Officer (DRO) and eventually a District Magistrate (Collector).";
       cutoff_trend_analysis = {
         exam: "TNPSC Group 4 (General)",
         data: [
           { year: "2019", cutoff: "165/200 Qs" },
           { year: "2022", cutoff: "167/200 Qs" },
           { year: "2024", cutoff: "172/200 Qs" },
           { year: "2026 (Projected)", cutoff: "174/200 Qs" }
         ],
         explanation: "Due to the massive volume of applicants for state-level secure jobs, cutoff inflation is real. Mastery over Tamil eligibility and exact factual GK is required."
       };
       future_job_demand = "Government jobs remain permanently stable. State administrations require continuous recruitment to replace retiring waves, maintaining a constant yearly cycle of competitive opportunities.";
       skill_improvement = ["Read 'The Hindu' or 'Dinamani' daily", "Make short notes on Monthly Current Affairs", "Study static GK (Lucent's)"];
       recommended_apps = ["Unacademy", "Vision IAS", "Testbook"];
       matchedCareers.push(...careers.filter(c => c.category === 'GOVERNMENT & CIVIL SERVICES' || c.id === 'pol-stra'));
    }
    else if (lowerInput.match(/coding|software|programming|it|computer|tech/i)) {
       field_explanation = "The Information Technology (IT) and Software sector is the fastest-growing job engine globally, heavily concentrated in Indian tech hubs like Chennai, Coimbatore, and Bangalore. It offers unparalleled initial salary jumps based entirely on your skill level—not necessarily your specific degree or college tier. If you can code, you can build a massive career here.";
       related_exams = [
         { category: "Private Placements", list: ["TCS NQT", "Infosys InfyTQ", "AMCAT", "CoCubes"] },
         { category: "Higher Education", list: ["GATE CS/IT", "TANCET MCA"] }
       ];
       salary_details = "Starting salaries vary wildly based on skill. Mass recruiters (TCS/Infosys) pay ₹3.5L – ₹4.5L/year. Product companies pay ₹8L – ₹15L. Mid-career Full Stack or Cloud developers earn ₹15L – ₹30L, and senior architects easily cross ₹50L+ packages.";
       salary_growth_timeline = [
         { period: "Year 1-3", salary: "₹4L - ₹10L" },
         { period: "Year 5-8", salary: "₹15L - ₹25L" },
         { period: "Year 10+", salary: "₹35L - ₹60L+" }
       ];
       career_growth_explanation = "A typical software career path starts as a Junior Developer / Trainee ➔ Software Engineer (SDE I) ➔ Senior Developer (SDE II) ➔ Tech Lead / Staff Engineer ➔ Engineering Manager or Software Architect.";
       cutoff_trend_analysis = {
         exam: "TCS NQT (Ninja/Digital profile cutoff equivalent)",
         data: [
           { year: "2021", cutoff: "60%" },
           { year: "2022", cutoff: "65%" },
           { year: "2023", cutoff: "70%" },
           { year: "2025 (Projected)", cutoff: "75%" }
         ],
         explanation: "As basic coding becomes a ubiquitous skill, IT service providers are testing harder on DSA (Data Structures) and logical reasoning to filter the massive applicant pool."
       };
       future_job_demand = "The IT sector is aggressively expanding into AI, Cloud Computing, and Cybersecurity. Basic coding jobs may be automated, but developers who understand complex system design and AI integration will see exponential demand.";
       skill_improvement = ["Master one language deeply (Python or Java/Spring Boot)", "Build active projects on GitHub", "Practice Data Structures on LeetCode"];
       recommended_apps = ["LeetCode", "HackerRank", "GeeksforGeeks"];
       matchedCareers.push(...careers.filter(c => c.category === 'TECHNOLOGY & IT' || c.id === 'data-engineer'));
    }
    else if (lowerInput.match(/business|startup|manage|marketing|entrepreneur/i)) {
       field_explanation = "Business, Management, and Startup fields dictate capital flow and product scaling. They require stellar communication, financial literacy, and leadership. Whether managing global teams as an MBA graduate or scaling your own startup using Nan Mudhalvan schemes, understanding market psychology is the ultimate lever for wealth generation.";
       related_exams = [
         { category: "Management Exams", list: ["CAT", "XAT", "TANCET (for TN MBA)"] }
       ];
       salary_details = "Starting salaries with an MBA range from ₹6L – ₹12L (Tier 2/3 colleges) to ₹20L+ (IIMs). Mid-career Product Managers or Marketing Directors earn ₹25L – ₹40L. Senior executives (VP/CXO) earn substantial base pays + equity matching ₹60L - ₹1 Crore+.";
       salary_growth_timeline = [
         { period: "Year 1-3", salary: "₹6L - ₹15L" },
         { period: "Year 5-8", salary: "₹20L - ₹35L" },
         { period: "Year 10+", salary: "₹50L - ₹1Cr+" }
       ];
       career_growth_explanation = "Corporate hierarchy scales from Management Trainee / Analyst ➔ Product/Marketing Manager ➔ Director ➔ Vice President (VP) ➔ Chief Executive Officer (CEO).";
       cutoff_trend_analysis = {
         exam: "CAT (Percentile for Top 20 B-Schools)",
         data: [
           { year: "2021", cutoff: "95 PR" },
           { year: "2022", cutoff: "96 PR" },
           { year: "2023", cutoff: "97 PR" },
           { year: "2025 (Projected)", cutoff: "98 PR" }
         ],
         explanation: "Management degrees remain the premier way to pivot into leadership. Competition at the absolute top tier (IIM ABC) remains incredibly fierce."
       };
       future_job_demand = "India's startup ecosystem is the 3rd largest globally. Rapidly growing sectors like FinTech, EdTech, and D2C brands require aggressive marketing and product managers to scale.";
       skill_improvement = ["Read business case studies", "Improve public speaking skills", "Understand basic finance and P&L statements"];
       recommended_apps = ["Inshorts", "LinkedIn", "Zerodha Varsity"];
       matchedCareers.push(...careers.filter(c => c.category.includes('BUSINESS')));
    }
    else if (lowerInput.match(/design|drawing|creative|art/i)) {
       field_explanation = "Creative careers have exploded digitally. UI/UX Product Design is currently one of the most highly paid creative fields globally, as every application needs a beautiful, user-friendly interface. No specific traditional degree is required—your visual portfolio (Figma/Behance) and understanding of human psychology serve as your real resume.";
       related_exams = [
         { category: "Design Exams", list: ["NID DAT", "UCEED", "NIFT"] }
       ];
       salary_details = "Junior UI/UX Designers start around ₹4L – ₹8L. Mid-level Product Designers quickly hit ₹15L – ₹25L depending on the tech company. Senior Design Leads or Principal Designers at unicorns earn ₹35L+.";
       salary_growth_timeline = [
         { period: "Year 1-3", salary: "₹5L - ₹10L" },
         { period: "Year 5-8", salary: "₹15L - ₹25L" },
         { period: "Year 10+", salary: "₹35L - ₹50L+" }
       ];
       career_growth_explanation = "Design ladders typically move from Junior UI Designer ➔ UX Researcher / Product Designer ➔ Senior Product Designer ➔ Lead Designer ➔ VP of Design.";
       cutoff_trend_analysis = {
         exam: "UCEED",
         data: [
           { year: "2021", cutoff: "120/300" },
           { year: "2022", cutoff: "125/300" },
           { year: "2023", cutoff: "135/300" },
           { year: "2025 (Projected)", cutoff: "140/300" }
         ],
         explanation: "Core design institutes are highly competitive due to very low seat matrices compared to engineering."
       };
       future_job_demand = "As software becomes commoditized, user experience (UX) is the only differentiator. High demand exists for designers who understand both aesthetics and business conversion metrics.";
       skill_improvement = ["Master design tools like Figma", "Study color theory and typography", "Re-design popular active apps as practice (Case Studies)"];
       recommended_apps = ["Figma", "Behance", "Dribbble", "Pinterest"];
       matchedCareers.push(...careers.filter(c => c.category === 'CREATIVE & DESIGN'));
    }
    else {
       // Generic Fallback Context -> V6 Schema enforced
       field_explanation = "Based on your inputs, we've outlined a multidisciplinary approach for your career. The modern job market highly values cross-functional skills. For example, combining domain knowledge in administration with basics of digital literacy makes you an exceptional candidate across both Government and Private sectors in Tamil Nadu.";
       related_exams = [
         { category: "Popular Pathways", list: ["TNPSC Group 4", "SSC CHSL", "TCS NQT"] }
       ];
       salary_details = "Starting salaries in entry-level generalized roles range from ₹25,000 to ₹40,000. Through promotions or sector switching, mid-career professionals earn ₹60,000 – ₹90,000. Senior management roles cross ₹1.2L+ monthly.";
       salary_growth_timeline = [
         { period: "Year 1-3", salary: "₹25,000 - ₹40,000" },
         { period: "Year 5-8", salary: "₹60,000 - ₹90,000" },
         { period: "Year 10+", salary: "₹1.2L+" }
       ];
       career_growth_explanation = "Growth involves starting as an Analyst/Clerk ➔ Section Head/Team Lead ➔ Operations Manager ➔ Department Head.";
       cutoff_trend_analysis = {
         exam: "SSC CHSL",
         data: [
           { year: "2021", cutoff: "141/200" },
           { year: "2022", cutoff: "145/200" },
           { year: "2023", cutoff: "153/200" },
           { year: "2025 (Projected)", cutoff: "157/200" }
         ],
         explanation: "General competitive exams see massive volumes of applicants, steadily driving cutoffs upward each year."
       };
       future_job_demand = "The hybrid economy requires versatile talent. Administrative logic combined with basic technology skills guarantees steady demand across all tier-1 and tier-2 cities.";
       skill_improvement = ["Focus on communication skills", "Build basic digital literacy (Excel, Word)", "Prepare for generic aptitude tests"];
       recommended_apps = ["Testbook", "LinkedIn Learning"];
       
       if (lowerInput.match(/gov|railway|ssc|bank|clerk|po|upsc|ias|civil|competition|public|police|group/i)) {
         matchedCareers.push(...careers.filter(c => c.category === 'GOVERNMENT & CIVIL SERVICES'));
       }
       if (lowerInput.match(/data|analytic|stat|research|policy|ai|machine|bi|intelligence/i)) {
         matchedCareers.push(...careers.filter(c => c.category === 'DATA & ANALYTICS'));
       }
       if (lowerInput.match(/medical|doctor|biology|health|neet|pharma|medicine/i)) {
         matchedCareers.push(...careers.filter(c => c.category === 'MEDICAL & HEALTHCARE'));
       }
       if (lowerInput.match(/mech|machine|car|hardware|robot|energy|solar|green|ev|environment/i)) {
         matchedCareers.push(...careers.filter(c => c.category === 'CORE ENGINEERING'));
       }
    }

    // Remove duplicates based on ID
    matchedCareers = Array.from(new Map(matchedCareers.map(item => [item.id, item])).values());

    // CRITICAL REQUIREMENT V6: ALWAYS Minimum 7, Maximum 10 suggestions
    let finalSelection = matchedCareers.slice(0, 10);
    
    // Fallback logic if < 7 matches found
    if (finalSelection.length < 7) {
      const finalIds = new Set(finalSelection.map(c => c.id));
      const remainingCareers = careers.filter(c => !finalIds.has(c.id));
      
      for (const remaining of remainingCareers) {
        if (finalSelection.length >= 7) break;
        finalSelection.push(remaining);
      }
    }

    return NextResponse.json({ 
      field_explanation,
      related_exams,
      careers: finalSelection,
      salary_details,
      salary_growth_timeline,
      career_growth_explanation,
      cutoff_trend_analysis,
      future_job_demand,
      skill_improvement,
      recommended_apps
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
