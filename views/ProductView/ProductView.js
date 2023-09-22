'use client'
import { Container, Grid } from "@mui/material"
import useSWR from "swr";

async function fetcher(url) {
    const res = await fetch(url);
    const json = await res.json();
    return json;
}
const ProductView = (props) => {
    const { data, error } = useSWR(
        "https://jsonplaceholder.typicode.com/comments?_start=0&_limit=18",
        fetcher
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