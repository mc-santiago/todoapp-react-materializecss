import React from 'react';

const TextColor = (WrappedComponent) => {
    const colors = ["purple", "red", "blue", "green", "cyan", "teal", "orange", "yellow", "blue-grey", "indigo"];
    const randomColor = colors[Math.floor(Math.random() * 9)];
    const className = randomColor + '-text';

    return(props) => {
        return(
            <div className= {className}>
                <WrappedComponent {...props} />
            </div> 
        )
    }
}

export default TextColor;