# date.io (SES3A)

## Before Starting
* Make sure you have Node installed 

### Mac Users
Skip Straight to 'Getting Stared'

### Windows Users
Set Up WSL on your (not needed but it will make life much easier for you) - This guide can help you https://ubuntu.com/wsl

<hr style="width:50%">
<br>

## Getting Started

Please follow the following guide to help you set up the project :) 


| STEP 1 |Update Node              |
|:-------|:------------------------|

Command: <b>npm install -g npm@7.21.0</b>

<hr>
<br>

| STEP 2 |Clone Repo               |
|:-------|:------------------------|

<b>NOTE:</b> Make a local directory/folder (in like your documents or desktop) to clone the project and then run 'git clone' based on your git configuration (most would not have SSH set up so do the HTTP method)  

Command - Option 1 (HTTP): <b>git clone https://github.com/anjalikalambe/SES-3A.git</b>
Command - Option 2 (SSH):  <b>git clone git@github.com:anjalikalambe/SES-3A.git</b> 

<hr>
<br>

| STEP 3 |Install Packages Part 1/2|
|:-------|:------------------------|                    

<b>NOTE:</b> CD into '<b>/backend</b>' 

Command: <b>npm i</b> - (this can take a few min) 

<hr>
<br>

| STEP 4 |Install Packages Part 2/2|
|:-------|:------------------------|  

<b>NOTE:</b>
CD back to the main SRC folder by typing <b> 'cd ..' </b> and then CD into '<b>/client</b>'

Command: <b>npm i</b> - (this can take a few min)  

<hr style="width:50%">
<br>

## Python / Flask Setup

| STEP 1 |Install Packages Part 1/2|
|:-------|:------------------------|  

<b>NOTE:</b>
Launch CMD or Terminal and check if you have python3 installed with the following command: python --version

If a version DOES show up, please skip to STEP 2. 

PC: If not please run the following command: 'python'. This will take you to the windows store, choose python 3.9 and click 'get' and that should install
MAC: https://www.python.org/downloads/release/python-397/ download and install this 

<hr>
<br>

| STEP 2 |Install Packages Part 2/2|
|:-------|:------------------------| 

Go into the 'flask-server' directory and type the following command in CMD or Terminal 'pip3 install Flask'

To Run Jupyter notebook, type the following command <b>'python -m notebook'</b>. This will launch a local host, make your way to the <b>'user_match_model.ipynb'</b> file and proceed to run the python file
    
<hr style="width:50%">
<br>

## Running The Application
<b>NOTE: Make sure you are in the '/client' directory to run the application</b>

### Start Backend and Client (front-end) together - Easier Option\
<b>npm run dev</b>

### Run Back-end and Front-end Separately
1) Back-end Server: Go to '/backend' and run <b>npm start</b> - This will trigger the server
2) Front-end Server: Open a new/second teminal/cmd window in parallel with the server and go to '/client-backend' and run <b>npm start</b> - This will trigger the client/front-end

<hr style="width:50%">
<br>

## Build and Deployment Rules
To ensure we follow a clean and efficient development methodology, we will follow the three-tier branch approach when applying changes. This includes the following:

```
master
    ┣━━ feature
           ┗━━ task
```
Features are marked as epics on Jira. Create a feature branch after checking Jira epic. 

### Branch Rules

| Branch  | Naming Convention| Example           |
|:--------|:-----------------|:------------------|
| Master  | master           | master            |
| Feature | feature-*        | feature-login     |    
| Task    | task-*           | task-login_button |

***

#### Master

The Master Branch will be used as the final product.
* <b>IMPORTANT NOTE</b> - No direct changes will be made on this branch**

#### Feature

The Feature Branch will stem off the Master Branch and will act as a topic branch. For example, if a new component such as a login feature is to be implemented, a feature branch must be created.

#### Task

The Task Branch will act as the child branch of the Feature Branch to which content can be added. Different goals MUST be spread across other Task Branches. Once the goal is met, branches will be merged into the feature branch via an approved Pull Request (PR). For example:
* Task 1: Create a Login button - Once completed and the PR is approved, this will be merged into the 'feature-login' branch
* Task 2: Change the font size on the login screen - Once completed and the PR is approved, this will also be merged into the 'feature-login' branch. 

### Misc Information

Enter Misc information here - testing
