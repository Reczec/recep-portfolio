# Recep Baş Portfolio

A Next.js portfolio for junior opportunities in IT, software, systems, AI, and automation.

## Content

- Homepage sections for positioning, capabilities, selected work, education, current work, and contact.
- Case studies at `/projects/signly` and `/projects/medical-knowledge-base`.
- Static project data in `src/app/lib/site.ts`, structured for a future live project feed.
- A clearly disabled **Download CV** control until a real PDF is available.

## Add the CV

Place the real CV PDF at:

```text
public/recep-bas-cv.pdf
```

Then replace the disabled hero control in `src/app/page.tsx` with a download link to `/recep-bas-cv.pdf`. No CV file is included in this repository.

## Local development

```bash
npm run dev
```

## Validation

```bash
npm run lint
npx tsc --noEmit
npm run build
```
