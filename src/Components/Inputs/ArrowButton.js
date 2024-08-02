import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const iconStyle = {
	fontSize: { xs: "1.4rem" },
	fontWeight: 800,
};

export default function ArrowButton(props) {
	return (
		<IconButton color="primary" aria-label="arrow" component="button">
			{props.next ? (
				<ArrowForwardIosIcon sx={iconStyle} />
			) : (
				<ArrowBackIosNewIcon sx={iconStyle} />
			)}
		</IconButton>
	);
}
