import React from 'react'
import ScopeOfWork from '../../../Components/ScopeOfWork/ScopeOfWork'
import WorksDetailsCard from '../../../Components/WorksDetailsCard/WorksDetailsCard'
import './worksdetails.scss'
const WorksDetails = () => {
    return (
        <div className='works__details'>
            {/* works details header */}
            <div className='works_details_header'>
                <img src='https://layouti.com/wp-content/uploads/2021/04/11Free-Paper-Tube-Logo-Mockup-PSD-2019-scaled.jpg' alt=''/>
            </div>
            {/* works details header */}
            <WorksDetailsCard />
            <ScopeOfWork />
        </div>
    )
}

export default WorksDetails