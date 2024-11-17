import  {Body, Controller, Get, Param, Post} from '@nestjs/common'
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller({})
export class TaskController{
    
    constructor(private taskService:TasksService){}


    //@Query() permite obtener los parametros de la URL despues del ?
    @Get('/tasks')
    getAllTask(){
        return this.taskService.GetTasks();
    }

    @Get('/tasks/:id')
    getTask(@Param('id') id:string){
        console.log(id);
        return this.taskService.GetTask(parseInt(id));
    }

    @Post('/tasks')
    createTask(@Body() task: CreateTaskDto){
        return this.taskService.CreateTasks(task);
    }

    @Post('/tasks')
    updateTask(@Body() task: UpdateTaskDto){
        return this.taskService.updateTask(task);
    }
}