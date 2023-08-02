import AbsoluteBox from "@/components/user-interfaces/AbsoluteBox";
import Box from "@/components/user-interfaces/Box";
import TextHeading from "@/components/user-interfaces/TextHeading";
import { faTrash, faPencil, faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function CollectionHeadline({
    children,
    isCreateNew,
}: CollectionHeadlineProps) {
    return (
        <Box margin="0 0 16px">
            <Box width="100%" borderBottom="2px solid #000">
                <TextHeading width="90%" margin="0" as="h3" padding="8px 4px">
                    {
                        !isCreateNew ? (
                            <Link href="/collection/awda">
                                Collection Name
                            </Link>
                        ) : (
                            <>
                                Create New Collection
                            </>
                        )
                    }
                </TextHeading>
                <AbsoluteBox top="50%" right="4px" transform="translateY(-50%)">
                    {
                        isCreateNew ? (
                            <Box display="inline-block" cursor="pointer">
                                <FontAwesomeIcon icon={faAdd} />
                            </Box>
                        ) : (
                            <>
                                <Box display="inline-block" margin="0 16px 0 0" cursor="pointer">
                                    <FontAwesomeIcon icon={faPencil} />
                                </Box>
                                <Box display="inline-block" cursor="pointer">
                                    <FontAwesomeIcon icon={faTrash} />
                                </Box>       
                            </>
                        )
                    }
                </AbsoluteBox>
            </Box>
            <Box width="100%" margin="8px 0">
                {children}
            </Box>
        </Box>
    )
}