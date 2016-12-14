import {observable, computed} from 'mobx';

let nextid = 0;

class todoStore{

    @observable todos = [];
    
    addTodo(todoName) {
        this.todos.push({
                name: todoName,
                completed: false,
                id: nextid++,
            });
        console.log(this.todoStore.length);
    }

    @computed get TodoCount() {
        return this.todos.length;
    }

    toggleTodo(id) {
        this.todos = this.todos.map(todo => {
            if(todo.id !== id)
                return todo;
            return Object.assign({},
                todo, {completed: !todo.completed})
        });
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(todo => {
            if(todo.id !== id)
                return todo;
        });
    }

    
}

const todoStore = new todoStore()

export default todoStore;