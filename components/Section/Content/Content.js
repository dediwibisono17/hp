'use client'

import styles from './Content.module.scss';
import { Container, Grid, Card, CardContent, Typography, CardActions, Button, Stack } from '@mui/material';
import Image from 'next/image';

const Content = (props) => {
    return (
        <>
            <Container maxWidth="md">
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
            </Container>
        </>
    )
}

export default Content