/* auth namespace (pt) — preenchido pela traducao por area. */
const auth = {
  login: {
    titleInvite: "Entre para aceitar",
    titleDefault: "Bem-vindo de volta",
    descriptionInvite: "Entre e levaremos você até o convite.",
    descriptionDefault: "Entre na sua conta",
    emailLabel: "E-mail",
    emailPlaceholder: "voce@exemplo.com",
    passwordLabel: "Senha",
    passwordPlaceholder: "Digite sua senha",
    forgotPassword: "Esqueceu a senha?",
    submit: "Entrar",
    submitting: "Entrando...",
    noAccount: "Não tem uma conta?",
    createAccount: "Criar conta",
  },
  signup: {
    successTitle: "Verifique seu e-mail",
    successDescription:
      "Enviamos um link de confirmação para {email}. Verifique sua caixa de entrada e clique no link para confirmar sua conta.",
    backToSignIn: "Voltar para o login",
    titleInvite: "Criar conta e entrar",
    titleDefault: "Criar conta",
    descriptionInvite:
      "Confirme seu e-mail e, em seguida, aceite o convite para entrar na sua equipe.",
    descriptionDefault: "Comece a usar o CRM Template para WhatsApp",
    fullNameLabel: "Nome completo",
    fullNamePlaceholder: "João Silva",
    emailLabel: "E-mail",
    emailPlaceholder: "voce@exemplo.com",
    passwordLabel: "Senha",
    passwordPlaceholder: "No mínimo 6 caracteres",
    confirmPasswordLabel: "Confirmar senha",
    confirmPasswordPlaceholder: "Repita sua senha",
    submit: "Criar conta",
    submitting: "Criando conta...",
    haveAccount: "Já tem uma conta?",
    signIn: "Entrar",
    passwordMismatch: "As senhas não coincidem",
    passwordTooShort: "A senha deve ter no mínimo 6 caracteres",
  },
  forgotPassword: {
    successTitle: "Verifique seu e-mail",
    successDescription:
      "Enviamos um link de redefinição de senha para {email}. Verifique sua caixa de entrada.",
    backToSignIn: "Voltar para o login",
    title: "Redefinir senha",
    description: "Informe seu e-mail e enviaremos um link de redefinição",
    emailLabel: "E-mail",
    emailPlaceholder: "voce@exemplo.com",
    submit: "Enviar link de redefinição",
    submitting: "Enviando...",
  },
} as const;

export default auth;
