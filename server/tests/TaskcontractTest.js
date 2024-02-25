const {expect}=require('chai');
const {ethers}=require('hardhat');

describe("Task Contract", function(){
    let TaskContract;//name of contract
    let taskContract;//it's instances
    let owner;
let Totaltasks;
    const NUM_TOTAL_TASKS=5;
    beforeEach(async function(){
        TaskContract=await ethers.getContractFactory('Taskcontract');
        [owner]=await ethers.getSigner();
        taskContract=await TaskContract.deploy();//insatnce created


        Totaltasks=[];

        for(let i=0; i<NUM_TOTAL_TASKS; i++){
            let tasks={
                'taskText':'task NO.'+i,
                'isDeleted':false
            };
   
        await taskContract.addTask(tasks.taskText,tasks.isDeleted);

        }
        Totaltasks.push(tasks);
    });

    describe("Add Tasks", function(){
        it("should emit addTassk event",async function(){
            let tasks={
                'taskText':"new task",
                'isDeleted':false
            };

  
    await expect(await taskContract.addTask(tasks.taskText,tasks.isDeleted)).to.emit(taskContract,'AddTask').withArgs(owner.address,NUM_TOTAL_TASKS);
        })
    });

    describe("get all Tasks",function(){
        it("should return the correct number of total tasks",async function(){
            let taskFromChain=await taskContract.getMyTasks();
            await expect(taskFromChain.length).to.equal(NUM_TOTAL_TASKS);
        })
    });
    describe("Delete task", function(){
        it("should check the task is delted",async function(){
            const taskId=0;
            const isDeleted=true;
            await expect(await taskContract.deleteTask(taskId,isDeleted)).to.emit(totalTasks,'DeleteTask').withArgs(taskId,isDeleted);
        })
    })
})