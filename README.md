# Steps to run locally:

1. Create a folder as any name.
2. Open that folder in any IDE (vs code). 
3. Create a root folder: Here Restful-API is root folder.
4. In root folder create a .env file and create a DB_CONNECITON variable and assign a value to it.
      DB_CONNECITON  =  your mongodb_connection_string.
       ------
   Example: DB_CONNECTION = "mongodb+srv://admin:admin@cluster0.xez5xvg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
5. Open the terminal (ctrl + ~) in code editor.
6. Type the following commands to install dependencies and to run the server.
     npm init  ->  (to initialize the project)
     npm i     ->  (to install all  the dependencies)
     npm start      (to run server) 
   Note: Here I used nodemon to automate the process such as saving and restarting the server.
7. If you get the message without any errors in terminal then your server was running successfully.

# Route and its funcitonality:

For this use any API client like Postman or Thunder Client.
Here I used Postman
        
# Step 1: Create Route 
1. This route is used to create a post in database with the following fields.
      title & description.
2. In postmon create a collection and add new requests and select methods based on operation         
         get: to get all the data: http://localhost:4000/posts/
         get the specific data based on id: http://localhost:4000/posts/<id>
         post: http://localhost:4000/posts
    
         Use post method to pass the following json data in a body as your required value.
          {
            "title" : "First post",
            "description" : "my first post"
          }

3. After inserting the values click on send button and then use get method to get the data which is posted.
4. The data which is posted can automatically loaded into the MongoDB.
   Note: In this project I used cloud mongoDB.

# Step 2: Perform CRUD Operations

  READONE :  
       1. This route is used to read specific post by passing the specific post id as a param.
             use GET:
             URL: http://localhost:4000/posts/65ee0c657944e3ca6e3e1305
       2. After sending you will get the specific post details as response.
        
  READALL : 
        1. Read all route is used to get all the post data existing in the mongodb database .
             use GET:
             URL: http://localhost:4000/posts/
        2. After sending you will get all the post details as response.
        
  UPDATE : 
        1. This route is used to update the post by passing the specific post id as a param.
             use PUT:
             URL: http://localhost:4000/posts/65ee0c657944e3ca6e3e1305
        2. After sending you will get updated post details as response.
        
  DELETE : 
        1. This route is used to delete specific post by passing the post id as a param.
             use DELETE:
             URL: http://localhost:4000/posts/65ee0c657944e3ca6e3e1305
        2. After sending the specific post will be deleted from the database.
