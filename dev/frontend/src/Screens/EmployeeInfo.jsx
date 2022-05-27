import React from 'react'
import { Dialog, DialogContent, DialogTitle} from '@mui/material'

export default function EmployeeInfo(props) {
    
    const { title, children, openPopup, setOpenPopup} = props;
    
    return (
        
            <Dialog open={openPopup} maxWidth='sm' fullWidth='true'>
                <DialogTitle>
                    <div>More Employee Info</div>
                </DialogTitle>
                <DialogContent dividers>
                    {children}
                    <div>
                        <button type="submit" class="btn btn-primary" onClick={() => {setOpenPopup(false)}}>Close</button>
                    </div>
                </DialogContent>
            </Dialog>

    )
}
