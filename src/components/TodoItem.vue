<template>
    <li>
        <span v-bind:class="{ done: todo.completed }">
            <input type="checkbox" />
            <strong>
                {{ index + 1 }}
            </strong>
            {{ uppercase(todo.title) }}
            {{ todo.completed }}
        </span>
        <button class="rm" @click="$emit('remove-todo', todo.id)">&times;</button>
    </li>
</template>  

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true,
        },
        index: Number
    },

    computed: {
        uppercase() {
            return (v) => {
                return v.toUpperCase()
            }
        }
    }
}

</script>

<style>
li {
    border: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    padding: .5rem 2rem;
    margin-bottom: 1rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
}

.rm {
    background-color: red;
    color: #fff;
    border: 1px solod red;
    border-radius: 5px;
    font-weight: bold;
}

input {
    margin-right: 1rem;
}

.done {
    text-decoration: line-through;
}
</style>