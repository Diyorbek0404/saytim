import React, { useContext } from 'react';
import AddChildren from '../component/AddChildren';
import GetChildren from '../component/GetChildren';
import { Context } from '../../context/Context';

const Children = () => {
    const { user } = useContext(Context);
    return (
        <div className="container">
            <h3 className="text-center">Barcha o'quvchilar</h3>
            {
                user ?
                    <>
                        <AddChildren />
                        <GetChildren />
                    </>
                    :
                    <>
                        <GetChildren />
                    </>
            }
        </div>
    );
}

export default Children;