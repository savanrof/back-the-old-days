import React from "react";

import { RightOutlined } from '@ant-design/icons';

const NextArrow = props => {
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
            <RightOutlined />
        </div>
    );
};

export default NextArrow;