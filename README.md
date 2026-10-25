# Azad Singh — Portfolio Website

A responsive personal portfolio built for the Git/GitHub practical using HTML5, CSS3, Bootstrap 5, and JavaScript.

## Included sections
- Home / introduction
- About and education
- Technical skills
- Projects: Lung Cancer Prediction, Real-Time Quiz Application, Document Parser AI, and LearnTwin
- Programming achievements
- Contact details

## Run locally
1. Extract the ZIP.
2. Open the folder in Visual Studio Code.
3. Open `index.html` in your browser, or use the VS Code Live Server extension.
4. Internet is needed for Bootstrap and Google Fonts CDN assets.

## Personalize before publishing
- Check every project description and achievement for accuracy.
- Replace `https://github.com/AZ07-coder` if your GitHub username/profile URL differs.
- Add your exact LinkedIn profile URL if you want a LinkedIn link.
- Add individual repository links in each project card when available.
- Add a resume PDF link only if you want to publish your resume publicly.

## Git and GitHub practical
Open a terminal in this folder:

```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/AZ07-coder/azad-portfolio.git
git push -u origin main
```

Create the GitHub repository first. If your repository URL or username differs, replace the URL above.

### Demonstrate branching and pull request
```bash
git checkout -b feature/add-resume-link
# Edit index.html and add your resume link
git add index.html
git commit -m "Add resume link to portfolio"
git push -u origin feature/add-resume-link
```

Then open GitHub, create a Pull Request from `feature/add-resume-link` into `main`, review it, and merge it. For a solo practical, this demonstrates the branch/PR workflow; a real collaboration can have another person review it.

### Demonstrate clone and pull
```bash
cd ..
git clone https://github.com/AZ07-coder/azad-portfolio.git portfolio-clone
cd portfolio-clone
git pull origin main
git log --oneline
```

## Publish with GitHub Pages
1. Push your project to a GitHub repository.
2. Open repository **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch `main` and folder `/ (root)`, then save.
5. Wait for GitHub Pages to publish. The URL will be shown in the Pages settings.

## Notes
- The website is static; the contact section uses email/phone links and does not require a backend.
- Project GitHub links currently point to the profile. Replace them with exact repository URLs when you have them.
- The LearnTwin card is marked as in development; its MongoDB persistence should not be described as complete until that integration is verified.
