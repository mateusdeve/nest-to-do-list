import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';

import { Todo } from './entities/todo.entity';

@Injectable()
export class TodosService {
  async create(createTodoDto: CreateTodoDto) {
    const todo = Todo.create({ ...createTodoDto });
    return await todo.save();
  }

  async findAll() {
    return Todo.find();
  }

  async findOne(id: number) {
    const todos = await Todo.find();
    return todos.find((todo) => todo.id === id);
  }

  async update(updateTodoDto: CreateTodoDto) {
    return await this.create(updateTodoDto);
  }

  async remove(id: number) {
    const todos = await Todo.find();
    const todo = todos.find((todo) => todo.id === id);

    return await Todo.remove(todo);
  }
}
