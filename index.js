import express from 'express'
import { MongoClient } from 'mongodb'; 

const zen_class_users = [
	{
      "name": "John Doe",
		"email": "johndoe@example.com",
		"phone_number": "1234567890",
		"dob": "01/01/1980",
		"gender": "Male",
		"address": "123 Main Street, Anytown, Anystate 12345",
    "codekata" : 185,
    "attendance" : '85%'
	},
	{
		"name": "Jane max",
		"email": "janemax@example.com",
		"phone_number": "0987654321",
		"dob": "02/02/1981",
		"gender": "Female",
		"address": "456 Park Avenue, Anytown, Anystate 54321",
    "codekata" : 125,
    "attendance" : '87%'
	},
	{
		"name": "John Smith",
		"email": "johnsmith@example.com",
		"phone_number": "1357924680",
		"dob": "03/03/1982",
		"gender": "Male",
		"address": "789 Washington Street, Anytown, Anystate 98765",
    "codekata" : 69,
    "attendance" : '93%'
	},
	{
		"name": "Jane adam",
		"email": "janeadam@example.com",
		"phone_number": "2468024680",
		"dob": "04/04/1983",
		"gender": "Female",
		"address": "123 Ocean Avenue, Anytown, Anystate 88888",
    "codekata" : 58,
    "attendance" : '89%'
	},
	{
		"name": "Richard Johnson",
		"email": "richardjohnson@example.com",
		"phone_number": "5555555555",
		"dob": "05/05/1984",
		"gender": "Male",
		"address": "456 Maple Street, Anytown, Anystate 77777",
    "codekata" : 180,
    "attendance" : '78%'
	},
	{
		"name": "Mary Johnson",
		"email": "maryjohnson@example.com",
		"phone_number": "6666666666",
		"dob": "06/06/1985",
		"gender": "Female",
		"address": "789 Broadway Street, Anytown, Anystate 66666",
    "codekata" : 168,
    "attendance" : '98%'
	},
	{
		"name": "William Anderson",
		"email": "williamanderson@example.com",
		"phone_number": "7777777777",
		"dob": "07/07/1986",
		"gender": "Male",
		"address": "123 Park Place, Anytown, Anystate 55555",
    "codekata" : 132,
    "attendance" : '85%'
	},
	{
		"name": "Karen Anderson",
		"email": "karenanderson@example.com",
		"phone_number": "8888888888",
		"dob": "08/08/1987",
		"gender": "Female",
		"address": "456 5th Avenue, Anytown, Anystate 44444",
    "codekata" : 158,
    "attendance" : '95%'
	},
	{
		"name": "Christopher Wilson",
		"email": "christopherwilson@example.com",
		"phone_number": "9999999999",
		"dob": "09/09/1988",
		"gender": "Male",
		"address": "789 6th Avenue, Anytown, Anystate 33333",
    "codekata" : 64,
    "attendance" : '90%'
	},
	{
		"name": "Amanda Wilson",
		"email": "amandawilson@example.com",
		"phone_number": "1010101010",
		"dob": "10/10/1989",
		"gender": "Female",
		"address": "123 Main Street, Anytown, Anystate 22222",
    "codekata" : 158,
    "attendance" : '89%'
	},
	{
		"name": "Matthew Moore",
		"email": "matthewmoore@example.com",
		"phone_number": "2020202020",
		"dob": "11/11/1990",
		"gender": "Male",
		"address": "456 Park Avenue, Anytown, Anystate 11111",
    "codekata" : 185,
    "attendance" : '69%'
	},
	{
		"name": "Jennifer Moore",
		"email": "jennifermoore@example.com",
		"phone_number": "3030303030",
		"dob": "12/12/1991",
		"gender": "Female",
		"address": "789 Washington Street, Anytown, Anystate 00000",
    "codekata" : 124,
    "attendance" : '78%'
	},
	{
		"name": "Daniel Taylor",
		"email": "danieltaylor@example.com",
		"phone_number": "3232323232",
		"dob": "01/01/1992",
		"gender": "Male",
		"address": "123 Ocean Avenue, Anytown, Anystate 99999",
    "codekata" : 86,
    "attendance" : '84%'
	},
	{
		"name": "Susan Taylor",
		"email": "susantaylor@example.com",
		"phone_number": "4242424242",
		"dob": "02/02/1993",
		"gender": "Female",
		"address": "456 Maple Street, Anytown, Anystate 88888",
    "codekata" : 189,
    "attendance" : '86%'
	},
	{
		"name": "David White",
		"email": "davidwhite@example.com",
		"phone_number": "5353535353",
		"dob": "03/03/1994",
		"gender": "Male",
		"address": "789 Broadway Street, Anytown, Anystate 77777",
    "codekata" : 201,
    "attendance" : '59%'
	},
	{
		"name": "Linda White",
		"email": "lindawhite@example.com",
		"phone_number": "6464646464",
		"dob": "04/04/1995",
		"gender": "Female",
		"address": "123 Park Place, Anytown, Anystate 66666",
    "codekata" : 94,
    "attendance" : '76%'
	},
	{
		"name": "Paul Harris",
		"email": "paulharris@example.com",
		"phone_number": "7575757575",
		"dob": "05/05/1996",
		"gender": "Male",
		"address": "456 5th Avenue, Anytown, Anystate 55555",
    "codekata" : 97,
    "attendance" : '85%'
	},
	{
		"name": "Kathy Harris",
		"email": "kathyharris@example.com",
		"phone_number": "8686868686",
		"dob": "06/06/1997",
		"gender": "Female",
		"address": "789 6th Avenue, Anytown, Anystate 44444",
    "codekata" : 198,
    "attendance" : '79%'
	}
]

const mentors = [
  {
    "name": "John Smith",
    "mentees": 14,
    "email": "johnsmith@example.com",
    "gender": "male"
  },
  {
    "name": "Jenny Jones",
    "mentees": 16,
    "email": "jennyjones@example.com",
    "gender": "female"
  },
  {
    "name": "Paul Anderson",
    "mentees": 18,
    "email": "paulanderson@example.com",
    "gender": "male"
  },
  {
    "name": "Emily Taylor",
    "mentees": 17,
    "email": "emilytaylor@example.com",
    "gender": "female"
  },
  {
    "name": "Sam Brown",
    "mentees": 15,
    "email": "sambrown@example.com",
    "gender": "male"
  },
  {
    "name": "Olivia Williams",
    "mentees": 19,
    "email": "oliviawilliams@example.com",
    "gender": "female"
  },
  {
    "name": "James Davis",
    "mentees": 13,
    "email": "jamesdavis@example.com",
    "gender": "male"
  },
  {
    "name": "Sophia Miller",
    "mentees": 16,
    "email": "sophiamiller@example.com",
    "gender": "female"
  },
  {
    "name": "Michael Wilson",
    "mentees": 14,
    "email": "michaelwilson@example.com",
    "gender": "male"
  },
  {
    "name": "Isabella Taylor",
    "mentees": 18,
    "email": "isabellataylor@example.com",
    "gender": "female"
  }
]

const october_data = [
  {
    "day" : 1 ,
    "date": "1-10-2022",
    "topic": "Introduction to HTML",
    "task": "Create a basic HTML template with a heading, paragraph and image",
    "absentees": 5
},
{
  "day" : 2 ,  
  "date": "2-10-2022",
    "topic": "Introduction to CSS",
    "task": "Create a basic CSS stylesheet to style the HTML template created on 1st oct",
    "absentees": 2
},
{
  "day" : 3 ,  
  "date": "3-10-2022 (No Sessions - HOLIDAY)",
},
{
  "day" : 4 ,  
  "date": "4-10-2022 (No Sessions - HOLIDAY)",
},
{
  "day" :5 ,  
  "date": "5-10-2022",
    "topic": "JavaScript Loops",
    "task": "Create a basic JavaScript loop to add interactivity to the HTML template created on 1st oct",
    "absentees": 3
},
{
  "day" : 6 ,  
  "date": "6-10-2022",
    "topic": "JavaScript Events",
    "task": "Create a basic JavaScript event listener to add interactivity to the HTML template created on 1st oct",
    "absentees": 2
},
{
  "day" : 7 ,  
  "date": "7-10-2022",
    "topic": "DOM Manipulation",
    "task": "Create a basic DOM manipulation script to add interactivity to the HTML template created on 1st oct",
    "absentees": 2
},
{
  "day" : 8 ,  
  "date": "8-10-2022",
    "topic": "AJAX Requests",
    "task": "Create a basic AJAX request to add interactivity to the HTML template created on 1st oct",
    "absentees": 0
},
{
  "day" : 9 ,  
  "date": "9-10-2022",
    "topic": "API Requests",
    "task": "Create a basic API request to add interactivity to the HTML template created on 1st oct",
    "absentees": 1
},
{
  "day" : 10 ,  
  "date": "10-10-2022 (No Sessions - HOLIDAY)",
},
{
  "day" : 11 ,  
  "date": "11-10-2022 (No Sessions - HOLIDAY)",
},
{
  "day" : 12 ,  
  "date": "12-10-2022",
    "topic": "jQuery",
    "task": "Create a basic jQuery script to add interactivity to the HTML template created on 1st oct",
    "absentees": 0
},
{
  "day" : 13 ,  
  "date": "13-10-2022",
    "topic": "AngularJS",
    "task": "Create a basic AngularJS script to add interactivity to the HTML template created on 1st oct",
    "absentees": 1
},
{
  "day" : 14 ,  
  "date": "14-10-2022",
    "topic": "ReactJS",
    "task": "Create a basic ReactJS script to add interactivity to the HTML template created on 1st oct",
    "absentees": 2
},
{
  "day" : 15 ,  
  "date": "15-10-2022",
    "topic": "VueJS",
    "task": "Create a basic VueJS script to add interactivity to the HTML template created on 1st oct",
    "absentees": 1
},
{
  "day" : 16 ,  
  "date": "16-10-2022",
    "topic": "Introduction to Bootstrap",
    "task": "Create a basic Bootstrap template to add interactivity to the HTML template created on 1st oct",
    "absentees": 2
},
{
  "day" : 17 ,  
  "date": "17-10-2022 (No Sessions - HOLIDAY)",
},
{
  "day" : 18 ,  
  "date": "18-10-2022 (No Sessions - HOLIDAY)",
},
{
  "day" : 19 ,  
  "date": "19-10-2022",
    "topic": "Bootstrap Utilities",
    "task": "Create a basic Bootstrap utility to add interactivity to the HTML template created on 1st oct",
    "absentees": 1
},
{
  "day" : 20 ,  
  "date": "20-10-2022",
    "topic": "Introduction to Sass",
    "task": "Create a basic Sass file to add interactivity to the HTML template created on 1st oct",
    "absentees": 2
},
{
  "day" : 21 ,  
  "date": "21-10-2022",
    "topic": "Sass Variables",
    "task": "Create a basic Sass variable to add interactivity to the HTML template created on 1st oct",
    "absentees":4
},
{
  "day" : 22 ,  
  "date": "22-10-2022",
    "topic": "Sass Mixins",
    "task": "Create a basic Sass mixin to add interactivity to the HTML template created on 1st oct",
    "absentees": 1
},
{
  "day" : 23 ,  
  "date": "23-10-2022",
    "topic": "Sass Functions",
    "task": "Create a basic Sass function to add interactivity to the HTML template created on 1st oct",
    "absentees": 2
},
{
  "day" : 24 ,  
  "date": "24-10-2022 (No Sessions - HOLIDAY)",
},
{
  "day" : 25 ,  
  "date": "25-10-2022 (No Sessions - HOLIDAY)",
},
{
  "day" : 26 ,  
  "date": "26-10-2022",
    "topic": "Git Basics",
    "task": "Create a basic Git repository to add interactivity to the HTML template created on 1st oct",
    "absentees": 1
},
{
  "day" : 27 ,  
  "date": "27-10-2022",
    "topic": "Git Flow",
    "task": "Create a basic Git flow to add interactivity to the HTML template created on 1st oct",
    "absentees": 2
},
{
  "day" : 28 ,  
  "date": "28-10-2022",
    "topic": "Git Branches",
    "task": "Create a basic Git branch to add interactivity to the HTML template created on 1st oct",
    "absentees": 1
},
{
  "day" : 29 ,  
  "date": "29-10-2022",
    "topic": "Git Merging",
    "task": "Create a basic Git merge to add interactivity to the HTML template created on 1st oct",
    "absentees": 4
},
{
  "day" : 30 ,  
  "date": "30-10-2022",
    "topic": "Git Pull Requests",
    "task": "Create a basic Git pull request to add interactivity to the HTML template created on 1st oct",
    "absentees": 1
},
{
  "day" : 31 ,  
  "date": "31-10-2022 (No Sessions - HOLIDAY)",
}
]

const november_data =  [
  {
    "day" : 1 ,  
    "date": "1-11-2022 (No Sessions - HOLIDAY)",
  },
  {
    "day" : 2 ,  
    "date": "2-11-2022",
      "topic": "Routing",
      "task": "Create routing for all the endpoints",
      "absentees": 2
  },
  {
    "day" : 3 ,  
    "date": "3-11-2022",
      "topic": "Database Design",
      "task": "Design a database schema to store user data",
      "absentees": 0
  },
  {
    "day" : 4 ,  
    "date": "4-11-2022",
      "topic": "Authentication",
      "task": "Implement authentication using JWT",
      "absentees": 2
  },
  {
    "day" : 5 ,  
    "date": "5-11-2022",
      "topic": "Database Security",
      "task": "Implement database security using hashing and salting",
      "absentees": 1
  },
  {
    "day" : 6 ,  
    "date": "6-11-2022",
      "topic": "Error Handling",
      "task": "Implement error handling for all endpoints",
      "absentees": 0
  },
  {
    "day" : 7 ,  
    "date": "7-11-2022 (No Sessions - HOLIDAY)",
  },
  {
    "day" : 8 ,  
    "date": "8-11-2022 (No Sessions - HOLIDAY)",
  },
  {
    "day" : 9 ,  
    "date": "9-11-2022",
      "topic": "Deployment",
      "task": "Deploy the application to a server",
      "absentees": 0
  },
  {
    "day" : 10 ,  
    "date": "10-11-2022",
      "topic": "Performance Optimization",
      "task": "Optimize the application for performance",
      "absentees": 0
  },
  {
    "day" : 11 ,  
    "date": "11-11-2022",
      "topic": "Security Analysis",
      "task": "Analyze the application for security vulnerabilities",
      "absentees": 1
  },
  {
    "day" : 12 ,  
    "date": "12-11-2022",
      "topic": "API Versioning",
      "task": "Implement API versioning for the application",
      "absentees": 0
  },
  {
    "day" : 13,  
    "date": "13-11-2022",
      "topic": "Scalability",
      "task": "Design the application for scalability",
      "absentees": 2
  },
  {
    "day" : 14 ,  
    "date": "14-11-2022 (No Sessions - HOLIDAY)",
  },
  {
    "day" : 15 ,  
    "date": "15-11-2022 (No Sessions - HOLIDAY)",
  },
  {
    "day" : 16 ,  
    "date": "16-11-2022",
      "topic": "Database Migration",
      "task": "Write database migrations for all the changes",
      "absentees": 3
  },
  {
    "day" : 17 ,  
    "date": "17-11-2022",
      "topic": "API Throttling",
      "task": "Implement API throttling to prevent abuse",
      "absentees": 1
  },
  {
    "day" : 18 ,  
    "date": "18-11-2022",
      "topic": "Data Validation",
      "task": "Implement data validation for all endpoints",
      "absentees": 0
  },
  {
    "day" : 19 ,  
    "date": "19-11-2022",
      "topic": "Monitoring",
      "task": "Implement application monitoring and alerts",
      "absentees": 0
  },
  {
    "day" : 20 ,  
    "date": "20-11-2022",
      "topic": "Backup Strategy",
      "task": "Design a backup strategy for the application",
      "absentees": 2
  },
  {
    "day" : 21 ,  
    "date": "21-11-2022 (No Sessions - HOLIDAY)",
  },
  {
    "day" : 22 ,  
    "date": "22-11-2022 (No Sessions - HOLIDAY)",
  },
  {
    "day" : 23 ,  
    "date": "23-11-2022",
      "topic": "Data Encryption",
      "task": "Implement data encryption for sensitive data",
      "absentees": 5
  },
  {
    "day" : 24 ,  
    "date": "24-11-2022",
      "topic": "API Caching",
      "task": "Implement caching for API responses",
      "absentees": 2
  },
  {
    "day" : 25 ,  
    "date": "25-11-2022",
      "topic": "Data Modeling",
      "task": "Design a data model to store user data",
      "absentees": 3
  },
  {
    "day" : 26 ,  
    "date": "26-11-2022",
      "topic": "API Versioning",
      "task": "Implement API versioning for the application",
      "absentees": 1
  },
  {
    "day" : 27 ,  
    "date": "27-11-2022",
      "topic": "API Documentation",
      "task": "Create documentation for all the endpoints",
      "absentees": 2
  },
  {
    "day" : 28 ,  
    "date": "28-11-2022 (No Sessions - HOLIDAY)",
  },
  {
    "day" : 29 ,  
    "date": "29-11-2022 (No Sessions - HOLIDAY)",
  },
  {
    "day" : 30 ,  
    "date": "30-11-2022",
      "topic": "Routing",
      "task": "Create routing for all the endpoints",
      "absentees": 0
  }
]

const december_data = [
	{
		"day" : 1 ,
    "date": "01-12-2022",
		"topic": "SQL",
		"task": "Writing SQL queries",
		"absentees": 2
	},
	{
		"day" : 2 ,
    "date": "02-12-2022",
		"topic": "MongoDB",
		"task": "Data modelling",
		"absentees": 0
	},
	{
		"day" : 3 ,
    "date": "03-12-2022",
		"topic": "MySQL",
		"task": "Writing stored procedures",
		"absentees": 1
	},
	{
		"day" : 4 ,
    "date": "04-12-2022",
		"topic": "Oracle",
		"task": "Data modelling",
		"absentees": 0
	},
	{
		"day" : 5 ,
    "date": "05-12-2022 (No Sessions - HOLIDAY)",
	},
	{
		"day" : 6 ,
    "date": "06-12-2022 (No Sessions - HOLIDAY)",
	},
	{
		"day" : 7 ,
    "date": "07-12-2022",
		"topic": "Redis",
		"task": "Writing stored procedures",
		"absentees": 0
	},
	{
		"day" : 8 ,
    "date": "08-12-2022",
		"topic": "Cassandra",
		"task": "Data modelling",
		"absentees": 2
	},
	{
		"day" : 9 ,
    "date": "09-12-2022",
		"topic": "Hadoop",
		"task": "Creating and managing databases",
		"absentees": 1
	},
	{
		"day" : 10 ,
    "date": "10-12-2022",
		"topic": "SQL",
		"task": "Writing SQL queries",
		"absentees": 4
	},
	{
		"day" : 11 ,
    "date": "11-12-2022",
		"topic": "MongoDB",
		"task": "Data modelling",
		"absentees": 0
	},
	{
		"day" : 12 ,
    "date": "12-12-2022 (No Sessions - HOLIDAY)",
	},
	{
		"day" : 13 ,
    "date": "13-12-2022 (No Sessions - HOLIDAY)",
	},
	{
		"day" : 14 ,
    "date": "14-12-2022",
		"topic": "SQLite",
		"task": "Creating and managing databases",
		"absentees": 1
	},
	{
		"day" : 15 ,
    "date": "15-12-2022",
		"topic": "PostgreSQL",
		"task": "Writing SQL queries",
		"absentees": 0
	},
	{
		"day" : 16 ,
    "date": "16-12-2022",
		"topic": "Redis",
		"task": "Writing stored procedures",
		"absentees": 2
	},
	{
		"day" : 17 ,
    "date": "17-12-2022",
		"topic": "Cassandra",
		"task": "Data modelling",
		"absentees": 4
	},
	{
		"day" : 18 ,
    "date": "18-12-2022",
		"topic": "Hadoop",
		"task": "Creating and managing databases",
		"absentees": 1
	},
	{
		"day" : 19 ,
    "date": "19-12-2022 (No Sessions - HOLIDAY)",
	},
	{
		"day" : 20 ,
    "date": "20-12-2022 (No Sessions - HOLIDAY)",
	},
	{
		"day" : 21 ,
    "date": "21-12-2022",
		"topic": "MySQL",
		"task": "Writing stored procedures",
		"absentees": 2
	},
	{
		"day" : 22 ,
    "date": "22-12-2022",
		"topic": "Oracle",
		"task": "Data modelling",
		"absentees": 1
	},
	{
		"day" : 23 ,
    "date": "23-12-2022",
		"topic": "SQLite",
		"task": "Creating and managing databases",
		"absentees": 0
	},
	{
		"day" : 24 ,
    "date": "24-12-2022",
		"topic": "PostgreSQL",
		"task": "Writing SQL queries",
		"absentees": 4
	},
	{
		"day" : 25 ,
    "date": "25-12-2022",
		"topic": "Redis",
		"task": "Writing stored procedures",
		"absentees": 0
	},
	{
		"day" : 26 ,
    "date": "26-12-2022 (No Sessions - HOLIDAY)",
	},
	{
		"day" : 27 ,
    "date": "27-12-2022 (No Sessions - HOLIDAY)",
	},
	{
		"day" : 28 ,
    "date": "28-12-2022",
		"topic": "SQL",
		"task": "Writing SQL queries",
		"absentees": 2
	},
	{
		"day" : 29 ,
    "date": "29-12-2022",
		"topic": "MongoDB",
		"task": "Data modelling",
		"absentees": 0
	},
	{
		"day" : 30 ,
    "date": "30-12-2022",
		"topic": "MySQL",
		"task": "Writing stored procedures",
		"absentees": 3
	},
	{
		"day" : 31 ,
    "date": "31-12-2022",
		"topic": "Oracle",
		"task": "Data modelling",
		"absentees": 1
	}
]


const PORT = 2525;
const app =  express();
const MONGO_URL = 'mongodb://127.0.0.1';
export const client = new MongoClient(MONGO_URL); // dial
// Top level await
await client.connect(); // call
console.log("Mongo is connected !!!  ");

app.get("/" , function (request , response){
  response.send("Zen Class DataBase")
})

app.get("/users" ,async function (request , response){
  const users = await client
  .db('Zen_Class_DB')
  .collection('users')
  .find({})
  .toArray()
  
  response.send(users)  
})

app.get("/mentors" ,async function (request , response){
  const mentors = await client
  .db('Zen_Class_DB')
  .collection('mentors')
  .find({})
  .toArray()

  response.send(mentors) 
})

app.get("/october" ,async function (request , response){
  const october_data = await client
  .db('Zen_Class_DB')
  .collection('OCT_DATA')
  .find({})
  .toArray()

  response.send(october_data)  
})
 
app.get("/november" ,async function (request , response){
  const november_data = await client
  .db('Zen_Class_DB')
  .collection('NOV_DATA')
  .find({})
  .toArray()

  response.send(november_data)  
})

app.get("/december" ,async function (request , response){
  const december_data = await client
  .db('Zen_Class_DB')
  .collection('DEC_DATA')
  .find({})
  .toArray()

  response.send(december_data)  
})

app.listen(PORT, ()=> console.log(`The server started in : ${PORT}`))

 
