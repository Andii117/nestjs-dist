import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {

    private task = [];

    GetTasks(){
        return this.task;
    }

    GetTask(id: number){
        const taskFound = this.task.find(task => task.id === id);
        if(!taskFound){
            return new NotFoundException(`The task with id ${id} not found`);
        }
        return taskFound;
    }


    CreateTasks(task: CreateTaskDto) {
        this.task.push({
            ...task,
            id: this.task.length + 1,
        })
        return task;
    }

    updateTask(task: UpdateTaskDto) {
        this.task.push({
            ...task,
            id: this.task.length + 1,
        })
        return task;
    }


}
