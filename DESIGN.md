---
name: Recep Baş Portfolio
description: One quiet dark page where the person and the evidence are the only things lit.
colors:
  bg: "#0A0B0D"
  bg-raised: "#111317"
  text: "#ECEDEF"
  text-hover: "#FFFFFF"
  muted: "#A3A8B1"
  faint: "#8A909B"
  line: "#22252B"
  line-strong: "#343842"
  accent: "#9DB4FF"
typography:
  display:
    fontFamily: "Geist, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(3.25rem, 15vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Geist, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.75rem, 6vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Geist, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  contact-value:
    fontFamily: "Geist, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.2rem, 5.2vw, 1.75rem)"
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Geist, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Geist, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.6
  mono:
    fontFamily: "Geist Mono, ui-monospace, Cascadia Mono, Consolas, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.01em"
rounded:
  photo: "6px"
  pill: "999px"
spacing:
  gutter-mobile: "20px"
  gutter-wide: "32px"
  entry-y: "28px"
  entry-y-wide: "32px"
  section-top: "64px"
  section-top-wide: "88px"
  max-width: "1120px"
components:
  button-primary:
    backgroundColor: "{colors.text}"
    textColor: "{colors.bg}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.text-hover}"
    textColor: "{colors.bg}"
  button-secondary:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.text}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "48px"
  button-secondary-hover:
    backgroundColor: "{colors.bg-raised}"
    textColor: "{colors.text}"
  lang-toggle-active:
    backgroundColor: "{colors.text}"
    textColor: "{colors.bg}"
    rounded: "{rounded.pill}"
    width: "44px"
    height: "34px"
  lang-toggle-idle:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.muted}"
    rounded: "{rounded.pill}"
  tag:
    textColor: "{colors.muted}"
    rounded: "{rounded.pill}"
    padding: "7px 11px"
  download-pill:
    textColor: "{colors.text}"
    rounded: "{rounded.pill}"
    padding: "0 18px"
    height: "48px"
  portrait:
    backgroundColor: "{colors.bg-raised}"
    rounded: "{rounded.photo}"
    width: "420px"
---

# Design System: Recep Baş Portfolio

## Overview

**Creative North Star: "The Lit Page"**

A near-black, cool-tinted page in which only the person and the evidence are lit. Hierarchy comes from scale, weight, and hairline rules alone: a very large tightly-tracked name, quiet grey supporting text, and thin dividers that organize everything. There are no cards, no gradients, no shadows, and no ornament. The page reads like a calm, honest statement from a capable junior, scannable by a recruiter on a phone in thirty seconds.

Density is low and rhythm is generous. Sections are separated by whitespace and a single hairline per entry, never by boxes. One soft periwinkle accent appears only where attention is functional: the availability dot, link underline on hover, contact value on hover, focus rings, and text selection. The build is bilingual (DE in markup, EN swapped by script) and the design must hold for both string lengths.

**Key Characteristics:**
- Near-black ground (#0A0B0D) with off-white text and two muted greys.
- Geist for everything; Geist Mono only for dates, tech lines, and file-format tags.
- Hairlines, not containers, carry structure.
- Pill-shaped controls (999px), a single 6px radius on the portrait, nothing else rounded.
- Flat everywhere: no shadows.
- Mobile-first, 44px minimum touch targets.

## Colors

A restrained cool-neutral scale on a near-black ground with a single soft periwinkle accent.

### Primary
- **Soft Periwinkle** (accent): the only chromatic color. Status dot, focus outline, selection background, link-underline hover, contact value hover. Never a fill for buttons or panels.

### Neutral
- **Cool Near-Black** (bg): page ground, sticky bar (at 92% alpha with blur), default pill-button fill.
- **Raised Ink** (bg-raised): portrait placeholder and hover fill on secondary pills. The only second surface tone.
- **Off-White** (text): body text, headings, and the fill of the primary button and active language toggle.
- **Pure White** (text-hover): link and primary-button hover only.
- **Mist Grey** (muted): secondary copy, nav links, meta lines, bullets, tags, quick links.
- **Slate Grey** (faint): labels (definition terms), dates, stack lines, bullet dashes, format tags.
- **Hairline** (line): section and entry dividers, bar bottom border, fact and contact rules.
- **Strong Hairline** (line-strong): outlines of pills, tags, language toggle, link underlines.

### Named Rules
**The One Voice Rule.** The accent marks only what is live or focusable: status, focus, hover on links. It is never decoration and never a surface fill.

**The Grey Ladder Rule.** Text hierarchy is text, then muted, then faint. Faint is the floor for legible text on the ground; do not go darker.

## Typography

**Display / Body Font:** Geist (self-hosted, with system-ui, -apple-system, Segoe UI, sans-serif)
**Mono Font:** Geist Mono (self-hosted, with ui-monospace, Cascadia Mono, Consolas, monospace)

**Character:** One neutral grotesque used at confident extremes: a huge, tightly-tracked name against modest reading text. Mono appears only where the content is data (dates, stack, file format).

### Hierarchy
- **Display** (600, clamp(3.25rem, 15vw, 6rem), 0.98, -0.04em): the name in the hero, once per page.
- **Headline** (600, clamp(1.75rem, 6vw, 2.25rem), 1.1, -0.03em): section titles; fixed at 1.75rem and sticky on the left from 960px.
- **Title** (600, 1.375rem, 1.2, -0.02em): entry titles (projects, school, employer).
- **Contact value** (500, clamp(1.2rem, 5.2vw, 1.75rem), -0.02em): contact list values, the largest repeated text after headings.
- **Body** (400, 1.0625rem, 1.6): paragraphs, lede at max 56ch, entry text at max 62ch.
- **Role / Meta** (400, 1.125rem role at 34ch max; 0.9375rem meta at 60ch max, muted): subtitle and entry meta lines. Nav links, quick links, and footer are 0.9375rem.
- **Label** (400, 0.8125rem, faint): fact terms, group terms, contact labels. Tags are 0.8125rem muted; the language toggle is 500, 0.8125rem, +0.04em.
- **Mono** (400, 0.8125rem, 1.5, +0.01em, faint): dates in entries and stack lines; 0.75rem for the PDF format tag.

### Named Rules
**The Data-Only Mono Rule.** Geist Mono is reserved for dates, tech/stack lines, and file formats. Never for headings, buttons, or running text.

**The Tight Display Rule.** Larger type gets tighter tracking (-0.04em name, -0.03em section, -0.02em entry); body stays at default tracking.

## Layout

A single centered column, max 1120px, with a 20px gutter that becomes 32px from 700px. Everything sits inside this wrap.

- **Sticky bar:** brand left, nav, language toggle right. On mobile it wraps to two rows (brand and toggle, then a horizontally scrollable nav); from 700px it is one row with a centered nav.
- **Hero:** single column on mobile (text first, portrait after, max 320px); from 960px a two-column grid (1.25fr text, 0.75fr portrait) with a 72px gap, vertically centered, portrait aligned right. On mobile the primary mail button is full width with CV and Call side by side below.
- **Facts row:** a definition list with a top and per-cell bottom hairline; 2 columns on mobile, 4 from 700px.
- **Section grammar:** from 960px, a two-column grid, a 200px sticky heading column (top 96px) and content, with a 48px gap; on mobile the heading stacks above content. Section top padding is 64px on mobile and 88px on wide screens.
- **Entry grammar:** each entry has a mono date and a body. From 960px a 170px date column and a 32px gap; on mobile the date stacks above. Entries are separated by a single top hairline with 28px (32px wide) vertical padding; the first entry has none.
- **Skill groups:** the same 170px term, content grid, with hairline-separated rows (22px padding).
- **Anchor offset:** 96px scroll padding for the sticky bar. Reduced motion disables smooth scrolling and animation.

## Elevation & Depth

Flat, with no shadows anywhere. Depth is expressed by two tonal steps (bg and bg-raised) and by hairlines. The sticky bar is the only layered element: translucent bg at 92% with a 14px backdrop blur and a bottom hairline. Hover feedback is a tonal fill shift or border brightening, never lift.

### Named Rules
**The Flat Rule.** No box-shadows, no gradients. If something needs separation, add a hairline or space.

## Shapes

Two radii only. Interactive pills (buttons, download links, tags, language toggle, its buttons) are fully rounded (999px). The portrait is the single photographic shape: a 4:5 crop with a 6px radius, cropped with object-position 50% 18% to keep the face. The status dot is a 8px circle. Focus outline is 2px accent with 3px offset and a 2px radius. Bullets are 8px hairline dashes, not glyphs. Outbound-link icons are small (14px) stroked 1.5px square-cap SVG arrows inheriting currentColor.

## Components

### Buttons
- **Shape:** pill (999px), 48px min-height, 22px horizontal padding, 500 weight, 1rem.
- **Primary:** off-white fill with near-black text, the sole filled control (email). Full width on mobile, auto from 700px. Hover turns pure white.
- **Secondary:** transparent with a strong-hairline border and off-white text (CV, Call). Hover brightens the border to muted and fills with bg-raised. Two share the row equally on mobile.
- **Transitions:** 0.2s on background, border, and color.

### Language toggle
A 2-up segmented pill in the bar: strong-hairline outer border, 3px inset, 44px by 34px buttons, 500 0.8125rem with +0.04em tracking. The pressed state (aria-pressed true) is filled off-white with near-black text; idle is muted and brightens to text on hover. State is exposed through aria-pressed, not color alone.

### Hairline lists
The shared primitive: top hairline plus per-row bottom hairline, no boxes. Used for the facts row, entries, skill groups, and the contact list. Contact rows are fully clickable links with a faint label over a large value; hover shifts only the value to the accent.

### Entries
Mono date, 1.375rem title, muted meta line, body at max 62ch, optional hairline-dash bullets (muted), mono stack line, pill tags, and link row with 44px touch height. Tags are 0.8125rem muted text in strong-hairline pills.

### Download pills
Pill links (48px) with a label and a mono PDF format tag in faint; same hover as secondary buttons.

### Navigation
Muted 0.9375rem text links with 12px by 10px padding; hover to full text color; no underline. Brand is 600 with -0.01em tracking, 44px high.

### Portrait
A 4:5, 6px radius, bg-raised-backed figure with a staggered rise-in (14px translate and fade, 0.9s and 1.1s with a 0.12s delay, expo-out easing cubic-bezier(0.16, 1, 0.3, 1)).

### Footer disclosure
A native details element with a 44px summary in muted, revealing legal text at 62ch.

## Do's and Don'ts

### Do:
- **Do** express hierarchy with size, weight, and hairlines before reaching for color.
- **Do** use the pill (999px) for every interactive control and the 6px radius for the photo only.
- **Do** keep the accent for status, focus, and hover signals.
- **Do** set dates, stack lines, and file formats in Geist Mono at 0.8125rem faint.
- **Do** keep touch targets at 44px minimum and text at faint contrast or better.
- **Do** keep every string-bearing element tolerant of EN and DE length differences (wrapping, overflow-wrap on long values).

### Don't:
- **Don't** wrap content in cards or tinted panels; use a hairline and space.
- **Don't** add shadows, gradients, or glow.
- **Don't** introduce a second accent hue or fill a surface with the accent.
- **Don't** use Geist Mono for headings, buttons, or body copy.
- **Don't** add radii other than 999px and 6px.
