import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import ErrorIcon from '@mui/icons-material/Error';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import PrintIcon from '@mui/icons-material/Print';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { selectOpenMail } from "../features/mailSlice";

import './Mail.css';
import { useSelector } from 'react-redux';

const Mail = () => {
    const history = useNavigate();

    const selectMail = useSelector(selectOpenMail);

    return (
        <div className='mail'>
            <div className="mail__tools">
                <div className="mail__toolsleft">
                    <IconButton onClick={() => history("/")}>
                        <ArrowBackIcon />
                    </IconButton>

                    <IconButton>
                        <MoveToInboxIcon />
                    </IconButton>

                    <IconButton>
                        <ErrorIcon />
                    </IconButton>

                    <IconButton>
                        <DeleteIcon />
                    </IconButton>

                    <IconButton>
                        <EmailIcon />
                    </IconButton>

                    <IconButton>
                        <WatchLaterIcon />
                    </IconButton>
                </div>

                <div className="mail__toolsRight">
                    <IconButton>
                        <UnfoldMoreIcon />
                    </IconButton>

                    <IconButton>
                        <PrintIcon />
                    </IconButton>

                    <IconButton>
                        <ExitToAppIcon />
                    </IconButton>
                </div>
            </div>

            <div className="mail__body">
                <div className="mail__bodyHeader">
                    <h2>{selectMail?.subject}</h2>
                    <LabelImportantIcon className="mail__important" />
                    <p>{selectMail?.title}</p>
                    <p className='mail__time'>{selectMail?.time}</p>
                </div>

                <div className='mail__message'>
                    <p>{selectMail?.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Mail;