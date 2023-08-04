/** @jsxImportSource @emotion/react */
'use client'

import Box from "@/components/user-interfaces/Box";
import FixedBox from "@/components/user-interfaces/FixedBox";
import Grid from "@/components/user-interfaces/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faBackwardStep, faChevronRight, faForwardStep } from "@fortawesome/free-solid-svg-icons";

export default function Paginate(props: PaginateProps) {
    const {
        paginate,
        handlePagination
    } = props;

    return (
        <FixedBox width="100%" maxWidth="768px" bottom="0" zIndex={9}>
            <Box color="#fff" padding="8px 16px" backgroundColor="#000" zIndex={2}>
                <Grid textAlign="center" templateCol="20px 20px 30px 15px 30px 20px 20px" justify="center" gap="8px">
                    <Box
                        cursor={paginate.page > 1 ? "pointer" : "default"}
                        color={paginate.page > 1 ? "#fff" : "#000"}
                        onClick={paginate.page > 1 ? () => handlePagination(0) : () => {}}
                    >
                        <FontAwesomeIcon icon={faBackwardStep} />
                    </Box>
                    <Box
                        cursor={paginate.page > 1 ? "pointer" : "default"}
                        color={paginate.page > 1 ? "#fff" : "#000"}
                        onClick={paginate.page > 1 ? () => handlePagination(paginate.page - 1) : () => {}}
                    >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </Box>
                    <Box>
                        {paginate.page}
                    </Box>
                    <Box>
                        /
                    </Box>
                    <Box>
                        {paginate.lastPage}
                    </Box>
                    <Box
                        cursor={paginate.page !==  paginate.lastPage ? "pointer" : "default"}
                        color={paginate.page !==  paginate.lastPage ? "#fff" : "#000"}
                        onClick={paginate.page !==  paginate.lastPage ? () => handlePagination(paginate.page + 1) : () => {}}
                    >
                        <FontAwesomeIcon icon={faChevronRight} />
                    </Box>
                    <Box
                        cursor={paginate.page !==  paginate.lastPage ? "pointer" : "default"}
                        color={paginate.page !==  paginate.lastPage ? "#fff" : "#000"}
                        onClick={paginate.page !==  paginate.lastPage ? () => handlePagination(paginate.lastPage) : () => {}}
                    >
                        <FontAwesomeIcon icon={faForwardStep} />
                    </Box>
                </Grid>
            </Box>
        </FixedBox>
    )
} 