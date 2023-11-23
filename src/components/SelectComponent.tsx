import React from 'react'
import styles from "../app.module.css";

const SelectComponent = ({label}:any) => {
    return (
        <React.Fragment>
            <label className={styles.emaillb}>{label}</label>
            <div className={`${styles.mainselect} flex w-full my-2`}>
                <button className={`${styles.bartn} flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-md font-medium text-center rounded-s-lg focus:outline-none`} type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="#3FAEFD">
                        <path d="M5.35135 0.666667H22V3.33333H5.35135V0.666667ZM5.35135 11.3333V8.66667H22V11.3333H5.35135ZM1.78378 0C2.25687 0 2.71059 0.210713 3.04511 0.585786C3.37963 0.960859 3.56757 1.46957 3.56757 2C3.56757 2.53043 3.37963 3.03914 3.04511 3.41421C2.71059 3.78929 2.25687 4 1.78378 4C1.31069 4 0.856983 3.78929 0.522458 3.41421C0.187934 3.03914 0 2.53043 0 2C0 1.46957 0.187934 0.960859 0.522458 0.585786C0.856983 0.210713 1.31069 0 1.78378 0ZM1.78378 8C2.25687 8 2.71059 8.21071 3.04511 8.58579C3.37963 8.96086 3.56757 9.46957 3.56757 10C3.56757 10.5304 3.37963 11.0391 3.04511 11.4142C2.71059 11.7893 2.25687 12 1.78378 12C1.31069 12 0.856983 11.7893 0.522458 11.4142C0.187934 11.0391 0 10.5304 0 10C0 9.46957 0.187934 8.96086 0.522458 8.58579C0.856983 8.21071 1.31069 8 1.78378 8ZM5.35135 19.3333V16.6667H22V19.3333H5.35135ZM1.78378 16C2.25687 16 2.71059 16.2107 3.04511 16.5858C3.37963 16.9609 3.56757 17.4696 3.56757 18C3.56757 18.5304 3.37963 19.0391 3.04511 19.4142C2.71059 19.7893 2.25687 20 1.78378 20C1.31069 20 0.856983 19.7893 0.522458 19.4142C0.187934 19.0391 0 18.5304 0 18C0 17.4696 0.187934 16.9609 0.522458 16.5858C0.856983 16.2107 1.31069 16 1.78378 16Z" fill="#3FAEFD" />
                    </svg>
                </button>
                <label htmlFor="option" className="sr-only">Choose a {label}</label>
                <select className={`text-sm rounded-e-lg  border-s-2  w-full ${styles.inputselect}`}>
                    <option defaultValue={'None'}>Choose {label}</option>
                    <option value="option1">{label} 1</option>
                    <option value="TX">{label} 2</option>
                    <option value="WH">{label} 3</option>
                </select>
            </div>
        </React.Fragment>
    )
}

export default SelectComponent