'use client'
import { Container, Grid } from "@mui/material"
import useSWR from "swr";
import axios from "axios";

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
                'X-RapidAPI-Host': 'mobile-phones2.p.rapidapi.com'
            }
        })
        .then((res) => res.data);
const ProductView = (props) => {
    const { data, error } = useSWR(
        [`https://mobile-phones2.p.rapidapi.com/brands`], fetcher
    );
    console.log(data);
    return (
        <>
            <Container maxWidth="md">
                <Grid container spacing={2}>
                    <Grid item sm={6}>
                        <h2>Apple</h2>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default ProductView