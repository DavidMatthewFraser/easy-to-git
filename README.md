# What is Easy to Git?

- Easy to Git is an open-source project that offers many ways to get started with Git and GitHub
- More specifically, the master branch of this project is the code for www.easytogit.com where you can see the results of your contributions

# What are the Goals?

- Our main objective is to cultivate a community that supports one another in learning how to collaborate with version control
- Note: this project is not monetized and never will be

# Why should I get involved?

- Git and GitHub are the industry standards for collaboration on coding projects, it is good to become familiar with these tools
- Teamwork and collaboration are important skills ... and they can also be really fun! This project encourages both teamwork and collaboration. Further, we have a small, active community that is happy to work with you.
- There are a lot of open-source projects out there and it can be hard to find one to get started with. This project offers several ways to start your journey as an open-source contributor.
- There are GitHub projects that offer an easy way to make your first contribution. Further, this project offers fun and interactive challenges to get you even more comfortable using version control.

# How to contribute (short version)

- pull requests are the way to go
- fork our project
- `git clone https://github.com/your-github-username/easy-to-git.git`
- `cd easy-to-git`
- `git branch checkout -b name-of-branch`
- make your changes
- `git add file-1 file-2 ... file-n`
- `git commit -m ‘descriptive/concise message’`
- `git push origin master`
- click 'compare and create pull request' on your forked GitHub repo
- click 'create pull request'

# How to contribute (long version)
1. **Create a fork** of the easy-to-git repo, this is what you will be making changes on. To create a fork, click the ‘fork’ button in the top right of the screen.

2. You can **create a copy or ‘clone’** of your ‘fork’ on your local machine using the ‘Git’ version control system. To use ‘Git’ on Linux or Mac, open up the ‘Terminal’ application. Linux users may need to install git using the command line. Windows users will need to install Git Bash to use Git. Once you have the ‘Terminal’ or ‘Git Bash’ opened, use `git clone https://github.com/your-user-name/easy-to-git.git` and navigate into this new directory with `cd easy-to-git`. Note that your-user-name is your GitHub username.

3. The next step is to **create a branch** where you can make your changes. Type `git branch` into your terminal, this will display all the versions or branches of ‘easy-to-git’ on your local machine. For now, you should only see one branch: `*master`. You could start making changes to your ‘master branch’ but it is common practice to make all your changes on separate branches. To create a new branch use `git checkout -b name-of-branch`. Again run `git branch` and you should now see `master` and `*name-of-branch`. You can switch branches with `git checkout any-branch`. Note that you can delete a branch with `git branch -d branch` and force delete by using `-D`.

4. Now you can **make changes** to your newly created branch. Open the 'contributors.md' file with your favorite text editor, add your name, and save your changes. Note that running the command `git status` will show you all the files that you have changed.

5. We will now **add the changes** on your ‘local’ machine to your ‘remote fork’ on GitHub. Tell git that you want to track changes made to the 'contributors.md' file by using `git add contributors.md`. Note that you can add changes to multiple files by listing all the modified files separated by a space: `git add file1 file2 … fileN`.

6. **Package up all the changes** that GitHub is tracking with `git commit -m ‘a message describing what you’ve changed’`. Note that the message you associate with the commit is helpful for bookkeeping.

7. **Add your new branch** with all its changes **to your ‘remote fork’** (which Git calls ‘origin’) with `git push origin name-of-branch`. Your remote copy should now have a `master` branch and a branch called `name-of-branch`. You can toggle between them by clicking the branches button on your repository toolbar.

8. Make sure the `name-of-branch` branch is selected and click 'compare & pull request'. This will open up a window where you can describe the changes you’ve made in more detail (which again is helpful for bookkeeping) and click **'create a pull request'**. If there are no conflicts I will merge your changes with easy-to-git master.


# Keeping your branches up to date

- `git add remote upstream https://github.com/DavidMatthewFraser/easy-to-git.git` (you only need to do this once)
- `git fetch upstream`
- `git merge upstream/master` will merge upstream with your current branch, if there are conflicts you will have to resolve them

# Resolving conflicts
- navigate to the files that have conflicts
- A conflict in a file will look like this:
```
<<<<<<< HEAD
this is some text that conflicts with your text
here is some more conflicting text
=======
hey man why you gotta conflict with me
>>>>>>> name-of-branch
```
- Here's an example of how you might edit the file to resolve the conflict
```
this is some text that conflicts with your text
here is some more conflicting text
hey man why you gotta conflict with me
```
# What are starter projects that I can work on?

Before making any contributions to these projects, please read our CONTRIBUTING.md file that outlines our contributing policy.

- **Challenges**: These are puzzles that are solved by modifying the HTML, CSS, and sometimes Javascript of the associated challenge files.

- **Contributor Panel**: This displays the project’s contributors on the easy-to-git homepage and you can add your name and GitHub profile by modifying the contributorPanel.js file.

- **HomepageThemes**: You can add your own custom theme to the easy-to-git homepage by modifying the themes.js file

- **QuizQuestions**: To add some questions to the quiz open the quizQuestions.js file and add a question with some answers and add the correct answer. That’s it! You can add HTML, CSS or Javascript

- **Add useful links**: This is a place to share any websites, videos, books, etc. that you would recommend to other developers. You add your own suggestions by modifying the quiz.html file.

# What are the standards for pull requests?

- You can read about our standards in the <a href='./CONTRIBUTING.md'>CONTRIBUTING.md</a> file

# What is the code of conduct enforced in this community?

- You can read about our code of conduct in the <a href='./CODE_OF_CONDUCT.md'>CODE_OF_CONDUCT.md</a> file

# I'm stuck, where can I find help?

- You can ask any questions in on our <a href='https://gitter.im/Easy-To-Git/community'>Gitter</a> chatroom

# How can I contact the owner of this repository?

- Hi, I’m David. I am active in on Gitter but you can also email me at davidfraserwebdev@gmail.com
