# Specification

## Summary
**Goal:** Replace the site logo in the Header and Footer with the newly uploaded logo, ensuring it is crisp and has a clean solid single-color background, without changing any other site UI or behavior.

**Planned changes:**
- Export the uploaded logo into the existing asset path `/assets/generated/indomills-logo.dim_512x256.png` so no frontend `src` path changes are required.
- Ensure the exported logo has a uniform, single-color background (no transparency, checkerboard, fringing, or edge artifacts) and appropriate padding for current header/footer sizes.

**User-visible outcome:** The Header and Footer show the updated Indomills logo clearly and sharply on mobile and desktop, with a clean solid background; all other site content, routes, navigation, and CTAs remain unchanged.
