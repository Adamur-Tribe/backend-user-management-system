# **Adamur Backend User System**

This project is a backend service designed to handle essential user management functionalities, such as account creation, secure logins, email verification using OTP, and password recovery. Built to integrate seamlessly into platforms like **Adamur**, which supports tech education in Africa, this API emphasizes security, scalability, and flexibility.

---

## **Overview of Features**
### **Account Creation Process**
- **Effortless Onboarding**: Users can initiate their journey by signing up with a valid email address and a strong password of their choice.
- **Enhanced Data Protection**: All passwords are encrypted using industry-leading algorithms before being securely stored, safeguarding user credentials.
- **Stringent Validation**: The platform conducts thorough checks to ensure the email format is correct and that passwords meet complexity requirements, fortifying the registration process.
- **Activation Code Delivery**: Upon completing the signup, users receive a unique one-time password (OTP) via email, which is crucial for activating their account.

### **Authentication Mechanism**
- **Secure Login**: Users log in by providing their registered email and password, ensuring secure access to their accounts.
- **Session Management**: After successful authentication, a **JWT token** is issued, establishing a secure session that protects user data during interactions.
- **Email Confirmation Gate**: Users who have not yet verified their accounts are gently reminded to complete the email verification process before gaining full access.

### **Account Verification**
- **Rapid OTP Dispatch**: As soon as users register, an OTP is promptly sent to their email, verifying ownership and ensuring a smooth transition to activation.
- **Verification Completion**: To finalize their account setup, users must enter the OTP received in their email, confirming their access rights.

### **Password Reset Functionality**
- **Convenient Recovery Options**: Users can easily request a password reset link if they forget their current password, ensuring a user-friendly experience.
- **Unique Reset Token**: A secure token is generated and sent to the user’s email, enabling them to safely create a new password and regain access to their account.

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
