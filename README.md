# CredVault – Certificate Issuing & Verification Platform

A React + Vite frontend demo for requesting, tracking, issuing, and verifying certificates.

## Features
- Home page with Request, Track, Verify, and Admin navigation
- Certificate request form with Indian state list and basic validation
- Application tracking by Application ID
- Certificate verification by Certificate ID
- Admin login (`admin` / `admin`)
- Admin application management: Issue or Reject
- Admin certificate management: Revoke
- Browser `localStorage` used as dummy storage (no backend/database)

## Run locally
1. Install Node.js (LTS).
2. Open this folder in VS Code.
3. Open Terminal in the project folder.
4. Run:
   ```bash
   npm install
   npm run dev
   ```
5. Open the local URL printed by Vite (usually http://localhost:5173).

## Demo admin login
- Username: `admin`
- Password: `admin`

## Important demo limitation
This is a frontend-only practice project. Data is stored in the current browser's localStorage and is not shared between browsers/devices. The admin login is only a demo gate, not production security. Do not use real personal information.

## Suggested screenshots for README
- Home page
- Request form
- Successful application submission with Application ID
- Track application result
- Admin applications table
- Admin certificates table
- Certificate verification result
