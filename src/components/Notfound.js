import { Link } from 'react-router-dom';

const Notfound = () => {
    //
    return (
        <div style={{color:'grey', minHeight:'300px'}}>
            Page Not Found <Link to="/home">Home</Link> 
        </div>
    );
}

export { Notfound };