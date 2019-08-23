module.exports = (filename) => `import React from 'react';

class ${ filename } extends React.Components {
    render() {
        return <div>
            ${ filename }
        </div>
    }
}

export default ${ filename };
`