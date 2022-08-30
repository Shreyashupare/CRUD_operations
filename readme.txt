CRUD operations GET(get by id, get all), POST, DELETE, UPDATE using express js and sequelize

git commit 3: find by id, find all, update, delete are done using routes and controllers

Issues : unable to get find all using .findAll when - in router.js findOne is called earlier than findAll
        but when find ALL is calling earlier it is working fine.

work to be done : 1.  need to handle exceptions 
                eg. when deleting or updating employee with id and requested id isn't exist then throw error with id not exist
                    when adding employee with same employee id then throw error employee id is already exist

                 2. add required permission while delete employee(like send parameter 'password' from req header)


this commit - 
        added redis cache for findAll
        re constructed folders and files 