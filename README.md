# wf-nextjs-practice
Practice next.js v10 project to match my current work project.

Set up as the start of a portfolio website for myself with an expected completion date approx. May 2023 after my college graduation.

Some portfolio examples will be within this project, while others will be standalone projects available in other repos. These will be
listed here as they are completed.

## Considerations
This project is being configured to mimic my current work project. That way I can practice with Next.js and React in my freetime
without risking any problems with my dayjob commits.

For this reason, numerous dependencies are out of date (2021-ish) and in conflict with one another (react 17 with mui 4). It's my
goal to eventually work through implementing the app with these dependencies, then going through an update to Next.js 13+ and Mui 5
and working through the migration for practice.

## Contact

[wforbes87 on Linkedin](https://linkedin.com/in/wforbes87)

[wforbes on Github](https://github.com/wforbes)

[wforbes.net](https://wforbes.net)

## Getting Started

Install project dependencies:
```bash
npm install
```

Run the local development server:
```bash
npm run dev
```

Build the docker image:
```bash
docker build -t wf-nextjs-practice .
```

Run the docker container:
```bash
docker run -p 3000:3000 -d --name wf-nextjs-practice wf-nextjs-practice
```

