# User Directory App

A responsive React web application that fetches and displays user data from a public API with real-time search and filtering capabilities.

## 🚀 Features

- **API Integration**: Fetches user data from JSONPlaceholder API
- **Real-time Search**: Search users by name with instant results
- **Advanced Filtering**: Filter by city and company with dropdown selectors
- **Combined Filters**: Use multiple filters simultaneously (AND logic)
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Error Handling**: Graceful error states with retry functionality
- **Loading States**: User-friendly loading indicators
- **Clear Filters**: Easy reset of all active filters

## 🛠️ Tech Stack

- **React 18** - Frontend framework
- **TypeScript** - Static type checking and enhanced developer experience
- **React Hooks** - State management (useState, useEffect, useMemo)
- **Tailwind CSS** - Styling and responsive design
- **Lucide React** - Modern icon library with proper TypeScript support
- **Fetch API** - HTTP requests with typed responses

## 🏗️ Architecture & Approach

### Component-Based Architecture

I adopted a **modular, component-based approach** to ensure maintainability, reusability, and testability:

#### **Custom Hooks**

- **`useUsers`**: Encapsulates all API-related logic (fetching, loading, error states)
- **`useFilters`**: Manages filter state and filtering logic separately from UI components

#### **Component Categories**

1. **UI Components**: Pure presentational components (`Spinner`, `ErrorMessage`, `EmptyState`)
2. **Layout Components**: Structure and container components (`UserGrid`)
3. **Filter Components**: Reusable filter controls (`SearchInput`, `FilterDropdown`, `ClearBtn`)
4. **Data Display Components**: User information presentation (`UserCard`, `UserDetail`)

### Design Principles

1. **Separation of Concerns**: Each component has a single responsibility
2. **Composition over Inheritance**: Build complex UIs from simple, reusable components
3. **Props-Based Design**: Components receive data via props for maximum reusability
4. **Performance Optimization**: Use `useMemo` for expensive computations (filtering)
5. **Error-First Design**: Comprehensive error handling at every level

### State Management Strategy

- **Local State**: Used React hooks for component-level state
- **Derived State**: Computed properties (filtered users, unique cities/companies) using `useMemo`
- **State Lifting**: Filters managed in custom hook, passed down via props
- **Side Effects**: API calls handled in `useEffect` with cleanup

## 📋 Assumptions Made

### API Assumptions

- **Data Structure**: Assumed JSONPlaceholder API structure remains consistent
- **Required Fields**: Assumed all users have `name`, `email`, but made `address.city` and `company.name` optional
- **Network Reliability**: Implemented retry mechanism assuming occasional network failures
- **Data Volume**: Optimized for ~10 users from JSONPlaceholder, but scalable to hundreds

### User Experience Assumptions

- **Search Behavior**: Users expect real-time search (no submit button needed)
- **Filter Logic**: Multiple filters should work with AND logic (intersection, not union)
- **Mobile Usage**: Responsive design assumes significant mobile traffic
- **Data Freshness**: Users don't need real-time updates (no polling/websockets)

### Business Logic Assumptions

- **Case Sensitivity**: Search should be case-insensitive for better UX
- **Partial Matching**: Search matches anywhere in the name (not just beginning)
- **Empty States**: Show helpful messaging when no results found
- **Website Links**: External website links should open in new tabs

### Technical Assumptions

- **Browser Support**: Modern browsers with ES6+ support and TypeScript compilation target
- **TypeScript Knowledge**: Developers working on this codebase have TypeScript familiarity
- **Build Process**: Application requires TypeScript compilation (handled by React build tools)
- **Type Safety**: Strict TypeScript configuration prevents common runtime errors
- **API Consistency**: JSONPlaceholder API structure matches defined TypeScript interfaces
- **Bundle Size**: TypeScript adds development benefits without significant runtime overhead

## 🚦 Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn
- TypeScript knowledge (optional but recommended for development)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd finology
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

   _Note: TypeScript dependencies and type definitions are included in package.json_

3. **Start development server**

   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### TypeScript Development

For optimal TypeScript development experience:

```bash
# Type check without building
npm run type-check

# Build with type checking
npm run build
```

## 📁 Project Structure

```
src/
├── types/                      # TypeScript type definitions
│   └── index.ts               # User, API response types
├── components/
│   ├── ui/                     # Pure UI components
│   │   ├── Spinner.tsx
│   │   ├── ErrorMessage.tsx
│   │   └── EmptyState.tsx
│   ├── layout/                 # Layout & structure
│   │   └── UserGrid.tsx
│   ├── filters/                # Filter-related components
│   │   ├── SearchInput.tsx
│   │   ├── FilterDropdown.tsx
│   │   ├── ClearBtn.tsx
│   └── user/                   # User display components
│       ├── UserCard.tsx
│       ├── UserDetail.tsx
├── hooks/                      # Custom hooks with TypeScript
│   ├── useUsers.ts            # API & user data management
│   └── useFilters.ts          # Filter state & logic
└── App.tsx                    # Main application component
```

## 🎯 Key Features Explained

### Real-time Search

- Utilizes `useMemo` for performance optimization
- Debouncing not implemented due to small dataset, but easily extensible
- Case-insensitive partial matching

### Filter Combinations

- All filters work together (AND logic)
- Dynamic dropdown options based on available data
- Visual indicators for active filters

### Error Handling

- Network errors with retry functionality
- Graceful degradation for missing user data fields
- User-friendly error messages

### Responsive Design

- Mobile-first approach with Tailwind CSS
- Grid layouts that adapt to screen size
- Touch-friendly interface elements

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for the free API
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide React](https://lucide.dev/) for the beautiful icons
- [React](https://reactjs.org/) team for the amazing framework
