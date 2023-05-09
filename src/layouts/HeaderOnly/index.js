import Header from '~/layouts/component/Header/Header'
import Sidebar from './Sidebar'
function HeaderLayout({ children }) {
    return (

        <div>
            <Header />
            <div className='container'>
                <Sidebar />
                <div className='content'>{children}</div>


            </div>
        </div>
    );
}

export default HeaderLayout;
