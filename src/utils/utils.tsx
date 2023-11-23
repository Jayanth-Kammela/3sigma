import Profile from "../assets/profile.svg";
import Email from "../assets/email.svg";
import Mobile from "../assets/mobile.svg";
import Address from "../assets/address.svg";
import Sale from "../assets/sale.svg";
import Date from "../assets/date.svg";
import Time from "../assets/time.svg";
import Bar from "../assets/bar.svg";

export interface InputData {
    label: string;
    icon: any;
    placehoder: string
}


export interface InputDataProps {
    data: InputData;
}

export const leaddata: InputData = {
    label: 'Lead name',
    icon: Profile,
    placehoder: 'Enter lead name'
}

export const emaildata: InputData = {
    label: 'Email ID',
    icon: Email,
    placehoder: 'Example@anyemail.com'
}

export const mobiledata: InputData = {
    label: 'Phone number',
    icon: Mobile,
    placehoder: '+91 8800688763'
}

export const addressdata: InputData = {
    label: 'Address',
    icon: Address,
    placehoder: 'Gugurgram ,India'
}

export const saledata: InputData = {
    label: 'Sale value',
    icon: Sale,
    placehoder: '50,00,000'
}

export const datedata: InputData = {
    label: 'Date',
    icon: Date,
    placehoder: '29 August 2023'
}

export const timedata: InputData = {
    label: 'Time',
    icon: Time,
    placehoder: '20:21 pm'
}

export const productsdata: InputData = {
    label: 'Products',
    icon: Bar,
    placehoder: 'Select Product'
}