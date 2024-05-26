import React from 'react';
import NavChat from './NavChat';
import NavSetting from './NavSetting';
import NavUpload from './Navupload';

const Nav: React.FC = () => {
    return (
        <div className='sidebar border-end overflow-hidden' style={{ "height": "100vh" }} id='listview'>
            <div className='tab-pane h-100 fade collapse active show' id='chats-tab' role='tabpanel'>
                <NavChat />
            </div>
            <div className="tab-pane h-100 collapse fade" id="upload" role="tabpanel">
                <NavUpload/>
            </div>
            <div className="tab-pane h-100 collapse fade" id="settings-tab" role="tabpanel">
                <NavSetting/>
            </div>
        </div>
    )
}

export default Nav;