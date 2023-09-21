import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Head from "next/head";

const Index = (props) => {
    const { meta, children } = props;
    return (
        <>
            <Head>
                <link rel="icon" href="/logo.png" />
                <title>{meta.title}</title>
                <meta property="og:title" content={meta.desc} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={meta.url} />
                <meta
                    property="og:image"
                    content="https://daycare2.vercel.app/logo.png"
                />
                <meta property="og:description" content={meta.desc} />
                <meta property="og:site_name" content={meta.shorttitle} />
                <meta property="og:image:width" content="300" />
                <meta property="og:image:height" content="200" />
                <meta property="fb:app_id" content="966242223397117" />
            </Head>

            <Header />
            <div>{children}</div>
            <Footer />
        </>
    )
}

export default Index;