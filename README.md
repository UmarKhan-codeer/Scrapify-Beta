# 🚀 Scrapify (Beta)

> AI-powered web scraping platform – built as our Final Year Project (FYP).  
> 📦 This **beta version** includes demo/testing code only – not the new production backend.

---

## 📂 Overview

This repository contains the **beta code** for Scrapify, including:
- 🧩 Backend (`/backend`) — old test APIs using `api/scrape/route.js`
- 🌐 Frontend (`/frontend`) — basic Next.js interface to scrape data & show AI summaries

⚠ **Note:** This is only for **testing and code demonstration**.  
The production version (in progress) will include:
- Secure authentication (OAuth 2.0, JWT)
- Rate limiting & advanced security
- Optimized multi-page scraping
- AI-powered data enrichment

---

## 🛠 Features in Beta

✅ Scrape metadata, text, images, links, and videos  
✅ AI summarization of scraped data (using Hugging Face)  
✅ Rule-based categorization & keyword extraction  
✅ Store scraped data in MongoDB  
✅ Frontend form & scrape history view  
✅ Download data in JSON

---

## ⚙ Tech Stack

| Layer     | Tech                                                         |
|----------|---------------------------------------------------------------|
| Frontend | **Next.js**, **React.js**, **Tailwind CSS**                   |
| Backend  | **Node.js**, **Express.js**, **Puppeteer**                    |
| Database | **MongoDB** & **Mongoose**                                    |
| AI       | **Hugging Face API** for summarization                        |

---

## 📦 Getting Started (Beta)

### 🔧 Backend

```bash
cd backend
npm install
Create .env file in /backend:

env
Copy
Edit
PORT=5000
MONGODB_URI=your_mongodb_connection_string
HUGGINGFACE_API_KEY=your_huggingface_api_key
Run locally:

bash
Copy
Edit
npm run dev
The backend will run at: http://localhost:5000

🌐 Frontend
bash
Copy
Edit
cd frontend
npm install
Run locally:

bash
Copy
Edit
npm run dev
The frontend will run at: http://localhost:3000

🚀 Build & Deploy
For backend: deploy to Render / Railway / AWS
For frontend: build and deploy to Vercel

bash
Copy
Edit
# Frontend production build
npm run build
npm start
🤝 Contribution & Feedback
As this is a beta release, we welcome feedback and testers!
👉 Please open an issue or pull request.

📄 License
This project is part of our Final Year Project (FYP) and is shared for educational & testing purposes only.

