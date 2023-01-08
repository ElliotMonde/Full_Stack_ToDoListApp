//jshint esversion: 6
/*
 * @author: Elliot Phua
 * @description: revising how to use mongodb and mongoosh commands
 * @date: 26 Dec 2022
 * go to mongodb and make sure "full stack personal journal" db is active
 * Mongodb username: Elliot 
 * Access password: ElliotPhua
 * mongodb+srv://Elliot:ElliotPhua@cluster0.y0ozscs.mongodb.net/?retryWrites=true&w=majority
 * mongodb+srv://Elliot:ElliotPhua@cluster0.y0ozscs.mongodb.net/ToDoFullstack
 */


const express = require("express");
const bodyParser = require("body-parser");
app = express();
const mongoose = require("mongoose");
const _ = require("lodash");
const date = require( __dirname + "/date.js");
const ejs = require("ejs");

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


/* //localhost on port 3000
const db = mongoose.connect("mongodb://127.0.0.1:"+ port)
*/

// mongodb
username = 'Elliot';
password = 'ElliotPhua';
const db = mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.y0ozscs.mongodb.net/ToDoFullstack`);
const port = 3000 || process.env.PORT;
// task document template 
const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        default: "Task Description",
    },
    parentId: {
        type: String
    },
    completed: {
        default : false
    }
})

// notes template that contains the various tasks documents
const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        default: "Untitled"
    },
    tasksToDo: [String], // id of tasks
    tasksCompleted: [String],
    tags: [],
})
// to keep track of all notes of user
const collateSchema = new mongoose.Schema({
    noteLs : [String] //notes id
})

// initialising task constructor, note constructor
const Task = mongoose.model("Task", taskSchema);
const Note = mongoose.model("Note", noteSchema);
const Collate = mongoose.model("Collate", collateSchema);

app.listen(port, function(){
    console.log(`server started on port ${port}`);
})
app.get("/",function(req,res){
    let defaultNoteId = null;
    // default note document to intro
    Note.find(function(err, notesFoundArr){
        if (err){ 
            console.log(err)
        }
        console.log("Note find query executed!" + notesFoundArr);
        if (notesFoundArr.length == 0 ){
            console.log("notes array not found")
            const defaultNote = new Note({
                title: "To-Do List Guide",
                tasksToDo: [],
                tasksCompleted: [],
                tags: ["intro"]
            })
            defaultNote.save((err) => console.log(err));
            defaultNoteId = defaultNote._id.toString();

            Collate.find(function (err, collateFoundArr) {
                if (err) {
                    console.log(err);
                }
                if (collateFoundArr.length == 0) {
                    const newCollate = new Collate({
                        noteLs: []
                    })
                    
                    Note.find(function (err, notesFoundArr) {
                        if (err) {
                            console.log(err)
                        }
                        console.log("line 113: " + notesFoundArr)
                        if (notesFoundArr.length > 0) {
                            for (i = 0; i < notesFoundArr.length; i++) {
                                newCollate.noteLs.push(noteosFoundArr[i]._id.toString());
                            }
                        }
                    })
                    newCollate.save(err => console.log(err)); // save within query callback's scope
                }
            })

            Task.find(function (err, tasksFoundArr) {
                if (err) {
                    console.log(err)
                }
                if (tasksFoundArr.length == 0) {
                    defaultTasks = [{
                        description: "Default task 1",
                        parentId: defaultNoteId,
                        completed: false
                    }, 
                    {
                        description: "Default task 2",
                        parentId: defaultNoteId,
                        completed: false
                    }, 
                    {
                        description: "Default task 3",
                        parentId: defaultNoteId,
                        completed: false
                    }
                    ]
                    Task.create(defaultTasks)
                        .then(defaultTasks => console.log(defaultTasks + " created successfully."))
                        .catch(err => console.log(err)); // create and save multiple default tasks, if promise fulfiled console log success else console log error
                    
                }
                
                
            })

        }else{
            console.log(notesFoundArr);
        }
    })
    res.send("Hey World!")
})

/*
 * To-Do List:
 * User will be able to retrieve and display task items
 * User will be able to add items to list, and add deadline or timer
 * User will be able to change items
 * User will be able to check off or delete task
 * User will be able to group task (indentation): similar to Microsoft To-Do and Google Keep
 * 
 * Process:
 * Generate a database to store collections (various "Notes"), Notes schema blueprint
 * Each Note will be able to add Groups
 * Groups can hold individual Task objects
 * 
 * Get request to load the notes when user at home page "/"
 * Generate a form when user clicks "+" or Add button
 * Send a Post request when user clicks "Done" after writing note
 * Update or Insert or Delete into Notes collection
 * Display the updated notes
 * 
 * Additional: Can add notes that calls APIs such as weather or timezone 
 * 
 */