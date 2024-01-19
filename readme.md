// README.md

# Image Upload

### Introduction

Image Upload is an open source task, that includes two endpoint, /upload to upload images, and /images to get uploaded images.

### Image Upload Features

- Users can upload an image
- Users can retrieve the uploaded image

### Installation Guide

- Clone this repository [here](https://github.com/allisoncharles/image-upload.git).
- Run npm install to install all dependencies
- You can either work with the default mLab database or use your locally installed MongoDB.
- Edit the .env file in your project root folder and including the following variables.

1. SITEURL="http://localhost:8000" - localhost or the production url.
2. MONGOURI="" - mongoDB connection url.

### Usage

- Run npm serve: to start the application.
- Connect to the API on port 8000 or any port you specify in the env file.

### API Usage
Link to documentation - https://documenter.getpostman.com/view/32443611/2s9YsT5njR

### API Endpoints

| HTTP Verbs | Endpoints             | Action                |
| ---------- | --------------------- | --------------------- |
| POST       | /api/v1/images/upload | To upload an image    |
| GET        | /images/:imagename    | To retrieve the image |

### Technologies Used

- [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for installation and managing of dependencies and communication with databases.
- [ExpressJS](https://www.expresjs.org/) This is a NodeJS web application framework.
- [MongoDB](https://www.mongodb.com/) This is a free open source NOSQL document database with scalability and flexibility. Data are stored in flexible JSON-like documents.
- [Mongoose ODM](https://mongoosejs.com/) This makes it easy to write MongoDB validation by providing a straight-forward, schema-based solution to model to application data.

### Authors

- [Charles Allison](https://github.com/allisoncharles)

### License

This project is available for use under the MIT License.
