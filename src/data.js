import drPhoto from "./assets/dr-ofori-danso.jpg";

export const PORTAL_URL = "https://app.clarity-ehr.com/patient-portal-login";

export const SERVICES = [
  {
    icon: "🗣️",
    title: "Individual Therapy",
    description:
      "One-on-one video sessions with a licensed therapist for anxiety, depression, trauma, grief, and life transitions.",
    detail: "50-minute sessions · Weekly or biweekly",
  },
  {
    icon: "💊",
    title: "Psychiatry & Medication",
    description:
      "Evaluations and ongoing medication management from a board-certified psychiatric provider, all from home — with GeneSight® genetic testing where necessary to help guide medication choices.",
    detail: "Initial eval 60 min · Follow-ups 20–30 min",
  },
  {
    icon: "💑",
    title: "Couples Counseling",
    description:
      "Strengthen communication and rebuild connection with evidence-based approaches like EFT and the Gottman Method.",
    detail: "55-minute sessions · Both partners join remotely",
  },
  {
    icon: "🧒",
    title: "Teen & Adolescent Care",
    description:
      "Age-appropriate support for teens 13–17 navigating school stress, identity, mood, and family dynamics.",
    detail: "Parent consultation included",
  },
  {
    icon: "🌿",
    title: "Group Support",
    description:
      "Small, therapist-led virtual groups for grief, anxiety management, mindfulness, and postpartum wellness.",
    detail: "6–8 participants · 8-week cohorts",
  },
  {
    icon: "🧘",
    title: "Wellness Coaching",
    description:
      "Structured coaching for sleep, stress resilience, burnout recovery, and sustainable habit change.",
    detail: "30-minute sessions · Action plans included",
  },
];

export const PROVIDERS = [
  {
    name: "Dr. Emmanuel Ofori-Danso",
    initials: "EO",
    role: "NP / Clinical Instructor",
    color: "#3e6b4f",
    photo: drPhoto,
    bio: "Board-certified psychiatric-mental health nurse practitioner and clinical instructor, providing compassionate, evidence-based care in psychotherapy and medication management for adults and adolescents.",
    tags: ["Psychiatry", "Medication Management", "Anxiety", "Depression", "ADHD"],
  },
];

export const CONDITIONS = [
  { icon: "🌊", label: "Anxiety & Panic" },
  { icon: "☁️", label: "Depression" },
  { icon: "⚡", label: "ADHD" },
  { icon: "🌙", label: "Insomnia & Sleep" },
  { icon: "🛡️", label: "PTSD & Trauma" },
  { icon: "🔄", label: "OCD" },
  { icon: "🕯️", label: "Grief & Loss" },
  { icon: "🔥", label: "Burnout & Stress" },
  { icon: "🤱", label: "Postpartum Wellness" },
  { icon: "🧭", label: "Life Transitions" },
];

// Placeholder — replace with the states Dr. Ofori-Danso actually holds licensure in.
export const LICENSED_STATES = [
  "Maryland",
  "Virginia",
  "District of Columbia",
  "Pennsylvania",
  "New York",
];

export const INSURERS = [
  "Aetna",
  "Blue Cross Blue Shield",
  "Cigna",
  "UnitedHealthcare",
  "Superbills for out-of-network",
  "Self-pay from $95",
];

export const STEPS = [
  {
    title: "Tell us what you need",
    text: "Complete a short intake so we understand your goals, preferences, and insurance.",
  },
  {
    title: "Schedule your first visit",
    text: "Pick a time that works for you — most new clients meet with Dr. Ofori-Danso within days.",
  },
  {
    title: "Meet by secure video",
    text: "Join sessions from your phone or computer through our private, HIPAA-compliant video platform.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "I'd put off therapy for years because of my schedule. Being able to meet my therapist from home changed everything.",
    author: "R.K., client since 2024",
  },
  {
    quote:
      "The matching process actually worked — my counselor understood my background from the very first session.",
    author: "A.D., client since 2025",
  },
  {
    quote:
      "Medication management used to mean half a day off work. Now it's a 20-minute video call. Same great care.",
    author: "T.M., client since 2023",
  },
];

export const BOOKS = [
  {
    title: "Feeling Good: The New Mood Therapy",
    author: "David D. Burns, MD",
    topic: "Depression · CBT",
    note: "The classic self-guided CBT book — decades of research show reading it alone can measurably lift mood.",
  },
  {
    title: "The Happiness Trap",
    author: "Russ Harris, MD",
    topic: "Anxiety · ACT",
    note: "A friendly introduction to acceptance and commitment therapy: stop wrestling with thoughts, start living by your values.",
  },
  {
    title: "The Body Keeps the Score",
    author: "Bessel van der Kolk, MD",
    topic: "Trauma",
    note: "The landmark book on how trauma lives in the body — and the many paths to healing it.",
  },
  {
    title: "Self-Compassion",
    author: "Kristin Neff, PhD",
    topic: "Self-criticism",
    note: "Research-backed case for treating yourself like someone you're responsible for helping.",
  },
  {
    title: "Driven to Distraction",
    author: "Edward Hallowell, MD & John Ratey, MD",
    topic: "ADHD",
    note: "The go-to introduction to recognizing and living well with ADHD, written by two psychiatrists who have it.",
  },
  {
    title: "Burnout: The Secret to Unlocking the Stress Cycle",
    author: "Emily Nagoski, PhD & Amelia Nagoski, DMA",
    topic: "Stress · Burnout",
    note: "Why 'dealing with the stressor' isn't the same as 'dealing with the stress' — and how to complete the cycle.",
  },
  {
    title: "Hold Me Tight",
    author: "Sue Johnson, EdD",
    topic: "Couples · EFT",
    note: "Seven conversations that rebuild connection, from the founder of emotionally focused therapy.",
  },
  {
    title: "The Grieving Brain",
    author: "Mary-Frances O'Connor, PhD",
    topic: "Grief",
    note: "A neuroscientist's gentle explanation of why grief hurts the way it does — and why healing isn't forgetting.",
  },
  {
    title: "Untangled",
    author: "Lisa Damour, PhD",
    topic: "Parenting teens",
    note: "A clear map of adolescent development for parents of teenage girls; her 'The Emotional Lives of Teenagers' covers all teens.",
  },
  {
    title: "Maybe You Should Talk to Someone",
    author: "Lori Gottlieb, LMFT",
    topic: "About therapy",
    note: "A therapist's memoir that doubles as the best answer to 'what is therapy actually like?'",
  },
  {
    title: "Why We Sleep",
    author: "Matthew Walker, PhD",
    topic: "Sleep",
    note: "Makes the science of sleep vivid enough to change your habits — foundational for mood and focus.",
  },
  {
    title: "Good Morning, Monster",
    author: "Catherine Gildiner, PhD",
    topic: "Hope · Recovery",
    note: "Five true stories of clients' 'heroic journeys' through therapy — deeply humanizing and hopeful.",
  },
];

export const FAQS = [
  {
    q: "Is telehealth therapy as effective as in-person?",
    a: "Research consistently shows video-based therapy produces outcomes comparable to in-person care for most concerns, including anxiety and depression. Many clients find they open up more easily from a comfortable, familiar space.",
  },
  {
    q: "Do you accept insurance?",
    a: "We accept most major plans, including Aetna, Cigna, United, and Blue Cross Blue Shield, and we provide superbills for out-of-network reimbursement. Self-pay rates start at $95 per session with sliding-scale spots available.",
  },
  {
    q: "How quickly can I be seen?",
    a: "Most new clients have their first session within 3–5 days of completing intake. Psychiatry evaluations are typically scheduled within one week.",
  },
  {
    q: "Is my information private?",
    a: "Yes. All sessions run on an encrypted, HIPAA-compliant video platform, and your records are never shared without your written consent, except where required by law.",
  },
  {
    q: "Who will I be working with?",
    a: "All care at Emmanus Wellness is provided by Dr. Emmanuel Ofori-Danso, a board-certified psychiatric-mental health nurse practitioner and clinical instructor — so you see the same trusted clinician at every visit.",
  },
  {
    q: "Can you prescribe medication?",
    a: "Yes — Dr. Ofori-Danso can prescribe most medications where clinically appropriate. Controlled substances may require additional evaluation depending on your state's telehealth regulations.",
  },
  {
    q: "What is GeneSight testing?",
    a: "GeneSight® is a pharmacogenomic test — a simple cheek swab that analyzes how your genes may affect the way you process certain psychiatric medications. Where necessary, especially when past medications haven't worked or caused side effects, Dr. Ofori-Danso uses it to help inform medication decisions. It's one input among many, ordered when it's clinically useful rather than for everyone.",
  },
  {
    q: "Do I have to choose between medication and therapy?",
    a: "No — and Dr. Ofori-Danso recommends against it. His philosophy is \"Pills and Skills\": medication can steady symptoms while therapy builds the skills that keep you well, and research consistently shows the combination outperforms either alone.",
  },
];
