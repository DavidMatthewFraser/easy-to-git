# Hello and Welcome
## It should be a fun time doing the codez with all yall!
### You can check out tutorials such as <a href='https://github.com/firstcontributions/first-contributions/blob/master/README.md'>this one</a> to get famaliar with the git hubz

# Easy to git
The idea of this repo is to get you started with Git and GitHub.
## The very basics
Git and GitHub are different tools but work together. Git is a program you run on *your machine*, and it's useful to interact with the remote code-repository. This remote host of files is GitHub.
### Github is Collaboration
When someone creates a remote repository, then permissions for people to interact with the code are set. The remote repository automatically becomes a collaboration tool; and that's Github main usage.
### Github Runs Git
Something a bit confusing is that Github itself uses Git to keep track of the remote project. The more we understand our local copy, the more we will understand Github. 
## Steps to collaborate on this repo
* Fork the repository (first you need to create a GitHub account)
* Clone it from your fork to your local storage (`git clone https://github.com/yourUserHere/easy-to-git`)
* Push to your repository on GitHub.
* Log into GitHub and when you're ready, make a pull request. (Or do a pull request from your local machine?)   Do we even need to fork first??

### A few notes
For keeping track of the changes in the original, remote repository (this one) an *upstream* needs to be set. The upstream is set using `git remote add upstream https://github.com/DavidMatthewFraser/easy-to-git`. And that's how you feed yourself of other collaborators' changes.

So you'll be working with two remotes: your fork and the upstream. And you'll be working with only one local copy.

To *fetch* the changes from the upstream to your local repo run `git fetch upstream`.  
And to *merge* those changes with your local repo run `git merge upstream/master`. This command merges the master branch of upstream with your master branch. 

We end up updated.

## What changes do we expect in the files?
Here we'll add some examples...
- add your name to the contributers.md file
- add your github name to the ``` contributors array ``` in the contributorsPanel.js 
- add an html element, for example: ``` <h1>Open Source Rules</h1> ```
- add some js, for example: ```logHello()```

## Overwhelmed by commands?

Check out [Shorfoo](https://www.shortcutfoo.com/app/dojos/git), and learn some commmands while playing.

# What next?
TBH .... idk, maybe you can tell me ...
We definitely need a better ReadMe lol 😝 


Note: To see the live version of the `master` branch, visit https://davidmatthewfraser.github.io/easy-to-git/

