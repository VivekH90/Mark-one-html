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
function buildEnvironment(
    environment,
    type
) {
    counters[type]++;

    const title =
        environment.getAttribute("title") || "";

    const color =
        environment.getAttribute("color") ||
        getDefaultColor(type);

    const box =
        document.createElement("div");

    box.className =
        `math-environment ${type}-box`;

    // environment colors
    box.style.setProperty(
        "--env-color",
        color
    );

    box.style.setProperty(
        "--env-dark-color",
        darkenColor(color, 0.45)
    );

    box.style.setProperty(
        "--env-light-color",
        mixColor(
            color,
            "#FFFFFF",
            0.92
        )
    );

    box.style.setProperty(
        "--env-border-color",
        mixColor(
            color,
            "#FFFFFF",
            0.70
        )
    );

    // environment header
    const header =
        document.createElement("div");

    header.className =
        "environment-header";

    const heading =
        document.createElement("div");

    heading.className =
        "environment-heading";

    // environment name
    const numberElement =
        document.createElement("span");

    numberElement.className =
        "environment-number";

    numberElement.textContent =
        capitalize(type);

    const name =
        document.createElement("span");

    name.className =
        "environment-name";

    name.textContent =
        `(${title})`;

    heading.appendChild(
        numberElement
    );

    heading.appendChild(
        name
    );

    // environment tag
    const tag =
        document.createElement("span");

    tag.className =
        "environment-tag";

    tag.textContent =
        capitalize(type);

    header.appendChild(
        heading
    );

    header.appendChild(
        tag
    );

    // environment content
    const content =
        document.createElement("div");

    content.className =
        "environment-content";

    const children =
        [...environment.children];

    children.forEach(child => {

        if (
            child.tagName.toLowerCase() ===
            "r-item"
        ) {
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

    // render mathematics
    renderEnvironmentMath(box);
}

// r-item
function addRItem(
    item,
    content
) {
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

    number.textContent =
        index;

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

// darken color
function darkenColor(
    color,
    factor
) {
    const rgb =
        hexToRGB(color);

    if (!rgb) return color;

    return rgbToHex(
        rgb.r * factor,
        rgb.g * factor,
        rgb.b * factor
    );
}

// mix two colors
function mixColor(
    color1,
    color2,
    amount
) {
    const rgb1 =
        hexToRGB(color1);

    const rgb2 =
        hexToRGB(color2);

    if (!rgb1 || !rgb2) {
        return color1;
    }

    return rgbToHex(
        rgb1.r * (1 - amount) +
        rgb2.r * amount,

        rgb1.g * (1 - amount) +
        rgb2.g * amount,

        rgb1.b * (1 - amount) +
        rgb2.b * amount
    );
}

// hex to rgb
function hexToRGB(color) {
    let hex =
        color.replace("#", "");

    if (hex.length === 3) {
        hex =
            hex
                .split("")
                .map(value => value + value)
                .join("");
    }

    if (hex.length !== 6) {
        return null;
    }

    return {
        r: parseInt(
            hex.slice(0, 2),
            16
        ),
        g: parseInt(
            hex.slice(2, 4),
            16
        ),
        b: parseInt(
            hex.slice(4, 6),
            16
        )
    };
}

// rgb to hex
function rgbToHex(
    r,
    g,
    b
) {
    return "#" + [
        r,
        g,
        b
    ]
        .map(value =>
            Math.round(value)
                .toString(16)
                .padStart(2, "0")
        )
        .join("");
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

// render environment mathematics
function renderEnvironmentMath(box) {
    if (
        window.MathJax &&
        window.MathJax.startup
    ) {
        MathJax.startup.promise.then(() => {
            MathJax.typesetPromise([
                box
            ]);
        });
    }
}

// capitalize
function capitalize(text) {
    return text.charAt(0).toUpperCase() +
           text.slice(1);
}