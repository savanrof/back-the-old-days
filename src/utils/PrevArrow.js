import React from "react";

import { LeftOutlined } from '@ant-design/icons';

const PrevArrow = props => {
    const { className, style, onClick } = props
    
    return (
        <div
            className={className}
            style={{
                ...style,
                color: 'black',
                fontSize: '15px',
                lineHeight: '1.5715'
            }}
            onClick={onClick}
        >
            <LeftOutlined />
        </div>
    );
};

export default PrevArrow;