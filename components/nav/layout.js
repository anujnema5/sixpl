import SecondaryNavBar from './secondaryNavBar'
import PrimaryNavBar from './primaryNavBar'
import Footer from './footer'

const Layout = (props) => {
    return (
        <>
        <SecondaryNavBar />
        <PrimaryNavBar />
        <main>{props.children}</main>
        <Footer />
        </>
    )
}

export default Layout