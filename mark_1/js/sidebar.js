// sidebar initialization
document.addEventListener("DOMContentLoaded", () => {
    initializeSidebar();
});

// build sidebar
function initializeSidebar() {
    const sidebars =
        [...document.querySelectorAll("sidebar")];

    if (!sidebars.length) return;

    const firstSidebar = sidebars[0];

    const color =
        firstSidebar.getAttribute("color");

    const sidebar =
        document.createElement("aside");

    sidebar.className = "sidebar";

    if (color) {
        sidebar.style.setProperty(
            "--sidebar-color",
            color
        );
    }

    sidebars.forEach((source, index) => {
        if (index > 0) {
            const divider =
                document.createElement("hr");

            divider.className =
                "sidebar-divider";

            sidebar.appendChild(divider);
        }

        sidebar.appendChild(
            createSidebarGroup(source)
        );
    });

    sidebars.forEach(source => {
        source.remove();
    });

    firstSidebar.parentNode.insertBefore(
        sidebar,
        firstSidebar.nextSibling
    );
}

// create sidebar group
function createSidebarGroup(source) {
    const group =
        document.createElement("section");

    group.className = "sidebar-group";

    const title =
        source.getAttribute("title");

    if (title) {
        const heading =
            document.createElement("h2");

        heading.textContent = title;

        group.appendChild(heading);
    }

    const list =
        document.createElement("ul");

    list.className = "sidebar-items";

    const items =
        source.querySelectorAll(":scope > item");

    items.forEach(item => {
        const li =
            document.createElement("li");

        const link =
            document.createElement("a");

        link.href =
            item.getAttribute("href") || "#";

        link.textContent =
            item.getAttribute("title") || "";

        li.appendChild(link);
        list.appendChild(li);
    });

    group.appendChild(list);

    return group;
}