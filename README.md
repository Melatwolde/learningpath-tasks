# Protected Page with Google Authentication

This project demonstrates how to create a protected page in a Next.js application using NextAuth.js for Google authentication using Typescript and tailwind for the styling.

## Features

- **Google Authentication**: Secure login using Google OAuth.
- **Protected Pages**: Restrict access to certain pages based on user authentication.
- **User Session Management**: Manage user sessions with NextAuth.js.
- **Responsive Design**: Ensure the application is accessible on various devices.
- **Form Validation**: Validate user inputs on the sign-in page.
- **Error Handling**: Display appropriate error messages for failed login attempts.

## Prerequisites

- Node.js installed
- A Google account


## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/Melatwolde/learningpath-tasks.git
    cd task7
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm run dev
    ```

4. Configure NextAuth.js
Create a .env.local file in the root of your project and add your Google OAuth credentials
    ```sh
    GOOGLE_CLIENT_ID=your-google-client-id
    GOOGLE_CLIENT_SECRET=your-google-client-secret
    NEXTAUTH_URL=http://localhost:3000

    ```
5. Set Up Google OAuth Credentials
    Go to the Google Cloud Console.
    Create a new project or select an existing project.
    Navigate to the "Credentials" page.
    Click "Create Credentials" and select "OAuth 2.0 Client IDs".
    Configure the OAuth consent screen and set up your OAuth 2.0 Client ID.
    Add http://localhost:3000 to the list of authorized redirect URIs.
    Copy the Client ID and Client Secret and add them to your .env.local file.

### Running the Application

To run the application in development mode:

```sh
npm run dev
 ```

4. Open your browser and navigate to `http://localhost:3000/`.


![image](https://github.com/user-attachments/assets/92bcaf6f-5d84-405f-9e37-66f19a4db1a4)

and sign up with google redirects to 

![image](https://github.com/user-attachments/assets/c759b0a2-d1a8-4fd1-897f-a89931d1e7ea)

send otp verfication

![image](https://github.com/user-attachments/assets/da12ed13-1a14-4eb9-9284-7076a4c57dcf)

![image](https://github.com/user-attachments/assets/186e22aa-342e-4f4c-b595-ccda13924a90)
![image](https://github.com/user-attachments/assets/65504493-ecf8-4467-a885-0a23b71b8752)

![image](https://github.com/user-attachments/assets/eba959ff-8fcf-4bd1-96a4-f40d0ac450da)


