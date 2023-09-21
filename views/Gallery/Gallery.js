import Shared from '@/components/Shared'

const Gallery = (props) => {
    const meta = {
        title: "Gallery - Handphone Spesifikasi",
        desc: "lala lala deskripsi",
        url: 'https://google.com'
    }

    return (
        <>
            <Shared meta={meta}>
                <h2>Halo</h2>
            </Shared>
        </>
    )
}

export default Gallery