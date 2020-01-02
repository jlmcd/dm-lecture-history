# git-practice-wlh14

## Git Commands:

### `git init`
* Creates a new git repository for the directory you are in.

### `git add`
* Adds files to the git staging zone.
* You must specify which files you want to add at the end of the command.
    * The `.` represents all files. So `git add .` will add all changed or untracked files.

### `git status`
* Checks the status of your files. Notes whether files are untracked (new files), modified versions of files, or if files are deleted.

### `git commit -m 'some message'`
* Commits any added files to the git history.
* Remember to add a message using the syntax `-m 'some message'`. If you don't, git will open a vim editor.
* If you find yourself looking at a vim editor, type `:qa` to exit and return to the terminal.
    * You will then need to try your commit again, this time with the message attached.
    
### `git remote add origin <url>`
* Makes a connection between your local git repository and a location on GitHub.
* Your local git repository will remember this connection and you won't need to run this command more than one time per project.
* If you are confused on this step, make a new repository on GitHub and follow the *…or push an existing repository from the command line* section.

### `git push`
* Uploads your code to a remote location (i.e. GitHub)
    * If this is your first time pushing to a new repository on GitHub, append `-u origin master` to the end of the command.
    * The `-u origin master` portion of the command will make the remote url you added the default push location.
