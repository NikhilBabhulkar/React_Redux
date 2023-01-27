# Redux Application - TODOLIST 

##### My learning

Redux is a predictable state container designed to help you write JavaScript apps that behave consistently across client, server, and native environments, and are easy to test and maintain all the states easily 

## Basic Structure for applying Redux Application

![2](https://user-images.githubusercontent.com/87929600/215098473-5e083879-74c6-4dfe-8780-fc3967a03f76.png)

Redux works on the Three main part <b>Action</b> <b>Reducers</b> <b>Store</b>

### Redux Store

The Redux store is the main, central bucket which stores all the states of an application. It should be considered and maintained as a single source of truth for the state of the application.

![4](https://user-images.githubusercontent.com/87929600/215099139-83ed8b32-61cc-4d94-adb5-c24db87adc42.png)

### Redux Reducers

Actully Reducer take in two things: previous state and an action. Then they reduce it (read it return) to one entity: the new updated instance of state.

So reducers are basically pure JS functions which take in the previous state and an action and return the newly updated state.

![3](https://user-images.githubusercontent.com/87929600/215099205-e492fcb3-0fb6-4500-a53d-0de1a1ce3f73.png)

### Redux Action

he only way to change the state is to emit an action, which is an object describing what happened

##### In Simple Words

The global state of an application is stored in an object tree within a single store
The only way to change the state is to emit an action, which is an object describing what happened
To specify how the state tree is transformed by actions, we write pure reducers

