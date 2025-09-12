# Merit Order Price Simulation

An interactive application for simulating wholesale electricity prices based on the merit order mechanism. It lets you experiment with demand, generation mix, fuel costs, and ETS (CO₂) rates to observe their impact on the marginal price and production structure.

>This apps comes directly from my master's thesis at AGH University of Science and Technology in Krakow - the source for reviewing the work is provided at the end of the document.

## Features
- Adjust core market parameters:
  - demand,
  - capacities/shares by technology (coal, gas, RES, etc.),
  - fuel prices and ETS (CO₂) rate.
- Dynamic calculation of marginal price (merit order) and generation mix.
- Real-time charts (Matplotlib) and GUI (Tkinter).
- Test files for quick demonstration.

## Model Assumptions
- Merit order: generating units are sorted by variable cost (fuel + ETS + other marginal costs).
- Market price = variable cost of the last unit required to meet demand (marginal unit).
- Modify mix and demand to analyze scenarios (e.g., the impact of RES on price).
- Version 1.0: implementation based on global variables and functional style.

## Requirements
- Python 3.8+
- Tkinter - included by default with CPython on most systems
- Python dependencies from `requirements.txt` (Matplotlib and others):

## Installation
```bash
git clone https://github.com/little-star45/merit-order-price-simulation-v1.0.git
cd merit-order-price-simulation-v1.0

# (optional) virtual environment
python -m venv .venv
# Windows PowerShell:
. .venv\Scripts\Activate.ps1
# macOS/Linux:
# source .venv/bin/activate

pip install -r requirements.txt
```

## Running
GUI demo app (included in the repo):
```bash
python test_wyk_slider.py
```

On Windows there is also a demo build:
- `test_wyk_slider.exe` (double-click to run)

## Usage
1. Launch the GUI.
2. Using sliders/inputs, set:
   - demand,
   - capacities/shares by technology,
   - fuel prices and the ETS rate.
3. Apply changes to refresh the charts.
4. Analyze:
   - marginal price (from the marginal unit),
   - changes in the generation mix,
   - impact of RES and demand on price.

## Input and Test Files
- `test_files/` — sample data/tests for quick demo runs.
- Custom scenarios: prepare input data in a similar format as the test files and adjust the script to load them.

## Repository Structure
```text
merit-order-price-simulation-v1.0/
  test_files/              # sample test files
  README.md                # (this document)
  requirements.txt         # dependencies
  LICENSE                  # MIT
  .gitattributes
  test_wyk_slider.py       # GUI demo: logic + plots (tkinter + matplotlib)
  test_wyk_slider.exe      # Windows demo build
```

## Architecture and Technology
- **Language**: Python
- **GUI**: Tkinter (sliders/inputs for parameters)
- **Visualization**: Matplotlib (price/mix charts)
- **Style**: in v1.0, global variables and functional style. Planned migration towards:
  - a clearer data model + computation layer (e.g., more OO or an optimizer),
  - data persistence (database),
  - a web frontend (e.g., React).

## Oprimization strategy
<img 
    src="/public/content/projects/merit-order-desktop/screen3.png" 
    alt="Full workflow: enter city and view weather data in the GUI" 
    class="w-full max-w-full mx-auto border-2 border-gray-600 rounded-lg"
/>

The program counting social welfare was written according to the same algorithm but using two programming languages python and its library Pyomo and GAMSA. In both cases the same solver CPLEX was used, both are the Linear Programming type and in the end produced identical results.

## Results and Visualizations
<img 
    src="/public/content/projects/merit-order-desktop/screen2.png" 
    alt="Full workflow: enter city and view weather data in the GUI" 
    class="w-full max-w-full mx-auto border-2 border-gray-600 rounded-lg"
/>
<img 
    src="/public/content/projects/merit-order-desktop/screen1.png" 
    alt="Full workflow: enter city and view weather data in the GUI" 
    class="w-full max-w-full mx-auto border-2 border-gray-600 rounded-lg"
/>
- Charts show:
  - marginal price,
  - coverage of demand by technologies,
  - how demand and cost parameters affect the resulting price.
- Labels and legends aid real-time scenario interpretation.

## Validation and Related Work
The app and algorithm are described in more detail in the author’s Master’s thesis (in English), which also demonstrates parallel implementations of social welfare optimization in Python (Pyomo) and GAMS using the CPLEX solver. Both implementations produced identical results, confirming the approach.
- Full text: https://ses.agh.edu.pl/wp-content/uploads/2023/12/MSc_Patrycja_Domanska.pdf

## Roadmap
- Refactor logic (remove globals, improve modularity).
- Data layer: support for input/output files and a database.
- UI/UX: web version (e.g., React), better interactivity and scenario sharing.
- Batch mode: run multiple scenarios and export reports.

## License
- MIT (see `LICENSE`).
- Additional notice in the repository `README`: usage allowed for scientific purposes only; modification/distribution without the author's consent is prohibited.

## Sources
- [Merit order app](https://github.com/little-star45/merit-order-price-simulation-v1.0) - GitHub repo
- [Master’s thesis](https://ses.agh.edu.pl/wp-content/uploads/2023/12/MSc_Patrycja_Domanska.pdf) - My master thesis