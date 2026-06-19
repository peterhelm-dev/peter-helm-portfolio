export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  tags: string[];
  content: ContentBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-workflows-need-human-in-the-loop",
    title: "Why Most AI Workflows Fail Without Human-in-the-Loop Design",
    date: "2026-05-12",
    readTime: "6 min read",
    excerpt:
      "AI can draft, classify, and route faster than any human, but the workflows that hold up in production are the ones designed for review, not just automation.",
    tags: ["AI Agents", "Human-in-the-loop", "Workflow Design"],
    content: [
      {
        type: "paragraph",
        text: "When I built the AI patient intake workflow, the first version I sketched out tried to automate everything end to end: capture the inquiry, classify it, draft a response, and send it without anyone looking at it. It worked fine in testing. It would not have survived a real intake queue for a week.",
      },
      {
        type: "heading",
        text: "The failure mode is confidence, not accuracy",
      },
      {
        type: "paragraph",
        text: "Most discussions about AI reliability focus on accuracy: how often does the model get it right? In practice, the bigger risk is confidence without context. A model can be 95% accurate and still send a confidently wrong escalation message to a patient with a time-sensitive issue, because the 5% it gets wrong is rarely random. It clusters around ambiguous, high-stakes cases, which are exactly the ones you cannot afford to get wrong.",
      },
      {
        type: "paragraph",
        text: "That is why the intake workflow routes anything above a risk threshold to a human review queue before anything goes out. The AI still does the heavy lifting: structuring unformatted text into clean fields, classifying urgency, and drafting the follow-up. A human just has to approve or edit, not start from scratch.",
      },
      {
        type: "heading",
        text: "Three places to put a human checkpoint",
      },
      {
        type: "list",
        items: [
          "Before anything external goes out (emails, SMS, customer-facing messages)",
          "Whenever the model's own confidence score or classification falls below a threshold",
          "At the boundary between automated systems, where one bad record can corrupt downstream data",
        ],
      },
      {
        type: "paragraph",
        text: "None of this is about distrusting AI. It is about designing systems where the cost of being wrong is bounded. Structured outputs, logging, and a review queue turn an AI workflow from a black box into something a team can actually trust and improve over time.",
      },
    ],
  },
  {
    slug: "webhook-integration-lessons-housecall-pro-highlevel",
    title: "Lessons From Building a Webhook Integration Between Two CRMs",
    date: "2026-04-20",
    readTime: "7 min read",
    excerpt:
      "Connecting Housecall Pro to HighLevel taught me more about event-driven architecture than any tutorial. Here's what actually mattered in production.",
    tags: ["Webhooks", "Integration", "n8n", "CRM Automation"],
    content: [
      {
        type: "paragraph",
        text: "At The Crew Cleaning & Restoration, job data lived in Housecall Pro and marketing/sales lived in HighLevel. Neither system talked to the other natively, so customer data, estimates, and job status updates had to be kept in sync by hand. The fix was a webhook-based integration that listens for events on one side and routes them to the other.",
      },
      {
        type: "heading",
        text: "Webhooks are easy to start, hard to trust",
      },
      {
        type: "paragraph",
        text: "Setting up a webhook listener takes minutes. Making it reliable takes much longer. Housecall Pro sends a flat payload shape for several different event types, which meant the first version of the workflow misrouted a handful of estimate-created events as job-status updates. The fix was to inspect the event type explicitly before doing anything else, rather than assuming payload shape from the endpoint alone.",
      },
      {
        type: "heading",
        text: "What actually broke in practice",
      },
      {
        type: "list",
        items: [
          "Out-of-order events: a 'job completed' webhook occasionally arrived before 'job started' due to retry timing",
          "Partial payloads: some event types omitted fields that downstream logic assumed would always exist",
          "Duplicate deliveries: the source system retried webhooks that timed out on our end, even though we had already processed them",
        ],
      },
      {
        type: "paragraph",
        text: "The fixes were unglamorous: idempotency checks keyed on the source record ID, explicit null handling instead of optimistic field access, and a small custom-code step to normalize payloads into one internal shape before any routing logic ran. Once that normalization layer existed, the rest of the workflow — updating HighLevel contacts, syncing estimates, logging activity — became dramatically simpler to maintain.",
      },
      {
        type: "paragraph",
        text: "The broader lesson: integration reliability comes from the boring parts (idempotency, normalization, explicit event typing), not from the automation platform you pick. n8n made the orchestration fast to build, but the data discipline is what kept it running.",
      },
    ],
  },
  {
    slug: "messy-process-to-clean-automation-framework",
    title: "From Messy Process to Clean Automation: A Practical Framework",
    date: "2026-03-08",
    readTime: "5 min read",
    excerpt:
      "Before you automate anything, you need to know exactly what the process actually is — not what it's supposed to be. Here's the framework I use.",
    tags: ["Process Mapping", "Automation", "Operations"],
    content: [
      {
        type: "paragraph",
        text: "Almost every automation request I get starts the same way: 'this process is a mess, can you automate it?' The instinct is to jump straight into building. The better first move is to map what is actually happening today, because the mess usually contains information that the 'official' process description leaves out.",
      },
      {
        type: "heading",
        text: "Step 1: Map it as-is, not as it should be",
      },
      {
        type: "paragraph",
        text: "I use SIPOC (Suppliers, Inputs, Process, Outputs, Customers) and swimlane diagrams to capture who touches a process and when. The goal is not a polished diagram, it's an honest one. The exceptions, manual workarounds, and 'we always just text Dave about that one' steps matter more than the clean version of the process, because those are exactly the steps an automated workflow will fail to anticipate if no one documents them.",
      },
      {
        type: "heading",
        text: "Step 2: Find the decision points, not just the steps",
      },
      {
        type: "paragraph",
        text: "Most processes are a sequence of decisions wearing a sequence of tasks as a disguise. 'Send a follow-up email' is a task. 'Send a follow-up email if the customer hasn't responded in 48 hours and isn't flagged as high-risk' is the decision underneath it. Automation lives or dies on whether you've correctly identified the conditional logic, not the task list.",
      },
      {
        type: "list",
        items: [
          "List every branch point: what conditions send a case down a different path?",
          "Identify who currently makes that judgment call, and what information they use",
          "Decide which branches are safe to automate fully and which need a human checkpoint",
        ],
      },
      {
        type: "heading",
        text: "Step 3: Build the smallest version that's actually useful",
      },
      {
        type: "paragraph",
        text: "I default to shipping a narrow workflow that handles the common path end to end and routes edge cases to a human, rather than trying to handle every branch on day one. It gets something real into production fast, and the edge cases that show up in the human queue become the spec for version two — based on what actually happens, not what we guessed would happen.",
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
