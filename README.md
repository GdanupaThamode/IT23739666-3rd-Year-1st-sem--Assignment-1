## Playwright Automation Project (IT23739666)

This repository contains Playwright automated tests located in `./tests` and configured via `playwright.config.js`.

Public Git repository link (also provided in `git-repository-link.txt`):
https://github.com/GdanupaThamode/IT23739666-3rd-Year-1st-sem--Assignment-1.git

### Prerequisites

- Node.js 16+ (Node 18+ recommended)
- Internet access (tests navigate to `https://www.swifttranslator.com/`)

### Get the Project

Clone the public repository:

```bash
git clone https://github.com/GdanupaThamode/IT23739666-3rd-Year-1st-sem--Assignment-1.git
cd IT23739666-3rd-Year-1st-sem--Assignment-1
```

### Install Dependencies

```bash
npm install
```

Install Playwright browsers (required on first run):

```bash
npx playwright install
```

### Run Tests

Run all tests:

```bash
npm test
```

Notes:

- The current configuration runs with `headless: false`, `slowMo: 1000`, and `workers: 1`, so the execution will be slower but easier to observe.

Optional: explicitly run headed mode (same effect as current config):

```bash
npm run test:headed
```

### View HTML Report

After the test run completes:

```bash
npm run report
```

This opens the Playwright HTML report generated under `playwright-report/`.

### Project Structure

- `tests/` – Playwright test specs
- `playwright.config.js` – Playwright configuration (reporter, browser, trace/video/screenshot settings)
- `test-results/` – artifacts from the latest runs (traces, videos, screenshots)


