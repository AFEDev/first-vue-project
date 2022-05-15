<template>
    <div>
        <h2>Todo app</h2>
        <router-link to="/">Home</router-link>
        <hr />
        <AddTodo @add-todo="addTodo" />
        <select v-model="filter">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="not-completed">Not Completed</option>
        </select>
        <hr />
        <Loader v-if="loading" />
        <TodoList v-else-if="filteredTodos.length" v-bind:todos="filteredTodos" @remove-todo="removeTodo" />
        <p v-else>No todos!!!</p>
    </div>
</template>


<script>
import TodoList from "../components/TodoList";
import AddTodo from "../components/addTodo";
import Loader from "../components/loader"

export default {
    name: "app",
    data() {
        return {
            todos: [],
            loading: true,
            filter: 'all'
        }
    },
    mounted() {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(json => {
                setTimeout(() => {
                    this.todos = json
                    this.loading = false
                }, 1000)
            })
    },
    // watch: {
    //     filter(value) {
    //         console.log(value)
    //     }
    computed: {
        filteredTodos() {
            let filter
            if (this.filter === 'all') {
                filter = this.todos
            }

            if (this.filter === 'completed') {
                filter = this.todos.filter(t => t.completed)
            }

            if (this.filter === 'not-completed') {
                filter = this.todos.filter(t => !t.completed)
            }

            return filter
        }
    },
    methods: {
        removeTodo(id) {
            this.todos = this.todos.filter(t => t.id !== id)
        },
        addTodo(todo) {
            this.todos.push(todo)
        },
    },
    components: {
        TodoList,
        AddTodo,
        Loader
    },
};
</script>