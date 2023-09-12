import data from '@/utils/data/packages/data';
import PriceLayout from '@/components/Layout/PriceLayout';

export const metadata = {
    title: 'PPC Packages - SixPL',
    description: 'Are you looking for affordable SEO packages in Delaware USA? SixPL monthly Web Packages are best for all businesses. Get SEO package prices now.',
}

function page() {
    // SELECTING THE PACKAGE
    const selectedPackage = data.ppcPackages //HERE WE SELECTED PPC PACKAGE
    return <PriceLayout pack={selectedPackage} />
}

export default page