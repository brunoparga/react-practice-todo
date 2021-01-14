## Todo ##

The classic to-do app in React, overengineered with Redux.

## API ##

This is the contract for the app's API:

```
type Todo = {
  id: integer; // must be unique
  task: string;
  done: boolean;
}

GET /todos
List all Todos.
Respond with a JSON array of Todos.

POST /todos
Add the Todo contained in the request body to the list of Todos.
Respond with the new Todo as JSON.

PUT /todos/:id
Toggle the 'done' variable in the Todo with the given id.
Respond with the affected Todo as JSON.

DELETE /todos/:id
Remove the Todo with the given id from the list.
No need for a response.
```