![RentalFinderLogo](./rentalfinder/src/assets/logo/LogoBlueSmall.svg)

## Table of Contents

* [About the Project](#about-the-project)
   * [Home, Sign In and Sign Up](#home-sign-in-and-sign-up)
   * [Home](#home)
   * [ Search Favorites Booking](#search-favorites-booking)
   * [Details](#details-page)
* [Getting Started](#getting-started)
  * [Backend](#backend)
  * [Frontend](#frontend)
  * [Setup](#setup)
    * [Backend Setup](#backend-setup)
    * [Frontend Setup](#frontend-setup)
  * [Running the Project](#running-the-project)
    * [Running the Backend](#running-the-backend)
    * [Running the Frontend](#running-the-frontend)
* [Built With](#built-with)
* [Contributing](#contributing)
* [Authors](#authors)
* [License](#license)
* [Demo Recording](#demo-recording)

## About The Project

Term 2 showed a change in attention to MongoDB proficiency and efficient user data storage. Together with my team, we created a website for automobile rentals that included an API to display several rental car alternatives. Our abilities in database administration and back-end development have greatly improved as a result of this project.

### Home, Sign In and Sign Up

![Home, Sign In and Sign Up](./rentalfinder/src/assets/mockups/MockUp1.png)

### Home

![Home](./rentalfinder/src/assets/mockups/MockUp2.png)

### Search Favorites Booking

![Search Favorites Booking](./rentalfinder/src/assets/mockups/MockUp3.png)

### Details Page

![Details Page](./rentalfinder/src/assets/mockups/MockUp4.png)


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Backend

1. Clone the repository:

    ```sh
    git clone https://github.com/EnzoDV08/DV_200_Group2_Final
    cd rentalfinder/backend
    ```

2. Install backend dependencies:

    ```sh
    npm install
    ```

### Frontend

1. Navigate to the frontend directory:

    ```sh
    cd ../rentalfinder
    ```

2. Install frontend dependencies:

    ```sh
    npm install react-scripts
    ```

## Setup

### Backend Setup

1. Create a `.env` file in the `backend` directory and add the following environment variables:

    ```env
    PORT=5000
    MONGO_URI=mongodb+srv://Enzo:enzo12345@rentalfinder.ufywffo.mongodb.net/react_db?retryWrites=true&w=majority&appName=RentalFinder
    ```

2. Ensure your MongoDB server is running. You can start MongoDB with the following command:

    ```sh
    mongod
    ```

## Running the Project

### Running the Backend

1. Start the backend server:

    ```sh
    cd backend
    npm start
    ```

    The backend server will run on `http://localhost:5000`.

### Running the Frontend

1. Start the frontend development server:

    ```sh
    cd rentalfinder
    npm start
    ```

    The frontend server will run on `http://localhost:5000`.

## Built With

* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [React](https://react.dev/)
* [Bootstrap](https://getbootstrap.com/)
* [MongoDB](https://www.mongodb.com/)

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Authors

* **[Zander Bezuidenhout](https://github.com/ZanderBez)** - *JavaScript, HTML, CSS, React, & MongoDB* - 
* **[Joshua De Klerk](https://github.com/JoshuaDeKlerk)** - *JavaScript, HTML, CSS, React, & MongoDB* -
* **[Jaco Mostert](https://github.com/321008Jaco)** - *JavaScript, HTML, CSS, React, & MongoDB* 
* **[Enzo De Vittorio](https://github.com/EnzoDV08)** - *JavaScript, HTML, CSS, React, & MongoDB* 
* **[Armand Naude](https://github.com/Armand1711)** - *JavaScript, HTML, CSS, React, & MongoDB*
* **[Tsungai Katsuro](https://github.com/TsungaiKats)** - *Lecture*

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Demo Recording

[Demo Vid](https://drive.google.com/file/d/1V_Bio7-vWirczDP8M2kCATpgRIg2lBjI/view?usp=sharing)
