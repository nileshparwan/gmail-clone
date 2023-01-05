import React from 'react';
import { useNavigate } from "react-router-dom"; 
import { Checkbox, IconButton } from '@mui/material';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';

import './EmailRow.css';
import { useDispatch } from 'react-redux';
import { selectMail } from '../features/mailSlice';

const EmailRow = ({
    id,
    time,
    title,
    subject,
    description,
}) => {
    const history = useNavigate();
    const dispatch = useDispatch(); 

    const openMail = () => {

        // {
        //     id,
        //     time,
        //     title,
        //     subject,
        //     description,
        // }
        // above is going to be the selected mail inside the selectMail function
        dispatch(
            selectMail({
                id,
                time,
                title,
                subject,
                description,
            })
        )
        history('/mail')
    }

    return (
        <div onClick={openMail} className='emailRow'>
            <div className="emailRow__options">
                <Checkbox />

                <IconButton>
                    <StarBorderOutlinedIcon />
                </IconButton>

                <IconButton>
                    <LabelImportantOutlinedIcon />
                </IconButton>
            </div>

            <h3 className="emailRow__title">
                {title}
            </h3>

            <div className="emailRow__message">
                <h4>
                    {subject}{" "}
                    <span className="emailRow__description">
                        <span className="emailRow__description">
                            {description}
                        </span>
                    </span>
                </h4>
            </div>

            <div className="emailRow__description">
                {time}
            </div>
        </div>
    );
};

export default EmailRow;