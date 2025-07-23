## 💼 Resumind - AI-Powered Job Match Analyzer (Serverless + Free)
Tired of sending out resumes into the void? No replies. No rejections. Just silence.
It’s not that you're not qualified—your resume just isn’t saying it loud enough. Or worse... you're applying blindly, without knowing what the job actually wants.
That ends now.

## 🚀 What is Resumind?
Resumind is a serverless, AI-powered resume analyzer that gives instant, actionable insights on how well your resume matches any job posting—and how to fix it. Your own personal job search assistant, right in the browser.

## Key Features

- **🔍 Instant Resume-to-Job Match Analysis**: Upload any resume and job description and get real-time match scores and breakdowns using free AI APIs (GPT, Claude, Grok, etc.).
- **🧠 Custom Feedback with AI**: Generate actionable feedback on how to improve your resume, based on what's actually in the job post.
- **📄 Secure File Upload**: Handle resumes and job listings with secure file input, processed entirely on the client side.
- **🧰 No Backend. No Hosting Costs**: Powered by Puter.js, this app runs fully serverless. Every user runs their own computation, storage, and AI API calls on their own virtual computer—not yours.
- **📊 ATS (Applicant Tracking System)**: Find out how your resume performs against the same filtering systems used by real recruiters.
- **📱 Fully Responsive**: Sleek UI built with Tailwind CSS v4 for blazing-fast responsive design.

## 🛠️ Tech Stack
- ReactJS + React Router v7: Modern component-based UI + advanced routing
- Tailwind CSS v4: Utility-first styling for rapid UI dev
- TypeScript: Type-safe, readable, maintainable code
- Zustand: Lightweight global state management made simple
- Puter.js: Run code, store files, and use AI directly in-browser—no infra needed
- Free AI Models: GPT (OpenAI), Claude (Anthropic), Grok (xAI) via user-side APIs

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
