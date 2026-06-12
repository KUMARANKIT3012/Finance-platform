# Finance Tutorial

Finance Tutorial is a full-stack personal finance platform built with Next.js, Clerk, Drizzle, Postgres, Plaid, and Lemon Squeezy. It combines authenticated account management, transaction tracking, subscription gating, and analytics in one dashboard.

## Overview

The app is organized around a finance workspace with sign-in, sign-up, dashboard, and API route groups. It includes reusable dashboard components, feature-specific modules, and a database layer that stores accounts, categories, transactions, connected banks, and subscriptions.

## Features

- Authenticated sign-in and sign-up flows with Clerk
- Protected dashboard experience for finance data
- Plaid bank connection and syncing
- Account, category, and transaction management
- Subscription and paywall handling with Lemon Squeezy
- Summary cards, charts, tables, and filter controls
- CSV import and database seed support

## Tech Stack

- Next.js 16 with the App Router
- React 19 and TypeScript
- Clerk for authentication
- Drizzle ORM with Postgres and Neon
- Hono for typed API routing
- Plaid for bank linking
- Lemon Squeezy for subscription billing
- TanStack Query and TanStack Table
- Recharts for dashboard visualizations
- Tailwind CSS and shadcn/ui primitives

## Architecture

The repository follows a feature-based structure:

- app/ contains route groups, layouts, and API entrypoints
- components/ contains shared UI and dashboard components
- features/ contains domain logic grouped by accounts, categories, plaid, subscriptions, summary, and transactions
- db/ contains the Drizzle schema and database client
- providers/ contains app-level providers
- hooks/ and lib/ contain reusable client utilities
- scripts/ contains migration and seed scripts

Important entry points:

- app/(auth)/ for authentication pages
- app/(dashboard)/ for the main finance workspace
- app/api/[[...route]]/ for the Hono API surface
- features/subscriptions/ for the paywall and billing flow
- features/plaid/ for bank connection handling
- db/schema.ts for the database tables and relations

## Installation

1. Install dependencies:

```bash
npm install
```

2. Configure your local environment using the example section below.

3. Run database migration and seed commands if needed:

```bash
bun run db:migrate
bun run db:seed
```

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Example Environment Variables

Use example values only. Replace them with your own values in your local setup.

```bash
DATABASE_URL="postgresql://user:password@host:5432/database"
NEXT_PUBLIC_APP_URL="http://localhost:3000"

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_example"
CLERK_SECRET_KEY="sk_test_example"

PLAID_CLIENT_TOKEN="plaid_client_token_example"
PLAID_SECRET_TOKEN="plaid_secret_token_example"

LEMONSQUEEZY_API_KEY="lsq_api_key_example"
LEMONSQUEEZY_STORE_ID="store_id_example"
LEMONSQUEEZY_PRODUCT_ID="product_id_example"
LEMONSQUEEZY_WEBHOOK_SECRET="webhook_secret_example"
```

## Usage

- Run `npm run dev` to start the app
- Sign in or create an account through the auth routes
- Connect a bank account through the Plaid flow
- Review accounts, categories, transactions, and summary charts in the dashboard
- Use the subscription flow when paywall access is required

## Future Improvements

- Add more advanced transaction categorization workflows
- Expand budgeting and savings insights
- Improve import and export options
- Add more search and filtering capabilities
- Extend subscription analytics and reporting
