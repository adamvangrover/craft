document.addEventListener('DOMContentLoaded', () => {
    const moduleNavigationList = document.getElementById('module-navigation-list');
    const contentArea = document.getElementById('content-area');
    const currentYearSpan = document.getElementById('current-year');

    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // All paths are relative to index.html at the repository root.
    const courseStructure = [
        {
            part: "Course Overview",
            modules: [
                { name: "README - Course Introduction", path: "corporate-credit-risk-analyst-training/README.md" }
            ]
        },
        {
            part: "Part 1: The Foundations",
            modules: [
                {
                    name: "Module 1: Accounting & Financial Statement Analysis",
                    files: [
                        { label: "Main Content", path: "corporate-credit-risk-analyst-training/modules/01-foundations/01-accounting-and-financial-statement-analysis.md" },
                        { label: "Learning Materials", path: "corporate-credit-risk-analyst-training/modules/01-foundations/01-accounting-learning-materials.md" },
                        { label: "Quiz", path: "corporate-credit-risk-analyst-training/modules/01-foundations/quizzes/accounting-quiz.md" },
                        { label: "Quiz Answers", path: "corporate-credit-risk-analyst-training/modules/01-foundations/quizzes/accounting-quiz-answers.md" },
                        { label: "Teacher Notes", path: "corporate-credit-risk-analyst-training/modules/01-foundations/01-accounting-teacher-notes.md", type: "notes" },
                        { label: "Developer Notes", path: "corporate-credit-risk-analyst-training/modules/01-foundations/01-accounting-developer-notes.md", type: "notes" }
                    ]
                },
                {
                    name: "Module 2: Financial Analysis & Modeling",
                    files: [
                        { label: "Main Content", path: "corporate-credit-risk-analyst-training/modules/01-foundations/02-financial-analysis-and-modeling.md" },
                        { label: "Learning Materials", path: "corporate-credit-risk-analyst-training/modules/01-foundations/02-modeling-learning-materials.md" },
                        { label: "Quiz", path: "corporate-credit-risk-analyst-training/modules/01-foundations/quizzes/modeling-quiz.md" },
                        { label: "Quiz Answers", path: "corporate-credit-risk-analyst-training/modules/01-foundations/quizzes/modeling-quiz-answers.md" },
                        { label: "Teacher Notes", path: "corporate-credit-risk-analyst-training/modules/01-foundations/02-modeling-teacher-notes.md", type: "notes" },
                        { label: "Developer Notes", path: "corporate-credit-risk-analyst-training/modules/01-foundations/02-modeling-developer-notes.md", type: "notes" }
                    ]
                }
            ]
        },
        {
            part: "Part 2: Understanding the Market",
            modules: [
                {
                    name: "Module 3: Capital Markets & Leveraged Loans",
                    files: [
                        { label: "Main Content", path: "corporate-credit-risk-analyst-training/modules/02-understanding-the-market/03-capital-markets-and-leveraged-loans.md" },
                        { label: "Learning Materials", path: "corporate-credit-risk-analyst-training/modules/02-understanding-the-market/03-capital-markets-learning-materials.md" },
                        { label: "Teacher Notes", path: "corporate-credit-risk-analyst-training/modules/02-understanding-the-market/03-capital-markets-teacher-notes.md", type: "notes" },
                        { label: "Developer Notes", path: "corporate-credit-risk-analyst-training/modules/02-understanding-the-market/03-capital-markets-developer-notes.md", type: "notes" }
                    ]
                },
                {
                    name: "Module 4: Industry & Competitive Analysis",
                    files: [
                        { label: "Main Content", path: "corporate-credit-risk-analyst-training/modules/02-understanding-the-market/04-industry-analysis.md" },
                        { label: "Learning Materials", path: "corporate-credit-risk-analyst-training/modules/02-understanding-the-market/04-industry-analysis-learning-materials.md" },
                        { label: "Case Study", path: "corporate-credit-risk-analyst-training/modules/02-understanding-the-market/case-studies/industry-analysis-case-study.md" },
                        { label: "Case Study Guidance", path: "corporate-credit-risk-analyst-training/modules/02-understanding-the-market/case-studies/industry-analysis-case-study-guidance.md" },
                        { label: "Teacher Notes", path: "corporate-credit-risk-analyst-training/modules/02-understanding-the-market/04-industry-analysis-teacher-notes.md", type: "notes" },
                        { label: "Developer Notes", path: "corporate-credit-risk-analyst-training/modules/02-understanding-the-market/04-industry-analysis-developer-notes.md", type: "notes" }
                    ]
                }
            ]
        },
        {
            part: "Part 3: The Analyst's Craft",
            modules: [
                {
                    name: "Module 5: Business Writing & Grammar",
                    files: [
                        { label: "Main Content", path: "corporate-credit-risk-analyst-training/modules/03-the-analysts-craft/05-business-writing-and-grammar.md" },
                        { label: "Learning Materials", path: "corporate-credit-risk-analyst-training/modules/03-the-analysts-craft/05-business-writing-learning-materials.md" },
                        { label: "Teacher Notes", path: "corporate-credit-risk-analyst-training/modules/03-the-analysts-craft/05-business-writing-teacher-notes.md", type: "notes" },
                        { label: "Developer Notes", path: "corporate-credit-risk-analyst-training/modules/03-the-analysts-craft/05-business-writing-developer-notes.md", type: "notes" }
                    ]
                },
                {
                    name: "Module 6: Critical Thinking & Forming a Narrative",
                    files: [
                        { label: "Main Content", path: "corporate-credit-risk-analyst-training/modules/03-the-analysts-craft/06-critical-thinking-and-forming-a-narrative.md" },
                        { label: "Learning Materials", path: "corporate-credit-risk-analyst-training/modules/03-the-analysts-craft/06-critical-thinking-learning-materials.md" },
                        { label: "Case Study Guidance", path: "corporate-credit-risk-analyst-training/modules/03-the-analysts-craft/case-studies/precision-parts-inc-case-study-guidance.md" },
                        { label: "Teacher Notes", path: "corporate-credit-risk-analyst-training/modules/03-the-analysts-craft/06-critical-thinking-teacher-notes.md", type: "notes" },
                        { label: "Developer Notes", path: "corporate-credit-risk-analyst-training/modules/03-the-analysts-craft/06-critical-thinking-developer-notes.md", type: "notes" }
                    ]
                }
            ]
        },
        {
            part: "Part 4: The Credit Lifecycle",
            modules: [
                {
                    name: "Module 7: Shared National Credit (SNC) Overview",
                    files: [
                        { label: "Main Content", path: "corporate-credit-risk-analyst-training/modules/04-the-credit-lifecycle/07-shared-national-credit-overview.md" },
                        { label: "Learning Materials", path: "corporate-credit-risk-analyst-training/modules/04-the-credit-lifecycle/07-snc-learning-materials.md" },
                        { label: "Teacher Notes", path: "corporate-credit-risk-analyst-training/modules/04-the-credit-lifecycle/07-snc-teacher-notes.md", type: "notes" },
                        { label: "Developer Notes", path: "corporate-credit-risk-analyst-training/modules/04-the-credit-lifecycle/07-snc-developer-notes.md", type: "notes" }
                    ]
                },
                {
                    name: "Module 8: Underwriting New Issuers",
                    files: [
                        { label: "Main Content", path: "corporate-credit-risk-analyst-training/modules/04-the-credit-lifecycle/08-underwriting-new-issuers.md" },
                        { label: "Learning Materials", path: "corporate-credit-risk-analyst-training/modules/04-the-credit-lifecycle/08-underwriting-learning-materials.md" },
                        { label: "Teacher Notes", path: "corporate-credit-risk-analyst-training/modules/04-the-credit-lifecycle/08-underwriting-teacher-notes.md", type: "notes" },
                        { label: "Developer Notes", path: "corporate-credit-risk-analyst-training/modules/04-the-credit-lifecycle/08-underwriting-developer-notes.md", type: "notes" }
                    ]
                },
                {
                    name: "Module 9: LBOs & M&A Analysis",
                    files: [
                        { label: "Main Content", path: "corporate-credit-risk-analyst-training/modules/04-the-credit-lifecycle/09-lbos-and-m-and-a-analysis.md" },
                        { label: "Learning Materials", path: "corporate-credit-risk-analyst-training/modules/04-the-credit-lifecycle/09-lbo-ma-learning-materials.md" },
                        { label: "Teacher Notes", path: "corporate-credit-risk-analyst-training/modules/04-the-credit-lifecycle/09-lbo-ma-teacher-notes.md", type: "notes" },
                        { label: "Developer Notes", path: "corporate-credit-risk-analyst-training/modules/04-the-credit-lifecycle/09-lbo-ma-developer-notes.md", type: "notes" }
                    ]
                },
                {
                    name: "Module 10: Ongoing Credit Monitoring & Portfolio Review",
                    files: [
                        { label: "Main Content", path: "corporate-credit-risk-analyst-training/modules/04-the-credit-lifecycle/10-ongoing-credit-monitoring.md" },
                        { label: "Learning Materials", path: "corporate-credit-risk-analyst-training/modules/04-the-credit-lifecycle/10-monitoring-learning-materials.md" },
                        { label: "Teacher Notes", path: "corporate-credit-risk-analyst-training/modules/04-the-credit-lifecycle/10-monitoring-teacher-notes.md", type: "notes" },
                        { label: "Developer Notes", path: "corporate-credit-risk-analyst-training/modules/04-the-credit-lifecycle/10-monitoring-developer-notes.md", type: "notes" }
                    ]
                }
            ]
        },
        {
            part: "Part 5: The Future of Risk Management",
            modules: [
                {
                    name: "Module 11: The Future of Risk Management & AI",
                    files: [
                        { label: "Main Content", path: "corporate-credit-risk-analyst-training/modules/05-future-of-risk-management/11-future-of-risk-and-ai.md" },
                        { label: "Learning Materials", path: "corporate-credit-risk-analyst-training/modules/05-future-of-risk-management/11-ai-risk-learning-materials.md" },
                        { label: "Teacher Notes", path: "corporate-credit-risk-analyst-training/modules/05-future-of-risk-management/11-ai-risk-teacher-notes.md", type: "notes" },
                        { label: "Developer Notes", path: "corporate-credit-risk-analyst-training/modules/05-future-of-risk-management/11-ai-risk-developer-notes.md", type: "notes" }
                    ]
                }
            ]
        },
        {
            part: "Part 6: Advanced Topics",
            modules: [
                {
                    name: "Module 12: Advanced Financial Statement Analysis & QoE",
                    files: [
                        { label: "Main Content", path: "corporate-credit-risk-analyst-training/modules/06-advanced-topics/12-advanced-financial-statement-analysis-qoe.md" },
                        { label: "Learning Materials", path: "corporate-credit-risk-analyst-training/modules/06-advanced-topics/12-advanced-analysis-qoe-learning-materials.md" },
                        { label: "Quiz", path: "corporate-credit-risk-analyst-training/modules/06-advanced-topics/quizzes/12-advanced-analysis-qoe-quiz.md" },
                        { label: "Quiz Answers", path: "corporate-credit-risk-analyst-training/modules/06-advanced-topics/quizzes/12-advanced-analysis-qoe-quiz-answers.md" },
                        { label: "Teacher Notes", path: "corporate-credit-risk-analyst-training/modules/06-advanced-topics/12-advanced-analysis-qoe-teacher-notes.md", type: "notes" },
                        { label: "Developer Notes", path: "corporate-credit-risk-analyst-training/modules/06-advanced-topics/12-advanced-analysis-qoe-developer-notes.md", type: "notes" }
                    ]
                },
                {
                    name: "Module 13: Debt Structuring & Restructuring",
                    files: [
                        { label: "Main Content", path: "corporate-credit-risk-analyst-training/modules/06-advanced-topics/13-debt-structuring-restructuring.md" },
                        { label: "Learning Materials", path: "corporate-credit-risk-analyst-training/modules/06-advanced-topics/13-debt-structuring-learning-materials.md" },
                        { label: "Quiz", path: "corporate-credit-risk-analyst-training/modules/06-advanced-topics/quizzes/13-debt-structuring-quiz.md" },
                        { label: "Quiz Answers", path: "corporate-credit-risk-analyst-training/modules/06-advanced-topics/quizzes/13-debt-structuring-quiz-answers.md" },
                        { label: "Teacher Notes", path: "corporate-credit-risk-analyst-training/modules/06-advanced-topics/13-debt-structuring-teacher-notes.md", type: "notes" },
                        { label: "Developer Notes", path: "corporate-credit-risk-analyst-training/modules/06-advanced-topics/13-debt-structuring-developer-notes.md", type: "notes" }
                    ]
                },
                {
                    name: "Module 14: Legal Aspects of Credit & Loan Documentation",
                    files: [
                        { label: "Main Content", path: "corporate-credit-risk-analyst-training/modules/06-advanced-topics/14-legal-aspects-loan-docs.md" },
                        { label: "Learning Materials", path: "corporate-credit-risk-analyst-training/modules/06-advanced-topics/14-legal-aspects-learning-materials.md" },
                        { label: "Quiz", path: "corporate-credit-risk-analyst-training/modules/06-advanced-topics/quizzes/14-legal-aspects-quiz.md" },
                        { label: "Quiz Answers", path: "corporate-credit-risk-analyst-training/modules/06-advanced-topics/quizzes/14-legal-aspects-quiz-answers.md" },
                        { label: "Teacher Notes", path: "corporate-credit-risk-analyst-training/modules/06-advanced-topics/14-legal-aspects-teacher-notes.md", type: "notes" },
                        { label: "Developer Notes", path: "corporate-credit-risk-analyst-training/modules/06-advanced-topics/14-legal-aspects-developer-notes.md", type: "notes" }
                    ]
                }
            ]
        },
        {
            part: "Part 7: Advanced Communication & Craft",
            modules: [
                {
                    name: "Module 15: Advanced Business Writing: Persuasion & Narrative",
                    files: [
                        { label: "Main Content", path: "corporate-credit-risk-analyst-training/modules/07-communication-skills/15-advanced-business-writing.md" },
                        { label: "Learning Materials", path: "corporate-credit-risk-analyst-training/modules/07-communication-skills/15-advanced-writing-learning-materials.md" },
                        { label: "Quiz", path: "corporate-credit-risk-analyst-training/modules/07-communication-skills/quizzes/15-advanced-writing-quiz.md" },
                        { label: "Quiz Answers", path: "corporate-credit-risk-analyst-training/modules/07-communication-skills/quizzes/15-advanced-writing-quiz-answers.md" },
                        { label: "Teacher Notes", path: "corporate-credit-risk-analyst-training/modules/07-communication-skills/15-advanced-writing-teacher-notes.md", type: "notes" },
                        { label: "Developer Notes", path: "corporate-credit-risk-analyst-training/modules/07-communication-skills/15-advanced-writing-developer-notes.md", type: "notes" }
                    ]
                },
                {
                    name: "Module 17: Negotiation & Communication Skills",
                    files: [
                        { label: "Main Content", path: "corporate-credit-risk-analyst-training/modules/07-communication-skills/17-negotiation-communication-skills.md" },
                        { label: "Learning Materials", path: "corporate-credit-risk-analyst-training/modules/07-communication-skills/17-negotiation-communication-learning-materials.md" },
                        { label: "Quiz", path: "corporate-credit-risk-analyst-training/modules/07-communication-skills/quizzes/17-negotiation-communication-quiz.md" },
                        { label: "Quiz Answers", path: "corporate-credit-risk-analyst-training/modules/07-communication-skills/quizzes/17-negotiation-communication-quiz-answers.md" },
                        { label: "Teacher Notes", path: "corporate-credit-risk-analyst-training/modules/07-communication-skills/17-negotiation-communication-teacher-notes.md", type: "notes" },
                        { label: "Developer Notes", path: "corporate-credit-risk-analyst-training/modules/07-communication-skills/17-negotiation-communication-developer-notes.md", type: "notes" }
                    ]
                }
            ]
        },
        {
            part: "Part 8: Specialized Applications",
            modules: [
                {
                    name: "Module 16: Specialized Industry Analysis - Case Studies",
                    files: [
                        { label: "Main Content & SaaS Case", path: "corporate-credit-risk-analyst-training/modules/08-specialized-industries/16-specialized-industry-case-studies.md" },
                        { label: "SaaS Case Guidance", path: "corporate-credit-risk-analyst-training/modules/08-specialized-industries/case-studies/16-saas-case-study-guidance.md"},
                        { label: "Learning Materials", path: "corporate-credit-risk-analyst-training/modules/08-specialized-industries/16-specialized-industries-learning-materials.md" },
                        { label: "Quiz", path: "corporate-credit-risk-analyst-training/modules/08-specialized-industries/quizzes/16-specialized-industries-quiz.md" },
                        { label: "Quiz Answers", path: "corporate-credit-risk-analyst-training/modules/08-specialized-industries/quizzes/16-specialized-industries-quiz-answers.md" },
                        { label: "Teacher Notes", path: "corporate-credit-risk-analyst-training/modules/08-specialized-industries/16-specialized-industries-teacher-notes.md", type: "notes" },
                        { label: "Developer Notes", path: "corporate-credit-risk-analyst-training/modules/08-specialized-industries/16-specialized-industries-developer-notes.md", type: "notes" }
                    ]
                }
            ]
        },
        {
            part: "Part 9: Regulatory & Quantitative Landscape",
            modules: [
                {
                    name: "Module 18: Regulatory Environment & Compliance",
                    files: [
                        { label: "Main Content", path: "corporate-credit-risk-analyst-training/modules/09-regulatory-ethics/18-regulatory-compliance.md" },
                        { label: "Learning Materials", path: "corporate-credit-risk-analyst-training/modules/09-regulatory-ethics/18-regulatory-compliance-learning-materials.md" },
                        { label: "Quiz", path: "corporate-credit-risk-analyst-training/modules/09-regulatory-ethics/quizzes/18-regulatory-compliance-quiz.md" },
                        { label: "Quiz Answers", path: "corporate-credit-risk-analyst-training/modules/09-regulatory-ethics/quizzes/18-regulatory-compliance-quiz-answers.md" },
                        { label: "Teacher Notes", path: "corporate-credit-risk-analyst-training/modules/09-regulatory-ethics/18-regulatory-compliance-teacher-notes.md", type: "notes" },
                        { label: "Developer Notes", path: "corporate-credit-risk-analyst-training/modules/09-regulatory-ethics/18-regulatory-compliance-developer-notes.md", type: "notes" }
                    ]
                },
                {
                    name: "Module 19: Data Analytics & Quantitative Tools",
                    files: [
                        { label: "Main Content", path: "corporate-credit-risk-analyst-training/modules/10-quantitative-skills/19-data-analytics-quant-tools.md" },
                        { label: "Learning Materials", path: "corporate-credit-risk-analyst-training/modules/10-quantitative-skills/19-data-analytics-learning-materials.md" },
                        { label: "Quiz", path: "corporate-credit-risk-analyst-training/modules/10-quantitative-skills/quizzes/19-data-analytics-quiz.md" },
                        { label: "Quiz Answers", path: "corporate-credit-risk-analyst-training/modules/10-quantitative-skills/quizzes/19-data-analytics-quiz-answers.md" },
                        { label: "Teacher Notes", path: "corporate-credit-risk-analyst-training/modules/10-quantitative-skills/19-data-analytics-teacher-notes.md", type: "notes" },
                        { label: "Developer Notes", path: "corporate-credit-risk-analyst-training/modules/10-quantitative-skills/19-data-analytics-developer-notes.md", type: "notes" }
                    ]
                }
            ]
        },
        {
            part: "Part 10: Capstone",
            modules: [
                {
                    name: "Module 20: Capstone Project",
                    files: [
                        { label: "Project Description", path: "corporate-credit-risk-analyst-training/modules/11-capstone/20-capstone-project.md" },
                        { label: "Learning Materials", path: "corporate-credit-risk-analyst-training/modules/11-capstone/20-capstone-learning-materials.md" },
                        { label: "Teacher Notes", path: "corporate-credit-risk-analyst-training/modules/11-capstone/20-capstone-teacher-notes.md", type: "notes" },
                        { label: "Developer Notes", path: "corporate-credit-risk-analyst-training/modules/11-capstone/20-capstone-developer-notes.md", type: "notes" }
                    ]
                }
            ]
        }
    ];

    function populateNavigation() {
        if (!moduleNavigationList) return;
        moduleNavigationList.innerHTML = '';

        courseStructure.forEach(part => {
            const partLi = document.createElement('li');
            const partTitle = document.createElement('span');
            partTitle.innerHTML = `<strong>${part.part}</strong>`;
            partTitle.classList.add('part-title');
            partLi.appendChild(partTitle);

            const moduleUl = document.createElement('ul');
            moduleUl.classList.add('module-group');

            part.modules.forEach(module => {
                const moduleLi = document.createElement('li');

                if (module.files && module.files.length > 0) {
                    const moduleNameSpan = document.createElement('span');
                    moduleNameSpan.textContent = module.name;
                    moduleNameSpan.classList.add('module-name');
                    moduleLi.appendChild(moduleNameSpan);

                    const subUl = document.createElement('ul');
                    subUl.classList.add('file-list');
                    module.files.forEach(file => {
                        const fileLi = document.createElement('li');
                        const link = document.createElement('a');
                        link.href = '#';
                        link.dataset.path = file.path;
                        link.textContent = file.label;
                        if (file.type === "notes") {
                            link.classList.add("note-link");
                        }
                        fileLi.appendChild(link);
                        subUl.appendChild(fileLi);
                    });
                    moduleLi.appendChild(subUl);
                } else if (module.path) {
                     const link = document.createElement('a');
                     link.href = '#';
                     link.dataset.path = module.path;
                     link.textContent = module.name;
                     link.classList.add('module-name-link');
                     moduleLi.appendChild(link);
                }
                moduleUl.appendChild(moduleLi);
            });
            partLi.appendChild(moduleUl);
            moduleNavigationList.appendChild(partLi);
        });
    }

    async function loadContent(path) {
        if (!contentArea) return;
        if (!path) {
            contentArea.innerHTML = "<p>Error: No path specified for content.</p>";
            return;
        }

        // All paths in courseStructure are now relative to the repo root
        // where index.html resides.

        try {
            const response = await fetch(path); // basePath is removed
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status} for path: <a href="${path}" target="_blank">${path}</a>. Check if file exists and path is correct relative to index.html.`);
            }
            const markdown = await response.text();
            if (typeof marked === 'undefined') {
                contentArea.innerHTML = "<p>Error: marked.js library not loaded. Ensure the CDN link in index.html is correct.</p>";
                return;
            }
            contentArea.innerHTML = marked.parse(markdown);
        } catch (error) {
            console.error('Error loading content:', error);
            contentArea.innerHTML = `<p>Error loading content. ${error.message}</p>`;
        }
    }

    if (moduleNavigationList) {
        moduleNavigationList.addEventListener('click', (event) => {
            const targetLink = event.target.closest('a[data-path]');
            if (targetLink) {
                event.preventDefault();
                document.querySelectorAll('#module-navigation-list a').forEach(a => a.classList.remove('active'));
                targetLink.classList.add('active');
                loadContent(targetLink.dataset.path);
            }
        });
    }

    if (contentArea) {
        contentArea.addEventListener('click', (event) => {
            const targetLink = event.target.closest('a[data-path]');
            if (targetLink) {
                 event.preventDefault();
                document.querySelectorAll('#module-navigation-list a').forEach(a => {
                    if (a.dataset.path === targetLink.dataset.path) {
                        a.classList.add('active');
                    } else {
                        a.classList.remove('active');
                    }
                });
                loadContent(targetLink.dataset.path);
            }
            else if (event.target.tagName === 'A' && event.target.href && !event.target.href.startsWith('#') && !event.target.dataset.path) {
                 if (!event.target.href.startsWith(window.location.origin) || event.target.href.includes('.md')) {
                    event.target.target = '_blank';
                }
            }
        });
    }

    populateNavigation();

    const initialPath = "corporate-credit-risk-analyst-training/README.md";
    const readmeLink = document.querySelector(`#module-navigation-list a[data-path="${initialPath}"]`);
    if (readmeLink) {
        readmeLink.classList.add('active');
    }
    loadContent(initialPath);
});
