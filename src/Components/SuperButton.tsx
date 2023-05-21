import React from 'react';
import s from './SuperButton.module.css'

type SuperButtonPropsType = {
    name?: string
    callBack: () => void
    color?: string
    disabled?: boolean
    children: React.ReactNode // перекинули чайлды в пропсы
}


export const SuperButton: React.FC<SuperButtonPropsType> = (props) => {
    const {name, callBack, color, disabled, children, ...otherProps} = props
    const onclickButtonHandler = () => {
        callBack()
    }
    // const finalClassName = s.button
    //     + (disabled
    //         ? ' ' + s.disabled
    //         : color === 'red'
    //             ? ' ' + s.red
    //             : color === 'secondary'
    //                 ? ' ' + s.secondary
    //                 : ' ' + s.default)
    //     + (className ? ' ' + className : '')

    // const finalClassName = `${s.button} ${s.default}`
    // const finalClassName =
    //     // базовый стиль
    //     `${s.button}
    //      ${color === 'red' ? s.red : s.default}
    //      ${disabled ? s.disabled : ''}`
    const finalClassName =
        // базовый стиль
        `${s.button}
         ${color === 'red' ? s.red : color==='secondary' ? s.secondary : s.default}
         ${disabled ? s.disabled : ''}`

    return (
        <div>
            <button className={finalClassName} onClick={onclickButtonHandler}>{children}</button>
        </div>
    );
};

