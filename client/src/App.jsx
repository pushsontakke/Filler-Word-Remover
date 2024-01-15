import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import axios from "axios";
import "./index.css";

const App = () => {
  const wavesurferRef = useRef(null);
  const waveformContainerRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [waveformLoaded, setWaveformLoaded] = useState(false);

  useEffect(() => {
    if (!wavesurferRef.current) {
      const wavesurferInstance = WaveSurfer.create({
        container: waveformContainerRef.current,
        waveColor: "green",
        progressColor: "purple",
      });

      wavesurferInstance.on("ready", () => {
        setWaveformLoaded(true);
      });

      wavesurferRef.current = wavesurferInstance;
    }
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    if (wavesurferRef.current) {
      wavesurferRef.current.loadBlob(file);
    }
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("audio", selectedFile);

      await axios.post("http://localhost:3000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("File uploaded successfully");
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handlePlayPause = () => {
    if (wavesurferRef.current) {
      wavesurferRef.current.playPause();
    }
  };

  return (
    <div className="mx-10 my-20">
      <input
        id="inputfield"
        type="file"
        onChange={handleFileChange}
        className="w-[50%] h-64 mx-auto items-center border-2 rounded-2xl p-28 bg-gray-100 block"
      />
      <div className="text-center m-auto">
        <button
          className="border-black border-2 px-8 py-3 font-sans text-xl rounded-lg my-5 cursor-pointer bg-green-300"
          onClick={handleUpload}
        >
          Upload
        </button>
      </div>

      <div ref={waveformContainerRef}></div>

      {waveformLoaded && (
        <div className="text-center m-auto">
          <button
            className="border-black border-2 px-8 py-3 font-sans text-xl rounded-lg my-5 cursor-pointer bg-green-300"
            onClick={handlePlayPause}
          >
            Play/Pause
          </button>
        </div>
      )}

      {selectedFile && (
        <p className="font-sans text-center text-xl underline">
          Selected File: {selectedFile.name}
        </p>
      )}
    </div>
  );
};

export default App;
