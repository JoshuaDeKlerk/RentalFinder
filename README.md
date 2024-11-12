![RentalFinder Header Image](./rentalfinder/src/assets/HeaderImageReadMe.png)

<p align="center">
  <a href="https://drive.google.com/file/d/1V_Bio7-vWirczDP8M2kCATpgRIg2lBjI/view?usp=sharing">View Demo</a>
  ·
  <a href="https://github.com/EnzoDV08/DV_200_Group2_Final/issues">Report Bug</a>
  ·
  <a href="https://github.com/EnzoDV08/DV_200_Group2_Final/issues">Request Feature</a>
</p>


## Table of Contents

* [About the Project](#about-the-project)
  * [Project Description](#project-description)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [How to install](#how-to-install)
    * [Backend Setup](#backend-setup)
    * [Frontend Setup](#frontend-setup)
* [Features and Functionality](#features-and-functionality)
* [Concept Process](#concept-process)
   * [Ideation](#ideation)
   * [Wireframes](#wireframes)
* [Development Process](#development-process)
   * [Implementation Process](#implementation-process)
        * [Highlights](#highlights)
        * [Challenges](#challenges)
   * [Reviews and Testing](#reviews-and-testing)
        * [Feedback from Reviews](#feedback-from-reviews)
        * [Unit Tests](#unit-tests)
   * [Future Implementation](#future-implementation)
* [Final Outcome](#final-outcome)
    * [Mockups](#mockups)
    * [Video Demonstration](#video-demonstration)
* [Conclusion](#conclusion)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)


## About the Project

![RentalFinderLogo](./rentalfinder/src/assets/mockups/MockUp1.png)

### Project Description

RentalFinder is a comprehensive car rental web application designed to showcase car rental options through effective API integration and data management. This project emphasized learning MongoDB for data storage, and it bolstered the team's backend development skills.

### Built With
[![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![HTML5](https://img.shields.io/badge/HTML-e34c26?style=for-the-badge&logo=html5&logoColor=white)](https://html.spec.whatwg.org/multipage/)
[![CSS3](https://img.shields.io/badge/CSS-563d7c?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS) 
[![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)


## Getting Started

Follow these instructions to set up your copy of the project for development and testing.

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### How to install

#### Backend Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/EnzoDV08/DV_200_Group2_Final.git
    cd rentalfinder/backend
    ```
2. **Install backend dependencies**:
    ```bash
    npm install
    ```
3. **Create a `.env` file** in the `backend` directory and add:
    ```env
    PORT=5000
    MONGO_URI=mongodb+srv://Enzo:enzo12345@rentalfinder.ufywffo.mongodb.net/react_db?retryWrites=true&w=majority&appName=RentalFinder
    ```
4. **Ensure MongoDB server is running**:
    ```bash
    mongod
    ```

#### Frontend Setup

1. **Navigate to the frontend directory**:
    ```bash
    cd ../rentalfinder
    ```
2. **Install frontend dependencies**:
    ```bash
    npm install react-scripts
    ```


## Features and Functionality

### Core Features
- **User Authentication**: Secure sign-in and sign-up options.
- **Car Search and Booking**: Browse available cars and make bookings.
- **Favorites**: Save preferred car listings.
- **Responsive Design**: Mobile and desktop-friendly UI.
- **Details Page**: View detailed information about selected cars.


## Concept Process

Initial brainstorming focused on creating a seamless car rental experience with a user-friendly interface and reliable data handling.

### Ideation

The goal was to design an application that balances functionality and simplicity, catering to users looking for an efficient car rental service.

### Wireframes

![Home, Sign In and Sign Up](./rentalfinder/src/assets/mockups/MockUp1.png)
![Home](./rentalfinder/src/assets/mockups/MockUp2.png)
![Search Favorites Booking](./rentalfinder/src/assets/mockups/MockUp3.png)
![Details Page](./rentalfinder/src/assets/mockups/MockUp4.png)


## Development Process

### Implementation Process

* **Backend**: Built using Node.js and MongoDB to handle data operations and API requests.
* **Frontend**: Developed with React and Bootstrap for an interactive and responsive UI.

#### Highlights
* Seamless integration between backend and frontend.
* Effective API calls for real-time car data updates.

#### Challenges
* Managing user authentication across multiple components.
* Ensuring efficient database queries.

### Reviews & Testing

#### Feedback from Reviews

Feedback noted the application's clean design and smooth user experience. Suggestions were made for improving data loading times.

#### Unit Tests

Basic testing was conducted to ensure user authentication, data retrieval, and booking functionality.


### Future Implementation

* Add payment gateway for secure online transactions.
* Implement user profile customization.
* Include multi-language support.


## Final Outcome

### Mockups

![Home, Sign In and Sign Up](./rentalfinder/src/assets/mockups/MockUp1.png)
![Home](./rentalfinder/src/assets/mockups/MockUp2.png)
![Search Favorites Booking](./rentalfinder/src/assets/mockups/MockUp3.png)
![Details Page](./rentalfinder/src/assets/mockups/MockUp4.png)

### Video Demonstration

[View Demo](https://drive.google.com/file/d/1V_Bio7-vWirczDP8M2kCATpgRIg2lBjI/view?usp=sharing)


## Roadmap

- Add payment integration for seamless bookings.
- Improve search filters with more sorting options.
- Enable booking history and transaction logs for users.


## Contributing

Contributions are what make the open-source community such a fantastic place to learn and create. Any contributions are **greatly appreciated**.

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.


## License

Distributed under the MIT License. See `LICENSE` for more information.


## Contact

- **Zander Bezuidenhout** - [GitHub](https://github.com/ZanderBez)
- **Jaco Mostert** - [GitHub](https://github.com/321008Jaco)
- **Joshua De Klerk** - [GitHub](https://github.com/JoshuaDeKlerk)
- **Armand Naude** - [GitHub](https://github.com/Armand1711)
- **Enzo De Vittorio** - [GitHub](https://github.com/EnzoDV08)
- **Project Link** - [RentalFinder](https://github.com/EnzoDV08/DV_200_Group2_Final)


## Acknowledgements

* [MongoDB Documentation](https://docs.mongodb.com/)
* [Node.js Documentation](https://nodejs.org/en/docs/)
* [React Documentation](https://reactjs.org/docs/getting-started.html)
* [Bootstrap Documentation](https://getbootstrap.com/docs/)
