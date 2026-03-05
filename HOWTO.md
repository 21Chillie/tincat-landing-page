## Content Folder Customization Guide

Use this section as a per-file reference for what you can and should not modify.

### `src/content/brandContent.ts`

Purpose: Navbar and footer branding.

You can change:

- `brandName`
- `brandIconSrc` (to another imported image)
- `brandIconAlt`

Do not change:

- `brandContentType` property names
- Export name `brandContent`

### `src/content/heroContent.ts`

Purpose: Hero headline, copy, CTA, rating, hero image.

You can change:

- `title`, `description`, `cta`
- `imageSrc` and `imageAlt`
- `totalReviews`
- `rating` value between `1` and `5`

Do not change:

- Type keys in `heroContentType`
- Export name `heroContent`

### `src/content/navigationContent.ts`

Purpose: Navbar links, sidebar links, footer link groups.

You can change:

- `heading` text
- Sub-link `text` and `href`
- Number of sub-links in each group

Do not change:

- Root keys `heading` and `links`
- Sub-link keys `text` and `href`
- Export name `links`

### `src/content/sponsorContent.tsx`

Purpose: Sponsor section icon/logo list.

You can change:

- Sponsor `name`
- Sponsor `imgSrc` (icon component or string source)
- Entire sponsor entries

Do not change:

- Keys `name` and `imgSrc`
- Export name `sponsors`

### `src/content/featureContent.tsx`

Purpose: Feature heading, feature cards, feature product image.

You can change:

- `featureHeaderContent` values (`label`, `title`, `description`)
- `featureCardsContent` item text (`title`, `description`)
- Card `icon` components
- `productImageContent.firstImgSrc`

Do not change:

- Required card keys `title`, `description`, `icon`
- Export names used by components

### `src/content/testimonialContent.ts`

Purpose: Testimonial heading and testimonial card data.

You can change:

- Heading `label` and `title`
- Each testimonial `quote`, `name`, `username`, `imgSrc`
- Number of testimonials

Do not change:

- Keys `quote`, `name`, `username`, `imgSrc`
- Export names `testimonialHeadingContent` and `testimonialContent`

### `src/content/pricingContent.ts`

Purpose: Pricing heading and plan cards.

You can change:

- `pricingHeading` text
- Plan `description`, `price`, `features`, `cta`, `isPopular`
- Feature list length

Do not change:

- Plan `tier` values unless you also update `PricingTier` type
- Required keys in `PricingContentType`
- Export names `pricingHeading` and `pricingContent`

### `src/content/faqContent.tsx`

Purpose: FAQ heading, support contact cards, and accordion content.

You can change:

- `faqHeading` values
- `faqContactContent` copy, links, and icons
- `faqContent` questions and answers (`ReactNode` supported)

Do not change:

- Contact key names (`method`, `title`, `description`, `cta`, `value`, `icon`)
- FAQ key names (`question`, `answer`)
- `method` union values unless you update `ContactMethodType`

### `src/content/footerContent.tsx`

Purpose: Footer description and social links.

You can change:

- `footerContent.description`
- `socialLinks` labels, URLs, and icons

Do not change:

- `socialLinks` key names (`label`, `href`, `icon`)
- Export names `footerContent` and `socialLinks`

### `src/content/setTheme.ts`

Purpose: DaisyUI theme selection.

You can change:

- `selectedTheme` value to any option listed in `ThemeType`

Do not change:

- `ThemeType` unless you know your DaisyUI theme list requirements
- Export names `ThemeType` and `selectedTheme`
