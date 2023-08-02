/** @jsxImportSource @emotion/react */
'use client'

import Box from "@/components/user-interfaces/Box";
import FixedBox from "@/components/user-interfaces/FixedBox";
import Grid from "@/components/user-interfaces/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faBackwardStep, faChevronRight, faForwardStep } from "@fortawesome/free-solid-svg-icons";

export default function Paginate() {
    return (
        <FixedBox width="100%" maxWidth="768px" bottom="0" zIndex={9}>
            <Box color="#fff" padding="8px 16px" backgroundColor="#000" zIndex={2}>
                <Grid textAlign="center" templateCol="20px 20px 30px 15px 30px 20px 20px" justify="center" gap="8px">
                    <Box cursor="pointer">
                        <FontAwesomeIcon icon={faBackwardStep} />
                    </Box>
                    <Box cursor="pointer">
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </Box>
                    <Box>
                        1
                    </Box>
                    <Box>
                        /
                    </Box>
                    <Box>
                        10
                    </Box>
                    <Box cursor="pointer">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </Box>
                    <Box cursor="pointer">
                        <FontAwesomeIcon icon={faForwardStep} />
                    </Box>
                </Grid>
            </Box>
        </FixedBox>
    )
} 