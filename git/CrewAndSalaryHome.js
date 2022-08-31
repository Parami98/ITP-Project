import React from 'react';

function Crewandsalaryhome(){
    return (
        <div>
            <h1 className='h-tag'>CREW AND SALARY Management</h1>
            <div className='adminHome'>

            <div className='rows'>

                <div className='col'>
                    
                    <div className='card card1'>
                        <a href='/crew/add'><h1 className='topic'>Add Crew</h1></a>
                    </div>

                    <div className='card card2'>
                    <a href='/crew/list'><h1 className='topic'>Crew List</h1></a>
                    </div>

                    <div className='card card1'>
                        <a href='/salary/add'><h1 className='topic'>Add Salary</h1></a>
                    </div>

                    <div className='card card2'>
                        <a href='/salary/list'><h1 className='topic'>Salary List</h1></a>
                    </div>

                </div>

            </div>
            
        </div>
        </div>
    );
}

export default Crewandsalaryhome;
