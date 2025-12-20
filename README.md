# Front end Runs on
Port 5173

# Backend end Runs on
Port 8080

# Website link, if you wish not to compile (docker, springboot/react)
http://98.92.104.141:5173/

# Manual Installation Guide (The Long Way)
If we aren't using Docker, we need to manually install these tools to run the project.

1. Install Java JDK 17
Spring Boot needs the Java Development Kit (JDK) to run the backend code.

What to get: Download and install JDK 17 (Amazon Corretto or Oracle).

Verify it works: Open the terminal and type java -version. We should see "17" in the output.

2. Maven (Already included)
This project uses Maven to download libraries.

No install needed: We included a Maven Wrapper (mvnw) in the folder.


3. Install Node.js & npm
The frontend uses React/Vite, which requires Node.js.

What to get: Download and install Node.js (LTS version). This also installs npm (Node Package Manager).

Verify it works: Type node -v and npm -v in the terminal.

How to run Springboot (Manual)
Open the terminal and go into the backend folder: cd backend

## Run the command:

MacOS: ./mvnw spring-boot:run

Windows: mvnw.cmd spring-boot:run

Java JDK 17+

# How to run React/Vite Frontend (Manual)
Open a new second terminal window and go into the frontend folder: cd frontend

Install the libraries: npm install

Start the website: npm run dev

# Automatic Installation Guide: How run Docker (it runs frontend and backend together)
Handles everything required to run server (SpringBoot, etc)
- First of all, you need JDK 17 or 21 to run. If you have windows install it as an environmental variable from docs.oracle.com. Docker will not run without this since it needs the test in the backend to compile

- Prepare the backend: First, add in the password for database in application properties. Then go to the backend folder and run ./mvnw clean package -DskipTests (Mac) or mvnw.cmd clean package -DskipTests (Windows).

- You may need to fix the permission if the terminal says "permission denied" for ./mvnw, run chmod +x mvnw in the backend folder to allow it to run. On windows you can use the GUI.

Start Docker: Run at the base of project: docker-compose up --build

Docker handles the rest of the build process 

## If code is modified (Why we need to run backend in automatic run is due to password change)
mvn clean package -DskipTests, will clean and recompile the code.

docker-compose up --build, use command after to run it.

# For Unit Testing
MacOS (cd to backend folder): ./mvnw test

Windows (cd to backend folder): mvnw.cmd test

# AWS configuration
We used Amazon RDS (Relational Database Service) for mySQL database.

Data is persistent. We can run it anywhere and it is the same data unless a create function is invoked in application properties which will reset data to data.sql.

Server (AWS EC2): We use a t3.micro instance running Linux (Ubuntu).

# Extra Notes
AWS creds stored in application properties.

Docker desktop installation is needed.

SQL data can be found at backend/src/main/resources/data.sql (DML).

SQL Script can be found at sql.txt in project root (DDL).

AWS password is private since we don't want to share AWS password on public repository. So we zipped and submitted.

We don't need SQL scripts since AWS and springboot handles it.

AWS connected to the project through application properties.

Also Look at curl.txt for curl commands
By design OrderService test (1 out of 9 test) may fail due to 10 percent failure rate (that was built in), as specified by the handout.

# Admin Username and password
Username: admin@test.com

Password: adminpass

# Note to TA about running the public version of AWS
- The configuration files for the AWS EC2 and RDS environments have been intentionally excluded from this public repository to maintain the security and privacy of the cloud infrastructure.

- Local Execution: This repository is optimized for local execution via Docker Desktop or manual setup using JDK 17 and Node.js.

- Cloud Privacy: All cloud-specific credentials, Security Group configurations, and EC2 instance management details are kept private.

- Evaluation: For grading purposes, please refer to the local environment instructions provided above to run and test the full-stack functionality.

- The code for the public version is kept in a branch

# Github public version is on branch Public-version at 
https://github.com/Devin-Peng/Retail-Company-E-Store-Project-public-/tree/Public-version

# LINK TO PUBLIC AWS
http://98.92.104.141:5173