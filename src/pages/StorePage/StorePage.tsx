import React, { FC } from "react";
import Headers from '../../components/Headers'
import StorePageBody from '../../components/StorePageBody'

interface IProps {};

const StorePage:FC<IProps> = (props) => {
    const text ="Looking For Something to Buy?"
    return (
        <div>
            <Headers searchtext={text}/>
            <StorePageBody/>
        </div>
        
        

    )
};

export default StorePage;