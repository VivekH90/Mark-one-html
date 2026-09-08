// environment initialization
document.addEventListener("DOMContentLoaded", () => {
    initializeEnvironments();
});

// environment types
const environmentTypes = [
    "definition",
    "theorem",
    "lemma",
    "proposition",
    "corollary",
    "axiom"
];

// environment counters
const counters = {
    definition: 0,
    theorem: 0,
    lemma: 0,
    proposition: 0,
    corollary: 0,
    axiom: 0
};

// initialize environments
function initializeEnvironments() {
    environmentTypes.forEach(type => {
        const environments =
            document.querySelectorAll(type);

        environments.forEach(environment => {
            buildEnvironment(
                environment,
                type
            );
        });
    });
}

// build environment
function buildEnvironment(environment, type) {
    counters[type]++;

    const number = counters[type];
    const title =
        environment.getAttribute("title") || "";

    const color =
        environment.getAttribute("color");

    const itemColor =
        environment.getAttribute("item-color");

    environment.style.setProperty(
        "--env-color",
        color || getDefaultColor(type)
    );

    environment.style.setProperty(
        "--env-item-color",
        itemColor || getDefaultColor(type)
    );

    const box =
        document.createElement("div");

    box.className =
        `math-environment ${type}-box`;

    const header =
        document.createElement("div");

    header.className =
        "environment-header";

    const heading =
        document.createElement("div");

    heading.className =
        "environment-heading";

    const numberElement =
        document.createElement("span");

    numberElement.className =
        "environment-number";

    numberElement.textContent =
        number;

    const name =
        document.createElement("span");

    name.className =
        "environment-name";

    name.textContent =
        title;

    const tag =
        document.createElement("span");

    tag.className =
        "environment-tag";

    tag.textContent =
        capitalize(type);

    heading.appendChild(numberElement);
    heading.appendChild(name);

    header.appendChild(heading);
    header.appendChild(tag);

    const content =
        document.createElement("div");

    content.className =
        "environment-content";

    const children =
        [...environment.children];

    children.forEach(child => {
        if (child.tagName.toLowerCase() === "r-item") {
            addRItem(
                child,
                content
            );
        } else {
            content.appendChild(
                child.cloneNode(true)
            );
        }
    });

    box.appendChild(header);
    box.appendChild(content);

    environment.replaceWith(box);
}

// r-item
function addRItem(item, content) {
    const wrapper =
        document.createElement("div");

    wrapper.className =
        "environment-item";

    const number =
        document.createElement("div");

    number.className =
        "environment-number-circle";

    const index =
        content.querySelectorAll(
            ".environment-item"
        ).length + 1;

    number.textContent = index;

    const text =
        document.createElement("div");

    text.className =
        "environment-item-text";

    [...item.childNodes].forEach(node => {
        text.appendChild(
            node.cloneNode(true)
        );
    });

    wrapper.appendChild(number);
    wrapper.appendChild(text);

    content.appendChild(wrapper);
}

// default colors
function getDefaultColor(type) {
    const colors = {
        definition: "#2F9672",
        theorem: "#3F6FA0",
        lemma: "#765A75",
        proposition: "#765A75",
        corollary: "#B77D69",
        axiom: "#B77D69"
    };

    return colors[type];
}

// capitalize
function capitalize(text) {
    return text.charAt(0).toUpperCase() +
           text.slice(1);
}