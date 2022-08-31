import React from 'react';

function Adminhome() {


    return (

        <div className='adminHome'>

            <div className='rows'>

                <h1 className='h-adminHome'>Admin Home</h1>

                <div className='col'>
                    
                    <div className='card card1'>
                        <a href='/finance-home'><h1 className='topic'>Finance Management</h1></a>
                    </div>

                    <div className='card card2'>
                    <a href='/contract-home'><h1 className='topic'>Contract Management</h1></a>
                    </div>

                    <div className='card card3'>
                    <a href='/crew-and-salary-home'><h1 className='topic'>Crew & Salary Management</h1></a>
                    </div>

                    <div className='card card4'>
                    <a href='/material-home'><h1 className='topic'>Material Management</h1></a>
                    </div>

                    <div className='card card5'>
                    <a href='/employee-home'><h1 className='topic'>Employee Management</h1></a>
                    </div>

                    <div className='card card6'>
                    <a href='/customer-home'><h1 className='topic'>Customer Management</h1></a>
                    </div>

                    <div className='card card7'>
                    <a href='/shedule-home'><h1 className='topic'>Time Management & Scheduling</h1></a>
                    </div>

                    <div className='card card8'>
                    <a href='/architect-home'><h1 className='topic'>Architecture Management</h1></a>
                    </div>

                </div>

            </div>
            
        </div>

    );
}

export default Adminhome;
