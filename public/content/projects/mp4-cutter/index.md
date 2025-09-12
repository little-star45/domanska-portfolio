## MP4 Cutter (Ptyhon/PyQt)

### Short Description
A lightweight desktop application built with PyQt for quickly trimming MP4 files. The user selects a video file, enters start/end timestamps, and specifies the output filename. Requires **ffmpeg** to be installed.

### Features
- **Select MP4 file** via a simple GUI
- **Trim video** using start/end timestamps
- **Export to a new file** without re-encoding (fast cut, no quality loss)
- **Simple interface**

### Technologies
- **Python** (application logic)
- **PyQt** (user interface)
- **ffmpeg** (actual media cutting)

### Requirements
- Python 3.8+
- Installed `ffmpeg` available on `PATH`:
  - Windows (winget): `winget install --id Gyan.FFmpeg -e`
  - Windows (choco): `choco install ffmpeg`
  - macOS (brew): `brew install ffmpeg`
  - Linux (Debian/Ubuntu): `sudo apt-get install ffmpeg`

### Installation and Run
```bash
git clone https://github.com/little-star45/mp4_cutter_pyqt.git
cd mp4_cutter_pyqt

# (optional) virtual environment
python -m venv .venv
# Windows PowerShell:
. .venv\Scripts\Activate.ps1
# macOS/Linux:
# source .venv/bin/activate

pip install -r requirements.txt
python main.py
```

### Usage
1. Run the app:
```bash
py main.py
```
2. In the GUI, select an MP4 file.
3. Enter start and end times (e.g., **00:00:05** to **00:01:30**).
4. Provide the output filename.
5. Confirm to cut and save the video segment.

### Usage demo
Demo of the app in action:

<img
  src="/content/projects/mp4-cutter/workflow-demo.gif"
  alt="MP4 Cutter - application window"
  class="w-full max-w-full mx-auto border rounded"
/>


### License
This project is licensed under the MIT License.  
It is provided for educational purposes only. You are free to use, modify, and distribute it, with proper credit to the original author, but it comes without any warranty.

### Sources
- [PyQt](https://doc.qt.io/) - PyQt – Documentation
- [ffmpeg](https://ffmpeg.org/documentation.html) - fmpeg – Documentation
- [Python Docs](https://docs.python.org/3/) - Official Python documentation


### Repository
- Github: [mp4_cutter_pyqt – GitHub](https://github.com/little-star45/mp4_cutter_pyqt)

---

### Common Errors and Solutions
#### 1. PyQt5 installation error from requirements.txt
**Message:**
```
TomlError: ...\PyQt5\pyproject.toml(11, 1): msg
```
**Cause:**  
Outdated `pip/setuptools/wheel` or an incompatible Python version causes PyQt5 to build from source instead of using prebuilt wheels.

**Fix:**
```powershell
python -m pip install --upgrade pip setuptools wheel
pip install PyQt5==5.15.11
```
Make sure you are using Python **3.8 or newer**.

#### 2. Runtime error (ffprobe)
**Message:**
```
ffmpeg._run.Error: ffprobe error (see stderr output for detail)
```
**Cause:**  
The `ffmpeg-python` library requires external tools **ffmpeg/ffprobe**, which are not included in the package and cannot be found on the system.

**Fix:**
1. Download FFmpeg for Windows: [https://www.gyan.dev/ffmpeg/builds/](https://www.gyan.dev/ffmpeg/builds/)  
2. Extract the archive and add the `bin` folder (containing `ffmpeg.exe` and `ffprobe.exe`) to the **PATH** environment variable:  
   - Press `Win + R`, type `sysdm.cpl`, and press Enter.  
   - Go to **Advanced** → **Environment Variables**.  
   - In the **System variables** section, find and click `Edit` the `Path` element.  
   - Click **New**, paste the path to the `bin` folder (e.g. `C:\ffmpeg\bin`), and save.  
   - Restart PowerShell or your IDE. 
3. Verify installation:
```powershell
ffmpeg -version
ffprobe -version
```
4. Ensure the `.mp4` file path passed to `ffmpeg.probe()` is valid.

### 3. `module 'ffmpeg' has no attribute 'probe'`
**Message:**
```
module 'ffmpeg' has no attribute 'probe'
```
**Cause:**
You have installed the wrong package named `ffmpeg` instead of `ffmpeg-python`. Python imports the wrong module, which does not have the `probe` method.
**Fix:**
1. Uninstall the incorrect package:
```powershell
pip uninstall ffmpeg
```
2. Ensure the correct package is installed:
```powershell
pip install ffmpeg-python
```
3. Use the library as intended:
```python
import ffmpeg
probe = ffmpeg.probe("your_video.mp4")
print(probe)
```
Make sure there are no local files named `ffmpeg.py` that could shadow the library.