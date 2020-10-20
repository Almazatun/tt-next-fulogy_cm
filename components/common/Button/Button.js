import React from 'react'

export const Button = ({title, backgroundColor, fontColor, width, ...props}) => {

    let styleBtn = {
        backgroundColor:backgroundColor ? backgroundColor : '',
        height: '50px',
        borderRadius: '41px',
        border: '1px solid #01BDA7',
        padding: '15px 26px',
        fontFamily: 'Open Sans, sans-serif',
        fontSize: '14px',
        fontWeight: '600',
        color: fontColor ? fontColor : '',
        margin: '0 auto',
        outline: 'none',
        width: width ? width : ''
    }

    return <button style={styleBtn} {...props}>{title} </button>
}