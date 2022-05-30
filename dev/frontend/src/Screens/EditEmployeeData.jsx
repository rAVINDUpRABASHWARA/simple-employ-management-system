import React from 'react'

//use material ui for the dialog box
import { Dialog, DialogContent, DialogTitle} from '@mui/material'

export default function EditEmployeeData(props) {
    
    const { title, children, openPopup, DsetOpenPopup} = props;
    
    return (
        // Edit employee popup dialog box
            <Dialog open={openPopup} maxWidth='sm' fullWidth='true'>
                <DialogTitle>
                    <div>Edit Employee Details</div>
                </DialogTitle>
                <DialogContent dividers>
                    {children}
                </DialogContent>
            </Dialog>

    )
}
