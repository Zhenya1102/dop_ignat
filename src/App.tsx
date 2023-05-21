import React from 'react';
import './App.css';
import {SuperButton} from './Components/SuperButton';
import {SuperAdidas} from './Components/SuperAdidas';

function App() {
    const tasks = [
        {id: 1, title: 'HTML&Css', isDone: true},
        {id: 2, title: 'Js', isDone: true},
        {id: 3, title: 'React', isDone: false}
    ]
    return (
        <div className="App">
            {/*<SuperButton name={'Click'} callBack={() => {}} color={'red'}/>*/}
            {/*что между вызовами тегами наз. children*/}
            <SuperButton  callBack={() => {}} color={'red'}>RED SUPER BUTTON</SuperButton>
            <SuperButton  callBack={() => {}}>SUPER BUTTON</SuperButton>
            <SuperButton  callBack={() => {}} disabled>DISABLED SUPER BUTTON</SuperButton>
            <SuperAdidas tasks={tasks}/>
            <SuperAdidas tasks={tasks}>
                <SuperButton  callBack={() => {}} color={'red'}>RED SUPER BUTTON</SuperButton>
                <SuperButton  callBack={() => {}}>SUPER BUTTON</SuperButton>
                <input type="text"/>
                <input type="text"/>
                <div>info</div>
                <div>info</div>
                <div>info</div>
                <div>info</div>
            </SuperAdidas>
            <SuperAdidas tasks={tasks}>
                <SuperButton  callBack={() => {}} color={'red'}>RED SUPER BUTTON</SuperButton>
                <SuperButton  callBack={() => {}}>SUPER BUTTON</SuperButton>
                <SuperButton  callBack={() => {}} disabled>DISABLED SUPER BUTTON</SuperButton>
                <div>info</div>
                <div>info</div>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
            </SuperAdidas>
        </div>
    );
}

export default App;
