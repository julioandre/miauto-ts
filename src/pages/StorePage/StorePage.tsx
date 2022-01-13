import React, { FC } from "react";
import Headers from '../../components/Headers'
import StorePageBody from '../../components/Appointments'

interface IProps {};

const StorePage:FC<IProps> = (props) => {
    const text ="Your Appointments"
    return (
        <div>
            <Headers searchtext={text}/>
            <StorePageBody/>
        </div>
        
        

    )
};

export default StorePage;