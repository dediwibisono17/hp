import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Head from "next/head";

const Index = (props) => {
    const { meta, children } = props;
    return (
        <>
            <Head>
                <link rel="icon" href="/app/favicon.ico" />
                <title>{meta.title}</title>
                <meta property="og:title" content={meta.desc} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={meta.url} />
            </Head>

            <Header />
            <div>{children}</div>
            <Footer />
        </>
    )
}

export default Index;