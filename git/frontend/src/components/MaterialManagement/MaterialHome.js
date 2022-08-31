import React from 'react';

function Materialhome() {


    return (
        <div>
            <h1 className='h-tag'>Material Management</h1>
            <div className='adminHome'>

            <div className='rows'>

                <div className='col'>
                    
                    <div className='card card1'>
                        <a href='/machinery'><h1 className='topic'>Machinery Management</h1></a>
                    </div>

                    <div className='card card2'>
                    <a href='/contract-home'><h1 className='topic'>Create Material List</h1></a>
                    </div>

                </div>

            </div>
            
        </div>
        </div>
    );
}

export default Materialhome;
