
# Filler Word Remover

## Overview

This is a simple web application built with Vite and React that allows users to upload audio files and play/pause them with a visual representation of the waveform. The backend server is set up using Express.js and is expected to be running on port 3000.

## Features

1. **File Upload:** Users can upload audio files using the file input.

2. **Waveform Visualization:** The uploaded audio file's waveform is displayed using the Wavesurfer.js library.

3. **Play/Pause Controls:** Users can play or pause the audio playback.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/pushsontakke/Filler-Word-Remover.git
   cd Filler-Word-Remover
   ```

2. Install dependencies for both the frontend and the backend:

   ```bash
   # Install frontend dependencies
   cd client
   npm install

   # Install backend dependencies
   cd server
   npm install
   ```

3. Run the frontend and backend servers:

   ```bash
   # Run the frontend server (from the 'frontend' directory)
   npm run dev

   # Run the backend server (from the 'backend' directory)
   npm start
   ```

4. Open your browser and go to [http://localhost:3000](http://localhost:3000) to access the application.

## Usage

1. **File Upload:**
   - Click on the "Choose File" button to select an audio file for upload.
   - Click the "Upload" button to send the selected file to the backend server.

2. **Waveform Visualization:**
   - Once the file is uploaded, the waveform of the audio will be displayed using the Wavesurfer.js library.

3. **Play/Pause Controls:**
   - Click the "Play/Pause" button to control the playback of the audio file.

## Project Structure

- **frontend:** Contains the Vite-based React frontend code.
  - `src/App.jsx`: The main React component with the file upload, waveform visualization, and playback controls.
  - `src/index.css`: Styles for the application.
  - `vite.config.js`: Vite configuration file.

- **backend:** Contains the Express.js backend code.
  - `index.js`: Express server code handling file uploads.

## Dependencies

### Frontend

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Wavesurfer.js](https://wavesurfer-js.org/)
- [axios](https://axios-http.com/)

### Backend

- [Express.js](https://expressjs.com/)
- [multer](https://www.npmjs.com/package/multer) (for handling file uploads)
---
