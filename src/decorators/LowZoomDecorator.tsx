import React, { useMemo, ReactElement, FC } from 'react';

import { MapComponentsProvider } from '../index';
import MapLibreMap from '../components/MapLibreMap/MapLibreMap';
import './style.css';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import getTheme from '../ui_components/MapcomponentsTheme';
import { Decorator } from '@storybook/react-webpack5'; // Adjust import based on actual usage

interface StoryContext {
  globals: {
    theme?: 'dark' | 'light';
  };
}

const decorators: Decorator[] = [
  (Story: FC, context?: StoryContext): ReactElement => {
    const theme = useMemo(() => getTheme(context?.globals?.theme), [context?.globals?.theme]);

    return (
      <div className="fullscreen_map">
        <MapComponentsProvider>
          <MUIThemeProvider theme={theme}>
            <Story />
            <MapLibreMap
              options={{
                zoom: 3,
                style: 'https://wms.wheregroup.com/tileserver/style/osm-bright.json',
                center: [4.542400, 39.44518],
              }}
              mapId="map_1"
            />
          </MUIThemeProvider>
        </MapComponentsProvider>
      </div>
    );
  },
];

export default decorators;
