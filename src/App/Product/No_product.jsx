import { Typography } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';

const page = () => {
    return <div>
        <Typography variant="h4">
            No Product Added Yet.
        </Typography>
        <br/>
        <Typography variant="h4">
            Press Tap <AddIcon /> Button Below To Add New Product.
        </Typography>
    </div>
}

export default page;