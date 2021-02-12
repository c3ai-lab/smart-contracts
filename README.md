# SmartContracts

## Quick Start

Please use Linux or MacOS as operating system for FSolidM. The tool does not run properly in Windows or in a Docker Container because the MongoDB has a problem with the Windows Linux Kernel. Please do not try it, it is a waste of time! 

If you are Windows user doing the following steps: 

Install a Virtual Box and an Ubuntu Linux: 
- [VirtualBox](https://www.virtualbox.org/)
- [Ubuntu](https://ubuntu.com/download)

else you can directly install FSolidM, you need:
- [NodeJS](https://nodejs.org/en/download/) (v4.x.x recommended)
- [MongoDB](https://www.mongodb.com/download-center#production)

To clone the repository, first install (if necessary):
- [Git](https://git-scm.com/downloads)

and then clone the repository in your preferred directory, for example:
```
cd /home/$USER
https://github.com/c3ai-lab/smart-contracts
```
This makes the 'project root' for the git repo `/home/$USER/smart-contracts`.

Install packages with npm in the project root (`smart-contracts`):
```
cd /home/$USER/smart-contracts
npm install
npm install webgme
npm install -g bower
bower install
```
Start mongodb locally by running the `mongod` executable in your mongodb installation (you may need to create a `data` directory or set `--dbpath`). For example:
```
cd /home/$USER
mkdir sc_data
mongod --dbpath ./sc_data
```
wait until you see a line that says "[initandlisten] waiting for connections on port 27017".

Then, in a new terminal window, run `npm start` from the project root (`smart-contracts`) to start. For example:
```
cd /home/$USER/smart-contracts
npm start
```

After the webgme server is up and there are no error messages in the console, open a valid address in the browser to start using the Smart Contracts. The default is http://127.0.0.1:8888/, you should see all valid addresses in the console.

Click `Create New…` to create a new project.
After entering a project name of your choice, import the seed `Linked_SC` to start working on smart contracts!
