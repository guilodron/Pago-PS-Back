# Full Stack Developer Job Application

The task is to create a full stack application, with a Node.js backend in TypeScript. This application must interact with at least one database, and both the application and the database must be containerized using Docker.

## Backend Requirements

The backend of the application should be a Node.js application, using TypeScript. Here are the specific requirements:

1. **Database Connection**: The application should establish a connection to a database. You can choose any database technology you're comfortable with, such as PostgreSQL, SQL Server, or a cache database like Redis.

2. **Containerization**: The Node.js application and the database must be containerized with Docker. Each should run in its own separate container. Docker-compose should be used to manage these containers and the connections between them. Make sure to include a `docker-compose.yml` file in your project.

3. **CRUD Operation**: The application should have at least one table in the database and should perform CRUD (Create, Read, Update, Delete) operations. It doesn't matter what kind of data model is used for this table.

### Node.js with TypeScript

- Your application should be written in TypeScript, and run in Node.js environment.
- Use Express.js for setting up your server and routing.

### Docker

- Include a Dockerfile for your application in your project root directory. This Dockerfile will specify how to build a Docker image for your Node.js application.
- Your `docker-compose.yml` file should specify two services: one for your Node.js application and one for your database.

### Database

- You can use any database you prefer. Just make sure you also include it in your Docker compose file.
- Define at least one table and perform CRUD operations on it.

## Submission

Your submission should include:

- A GitHub repository link containing your code.
- A README file that explains how to run your application.

Good luck! Remember, the focus of this task is to assess your understanding of building a simple full-stack application with a containerized backend infrastructure. Write clean, commented code and follow best practices.
