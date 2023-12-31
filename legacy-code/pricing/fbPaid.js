import Layout from '../../components/nav/layout'
import getPricingList from '../../lib/sheets'

const FBPaidPackagePage = ({ prices }) => {
    return(
        <Layout>
           <div>{prices[1].activityDescription}</div>
        </Layout>
    )
}
export default FBPaidPackagePage

export async function getStaticProps(context) {
    
    const prices = await getPricingList()
    return {
        props: {
            prices: prices.slice(1, prices.length)
        },
        revalidate: 1,
    }

}