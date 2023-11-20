import React from 'react'

import './Section.css'
import Card from './Card'

let ticketCount = 0;

export default function Section(props) {
    return (
        <>
            <div className="Section-container">
                <div className="Section-header">
                    <div className="Section-header-left">
                        {(() => {
                            switch (props.groupValue) {
                                case 'status':
                                    return {
                                        'Backlog': <div className="Section-icon"> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><g fill="none" stroke="brown" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m4 8l8 4l8-4l-8-4z" /><path fill="gray" d="m12 16l-4-2l-4 2l8 4l8-4l-4-2l-4 2z" /><path d="m8 10l-4 2l4 2m8 0l4-2l-4-2" /></g></svg>
                                        </div>,
                                        'Todo': <div className="Section-icon"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.56 3.69a9 9 0 0 0-2.92 1.95M3.69 8.56A9 9 0 0 0 3 12m.69 3.44a9 9 0 0 0 1.95 2.92m2.92 1.95A9 9 0 0 0 12 21m3.44-.69a9 9 0 0 0 2.92-1.95m1.95-2.92A9 9 0 0 0 21 12m-.69-3.44a9 9 0 0 0-1.95-2.92m-2.92-1.95A9 9 0 0 0 12 3" /></svg>
                                        </div>,
                                        'In progress': <div className="Section-icon"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><g transform="translate(24 0) scale(-1 1)"><path fill="#fdc000" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 2a8 8 0 0 1 8 8a8 8 0 0 1-8 8V4Z" /></g></svg>
                                        </div>,
                                        'Done': <div className="Section-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="blue" height="22px" width="22px" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                        </svg></div>,
                                        'Cancelled': <div className="Section-icon"><svg xmlns="http://www.w3.org/2000/svg" height="22px" width="22px" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg></div>,
                                    }[props.iteratorvalue];

                                case 'user':
                                    return <></>;

                                case 'priority':
                                    return {
                                        0: <div className="card-tag-icon"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 1024 1024"><path fill="currentColor" d="M112 476h160v72H112zm320 0h160v72H432zm320 0h160v72H752z" /></svg></div>,
                                        1: <div className="card-tag-icon"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 48 48"><g fill="currentColor"><path fill-rule="evenodd" d="M35 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-4Zm-1 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v30a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V9ZM19 21a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V21Zm3-1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V21a1 1 0 0 0-1-1h-4Z" clip-rule="evenodd" /><path d="M6 33a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-6Z" /></g></svg></div>,
                                        2: <div className="card-tag-icon"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 48 48"><g fill="currentColor"><path d="M19 21a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V21ZM6 33a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-6Z" /><path fill-rule="evenodd" d="M32 9a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V9Zm3-1a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-4Z" clip-rule="evenodd" /></g></svg></div>,
                                        3: <div className="card-tag-icon"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 48 48"><path fill="currentColor" d="M32 9a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V9ZM19 21a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V21ZM9 30a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H9Z" /></svg></div>,
                                        4: <div className="card-tag-icon"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 16 16"><path fill="orange" d="M5.96 4.457a2.075 2.075 0 1 1 4.08 0l-.856 4.56a1.205 1.205 0 0 1-2.368 0l-.855-4.56ZM9.5 12.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z" /></svg></div>,
                                    }[props.iteratorvalue];

                                default:
                                    return null;
                            }
                        })()}

                        <div className="Section-title">
                            {
                                {
                                    'priority': <>{
                                        props.allpriorities
                                            ? props.allpriorities.map(priorityProperty => (
                                                priorityProperty.priority === props.iteratorvalue
                                                    ? <>{priorityProperty.name}</>
                                                    : null
                                            ))
                                            : null
                                    }</>,
                                    'status': <>{props.iteratorvalue}</>,
                                    'user': <>{props.iteratorvalue}</>
                                }[props.groupValue]
                            }
                        </div>
                        <div className="Section-sum">{ticketCount}</div>
                    </div>
                    <div className="Section-header-right">
                        <div className="Section-add-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5a1 1 0 0 1 1-1z" /></svg>
                        </div>
                        <div className="Section-option-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20"><path fill="currentColor" d="M10.001 7.8a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 10 7.8zm-7 0a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 3 7.8zm14 0a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 17 7.8z" /></svg>
                        </div>
                    </div>
                </div>

                <div className="Section-card-items">
                    {
                        props.cardDetails.map(detail => {
                            if (detail.status === props.iteratorvalue) {
                                ticketCount++;
                                return (<Card cardDetails={detail} />)
                            }
                            else if (detail.priority === props.iteratorvalue) {
                                ticketCount++;
                                return (<Card cardDetails={detail} />)
                            }
                            else if (detail.userObj.name === props.iteratorvalue) {
                                ticketCount++;
                                return (<Card cardDetails={detail} />)
                            }
                            return null
                        }, ticketCount = 0)

                    }
                </div>

            </div>
        </>
    )
}
