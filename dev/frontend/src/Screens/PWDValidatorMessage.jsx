import React from 'react'

//Password validator messagees
const PWDValidatorMessage = ({
    capsLetterFlag,
    numberFlag,
    pwdLengthFlag,
    specialCharFlag,
}) => {
    return (
        <div>
            <p className={capsLetterFlag}>Must be 1 Capital Letter</p>
            <p className={numberFlag}>Must contain Numbers</p>
            <p className={pwdLengthFlag}>Must be 8 Characters long</p>
            <p className={specialCharFlag}>Must be contain special character</p>
        </div>
    )
    }

export default PWDValidatorMessage
