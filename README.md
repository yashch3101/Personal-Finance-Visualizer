# Money Mapper 💰

Money Mapper is a **Next.js 13** full-stack finance tracker designed to help users organize their personal finances efficiently. It provides features for managing **income, taxes, assets, debt, and net worth**, ensuring users have a clear financial overview.

The app includes **user authentication with next-auth** and securely stores financial data in a **MongoDB database using Prisma ORM**. It features a **modern UI built with shadcn/ui and Tailwind CSS**, offering both **light and dark mode** for an optimized user experience.

With **interactive charts and detailed tables**, users can visualize their financial insights effectively. The app ensures seamless state management using **Zustand and React Query**, making data flow smooth and responsive.

---

## 🚀 Features

- 📊 **Finance Tracking:** Manage **income, expenses, taxes, assets, debt, and net worth**.
- 🔐 **User Authentication:** Secure login with **next-auth**.
- 🌗 **Dark & Light Mode:** Toggle between themes with **next-themes**.
- 📉 **Data Visualization:** Insightful **charts and tables** using **Recharts**
- ⚡ **Fast & Responsive UI:** Built with **shadcn/ui, Tailwind CSS**, and **clsx**.
- 📆 **Date Management:** **react-day-picker** and **date-fns** for seamless date handling.
- 🔄 **State Management:** Efficient **Zustand** for global state and **Tanstack React Query** for data fetching.
- 📜 **Form Validation:** Integrated **react-hook-form** with **Zod validation**.
- 🛠 **Optimized Backend:** Uses **Prisma ORM** with MongoDB.

---

## 🛠 Tech Stack

### **Frontend**
- **Framework:** Next.js (v13.4.12)
- **UI Library:** shadcn/ui
- **Styling:** Tailwind CSS (v3.3.3) with Tailwind CSS Animate
- **Icons:** @radix-ui/react-icons, react-icons, lucide-react
- **Date Handling:** react-day-picker (v8.8.0), date-fns (v2.30.0)
- **State Management:** Zustand (v4.4.0)
- **Data Fetching & Tables:** Tanstack React Query & Tanstack React Table
- **Form Handling:** react-hook-form (v7.45.2) & @hookform/resolvers (v3.1.1)
- **Validation:** Zod (v3.21.4)

### **Backend & Authentication**
- **ORM:** Prisma ORM (v5.1.0)
- **Database:** MongoDB
- **Authentication:** next-auth (v4.22.3)
- **API Requests:** Axios (v1.4.0)

### **Development Tools**
- **TypeScript:** v5.1.6
- **Utility Libraries:** clsx, class-variance-authority

---

## 📦 Installation & Setup

1. **Clone the repository**
   ```sh
   git clone https://github.com/yourusername/money-mapper.git
   cd money-mapper

#Install dependencies
    npm install


#Set up environment variables
    Create a .env file and configure the required variables for MongoDB, NextAuth, and Prisma.

#Run Prisma migrations
    npx prisma migrate dev

#Start the development server
    npm run dev


***The app will be available at http://localhost:3000
