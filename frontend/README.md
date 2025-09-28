# DeCenter AI B2B Platform Frontend
This is the frontend application for DeCenter AI B2B Platform, built with [Next.js](https://nextjs.org/).

## Getting Started
### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. Clone the repository.
2. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Environment Variables
The application uses several environment variables for API integrations and configuration.  
Copy env.example to .env and update with your own values as needed:
```bash
cp env.example .env
```
Example variables:
- `NEXT_PUBLIC_BUILDER_API_KEY` — Builder.io API key
- `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` — Supabase project credentials
- `NEXT_PUBLIC_THIRDWEB_CLIENT_ID` / `THIRDWEB_SECRET_KEY` — ThirdWeb credentials
- `NEXT_PUBLIC_UNREAL_OPENAI_ADDRESS` — Unreal OpenAI contract address
- `NEXT_PUBLIC_UNREAL_CALLS_INITIAL` — Initial call quota for Unreal API
- `NEXT_PUBLIC_UNREAL_EXPIRY_SECONDS` — Expiry time for Unreal API calls (in seconds)
- `UNREAL_API_URL` — Unreal API endpoint

### Development
Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure
```md
frontend/
├── src/ # Application source code
│   ├── app/ # Application-level configuration, layouts, and routing (used in Next.js App Router)
│   ├── actions/ # Server actions, such as API calls
│   ├── components/ # React components
│   ├── lib/ # Utility libraries 
│   ├── services/ # Modules for interacting with external API
│   ├── utils/ # Utility functions and helpers
├── public/ # Static assets 

```

## Deploy on Vercel

The frontend is deployed to Vercel:  
[https://decenter-ai-venturethon.vercel.app](https://decenter-ai-venturethon.vercel.app)
