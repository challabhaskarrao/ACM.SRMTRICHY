# 🤝 Contributing to ACM SRMIST Tiruchirappalli Website

Thank you for your interest in contributing to the ACM SRMIST Tiruchirappalli Student Chapter website! We welcome contributions from everyone — whether you're a seasoned developer or just getting started.

---

## 📋 Table of Contents

- [Code of Conduct](#-code-of-conduct)
- [How Can I Contribute?](#-how-can-i-contribute)
- [Getting Started](#-getting-started)
- [Development Workflow](#-development-workflow)
- [Pull Request Guidelines](#-pull-request-guidelines)
- [Style Guidelines](#-style-guidelines)

---

## 📜 Code of Conduct

This project adheres to the [ACM Code of Ethics](https://www.acm.org/code-of-ethics). By participating, you are expected to uphold this code. Please report unacceptable behavior to [connect@srmtrichy.acm.org](mailto:connect@srmtrichy.acm.org).

---

## 💡 How Can I Contribute?

### 🐛 Reporting Bugs

- Check if the bug has already been reported in the [Issues](https://github.com/challabhaskarrao/ACM.SRMTRICHY/issues) section.
- If not, open a new issue with a clear title and description.
- Include steps to reproduce the bug, expected behavior, and screenshots if applicable.

### ✨ Suggesting Features

- Open a new issue with the `enhancement` label.
- Describe the feature, its use case, and any relevant mockups or references.

### 🔧 Submitting Code Changes

1. Fork the repository.
2. Create a new branch from `main` (e.g., `feature/add-new-section`).
3. Make your changes.
4. Submit a pull request.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 22.0.0
- **npm** >= 10.0.0
- **Git**

### Setup

```bash
# Fork and clone the repository
git clone https://github.com/<your-username>/ACM.SRMTRICHY.git
cd ACM.SRMTRICHY

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 🔄 Development Workflow

1. **Create a branch** for your feature or fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** and test locally at `http://localhost:3000`.

3. **Lint your code** before committing:
   ```bash
   npm run lint
   ```

4. **Commit** with a descriptive message following [Conventional Commits](https://www.conventionalcommits.org/):
   ```bash
   git commit -m "feat: add new gallery carousel component"
   ```

5. **Push** your branch and open a pull request.

---

## 📝 Pull Request Guidelines

- Give your PR a clear, descriptive title.
- Reference any related issues (e.g., `Closes #12`).
- Include screenshots or GIFs for UI changes.
- Ensure no lint errors or build failures.
- Keep PRs focused — one feature/fix per PR.

---

## 🎨 Style Guidelines

### Code Style

- **TypeScript** — Use strict typing. Avoid `any`.
- **Components** — Use functional components with React hooks.
- **CSS** — Use Tailwind CSS utility classes. Custom styles go in CSS modules.
- **Naming** — PascalCase for components, camelCase for functions/variables.

### Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

| Prefix | Usage |
|---|---|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `docs:` | Documentation changes |
| `style:` | Formatting, no code change |
| `refactor:` | Code restructuring |
| `perf:` | Performance improvements |
| `test:` | Adding/updating tests |
| `chore:` | Maintenance tasks |

---

<div align="center">
  <i>Thank you for helping us build a better platform for the ACM community! 🎉</i>
</div>
