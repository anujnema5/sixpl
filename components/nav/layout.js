import SecondaryNavBar from './secondaryNavBar'
import PrimaryNavBar from './primaryNavBar'
import Footer from './footer'
import TopNav from './topNav'

const Layout = (props) => {
    return (
        <>
        <TopNav />
        {/* <SecondaryNavBar /> */}
        {/* <PrimaryNavBar /> */}
        <main>{props.children}</main>
        
        
        
        <Footer />
        </>
    )
}

export default Layout