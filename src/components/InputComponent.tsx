import React from 'react'
import styles from "../app.module.css";
import { InputDataProps } from '../utils/utils';

const InputComponent: React.FC<InputDataProps> = ({ data }) => {
    return (
        <React.Fragment>
            <div className='my-4'>
                <label className={styles.emaillb}>{data.label}</label>
                <div className="relative">
                    <input type="text" className={`${styles.input} py-3 px-4 ps-11 my-1 block w-full bg-white text-md`} placeholder={data.placehoder} />
                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                        <img src={data.icon} alt="" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default InputComponent