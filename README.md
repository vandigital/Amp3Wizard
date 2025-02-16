# Amp3 Wizard

## Overview
The Amp3 Wizard is an AI-powered chatbot built on the NEAR blockchain, designed to assist independent artists in the music distribution process. This open-source project simplifies interactions with blockchain technology, allowing artists to focus on their creative output while leveraging Web3 capabilities for music rights management.

## Features
- **Interactive Chat Interface**: Engages artists in a step-by-step process to set up their music tracks for distribution.
- **NEAR Blockchain Integration**: Utilizes the NEAR protocol to ensure secure, transparent transactions and smart contract management.
- **User Authentication**: Supports social media logins to verify artist identities and streamline the profile setup process.

## Technology Stack
- **NEAR Protocol**: Handles smart contracts and blockchain interactions.
- **Node.js**: Powers the backend services, providing a robust environment for server-side logic.
- **Express.js**: Facilitates the creation of web server functionalities.
- **Socket.IO**: Enables real-time bidirectional event-based communication for the chat interface.

## Getting Started

### Prerequisites
Ensure you have the following installed:
- Node.js
- NEAR CLI
- Git

### Installation
Clone the repository:
```bash
git clone https://github.com/yourusername/amp3-wizard.git
```

Install dependencies:
```bash
cd amp3-wizard
npm install
```

Set up environment variables:
Create a `.env` file in the root directory and include the following:
```
NEAR_ACCOUNT=youraccount.testnet
```

### Running the Application
Start the server:
```bash
node server.js
```

## Usage
After starting the application, connect to `http://localhost:3000` from your web browser to interact with the Amp3 Wizard. The chat interface will guide you through the process of setting up your music for distribution.

## Contributing
We welcome contributions to the Amp3 Wizard! Please read through our contributing guidelines for details on our code of conduct, and the process for submitting pull requests to us.

## License
This project is licensed under the Apache License 2.0 - see the [LICENSE.md](LICENSE) file for details.

## Limitations and Future Scope
This version of the Amp3 Wizard focuses primarily on the chat interface and basic NEAR blockchain interactions. Future developments will aim to expand the platform’s capabilities, including advanced smart contract functionalities and broader integration with music streaming services.
