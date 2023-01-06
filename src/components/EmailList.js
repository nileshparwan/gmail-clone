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

    const fromNow = (time) => {
        const date = new Date();
        const timestamp = date.getTime();
        const seconds = Math.floor(timestamp / 1000);

        const oldTime = Math.floor(new Date(time).getTime()/1000);
        const oldTimestamp = seconds - oldTime; 
        const difference = seconds - oldTimestamp;

        let output = ``;
        if (difference < 60) {
            // Less than a minute has passed:
            output = `${difference} seconds ago`;
        } else if (difference < 3600) {
            // Less than an hour has passed:
            output = `${Math.floor(difference / 60)} minutes ago`;
        } else if (difference < 86400) {
            // Less than a day has passed:
            output = `${Math.floor(difference / 3600)} hours ago`;
        } else if (difference < 2620800) {
            // Less than a month has passed:
            output = `${Math.floor(difference / 86400)} days ago`;
        } else if (difference < 31449600) {
            // Less than a year has passed:
            output = `${Math.floor(difference / 2620800)} months ago`;
        } else {
            // More than a year has passed:
            output = `${Math.floor(difference / 31449600)} years ago`;
        }

        return output;
    }

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
                            time={fromNow(timeStamp?.seconds)}
                        />
                    ))
                }

                {/* <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10"} />
                <EmailRow id={1} key={1} title={"test1"} subject={"test2"} description={"testing"} time={"10"} /> */}
            </div>
        </div>
    );
};

export default EmailList;