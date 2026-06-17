/* join namespace (pt) — preenchido pela traducao por area. */
const join = {
  roles: {
    admin: "Administrador",
    agent: "Atendente",
    viewer: "Visualizador",
  },
  fail: {
    notFound: {
      title: "Convite não encontrado",
      body: "Este link não corresponde a um convite válido. Verifique a URL ou peça à pessoa que convidou você para enviar um novo.",
    },
    used: {
      title: "Convite já utilizado",
      body: "Este convite já foi aceito. Se não foi você, peça ao administrador da conta para enviar um novo link.",
    },
    expired: {
      title: "Convite expirado",
      body: "Este convite expirou. Peça ao administrador da conta para enviar um novo — leva apenas alguns segundos para gerar.",
    },
    serverError: {
      title: "Algo deu errado",
      body: "Não foi possível verificar este convite agora. Tente atualizar a página em instantes.",
    },
  },
  loading: "Verificando convite…",
  failActions: {
    tryAgain: "Tentar novamente",
    createAccountInstead: "Criar uma nova conta",
    signIn: "Entrar",
  },
  invite: {
    titlePrefix: "Você foi convidado para",
    joinAsPrefix: "Você entrará como",
    validUntil: "Link válido até {date}.",
  },
  accept: {
    accepting: "Aceitando…",
    button: "Aceitar convite",
    note: "Aceitar move o seu login para {accountName}. Sua conta pessoal vazia criada no cadastro será removida.",
    success: "Bem-vindo à equipe",
    failed: "Falha ao aceitar o convite",
    unreachable: "Não foi possível conectar ao servidor",
  },
  conflict: {
    defaultMessage:
      "Você já está em outra conta. Entre com um e-mail diferente para participar desta.",
    title: "Não é possível entrar em {accountName} com esta conta",
    body: "Para entrar em {accountName}, saia e cadastre-se novamente com um endereço de e-mail diferente. O link do convite permanece válido enquanto não expirar.",
    staySignedIn: "Continuar conectado",
    signingOut: "Saindo…",
    signOutAndUseDifferentEmail: "Sair e usar outro e-mail",
    signOutError: "Não foi possível sair. Tente atualizar a página.",
  },
  cta: {
    createAccountAndJoin: "Criar conta e entrar",
    alreadyHaveAccount: "Já tenho uma conta",
  },
} as const;

export default join;
