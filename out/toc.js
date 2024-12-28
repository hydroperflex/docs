(() =>
{
    const contentContainer = document.querySelector(".content-container");
    const rootPath = document.querySelector("html").getAttribute("data-root");
    
    // Prepend root path to anchor links at the section navigator
    let sectionNavInnerHTML = `<div style="margin-bottom: 0.7rem; display: flex; flex-direction: column; gap: 1rem"><a href="using-whack/index.html"><b>Using Whack™ engine</b></a><a href="as3-reference/index.html"><b>ActionScript 3 reference</b></a></div><div class="section-nav-ref" data-path="using-whack"><div><b>Using Whack™ engine</b></div><div class="section-list"><div class="nestable-section"><div><div class="empty-connector"></div><a href="using-whack/intro.html"><b>Introduction to Whack™</b></a></div></div><div class="nestable-section"><div><div class="empty-connector"></div><a href="using-whack/using-the-command-line.html"><b>Using the command line tool</b></a></div></div><div class="nestable-section"><div><div class="empty-connector"></div><a href="using-whack/manifest-format.html"><b>The Whack™ manifest format</b></a></div></div><div class="nestable-section"><div><div class="connector"></div><a href="using-whack/building-client-side-apps.html"><b>Building client-side applications</b></a></div><div class="section-list"><div class="nestable-section"><div><div class="empty-connector"></div><a href="using-whack/building-client-side-apps/getting-started.html"><b>Getting started</b></a></div></div><div class="nestable-section"><div><div class="empty-connector"></div><a href="using-whack/building-client-side-apps/scripting-mxml.html"><b>Scripting the MXML application</b></a></div></div></div></div><div class="nestable-section"><div><div class="connector"></div><a href="using-whack/using-mxml.html"><b>Using the MXML language</b></a></div><div class="section-list"><div class="nestable-section"><div><div class="empty-connector"></div><a href="using-whack/using-mxml/mxml-reference.html"><b>MXML reference</b></a></div></div><div class="nestable-section"><div><div class="empty-connector"></div><a href="using-whack/using-mxml/mxml-cheatsheet.html"><b>Scripting the MXML application</b></a></div></div></div></div><div class="nestable-section"><div><div class="connector"></div><a href="using-whack/using-css.html"><b>Using the CSS language</b></a></div><div class="section-list"><div class="nestable-section"><div><div class="empty-connector"></div><a href="using-whack/using-css/css-reference.html"><b>CSS reference</b></a></div></div><div class="nestable-section"><div><div class="empty-connector"></div><a href="using-whack/using-css/css-cheatsheet.html"><b>Scripting the MXML application</b></a></div></div></div></div><div class="nestable-section"><div><div class="connector"></div><a href="using-whack/using-asdoc.html"><b>Using ASDoc documentation</b></a></div><div class="section-list"><div class="nestable-section"><div><div class="empty-connector"></div><a href="using-whack/using-asdoc/asdoc-configuration.html"><b>ASDoc configuration format</b></a></div></div></div></div><div class="nestable-section"><div><div class="connector"></div><a href="using-whack/skinning.html"><b>Skinning the user interface</b></a></div><div class="section-list"><div class="nestable-section"><div><div class="empty-connector"></div><a href="using-whack/skinning/creating-a-theme.html"><b>Creating an user interface theme</b></a></div></div></div></div></div></div><div class="section-nav-ref" data-path="as3-reference"><div><b>ActionScript 3 reference</b></div><div class="section-list"><div class="nestable-section"><div><div class="empty-connector"></div><a href="as3-reference/intro.html"><b>Introduction</b></a></div></div><div class="nestable-section"><div><div class="empty-connector"></div><a href="as3-reference/as3-cheatsheet.html"><b>ActionScript 3 cheatsheet</b></a></div></div><div class="nestable-section"><div><div class="empty-connector"></div><a href="as3-reference/types.html"><b>Types</b></a></div></div><div class="nestable-section"><div><div class="empty-connector"></div><a href="as3-reference/using-configuration-constants.html"><b>Using configuration constants</b></a></div></div><div class="nestable-section"><div><div class="empty-connector"></div><a href="as3-reference/predefined-configuration-constants.html"><b>Predefined configuration constants</b></a></div></div><div class="nestable-section"><div><div class="empty-connector"></div><a href="as3-reference/jsinterop.html"><b>Interoperating with JavaScript</b></a></div></div></div></div>`.replace(/a href="/g, 'a href="' + rootPath);

    const sectionNav = document.createElement("div");
    sectionNav.className = "section-nav";
    sectionNav.innerHTML = sectionNavInnerHTML;
    contentContainer.insertBefore(sectionNav, contentContainer.children[0]);

    const hiddenAnchor = document.createElement("a");
    hiddenAnchor.href = rootPath;
    document.body.appendChild(hiddenAnchor);
    hiddenAnchor.remove();

    // Expand related sections from the table of contents
    const sectionOriginalPath = document.querySelector("html").getAttribute("data-section");
    if (sectionOriginalPath != "")
    {
        const anchors = Array.from(sectionNav.querySelectorAll("a"));
        for (let anchor of anchors)
        {
            let href = anchor.href.replace(/^(\.\.\/)+/, "");
            if (href.startsWith(hiddenAnchor.href))
            {
                href = href.slice(hiddenAnchor.href.length);
            }
            href = href.startsWith("/") ? href.slice(1) : href;
            if (href == sectionOriginalPath)
            {
                let p = anchor.parentElement.parentElement;
                while (p)
                {
                    if (p.classList.contains("nestable-section"))
                    {
                        p.setAttribute("data-open", true);
                    }
                    p = p.parentElement;
                }
                break;
            }
        }
    }

    // Turn visible the current reference
    const referenceOriginalPath = document.querySelector("html").getAttribute("data-reference");
    if (referenceOriginalPath != "")
    {
        const sectionNavRefs = Array.from(sectionNav.querySelectorAll(".section-nav-ref"));
        for (const sectionNavRef of sectionNavRefs)
        {
            if (sectionNavRef.getAttribute("data-path") == referenceOriginalPath)
            {
                sectionNavRef.setAttribute("data-visible", "true");
                break;
            }
        }
    }

    // Handle connector expansion/collapsis
    const connectors = Array.from(sectionNav.querySelectorAll(".connector"));
    for (const connector of connectors)
    {
        connector.addEventListener("click", e => {
            const nestableSec = e.target.parentElement.parentElement;
            nestableSec.setAttribute("data-open", nestableSec.getAttribute("data-open") != "true");
        });
    }
})();