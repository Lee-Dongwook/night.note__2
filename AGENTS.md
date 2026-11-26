# AGENTS.md

# 감성글 (night.note\_\_2) — Project Development Guidelines

## 1. Project Overview

**감성글** is an emotional-content brand and website associated with the Instagram account [@night.note\_\_2](https://www.instagram.com/night.note__2/).

The website provides a space to discover and read short emotional writings and quotes about comfort, relationships, love, daily life, and personal growth.

### Core Principles

- Keep the experience minimal, calm, and editorial.
- Prioritize readability and emotional impact over decorative UI.
- Maintain consistency across all pages.
- Support both Light and Dark themes.
- Build a maintainable architecture that allows the website to grow.
- Avoid unnecessary complexity and premature abstractions.

### Brand Identity

- Brand name: 감성글
- Instagram: @night.note\_\_2
- Instagram URL: https://www.instagram.com/night.note__2/
- Primary language: Korean
- Website tone: Calm, warm, minimal, thoughtful.

**Important:** Never rename the brand to "새벽의 편지" or introduce another brand identity without explicit user approval.

---

## 2. Technology Stack

The project currently uses:

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS v4
- next-themes
- npm
- Vercel

Before introducing new dependencies, inspect `package.json` and determine whether the existing stack already provides the required functionality.

Do not introduce a new library for a problem that can be solved cleanly with the existing dependencies.

---

## 3. Project Architecture

The project follows a domain-oriented structure with shared UI components.

Expected structure:

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── robots.ts
│   ├── sitemap.ts
│   ├── manifest.ts
│   ├── archive/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   └── about/
│       └── page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── SiteLayout.tsx
│   │   └── index.ts
│   ├── theme/
│   │   ├── ThemeProvider.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── index.ts
│   ├── home/
│   └── common/
│
├── domains/
│   └── post/
│       ├── types/
│       └── repositories/
│
├── data/
│   └── posts/
│       └── posts.json
│
└── lib/
    ├── constants/
    └── seo/
```

This is the intended architectural direction. Always inspect the actual repository before assuming that every listed file exists.

### Architecture Responsibilities

#### `app/`

Responsible for:

- Next.js routes
- Page composition
- Root layout
- Route-level metadata
- SEO-related route configuration

Avoid putting reusable business logic directly inside page components.

#### `components/layout/`

Responsible for shared site-level UI.

- `Header.tsx`: Brand logo, navigation, theme selection, Instagram link.
- `Footer.tsx`: Brand message and copyright.
- `SiteLayout.tsx`: Shared Header + page content + Footer composition.

All public pages should use the shared layout through the root layout unless a route explicitly requires a different layout.

Do not duplicate Header or Footer inside individual pages.

#### `components/theme/`

Responsible for theme management.

- `ThemeProvider.tsx`: next-themes provider configuration.
- `ThemeToggle.tsx`: Light / Dark / System selection UI.

Keep theme-related logic isolated from unrelated components.

#### `domains/post/`

Responsible for post-related domain logic.

- Post types
- Post repositories
- Post retrieval and filtering

Do not bypass the repository layer by importing JSON data directly into page components.

#### `data/`

Contains local content data.

Treat content data and application logic as separate concerns.

#### `lib/`

Contains shared utilities, constants, and SEO functionality.

Avoid duplicating existing utilities.

---

## 4. Design System

The website follows a minimal editorial design direction.

### Design Principles

1. Typography is more important than decoration.
2. Use generous whitespace.
3. Avoid excessive borders, shadows, gradients, and rounded cards.
4. Keep visual hierarchy clear.
5. Use restrained colors.
6. Preserve consistent spacing and interaction patterns.
7. Prioritize mobile readability.

Do not add decorative elements simply to make a page look more sophisticated.

### Theme Support

The website supports three theme modes:

- Light
- Dark
- System

The default theme is System.

The theme selection should persist across page navigation and browser refreshes.

Every visual modification must be checked in both Light and Dark modes.

### Design Tokens

Use CSS variables defined in `src/app/globals.css`.

Existing Tailwind theme tokens include:

| Token              | Purpose                      |
| ------------------ | ---------------------------- |
| `bg-background`    | Main page background         |
| `bg-surface`       | Secondary surface background |
| `bg-surface-hover` | Hover surface background     |
| `text-foreground`  | Primary text                 |
| `text-secondary`   | Secondary text               |
| `text-muted`       | Muted text                   |
| `border-border`    | Default border               |
| `text-accent`      | Accent text                  |
| `bg-accent`        | Accent background            |

Before introducing a new color, check whether an existing token can be reused.

Do not hardcode colors in individual components unless there is a clear design requirement.

### Button and Interaction Rules

Button styles must follow a consistent design system.

Before modifying any button:

1. Identify its purpose.
2. Identify its current default state.
3. Identify its hover state.
4. Identify its active and focus states.
5. Check its appearance in Light mode.
6. Check its appearance in Dark mode.

Do not arbitrarily change `foreground`, `background`, `accent`, or border colors to fix a single visual issue.

Do not assume that every button should use the same hover behavior.

Different interaction types may have different visual treatments, but they must follow a consistent set of design rules.

Avoid introducing one-off button styles when a shared style or reusable component would be more appropriate.

All interactive elements must have visible focus states and appropriate accessible labels.

### Responsive Design

Every UI change must consider:

- Mobile: 375px–430px
- Tablet: 768px
- Desktop: 1024px and above

Do not assume that a desktop layout automatically works on mobile.

---

## 5. Development Rules

### Rule 1: Inspect Before Editing

Before modifying files:

- Inspect the relevant component.
- Inspect its imports and dependencies.
- Check where the component is used.
- Check whether similar functionality already exists.
- Understand the existing styling conventions.

Never overwrite an entire file without first understanding its current implementation.

### Rule 2: Minimize the Change Scope

Only modify files required to complete the requested task.

Do not:

- Refactor unrelated components.
- Rename unrelated variables.
- Reorganize folders without permission.
- Change existing copy without permission.
- Replace libraries unnecessarily.
- Rewrite working functionality for stylistic reasons.

A small UI request should result in a small and focused code change.

### Rule 3: Preserve Existing Behavior

Unless explicitly requested, preserve:

- Existing routes
- Existing page content
- Existing post data
- Existing repository behavior
- Existing SEO metadata
- Existing structured data
- Existing navigation destinations
- Existing external links
- Existing responsive behavior

Do not remove functionality just because it is not directly related to the current task.

### Rule 4: TypeScript

- Prefer explicit types for shared interfaces.
- Avoid `any`.
- Avoid unnecessary type assertions.
- Reuse existing domain types.
- Keep server and client component boundaries clear.
- Do not add `"use client"` unless client-side functionality is necessary.

### Rule 5: Next.js App Router

- Prefer Server Components by default.
- Use Client Components only when necessary.
- Keep data fetching in appropriate server-side boundaries.
- Avoid unnecessary client-side fetching.
- Use Next.js navigation and image components where appropriate.
- Follow existing metadata conventions.

### Rule 6: Accessibility

- Use semantic HTML.
- Use buttons for actions and links for navigation.
- Provide accessible names for icon-only controls.
- Preserve keyboard navigation.
- Provide visible focus indicators.
- Respect `prefers-reduced-motion`.

### Rule 7: Dependencies

Before adding a dependency:

1. Check `package.json`.
2. Check whether an existing dependency already solves the problem.
3. Consider bundle size and maintenance overhead.
4. Add only what is necessary.

Do not upgrade unrelated dependencies during feature implementation.

---

## 6. SEO and GEO Guidelines

SEO and GEO are important parts of this project.

Do not modify SEO infrastructure casually.

Existing SEO-related files include:

- `src/lib/constants/site.ts`
- `src/lib/seo/metadata.ts`
- `src/lib/seo/structured-data.ts`
- `src/app/robots.ts`
- `src/app/sitemap.ts`
- `public/llms.txt`

### Requirements

- Preserve canonical URLs.
- Preserve Open Graph metadata.
- Preserve Twitter metadata.
- Maintain valid structured data.
- Keep sitemap routes synchronized with published content.
- Keep robots configuration consistent with the deployment environment.
- Avoid duplicate metadata.
- Use descriptive page titles and descriptions.
- Keep Korean language metadata consistent.

When modifying SEO-related functionality, verify the resulting metadata and routes.

Do not add unsupported claims or fabricated content to improve search visibility.

---

## 7. Content Management

Posts are managed through the post domain and repository layer.

Current post categories:

- `comfort`: 위로
- `relationship`: 관계
- `growth`: 성장
- `daily`: 일상
- `love`: 사랑

Post statuses:

- `draft`
- `published`

Only published posts should be publicly accessible through the repository.

Do not change post status filtering or publishing behavior without explicit approval.

### Content Writing

The brand's writing style should be:

- Calm
- Natural
- Concise
- Emotionally relatable
- Not overly dramatic
- Not excessively promotional

Avoid generic AI-generated expressions and repetitive emotional clichés.

---

## 8. Deferred Features

The following ideas are intentionally deferred.

Do not implement them unless explicitly requested.

### Daily Rotating Featured Phrase

The homepage may eventually display a different representative phrase each day.

Future considerations:

- Select one published phrase per day.
- Keep the selected phrase consistent throughout the day.
- Use date-based deterministic selection.
- Allow a future manual override.
- Avoid unnecessary external APIs or scheduled jobs.

This feature is not part of the current implementation scope.

---

## 9. Testing and Verification

After making changes, run the relevant checks.

Recommended commands:

```bash
npx tsc --noEmit
npm run build
```

If the project contains lint or test scripts, use the relevant ones as well.

For UI changes, verify:

- Light theme
- Dark theme
- System theme
- Desktop layout
- Mobile layout
- Hover and focus states
- Navigation behavior
- Browser refresh behavior

Do not claim that a test passed unless it was actually executed.

If a command fails, report the actual error and distinguish it from unrelated pre-existing issues.

---

## 10. CLI Agent Workflow

For every task, follow this workflow.

### Step 1. Understand

- Read the relevant files.
- Identify the requested behavior.
- Determine the smallest reasonable implementation scope.
- Check for existing conventions.

### Step 2. Plan

Briefly identify:

- Files to modify
- Files to create
- Existing behavior that must remain unchanged
- Potential risks

For small changes, keep the plan concise.

### Step 3. Implement

- Make only the required changes.
- Follow existing conventions.
- Avoid unrelated refactoring.
- Keep code readable and maintainable.

### Step 4. Verify

Run appropriate checks.

Inspect the diff to ensure that unrelated code was not modified.

### Step 5. Report

Summarize:

- What changed
- Which files changed
- What was verified
- Any remaining issues
- Anything requiring manual browser verification

Do not report unverified assumptions as completed work.

---

## 11. Strict Restrictions

The following actions require explicit user approval:

- Changing the brand identity
- Changing the overall design direction
- Removing existing pages or features
- Changing the post data model
- Changing publishing behavior
- Introducing a CMS
- Introducing a database
- Replacing the repository architecture
- Adding authentication or user accounts
- Changing SEO infrastructure
- Adding paid external services
- Implementing deferred features

When requirements are ambiguous, ask before making a significant architectural or visual decision.

**The primary objective is to improve the existing website incrementally without destabilizing working functionality.**
