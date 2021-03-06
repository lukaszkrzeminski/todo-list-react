<a href="https://lukaszkrzeminski.github.io/todo-list-react/"><img width=250px src="public/logo.png" title="Todo list logo" alt="logo listy zadań"></a>

*Click on the image below to check the demo*

# A simple To do list - this time in React!

## A website that allows you to create a task list: add new tasks to do, mark them as done or delete them.

### Description
It's a simple page where user can add / check / delete tasks to do. It is my todo-list project but this time I used React.js.

### What You can do

- Type a new task in the input and send it to the list
- Mark a task as done
- Delete a task
- Mark all task as done
- Hide all done tasks
- Check any single task by clicking it
- Search for tasks
- Add simple example tasks

### Added features and future work

- added responsive design for smaller screens
- updated js script by using immutability
- added feature that sets focus on the input after user enters a task
- added button that marks all tasks as done
- added button that hides all tasks marked as done
- saving the list in Local storage feature added
- tasks management moved to Redux
- added author page using React router
- clicking on a task moves to the current task page
- added feature that allows to search tasks by name


### Technologies Used

- HTML
- CSS
- BEM methodology
- JS, immutability
- React.js, React Router
- Styled components
- Custom hooks
- Redux, Redux Saga, Redux toolkit
- Async functions

### Short Preview

1. Fetching example tasks:

<img src="preview_example_tasks.gif" alt="adding example tasks" width=250px />

2. Adding new Task:

<img src="preview_new_task.gif" alt="adding new task" width=250px />

3. Single Task Page:

<img src="preview_single_task.gif" alt="single task page" width=250px />

4. Searching for tasks:

<img src="preview_searching_tasks.gif" alt="searching for tasks" width=250px />

### Author
Łukasz Krzemiński

### Contact
contact me at: [krzeminski.lukasz@interia.pl](krzeminski.lukasz@interia.pl)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.