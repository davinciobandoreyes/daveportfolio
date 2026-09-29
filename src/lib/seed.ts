import type {
  Certification,
  DesignProcess,
  Experience,
  Profile,
  Project,
  ProjectArtifact,
  ProjectCategory,
  Skill,
  SkillEdge,
  Testimonial,
} from "./types";

function stubProject({
  id,
  slug,
  title,
  client,
  categories,
  cover_url,
  sort,
  summary,
  process,
}: {
  id: string;
  slug: string;
  title: string;
  client: string;
  categories: ProjectCategory[];
  cover_url: string | null;
  sort: number;
  summary: string;
  process?: DesignProcess | null;
}): Project {
  return {
    id,
    slug,
    title,
    client,
    categories,
    cover_url,
    sort,
    summary,
    company_url: null,
    role: "UX Designer",
    platforms: [],
    published: true,
    brief: null,
    problem: null,
    methodologies: [],
    technologies: [],
    leadership: null,
    impact_metrics: [],
    process: process ?? null,
  };
}

export const yourwayDesignThinkingProcess: DesignProcess = {
  lead: "Design Thinking, accelerated with agentic AI — used to pick the right research and production tools at each phase.",
  phases: [
    {
      id: "empathize",
      title: "Empathize",
      space: "problem",
      steps: [
        { label: "Pre-shapes" },
        { label: "Benchmark", emphasis: true },
        { label: "User journeys" },
      ],
    },
    {
      id: "define",
      title: "Define",
      space: "problem",
      steps: [
        { label: "AI-grouped patterns" },
        { label: "Cluster into action points" },
      ],
    },
    {
      id: "ideate",
      title: "Ideate",
      space: "solution",
      steps: [
        { label: "Figma wireframes" },
        { label: "Claude Design hi-fi" },
      ],
    },
    {
      id: "prototype",
      title: "Prototype & Test",
      space: "solution",
      steps: [
        { label: "Claude flow prototypes" },
        { label: "Cursor-mounted HTML", emphasis: true },
      ],
    },
  ],
};

export const symptDesignThinkingProcess: DesignProcess = {
  lead: "Design Thinking — used to learn why people still drive to a hospital or self-medicate instead of reaching a doctor online.",
  phases: [
    {
      id: "empathize",
      title: "Empathize",
      space: "problem",
      steps: [
        { label: "Desktop research" },
        { label: "Direct interviews" },
        { label: "Surveys", emphasis: true },
      ],
    },
    {
      id: "define",
      title: "Define",
      space: "problem",
      steps: [{ label: "User personas" }, { label: "User journeys" }],
    },
    {
      id: "ideate",
      title: "Ideate",
      space: "solution",
      steps: [{ label: "Figma flows" }, { label: "Affinity Designer" }],
    },
    {
      id: "prototype",
      title: "Prototype & Test",
      space: "solution",
      steps: [
        { label: "Hi-fi mocks" },
        { label: "User testing", emphasis: true },
      ],
    },
  ],
};

export const comedDesignThinkingProcess: DesignProcess = {
  lead: "Design Thinking — used to learn how students meet climate and renewable-energy content, and why an AR wall in the city was the idea they wanted.",
  phases: [
    {
      id: "empathize",
      title: "Empathize",
      space: "problem",
      steps: [
        { label: "Desktop research" },
        { label: "Direct interviews" },
        { label: "Surveys", emphasis: true },
      ],
    },
    {
      id: "define",
      title: "Define",
      space: "problem",
      steps: [{ label: "User personas" }, { label: "User journeys" }],
    },
    {
      id: "ideate",
      title: "Ideate",
      space: "solution",
      steps: [{ label: "Figma flows" }, { label: "AR city prototypes" }],
    },
    {
      id: "prototype",
      title: "Prototype & Test",
      space: "solution",
      steps: [
        { label: "Hi-fi mocks" },
        { label: "User testing", emphasis: true },
      ],
    },
  ],
};

export const mibancoDesignThinkingProcess: DesignProcess = {
  lead: "Design Thinking — used to learn why microloans still needed a face-to-face visit, and how to move disbursement onto the phone.",
  phases: [
    {
      id: "empathize",
      title: "Empathize",
      space: "problem",
      steps: [
        { label: "Desktop research" },
        { label: "Direct interviews" },
        { label: "Surveys", emphasis: true },
      ],
    },
    {
      id: "define",
      title: "Define",
      space: "problem",
      steps: [{ label: "User personas" }, { label: "User journeys" }],
    },
    {
      id: "ideate",
      title: "Ideate",
      space: "solution",
      steps: [{ label: "Figma flows" }, { label: "Loan-desk mocks" }],
    },
    {
      id: "prototype",
      title: "Prototype & Test",
      space: "solution",
      steps: [
        { label: "Hi-fi mocks" },
        { label: "User testing", emphasis: true },
      ],
    },
  ],
};

export const budgeeDesignThinkingProcess: DesignProcess = {
  lead: "Design Thinking — used to pick the research and production tools for keeping everyday expenses on budget.",
  phases: [
    {
      id: "empathize",
      title: "Empathize",
      space: "problem",
      steps: [
        { label: "Desktop research" },
        { label: "Affinity of problems", emphasis: true },
        { label: "User personas" },
        { label: "Customer journey" },
      ],
    },
    {
      id: "define",
      title: "Define",
      space: "problem",
      steps: [
        { label: "Affinity of solutions" },
        { label: "Impact graph" },
      ],
    },
    {
      id: "ideate",
      title: "Ideate",
      space: "solution",
      steps: [
        { label: "Benchmarking" },
        { label: "Flowcharts" },
        { label: "Wireframes" },
      ],
    },
    {
      id: "prototype",
      title: "Prototype & Test",
      space: "solution",
      steps: [
        { label: "Low-fi MVP" },
        { label: "Test", emphasis: true },
        { label: "High fidelity" },
      ],
    },
  ],
};

export const wargoDesignThinkingProcess: DesignProcess = {
  lead: "Design Thinking — used to learn why gym members stop training when they travel, and what one membership would have to show before they walk in.",
  phases: [
    {
      id: "empathize",
      title: "Empathize",
      space: "problem",
      steps: [
        { label: "Desktop research" },
        { label: "Direct interviews" },
        { label: "Surveys", emphasis: true },
        { label: "User testing" },
      ],
    },
    {
      id: "define",
      title: "Define",
      space: "problem",
      steps: [{ label: "User personas" }, { label: "User journeys" }],
    },
    {
      id: "ideate",
      title: "Ideate",
      space: "solution",
      steps: [{ label: "Figma" }, { label: "Affinity Designer" }],
    },
    {
      id: "prototype",
      title: "Prototype & Test",
      space: "solution",
      steps: [
        { label: "Hi-fi mocks" },
        { label: "User testing", emphasis: true },
        { label: "Lottie" },
      ],
    },
  ],
};

export const pokemonUniteDesignThinkingProcess: DesignProcess = {
  lead: "Design Thinking — used to find why trainers cannot get into a Unite Battle fast, and which UI change is worth the next sprint.",
  phases: [
    {
      id: "empathize",
      title: "Empathize",
      space: "problem",
      steps: [
        { label: "Desktop research" },
        { label: "Five-game interviews", emphasis: true },
        { label: "Problem analysis" },
      ],
    },
    {
      id: "define",
      title: "Define",
      space: "problem",
      steps: [{ label: "Affinity diagram" }, { label: "Impact graph" }],
    },
    {
      id: "ideate",
      title: "Ideate",
      space: "solution",
      steps: [{ label: "Wireframes" }, { label: "Benchmark" }],
    },
    {
      id: "prototype",
      title: "Prototype & Test",
      space: "solution",
      steps: [
        { label: "Low-fi" },
        { label: "User testing", emphasis: true },
        { label: "High-fi" },
      ],
    },
  ],
};

export const notiplacDesignThinkingProcess: DesignProcess = {
  lead: "Design Thinking — used to learn why owners leave the first shop after warranty, and why shops still lose more than 70% of customers.",
  phases: [
    {
      id: "empathize",
      title: "Empathize",
      space: "problem",
      steps: [
        { label: "Desktop research" },
        { label: "Surveys", emphasis: true },
        { label: "User testing" },
      ],
    },
    {
      id: "define",
      title: "Define",
      space: "problem",
      steps: [{ label: "User personas" }, { label: "User journeys" }],
    },
    {
      id: "ideate",
      title: "Ideate",
      space: "solution",
      steps: [{ label: "Figma flows" }, { label: "Adobe XD" }],
    },
    {
      id: "prototype",
      title: "Prototype & Test",
      space: "solution",
      steps: [
        { label: "Hi-fi mocks" },
        { label: "User testing", emphasis: true },
      ],
    },
  ],
};

export const truckersDesignThinkingProcess: DesignProcess = {
  lead: "Design Thinking — used to pick the research and production tools so drivers can find a job, and companies can post one, without a support ticket.",
  phases: [
    {
      id: "empathize",
      title: "Empathize",
      space: "problem",
      steps: [
        { label: "Desktop research" },
        { label: "Affinity of problems", emphasis: true },
        { label: "User personas" },
        { label: "Customer journey" },
      ],
    },
    {
      id: "define",
      title: "Define",
      space: "problem",
      steps: [
        { label: "Affinity of solutions" },
        { label: "Impact graph" },
      ],
    },
    {
      id: "ideate",
      title: "Ideate",
      space: "solution",
      steps: [
        { label: "Benchmarking" },
        { label: "Flowcharts" },
        { label: "Wireframes" },
      ],
    },
    {
      id: "prototype",
      title: "Prototype & Test",
      space: "solution",
      steps: [
        { label: "Low-fi" },
        { label: "Test", emphasis: true },
        { label: "High fidelity" },
      ],
    },
  ],
};

export const doubleDiamondProcess: DesignProcess = {
  lead: "Double Diamond, with extra weight on competitive benchmarking and usability testing.",
  phases: [
    {
      id: "discover",
      title: "Discover",
      space: "problem",
      steps: [
        { label: "Research" },
        { label: "Benchmark", emphasis: true },
      ],
    },
    {
      id: "define",
      title: "Define",
      space: "problem",
      steps: [{ label: "Insights" }, { label: "Problem framing" }],
    },
    {
      id: "develop",
      title: "Develop",
      space: "solution",
      steps: [{ label: "Ideation" }, { label: "Flows and prototypes" }],
    },
    {
      id: "deliver",
      title: "Deliver",
      space: "solution",
      steps: [
        { label: "Usability testing", emphasis: true },
        { label: "Iterate and ship" },
      ],
    },
  ],
};

export const profile: Profile = {
  name: "David Obando Reyes",
  title: "UX Engineer",
  bio: "Senior UX/UI & Product Designer crafting digital products end-to-end—from research and strategy to interaction design, design systems, and AI-powered experiences. Exploring how agentic AI can transform the way we design, build, and use digital products. Based in Cali, Colombia.",
  email: "davinciobandoreyes@gmail.com",
  location: "Cali, Valle del Cauca, Colombia",
  links: {
    linkedin: "https://www.linkedin.com/in/davidobandor/",
    cv_path: "/david-obando-reyes-cv.pdf",
    behance: "https://www.behance.net/davidobandor/",
    medium:
      "https://medium.com/@davinciobandoreyes/from-laid-off-to-landing-interviews-a-product-designers-playbook-for-2026-7b04b65c60fe",
  },
  languages: [
    "Spanish (Native)",
    "English (Advanced / Bilingual)",
    "Japanese (Basic)",
  ],
  highlights: [
    { value: "10+", label: "Years of experience" },
    { value: "6+", label: "Industries" },
    { value: "Multi-disciplinary", label: "Product Manager, gamification, and Ai product design" },
  ],
};

export const projects: Project[] = [
  {
    id: "p-yourway",
    slug: "yourway",
    title: "Student engagement experience",
    client: "Yourway Learning",
    company_url: "https://www.yourwaylearning.com/",
    role: "Senior UX Designer & Product Manager",
    summary:
      "AI that puts teaching first — less prep time, more classroom engagement, and teachers still in control of generated content.",
    categories: ["edutech", "ai"],
    platforms: ["Desktop", "Mobile"],
    cover_url: "/work/yourway.jpg",
    sort: 1,
    published: true,
    brief:
      "Owned end-to-end UX and product for teacher web, classroom app, and student-facing activities at Yourway Learning. Used an agentic AI design workflow — Figma, Claude Design, and Cursor — to move from research to high-fidelity prototypes while keeping teachers in control of generated content.",
    problem:
      "Teachers spend more time on preparation and admin than actually teaching — 38% on lesson prep and 15% on admin, versus 32% in the classroom.",
    goals: [
      "Reduce lesson preparation time",
      "Increase classroom engagement",
      "Keep teachers in control of AI-generated content",
    ],
    methodologies: [
      "Design Thinking",
      "Desktop research",
      "Direct interviews",
      "Surveys",
      "User personas",
      "User journeys",
      "Usability testing (Maze)",
      "Octalysis",
      "Agentic AI-assisted ideation",
    ],
    technologies: ["Figma", "Maze", "Claude Design", "Cursor AI"],
    leadership:
      "Grew from UX design into product management ownership — shaping strategy, prioritizing opportunities, defining requirements, and partnering with engineering from concept through delivery. Organized the design team around efficient, user-centric workflows (Design Ops).",
    impact_metrics: [
      {
        label: "Monthly User Activities",
        value: "16%",
      },
      {
        label: "Features into licenses",
        value: "30K",
        note: "New activity ecosystem tied to license revenue.",
      },
      {
        label: "Design Ops",
        value: "Team systems",
        note: "Organized the design team around efficient, user-centric workflows.",
      },
    ],
    process: yourwayDesignThinkingProcess,
    benchmark: {
      lead: "A competitive scan of teacher-facing AI products. Most offer a tool or a chat. Few combine a filtered tool bank, live classroom control, and student activities that go beyond chat.",
      criteria: [
        "Tool library",
        "Live control",
        "Beyond chat",
        "Gamification",
        "Class data",
      ],
      rows: [
        {
          name: "Yourway",
          highlight: true,
          marks: ["strong", "strong", "strong", "strong", "strong"],
        },
        {
          name: "Flint",
          marks: ["partial", "partial", "none", "none", "partial"],
        },
        {
          name: "MagicSchool",
          marks: ["strong", "none", "none", "none", "partial"],
        },
        {
          name: "Canva",
          marks: ["partial", "none", "none", "none", "none"],
        },
        {
          name: "Brisk",
          marks: ["partial", "none", "none", "none", "none"],
        },
        {
          name: "Wayground AI",
          marks: ["partial", "partial", "partial", "partial", "partial"],
        },
        {
          name: "SchoolAI",
          marks: ["partial", "partial", "none", "none", "partial"],
        },
        {
          name: "Snorkl",
          marks: ["none", "none", "partial", "none", "partial"],
        },
      ],
    },
    decisions: [
      {
        title: "Filter the AI tool bank by subject and job",
        why: "Teachers were overwhelmed hunting for the right AI tool. Subject ecosystems plus purpose filters — lesson planning, assessment, engagement — make finding a tool a scan instead of a search.",
      },
      {
        title: "Keep the teacher in control of live activities",
        why: "AI-generated content only works if the teacher stays in charge. The live dashboard and toolbar let them watch progress, add time, pause, or finish the activity from the classroom.",
      },
      {
        title: "Move student interactions beyond chat",
        why: "The existing activity model was chat-only. Quizzes, checkpoints, and review give students more ways to engage without turning the lesson into a chatbot.",
      },
      {
        title: "Gamify with Octalysis, without weakening pedagogy",
        why: "Avatars and game loops raise classroom engagement, but only if they serve the lesson. Octalysis shaped the loops so narrative and motivation stay secondary to learning.",
      },
    ],
    insight: {
      title: "Teacher time distribution",
      lead: "How teachers spend their week — the data that framed the problem.",
      insight:
        "Teachers spend more time on preparation and admin than on actually teaching.",
      compare: {
        left: { value: "53%", label: "Prep + admin" },
        right: { value: "32%", label: "Teaching" },
      },
      slices: [
        {
          label: "Lesson preparation",
          value: 38,
          tone: "violet",
          emphasis: true,
        },
        { label: "Teaching", value: 32, tone: "link" },
        { label: "Administrative tasks", value: 15, tone: "warning" },
        { label: "Grading & feedback", value: 10, tone: "cyan" },
        { label: "Professional development", value: 5, tone: "mute" },
      ],
    },
    journey: {
      title: "Create an interactive activity",
      lead: "The teacher's journey from a flat lesson to reviewing results — mapped as goal, action, emotion, and opportunity at each step.",
      steps: [
        {
          title: "Identify the need",
          emotion: "Frustrated",
          goal: "Find a way to make a lesson more engaging.",
          action: "Reflects on a lesson that fell flat and searches for ideas.",
          opportunity: "A short problem-finder quiz could suggest activity types.",
        },
        {
          title: "Research AI tools",
          emotion: "Overwhelmed",
          goal: "Understand what AI tools exist for this purpose.",
          action:
            "Googles AI tools for teachers, reads roundups, and asks colleagues.",
          opportunity:
            "One trusted directory filtered by subject and grade saves time.",
        },
        {
          title: "Sign up and get access",
          emotion: "Cautious",
          goal: "Get access to a tool that fits the class.",
          action:
            "Signs up with a school email and sets up a free or district account.",
          opportunity: "Single sign-on with school systems removes a barrier.",
        },
        {
          title: "Explore features",
          emotion: "Curious",
          goal: "Learn what the tool can actually do.",
          action: "Clicks through templates, watches a tutorial, and tries a demo.",
          opportunity: "A two-minute guided sample beats a blank template.",
        },
        {
          title: "Design the activity",
          emotion: "Focused",
          goal: "Build an activity aligned to learning objectives.",
          action: "Writes prompts, sets grade level and topic, and adds a rubric.",
          opportunity: "Auto-align prompts to standards to save planning time.",
        },
        {
          title: "Test it",
          emotion: "Nervous",
          goal: "Confirm the activity works as intended.",
          action:
            "Tries the activity as a student would and checks tone and accuracy.",
          opportunity:
            "A preview-as-student mode and fact-check flag build trust.",
        },
        {
          title: "Run it in class",
          emotion: "Confident",
          goal: "Run the activity smoothly with students.",
          action:
            "Shares a link or QR code, monitors screens, and answers questions.",
          opportunity: "A live teacher dashboard reduces mid-class anxiety.",
        },
        {
          title: "Review results",
          emotion: "Satisfied",
          goal: "Know if it actually helped students learn.",
          action:
            "Checks completion data, reads output, and adjusts for next time.",
          opportunity:
            "An auto-generated summary of gains to share with admin or parents.",
        },
      ],
    },
    star: {
      title: "Creating Activities",
      situation:
        "The live activity model was chat-only, which limited how students could engage with AI-generated lessons.",
      task: "Design the full new activity experience and add gamification without weakening pedagogical needs.",
      action:
        "Ran a Double Diamond pass with competitive journeys and Octalysis, then designed the new activity ecosystem across teacher controls and student-facing surfaces.",
      result:
        "Shipped the new activity ecosystem and helped close about 30,000 licenses.",
    },
  },
  {
    id: "p-everglades",
    slug: "everglades",
    title: "Everglades Safari AR",
    client: "Before It's Too Late",
    company_url: "https://www.beforeitstoolate.earth/",
    role: "UX/UI Designer",
    summary:
      "On-site AR safari at Losner Park — visitors discover Everglades and Biscayne Bay species, feed and dance with them, and collect a Biodex.",
    categories: ["edutech"],
    platforms: ["iOS"],
    cover_url: "/work/everglades.jpg",
    sort: 2,
    published: true,
    brief:
      "Designed the visitor-facing mobile experience for Everglades Safari AR, a free education app for Losner Park in Homestead, Florida. The work sat with Before It's Too Late (BITL) — a Miami nonprofit arts collective — in collaboration with The Everglades Foundation, sponsored by the City of Homestead. The safari lives in downtown Homestead, the Gateway to Everglades and Biscayne National Parks, so families can meet the ecosystem without first traveling into the park.",
    problem:
      "Climate change feels far away for many people, and visitors who want to learn about the Everglades often are not sure how to start. Downtown Homestead needed a public, on-site way to bring species and habitats to a city park — and to inspire future stewards — without requiring a trip into the national park first.",
    goals: [
      "Teach species that matter to the Everglades and Biscayne Bay ecosystems",
      "Let visitors discover and interact with 3D plants and animals through the phone camera",
      "Turn learning into play — feed, dance, and collect species in a Biodex",
      "Reward a completed safari with a 3D-printed sculpture at the Cybrarium",
    ],
    methodologies: [],
    technologies: ["iOS", "Augmented reality"],
    leadership: null,
    impact_metrics: [
      {
        label: "Library experience",
        value: "Digitized",
        note: "Moved the Cybrarium lesson onto the phone — species, collection, and a 3D-printed prize next door.",
      },
      {
        label: "On-site safari",
        value: "Gamified",
        note: "Feed, dance, discover, and collect a Biodex so learning stays play in the park.",
      },
    ],
    decisions: [
      {
        title: "Anchor the safari to Losner Park",
        why: "A generic wildlife app would stay on the phone. Site-specific AR — starting at the park's memorial wall — makes downtown Homestead the classroom and keeps the lesson tied to a real place.",
      },
      {
        title: "Teach through Feed, Dance, and Discover",
        why: "Facts alone do not hold a family in a park. Three verbs let visitors play with a species, then learn why it matters to the ecosystem.",
      },
      {
        title: "Split creature UI into facts and actions",
        why: "Each encounter has two layers: a floating panel for name, status, size, diet, habitat, and health, and a bottom bar for Feed, Dance, and Discover. Visitors can study or play without burying one in the other.",
      },
      {
        title: "Close the loop with a physical prize",
        why: "Completing the Biodex is not only a digital badge. Players who find every species collect a 3D-printed sculpture at the Cybrarium next door — a reason to finish the park walk and carry the lesson home.",
      },
    ],
    journey: {
      title: "Discover a species at Losner Park",
      lead: "The visitor loop from arriving in downtown Homestead to collecting a species — and, if they finish the Biodex, a sculpture at the Cybrarium.",
      steps: [
        {
          title: "Arrive at the park",
          emotion: "Unsure",
          goal: "Find a way to learn about the Everglades in town.",
          action: "Comes to Losner Park in downtown Homestead, often with family.",
          opportunity: "The safari starts in the park they already know how to reach.",
        },
        {
          title: "Scan the memorial",
          emotion: "Curious",
          goal: "Wake the experience on the phone.",
          action: "Points the camera at the World War II memorial marker.",
          opportunity: "A single scan at a landmark is a clearer start than a hidden menu.",
        },
        {
          title: "Meet the guide",
          emotion: "Welcomed",
          goal: "Understand why this site matters before the animals appear.",
          action: "A holographic guide appears in virtual glass and frames the safari.",
          opportunity: "History first gives the wildlife walk a reason to exist here.",
        },
        {
          title: "Follow the wildlife map",
          emotion: "Exploratory",
          goal: "Find the next species in the park.",
          action: "Uses the mini-map and glowing points to walk between themed zones.",
          opportunity: "Hidden animals as map points turn the park into a hunt, not a list.",
        },
        {
          title: "Encounter a species",
          emotion: "Delighted",
          goal: "See a plant or animal in the real scene.",
          action: "Scans a zone marker; a 3D species appears on the grass through the camera.",
          opportunity: "Grounded AR keeps the lesson in the park, not in a 3D viewer.",
        },
        {
          title: "Read the overlay",
          emotion: "Focused",
          goal: "Learn what this species is and why it matters.",
          action: "Reads name, status, and size, then taps yellow icons for diet, habitat, and health.",
          opportunity: "Short facts on tap beat a long article while standing outside.",
        },
        {
          title: "Play with the species",
          emotion: "Playful",
          goal: "Do something with the animal, not only look at it.",
          action: "Feeds it, makes it dance, or opens Discover.",
          opportunity: "Feed, Dance, and Discover make the science memorable for kids and adults.",
        },
        {
          title: "Collect and finish",
          emotion: "Proud",
          goal: "Keep the species and complete the safari.",
          action: "Adds it to the Biodex. Finding every species unlocks a 3D-printed sculpture at the Cybrarium.",
          opportunity: "A physical prize next door gives the collection a real-world close.",
        },
      ],
    },
    star: {
      title: "On-site Everglades safari",
      situation:
        "People who wanted to visit and learn about the Everglades often did not know how to start, and the ecosystem still felt distant from everyday downtown life.",
      task: "Design a free AR safari in Losner Park that teaches Everglades and Biscayne Bay species through play.",
      action:
        "Designed the visitor loop and species-encounter interface — site-specific markers, educational overlays, Feed / Dance / Discover, and a Biodex that ends at the Cybrarium.",
      result:
        "Shipped as a free iOS education app with BITL and The Everglades Foundation, sponsored by the City of Homestead. Players who discover every species collect a 3D-printed sculpture next door.",
    },
  },
  {
    id: "p-comed",
    slug: "comed",
    title: "ComEd AR Chicago Bronzeville",
    client: "ComEd",
    company_url: null,
    role: "UX Designer",
    summary:
      "An AR microgrid for Bronzeville — students place a city on the ground, add renewables, and connect the grid to learn climate and energy.",
    categories: ["edutech"],
    platforms: ["iOS"],
    cover_url: "/work/comed.jpg",
    sort: 3,
    published: true,
    brief:
      "Designed a connected, resilient, and sustainable app experience for Bronzeville — a ComEd AR mural that lets people build a city of the future on the ground and learn climate change through renewable energy.",
    problem:
      "The AR experience depends on daylight, and visitors need to find multiple tags in the area without someone standing next to them. It also has to teach climate change through renewable energy — not only look like a 3D toy.",
    goals: [
      "Teach why climate change and renewable energy matter, using AR",
      "Let people build and connect a Bronzeville microgrid without a helper on site",
    ],
    methodologies: [
      "Design Thinking",
      "Desktop research",
      "Direct interviews",
      "User testing",
      "Surveys",
      "User personas",
      "User journeys",
    ],
    technologies: ["Figma", "Trello", "Jira", "Lottie"],
    leadership: null,
    impact_metrics: [],
    process: comedDesignThinkingProcess,
    insight: {
      title: "What people wanted in the city",
      lead: "Survey and school interviews that framed the problem. 75% already knew AR and how to use it. 11 of 15 schools we interviewed already use AR to teach.",
      insight:
        "83 of 100 people wanted an interactive AR wall in their city for learning. The rest wanted other ideas.",
      compare: {
        left: { value: "83%", label: "Wanted an AR wall" },
        right: { value: "17%", label: "Wanted other ideas" },
      },
      slices: [
        {
          label: "Wanted an interactive AR wall",
          value: 83,
          tone: "link",
          emphasis: true,
        },
        { label: "Wanted other ideas", value: 17, tone: "mute" },
      ],
    },
    decisions: [
      {
        title: "Place the city on the ground, then build it",
        why: "The mural opens Bronzeville Renaissance, then the camera drops a microgrid on the grass. Building on the real site makes the lesson local, not a generic energy game.",
      },
      {
        title: "Rotate the phone to enter AR — or use a web marker",
        why: "Daylight and on-site tags are easy to miss. A rotate-to-activate step, plus a web marker if they are not at the mural, keeps the walk going without a helper.",
      },
      {
        title: "Hint the next energy part instead of lecturing",
        why: "Johan sits through hours of reading aloud and still does not know what to ask. Hints tell him to add a generator for baseload, then renewables, so the science shows up as the next build step.",
      },
      {
        title: "Connect the city only after it is built",
        why: "A finished model is not the lesson. Connect city closes the loop — the grid has to work together, which is the renewable-energy point.",
      },
    ],
    journey: {
      title: "Learn about Bronzeville history and renewable energies",
      lead: "Johan — an 11-year-old who likes games and hates sitting still — moving through a typical energy class, and where AR can take the pressure off.",
      steps: [
        {
          title: "Arrive to school",
          emotion: "Frustrated",
          goal: "Get through the day without another pile of homework.",
          action: "Gets to the school bus stop and waits for the bus.",
          opportunity: "Send the play along the week so the lesson is not only a classroom sit-down.",
        },
        {
          title: "Renewable energy class started",
          emotion: "Bored",
          goal: "Learn the subject without losing the hour to a lecture.",
          action: "Gets told they will learn about energy. The teacher starts reading aloud. He sits still and waits for class to end.",
          opportunity: "Guide each step toward the main goal, and let him connect reports in the app instead of filling them by hand.",
        },
        {
          title: "Ask questions",
          emotion: "Uneasy",
          goal: "Understand the material enough to speak up.",
          action: "The teacher asks the whole class. He does not answer well and gets extra homework.",
          opportunity: "Use easier language, give interactive material, and reward questions instead of punishing silence.",
        },
        {
          title: "Quiz",
          emotion: "Punished",
          goal: "Show what he knows without failing in public.",
          action: "Is forced to take a quiz, asked five questions, and cannot answer.",
          opportunity: "Challenge him at his level, let him check information, and keep the quiz from feeling like punishment.",
        },
      ],
    },
    star: {
      title: "Build and connect the microgrid",
      situation:
        "Students were learning climate and renewable energy from long lectures and quizzes. People in the city wanted an interactive AR wall, and the on-site experience had to work in daylight with several tags and no helper.",
      task: "Design a ComEd AR experience for Bronzeville that teaches climate change through renewable energy.",
      action:
        "Ran Design Thinking with surveys and a student persona, then designed the mural-to-city loop: rotate into AR, place the city, hint the next microgrid part, and connect the finished grid.",
      result:
        "A mobile AR walk that turns Bronzeville into a buildable microgrid — generator, wind, solar, storage — so the climate lesson is something you construct, not a quiz you fail.",
    },
  },
  {
    id: "p-sympt",
    slug: "sympt",
    title: "Sympt",
    client: "Sympt",
    company_url: null,
    role: "UX Designer",
    summary:
      "A mobile path from symptoms to a doctor — scan possible causes, chat or video in, and get a prescription without the hospital wait.",
    categories: ["healthtech"],
    platforms: ["Mobile"],
    cover_url: "/work/sympt.jpg",
    sort: 4,
    published: true,
    brief:
      "Designed Sympt, a mobile product that generates a prescription from the user's current symptoms and puts them in a direct chat with medical help. Built the research, journeys, hi-fi flows, and a design system so the company could keep one look across the product.",
    problem:
      "Finding medical help fast is hard. It costs time and money, so people self-medicate — which can create new problems in the mid and long term.",
    goals: [
      "Give users a quick scan of a possible disease",
      "Connect them with high-quality doctors online",
      "Make instant help and prescription generation easy",
    ],
    methodologies: [
      "Design Thinking",
      "Desktop research",
      "Direct interviews",
      "User testing",
      "Surveys",
      "User personas",
      "User journeys",
    ],
    technologies: [
      "Figma",
      "Affinity Designer",
      "Trello",
      "Jira",
      "Lottie",
    ],
    leadership:
      "Created a design system for the company so the product could stay visually consistent as screens were added.",
    impact_metrics: [],
    process: symptDesignThinkingProcess,
    insight: {
      title: "How people get a prescription",
      lead: "Survey findings that framed the problem. 44% search their symptoms online and tend to self-medicate. 66% spend hours driving to the hospital and waiting. 80% said finding a high-quality doctor is hard.",
      insight:
        "Nine in ten people still go to the hospital to get a prescription signed. The rest fully self-medicate.",
      compare: {
        left: { value: "90%", label: "Go to the hospital" },
        right: { value: "10%", label: "Fully self-medicate" },
      },
      slices: [
        {
          label: "Go to the hospital",
          value: 90,
          tone: "link",
          emphasis: true,
        },
        { label: "Fully self-medicate", value: 10, tone: "warning" },
      ],
    },
    decisions: [
      {
        title: "Open with four jobs, not a blank form",
        why: "Home lets people read symptoms, reorder last drugs, order a new prescription with a code, or book a specialist. The first tap matches the job they came to do.",
      },
      {
        title: "Ask for honest symptoms before any cause",
        why: "The selector reminds people to be honest or the result will be less accurate. A short list — stomach ache, fever, headache — is faster than a free-text dump.",
      },
      {
        title: "Show possible causes as a starting point, not a verdict",
        why: "The causes screen says this is only a diagnosis based on the data they selected. Contact a specialist sits next to the result so they do not treat the scan as the last word.",
      },
      {
        title: "Hand the doctor the symptoms, then chat or video",
        why: "The inbox and video call start after the scan. The doctor already has what the user added, so the visit is not another intake.",
      },
    ],
    journey: {
      title: "Assist their children with medicine",
      lead: "Martha — a 41-year-old single lawyer and mother of two — trying to get medicine for a sick child without losing a workday.",
      steps: [
        {
          title: "Search the danger of the symptoms",
          emotion: "Frustrated",
          goal: "Understand what might be happening to her child.",
          action: "Googles the symptoms, writes a few words, and reads search results.",
          opportunity: "Guide her with high-quality data instead of an open web dump.",
        },
        {
          title: "Generate a disease evaluation",
          emotion: "Scared",
          goal: "Name what could be wrong.",
          action: "Puts together what she remembers and guesses at possibilities.",
          opportunity: "Reliable data instead of an amateur self-diagnosis.",
        },
        {
          title: "Book a doctor appointment",
          emotion: "Worried",
          goal: "Get a slot before the child gets worse.",
          action: "Calls to book, then waits on availability.",
          opportunity: "Book without a phone call when a slot is open.",
        },
        {
          title: "Visit the doctor",
          emotion: "Tired",
          goal: "Get the child in front of a clinician.",
          action: "Waits for a taxi, pays the fare, travels, and checks in.",
          opportunity: "A video call with a reliable doctor removes the trip.",
        },
        {
          title: "Doctor evaluation",
          emotion: "Relieved",
          goal: "Have someone qualified look at the child.",
          action: "The doctor reviews the child's symptoms in the room.",
          opportunity: "Send the symptom list before the visit so the exam can start sooner.",
        },
        {
          title: "Generate a prescription",
          emotion: "Anxious",
          goal: "Leave with a valid prescription.",
          action: "Shares personal information while the doctor types the script.",
          opportunity: "A digital prescription she can receive and validate without another wait.",
        },
        {
          title: "Payment",
          emotion: "Frustrated",
          goal: "Pay and get out.",
          action: "Goes to the desk and waits in line.",
          opportunity: "Digital payment so she does not queue after the visit.",
        },
        {
          title: "Buy drugs for her child",
          emotion: "Stressed",
          goal: "Get the medicine today.",
          action: "Looks for a nearby pharmacy that still has the drug.",
          opportunity: "Buy everything in one shop, pay online, or have it delivered.",
        },
      ],
    },
    star: {
      title: "From symptoms to a doctor",
      situation:
        "Finding medical help fast was hard and expensive, so people self-medicated or spent hours getting to a hospital for a signed prescription.",
      task: "Help users scan a possible disease and reach a high-quality doctor online for instant help and an easier prescription.",
      action:
        "Ran Design Thinking with surveys, a parent persona, and a medicine-for-a-child journey, then designed the symptom flow, possible-causes screen, and doctor chat and video — plus a design system for the company.",
      result:
        "A mobile path that starts with symptoms and ends in a direct conversation with a doctor who already has the scan, instead of another hospital wait.",
    },
  },
  stubProject({
    id: "p-mypearlflow",
    slug: "mypearlflow",
    title: "MyPearl Flow",
    client: "MyPearl Flow",
    categories: ["healthtech", "ai"],
    cover_url: null,
    sort: 5,
    summary: "Health-tech and AI-assisted product UX for MyPearl Flow.",
  }),
  stubProject({
    id: "p-healthbit",
    slug: "healthbit",
    title: "Health Bit",
    client: "Health Bit",
    categories: ["healthtech", "ai"],
    cover_url: null,
    sort: 6,
    summary: "Health-tech product UX with AI-assisted workflows for Health Bit.",
  }),
  {
    id: "p-wargo",
    slug: "wargo",
    title: "One membership, hundreds of gyms",
    client: "Wargo",
    company_url: null,
    role: "UX Designer",
    summary:
      "A monthly membership that opens hundreds of gyms across Latin America — nearby search, one payment, and a meal wiki for the road.",
    categories: ["healthtech"],
    platforms: ["Mobile", "Web"],
    cover_url: "/work/wargo.jpg",
    sort: 7,
    published: true,
    brief:
      "Designed Wargo, a monthly membership app that gives people unlimited access to hundreds of gyms in Latin America. Research produced a traveler persona and a find-a-gym journey; the MVP covered nearby search, memberships, gym profiles, healthy meals, and a web search.",
    problem:
      "Gym members hate traveling and waiting to get home before they can train again. They lose the money on a membership they cannot use — and they gain weight.",
    goals: [
      "Let gym users keep training when they travel, with only one membership",
      "Help gym owners grow customer acquisition",
    ],
    methodologies: [
      "Design Thinking",
      "Desktop research",
      "Direct interviews",
      "User testing",
      "Surveys",
      "User personas",
      "User journeys",
    ],
    technologies: ["Figma", "Affinity Designer", "Trello", "Jira", "Lottie"],
    leadership: null,
    impact_metrics: [],
    process: wargoDesignThinkingProcess,
    insight: {
      title: "Why people stop training on the road",
      lead: "70% of gym users said they cannot train during travel because they lack information about gyms in the area. 84% said it would be great to pay in one app to access many gyms. 94% still hunt for diets on the internet or through friends and family. 45% want to keep track of gym visits.",
      insight:
        "Most people do not manage to train while they travel. The 30% who do are the exception.",
      compare: {
        left: { value: "70%", label: "Cannot train while traveling" },
        right: { value: "30%", label: "Still train on the road" },
      },
      slices: [
        {
          label: "Cannot train while traveling",
          value: 70,
          tone: "warning",
          emphasis: true,
        },
        { label: "Still train on the road", value: 30, tone: "link" },
      ],
    },
    decisions: [
      {
        title: "Show nearby gyms with photos, amenities, and a rating",
        why: "Catalina starts in Google and cannot tell which gym is any good. Distance, showers, lockers, and a star rating sit on the same card so the first visit is a choice.",
      },
      {
        title: "One in-app membership instead of a daily cash drop-in",
        why: "84% said they would pay once to access many gyms. Basic, Premium, and Plus replace the high day-pass and the cash-only surprise at the door.",
      },
      {
        title: "Open the gym before she walks in",
        why: "The journey stalled on photos, reviews, showers, and a floor map. The profile has reviews, featured services, hours, and a booking — so she knows about showers before she pays.",
      },
      {
        title: "Put healthy meals in the same app",
        why: "94% still search diets on the internet or ask friends. A meal wiki sits next to featured gyms so eating well is not a second hunt.",
      },
      {
        title: "Let people search the network on the web",
        why: "Travel planning starts at a desk. Format, location, distance, showers, and parking filter the same gym list that the phone shows.",
      },
    ],
    journey: {
      title: "Find a gym to train",
      lead: "Catalina — a 27-year-old product manager who travels often, trains most days, and still ends up searching Google for a gym she can trust.",
      steps: [
        {
          title: "Look for nearby gyms",
          emotion: "Worried",
          goal: "Find a gym that is actually good.",
          action: "Searches Google and scans whatever is nearby.",
          opportunity: "Show photos of the floor and reviews on the same card.",
        },
        {
          title: "Visit the gym",
          emotion: "Stuck",
          goal: "Pay a fair day rate without a cash surprise.",
          action:
            "Pays a high daily membership, then is asked for cash she does not have.",
          opportunity: "Show the day price and the payment methods before she goes.",
        },
        {
          title: "Train",
          emotion: "Lost",
          goal: "Find the machines and start a routine.",
          action: "Walks the floor looking for a map and the right equipment.",
          opportunity:
            "A small map of areas and machines — and a way to write a trainer if she needs help.",
        },
        {
          title: "Take a shower",
          emotion: "Angry",
          goal: "Shower at the gym, not back at the hotel.",
          action: "Looks for showers, finds none, and has to leave.",
          opportunity: "Show whether the gym has showers — with photos — before she pays.",
        },
      ],
    },
  },
  {
    id: "p-budgee",
    slug: "budgee",
    title: "Budgee",
    client: "Budgee",
    company_url: null,
    role: "UX Designer",
    summary:
      "Financial health in one place — wallets, budgets, savings, and a clear view of what is left this month.",
    categories: ["fintech"],
    platforms: ["Mobile", "Web"],
    cover_url: "/work/budgee.jpg",
    sort: 8,
    published: true,
    brief:
      "Designed Budgee, a personal-finance product so people can keep everyday expenses on budget. Research produced two personas and a monthly-budget journey; the MVP covered account creation, a bank-synced wallet, budgets, saving goals, and a balance view — then hi-fi for mobile and web.",
    problem:
      "Keeping expenses on budget still means hunting for tools, filling spreadsheet templates by hand, tagging every line, and then staring at a dashboard that does not explain the month.",
    goals: [
      "Make account creation simple",
      "Let people create a wallet synced with their bank",
      "Create a budget and set a saving goal",
      "View balance and expenses in one place",
    ],
    methodologies: [
      "Design Thinking",
      "Desktop research",
      "Affinity diagrams",
      "User personas",
      "Customer journeys",
      "Benchmarking",
      "Flowcharts",
      "Wireframes",
      "Low-fi prototypes",
      "Usability testing",
    ],
    technologies: ["Figma", "FigJam"],
    leadership: null,
    impact_metrics: [],
    process: budgeeDesignThinkingProcess,
    decisions: [
      {
        title: "Ship the same overview on mobile and web",
        why: "People check spend on the phone and review the month at a desk. Today's balance, budget, and what is left sit on both surfaces so the story does not change with the device.",
      },
      {
        title: "Start with a wallet — cash or bank",
        why: "A blank home asks them to create a wallet first. Cash is manual. A bank wallet syncs income and expenses so they stop retyping a template.",
      },
      {
        title: "Put budget, expenses, and savings on one home",
        why: "Michelle needs to see what is left this month. Julian needs to see if the month is on plan. One row — expenses, budget, left — beats three separate apps.",
      },
      {
        title: "Show spend by category, not a raw dump",
        why: "Auto, entertainment, and groceries already have a number and what is left. The dashboard uses those categories instead of finance jargon.",
      },
    ],
    journey: {
      title: "Keep expenses on budget",
      lead: "A student setting a monthly budget with everyday tools — the path Michelle takes before Budgee, and the one Julian still fights in a spreadsheet.",
      steps: [
        {
          title: "Look for financial tools",
          emotion: "Lost",
          goal: "Find a way to plan a monthly budget.",
          action: "Searches Google, looks for how to plan a budget, and downloads spreadsheet templates.",
          opportunity: "Tell people where to start. The first screen should not feel like a blank budget.",
        },
        {
          title: "Fill a template for the monthly budget",
          emotion: "Overwhelmed",
          goal: "Get income and monthly expenses onto one sheet.",
          action: "Fills income, then every monthly expense, with almost no instruction.",
          opportunity: "Guide the main goal, and connect a bank so they do not type the month by hand.",
        },
        {
          title: "Add categories so the data is readable",
          emotion: "Tired",
          goal: "See where the money actually goes.",
          action: "Adds tags and more detail to each line so the sheet can be read later.",
          opportunity: "Two or three steps, or prefilled categories, instead of building a taxonomy from scratch.",
        },
        {
          title: "Add expenses",
          emotion: "Frustrated",
          goal: "Log what was just spent.",
          action: "Opens a drive file, finds the right place, and adds the expense plus a category.",
          opportunity: "Adding a spend should be two or three steps, not a scavenger hunt.",
        },
        {
          title: "Check the dashboard",
          emotion: "Confused",
          goal: "Understand this month's behavior.",
          action: "Opens the main tab and tries to read the finance view.",
          opportunity: "Plain language, spend by category, and progress against budgets and saving goals.",
        },
      ],
    },
    star: {
      title: "Keep the month on budget",
      situation:
        "People were keeping expenses on budget with search, spreadsheet templates, and dashboards that hid the month behind jargon.",
      task: "Design a financial-health product that makes the month readable — wallets, budgets, savings, and a clear leftover.",
      action:
        "Ran Design Thinking with two personas and a monthly-budget journey, prototyped five MVP flows, then designed hi-fi for mobile and web.",
      result:
        "A mobile and web overview where a wallet — cash or bank — feeds budgets, category spend, and what is left this month.",
    },
  },
  stubProject({
    id: "p-bankee",
    slug: "bankee",
    title: "Bankee",
    client: "Bankee",
    categories: ["fintech", "use-cases"],
    cover_url: null,
    sort: 9,
    summary: "Fintech UX and use-case design for Bankee.",
    process: doubleDiamondProcess,
  }),
  {
    id: "p-mibanco",
    slug: "mibanco",
    title: "Digital disbursements",
    client: "MiBanco (via Encora)",
    company_url: null,
    role: "Senior UX/UI Designer",
    summary:
      "A loan-desk app so MiBanco can place microloans digitally in less than a day — instead of a 2–3 day branch visit.",
    categories: ["fintech"],
    platforms: ["Mobile"],
    cover_url: "/work/mibanco.jpg",
    sort: 10,
    published: true,
    brief:
      "Designed the MiBanco app so people who need a microloan can get it digitally in less than one day. The product sits with the sales desk — simulate, validate, and confirm a disbursement without sending the client back to a branch.",
    problem:
      "During COVID, face-to-face negotiation stalled. MiBanco disbursements fell, and the loan desk could not keep placing money without a physical visit.",
    goals: [
      "Give the bank a product that places loans digitally",
      "Reach USD 3,000,000 in disbursements per month through the app",
    ],
    methodologies: [
      "Design Thinking",
      "Desktop research",
      "Direct interviews",
      "User testing",
      "Surveys",
      "User personas",
      "User journeys",
    ],
    technologies: ["Figma", "Trello", "Jira", "Lottie"],
    leadership: null,
    impact_metrics: [],
    process: mibancoDesignThinkingProcess,
    insight: {
      title: "How loans left the bank",
      lead: "1,400 people on the loans desk struggled in COVID — conversion dropped 40% in 2020. A disbursement still took two to three days.",
      insight:
        "Nine in ten disbursements were still physical. Only one in ten happened online.",
      compare: {
        left: { value: "90%", label: "Physical disbursements" },
        right: { value: "10%", label: "Online disbursements" },
      },
      slices: [
        {
          label: "Physical disbursements",
          value: 90,
          tone: "warning",
          emphasis: true,
        },
        { label: "Online disbursements", value: 10, tone: "link" },
      ],
    },
    decisions: [
      {
        title: "Put the whole desk on one home",
        why: "Pedro checks disbursements, clients in arrears, and what is still pending every day. Totals plus Simular, FIC, clients, transfer, mora, and insurance sit on one tap so the team does not bounce between tools.",
      },
      {
        title: "Show today's numbers before the next loan",
        why: "A performance view — desembolsos, mora, pending — lets a manager see if the day is on plan before they open another client.",
      },
      {
        title: "Simulate the loan from the client's file",
        why: "Amount, term, and rate come from the financial background. Calculate sits on the same record as the client, not in a separate spreadsheet.",
      },
      {
        title: "Confirm every field before the money moves",
        why: "Validate financial health, then confirm modality, product, term, rate, and installment. The last step is a check, not another branch appointment.",
      },
    ],
    journey: {
      title: "Generate a disbursement",
      lead: "Pedro — a sales manager with a 15-person desk — walking the physical loan path his team still used, and where the app can cut it.",
      steps: [
        {
          title: "Upload the customer database",
          emotion: "Impatient",
          goal: "Get today's leads onto each salesperson.",
          action: "Opens the bank site, downloads the list, and sends leads one by one.",
          opportunity: "Build the list automatically and send it with one button.",
        },
        {
          title: "Book appointments",
          emotion: "Worried",
          goal: "Get each client on the calendar.",
          action: "Sorts the list, calls every client, and parks times in a reminder app.",
          opportunity: "Set a time and address fast, with a clear estimate of the visit.",
        },
        {
          title: "Visit the client",
          emotion: "Uneasy",
          goal: "Sit down and start the loan conversation.",
          action: "Drives to the location and waits at the door.",
          opportunity: "An automatic confirmation for the agreed meeting.",
        },
        {
          title: "Validate the customer",
          emotion: "Frustrated",
          goal: "Prove the client can take the loan.",
          action: "Asks for data, uploads each field by hand, and waits for the system to approve.",
          opportunity: "Validation in two or three steps, not a long upload.",
        },
        {
          title: "Disbursement",
          emotion: "Relieved, then stuck",
          goal: "Get the money to the client.",
          action: "Books a branch visit so the client can claim the disbursement — and some never show.",
          opportunity: "Place the disbursement online once the file is validated.",
        },
      ],
    },
    star: {
      title: "Move the loan off the branch floor",
      situation:
        "COVID blocked face-to-face negotiation. Conversion on the 1,400-person loans desk dropped 40% in 2020, and nine in ten disbursements were still physical — a two-to-three-day process.",
      task: "Design a digital path so MiBanco could place microloans in less than a day, with a target of USD 3 million a month through the app.",
      action:
        "Ran Design Thinking with a sales-manager persona and a generate-disbursement journey, then designed the desk home, daily metrics, loan simulation, and confirm-before-disburse flow.",
      result:
        "A mobile loan desk where a salesperson can simulate, validate, and confirm a disbursement without sending the client back to a branch.",
    },
  },
  stubProject({
    id: "p-fortnite-preset",
    slug: "fortnite-preset",
    title: "Fortnite Preset improvement",
    client: "Fortnite — Epic Games (via Globant)",
    categories: ["gaming"],
    cover_url: null,
    sort: 11,
    summary: "UX improvement for Fortnite preset flows across platforms.",
  }),
  {
    id: "p-fortnite",
    slug: "fortnite-locker",
    title: "In-game Locker redesign",
    client: "Fortnite — Epic Games (via Globant)",
    company_url: "https://www.fortnite.com/",
    role: "Senior UX Designer",
    summary:
      "Redesigned the Fortnite Locker across console, PC, and mobile to improve returning-user engagement.",
    categories: ["gaming"],
    platforms: [
      "Desktop",
      "Nintendo Switch",
      "PlayStation",
      "Xbox",
      "Mobile",
    ],
    cover_url: "/work/fortnite-locker.jpg",
    sort: 12,
    published: true,
    brief:
      "Redesign the in-game Locker experience for Fortnite players across multiple interaction environments.",
    problem:
      "Returning players needed a clearer, more engaging Locker that increased adoption of key features without breaking multi-platform interaction patterns.",
    methodologies: [
      "User research",
      "Competitive benchmarking",
      "Customer journeys",
      "User flows",
      "Playtesting",
    ],
    technologies: ["Figma", "Unreal Engine", "UserTesting"],
    leadership: null,
    impact_metrics: [
      {
        label: "Engagement",
        value: "↑ returning users",
        note: "Improved adoption of key Locker features",
      },
      {
        label: "Platforms",
        value: "5 platforms",
        note: "Desktop, Switch, PlayStation, Xbox, Mobile",
      },
    ],
  },
  {
    id: "p-pokemon-unite",
    slug: "pokemon-unite",
    title: "A faster way into battle",
    client: "Pokémon Unite — academic case",
    company_url: null,
    role: "UX Designer",
    summary:
      "An academic UX pass on Pokémon Unite — group the Switch menu so trainers reach Unite Battle faster, and put the score next to the map.",
    categories: ["gaming", "use-cases"],
    platforms: ["Nintendo Switch"],
    cover_url: "/work/pokemon-unite-cover.jpg",
    sort: 13,
    published: true,
    brief:
      "Academic case, 2022 — a challenge to help trainers get into battle easier and faster through the UI. Pokémon Unite is a free-to-play MOBA from TiMi Studio Group, published by The Pokémon Company on Android and iOS and by Nintendo on Switch. Design Thinking, then a simpler main menu and a score on the battle screen.",
    problem:
      "The live main menu is so colorful, and so full of different buttons, that trainers cannot tell what is tappable or how to reach a section. Pokémon pick is slow. In battle they guess who is winning — and make bad calls because of it.",
    goals: [
      "Make the path to Unite Battle easier and faster",
      "Cut main-menu saturation so a section is one vertical move away",
      "Put the score on screen so players stop guessing who is winning",
    ],
    methodologies: [
      "Design Thinking",
      "Desktop research",
      "Interviews",
      "Problem analysis",
      "Affinity diagram",
      "Impact graph",
      "Benchmarking",
      "Wireframes",
      "Low-fi prototypes",
      "User testing",
      "High-fi prototypes",
    ],
    technologies: [],
    leadership: null,
    impact_metrics: [
      {
        label: "Score discoverability",
        value: "Increased",
        note: "Players can see their current score during the match.",
      },
      {
        label: "Steps to start playing",
        value: "up to −30%",
        note: "Fewer steps from the main menu into battle.",
      },
    ],
    process: pokemonUniteDesignThinkingProcess,
    insight: {
      title: "Where five trainers got stuck",
      lead: "Five players walked the live UI. The impact graph put the main menu in Must: 3 of 5 said too many buttons, and 3 of 5 said the colors made a button hard to see. On battle, 4 of 5 said Pokémon pick takes too long, 4 of 5 could not tell a button from an image, and 4 of 5 wanted touch because the Joy-Con could not reach every control. Score sat in Won't — then the same five still asked for one.",
      insight:
        "When those five compared two score layouts, four chose proposal two: map and score in one place, above the map.",
      compare: {
        left: { value: "4/5", label: "Chose score above the map" },
        right: { value: "1/5", label: "Chose the top-bar score" },
      },
      slices: [
        {
          label: "Score above the map",
          value: 80,
          tone: "link",
          emphasis: true,
        },
        { label: "Top-bar score", value: 20, tone: "mute" },
      ],
    },
    benchmark: {
      lead: "To add a score, the deck used Dota 2 and League of Legends as the reference — then tested two placements with five players.",
      criteria: ["Score always on screen", "Team / heroes in the chrome"],
      rows: [
        {
          name: "Pokémon Unite (live)",
          marks: ["none", "none"],
        },
        {
          name: "Dota 2",
          marks: ["strong", "strong"],
        },
        {
          name: "League of Legends",
          marks: ["strong", "none"],
        },
        {
          name: "Proposal 2",
          highlight: true,
          marks: ["strong", "none"],
        },
      ],
    },
    decisions: [
      {
        title: "Five groups instead of a saturated home",
        why: "3 of 5 trainers said there were too many ways off the main screen. Trainer, Friends, Rewards, Shop, and Unite Battle sit in one vertical list so a section is a category, not a hunt.",
      },
      {
        title: "One vertical Joy-Con move — and ZL for the shop",
        why: "Every menu is on that same vertical gesture so the interaction stays consistent. Currency Shop also sits top-left with a ZL shortcut, because the business still needs the money source easy to spot and quick to open.",
      },
      {
        title: "Same color and shape for anything tappable",
        why: "4 of 5 said buttons were easy to mistake for an image. Matching color and shape on interactive items makes the menu readable before it is clever.",
      },
      {
        title: "Put the score above the map",
        why: "Players were guessing who was winning. Dota 2 and League keep a score in the chrome; five players then picked proposal two — map and score grouped — 4 to 1.",
      },
    ],
    star: {
      title: "Get trainers into battle faster",
      situation:
        "An academic challenge: several issues in the live Pokémon Unite UI, and a brief to make the way to battle easier and faster. The rest was open.",
      task: "Find what actually blocks five trainers, then ship the smallest UI that gets them into a match and tells them who is winning.",
      action:
        "Ran Design Thinking — desktop research, interviews, an affinity diagram, and an impact graph. Grouped the Switch menu, kept a ZL shop shortcut, bench-marked Dota 2 and League for score, and tested two score layouts.",
      result:
        "Score discoverability went up, and steps to start playing dropped by up to 30%. Four of five players had chosen grouping the score with the map.",
    },
  },
  {
    id: "p-truckers-networks",
    slug: "truckers-networks",
    title: "Truckers Networks",
    client: "Truckers Networks",
    company_url: null,
    role: "UX Designer",
    summary:
      "Get hired fast — Class A jobs with the four facts that matter, plus a web add-on path so companies can post without a support ticket.",
    categories: ["automotive"],
    platforms: ["Mobile", "Web"],
    cover_url: "/work/truckers-networks.jpg",
    sort: 14,
    published: true,
    brief:
      "Designed Truckers Networks so drivers can find and apply for Class A work from the phone, and so companies can post a job — and pay for reach — on the web. The work covered the apply flow, activity, CDL practice, and a job add-on system.",
    problem:
      "Drivers hunted jobs in Google and then hit a long profile before they could apply. Companies needed help from support just to post. The facts that decide a job — pay, home time, equipment, experience — were buried.",
    goals: [
      "Help drivers get hired faster",
      "Make posting a job completable without a support ticket",
      "Show the core job facts so a driver can accept with confidence",
    ],
    methodologies: [
      "Design Thinking",
      "Desktop research",
      "Affinity diagrams",
      "User personas",
      "Customer journeys",
      "Benchmarking",
      "Flowcharts",
      "Wireframes",
      "Low-fi prototypes",
      "Usability testing",
    ],
    technologies: ["Figma", "Telerik"],
    leadership:
      "Led design through a C-level release when the client learned a product owner had hired Globant and a large engineering bench without telling him. Stayed in the room, documented the work, and helped put the relationship back on track.",
    impact_metrics: [
      {
        label: "Completion to post a job",
        value: "34%",
        note: "Increase in companies finishing a job post.",
      },
      {
        label: "Support tickets to post",
        value: "19%",
        note: "Decrease in tickets asking for help to post a job.",
      },
      {
        label: "Completion to accept a job",
        value: "12%",
        note: "Increase when drivers could see the core information.",
      },
      {
        label: "Delivery",
        value: "Telerik UI",
        note: "Front-end workflow that helped the team ship faster.",
      },
    ],
    process: truckersDesignThinkingProcess,
    decisions: [
      {
        title: "Lead the job with four facts",
        why: "Experience, home time, pay, and equipment decide a Class A role. Those four sit at the top so a driver can apply or discard without reading a wall of text.",
      },
      {
        title: "Keep applied and dismissed in one activity list",
        why: "Drivers apply to many posts. A single list — applied versus dismissed — replaces hunting through email to remember what they already touched.",
      },
      {
        title: "Sell reach as add-ons on the job post",
        why: "Promote, boost, or add a hire link. Companies see the extra and the preview. That is a clearer income path than a generic upgrade page.",
      },
      {
        title: "Let drivers practice CDL next to the job hunt",
        why: "The same app holds quizzes and a class dashboard. A driver who is still earning the license can practice without leaving Truckers Networks.",
      },
    ],
    journey: {
      title: "Find a job in the drivers app",
      lead: "A Class A driver looking for work on the phone — from Google to an accepted offer.",
      steps: [
        {
          title: "Look for jobs",
          emotion: "Unsure",
          goal: "Find Class A work that pays and gets him home.",
          action: "Searches Google and downloads an app.",
          opportunity: "A known channel — not another generic job board — so he knows where to start.",
        },
        {
          title: "Sign up",
          emotion: "Cautious",
          goal: "Get into the app without a long contract.",
          action: "Creates an account, email, and password, and accepts terms.",
          opportunity: "Password confirm and a short sign-up. Name and last name can wait.",
        },
        {
          title: "Complete the profile",
          emotion: "Overwhelmed",
          goal: "Become eligible to apply.",
          action: "Fills personal data, then CDL, then experience — many fields, endorsements, and restrictions.",
          opportunity: "Prioritize the few fields that unlock apply. Hide the rest until later.",
        },
        {
          title: "Search nearby jobs",
          emotion: "Unclear",
          goal: "See roles that match his license and miles.",
          action: "Sets search filters and employment types.",
          opportunity: "Explain job types so the checkboxes are not a guess.",
        },
        {
          title: "Find a job and apply",
          emotion: "Hesitant",
          goal: "Tap a post he actually wants.",
          action: "Opens a card, swipes, and applies.",
          opportunity: "One clear apply. Favorites so he can keep a shortlist.",
        },
        {
          title: "Get accepted",
          emotion: "Waiting",
          goal: "Know if the company took him.",
          action: "Checks the company app to see if he got the job.",
          opportunity: "A notification in-app or email, plus a way to message the company.",
        },
      ],
    },
    star: {
      title: "Put the release back on track",
      situation:
        "In a C-level product-release meeting the client learned his product owner had hired Globant and more than fifty developers without telling him. He was angry and said he would not pay.",
      task: "Stay calm, keep the room from breaking, and protect the work.",
      action:
        "Listened. Made clear I was lead design, not the project director. Called an urgent meeting with Globant and Truckers Network, documented the process, and showed the work.",
      result:
        "The client came back on track and the relationship between the parties was reestablished.",
    },
  },
  {
    id: "p-notiplac",
    slug: "notiplac",
    title: "All-in-one car maintenance",
    client: "Notiplac — Boken SAS",
    company_url: null,
    role: "Product Designer",
    summary:
      "A marketplace that puts car owners and repair shops in one place — reminders, a map, a booking, and a shop desk.",
    categories: ["automotive"],
    platforms: ["Mobile", "Web"],
    cover_url: "/work/notiplac.jpg",
    sort: 15,
    published: true,
    brief:
      "Led UX for Notiplac, an intelligent marketplace that connects car owners with auto-repair centers. Owners see what the car needs; shops manage bookings and send status from a web desk.",
    problem:
      "Car owners waste more than 70 hours and over $1,000 USD on maintenance, tickets, and hunting for a good shop. Repair centers sit on more than 70% churn and lose money after the warranty ends.",
    goals: [
      "Connect owners with nearby shops in one app",
      "Remind people what the car needs every six months — and when registration is due",
      "Give shops a desk to take bookings and report status",
    ],
    methodologies: [
      "Design Thinking",
      "Desktop research",
      "Surveys",
      "User testing",
      "User personas",
      "User journeys",
    ],
    technologies: [
      "Figma",
      "Adobe XD",
      "Affinity Designer",
      "After Effects",
      "Trello",
      "Jira",
    ],
    leadership:
      "Led UX from concept through measurable client outcomes — retention above the 2% target and about an hour a day back for car managers.",
    impact_metrics: [
      {
        label: "Retention",
        value: "+7.5%",
        note: "Exceeded the client’s 2% churn-reduction target for most clients.",
      },
      {
        label: "Time saved",
        value: "~1 hour / day",
        note: "Optimized workflows for car managers.",
      },
    ],
    process: notiplacDesignThinkingProcess,
    insight: {
      title: "Why shops lose the owner",
      lead: "30% of owners never return to the first shop after warranty. People in Latin America spend almost $1,000 on corrective work because they do not know the car — including the six-month service and yearly registration.",
      insight:
        "Repair centers live with more than 70% churn. Retention is the 30% who stay.",
      compare: {
        left: { value: "70%", label: "Shop churn" },
        right: { value: "30%", label: "Retention" },
      },
      slices: [
        {
          label: "Churn",
          value: 70,
          tone: "warning",
          emphasis: true,
        },
        { label: "Retention", value: 30, tone: "link" },
      ],
    },
    decisions: [
      {
        title: "Put every due date on the car, not in the owner's head",
        why: "Julian forgets SOAT, inspection, oil, tax, and insurance. One vehicle screen with dates turns “I had no idea” into a list he can tap.",
      },
      {
        title: "Find a shop on a map or a rated list",
        why: "Owners start in Google Maps and still do not trust the shop. Distance, rating, and open/closed sit on both map and list so the first visit is a choice, not a guess.",
      },
      {
        title: "Book day and hour in the app",
        why: "The old path was a phone call for “sometime tomorrow.” A calendar and a slot replace the call and send the booking to the shop desk.",
      },
      {
        title: "Give the shop a web inbox for status",
        why: "Owners wait two hours with no update. Pending, confirmed, and active — plus confirm entry — let the shop tell the owner where the car is.",
      },
    ],
    journey: {
      title: "Book a car service",
      lead: "Julian — a 28-year-old who uses the car a few days a week and always forgets maintenance — walking the path before Notiplac.",
      steps: [
        {
          title: "Look for a service center",
          emotion: "Uneasy",
          goal: "Find a shop that is actually good.",
          action: "Searches Google Maps, looks nearby, and reads reviews.",
          opportunity: "Show rating, distance, and a booking from the same card.",
        },
        {
          title: "Book an appointment",
          emotion: "Worried",
          goal: "Get a slot without guessing if the shop is honest.",
          action: "Calls and is given an appointment for the next day.",
          opportunity: "A confirmation with the details, not only a verbal time.",
        },
        {
          title: "Take the car to maintenance",
          emotion: "Untrusting",
          goal: "Leave the car and know when to come back.",
          action: "Drives over, waits for a mechanic, and is told about two hours.",
          opportunity: "Live status so he is not standing in the bay.",
        },
        {
          title: "Pick up the car",
          emotion: "Angry",
          goal: "Get the car when they said.",
          action: "Orders a taxi after two hours and is told it is still in revision.",
          opportunity: "Notify him before the deadline so he does not waste another trip.",
        },
        {
          title: "Payment",
          emotion: "Stuck",
          goal: "Pay and leave.",
          action: "Waits in line and finds cash is the only option — and he is short.",
          opportunity: "Card or other methods, and a total before he arrives.",
        },
      ],
    },
    star: {
      title: "Keep the owner after warranty",
      situation:
        "Owners were burning more than 70 hours and over $1,000 a year on maintenance, tickets, and shop-hunting. Shops saw more than 70% churn once the warranty ended.",
      task: "Design a marketplace that connects owners and repair centers in one place, and give shops a way to keep the relationship.",
      action:
        "Ran Design Thinking with surveys and a book-a-service journey, then designed car due-dates, map and list of shops, in-app booking, and a web desk for status.",
      result:
        "Retention rose at least 7.5% for most clients — above the 2% target — and car managers got about an hour a day back.",
    },
  },
  {
    id: "p-coral-todo",
    slug: "coral-todo",
    title: "Turn your to-do list into a thriving reef",
    client: "Coral Todo",
    company_url: null,
    role: "UX Designer",
    summary:
      "Finish real work, get paid in shells, and plant a reef that is still there after the list is clear — on the phone and on a wide screen.",
    categories: ["ai"],
    platforms: ["Mobile", "Desktop"],
    cover_url: "/work/coral-todo.jpg",
    sort: 16,
    published: true,
    brief:
      "Coral Todo turns a to-do list into a reef you can stand in. Close a task, earn shells, buy coral, plant it on a grid that starts at 3×3, and read the week in Reports. The five sections already in the app are the whole loop.",
    problem:
      "A list remembers the intention and rarely rewards the finish. In 21,655 one-off tasks, 36% were completed; the rest sat a median of 56 days past the day they were planned. Checking a box leaves nothing behind — and productivity apps are near 4% retained by day 30, before a habit has time to form.",
    goals: [
      "Keep the everyday tool calm, and let the reef carry the personality",
      "Let a new person plant a coral in the first session — 100 starting shells, first coral at 30",
      "Make the daily set short enough to finish on a phone: 1 high, 3 medium, 5 low",
    ],
    methodologies: ["Desktop research", "Design personas"],
    technologies: [],
    leadership: null,
    impact_metrics: [],
    insight: {
      title: "Most written tasks never close",
      lead: "Secondary research — not Coral Todo’s own analytics. Loggd’s 21,655 one-off tasks: 36% completed, median open task 56 days overdue. Productivity apps sit near 17% the day after install and about 4% by day 30 (all apps closer to 7%). Lally et al. put the average habit at about 66 days — past a free-trial window.",
      insight:
        "The checkbox is a dead end. The reef, the daily set, and repeated tasks are there to leave something standing after the list is clear.",
      compare: {
        left: { value: "36%", label: "Tasks completed" },
        right: { value: "64%", label: "Still open" },
      },
      slices: [
        { label: "Completed", value: 36, tone: "link" },
        {
          label: "Still open",
          value: 64,
          tone: "warning",
          emphasis: true,
        },
      ],
    },
    decisions: [
      {
        title: "Pay shells for closing work — more for high priority",
        why: "Finish is the event that should leave a mark. Base pay is 10 shells; the first high of the day is 15. After the daily cap, a completion tapers to 1, then 0 — so the game does not reward an endless list.",
      },
      {
        title: "Start with 100 shells and a 30-shell coral",
        why: "A new person can plant before they have ground through a week of tasks. Category retention falls to about 4% by day 30; the reef has to change in the first session.",
      },
      {
        title: "A daily set of 1 high, 3 medium, and 5 low",
        why: "Clearing that set adds a 10-shell bonus. It is a finish line that fits on a phone, between other things.",
      },
      {
        title: "The reef is the souvenir — the checkbox is not",
        why: "When the list is clear, the garden is still there. Inventory goes onto an isometric grid that starts at 3×3 and grows to 15×15.",
      },
      {
        title: "The same loop on a phone and a wide screen",
        why: "Tasks, shop, reef, and reports are first-class on both. Desktop lets you drag from inventory onto the grid; the phone recalculates layout from screen size and orientation.",
      },
    ],
    journey: {
      title: "From an empty reef to a reason to come back",
      lead: "Leah — the daily closer on a phone and a free plan — walking the path already in the app. Design persona, not an interview transcript.",
      steps: [
        {
          title: "Arrive",
          emotion: "Ready",
          goal: "See a reef she can grow.",
          action: "Signs in to an empty 3×3 grid and 100 shells — enough for a first coral.",
          opportunity: "The first plant happens before any task is done.",
        },
        {
          title: "Capture",
          emotion: "Focused",
          goal: "Get today’s work out of her head.",
          action: "Adds a task with priority and tags — and can repeat it daily, on weekdays, monthly, or yearly.",
          opportunity: "Keep the add-task path short enough for a pocket.",
        },
        {
          title: "Finish",
          emotion: "Relieved",
          goal: "Close the task and feel it count.",
          action: "Checks it off. Shells and experience land immediately. Higher priority pays more.",
          opportunity: "Show the pay the moment the box is checked.",
        },
        {
          title: "Clear the set",
          emotion: "Proud",
          goal: "Hit the day’s finish line.",
          action: "1 high, 3 medium, and 5 low adds a 10-shell bonus on top of the individual rewards.",
          opportunity: "A visible 1 / 3 / 5 target on the home list.",
        },
        {
          title: "Buy",
          emotion: "Curious",
          goal: "Pick a coral worth the shells.",
          action: "Opens the shop. Brown Kenya Tree is 30 shells; Rainbow Bubble Tip is 150. The piece goes to inventory.",
          opportunity: "A badge when she can afford a piece, or when inventory is waiting.",
        },
        {
          title: "Plant",
          emotion: "Satisfied",
          goal: "Put the coral on the grid.",
          action: "Places it on the isometric reef. A larger grid costs 100 shells, then 1.5× each time.",
          opportunity: "Drag on desktop; tap-to-place on the phone.",
        },
        {
          title: "Reflect",
          emotion: "Clear",
          goal: "See whether the week matched the plan.",
          action: "Reports show completions by priority, minutes by tag, streaks, and corals over 7, 15, or 30 days.",
          opportunity: "Tasks, minutes, and coral in one place — no leaving the app.",
        },
        {
          title: "Return",
          emotion: "Anchored",
          goal: "Have a reason to open it tomorrow.",
          action: "Tomorrow’s repeats are waiting, the reef is still there, and the next coral has a price.",
          opportunity: "The garden outlives the empty list.",
        },
      ],
    },
  },
  {
    id: "p-160",
    slug: "160-drivers-academy",
    title: "Driver & instructor apps",
    client: "160 Drivers Academy (via Globant)",
    company_url: null,
    role: "Senior UX Designer",
    summary:
      "Led research, design system, and usability testing for automotive learning apps.",
    categories: ["automotive"],
    platforms: ["Desktop", "Mobile"],
    cover_url: null,
    sort: 99,
    published: false,
    brief:
      "Design driver and instructor experiences for an automotive academy product suite.",
    problem:
      "Drivers and instructors needed clearer flows and a consistent system to complete training tasks with less friction.",
    methodologies: [
      "User research",
      "Personas",
      "Customer journeys",
      "User flows",
      "Usability testing (Maze)",
      "Agile",
    ],
    technologies: ["Figma", "Maze"],
    leadership:
      "Led the design team in an Agile environment and partnered with the Project Manager on product planning.",
    impact_metrics: [
      {
        label: "System",
        value: "Design system shipped",
        note: "Built the product’s design system in Figma",
      },
      {
        label: "Validation",
        value: "Maze usability tests",
        note: "Improved driver and instructor app usability",
      },
    ],
  },
];

export const projectArtifacts: ProjectArtifact[] = [
  {
    id: "a-yourway-web",
    project_id: "p-yourway",
    type: "hi_fi",
    title: "AI tool bank and category system",
    body: "Clearer information architecture, hierarchy, and filters so teachers can find tools by subject and job to be done.",
    image_url: "/work/yourway/web-tool-bank.jpg",
    group: "Web",
    sort: 1,
  },
  {
    id: "a-yourway-class",
    project_id: "p-yourway",
    type: "hi_fi",
    title: "Overall performance",
    body: "Class completion, checkpoint trends, and AI-generated group insights so teachers can see who is moving and who needs help.",
    image_url: "/work/yourway/app-classroom-data.jpg",
    group: "Teacher web app",
    sort: 2,
  },
  {
    id: "a-yourway-dash",
    project_id: "p-yourway",
    type: "hi_fi",
    title: "Student performance list",
    body: "Per-student status, checkpoints, alerts, and duration so teachers can scan the class and open the right student.",
    image_url: "/work/yourway/app-student-dashboard.jpg",
    group: "Teacher web app",
    sort: 3,
  },
  {
    id: "a-yourway-live",
    project_id: "p-yourway",
    type: "hi_fi",
    title: "Live dashboard and activity control",
    body: "Live progress, online status, and a toolbar to time, pause, or finish the activity from the classroom.",
    image_url: "/work/yourway/app-live-control.jpg",
    group: "Teacher web app",
    sort: 4,
  },
  {
    id: "a-yourway-student",
    project_id: "p-yourway",
    type: "hi_fi",
    title: "Interaction diversity, gamification, and avatars",
    body: "Interactions beyond chat, Octalysis-informed game loops, and avatar selection that support the activity narrative without weakening pedagogy.",
    image_url: "/work/yourway/student-activity.jpg",
    group: "Student responsive web app",
    sort: 5,
  },
  {
    id: "a-everglades-puma",
    project_id: "p-everglades",
    type: "hi_fi",
    title: "Species encounter — Puma",
    body: "A 3D puma in the park camera view, with a fact overlay and yellow icons for diet, habitat, and health. Feed, Dance, and Discover sit on the bottom bar.",
    image_url: "/work/everglades/safari-ar.jpg",
    group: "iOS AR",
    sort: 1,
  },
  {
    id: "a-comed-cover",
    project_id: "p-comed",
    type: "hi_fi",
    title: "Bronzeville microgrid cover",
    body: "Cover — place the city on the grass, pick microgrid parts, and connect the finished grid.",
    image_url: "/work/comed.jpg",
    group: "iOS AR",
    sort: 0,
  },
  {
    id: "a-comed-city",
    project_id: "p-comed",
    type: "hi_fi",
    title: "Mural splash and city on the ground",
    body: "Bronzeville Renaissance Mural opens the walk. The camera then places a city on the ground so building can start.",
    image_url: "/work/comed/city-build.jpg",
    group: "iOS AR",
    sort: 1,
  },
  {
    id: "a-comed-hints",
    project_id: "p-comed",
    type: "hi_fi",
    title: "AR start and hint system",
    body: "Rotate or tap to activate the camera. Hints name the next part — a generator for baseload, then renewables — and a web marker if they are not at the mural.",
    image_url: "/work/comed/instructions-hints.jpg",
    group: "iOS AR",
    sort: 2,
  },
  {
    id: "a-comed-connect",
    project_id: "p-comed",
    type: "hi_fi",
    title: "Connect the finished city",
    body: "After the microgrid is built, Connect city closes the loop so the grid has to work together.",
    image_url: "/work/comed/connect-city.jpg",
    group: "iOS AR",
    sort: 3,
  },
  {
    id: "a-sympt-cover",
    project_id: "p-sympt",
    type: "hi_fi",
    title: "Splash and video visit",
    body: "Cover — the Sympt splash next to a live video visit with the doctor.",
    image_url: "/work/sympt.jpg",
    group: "Mobile",
    sort: 0,
  },
  {
    id: "a-sympt-home",
    project_id: "p-sympt",
    type: "hi_fi",
    title: "Home and symptom selector",
    body: "Four jobs on home — read symptoms, reorder last drugs, order a prescription with a code, or book a specialist — then a short symptom list.",
    image_url: "/work/sympt/home-symptoms.jpg",
    group: "Mobile",
    sort: 1,
  },
  {
    id: "a-sympt-causes",
    project_id: "p-sympt",
    type: "hi_fi",
    title: "History and possible causes",
    body: "Prior interventions, then possible causes framed as a scan from the data they selected, with a path to contact a specialist.",
    image_url: "/work/sympt/history-causes.jpg",
    group: "Mobile",
    sort: 2,
  },
  {
    id: "a-sympt-chat",
    project_id: "p-sympt",
    type: "hi_fi",
    title: "Doctor chat and video",
    body: "Inbox, direct chat, and video with a doctor who already has the symptoms added in the app.",
    image_url: "/work/sympt/chat-video.jpg",
    group: "Mobile",
    sort: 3,
  },
  {
    id: "a-budgee-cover",
    project_id: "p-budgee",
    type: "hi_fi",
    title: "Financial health cover",
    body: "Cover — mobile home next to the web overview: balance, budget, wallets, and latest spend.",
    image_url: "/work/budgee.jpg",
    sort: 0,
  },
  {
    id: "a-budgee-mobile",
    project_id: "p-budgee",
    type: "hi_fi",
    title: "Mobile home and wallets",
    body: "Today's balance, expenses versus budget, category left-to-spend, and a first-run to create a cash or bank wallet.",
    image_url: "/work/budgee/app-mobile.jpg",
    group: "Mobile",
    sort: 1,
  },
  {
    id: "a-budgee-web",
    project_id: "p-budgee",
    type: "hi_fi",
    title: "Web overview",
    body: "Six-month income versus expenses, category spend, connected wallets, and latest transactions on one desktop canvas.",
    image_url: "/work/budgee/app-web.jpg",
    group: "Web",
    sort: 2,
  },
  {
    id: "a-tn-cover",
    project_id: "p-truckers-networks",
    type: "hi_fi",
    title: "Get hired fast",
    body: "Cover — a Class A job with experience, home time, pay, and equipment before Apply.",
    image_url: "/work/truckers-networks.jpg",
    group: "Mobile",
    sort: 0,
  },
  {
    id: "a-tn-job",
    project_id: "p-truckers-networks",
    type: "hi_fi",
    title: "Job detail and activity",
    body: "Four facts on the job card, then applied versus dismissed in one list.",
    image_url: "/work/truckers-networks/job-apply.jpg",
    group: "Mobile",
    sort: 1,
  },
  {
    id: "a-tn-cdl",
    project_id: "p-truckers-networks",
    type: "hi_fi",
    title: "CDL practice",
    body: "Class dashboard, quizzes, and a scored question so a driver can practice without leaving the app.",
    image_url: "/work/truckers-networks/cdl-practice.jpg",
    group: "Mobile",
    sort: 2,
  },
  {
    id: "a-tn-addons",
    project_id: "p-truckers-networks",
    type: "hi_fi",
    title: "Job add-ons",
    body: "Promote, boost, or add a hire link — extras that grow reach and company income.",
    image_url: "/work/truckers-networks/job-addons.jpg",
    group: "Web",
    sort: 3,
  },
  {
    id: "a1",
    project_id: "p-fortnite",
    type: "ux_artifact",
    title: "Competitive benchmarking & journeys",
    body: "Mapped competitive Locker patterns and customer journeys to ground the redesign in player behavior.",
    image_url: null,
    sort: 1,
  },
  {
    id: "a2",
    project_id: "p-fortnite",
    type: "user_flow",
    title: "Multi-platform Locker flows",
    body: "User flows covering Desktop, Switch, PlayStation, Xbox, and Mobile interaction environments.",
    image_url: null,
    sort: 2,
  },
  {
    id: "a-mibanco-cover",
    project_id: "p-mibanco",
    type: "hi_fi",
    title: "Loan-desk home",
    body: "Cover — desembolsos, clients in arrears, and pending, plus Simular, FIC, clients, transfer, mora, and insurance.",
    image_url: "/work/mibanco.jpg",
    group: "Mobile",
    sort: 0,
  },
  {
    id: "a-mibanco-home",
    project_id: "p-mibanco",
    type: "hi_fi",
    title: "Main dashboard",
    body: "The tools to place a disbursement sit on one home so the desk does not bounce between systems.",
    image_url: "/work/mibanco/home-dashboard.jpg",
    group: "Mobile",
    sort: 1,
  },
  {
    id: "a-mibanco-perf",
    project_id: "p-mibanco",
    type: "hi_fi",
    title: "Daily performance",
    body: "Today's desembolsos, mora, and pending so a manager can see if the day is on plan.",
    image_url: "/work/mibanco/performance.jpg",
    group: "Mobile",
    sort: 2,
  },
  {
    id: "a-mibanco-loan",
    project_id: "p-mibanco",
    type: "hi_fi",
    title: "Simulate and confirm",
    body: "Estimate the loan from the client's file, then confirm every field before the money moves.",
    image_url: "/work/mibanco/disbursement.jpg",
    group: "Mobile",
    sort: 3,
  },
  {
    id: "a5",
    project_id: "p-160",
    type: "ux_artifact",
    title: "Personas & journeys",
    body: "Driver and instructor personas guiding product decisions across the academy apps.",
    image_url: null,
    sort: 1,
  },
  {
    id: "a-notiplac-cover",
    project_id: "p-notiplac",
    type: "hi_fi",
    title: "Home and shop map",
    body: "Cover — pending tasks on the owner home next to nearby shops on the map.",
    image_url: "/work/notiplac.jpg",
    group: "Mobile",
    sort: 0,
  },
  {
    id: "a-notiplac-car",
    project_id: "p-notiplac",
    type: "hi_fi",
    title: "Car file and owner home",
    body: "SOAT, inspection, oil, tax, and insurance on the vehicle — plus emergencies, pendings, and promos on home.",
    image_url: "/work/notiplac/car-home.jpg",
    group: "Mobile",
    sort: 1,
  },
  {
    id: "a-notiplac-map",
    project_id: "p-notiplac",
    type: "hi_fi",
    title: "Find a shop",
    body: "Map or rated list — distance, reviews, and open/closed — so the first visit is a choice.",
    image_url: "/work/notiplac/shops-map.jpg",
    group: "Mobile",
    sort: 2,
  },
  {
    id: "a-notiplac-book",
    project_id: "p-notiplac",
    type: "hi_fi",
    title: "Book a service",
    body: "Shop profile, services, hours, then pick a day and a slot instead of calling.",
    image_url: "/work/notiplac/book-service.jpg",
    group: "Mobile",
    sort: 3,
  },
  {
    id: "a-notiplac-web",
    project_id: "p-notiplac",
    type: "hi_fi",
    title: "Shop desk",
    body: "Pending, confirmed, and active bookings — plus confirm entry so the owner gets a status.",
    image_url: "/work/notiplac/shop-web.jpg",
    group: "Web",
    sort: 4,
  },
  {
    id: "a-wargo-cover",
    project_id: "p-wargo",
    type: "hi_fi",
    title: "Onboarding and nearby gyms",
    body: "Cover — find gyms nearby on the left, a rated list with distance and amenities on the right.",
    image_url: "/work/wargo.jpg",
    group: "Mobile",
    sort: 0,
  },
  {
    id: "a-wargo-home",
    project_id: "p-wargo",
    type: "hi_fi",
    title: "Home",
    body: "Upcoming workouts, featured gyms, and fitness meals — so she can book, pick a gym, and eat well from one screen.",
    image_url: "/work/wargo/home.jpg",
    group: "Mobile",
    sort: 1,
  },
  {
    id: "a-wargo-plans",
    project_id: "p-wargo",
    type: "hi_fi",
    title: "Memberships and discover",
    body: "Basic, Premium, or Plus — pay once, cancel any time — then search nearby gyms with distance, showers, lockers, and a rating.",
    image_url: "/work/wargo/memberships.jpg",
    group: "Mobile",
    sort: 2,
  },
  {
    id: "a-wargo-meals",
    project_id: "p-wargo",
    type: "hi_fi",
    title: "Meals and gym profile",
    body: "A healthy-meals wiki next to the gym file — reviews, services, hours, and a booking instead of walking in blind.",
    image_url: "/work/wargo/meals-gym.jpg",
    group: "Mobile",
    sort: 3,
  },
  {
    id: "a-wargo-web",
    project_id: "p-wargo",
    type: "hi_fi",
    title: "Search gyms on the web",
    body: "Filter by format, location, distance, showers, and parking before the trip — then open the same network on the phone.",
    image_url: "/work/wargo/web-search.jpg",
    group: "Web",
    sort: 4,
  },
  {
    id: "a-pokemon-cover",
    project_id: "p-pokemon-unite",
    type: "hi_fi",
    title: "Grouped menu on Switch",
    body: "Cover — Trainer, Friends, Rewards, Shop, and Unite Battle on one vertical list, with the shop still a tap away in the corner.",
    image_url: "/work/pokemon-unite-cover.jpg",
    group: "Nintendo Switch",
    sort: 0,
  },
  {
    id: "a-pokemon-menu",
    project_id: "p-pokemon-unite",
    type: "hi_fi",
    title: "Main menu — fewer steps into battle",
    body: "Same color and shape on every tappable item, one vertical list, and shortcuts for Profile and Currency Shop — so Unite Battle is fewer moves away.",
    image_url: "/work/pokemon-unite/main-menu.jpg",
    group: "Nintendo Switch",
    sort: 1,
  },
  {
    id: "a-pokemon-score",
    project_id: "p-pokemon-unite",
    type: "hi_fi",
    title: "Score during the match",
    body: "The current score sits above the map so players are not guessing who is winning — a simple status instead of a limbo.",
    image_url: "/work/pokemon-unite/score.jpg",
    group: "Nintendo Switch",
    sort: 2,
  },
  {
    id: "a-coral-flow",
    project_id: "p-coral-todo",
    type: "user_flow",
    title: "Close a task, grow the reef",
    body: "Check off today’s work, take the shells, buy a coral, and plant it. Clearing 1 high, 3 medium, and 5 low adds a 10-shell bonus. The grid starts at 3×3 and grows to 15×15.",
    image_url: "/work/coral-todo/task-reef-flow.svg",
    sort: 0,
  },
  {
    id: "a-coral-cover",
    project_id: "p-coral-todo",
    type: "hi_fi",
    title: "Every task grows something real",
    body: "Cover — the planted grid next to the line the product designs to: finish today’s work, and let that finish show up on the reef.",
    image_url: "/work/coral-todo.jpg",
    group: "Desktop",
    sort: 0,
  },
  {
    id: "a-coral-d-tasks",
    project_id: "p-coral-todo",
    type: "hi_fi",
    title: "Today’s tasks",
    body: "Priority and tags on each line, plus the 1 / 3 / 5 daily set under completed — the finish line that pays the bonus.",
    image_url: "/work/coral-todo/desktop-tasks.jpg",
    group: "Desktop",
    sort: 1,
  },
  {
    id: "a-coral-d-repeats",
    project_id: "p-coral-todo",
    type: "hi_fi",
    title: "Repeated tasks",
    body: "Weekdays, every day, or a custom schedule — tomorrow’s list is already waiting.",
    image_url: "/work/coral-todo/desktop-repeats.jpg",
    group: "Desktop",
    sort: 2,
  },
  {
    id: "a-coral-d-shop",
    project_id: "p-coral-todo",
    type: "hi_fi",
    title: "Coral shop",
    body: "Twenty-three types, 30 to 150 shells, and a tile to grow the grid. Buying puts the piece in inventory.",
    image_url: "/work/coral-todo/desktop-shop.jpg",
    group: "Desktop",
    sort: 3,
  },
  {
    id: "a-coral-d-reef",
    project_id: "p-coral-todo",
    type: "hi_fi",
    title: "My Reef",
    body: "Drag from inventory onto the isometric grid. Spaces left and the next expansion stay in view.",
    image_url: "/work/coral-todo/desktop-reef.jpg",
    group: "Desktop",
    sort: 4,
  },
  {
    id: "a-coral-m-tasks",
    project_id: "p-coral-todo",
    type: "hi_fi",
    title: "Today’s tasks",
    body: "The same list and daily-set dots, sized for a pocket — with a control to add the next task.",
    image_url: "/work/coral-todo/mobile-tasks.jpg",
    group: "Mobile",
    device: "iphone-16",
    sort: 5,
  },
  {
    id: "a-coral-m-shop",
    project_id: "p-coral-todo",
    type: "hi_fi",
    title: "Coral shop",
    body: "Same prices and expand-grid tile. A badge shows when she can afford a piece, or when inventory is waiting.",
    image_url: "/work/coral-todo/mobile-shop.jpg",
    group: "Mobile",
    device: "iphone-16",
    sort: 6,
  },
  {
    id: "a-coral-m-reports",
    project_id: "p-coral-todo",
    type: "hi_fi",
    title: "Reports",
    body: "Completions and minutes over 7, 15, or 30 days — the week without leaving the app.",
    image_url: "/work/coral-todo/mobile-reports.jpg",
    group: "Mobile",
    device: "iphone-16",
    sort: 7,
  },
];

export const experiences: Experience[] = [
  {
    id: "e1",
    company: "Yourway Learning",
    role: "Senior UX Designer & Product Manager",
    dates: "Aug 2024 – Present",
    location: "United States (remote)",
    bullets: [
      "Directed product strategy and roadmap planning across cross-functional teams.",
      "Owned user research, wireframing, and prototyping for validated product decisions.",
      "Authored PRDs and user stories for clear engineering handoff.",
      "Integrated agentic AI (Claude) into the design process to accelerate ideation and workflows.",
    ],
    sort: 1,
  },
  {
    id: "e2",
    company: "Globant",
    role: "Senior UX Designer",
    dates: "2022 – 2025",
    location: "Colombia",
    bullets: [
      "Fortnite (Epic Games): redesigned the in-game Locker; prototyped in Figma and Unreal; playtested with UserTesting.",
      "160 Drivers Academy: led research, design system, Maze usability tests, and design-team leadership in Agile.",
    ],
    sort: 2,
  },
  {
    id: "e3",
    company: "Encora",
    role: "Senior UX/UI Designer",
    dates: "2021 – 2022",
    location: "Colombia",
    bullets: [
      "MiBanco: research, journeys, personas, low-fi prototypes, and the company’s first design system + DesignOps.",
      "Also delivered research and testing across eDoula, Amazon, and eWallet projects.",
    ],
    sort: 3,
  },
  {
    id: "e4",
    company: "Boken SAS",
    role: "Product Designer",
    dates: "2014 – 2021",
    location: "Colombia",
    bullets: [
      "Led UX for Notiplac — automotive loyalty and operations product for after-sales service.",
      "Drove retention above the client’s 2% target (+7.5%) and saved managers up to an hour per day.",
    ],
    sort: 4,
  },
];

export const skills: Skill[] = [
  // UX Research branch
  {
    id: "s-ux",
    name: "UX Research",
    branch: "UX Research",
    level: 1,
    description: "Root of discovery — framing questions and learning from users.",
    related_project_slugs: ["fortnite-locker", "truckers-networks", "mibanco"],
    x: 18,
    y: 22,
  },
  {
    id: "s-testing",
    name: "User Testing",
    branch: "UX Research",
    level: 2,
    description: "Playtests, Maze, and UserTesting to validate decisions early.",
    related_project_slugs: ["fortnite-locker", "truckers-networks"],
    x: 12,
    y: 42,
  },
  {
    id: "s-personas",
    name: "Personas",
    branch: "UX Research",
    level: 2,
    description: "Synthesizing research into actionable user models.",
    related_project_slugs: ["truckers-networks", "mibanco"],
    x: 24,
    y: 42,
  },
  {
    id: "s-journeys",
    name: "Journeys",
    branch: "UX Research",
    level: 3,
    description: "End-to-end customer journeys that expose friction and opportunity.",
    related_project_slugs: ["fortnite-locker", "mibanco", "notiplac"],
    x: 18,
    y: 62,
  },
  // Product branch
  {
    id: "s-product",
    name: "Product Strategy",
    branch: "Product",
    level: 1,
    description: "Aligning design, engineering, and business around outcomes.",
    related_project_slugs: ["yourway"],
    x: 50,
    y: 18,
  },
  {
    id: "s-roadmap",
    name: "Roadmapping",
    branch: "Product",
    level: 2,
    description: "Sequencing opportunities into a clear product path.",
    related_project_slugs: ["yourway"],
    x: 42,
    y: 38,
  },
  {
    id: "s-prds",
    name: "PRDs & Stories",
    branch: "Product",
    level: 2,
    description: "Engineering-ready requirements and user stories.",
    related_project_slugs: ["yourway"],
    x: 58,
    y: 38,
  },
  {
    id: "s-agile",
    name: "Agile / Scrum",
    branch: "Product",
    level: 3,
    description: "Shipping iteratively with cross-functional teams.",
    related_project_slugs: ["yourway", "truckers-networks", "mibanco"],
    x: 50,
    y: 58,
  },
  // Design Craft
  {
    id: "s-figma",
    name: "Figma",
    branch: "Design Craft",
    level: 1,
    description: "Primary craft tool for systems, flows, and prototypes.",
    related_project_slugs: [
      "fortnite-locker",
      "truckers-networks",
      "mibanco",
      "yourway",
    ],
    x: 78,
    y: 20,
  },
  {
    id: "s-proto",
    name: "Prototyping",
    branch: "Design Craft",
    level: 2,
    description: "Low-fi to hi-fi prototypes that make ideas testable.",
    related_project_slugs: ["fortnite-locker", "mibanco"],
    x: 72,
    y: 40,
  },
  {
    id: "s-systems",
    name: "Design Systems",
    branch: "Design Craft",
    level: 2,
    description: "Reusable foundations — components, tokens, DesignOps.",
    related_project_slugs: ["truckers-networks", "mibanco"],
    x: 84,
    y: 40,
  },
  {
    id: "s-wire",
    name: "Wireframing",
    branch: "Design Craft",
    level: 3,
    description: "Structure before polish — clarifying information and flows.",
    related_project_slugs: ["yourway", "mibanco"],
    x: 78,
    y: 60,
  },
  // AI & Eng
  {
    id: "s-ai",
    name: "Agentic AI Design",
    branch: "AI & Eng",
    level: 1,
    description: "Using Claude and Cursor to accelerate ideation and workflows.",
    related_project_slugs: ["yourway"],
    x: 30,
    y: 78,
  },
  {
    id: "s-cursor",
    name: "Cursor / Claude",
    branch: "AI & Eng",
    level: 2,
    description: "AI-assisted product and design production loops.",
    related_project_slugs: ["yourway"],
    x: 22,
    y: 92,
  },
  {
    id: "s-handoff",
    name: "Eng Handoff",
    branch: "AI & Eng",
    level: 2,
    description: "Clear specs, stories, and collaboration with engineering.",
    related_project_slugs: ["yourway", "fortnite-locker"],
    x: 38,
    y: 92,
  },
  // Games
  {
    id: "s-game",
    name: "Game Design",
    branch: "Games",
    level: 1,
    description: "UX methods applied to games and gamified products.",
    related_project_slugs: ["fortnite-locker"],
    x: 68,
    y: 78,
  },
  {
    id: "s-unreal",
    name: "Unity / Unreal",
    branch: "Games",
    level: 2,
    description: "Prototyping and UI craft inside real-time engines.",
    related_project_slugs: ["fortnite-locker"],
    x: 62,
    y: 92,
  },
  {
    id: "s-play",
    name: "Playtesting",
    branch: "Games",
    level: 2,
    description: "Validating game UX with real player feedback loops.",
    related_project_slugs: ["fortnite-locker"],
    x: 74,
    y: 92,
  },
];

export const skillEdges: SkillEdge[] = [
  { parent_id: "s-ux", child_id: "s-testing" },
  { parent_id: "s-ux", child_id: "s-personas" },
  { parent_id: "s-testing", child_id: "s-journeys" },
  { parent_id: "s-personas", child_id: "s-journeys" },
  { parent_id: "s-product", child_id: "s-roadmap" },
  { parent_id: "s-product", child_id: "s-prds" },
  { parent_id: "s-roadmap", child_id: "s-agile" },
  { parent_id: "s-prds", child_id: "s-agile" },
  { parent_id: "s-figma", child_id: "s-proto" },
  { parent_id: "s-figma", child_id: "s-systems" },
  { parent_id: "s-proto", child_id: "s-wire" },
  { parent_id: "s-systems", child_id: "s-wire" },
  { parent_id: "s-ai", child_id: "s-cursor" },
  { parent_id: "s-ai", child_id: "s-handoff" },
  { parent_id: "s-game", child_id: "s-unreal" },
  { parent_id: "s-game", child_id: "s-play" },
];

export const certifications: Certification[] = [
  {
    id: "c1",
    name: "Introduction to UX Writing",
    issuer: "Domestika",
    issued_at: "2022-09",
    credential_id: "d36a5d7ad755382a96162b3c099ab03f",
  },
  {
    id: "c2",
    name: "Introduction to UX Design",
    issuer: "Domestika",
    issued_at: "2020-11",
    credential_id: "5a7ac0d89f7aca59914851a11a1b8d3d",
  },
  {
    id: "c3",
    name: "Unreal Engine: Foundation Course For UI Artists",
    issuer: "Globant",
    issued_at: "2024-02",
    credential_id: null,
  },
  {
    id: "c4",
    name: "Video Game Production Using UX Methods",
    issuer: "Domestika",
    issued_at: "2023-10",
    credential_id: "ac07f4f202458a98a4f2014f39c41336",
  },
  {
    id: "c5",
    name: "Lean UX",
    issuer: "Certification",
    issued_at: "2020",
    credential_id: null,
  },
  {
    id: "c6",
    name: "Video Game Design",
    issuer: "Certification",
    issued_at: "2023",
    credential_id: null,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "I had the pleasure of working closely with David as he grew from a UX designer into a highly capable product manager. He initially joined our team designing teacher- and student-facing experiences, where he consistently brought strong user empathy, thoughtful design judgment, and a practical understanding of how to turn complex needs into intuitive products. Over time, David expanded his responsibilities beyond design and took ownership of our student engagement experience, helping shape product strategy, prioritize opportunities, define requirements, and collaborate closely with engineering from concept through delivery.\n\nWhat stands out most about David, though, is the kind of teammate he is. He is exceptionally dedicated and reliable. David is a person you can trust to follow through, support the team, and keep moving the work forward even when the path is not straightforward. He approaches challenges with humility and curiosity and is constantly looking for opportunities to learn, improve his craft, and broaden the value he can provide.\n\nDavid’s evolution from UX designer to product manager reflects both his versatility and his commitment to growth. He would be a tremendous addition to any team looking for someone who combines product thinking, design expertise, a strong work ethic, and genuine care for both users and colleagues.",
    author: "Hollin Wakefield",
    role: "Chief Product and Technology Officer",
    company: "Yourway Learning",
  },
  {
    id: "t2",
    quote:
      "I had the opportunity to work with David at Yourway and see how he grew from a very strong UX Designer into a Product Manager. One of his biggest strengths is how he combines both perspectives, always understanding the users while also keeping the business needs in mind. David brings a lot of value to product conversations and has a great ability to connect design, product, and strategy in a very thoughtful way. I'm sure he'll make a great impact wherever he goes.",
    author: "Belén Gudiño",
    role: "Senior Product Manager",
    company: "Yourway Learning",
  },
  {
    id: "t3",
    quote:
      "David is an extremely professional, highly talented Product Designer. I had the honor to work with him on numerous initiatives... and his knowledge about UX, Gamification and Vibecoding is one of a kind. I also had the privilege to see his transition from product into a Leadership role where he shined as a sawvy, collaborative and hands-on leader.",
    author: "Luis Alvarez",
    role: "Product Designer",
    company: "Yourway Learning",
  },
  {
    id: "t4",
    quote:
      "I’ve had the opportunity to work with David, and I can confidently say he is someone who truly pushes things forward. As a designer, he is highly versatile and always willing to support the team, even contributing across different areas. This has given him a holistic understanding of product development.",
    author: "Andrés Quevedo",
    role: "Co-founder",
    company: "Boken",
  },
  {
    id: "t5",
    quote:
      "I’ve had the privilege of working alongside David for nearly three years in game development, serving as his Producer.\n\nHe stands out as one of the most talented and professional UX designers I’ve had the pleasure of collaborating with.\n\nDavid brings deep expertise across the entire UX/UI design workflow—from ideation to implementation—on gaming projects spanning console, PC, and mobile platforms.\n\nHis passion for design is evident in everything he does, and his approach is consistently data-driven, seamlessly integrating insights from UX research, product teams, analytics, and user behavior.\n\nWhat truly sets David apart is his independence and proactive mindset. He excels in cross-functional collaboration, consistently delivering high-quality mockups, wireframes, prototypes, and documentation that supports development from early stages through to release.\n\nHis adaptability and openness to feedback, even during late-stage changes, makes him an invaluable team member.\n\nDavid is a true talent in the UX space, and any team would be lucky to have him.",
    author: "Matias Manzano",
    role: "Producer",
    company: "Globant",
  },
  {
    id: "t6",
    quote:
      "David has been a great asset to the redesign of Truckers Network. He is a multi-talented Senior UX designers who brings great insight to the customer experience.\n\nDavid's advanced knowledge of Figma helped us implement many intuitive designs into our service offering. David guided the team to seamlessly integrate his Figma designs into our Telerik development platform with minimal effort from development, enabling us to completely change the look and feel of our application with a push of a button. This saved us countless man-hours contributing to faster time-to-market deliverables.\n\nDavid's organizational skills helped us establish design template guidelines that assisted development in producing consistent user interface workflows. David's listening skills and patience compliments his energy and enthusiasm, working with David is both effective and enjoyable.\n\nI would highly recommend David for any UX Design position, I'm confident that David will deliver beyond your expectations.",
    author: "James Edgell",
    role: "CTO",
    company: "Truckers Network",
  },
];

export const education = {
  degree: "Bachelor's Degree, Interactive Media Design",
  school: "Universidad ICESI",
  years: "2009 – 2014",
  note: "Human interaction design with foundations in coding (Java, JavaScript, Processing, Swift) plus UX research, writing, and interface design.",
};
