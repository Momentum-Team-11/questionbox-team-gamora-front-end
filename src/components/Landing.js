import { Link } from 'react-router-dom';

export default function Landing() {
    return (
    <>
    <div className='landingDiv'>
        <h1>
            QuestionBox
        </h1>
    </div>
        <br></br>
    <div className='landButts'>
        <Link to='login'>
            Login
        </Link>
        <br></br>
        <Link to='register'>
            Register
        </Link>
    </div>
    </>
    );
}