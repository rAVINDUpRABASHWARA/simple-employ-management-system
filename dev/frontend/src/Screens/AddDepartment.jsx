import React from 'react'
import { Dialog, DialogContent, DialogTitle} from '@mui/material'

export default function AddDepartment(props) {
    
    const { title, children, DopenPopup, DsetOpenPopup} = props;
    
    return (
        
            <Dialog open={DopenPopup} maxWidth='sm' fullWidth='true'>
                <DialogTitle>
                    <div>Add New Department</div>
                </DialogTitle>
                <DialogContent dividers>
                    {children}  
                </DialogContent>
            </Dialog>

    )
}
