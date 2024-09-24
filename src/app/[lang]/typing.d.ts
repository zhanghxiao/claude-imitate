declare namespace Global {
  type SupportedLang = "en" | "zh";
  interface Dictionary {
    title: string;
    slider: {
      [key: string]: string;
    };
    recents: {
      [key: string]: string;
    };
    confirm: {
      [key: string]: string;
    };
    new: {
      [key: string]: string;
    };
    chat: {
      [key: string]: string;
    };
    setting: {
      [key: string]: string;
    };
    login: {
      [key: string]: string;
    };
  }
}

declare namespace Recents {
  interface RecentsContentProps {
    t: Global.Dictionary;
  }
}

declare namespace Chat {
  interface ChatItem {
    role: "user" | "assistant";
    content: string;
  }
  interface ChatContentProps {
    t: Global.Dictionary;
  }
}

declare namespace Login {
  interface LoginContentProps {
    t: Global.Dictionary;
  }

  interface LoginFrom {
    email: string;
    password: string;
  }
  interface RegisterFrom {
    email: string;
    password: string;
    code: string;
  }
  interface ResetPasswordFrom {
    email: string;
    password: string;
    code: string;
  }

  interface LoginProps {
    form: FormInstance<LoginFrom>;
    setActiveTab: (tab: string) => void;
    onLogin: (values: LoginFrom) => void;
    t: Global.Dictionary;
  }
  interface RegisterProps {
    form: FormInstance<RegisterFrom>;
    onRegister: (values: RegisterFrom) => void;
    sendVerificationCode: (email: string) => void;
    t: Global.Dictionary;
  }
  interface ResetPasswordProps {
    form: FormInstance<ResetPasswordFrom>;
    onResetPassword: (values: ResetPasswordFrom) => void;
    sendVerificationCode: (email: string) => void;
    setActiveTab: (tab: string) => void;
    t: Global.Dictionary;
  }
}
