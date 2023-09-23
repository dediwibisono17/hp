'use client'
import styles from './Highlights.module.scss';
import { Container, Grid, Card, CardContent, Typography, CardActions, Button, Stack } from '@mui/material';
import Image from 'next/image';
import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url, token) =>
    axios
        .get(url, {
            headers: {
                'X-RapidAPI-Key': 'b66eb3153bmsh1d00af693516ac2p106275jsn0b6d5b9e5b20',
                'X-RapidAPI-Host': 'mobile-phone-specs-database.p.rapidapi.com'
            }
        })
        .then((res) => res.data);


// eslint-disable-next-line @next/next/no-async-client-component
const Highlights = () => {

    const { data, error } = useSWR(
        [`https://mobile-phone-specs-database.p.rapidapi.com/gsm/get-models-by-brandname/Samsung`], fetcher
    );
    console.log(data);

    return (
        <>
            <Grid container spacing={2}>
                <Grid item sm={3} xs={6}>
                    <Card>
                        <CardContent>
                            <div className={styles.icons}>

                                <Image
                                    src="/apple.png"
                                    width={120}
                                    height={120}
                                    alt="Apple phone's"
                                    title="Apple phone's"
                                />
                            </div>
                            <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom className={styles.center}>
                                iPhone
                            </Typography>
                        </CardContent>

                        <Stack spacing={2} direction="row" className={styles.auto}>
                            <Button variant="outlined">Lihat Semua</Button>
                        </Stack>
                    </Card>
                </Grid>
                <Grid item sm={3} xs={6}>
                    <Card>
                        <CardContent>
                            <div className={styles.icons}>

                                <Image
                                    src="/xiamoi.png"
                                    width={120}
                                    height={120}
                                    alt="Xiaomi phone's"
                                    title="Xiaomi phone's"
                                />
                            </div>
                            <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom className={styles.center}>
                                Xiaomi
                            </Typography>
                        </CardContent>
                        <Stack spacing={2} direction="row" className={styles.auto}>
                            <Button variant="outlined">Lihat Semua</Button>
                        </Stack>
                    </Card>
                </Grid>
            </Grid>

        </>
    )
}

export default Highlights;