import React from 'react'
import { Dialog, DialogContent, DialogTitle} from '@mui/material'

export default function EditEmployeeData(props) {
    
    const { title, children, openPopup, DsetOpenPopup} = props;
    
    return (
        
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
