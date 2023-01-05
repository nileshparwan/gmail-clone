import React, { useEffect, useState } from 'react';
import { Checkbox, IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EmailRow from './EmailRow';
import Section from '../components/Section';
import { db } from '../features/firebase/firebase';
import './EmailList.css';

const EmailList = () => {
    const [emails, setEmails] = useState([]);

    useEffect(() => {

        // web: version 8
        db
            .collection("emails")
            .orderBy("timeStamp", "desc")
            .onSnapshot((snapshot) => {
                setEmails(
                    snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    }))
                );
            });

    }, []);

    return (
        <div className='emailList'>
            <div className="emailList__settings">
                <div className="emailList__settingLeft">
                    <Checkbox />

                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>

                    <IconButton>
                        <RedoIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>

                <div className="emailList__settingRight">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>

                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>

                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>

                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </div>

            <div className="emailList__section">
                <Section Icon={InboxIcon} title="primary" color="red" selected={true} />
                <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
                <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
            </div>

            <div className="emailList__list">
                {
                    emails.map(({ id, data: { to, subject, message, timeStamp } }) => (
                        <EmailRow
                            id={id}
                            key={id}
                            title={to}
                            subject={subject}
                            description={message}
                            time={new Date(timeStamp?.seconds * 1000).toUTCString()}
                        />
                    ))
                }

                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10pm"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10pm"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10pm"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10pm"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10pm"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10pm"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10pm"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10pm"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10pm"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10pm"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10pm"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10pm"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10pm"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10pm"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10pm"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10pm"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10pm"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10pm"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10pm"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10pm"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10pm"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10pm"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10pm"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10pm"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10pm"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10pm"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10pm"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10pm"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10pm"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10pm"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10pm"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10pm"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10pm"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10pm"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10pm"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10pm"} />
            </div>
        </div>
    );
};

export default EmailList;