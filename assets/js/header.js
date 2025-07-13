document.addEventListener("DOMContentLoaded", function() {
    const header = document.createElement("header");
    header.innerHTML = `
        <h1><a href="/index.html">AI Copilot Resources</a></h1>
        <nav>
            <a href="/copilot-quest/index.html">Copilot Quest</a>
            <a href="/copilot-quest-game/src/website/index.html">Copilot Quest Game</a>
        </nav>
    `;
    document.body.prepend(header);
});
