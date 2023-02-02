import { Button, Container, Divider, Grid, Group, Select, Text, Textarea, TextInput } from "@mantine/core";

//// MODELS 
interface User {
    id: string
    name: string
}

interface Task {
    id: number
    assignee: User
    date: string
    text: string
}

//// END MODELS

interface SelectComponentProps {
    data: User[]
}

interface BlaBlaBla {
    
}


const SelectComponent = ({ data }: SelectComponentProps) => {

    const listData = data.map(x => (
        {
            value: x.id,
            label: x.name
        }
    ))


    return (
        <Select
            label="Assignee"
            placeholder="Select"
            data={listData}
        />
    )
}

interface TaskContainerProps {
    name: string
    date: string
    text: string
}


const TaskContainer = ({ name, date, text }: TaskContainerProps) => {
    return (
        <div className={"taskContainer"}>
            <Group spacing={"xl"}>
                <Text td="underline">{name}</Text>
                <Text ta="right">{date}</Text>
            </Group>
            <Text>
                {text}
            </Text>
            <Group>
                <Button variant={"outline"} compact>Edit</Button>
                <Button variant={"outline"} color={"red"} compact>Delete</Button>
            </Group>
        </div>
    )
}


interface TasksListProps {
    title: string
    className: string
    tasks: Task[]
}

const TasksList = ({ title, className, tasks }: TasksListProps) => {
    
    const items = tasks.map(
        task => <TaskContainer key={task.id} text={task.text} name={task.assignee.name} date={task.date}/>
    )
    
    return (
        <>
            <h5 className={className}>{title}</h5>
            {items}
        </>
    )
}

const Root = () => {
    const users: User[] = [
        { id: "1", name: "Peter" },
        { id: "2", name: "Maria" },
        { id: "3", name: "Jack" },
        { id: "4", name: "Willy" },
    ]

    const tasksBacklog: Task[] = [
        { id: 1, assignee: users[0], date: '02.02.2023', text: 'Water the flowers' }
    ]

    const tasksInProgress: Task[] = [
        { id: 2, assignee: users[1], date: '02.02.2023', text: 'Water the flowers' }
    ]

    const tasksDone: Task[] = [
        { id: 3, assignee: users[2], date: '02.02.2023', text: 'Pet the cat' }
    ]

    return (
        <Container size={"xl"}>
            <h1>ToDo manager</h1>
            <Grid gutter={40}>
                <Grid.Col span={3}>
                    <form>
                        <SelectComponent data={users} />
                        <Textarea label="Task description" placeholder="You have to do...." />
                        <Button type="submit" mt="sm">
                            Create task
                        </Button>
                    </form>


                    <Divider my="xs" label="Filters" labelPosition="center" variant={"dashed"} />

                    <SelectComponent data={users} />
                    <TextInput label="Description" placeholder="Search by description..." />

                </Grid.Col>
                <Grid.Col span={3}>
                    <TasksList title="Backlog" className="backlogListContainer" tasks={tasksBacklog}/>

                </Grid.Col>
                <Grid.Col span={3}>
                    <TasksList title="In Progress" className="inProgressListContainer" tasks={tasksInProgress} />

                </Grid.Col>
                <Grid.Col span={3}>
                    <TasksList title="Done" className="doneListContainer" tasks={tasksDone}/>

                </Grid.Col>
            </Grid>
        </Container>
    )
}

export default Root;
