import './App.css';
import poseImage from './PoseNumbers.png'
import Select from 'react-select'
import {useState} from 'react';
import StyledDropzone from './StyledDropzone';

const options = [
  { value: 0, label: 'Head', mapName: 'head' },
  { value: 1, label: 'Left Ankle', mapName: 'leftAnkle' },
  { value: 2, label: 'Left Elbow', mapName: 'leftElbow' },
  { value: 3, label: 'Left Hip', mapName: 'leftHip' },
  { value: 4, label: 'Left Knee', mapName: 'leftKnee' },
  { value: 5, label: 'Left Shoulder', mapName: 'leftShoulder' },
  { value: 6, label: 'Left Wrist', mapName: 'leftWrist' },
  { value: 7, label: 'Right Ankle', mapName: 'rightAnkle' },
  { value: 8, label: 'Right Elbow', mapName: 'rightElbow' },
  { value: 9, label: 'Right Hip', mapName: 'rightHip' },
  { value: 10, label: 'Right Knee', mapName: 'rightKnee' },
  { value: 11, label: 'Right Shoulder', mapName: 'rightShoulder' },
  { value: 12, label: 'Right Wrist', mapName: 'rightWrist' }
]

function App() {
  const [selectedOption, setSelectedOption] = useState([]);
  const handleChange = (options) => {
    setSelectedOption(options);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Fastpose JSON-2-CSV Extraction</h2>
        <h3>Choose a keypoint that you would like to extract data for: </h3>
      </header>
      <div className="App-body">
        <div className="select-container" style={{ color: 'grey' }}>
          <Select options={options} onChange={handleChange} />
          <br />
        </div>
        <p>Your selected keypoint: <strong>{selectedOption.label}</strong></p>
        <br />
        <br />
        <h3>3) Finally, drop the JSON file below to generate your csv: </h3>
        <br />
        <br />
          {selectedOption.label && <StyledDropzone key={selectedOption.label} keypoint={selectedOption.value} label={selectedOption.label} mapName={selectedOption.mapName}/>}
        <br />
        <br />
      </div>

    </div>
  );
}

export default App;
