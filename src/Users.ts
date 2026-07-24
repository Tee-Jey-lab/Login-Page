import { create } from "zustand";

export type Role = "Admin" | "User" | "Driver" | "Shipper";

export interface FormShape {
  user_id: string;
  userName: string;
  email: string;
  password: string;
  isLoggedIn?: boolean;
  role: Role;
}

interface UserStoreState {
  myUsers: FormShape[];
  currentUser: FormShape | null; // null means no one is logged in
  addUser: (newUser: FormShape) => void;
  login: (email: string, pass: string) => boolean;
  logout: () => void;
}

const useUserStore = create<UserStoreState>()((set, get) => ({
  myUsers: [],
  currentUser: null,

  addUser: (newUser) =>
    set((state) => ({
      myUsers: [...state.myUsers, newUser],
    })),

  // Login action: Checks credentials and updates currentUser
  login: (email, pass) => {
    const user = get().myUsers.find(
      (u) => u.email === email && u.password === pass
    );

    if (user) {
      set({ currentUser: user });
      return true; // Success
    }
    return false; // Invalid credentials
  },

  // Logout action: Clears currentUser
  logout: () => set({ currentUser: null }),
}));

export default useUserStore;