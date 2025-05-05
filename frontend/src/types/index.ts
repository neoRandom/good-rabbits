type UserModel = {
    _id: string;
    email: string;
    fullName: string;
    profilePic: string;
    createdAt: string;
    updatedAt: string;
};


type SignUpForm = {
    username: string;
    email: string;
    password: string;
};

type LoginForm = {
    email: string;
    password: string;
};

type AuthStore = {
    authUser: UserModel | null;
    isSigningUp: boolean;
    isLoggingIn: boolean;
    isUpdatingProfile: boolean;
    isCheckingAuth: boolean;
    onlineUsers: Array<string>;

    checkAuth: () => Promise<void>;

    signup: (data: SignUpForm) => Promise<void>;

    logout: () => Promise<void>;

    login: (data: LoginForm) => Promise<void>;

    updateProfile: (data: FormData) => Promise<void | any>;
};

export type {
    UserModel,
    SignUpForm,
    LoginForm,
    AuthStore
};
