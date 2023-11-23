import React from 'react'
import styles from '../app.module.css';
import InputComponent from '../components/InputComponent';
import { addressdata, datedata, emaildata, leaddata, saledata, timedata } from '../utils/utils';
import Rectangle from '../assets/Rectangle.png';
import SelectComponent from '../components/SelectComponent';
import Logo from "../assets/3sigma.png";

const LeadPage = () => {
    return (
        <React.Fragment>
            <div className={styles.container}>
                <form className={styles.formContainer} action="">
                    <div className="flex justify-between items-center mt-2 mb-4">
                        <div>
                            <p className={styles.headtxt}>Magnabox Private limited </p>
                        </div>
                        <div>
                            <img src={Logo} className={styles.logo} alt="" />
                        </div>
                    </div>

                    <div className="flex justify-between items-center mt-4 mb-14">
                        <div>
                            <p className={styles.leadtxt}>Add new lead form</p>
                        </div>
                        <div>
                            <button className={styles.btncancel} type='button'>Cancel</button>
                        </div>
                    </div>

                    <InputComponent data={leaddata} />
                    <InputComponent data={emaildata} />
                    <InputComponent data={addressdata} />
                    <div>
                        <img src={Rectangle} className={`${styles.img} w-full`} alt="" />
                    </div>
                    <InputComponent data={saledata} />
                    <InputComponent data={datedata} />
                    <InputComponent data={timedata} />

                    <SelectComponent label={'Options'} />
                    <SelectComponent label={'Products'} />

                    <div className="my-2">
                        <label htmlFor="note" className={styles.emaillb}>Note</label>
                        <textarea id="message" rows={4} className={`${styles.txtarea} block p-2.5 w-full text-md rounded-lg`} placeholder="Enter note"></textarea>
                    </div>

                    <div className="my-16">
                        <button className={`${styles.btnlead} w-full`}>Add lead</button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}

export default LeadPage