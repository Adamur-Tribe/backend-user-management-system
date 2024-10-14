# **System**
## Project Overview:

A robust system tailored for efficient user management, encompassing critical functionalities such as account creation, secure authentication, email verification through OTP, and password recovery. Designed to enhance platforms to champion tech education across Africa, this API prioritizes security, scalability, and adaptability, making it an ideal solution for modern educational platforms.

### **Key Features:**
- **Streamlined User Onboarding**: Facilitates easy account registration for new users.
- **Robust Authentication**: Ensures secure login processes to protect user data.
- **OTP-Based Email Verification**: Validates user email addresses for increased security.
- **Effortless Password Recovery**: Provides users with a straightforward method to reset their passwords when needed.

### **Integration Potential:**
Built with a flexible architecture, this service can be integrated into various educational platforms, enhancing user engagement and trust.

## **User Account Management Overview**

### **Initiating Your Journey**
- **Effortless Registration**: Users can start their journey by entering their email and selecting a robust password that adheres to security best practices.
- **Data Security First**: All passwords are transformed through advanced encryption methods before being safely stored, ensuring user confidentiality.
- **Comprehensive Validation**: Each registration undergoes meticulous checks for valid email formatting and password strength, laying the groundwork for a secure environment.
- **Activation via OTP**: After registration, users receive a one-time code (OTP) sent directly to their email, essential for validating their account.

### **Logging In Securely**
- **Quick Access**: Users log in with their registered email and password, facilitating a straightforward authentication process.
- **Session Security**: Upon successful login, a **JWT token** is created to maintain a secure session and protect user interactions.
- **Email Verification Step**: Users who haven’t completed the email verification process are prompted to do so, ensuring that only verified users gain full access.

### **Verification for Trust**
- **Swift OTP Delivery**: An OTP is dispatched to users immediately after they sign up, confirming their email ownership and enabling secure account activation.
- **Account Activation**: To complete their registration, users must enter the OTP received, verifying their identity and granting them access to the platform.

### **Efficient Password Recovery**
- **Streamlined Reset Process**: If users forget their password, they can easily request a reset link through the platform, ensuring quick recovery options.
- **Secure Reset Token**: A unique, time-sensitive token is sent to the user’s email, allowing them to securely create a new password and regain access to their account.

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
   cd demur-backend-system
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
