import data from '@/utils/data/packages/data';
import PriceLayout from '@/components/Layout/PriceLayout';

export const metadata = {
    title: 'SMO Packages - SixPL',
    description: 'Are you looking for affordable SMO packages in Delaware USA? SixPL monthly SMO Packages are best for all businesses. Get SMO package prices now.',
}

function page() {
    // SELECTING THE PACKAGE
    const selectedPackage = data.smoPackages //HERE WE SELECTED SMO PACKAGE
    return <PriceLayout pack={selectedPackage} />
}

export default page