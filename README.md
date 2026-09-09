# Mark One

Mark One is an HTML template designed particularly for writing mathematical notes.

The purpose of the project is to make mathematical notes easier to write in HTML without having to manually create the styling and structure of every definition, theorem, proof, section, sidebar, and other component.

Mark One provides custom HTML elements for mathematical environments such as:

- definitions
- theorems
- lemmas
- propositions
- corollaries
- axioms
- proofs

JavaScript handles the generation and numbering of many components, while CSS controls their appearance.

MathJax is included for writing mathematical notation.

---

# How to use it

The easiest way to use Mark One is to clone the repository:

```bash
git clone https://github.com/VivekH90/Mark-one-html.git
```

Then use the `mark_1` folder as the starting point for your own notes.

The main file you will normally edit is:

```text
mark_1/index.html
```

The CSS and JavaScript files provide the styling and functionality, so normally you should keep the folder structure unchanged.

---

# File structure

The basic structure of the project is:

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

When creating a new note, it is recommended to copy the `mark_1` folder and use it as a template.

---

# Starting a new note

The easiest way to start a new note is:

1. Clone the Mark One repository.
2. Copy the `mark_1` folder.
3. Keep the `css` and `js` folders.
4. Add the banner image if you want one.
5. Open `index.html`.
6. Replace the placeholder content with your own note.

The main work should normally be done inside:

```text
index.html
```

The CSS and JavaScript files should not need to be modified unless you want to change the design or functionality of Mark One itself.

---

# Banner

The banner is created using the `<banner>` element.

```html
<banner
    title="Real Analysis"
    color="#1F6B4F">
</banner>
```

## Attributes

### `title`

The `title` attribute specifies the text displayed on the banner.

For example:

```html
title="Real Analysis"
```

### `color`

The `color` attribute specifies the main accent colour of the banner.

For example:

```html
color="#1F6B4F"
```

---

## Banner image

The banner image must be named:

```text
banner.png
```

and must be placed directly inside the `mark_1` folder:

```text
mark_1/banner.png
```

The current banner system automatically looks for a file named:

```text
banner.png
```

Therefore, if the file is named something else, the banner image will not load unless the JavaScript is modified.

---

# Navigation

The navigation bar is written using:

```html
<nav class="navbar">

    <home
        color=""
        href="">
    </home>

    <date>
    </date>

    <github
        color=""
        href="">
    </github>

</nav>
```

The navigation system currently uses three custom elements:

- `<home>`
- `<date>`
- `<github>`

---

# `<home>`

The `<home>` element creates the home link.

Example:

```html
<home
    color="#1F6B4F"
    href="index.html">

    Home

</home>
```

## Attributes

### `href`

Specifies where the Home link should go.

For example:

```html
href="index.html"
```

or:

```html
href="../index.html"
```

depending on the location of the current page.

### `color`

Specifies the colour used by the element.

For example:

```html
color="#1F6B4F"
```

The text placed inside the element becomes the displayed text.

```html
<home
    color="#1F6B4F"
    href="index.html">

    Home

</home>
```

---

# `<date>`

The `<date>` element displays the date of the note.

Example:

```html
<date>

    9 September 2026

</date>
```

The content inside the element is used as the displayed date.

---

# `<github>`

The `<github>` element creates a GitHub link.

Example:

```html
<github
    color="#1F6B4F"
    href="https://github.com/VivekH90/Mark-one-html">

    GitHub

</github>
```

## Attributes

### `href`

Specifies the destination of the GitHub link.

For example:

```html
href="https://github.com/VivekH90/Mark-one-html"
```

### `color`

Specifies the colour of the GitHub element.

---

# Sidebar

The sidebar is created using the `<sidebar>` element.

```html
<sidebar
    color="#1F6B4F"
    search="true">

    ...

</sidebar>
```

The sidebar can contain groups and items.

The basic structure is:

```html
<sidebar
    color="#1F6B4F"
    search="true">

    <group title="">

        <item
            title=""
            href="">
        </item>

    </group>

</sidebar>
```

---

## Sidebar attributes

### `color`

The `color` attribute controls the main accent colour of the sidebar.

Example:

```html
color="#1F6B4F"
```

### `search`

The `search` attribute determines whether the search bar is enabled.

To enable the search bar:

```html
search="true"
```

Example:

```html
<sidebar
    color="#1F6B4F"
    search="true">
</sidebar>
```

---

# `<group>`

A `<group>` creates a category inside the sidebar.

Example:

```html
<group title="Related Notes">

</group>
```

## Attributes

### `title`

The `title` attribute specifies the name of the group.

Example:

```html
title="Related Notes"
```

A sidebar can contain multiple groups.

For example:

```html
<sidebar
    color="#1F6B4F"
    search="true">

    <group title="Real Analysis">

        ...

    </group>

    <group title="Topology">

        ...

    </group>

</sidebar>
```

---

# `<item>`

An `<item>` represents a link inside a sidebar group.

Example:

```html
<item
    title="Sequences and Limits"
    href="sequences.html">
</item>
```

## Attributes

### `title`

The `title` attribute specifies the text displayed in the sidebar.

Example:

```html
title="Sequences and Limits"
```

### `href`

The `href` attribute specifies where the link leads.

Example:

```html
href="sequences.html"
```

---

## Complete sidebar example

```html
<sidebar
    color="#1F6B4F"
    search="true">

    <group title="Related Notes">

        <item
            title="Ordered Fields"
            href="ordered-fields.html">
        </item>

        <item
            title="Sequences and Limits"
            href="sequences.html">
        </item>

    </group>

</sidebar>
```

---

# Main document

The actual note is written inside the main document.

```html
<main
    id="document"
    class="note-content">

    ...

</main>
```

The content of the mathematical note should normally be placed inside this element.

---

# Breadcrumbs

Breadcrumbs show where the current note belongs in a hierarchy.

They are written inside:

```html
<div class="breadcrumbs">

</div>
```

For example:

```html
<div class="breadcrumbs">

    <a href="index.html">

        Home

    </a>

    <span>

        ›

    </span>

    <a href="real-analysis.html">

        Real Analysis

    </a>

    <span>

        ›

    </span>

    <span>

        Sequences

    </span>

</div>
```

This can represent a hierarchy such as:

```text
Home › Real Analysis › Sequences
```

---

# Main title

The title of the note is written using:

```html
<h1 class="main-title">

    Title of the note

</h1>
```

For example:

```html
<h1 class="main-title">

    Compact Sets

</h1>
```

This is the main title of the page.

---

# Introduction

The introductory paragraph can be written using:

```html
<p class="intro-paragraph">

    Write the introduction here.

</p>
```

For example:

```html
<p class="intro-paragraph">

    Compactness is one of the central ideas of topology and analysis.

</p>
```

---

# Sections

Sections are written using the `<section>` element.

```html
<section
    id=""
    title=""
    color="">

    ...

</section>
```

For example:

```html
<section
    id="compactness"
    title="Compactness"
    color="#1F6B4F">

    ...

</section>
```

---

## Section attributes

### `id`

The `id` identifies the section.

Example:

```html
id="compactness"
```

It should be unique.

### `title`

The `title` attribute specifies the title of the section.

Example:

```html
title="Compactness"
```

### `color`

The `color` attribute specifies the colour used by the section.

Example:

```html
color="#1F6B4F"
```

---

## Section numbering

Sections are automatically numbered by the section system.

The numbering can appear in the form:

```text
§ 1 Compactness
§ 2 Open Covers
§ 3 Compact Sets
```

You only need to provide the section title.

---

# Subsections

Subsections are written using the `<subsection>` element.

A subsection should normally be placed inside a section.

```html
<subsection
    id=""
    title=""
    color="">

    ...

</subsection>
```

For example:

```html
<section
    id="compactness"
    title="Compactness"
    color="#1F6B4F">

    <subsection
        id="open-covers"
        title="Open Covers"
        color="#1F6B4F">

        ...

    </subsection>

</section>
```

---

## Subsection attributes

### `id`

Identifies the subsection.

Example:

```html
id="open-covers"
```

### `title`

Specifies the title of the subsection.

Example:

```html
title="Open Covers"
```

### `color`

Specifies the colour of the subsection.

Example:

```html
color="#1F6B4F"
```

---

## Subsection numbering

Subsections are automatically numbered relative to their parent section.

For example:

```text
1.1 Open Covers
1.2 Finite Subcovers
1.3 Compactness
```

---

# Mathematical environments

Mark One provides mathematical environments for writing structured mathematical notes.

The available environments include:

```html
<definition>
<theorem>
<lemma>
<proposition>
<corollary>
<axiom>
<proof>
```

These elements are processed by `environments.js`.

Their appearance is controlled by `environments.css`.

---

# `<definition>`

The `<definition>` element is used to write a mathematical definition.

Basic structure:

```html
<definition
    title=""
    color="">

    ...

</definition>
```

Example:

```html
<definition
    title="Bounded Above"
    color="#1F6B4F">

    <p>

        A subset \(A\subseteq\mathbb{R}\) is bounded above if
        there exists \(M\in\mathbb{R}\) such that

        \[
            a\leq M
        \]

        for every \(a\in A\).

    </p>

</definition>
```

---

## Definition attributes

### `title`

Specifies the title of the definition.

Example:

```html
title="Bounded Above"
```

### `color`

Specifies the main colour of the definition.

Example:

```html
color="#1F6B4F"
```

The environment system uses the supplied colour to construct the appearance of the definition.

---

# `<r-item>`

The `<r-item>` element is used for numbered items inside an environment.

Example:

```html
<r-item>

    <p>

        First statement.

    </p>

</r-item>
```

Multiple items can be used:

```html
<definition
    title="Example"
    color="#1F6B4F">

    <r-item>

        <p>

            First statement.

        </p>

    </r-item>

    <r-item>

        <p>

            Second statement.

        </p>

    </r-item>

</definition>
```

The items are automatically numbered.

---

# `<theorem>`

The `<theorem>` element is used to write a mathematical theorem.

Basic structure:

```html
<theorem
    title=""
    color="">

    ...

</theorem>
```

Example:

```html
<theorem
    title="Nested Interval Theorem"
    color="#1F6B4F">

    <p>

        Let

        \[
            I_1\supseteq I_2\supseteq I_3\supseteq\cdots
        \]

        be a nested sequence of closed intervals whose lengths
        tend to zero. Then there exists exactly one point belonging
        to every interval.

    </p>

</theorem>
```

---

## Theorem attributes

### `title`

Specifies the name of the theorem.

### `color`

Specifies the main colour of the theorem environment.

---

# `<lemma>`

The `<lemma>` element is used to write a lemma.

A lemma is usually a result used in proving another result.

Basic structure:

```html
<lemma
    title=""
    color="">

    ...

</lemma>
```

Example:

```html
<lemma
    title="Upper Bound Lemma"
    color="#1F6B4F">

    <p>

        Write the statement of the lemma here.

    </p>

</lemma>
```

---

# `<proposition>`

The `<proposition>` element is used to write a mathematical proposition.

Basic structure:

```html
<proposition
    title=""
    color="">

    ...

</proposition>
```

Example:

```html
<proposition
    title="A Basic Property"
    color="#1F6B4F">

    <p>

        Write the proposition here.

    </p>

</proposition>
```

---

# `<corollary>`

The `<corollary>` element is used to write a corollary.

A corollary is usually a result that follows relatively directly from another theorem or proposition.

Basic structure:

```html
<corollary
    title=""
    color="">

    ...

</corollary>
```

Example:

```html
<corollary
    title="Immediate Consequence"
    color="#1F6B4F">

    <p>

        Write the corollary here.

    </p>

</corollary>
```

---

# `<axiom>`

The `<axiom>` element is used to write an axiom.

Basic structure:

```html
<axiom
    title=""
    color="">

    ...

</axiom>
```

Example:

```html
<axiom
    title="Axiom of Completeness"
    color="#1F6B4F">

    <p>

        Every nonempty subset of \(\mathbb{R}\) that is bounded above
        has a least upper bound.

    </p>

</axiom>
```

---

# `<proof>`

The `<proof>` element is used to write a mathematical proof.

Basic structure:

```html
<proof
    colback=""
    coltext="">

    ...

</proof>
```

A proof can contain:

- normal paragraphs
- numbered steps
- figures
- images
- SVG diagrams
- mathematical expressions

---

## Proof attributes

### `colback`

Specifies the background colour of the proof.

Example:

```html
colback="#EEF7F2"
```

### `coltext`

Specifies the main text and numbering colour.

Example:

```html
coltext="#1F6B4F"
```

---

## Basic proof example

```html
<proof
    colback="#EEF7F2"
    coltext="#1F6B4F">

    <p>

        We prove the result.

    </p>

</proof>
```

---

# `<step>`

The `<step>` element creates a numbered step inside a proof.

Basic structure:

```html
<step
    title="">

    ...

</step>
```

Example:

```html
<step title="Choose an element">

    <p>

        Let \(x\in A\).

    </p>

</step>
```

The proof system automatically numbers the steps.

---

## Step attributes

### `title`

The `title` attribute specifies the name of the step.

Example:

```html
title="Choose an element"
```

---

## Complete proof example

```html
<proof
    colback="#EEF7F2"
    coltext="#1F6B4F">

    <p>

        We prove the required result.

    </p>

    <step title="Choose \(x\in A\)">

        <p>

            Let \(x\in A\).

        </p>

    </step>

    <step title="Apply the definition">

        <p>

            By the definition,

            \[
                x\leq M.
            \]

        </p>

    </step>

    <step title="Conclude">

        <p>

            Therefore the required result follows.

        </p>

    </step>

</proof>
```

The steps are automatically numbered.

---

# `<proof-figure>`

The `<proof-figure>` element is used to place a figure inside a proof.

A figure can be an image or an SVG diagram.

---

## Using an image

Example:

```html
<proof-figure
    src="assets/example.png"
    caption="An example figure.">
</proof-figure>
```

---

## Attributes

### `src`

Specifies the path to the image.

Example:

```html
src="assets/example.png"
```

The path must point to the actual location of the image.

### `caption`

Specifies the caption of the figure.

Example:

```html
caption="An example figure."
```

If a caption is provided, it is displayed below the figure.

---

## Figure without a caption

If no caption is needed, leave the caption empty or omit it.

For example:

```html
<proof-figure
    src="assets/example.png">
</proof-figure>
```

---

# SVG figures

An SVG can also be placed directly inside `<proof-figure>`.

Example:

```html
<proof-figure
    caption="A mathematical diagram">

    <svg>

        <!-- SVG code goes here -->

    </svg>

</proof-figure>
```

This allows diagrams to be written directly in HTML rather than using an external image.

---

# Table of contents

The table of contents is created using:

```html
<table-of-contents
    color="">
</table-of-contents>
```

Example:

```html
<table-of-contents
    color="#1F6B4F">
</table-of-contents>
```

The table of contents is generated automatically from the sections and subsections of the document.

The `color` attribute specifies the main colour of the table of contents.

---

# Mathematics

MathJax is already included in the template.

There is no need to add MathJax separately.

---

## Inline mathematics

Inline mathematics is written using:

```text
\(x^2+y^2=z^2\)
```

For example:

```html
<p>

    Let \(x\in\mathbb{R}\).

</p>
```

---

## Display mathematics

Displayed mathematics is written using:

```text
\[
    x^2+y^2=z^2
\]
```

For example:

```html
\[
    \sup A=M
\]
```

MathJax renders the mathematical expressions when the page loads.

---

# Colors

Many Mark One elements use a `color` attribute.

For example:

```html
color="#1F6B4F"
```

This colour is used as the main colour of the component.

For mathematical environments, the environment system can derive different shades from the supplied colour.

This allows the same colour to be used consistently for:

- environment headings
- number circles
- tags
- borders
- accents

without manually specifying every individual colour.

---

# Basic document structure

A basic Mark One document has the following structure:

```html
<banner
    title=""
    color="">
</banner>

<nav class="navbar">

    <home
        color=""
        href="">
    </home>

    <date>
    </date>

    <github
        color=""
        href="">
    </github>

</nav>

<div class="main-layout">

    <sidebar
        color=""
        search="true">

    </sidebar>

    <main
        id="document"
        class="note-content">

        <!-- note content -->

    </main>

    <table-of-contents
        color="">
    </table-of-contents>

</div>
```

---

# Blank template

A blank `index.html` template is provided in the project.

The idea is to use this as the starting point for a new note.

The main components are:

```text
index.html
│
├── banner
│
├── navigation
│   ├── home
│   ├── date
│   └── github
│
├── main-layout
│   ├── sidebar
│   │   ├── group
│   │   └── item
│   │
│   ├── document
│   │   ├── breadcrumbs
│   │   ├── main-title
│   │   ├── intro-paragraph
│   │   ├── section
│   │   ├── subsection
│   │   └── mathematical environments
│   │
│   └── table-of-contents
│
└── MathJax
```

---

# Important information

## Keep the folder structure

The JavaScript and CSS files are loaded using paths such as:

```html
<link rel="stylesheet" href="css/main.css">
```

and:

```html
<script src="js/environments.js" defer></script>
```

Therefore, if you move or rename the `css` or `js` folders, you must also update these paths.

---

## Do not rename `banner.png`

The banner system currently expects the banner image to be named:

```text
banner.png
```

It should be placed inside the same main folder as `index.html`.

```text
mark_1/
├── index.html
├── banner.png
├── css/
└── js/
```

---

## Most notes only require editing `index.html`

For normal use, you should mainly edit:

```text
index.html
```

The CSS files define the appearance.

The JavaScript files define the behaviour and automatically generate components such as:

- mathematical environments
- section numbering
- subsection numbering
- sidebar content
- table of contents
- navigation components
- proof steps

---

# The basic philosophy

Mark One attempts to separate the mathematical structure of a note from its presentation.

Instead of manually creating boxes, number circles, headings, and navigation elements every time, the writer specifies the structure of the mathematics.

For example:

```html
<definition
    title="Compact Set"
    color="#1F6B4F">

    <p>

        A set \(K\) is compact if every open cover
        of \(K\) has a finite subcover.

    </p>

</definition>
```

The HTML describes what the object is:

```text
definition
```

while the JavaScript and CSS determine how it is displayed.

Similarly:

```html
<theorem>

    ...

</theorem>
```

describes a theorem.

```html
<proof>

    ...

</proof>
```

describes a proof.

```html
<section>

    ...

</section>
```

describes a section.

The goal is to make mathematical notes readable both as source code and as a webpage.

---

# Status

Mark One is currently under development.

The structure, commands, styling, and environments may change as the project develops.