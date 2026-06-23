# Accessibility Audit Project Context

## Project

- name: manny-portfolio
- base_url: http://localhost:4173 (live https://www.mannyflo.com unreachable from this sandbox's network egress policy; same build/commit served locally)
- repo_root: .
- app_root: .

## Audit Scope

- standards: WCAG 2.1 AA
- scan_mode: full
- include_routes:
- /bio
- priority_routes:
- /bio

## Output Configuration

- output_mode: markdown
- report_path: docs/accessibility/audits/audit-YYYY-MM-DD.md

## References

- conformance_docs: docs/accessibility/
- manual_testing_guide: docs/testing_qa/
