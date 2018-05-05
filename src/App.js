import React from 'react';
import './App.css';
import EsriLoaderReact from 'esri-loader-react';
class App extends React.PureComponent {

  render() {

    const options = {
      url: 'https://js.arcgis.com/4.6/'
    };

    return (
      <div className="App">
        <div className="App-header">
          <h2>esri-loader-react test app</h2>
        </div>
        <p className="App-intro">
            esri-loader-react test
        </p>
        <EsriLoaderReact
          options={options}
          modulesToLoad={['esri/Map', 'esri/views/MapView']}
          onReady={({loadedModules: [Map, MapView], containerNode}) => {
            new MapView({
              container: containerNode,
              map: new Map({basemap: 'national-geographic'}),
              center: [-66.105721, 18.466333],
              zoom: 15,
              ui: {
                components: []
              }

            })

          }}
        />
      </div>
    );
  }
}

export default App;
