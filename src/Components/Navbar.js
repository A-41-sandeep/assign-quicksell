import React, {useState} from 'react'
import filter from '../Images/filter.svg'
import arrow from '../Images/arrow.svg'

import './Navbar.css'

export default function Navbar(props) {
    const [toggleDisplayBtn, settoggleDisplayBtn] = useState(false);

    function handleDisplayToggle(e){
        settoggleDisplayBtn(!toggleDisplayBtn);
        if(e.target.value !== undefined){
            props.handleGroupValue(e.target.value);
        }
    }
    function handleOrderingValue(e){
        settoggleDisplayBtn(!toggleDisplayBtn);
        if(e.target.value !== undefined){
            props.handleOrderValue(e.target.value);
        }
    }
    
  return (
    <>
        <div className="navbar">
            <div className="container">
                <div>
                    <div className="display-btn" onClick={handleDisplayToggle}>
                        <div className="icon-filter icon-display">
                            <img src={filter} alt="icon" />
                        </div>
                        <div className="disp-txt">
                            Display
                        </div>
                        <div className="icon-drop icon-display">
                            <img src={arrow} alt="icon" />
                        </div>
                    </div>
                    <div className={toggleDisplayBtn ? "dropdown dropdown-show" : "dropdown"}>
                        <div className="display-filters">
                            <div className="dropdown-options">
                                Grouping
                            </div>
                            <div className="dropdown-choose">
                                <select value={props.groupValue} onChange={handleDisplayToggle} className='option-select' name="grouping" id="">
                                    <option value="status">Status</option>
                                    <option value="user">User</option>
                                    <option value="priority">Priority</option>
                                </select>
                            </div>
                        </div>
                        <div className="display-filters">
                            <div className="dropdown-options">
                                Ordering
                            </div>
                            <div className="dropdown-choose">
                                <select value={props.orderValue} onChange={handleOrderingValue} className='option-select' name="grouping" id="">
                                    <option value="priority">Priority</option>
                                    <option value="title">Title</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
