import SecondaryNavBar from './secondaryNavBar'
import PrimaryNavBar from './primaryNavBar'
import Footer from './footer'
import TopNav from './TopNav'

const Layout = (props) => {
    return (
        <>
        <TopNav />
        {/* <SecondaryNavBar /> */}
        {/* <PrimaryNavBar /> */}
        <main className='overflow-hidden'>{props.children}</main>
        <Footer />
        </>
    )
}

export default Layout