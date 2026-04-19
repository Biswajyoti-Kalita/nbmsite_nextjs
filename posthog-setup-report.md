<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the Next Audio (Next Broadcast Media) Next.js 15 App Router project. Here is a summary of all changes made:

**Infrastructure setup:**
- Installed `posthog-js` (client-side) and `posthog-node` (server-side) packages
- Created `instrumentation-client.ts` — initializes PostHog on the client using the Next.js 15.3+ recommended approach (no provider needed)
- Created `src/lib/posthog-server.ts` — singleton PostHog Node client for server-side API route tracking
- Updated `next.config.ts` — added reverse proxy rewrites (`/ingest/*`) and `skipTrailingSlashRedirect: true` for reliable PostHog ingestion and ad-blocker bypass
- Created `.env.local` with `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST`

**Event tracking added across 8 files:**

| Event Name | Description | File |
|---|---|---|
| `request_proposal_clicked` | User clicks the "Request a Proposal" button in the navbar | `src/components/Navbar.tsx` |
| `call_me_back_clicked` | User clicks the "Call Me Back" button in the navbar | `src/components/Navbar.tsx` |
| `brief_form_step_completed` | User completes step 1 of the brief form (contact details) and advances | `src/components/ShareBrief.tsx` |
| `brief_form_type_selected` | User selects a brief submission type (complete-a-form, write-a-brief, upload-file) | `src/components/ShareBrief.tsx` |
| `brief_submitted` | User successfully submits a campaign brief (client-side confirmation) | `src/components/ShareBrief.tsx` |
| `callback_requested` | User successfully submits a call-me-back request (client-side confirmation) | `src/components/CallMeBack.tsx` |
| `audio_sample_played` | User plays an audio sample in the case study player | `src/components/Player.tsx` |
| `case_study_viewed` | User clicks "View Case Study" on a specific case study | `src/components/CaseStudyLib.tsx` |
| `case_study_filter_applied` | User applies a campaign type or industry filter in the case study library | `src/components/CaseStudyLib.tsx` |
| `audio_funnel_tab_selected` | User selects a funnel stage tab (Top, Mid, Bottom) in the AudioFunnel section | `src/components/AudioFunnel.tsx` |
| `brief_submitted_server` | Server-side: campaign brief successfully saved to the database | `src/app/api/submit-brief/route.ts` |
| `callback_requested_server` | Server-side: call-me-back request successfully saved to the database | `src/app/api/call-me-back/route.ts` |

**Error tracking** was also added with `posthog.captureException()` around form submission error paths in `ShareBrief.tsx` and `CallMeBack.tsx`.

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics:** https://us.posthog.com/project/388719/dashboard/1485647
- **Brief submission funnel** (conversion funnel: proposal click → step 1 → submit): https://us.posthog.com/project/388719/insights/HcXGDDI9
- **Lead generation over time** (daily brief submissions + callback requests): https://us.posthog.com/project/388719/insights/P1YQuRcb
- **Brief form type preference** (which submission method users prefer): https://us.posthog.com/project/388719/insights/WMpt4kAQ
- **Case study engagement** (views and filter usage over time): https://us.posthog.com/project/388719/insights/wr7THkKI
- **Audio funnel stage interest** (which advertiser funnel stage attracts most interest): https://us.posthog.com/project/388719/insights/yhdDk0UU

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
