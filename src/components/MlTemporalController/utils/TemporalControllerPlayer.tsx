import React, { useEffect, useRef, useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import StopIcon from '@mui/icons-material/Stop';
import FastForwardIcon from '@mui/icons-material/FastForward';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import { Button, Drawer, Grid, Slider, Theme, Typography, useMediaQuery } from '@mui/material';

export interface TemporalControllerPlayerProps {
	currentVal: number;
	isPlaying: boolean;
	step: number;
	interval: number;
	minVal: number;
	maxVal: number;
	returnCurrent: React.Dispatch<React.SetStateAction<number>>;
	returnPlaying: React.Dispatch<React.SetStateAction<boolean>>;
	fadeIn: number;
	open: boolean;
	fadeOut: number;
	featuresColor: string;
	labels: boolean;
	labelColor: string;
	labelFadeIn: number;
	labelFadeOut: number;
	accumulate: boolean;
	display: boolean;
}

const bigScreenBoxStyle = {
	marginLeft: '15%',
	marginBottom: '3%',
	width: '70%',
	height: '90px',
	alignItems: 'center',
};

const mobileScreenBoxStyle = {
	top: '10%',
	//width: '100%',
	height: '100px',
	alignItems: 'center',
};

export default function TemporalControllerPlayer(props: TemporalControllerPlayerProps) {
	const [currentVal, setCurrentVal] = useState(props.currentVal);
	const [isPlaying, setIsPlaying] = useState(props.isPlaying);
	const range = props.maxVal - props.minVal;
	const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
	const mediaIsMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

	useEffect(() => {
		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
		};
	}, []);

	useEffect(() => {
		props.returnCurrent(currentVal);
		props.returnPlaying(isPlaying);
	}, [currentVal, isPlaying]);

	const play = React.useCallback(() => {
		let counter = currentVal - props.minVal;
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
		}

		intervalRef.current = setInterval(function() {
			if (counter >= range) {
				if (intervalRef.current) clearInterval(intervalRef.current);
				setIsPlaying(false);
			} else {
				setCurrentVal((val) => val + props.step);
			}
			counter = counter + props.step;
		}, props.interval);
	}, [props.step, props.maxVal, currentVal]);

	// Player buttons

	const handlePlayPause = () => {
		if (!isPlaying) {
			setIsPlaying(true);
			play();
		} else {
			setIsPlaying(false);
			if (isPlaying) {
				if (intervalRef.current) clearInterval(intervalRef.current);
			}
		}
	};

	const handleStop = () => {
		if (intervalRef.current) clearInterval(intervalRef.current);
		setCurrentVal(props.minVal);
		setIsPlaying(false);
	};

	const handleFastRewind = () => {
		if (isPlaying) {
			if (intervalRef.current) clearInterval(intervalRef.current);
			setCurrentVal(currentVal - range / 10);
			play();
		} else {
			setCurrentVal(currentVal - range / 10);
		}
	};
	const handleFastForward = () => {
		if (isPlaying) {
			if (intervalRef.current) clearInterval(intervalRef.current);
			setCurrentVal(currentVal + range / 10);
			play();
		} else {
			setCurrentVal(currentVal + range / 10);
		}
	};

	//Slider

	const handleChange = (e: Event, newValue: number | number[]) => {
		if (!isPlaying) {
			setCurrentVal(newValue as number);
		} else {
			if (e) {
				if (intervalRef.current) clearInterval(intervalRef.current);
				setCurrentVal(newValue as number);
				play();
			}
		}
	};

	return (
		<>
		<Drawer
			anchor="bottom"
			open={props.open || true}
			variant="persistent"
			sx={{
				flexShrink: 0,
				'& .MuiDrawer-paper': mediaIsMobile ? mobileScreenBoxStyle : bigScreenBoxStyle,
			}}
		>
			<Grid container alignItems="center" justifyContent="space-between">
				{/* Buttons - Centered */}
				{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
				{/*@ts-expect-error*/}
				<Grid item xs={12} sm={10} textAlign="center">
					<Button onClick={handleFastRewind}>
						<FastRewindIcon />
					</Button>
					<Button onClick={handleStop}>
						<StopIcon />
					</Button>
					<Button onClick={handlePlayPause}>
						{isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
					</Button>
					<Button onClick={handleFastForward}>
						<FastForwardIcon />
					</Button>
				</Grid>
				{props.display && !mediaIsMobile && (
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-expect-error
					<Grid item xs={12} sm={5} textAlign="right">
				<Typography variant={'h5'} sx={{ paddingRight: '25px' }}>
					{Math.floor(currentVal)}
				</Typography>
			</Grid>
			)}
		</Grid>

		<Slider
			sx={{
				position: 'flex',
				width: '95%',
				paddingTop: '10px',
				alignSelf: 'center',
			}}
			aria-label="Custom marks"
			defaultValue={props.minVal}
			value={currentVal}
			step={props.step}
			onChange={handleChange}
			min={props.minVal}
			max={props.maxVal}
		/>
		{mediaIsMobile && props.display && (
			<Typography variant={'body1'} textAlign={'right'}>
				{Math.floor(currentVal)}
			</Typography>
		)}
		</Drawer>
</>
)
	;
}
