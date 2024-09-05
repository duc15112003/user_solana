import Footer from './Footer/index.js';
import Header from './Header/index.js';
const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Header/>
            <div>{children}</div>
            <Footer/>
        </div>
    );
}

export {DefaultLayout};