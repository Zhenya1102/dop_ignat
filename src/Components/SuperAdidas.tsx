import React from 'react';

type SuperAdidasPropsType = {
    tasks: TasksPropsType[]
    children?: React.ReactNode
}


type TasksPropsType = {
    id:number
    title:string
    isDone: boolean
}

export const SuperAdidas:React.FC<SuperAdidasPropsType> = (props) => {
    const {tasks, children} = props
    return (
        <div>
            <ul>
                {tasks.map(el=> {
                    return (
                        <li key={el.id}>
                            <span>{el.id}</span>
                            <span>{el.title}</span>
                            <input type={'checkbox'} checked={el.isDone}/>
                        </li>
                    )
                })}
            </ul>
            <div>{children}</div>
            <div>===========================================</div>
        </div>
    );
};
