# SES3A

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


| STEP   |Description              |
|:-------|:------------------------|
| 1      | Update Node             | 
Command: <b>npm install -g npm@7.21.0</b>

<hr>
<br>

| STEP   |Description              |
|:-------|:------------------------|
| 2      | Clone Repo              | 
<b>NOTE:</b> Make a local directory (like your documents) to clone the project and then run 'git clone' based on your git configuration (most would not have SSH set up so do the HTTP method)  

Command - Option 1 (HTTP): <b>git clone https://github.com/anjalikalambe/SES-3A.git</b>
Command - Option 2 (SSH):  <b>git clone git@github.com:anjalikalambe/SES-3A.git</b> 

<hr>
<br>

| STEP   |Description              |
|:-------|:------------------------|                    
| 3      | Install Packages Part 1 | 
<b>NOTE:</b> CD into <b>/react-backend</b> (this can take a few min) 

Command: <b>npm i</b>   

<hr>
<br>

| STEP   |Description              |
|:-------|:------------------------|  
| 4      | Install Packages Part 2 | 

<b>NOTE:</b>
CD back to the main SRC folder by typing <b> cd .. </b> and then CD into <b>/client</b>

Command: <b>npm i</b>                       

<hr>
<br>

That's it :) 

<hr style="width:50%">
<br>

## Running The Application
<b>NOTE: Make sure you are in the '/client' directory to run the application</b>

### Start Backend and Client (front-end) together - Easier Option\
<b>npm run dev</b>

### Run Back-end and Front-end Separately
1) Back-end Server: Go to '/react-backend' and run <b>npm start</b> - This will trigger the server
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