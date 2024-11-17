import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectsService {

    getAllProjects(){
        return ['project1','project2','project3','project4']
    }
}
