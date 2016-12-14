import {observable, computed} from 'mobx';

let nextid = 0;

class 	TodoStore{

    @observable todos = [];
    
    addTodo(todoName) {
        this.todos.push({
            name: todoName,
            completed: false,
            id: nextid++,
        });
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

const todoStore = new TodoStore()

export default todoStore;