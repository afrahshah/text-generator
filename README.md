# Text Generator (Poetic)

## Overview

The Poetic Text Generator is an application that uses a TensorFlow model to generate text based on user input. The application is built with a Flask backend to handle text generation and a React frontend to provide a user interface.The application allows users to generate text by specifying parameters such as length and temperature.

## Features

- Generate poetic text using a simple, customizable model.
- Interactive frontend with a well-designed user interface.

## Project Output Example
   Here is an example of the output at localhost:

![ Image](https://github.com/afrahshah/text-generator/raw/241c7fd1c387d191ae2b5c7547a32650cce02380/poetic/op5.png)
![ Image](https://github.com/afrahshah/text-generator/raw/241c7fd1c387d191ae2b5c7547a32650cce02380/poetic/op4.png
)

## Getting Started

### Prerequisites

- Python 3.7 or higher
-React.js and npm
- Flask
- Virtual environment (optional but recommended)

### Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/afrahshah/text-generator.git
   cd text-generator

2. **Install tenserflow , numpy, flask**

  ```bash
   pip install tensorflow numpy flask
```
3. **Run the terminal for terminal output**
```bash
   python main.py
```
   ### Example Image
   Here is an example of the output at terminal:

![Example Image](https://github.com/afrahshah/text-generator/raw/241c7fd1c387d191ae2b5c7547a32650cce02380/poetic/output1.png)

### Frontend

1. Navigate to the React frontend directory
   
2. Install dependencies
   ```bash
   npm install
   ```
3. Start the React development server:
 ```bash
   npm start
   ```

## Usage

1. Open the React application:
Go to http://localhost:3000 in your web browser.

2. Generate Text:

   Enter the desired length of the text and the temperature (controls randomness).
   Click the "Generate Text" button to request a text generation from the Flask server.
   The generated text will be displayed on the page.

## Contributing

   Feel free to open issues or submit pull requests if you have suggestions or improvements for this project.
