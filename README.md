# **Adamur Backend User System**

This project is a backend service designed to handle essential user management functionalities, such as account creation, secure logins, email verification using OTP, and password recovery. Built to integrate seamlessly into platforms like **Adamur**, which supports tech education in Africa, this API emphasizes security, scalability, and flexibility.

---

## **Overview of Features**

- **User Registration**
  - Users can sign up by providing their email and a secure password.
  - Passwords undergo strong encryption before being saved.
  - Validates email format and password complexity for added security.
  - Sends a unique one-time verification code (OTP) to the user’s email for account activation.

- **Login and Authentication**
  - Authenticates users with a secure email and password combination.
  - Issues a **JWT token** to maintain session security upon successful login.
  - Ensures that unverified users cannot log in until their email is verified.

- **Email Verification**
  - After signing up, the user receives an OTP through email.
  - The OTP is required to complete the account verification process, ensuring the user has access to the provided email.

- **Password Recovery**
  - Users can request a password reset link if they forget their password.
  - A secure token is generated and sent via email, allowing users to set a new password.

---

## **Tech Stack and Tools**

- **Backend Framework**: Node.js and Express for the server-side logic.
- **GraphQL**: For flexible querying and interaction with the API.
- **Database**: Prisma ORM integrated with PostgreSQL for efficient data storage (SQLite for local development).
- **Authentication**: JSON Web Tokens (JWT) to securely manage user sessions.
- **Email Service**: Nodemailer configured with an SMTP service to handle email notifications.
- **Testing Framework**: Jest for unit tests and Supertest for API integration tests.

---

## **Project Setup Guide**

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd adamur-backend-system
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Environment Setup**:
   Create a `.env` file in the project root with the following values:
   ```bash
   DATABASE_URL=<your-database-url>
   JWT_SECRET=<your-jwt-secret>
   EMAIL_SERVICE=<your-smtp-details>
   ```

4. **Database Migrations**:
   ```bash
   npx prisma migrate dev
   ```

5. **Run the Server**:
   ```bash
   npm run dev
   ```

---

## **Possible Extensions**

- **Role-Based Access Control (RBAC)**: Implement roles (like Admin or User) with different permission levels for secure access management.
- **Web3 Integration**: Future support for blockchain-based identity verification to bring decentralized login options to the platform.
