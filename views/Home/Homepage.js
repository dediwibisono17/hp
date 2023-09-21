import Shared from '../../components/Shared';

const Homepage = (props) => {
    const meta = {
        title: "Handphone Spesifikasi",
        desc: "lala lala deskripsi",
        url: 'https://google.com'
    }
    return (
        <>
            <Shared meta={meta}>
                <h3>Haha</h3>
            </Shared>
        </>
    )
}

export default Homepage