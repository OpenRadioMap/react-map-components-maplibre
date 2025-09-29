import React, { useEffect, useState } from 'react';
import PentagonIcon from '@mui/icons-material/Pentagon';
import { Box } from '@mui/system';
import MlFeatureEditor from '../MlFeatureEditor/MlFeatureEditor';
import List from '@mui/material/List';
import EditIcon from '@mui/icons-material/Edit';
import MlGeoJsonLayer from '../MlGeoJsonLayer/MlGeoJsonLayer';
import useMap from '../../hooks/useMap';
import DeleteIcon from '@mui/icons-material/Delete';
import * as turf from '@turf/turf';
import ButtonGroup from '@mui/material/ButtonGroup';
import Tooltip from '@mui/material/Tooltip';
import LayerListItem from '../../ui_components/LayerList/LayerListItem';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import { Feature, LineString, Point, Polygon } from 'geojson';
import { LngLatLike } from 'maplibre-gl';
import {
	Button,
	Checkbox,
	FormControlLabel,
	FormGroup,
	SxProps,
	Theme,
	Typography,
} from '@mui/material';
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
import PolylineIcon from '@mui/icons-material/Polyline';

const sketchTools = [
	{ name: 'Point', mode: 'draw_point', icon: <ScatterPlotIcon /> },
	{ name: 'LineString', mode: 'draw_line_string', icon: <PolylineIcon /> },
	{ name: 'Polygon', mode: 'draw_polygon', icon: <PentagonIcon /> },
];

export interface MlSketchToolProps {
	/**
	 * Id of the target MapLibre instance in mapContext
	 */
	mapId?: string;
	/**
	 * Id of an existing layer in the mapLibre instance to help specify the layer order
	 * This layer will be visually beneath the layer with the "insertBeforeLayer" id.
	 */
	insertBeforeLayer?: string;
	/**
	 * Style attribute for the button-style
	 * https://mui.com/system/getting-started/the-sx-prop/
	 */
	buttonStyleOverride?: SxProps;
	/**
	 * Callback function that is called each time GeoJson data has changed within MlSketchTool.
	 * First parameter contains all geometries in the `geometries` prop.
	 */
	onChange?: (para: SketchStateType) => void;
	/**
	 * Determines whether the instruction text should be shown.
	 */
	showInstruction?: boolean;
	/**
	 * Callback function triggered when the "Show instructions" checkbox is toggled.
	 */
	onShowInstructionChange?: (value: boolean) => void;
}

type SketchStateType = {
	selectedGeoJson?: Feature;
	activeGeometryIndex?: number;
	geometries: Feature[];
	drawMode?: keyof MapboxDraw.Modes;
};

/**
 * Component template
 *
 */

const MlSketchTool = (props: MlSketchToolProps) => {
	const mapHook = useMap({
		mapId: props.mapId,
		waitForLayer: props.insertBeforeLayer,
	});
	const [hoveredGeometry, setHoveredGeometry] = useState<Feature>();
	const [sketchState, setSketchState] = useState<SketchStateType>({
		activeGeometryIndex: undefined,
		selectedGeoJson: undefined,
		geometries: [],
		drawMode: undefined,
	});

	console.log(sketchState);

	useEffect(() => {
		if (!(typeof props.onChange === 'function')) return;

		props.onChange(sketchState);
	}, [sketchState, props.onChange]);

	const buttonStyle = {
		...props.buttonStyleOverride,
	};

	// const buttonClickHandler = (buttonDrawMode: keyof MapboxDraw.Modes) => {
	// 	setSketchState((_state) => ({
	// 		drawMode: _state.drawMode !== buttonDrawMode ? buttonDrawMode : undefined,
	// 		geometries: _state.geometries,
	// 		activeGeometryIndex: undefined,
	// 		selectedGeoJson: undefined,
	// 	}));
	// };
	const buttonClickHandler = (buttonDrawMode: keyof MapboxDraw.Modes) => {
		let modeRef: string | undefined = undefined;
		setSketchState((prevState) => {
			modeRef = prevState.drawMode;
			return {
				...prevState,
				drawMode: undefined,
				activeGeometryIndex: undefined,
				selectedGeoJson: undefined,
			};
		});

		requestAnimationFrame(() => {
			setSketchState((prevState) => {
				if (
					(modeRef === 'draw_polygon' || modeRef === 'draw_line_string') &&
					buttonDrawMode === 'draw_point'
				) {
					return { ...prevState, drawMode: undefined };
				}
				return {
					...prevState,
					drawMode: buttonDrawMode,
				};
			});
		});
	};

	const removeGeoJson = (geoJson: Feature): void => {
		setSketchState((_sketchState) => {
			const _geometries = [..._sketchState.geometries];
			_geometries.splice(_geometries.indexOf(geoJson), 1);

			return {
				..._sketchState,
				drawMode: undefined,
				geometries: _geometries,
				activeGeometryIndex: _sketchState.activeGeometryIndex
					? _sketchState.activeGeometryIndex - 1
					: undefined,
			};
		});
	};

	const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		props.onShowInstructionChange?.(event.target.checked);
	};

	const SketchToolButtons = () => {
		return (
			<>
				{sketchTools.map((el) => {
					const stateColor = (theme: Theme) => {
						if (sketchState.drawMode === el.mode) {
							return theme.palette.primary.main;
						} else {
							return theme.palette.navigation.navColor;
						}
					};

					const stateIconColor = (theme: Theme) => {
						if (sketchState.drawMode !== el.mode) {
							return theme.palette.primary.main;
						} else {
							return theme.palette.navigation.navColor;
						}
					};

					return (
						<>
							<Tooltip title={el.name}>
								<Button
									key={el.name}
									sx={{
										color: stateIconColor,
										backgroundColor: stateColor,

										'&:hover': {
											backgroundColor: stateColor,
										},
										...buttonStyle,
									}}
									onClick={() => buttonClickHandler(el.mode as keyof MapboxDraw.Modes)}
								>
									{el.icon}
								</Button>
							</Tooltip>
						</>
					);
				})}
			</>
		);
	};

	return (
		<>
			<Box
				sx={{
					zIndex: 104,
				}}
			>
				<ButtonGroup>
					<SketchToolButtons />
				</ButtonGroup>
			</Box>

			<Box sx={{ marginTop: '10px' }}>
				<FormGroup>
					<FormControlLabel
						control={
							<Checkbox
								size="small"
								checked={props.showInstruction}
								onChange={handleCheckboxChange}
							/>
						}
						label="Show instructions"
					/>
				</FormGroup>
			</Box>

			{sketchState.drawMode && (
				<MlFeatureEditor
					mode={sketchState.drawMode}
					geojson={sketchState.selectedGeoJson}
					onChange={(feature: Feature[]) => {
						console.log('Features: ', feature);
						if (!feature?.[0]) return;

						setSketchState((_sketchState) => {
							const _geometries = [...sketchState.geometries];
							if (typeof _sketchState.activeGeometryIndex === 'undefined') {
								const tempFeature = feature[0];
								if (tempFeature && tempFeature.properties) {
									tempFeature.properties.id = tempFeature.id;
								} else {
									console.error('tempFeature or tempFeature.properties is null or undefined');
								}

								_sketchState.activeGeometryIndex = _geometries.length;
								_geometries.push(tempFeature);
							} else {
								_geometries[_sketchState.activeGeometryIndex] = feature[0];
							}

							// Check if the geometry type is point and if the coordinates have changed to exit draw mode after editing
							const changedPoint = () => {
								if (
									_sketchState.selectedGeoJson &&
									typeof _sketchState.activeGeometryIndex !== 'undefined' &&
									_sketchState.geometries[_sketchState.activeGeometryIndex] &&
									_sketchState.geometries[_sketchState.activeGeometryIndex].geometry.type ===
										'Point'
								) {
									const selectedCoords = (
										_sketchState.selectedGeoJson?.geometry as Point | LineString | Polygon
									)?.coordinates;
									const activeCoords = (
										_sketchState.geometries[_sketchState.activeGeometryIndex]?.geometry as
											| Point
											| LineString
											| Polygon
									)?.coordinates;

									// Compare coordinates
									return JSON.stringify(selectedCoords) !== JSON.stringify(activeCoords);
								}
								return false;
							};

							if (changedPoint()) {
								_sketchState.drawMode = undefined;
							}

							return {
								..._sketchState,
								geometries: _geometries,
							};
						});
					}}
					onFinish={() => {
						setSketchState((_sketchState) => ({
							..._sketchState,
							drawMode: undefined,
							activeGeometryIndex: undefined,
							selectedGeoJson: undefined,
						}));
					}}
				/>
			)}

			<List sx={{ zIndex: 105, marginBottom: '-10px' }}>
				{sketchState.geometries.map((el, index) => (
					<Box key={el.id} sx={{ display: 'flex', flexDirection: 'column' }}>
						<br />
						<Box
							flexDirection={'row'}
							sx={{
								'&:hover': {
									backgroundColor: 'rgb(177, 177, 177, 0.2)',
								},
								marginTop: '25px',
							}}
							onMouseOver={() => {
								setHoveredGeometry(el);
							}}
							onMouseLeave={() => {
								setHoveredGeometry(undefined);
							}}
						>
							{/* Input field for user-defined name */}
							{!el.properties?.customName && (
								<input
									type="text"
									value={el.properties?.name || ''}
									placeholder="Assign name"
									onChange={(e) => {
										const newName = e.target.value;
										setSketchState((_sketchState) => {
											const updatedGeometries = [..._sketchState.geometries];
											if (!updatedGeometries[index].properties) {
												updatedGeometries[index].properties = {};
											}
											updatedGeometries[index].properties!.name = newName;
											return {
												..._sketchState,
												geometries: updatedGeometries,
											};
										});
									}}
									style={{
										padding: '5px',
										border: '1px solid #ccc',
										borderRadius: '4px',
										outline: 'none',
									}}
									onFocus={(e) => (e.target.style.borderColor = '#009ee0')}
									onBlur={(e) => {
										e.target.style.borderColor = '#ccc';
										setSketchState((_sketchState) => {
											const updatedGeometries = [..._sketchState.geometries];
											if (!updatedGeometries[index].properties) {
												updatedGeometries[index].properties = {};
											}
											updatedGeometries[index].properties!.customName = true;
											return {
												..._sketchState,
												geometries: updatedGeometries,
											};
										});
									}}
								/>
							)}

							{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
							{/* @ts-ignore-next-line */}
							<LayerListItem
								listItemSx={buttonStyle}
								configurable={true}
								visible
								layerComponent={
									<MlGeoJsonLayer
										mapId={props.mapId}
										geojson={el}
										layerId={String(el.id)}
										defaultPaintOverrides={{
											fill: { 'fill-opacity': 0.5 },
										}}
									/>
								}
								type={'layer'}
								name={
									<Typography
										onClick={() => {
											setSketchState((_sketchState) => {
												const updatedGeometries = [..._sketchState.geometries];
												if (!updatedGeometries[index].properties) {
													updatedGeometries[index].properties = {};
												}
												updatedGeometries[index].properties!.customName = false;
												return {
													..._sketchState,
													geometries: updatedGeometries,
												};
											});
										}}
										sx={{
											cursor: 'pointer',
											overflow: 'hidden',
											whiteSpace: 'nowrap',
										}}
									>
										{el.properties?.name || String(el.id)}
									</Typography>
								}
								description={el.geometry.type}
							/>
							<Box
								sx={{
									padding: '3px 30px',
								}}
							>
								<ButtonGroup size="small">
									<Tooltip title="Center">
										<Button
											sx={{
												color: (theme) => theme.palette.primary.main,
												backgroundColor: (theme) => theme.palette.navigation.navColor,
												...buttonStyle,
											}}
											onClick={() => {
												mapHook?.map?.map.setCenter(
													el.geometry.type === 'Point'
														? (el.geometry.coordinates as LngLatLike)
														: (turf.centerOfMass(el).geometry.coordinates as LngLatLike)
												);
											}}
										>
											<GpsFixedIcon />
										</Button>
									</Tooltip>

									<Tooltip title="Edit">
										<Button
											sx={{
												color: (theme) => {
													if (
														sketchState.drawMode === 'simple_select' &&
														sketchState.selectedGeoJson?.id === el.id
													) {
														return theme.palette.navigation.navColor;
													} else {
														return theme.palette.primary.main;
													}
												},
												backgroundColor: (theme) => {
													if (
														sketchState.drawMode === 'simple_select' &&
														sketchState.selectedGeoJson?.id === el.id
													) {
														return theme.palette.primary.main;
													} else {
														return theme.palette.navigation.navColor;
													}
												},
												...buttonStyle,
											}}
											onClick={() => {
												setSketchState((_sketchState) => {
													const newDrawMode =
														_sketchState.drawMode === 'simple_select' &&
														_sketchState.selectedGeoJson?.id === el.id
															? undefined
															: 'simple_select';

													return {
														..._sketchState,
														selectedGeoJson: el,
														activeGeometryIndex: _sketchState.geometries.indexOf(el),
														drawMode: newDrawMode,
													};
												});
											}}
										>
											<EditIcon />
										</Button>
									</Tooltip>

									<Tooltip title="Delete">
										<Button
											sx={{
												color: (theme) => theme.palette.primary.main,
												backgroundColor: (theme) => theme.palette.navigation.navColor,
												...buttonStyle,
											}}
											onClick={() => {
												removeGeoJson(el);
												setHoveredGeometry(undefined);
											}}
										>
											<DeleteIcon />
										</Button>
									</Tooltip>
								</ButtonGroup>
							</Box>
						</Box>
					</Box>
				))}
				{hoveredGeometry && (
					<MlGeoJsonLayer
						mapId={props.mapId}
						geojson={{ type: 'FeatureCollection', features: [hoveredGeometry] }}
						layerId={'highlightBorder'}
						defaultPaintOverrides={{
							circle: {
								'circle-color': '#000000',
								'circle-opacity': 0.2,
								'circle-radius': 10,
							},
							line: {
								'line-color': '#000000',
								'line-opacity': 0.2,
								'line-width': 10,
							},
							fill: {
								'fill-color': '#000000',
								'fill-opacity': 0.2,
							},
						}}
					/>
				)}
			</List>
		</>
	);
};

export default MlSketchTool;
