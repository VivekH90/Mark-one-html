<p align="center">
  <img src="https://img.shields.io/badge/HTML-Mark%20One-1F6B4F?style=for-the-badge" alt="Mark One">
  <img src="https://img.shields.io/badge/MathJax-supported-765A75?style=for-the-badge" alt="MathJax">
  <img src="https://img.shields.io/github/last-commit/VivekH90/Mark-one-html?style=for-the-badge" alt="Last commit">
  <img src="https://img.shields.io/github/license/VivekH90/Mark-one-html?style=for-the-badge" alt="License">
</p>

# Mark One

Mark One is an HTML template made particularly for writing mathematical notes.

It provides a collection of custom HTML elements for things commonly used in mathematical writing, such as definitions, theorems, proofs, sections, sidebars and tables of contents.

The idea is to write the structure of the mathematics in HTML and let JavaScript and CSS take care of the repetitive formatting and presentation.

MathJax is included for mathematical notation.

## Getting started

The easiest way to use Mark One is to clone the repository:

```bash
git clone https://github.com/VivekH90/Mark-one-html.git
```

Then copy the `mark_1` folder and use it as the starting point for your own notes.

The main file you will normally edit is:

```text
mark_1/index.html
```

Keep the `css` and `js` folders in their current locations, since the template loads them from `index.html`.

## Structure

A Mark One document is built from a few main components:

```text
banner
│
├── navigation
│   ├── home
│   ├── date
│   └── github
│
└── main layout
    ├── sidebar
    ├── document
    │   ├── breadcrumbs
    │   ├── title
    │   ├── sections
    │   ├── environments
    │   └── proofs
    │
    └── table of contents
```

## Banner

```html
<banner title="Real Analysis" color="#1F6B4F"></banner>
```

`title` is the text displayed on the banner.

`color` controls the banner colour.

### Banner image

The banner image must be named:

```text
banner.png
```

and placed in the same folder as `index.html`:

```text
mark_1/
├── index.html
└── banner.png
```

The banner JavaScript automatically loads this file.

## Navigation

The navigation bar uses `<home>`, `<date>` and `<github>`.

```html
<nav class="navbar">
    <home color="#1F6B4F" href="index.html">Home</home>
    <date>09 Sep 2026</date>
    <github color="#1F6B4F" href="https://github.com/VivekH90/Mark-one-html">Github</github>
</nav>
```

### `<home>`

Creates the Home link.

`href` is the destination.

`color` sets the link colour.

### `<date>`

Displays the date written inside the element.

### `<github>`

Creates a GitHub link.

`href` is the destination.

`color` sets the link colour.

## Sidebar

The sidebar is created with `<sidebar>`.

```html
<sidebar color="#1F6B4F" search="true">

    <group title="Related Notes">
        <item title="Sequences" href="sequences.html"></item>
        <item title="Limits" href="limits.html"></item>
    </group>

</sidebar>
```

### `<sidebar>`

`color` controls the sidebar accent colour.

`search="true"` enables the search box.

### `<group>`

Creates a category inside the sidebar.

`title` is the name of the category.

### `<item>`

Creates a link inside a group.

`title` is the displayed text.

`href` is the destination.

## Document

The actual note is written inside:

```html
<main id="document" class="note-content">
    ...
</main>
```

### Breadcrumbs

Breadcrumbs are placed inside:

```html
<div class="breadcrumbs">
    <a href="index.html">Home</a>
    <span>›</span>
    <a href="real-analysis.html">Real Analysis</a>
    <span>›</span>
    <span>Sequences</span>
</div>
```

They provide a simple path showing where the current note belongs.

### Title

The main title uses:

```html
<h1 class="main-title">Compact Sets</h1>
```

### Introduction

The introductory paragraph can use:

```html
<p class="intro-paragraph">
    Introduction to the topic.
</p>
```

## Sections

Sections are written using `<section>`.

```html
<section
    id="compactness"
    title="Compactness"
    color="#1F6B4F">

    ...

</section>
```

`id` identifies the section and should be unique.

`title` is the section title.

`color` sets the section colour.

Sections are numbered automatically.

For example:

```text
§ 1 Compactness
§ 2 Open Covers
§ 3 Compact Sets
```

### `<subsection>`

Subsections are written inside sections:

```html
<subsection
    id="open-covers"
    title="Open Covers"
    color="#1F6B4F">

    ...

</subsection>
```

`id` identifies the subsection.

`title` is the subsection title.

`color` sets the subsection colour.

Subsections are numbered automatically relative to their parent:

```text
1.1 Open Covers
1.2 Finite Subcovers
1.3 Compactness
```

## Mathematical environments

Mark One provides several environments for mathematical writing:

```text
definition
theorem
lemma
proposition
corollary
axiom
proof
```

The environments are written directly in HTML and are styled and constructed automatically by JavaScript.

### `<definition>`

Used for definitions.

```html
<definition
    title="Bounded Above"
    color="#1F6B4F">

    <p>
        Write the definition here.
    </p>

</definition>
```

`title` gives the name of the definition.

`color` sets its main colour.

### `<theorem>`

Used for theorems.

```html
<theorem
    title="Theorem Name"
    color="#1F6B4F">

    <p>
        Write the theorem here.
    </p>

</theorem>
```

`title` gives the theorem name.

`color` sets its main colour.

### `<lemma>`

Used for supporting results.

```html
<lemma
    title="Lemma Name"
    color="#765A75">

    <p>
        Write the lemma here.
    </p>

</lemma>
```

`title` gives the lemma name.

`color` sets its main colour.

### `<proposition>`

Used for propositions.

```html
<proposition
    title="Proposition Name"
    color="#765A75">

    <p>
        Write the proposition here.
    </p>

</proposition>
```

`title` gives the proposition name.

`color` sets its main colour.

### `<corollary>`

Used for corollaries.

```html
<corollary
    title="Corollary Name"
    color="#B77D69">

    <p>
        Write the corollary here.
    </p>

</corollary>
```

`title` gives the corollary name.

`color` sets its main colour.

### `<axiom>`

Used for axioms.

```html
<axiom
    title="Axiom Name"
    color="#B77D69">

    <p>
        Write the axiom here.
    </p>

</axiom>
```

`title` gives the axiom name.

`color` sets its main colour.

### `<r-item>`

Used for numbered items inside an environment.

```html
<definition
    title="Example"
    color="#1F6B4F">

    <r-item>
        <p>First statement.</p>
    </r-item>

    <r-item>
        <p>Second statement.</p>
    </r-item>

</definition>
```

Each `<r-item>` is numbered automatically.

## Proofs

Proofs use `<proof>` and `<step>`.

```html
<proof
    colback="#EEF7F2"
    coltext="#1F6B4F">

    <p>
        We prove the result.
    </p>

    <step title="Choose an element">

        <p>
            Let \(x\in A\).
        </p>

    </step>

    <step title="Apply the definition">

        <p>
            By definition, ...
        </p>

    </step>

</proof>
```

### `<proof>`

`colback` controls the proof background.

`coltext` controls the proof text and step numbers.

A proof can contain normal paragraphs, mathematical expressions, steps and figures.

### `<step>`

Creates a numbered step inside a proof.

`title` gives the step heading.

The numbering is generated automatically.

### `<proof-figure>`

Used for figures inside proofs.

An image can be included with:

```html
<proof-figure
    src="assets/example.png"
    caption="An example figure.">
</proof-figure>
```

`src` is the path to the image.

`caption` is optional.

Inline SVG is also supported:

```html
<proof-figure caption="A diagram.">

    <svg>
        ...
    </svg>

</proof-figure>
```

## Table of contents

The table of contents is created with:

```html
<table-of-contents color="#1F6B4F"></table-of-contents>
```

`color` sets its accent colour.

The contents are generated automatically from the sections and subsections in the document.

## Mathematics

MathJax is already included in the template.

Inline mathematics:

```text
\(x^2+y^2=z^2\)
```

Displayed mathematics:

```text
\[
    x^2+y^2=z^2
\]
```

No additional MathJax setup is required.

## Colors

Most components accept a `color` attribute:

```html
color="#1F6B4F"
```

For mathematical environments, the supplied colour is used to generate the lighter and darker shades used throughout the environment.

Proofs use:

```html
colback="#EEF7F2"
coltext="#1F6B4F"
```

## Project files

```text
mark_1/
├── index.html
├── banner.png
│
├── css/
│   ├── banner.css
│   ├── environments.css
│   ├── global.css
│   ├── layout.css
│   ├── main.css
│   ├── navigation.css
│   ├── responsiveness.css
│   ├── section.css
│   ├── sidebar.css
│   └── toc.css
│
└── js/
    ├── banner.js
    ├── environments.js
    ├── navigation.js
    ├── section.js
    ├── sidebar.js
    └── toc.js
```

The `css` folder contains the visual styling.

The `js` folder contains the behaviour and automatic generation of the components.

## Start writing

Copy the `mark_1` folder, open `index.html`, and replace the placeholders with your own content.

The idea is to keep the HTML focused on the mathematics while Mark One takes care of the repetitive presentation.