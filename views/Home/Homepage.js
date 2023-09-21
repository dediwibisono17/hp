import Shared from '../../components/Shared';
import Hero from '@/components/Section/Hero/Hero';
import Content from '@/components/Section/Content/Content';
import { Metadata } from 'next';

const Homepage = (props) => {
    const meta = {
        title: "Handphone Spesifikasi",
        desc: "lala lala deskripsi",
        url: 'https://google.com',
        shorttitle: 'lala lala deskripsi',
    }
    return (
        <>
            <Shared meta={meta}>
                {/* <Hero /> */}

                <Content />
            </Shared>
        </>
    )
}

export default Homepage