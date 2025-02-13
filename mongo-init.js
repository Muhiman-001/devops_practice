// mongo-init.js
db = db.getSiblingDB('mydatabase');

// Create user for the specific database
db.createUser({
    user: 'myuser',
    pwd: 'mypassword',
    roles: [
        {
            role: 'readWrite',
            db: 'mydatabase'
        }
    ]
});

// Create collections
db.createCollection('users');

// Create indexes
db.users.createIndex({ "email": 1 }, { unique: true });