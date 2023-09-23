'use client'
import { Container, Grid, Skeleton, Link } from "@mui/material"
import useSWR from "swr";
import Cardx from "@/components/UI/Card/Card";
import axios from "axios";
import Shared from '../../components/Shared'

// async function fetcher(url) {
//     const res = await fetch(url);
//     const json = await res.json();
//     return json;
// }
const fetcher = (url, token) =>
    axios
        .get(url, {
            headers: {
                'X-RapidAPI-Key': 'b66eb3153bmsh1d00af693516ac2p106275jsn0b6d5b9e5b20',
                'X-RapidAPI-Host': 'mobile-phone-specs-database.p.rapidapi.com'
            }
        })
        .then((res) => res.data);
const ProductView = (props) => {
    const meta = {
        title: "Products - Handphone Spesifikasi",
        desc: "lala lala deskripsi",
        url: 'https://google.com'
    }

    const { data, error } = useSWR(
        [`https://mobile-phone-specs-database.p.rapidapi.com/gsm/all-brands`], fetcher
    );
    console.log(data);
    return (
        <>
            <Shared meta={meta}>
                <Container maxWidth="md">
                    <Grid container spacing={2}>
                        {!data
                            ? [1, 2, 3, 4, 5, 6].map((data) => {
                                // key pake data untuk looping
                                return (
                                    <Grid item md={4} key={data}>
                                        <Skeleton variant="rectangular" height={200} />
                                    </Grid>
                                );
                            })
                            : data.map((list, key) => {
                                const id_ = key;
                                const title_ = list.brandValue;
                                const slug = title_.replace(/\s+/g, "-").toLowerCase();
                                const linkHelp = "/product/";
                                const linked = linkHelp + id_;

                                // const handleDesc = (text, maxLength) => {
                                //   if (text.length > maxLength)
                                //     return `${text.substr(0, maxLength)}...`;
                                //   return text;
                                // };

                                return (
                                    <Grid key={key} item md={4} xs={6}>
                                        <Link href={linked}>
                                            {/* <a> */}
                                            <div>
                                                {list.brandValue}
                                            </div>
                                            {/* </a> */}
                                        </Link>
                                    </Grid>
                                );
                            })}
                    </Grid>
                </Container>
            </Shared>
        </>
    )
}

export default ProductView