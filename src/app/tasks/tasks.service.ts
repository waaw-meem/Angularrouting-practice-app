export class TaskService{
    private tasks = [
        {
          id: 1,
          name: 'Working on Web Application',
          assigned: 'Wali'
        },
        {
          id: 2,
          name: 'Rust Backend Implementation',
          assigned: 'Qadir'
        },
        {
          id: 3,
          name: 'Docker Installing',
          assigned: 'Anas'
        }
      ];


      getTasks(){
        return this.tasks
      }

      getTask(id?:number){
        const task = this.tasks.find(
            (s) => {
              return s.id === id;
            })
        return task
      }


      updateServer(id: number, serverInfo: {name: string, assigned: string}) {
        const task = this.tasks.find(
          (s) => {
            return s.id === id;
          }
        );
        if (task) {
          task.name = serverInfo.name;
          task.assigned = serverInfo.assigned;
        }
      }


}