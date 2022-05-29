import React from 'react'
import { Dialog, DialogContent, DialogTitle} from '@mui/material'

export default function DeleteEmployee(props) {
    
    const { title, children, deleteOpenPopup, deleteSetOpenPopup} = props;
    
    return (
        
            <Dialog open={deleteOpenPopup} maxWidth='sm' fullWidth='true'>
                <DialogTitle>
                    <div>Delete Employee</div>
                </DialogTitle>
                <DialogContent dividers>
                    {children}
                </DialogContent>
            </Dialog>

    )
}
