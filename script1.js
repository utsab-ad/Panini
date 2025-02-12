// DOM Elements
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
const topicsList = document.getElementById('topics-list');
const content = document.getElementById('content');

// Toggle sidebar on mobile
sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('show');
});

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
    if (window.innerWidth < 768 && 
        !sidebar.contains(e.target) && 
        !sidebarToggle.contains(e.target)) {
        sidebar.classList.remove('show');
    }
});

// Render topics in sidebar
function renderTopics() {
    topicsList.innerHTML = sections.map(section => `
        <a style="color:black; hover:" class="nav-link" href="#${section.id}" data-section="${section.id}">
            ${section.title}
        </a>
    `).join('');

    // Add click handlers
    topicsList.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.dataset.section;
            renderSection(sectionId);
            sidebar.classList.remove('show');
            history.pushState(null, '', `#${sectionId}`);
        });
    });
}

// Render a section's content
function renderSection(sectionId) {
    const section = sections.find(s => s.id === sectionId);
    if (!section) return;

    content.innerHTML = `
        <div class="section-title">
            <h2>${section.title}</h2>
            <p class="lead">${section.description}</p>
        </div>
        ${section.programs.map(program => {
            // Create a data attribute to store the code instead of inline onclick
            const programId = `program-${program.id}`;
            return `
                <div class="program" id="${program.id}">
                    <h3 class="program-title">${program.title}</h3>
                    <p class="program-description">${program.description}</p>
                    <div class="code-block">
                        <button class="btn btn-sm btn-outline-secondary copy-button" 
                                data-code="${program.code.replace(/"/g, '&quot;')}"
                                onclick="copyCode(this, this.dataset.code)">
                            Copy
                        </button>
                        <pre><code class="language-c">${program.code}</code></pre>
                        ${program.output ? `
                            <div class="mt-3">
                                <strong>Output:</strong>
                                <pre class="bg-light p-2 rounded"><code>${program.output}</code></pre>
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
        }).join('')}
    `;

    // Highlight code
    Prism.highlightAll();
}

// Change the copyCode function to properly handle code copying
async function copyCode(button, code) {
    try {
        // Decode the escaped template literals
        const decodedCode = code.replace(/\\n/g, '\n').replace(/\\t/g, '\t');
        await navigator.clipboard.writeText(decodedCode);

        // Update button state
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.classList.add('btn-success');
        button.classList.remove('btn-outline-secondary');
        button.disabled = true;

        // Reset button after 2 seconds
        setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('btn-success');
            button.classList.add('btn-outline-secondary');
            button.disabled = false;
        }, 2000);
    } catch (err) {
        console.error('Failed to copy code:', err);
        button.textContent = 'Error!';
        button.classList.add('btn-danger');

        // Reset error state after 2 seconds
        setTimeout(() => {
            button.textContent = 'Copy';
            button.classList.remove('btn-danger');
            button.classList.add('btn-outline-secondary');
        }, 2000);
    }
}

// Initialize
function init() {
    renderTopics();
    
    // Load section from URL hash or default to first section
    const sectionId = window.location.hash.slice(1) || sections[0].id;
    renderSection(sectionId);
}

// Start the app
init();

// Handle browser navigation
window.addEventListener('popstate', () => {
    const sectionId = window.location.hash.slice(1) || sections[0].id;
    renderSection(sectionId);
});