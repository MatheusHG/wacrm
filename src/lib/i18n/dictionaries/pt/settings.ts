/* settings namespace (pt) — preenchido pela traducao por area. */
const settings = {
  page: {
    title: "Configurações",
    description:
      "Gerencie seu perfil, integração com WhatsApp®, modelos de mensagem e etiquetas.",
    tabs: {
      profile: "Perfil",
      whatsapp: "Configuração do WhatsApp",
      templates: "Modelos",
      tags: "Etiquetas",
      customFields: "Campos personalizados",
      deals: "Negócios",
      appearance: "Aparência",
      members: "Membros",
    },
  },

  appearance: {
    mode: {
      title: "Modo",
      description:
        "Escolha claro ou escuro. O claro é mais confortável em ambientes iluminados; o escuro é o visual original. Funciona com qualquer cor de destaque abaixo. Salvo neste dispositivo.",
      groupLabel: "Modo de cor",
      useMode: "Usar modo {mode}",
      light: "Claro",
      dark: "Escuro",
    },
    accent: {
      title: "Cor de destaque",
      description:
        "Escolha a cor de destaque usada em todo o aplicativo — botões, navegação ativa e selos. Salvo neste dispositivo.",
      useTheme: "Usar tema {name}",
      themeId: "ID do tema: {id}",
    },
  },

  customFields: {
    title: "Campos personalizados",
    description:
      "Defina campos de contato extras (ex.: CEP, origem do lead). Eles aparecem em todos os contatos e na ação de automação “Atualizar campo do contato”.",
  },

  deals: {
    title: "Moeda padrão",
    description:
      "Novos negócios usam esta moeda por padrão, e os totais do funil e do painel são exibidos nela. Negócios existentes mantêm a moeda com que foram salvos.",
    currencyLabel: "Moeda",
    adminOnly: "Apenas administradores da conta podem alterar a moeda padrão.",
    saveError: "Falha ao salvar a moeda padrão",
    saveSuccess: "Moeda padrão atualizada",
  },

  invite: {
    expiry: {
      oneDay: "1 dia",
      sevenDays: "7 dias",
      thirtyDays: "30 dias",
    },
    roleDescriptions: {
      admin:
        "Pode convidar colegas, gerenciar configurações, enviar mensagens e editar dados.",
      agent:
        "Pode usar a caixa de entrada, contatos, transmissões, automações e fluxos. Sem acesso a configurações ou membros.",
      viewer:
        "Acesso somente leitura em todas as páginas. Não pode enviar nem editar nada.",
    },
    labelTooLong: "O rótulo deve ter no máximo {max} caracteres",
    createError: "Falha ao criar convite",
    networkError: "Não foi possível contatar o servidor. Tentar de novo?",
    linkCopied: "Link de convite copiado",
    clipboardBlocked:
      "Área de transferência bloqueada — copie o link manualmente",
    shareMessage:
      "Junte-se a {accountName} no wacrm usando este link (válido por {days} dias): {url}",
    fallbackAccountName: "nossa conta wacrm",
    created: {
      title: "Convite criado",
      descriptionPrefix:
        "Compartilhe este link com seu novo colega. Ele poderá se cadastrar (ou entrar) e ingressar na conta como ",
      validForPrefix: ". O link é válido por ",
      daySuffix: ".",
      day: "{count} dia",
      days: "{count} dias",
      linkLabel: "Link de convite",
      copy: "Copiar",
      saveWarningTitle: "Salve este link agora.",
      saveWarningBody:
        "Nunca armazenamos o texto puro — ao fechar esta janela, a URL desaparece. Para compartilhar de novo, revogue este convite e crie um novo.",
      sendViaWhatsApp: "Enviar pelo WhatsApp",
      done: "Concluído",
    },
    form: {
      title: "Convidar um colega",
      description:
        "Gere um link de convite de uso único. Compartilhe pelo WhatsApp, Slack ou qualquer canal que preferir — sem precisar de serviço de e-mail.",
      roleLabel: "Função",
      roleAdmin: "Administrador",
      roleAgent: "Agente",
      roleViewer: "Visualizador",
      validForLabel: "Link válido por",
      labelLabel: "Rótulo",
      labelPlaceholder: "ex.: Sara — equipe de suporte",
      labelHelp:
        "Ajuda você a lembrar para quem enviou o link na lista de pendentes abaixo.",
      generate: "Gerar link",
      creating: "Criando...",
    },
  },

  members: {
    roles: {
      owner: "Proprietário",
      admin: "Administrador",
      agent: "Agente",
      viewer: "Visualizador",
    },
    editableRoles: {
      adminHint: "Gerenciar membros + tudo",
      agentHint: "Usar recursos; sem configurações",
      viewerHint: "Somente leitura em todo o app",
    },
    expired: "expirado",
    expiresInDay: "expira em {count} dia",
    expiresInDays: "expira em {count} dias",
    expiresInHour: "expira em {count} hora",
    expiresInHours: "expira em {count} horas",
    loadMembersError: "Falha ao carregar membros",
    loadInvitationsError: "Falha ao carregar convites",
    networkError: "Não foi possível contatar o servidor",
    updateRoleError: "Falha ao atualizar a função",
    roleUpdated: "{name} atualizado para {role}",
    removeMemberError: "Falha ao remover membro",
    memberRemoved: "{name} removido",
    revokeError: "Falha ao revogar convite",
    invitationRevoked: "Convite revogado",
    title: "Membros da conta",
    description:
      "Pessoas com acesso a esta conta. As funções controlam o que cada colega pode fazer.",
    inviteMember: "Convidar membro",
    you: "Você",
    unnamed: "Sem nome",
    fallbackMember: "membro",
    joined: "Entrou em {date}",
    pendingTitle: "Convites pendentes",
    pendingNote:
      "Por segurança, a URL do convite em texto puro é exibida apenas uma vez, na criação — para compartilhar de novo, revogue o convite abaixo e crie um novo.",
    noPending: "Nenhum convite pendente.",
    noPendingHintPrefix: "Clique em ",
    noPendingHintSuffix: " acima para gerar um link compartilhável.",
    untitledInvite: "Convite sem título",
    createdOn: "Criado em {date} · {expires}",
    revoke: "Revogar",
    removeDialog: {
      title: "Remover membro",
      bodyPrefix: "Remover ",
      bodySuffix:
        " da conta? A pessoa será desconectada desta conta e receberá uma nova conta pessoal no próximo login. O login dela não é excluído.",
      fallbackTeammate: "este colega",
      confirm: "Remover membro",
      removing: "Removendo...",
    },
  },

  password: {
    title: "Senha",
    description:
      "Use pelo menos {min} caracteres. Você continuará conectado neste dispositivo após alterá-la.",
    noEmailError: "Não é possível alterar a senha sem um e-mail atual",
    tooShort: "A senha deve ter pelo menos {min} caracteres",
    mismatch: "A nova senha e a confirmação não coincidem",
    currentIncorrect: "A senha atual está incorreta",
    updateFailed: "Falha ao atualizar a senha: {message}",
    unknownError: "Erro desconhecido",
    updated: "Senha atualizada",
    currentLabel: "Senha atual",
    newLabel: "Nova senha",
    confirmLabel: "Confirmar nova senha",
    submit: "Atualizar senha",
    updating: "Atualizando…",
  },

  profile: {
    title: "Perfil",
    description:
      "Como você aparece no aplicativo. Seu avatar e nome aparecem no cabeçalho, na barra lateral e em qualquer lugar onde seus colegas o veem.",
    unsupportedImageType: "Tipo de imagem não suportado",
    unsupportedImageTypeDesc: "Use PNG, JPG, WebP ou GIF.",
    imageTooLarge: "A imagem é muito grande",
    imageTooLargeDesc: "Máximo de 2 MB.",
    nameRequired: "O nome de exibição é obrigatório",
    invalidEmail: "Informe um endereço de e-mail válido",
    uploadFailed: "Falha no upload: {message}",
    saveFailed: "Falha ao salvar: {message}",
    profileSaved: "Perfil salvo",
    emailChangeFailed: "Falha ao alterar o e-mail: {message}",
    savedWithEmailConfirm:
      "Perfil salvo — verifique seu e-mail para confirmar a alteração do endereço",
    unknownError: "Erro desconhecido",
    avatarAlt: "Avatar",
    changePhoto: "Alterar foto",
    uploadPhoto: "Enviar foto",
    imageHelp: "PNG, JPG, WebP ou GIF. Até 2 MB.",
    displayNameLabel: "Nome de exibição",
    displayNamePlaceholder: "Ada Lovelace",
    emailLabel: "E-mail",
    emailPendingPrefix: "Verifique a caixa de entrada de ",
    emailPendingAnd: " e ",
    emailPendingSuffix:
      " — ambos precisam confirmar antes que a alteração tenha efeito.",
    accountDetails: "Detalhes da conta",
    roleLabel: "Função",
    roleFallback: "usuário",
    joinedLabel: "Entrou em",
    userIdLabel: "ID do usuário",
    loadingProfile: "Carregando seu perfil…",
    saveChanges: "Salvar alterações",
    saving: "Salvando…",
  },

  sessions: {
    title: "Sessões ativas",
    description:
      "Saia de todos os dispositivos onde você está conectado — inclusive este. Útil se você perdeu um notebook ou compartilhou sua senha.",
    signOutAll: "Sair de todos os dispositivos",
    dialogTitle: "Sair de todos os lugares?",
    dialogDescription:
      "Todos os dispositivos conectados a esta conta serão desconectados e precisarão entrar novamente. Você será redirecionado para a página de login.",
    signOutFailed: "Falha ao sair: {message}",
    unknownError: "Erro desconhecido",
    signOutEverywhere: "Sair de todos os lugares",
    signingOut: "Saindo…",
  },

  tags: {
    colors: {
      red: "Vermelho",
      orange: "Laranja",
      amber: "Âmbar",
      emerald: "Esmeralda",
      cyan: "Ciano",
      blue: "Azul",
      violet: "Violeta",
      pink: "Rosa",
    },
    loadError: "Falha ao carregar etiquetas",
    nameRequired: "O nome da etiqueta é obrigatório",
    notAuthenticated: "Não autenticado",
    created: "Etiqueta criada com sucesso",
    createError: "Falha ao criar etiqueta",
    deleted: "Etiqueta excluída",
    deleteError: "Falha ao excluir etiqueta",
    title: "Etiquetas",
    subtitle: "Organize seus contatos com etiquetas coloridas.",
    newTag: "Nova etiqueta",
    empty: "Nenhuma etiqueta ainda.",
    emptyHint: "Crie etiquetas para categorizar seus contatos.",
    dialog: {
      title: "Nova etiqueta",
      description: "Crie uma nova etiqueta com nome e cor.",
      nameLabel: "Nome da etiqueta",
      namePlaceholder: "ex.: Cliente VIP",
      colorLabel: "Cor",
      previewLabel: "Prévia",
      previewFallback: "Nome da etiqueta",
      create: "Criar etiqueta",
      creating: "Criando...",
    },
    deleteDialog: {
      title: "Excluir etiqueta",
      description:
        'Tem certeza de que deseja excluir a etiqueta "{name}"? Isso a removerá de todos os contatos. Esta ação não pode ser desfeita.',
      confirm: "Excluir etiqueta",
      deleting: "Excluindo...",
    },
  },

  templates: {
    categories: {
      marketing: "Marketing",
      utility: "Utilidade",
      authentication: "Autenticação",
    },
    headerFormats: {
      none: "Nenhum",
      text: "Texto",
      image: "Imagem",
      video: "Vídeo",
      document: "Documento",
    },
    buttonTypes: {
      quickReply: "Resposta rápida",
      url: "URL",
      phone: "Telefone",
      copyCode: "Copiar código",
    },
    status: {
      DRAFT: "Rascunho",
      PENDING: "Pendente",
      APPROVED: "Aprovado",
      REJECTED: "Rejeitado",
      PAUSED: "Pausado",
      DISABLED: "Desativado",
      IN_APPEAL: "Em recurso",
      PENDING_DELETION: "Exclusão pendente",
    },
    loadError: "Falha ao carregar modelos",
    submitFailed: "{action} falhou (HTTP {status})",
    actionEdit: "Edição",
    actionSubmit: "Envio",
    updatedDryRun: "Modelo atualizado (simulação — sem chamada à Meta)",
    savedDryRun: "Modelo salvo (simulação — sem chamada à Meta)",
    editSubmitted:
      "Edição enviada — a Meta normalmente analisa em até 24 horas.",
    submittedToMeta:
      "Enviado à Meta — o tempo típico de análise é 24 horas. O status é atualizado automaticamente.",
    submitGenericError: "Falha ao enviar",
    syncFailed: "Falha na sincronização (HTTP {status})",
    synced: "{count} modelo sincronizado da Meta",
    syncedPlural: "{count} modelos sincronizados da Meta",
    syncedCounts: " ({inserted} novos, {updated} atualizados)",
    syncFailedItems: "Falha ao sincronizar: {items}",
    syncMore: ", +{count} mais",
    syncTruncated:
      "Sincronizamos apenas os primeiros 2000 modelos — sua conta tem mais. Sincronize novamente para continuar ou contate o suporte se isso persistir.",
    syncGenericError: "Falha ao sincronizar modelos",
    deleted: "Modelo excluído",
    deleteFailed: "Falha ao excluir (HTTP {status})",
    deleteGenericError: "Falha ao excluir modelo",
    title: "Modelos de mensagem",
    description:
      'Crie modelos de mensagem e envie-os à Meta para aprovação. Use "Sincronizar da Meta" para puxar modelos aprovados em outros lugares.',
    syncFromMetaTitle:
      "Puxar modelos aprovados da sua Conta do WhatsApp Business na Meta",
    syncFromMeta: "Sincronizar da Meta",
    syncing: "Sincronizando…",
    newTemplate: "Novo modelo",
    empty: "Nenhum modelo ainda.",
    emptyHint: "Crie seu primeiro modelo de mensagem para começar.",
    qualityScoreTitle: "Pontuação de qualidade da Meta",
    editTitle:
      "Editar dispara nova análise da Meta — o status volta para PENDENTE.",
    editAria: "Editar modelo",
    resubmitTitle: "Edite o modelo e reenvie à Meta para análise.",
    resubmitAria: "Editar e reenviar modelo",
    resubmit: "Reenviar",
    deleteFromMetaAria: "Excluir modelo da Meta e localmente",
    deleteLocallyAria: "Excluir modelo localmente",
    deleteFromMetaTitle: "Excluir da Meta e localmente",
    deleteLocallyTitle: "Excluir localmente",
    dialog: {
      editTitle: "Editar modelo de mensagem",
      newTitle: "Novo modelo de mensagem",
      editDescription:
        "Salve suas alterações para reenviar à Meta. O status voltará para PENDENTE durante a análise.",
      newDescription:
        "Monte um modelo e envie-o à Meta para aprovação. Após aprovado, você pode usá-lo em transmissões e na caixa de entrada.",
      authWarningPrefix:
        "Modelos de AUTENTICAÇÃO têm um formato fixo de corpo + botão OTP que exige um construtor diferente. Crie-os no Meta WhatsApp Manager por enquanto e use ",
      authWarningBold: "Sincronizar da Meta",
      authWarningSuffix: " para trazê-los.",
      nameLabel: "Nome do modelo",
      namePlaceholder: "ex.: order_confirmation",
      nameHelpEdit:
        "O nome é fixo depois que o modelo existe na Meta — crie um novo modelo para alterá-lo.",
      nameHelpNew: "Apenas letras minúsculas, dígitos e sublinhados.",
      categoryLabel: "Categoria",
      languageLabel: "Idioma",
      languagePlaceholder: "en_US",
      languageHelpEdit: "O idioma é fixo depois que o modelo existe na Meta.",
      languageHelpNewPrefix: "Deve corresponder ao código exato na Meta — ",
      languageHelpNewMid: " e ",
      languageHelpNewSuffix: " são distintos.",
      headerLabel: "Cabeçalho",
      headerTextAria: "Texto do cabeçalho",
      headerTextPlaceholder:
        "Texto do cabeçalho (máx. 60 caracteres, {{1}} opcional)",
      headerSampleAria: "Valor de exemplo para a variável do cabeçalho",
      headerSamplePlaceholder:
        "Valor de exemplo para {{1}} (obrigatório para análise da Meta)",
      headerMediaPlaceholder: "https://… (link público para um {format} de exemplo)",
      headerMediaHelp:
        "Deve ser HTTPS acessível publicamente. A Meta o busca uma vez durante a análise, então o arquivo precisa ficar disponível por ~24 h.",
      headerMediaImageHint: " Recomendado: JPEG ou PNG, ≥800×418 px, ≤5 MB.",
      headerMediaVideoHint: " Recomendado: MP4 / 3GPP, ≤16 MB, ≤60 segundos.",
      headerMediaDocumentHint: " Recomendado: PDF, ≤100 MB.",
      headerMediaUploadSoon:
        " O upload direto de arquivos chega em uma próxima atualização.",
      bodyLabel: "Texto do corpo",
      bodyPlaceholder: "Olá {{1}}, seu pedido {{2}} está confirmado.",
      bodyHelpPrefix: "Use ",
      bodyHelpSuffix:
        " para variáveis (devem ser contíguas começando em {first}).",
      bodySamplesLabel:
        "Valores de exemplo (a Meta os usa para analisar seu modelo)",
      bodySampleAria: "Valor de exemplo para a variável do corpo {{{index}}}",
      bodySamplePlaceholder: "Exemplo para {{{index}}}",
      footerLabel: "Rodapé (opcional)",
      footerPlaceholder: "Texto de rodapé opcional (máx. 60 caracteres)",
      buttonsLabel: "Botões (opcional)",
      addButton: "Adicionar botão",
      buttonsHelp:
        "Até {max} botões. Botões QUICK_REPLY devem vir antes dos botões de URL / telefone / copiar código.",
      buttonLabelPlaceholder: "Rótulo do botão",
      urlPlaceholder: "https://exemplo.com/caminho ou com sufixo {{1}}",
      urlExamplePlaceholder:
        "Valor de exemplo para {{1}} (obrigatório quando a URL tem variável)",
      phonePlaceholder: "+15551234567",
      copyCodePlaceholder: "Código de exemplo (ex.: SUMMER20)",
      saving: "Salvando…",
      submitting: "Enviando…",
      saveResubmit: "Salvar e reenviar",
      submitForApproval: "Enviar para aprovação",
    },
    deleteDialog: {
      title: "Excluir modelo?",
      descriptionMeta:
        '"{name}" será excluído da Meta e do wacrm. Transmissões ativas que usam este modelo começarão a falhar no próximo envio. Isso não pode ser desfeito.',
      descriptionLocal:
        '"{name}" será excluído do wacrm. Ele nunca foi enviado à Meta, então não é necessária limpeza remota.',
      deleting: "Excluindo…",
    },
  },

  whatsapp: {
    loadError: "Falha ao carregar a configuração do WhatsApp",
    phoneRequired: "O ID do número de telefone é obrigatório",
    tokenRequired: "O token de acesso é obrigatório na configuração inicial",
    saveError: "Falha ao salvar a configuração",
    reenterToken: "Insira novamente o token de acesso para salvar as alterações",
    registerFailed:
      "Salvo, mas a Meta não conseguiu registrar o número: {error}",
    registrationSkipped:
      "Credenciais salvas e verificadas. O registro de entrada foi ignorado (sem PIN) — veja o status de registro abaixo.",
    liveWithName: "Ativo — {name} já pode receber eventos.",
    connected:
      "WhatsApp conectado. Os eventos começarão a chegar em até um minuto.",
    connectedTo: "Conectado a {name}",
    apiSuccess: "Conexão com a API bem-sucedida",
    apiFailed: "Falha na conexão com a API",
    connectionTestFailed:
      "Falha no teste de conexão. Verifique a rede e tente de novo.",
    fullyWired: "Número totalmente conectado — a Meta está entregando eventos.",
    notFullyRegistered:
      "O número não está totalmente registrado. Veja as verificações abaixo para saber qual etapa falhou.",
    verifyEndpointError: "Não foi possível acessar o endpoint de verificação.",
    resetConfirm:
      "Isto excluirá a configuração atual do WhatsApp para que você possa inseri-la novamente. Continuar?",
    resetError: "Falha ao redefinir a configuração",
    resetSuccess:
      "Configuração limpa. Agora você pode inserir suas credenciais novamente.",
    webhookCopied: "URL do webhook copiada para a área de transferência",
    resetBannerTitle: "O token armazenado não pode ser descriptografado",
    resetConfiguration: "Redefinir configuração",
    resetting: "Redefinindo...",
    credentialsValid: "Credenciais válidas",
    notConnected: "Não conectado",
    credentialsValidDesc:
      "Seu token de acesso autentica com a Meta. Veja o status de registro abaixo para saber se os webhooks estão realmente conectados.",
    notConnectedDesc:
      "Configure suas credenciais da API da Meta abaixo para conectar sua conta do WhatsApp Business.",
    registeredTitle: "Registrado — a Meta entregará eventos ao wacrm",
    notRegisteredTitle: "Não registrado — a Meta não entregará eventos",
    verifyWithMeta: "Verificar com a Meta",
    registeredDescPrefix: "Inscrito desde ",
    registeredDescSuffix: ". Clique em ",
    registeredDescBold: "Verificar com a Meta",
    registeredDescTail: " se os eventos pararem de chegar.",
    unknownTime: "desconhecido",
    lastAttemptFailedPrefix: "A última tentativa falhou com: ",
    lastAttemptFailedSuffix:
      ". Insira (ou corrija) o PIN de duas etapas abaixo e clique em Salvar configuração para tentar de novo.",
    savedBeforeTracking:
      "Este número foi salvo antes de existir o rastreamento de registro, ou o registro foi ignorado. Insira o PIN de duas etapas abaixo e clique em Salvar configuração para inscrevê-lo.",
    diagnosticPrefix: "Diagnóstico — última execução: ",
    diagnosticLive: "ativo",
    diagnosticNotLive: "não ativo",
    apiCredentials: "Credenciais da API",
    apiCredentialsDesc:
      "Insira suas credenciais da API do WhatsApp Business da Meta.",
    phoneNumberId: "ID do número de telefone",
    phoneNumberIdPlaceholder: "ex.: 100234567890123",
    wabaId: "ID da Conta do WhatsApp Business",
    wabaIdPlaceholder: "ex.: 100234567890456",
    accessToken: "Token de acesso permanente",
    accessTokenPlaceholder: "Insira seu token de acesso",
    tokenHidden:
      "O token está oculto por segurança. Insira-o novamente para atualizar a configuração.",
    verifyToken: "Token de verificação do webhook",
    verifyTokenPlaceholder: "Crie um token de verificação personalizado",
    verifyTokenHelp:
      "Uma string personalizada que você cria. Deve corresponder ao token definido nas configurações de webhook da Meta.",
    pinLabel: "PIN de verificação em duas etapas",
    pinPlaceholder: "PIN de 6 dígitos do Meta WhatsApp Manager",
    pinHelpInbound: "entrada",
    pinHelpProduction: "produção",
    pinHelpPrefix: "Necessário apenas para conectar mensagens de ",
    pinHelpMid1: " para um número de ",
    pinHelpMid2: ". Defina-o em ",
    pinHelpMetaPath:
      "Meta Business Manager → Contas do WhatsApp → Números de telefone → Verificação em duas etapas",
    pinHelpMid3:
      ", depois cole-o aqui para que o wacrm possa inscrever o número — caso contrário, a Meta encaminha os eventos de entrada ao app que reivindicou o número por último (o sintoma que afeta números secundários sob uma WABA compartilhada). ",
    pinHelpTestNumbers: "Números de teste da Meta",
    pinHelpTail:
      " não têm PIN e já vêm registrados — deixe este campo em branco para eles. Deixá-lo em branco também mantém um registro existente intacto.",
    webhookConfig: "Configuração do webhook",
    webhookConfigDesc:
      "Use esta URL como callback do seu webhook no Meta App Dashboard.",
    webhookCallbackUrl: "URL de callback do webhook",
    saveConfiguration: "Salvar configuração",
    saving: "Salvando...",
    testConnection: "Testar conexão com a API",
    testing: "Testando...",
    setupInstructions: "Instruções de configuração",
    setupInstructionsDesc:
      "Siga estas etapas para conectar sua API do WhatsApp Business.",
    step1Title: "Criar um app na Meta",
    step1Item1Prefix: "Acesse ",
    step1Item2: 'Clique em "Meus Apps" e depois em "Criar App"',
    step1Item3: 'Selecione "Empresa" como o tipo de app',
    step1Item4: "Preencha os detalhes do app e crie",
    step2Title: "Adicionar o produto WhatsApp",
    step2Item1: 'No painel do seu app, clique em "Adicionar Produto"',
    step2Item2: 'Encontre "WhatsApp" e clique em "Configurar"',
    step2Item3: "Siga o assistente de configuração para vincular sua empresa",
    step3Title: "Obter credenciais da API",
    step3Item1: "Acesse WhatsApp > Configuração da API",
    step3Item2Prefix: "Copie seu ",
    step3Item3Prefix: "Copie seu ",
    step3Item4Prefix: "Gere um ",
    step3Item4Suffix:
      " em Configurações do Negócio > Usuários do Sistema",
    step4Title: "Configurar webhooks",
    step4Item1: "Acesse WhatsApp > Configuração",
    step4Item2: 'Clique em "Editar" na seção Webhook',
    step4Item3Prefix: "Cole a ",
    step4Item3Suffix: " de cima",
    step4Item4Prefix: "Insira o mesmo ",
    step4Item4Suffix: " que você definiu aqui",
    step4Item5: 'Inscreva-se no campo de webhook "messages"',
    apiDocs: "Documentação da API do WhatsApp da Meta",
  },
} as const;

export default settings;
