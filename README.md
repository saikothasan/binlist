# BIN Checker - Professional Bank Identification Number Lookup Tool

A modern, fast, and reliable BIN (Bank Identification Number) checking tool built with Next.js 13, TypeScript, and Tailwind CSS. This application allows users to instantly verify and retrieve detailed information about credit and debit card BINs.

![BIN Checker Screenshot](https://sjc.microlink.io/eOiExJ1TK9RDHzYHgPRAS5S0Ev-_4aPftL69O7toiB4FB4LNq_NqyMafDIrPE71GVFJyvVFEQIAakHx4dULZ4g.jpeg)

## Features

- 🔍 Instant BIN lookup and verification
- 🏦 Comprehensive card information display
- 🌍 Country detection with flag display
- 🎨 Modern UI with dark/light mode support
- 📱 Fully responsive design
- ⚡ Server-side BIN database for fast lookups
- 🔒 Secure and privacy-focused

## Tech Stack

- **Framework:** Next.js 13 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide Icons
- **Database:** CSV-based BIN database

## Getting Started

### Prerequisites

- Node.js 16.8 or later
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/saikothasan/binlist.git
   cd binlist
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
binlist/
├── app/                    # Next.js 13 app directory
│   ├── api/               # API routes
│   ├── components/        # React components
│   └── styles/           # Global styles
├── public/               # Static files
│   └── bin-list-data.csv # BIN database
├── lib/                  # Utility functions
└── components/          # Shared components
```

## Features in Detail

### BIN Checker
- Enter any 6-8 digit BIN
- Get instant results
- View detailed card information

### Data Display
- Card brand and type
- Issuing bank information
- Country of origin with flag
- Contact details

### User Interface
- Clean and modern design
- Dark/light mode support
- Responsive layout
- Loading states and error handling

## API Routes

### GET /api/check-bin
Checks a BIN number against the database.

Query Parameters:
- `bin`: 6-8 digit BIN number

Example Response:
```json
{
  "BIN": "123456",
  "Brand": "VISA",
  "Type": "CREDIT",
  "Category": "CLASSIC",
  "Issuer": "EXAMPLE BANK",
  "IssuerPhone": "+1234567890",
  "IssuerUrl": "www.examplebank.com",
  "CountryName": "United States",
  "isoCode2": "US",
  "isoCode3": "USA"
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Saiko Thasan - [@saikothasan](https://github.com/saikothasan)

Project Link: [https://github.com/saikothasan/binlist](https://github.com/saikothasan/binlist)

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)
