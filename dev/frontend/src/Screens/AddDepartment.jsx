import React from 'react'

//use material ui for the dialog box
import { Dialog, DialogContent, DialogTitle} from '@mui/material'

export default function AddDepartment(props) {
    
    const { title, children, DopenPopup, DsetOpenPopup} = props;
    
    return (
        // Add department popup dialog box
            <Dialog open={DopenPopup} maxWidth='sm' fullWidth= "true">
                <DialogTitle>
                    <div>Add New Department</div>
                </DialogTitle>
                <DialogContent dividers>
                    {children}  
                </DialogContent>
            </Dialog>

    )
}
