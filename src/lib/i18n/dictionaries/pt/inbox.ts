/* inbox namespace (pt) — preenchido pela traducao por area. */
const inbox = {
  page: {
    whatsappNotConnected:
      "O WhatsApp® não está conectado. Acesse Configurações para conectar sua conta.",
  },
  contactSidebar: {
    selectConversation: "Selecione uma conversa",
    tags: "Etiquetas",
    noTags: "Nenhuma etiqueta",
    activeDeals: "Negócios ativos",
    noDeals: "Nenhum negócio",
    notes: "Notas",
    addNotePlaceholder: "Adicionar uma nota...",
  },
  conversationList: {
    searchPlaceholder: "Buscar conversas...",
    filters: {
      all: "Todas",
      unread: "Não lidas",
      open: "Abertas",
      pending: "Pendentes",
      closed: "Fechadas",
    },
    noConversations: "Nenhuma conversa encontrada",
    unknown: "Desconhecido",
    noMessagesYet: "Nenhuma mensagem ainda",
  },
  messageActions: {
    react: "Reagir",
    reactWith: "Reagir com {emoji}",
    reply: "Responder",
    copy: "Copiar",
    nothingToCopy: "Nada para copiar",
    copied: "Copiado",
    copyFailed: "Falha ao copiar",
  },
  messageBubble: {
    mediaUnavailable: "{label} indisponível",
    sharedImage: "Imagem compartilhada",
    image: "Imagem",
    video: "Vídeo",
    audio: "Áudio",
    document: "Documento",
    template: "Modelo",
    locationShared: "Localização compartilhada",
    buttonReply: "Resposta de botão",
    interactiveReply: "[Resposta interativa]",
    unsupportedMessageType: "[Tipo de mensagem não suportado]",
  },
  composer: {
    sessionExpired:
      "Sessão de 24 horas expirada. Use um modelo para reengajar.",
    templates: "Modelos",
    sendTemplate: "Enviar modelo",
    sendMessagesGate: "enviar mensagens",
    readOnlyPlaceholder:
      "Somente leitura — visualizadores podem navegar, mas não responder",
    sessionExpiredPlaceholder: "Sessão expirada - use um modelo",
    typeMessagePlaceholder:
      "Digite uma mensagem... (Shift+Enter para nova linha)",
    readOnlyTitle:
      "Somente leitura — sua função não pode enviar mensagens",
    quickRepliesHint: "Digite '/' para respostas rápidas",
  },
  thread: {
    today: "Hoje",
    yesterday: "Ontem",
    status: {
      open: "Aberta",
      pending: "Pendente",
      closed: "Fechada",
      label: "Status",
    },
    session: {
      noCustomerMessages: "Nenhuma mensagem do cliente",
      expired: "Expirada",
      hoursRemaining: "{hours}h restantes",
      minutesRemaining: "{minutes}min restantes",
    },
    failedToSend: "Falha ao enviar: {reason}",
    failedToSendTemplate: "Falha ao enviar modelo: {reason}",
    networkError: "erro de rede",
    waitForMessageToSend: "Aguarde a mensagem terminar de enviar",
    reactionFailed: "Falha na reação: {reason}",
    failedToUpdateAssignment: "Falha ao atualizar a atribuição",
    emptyTitle: "Selecione uma conversa",
    emptySubtitle:
      "Escolha uma conversa à esquerda para começar a conversar",
    customer: "Cliente",
    you: "Você",
    assigned: "Atribuída",
    assign: "Atribuir",
    backToConversations: "Voltar às conversas",
    refreshConversation: "Atualizar conversa",
    refresh: "Atualizar",
    noTeammatesAvailable: "Nenhum colega de equipe disponível",
    me: " (eu)",
    unassign: "Remover atribuição",
    noMessagesYet: "Nenhuma mensagem ainda",
    sendTemplateToStart: "Envie um modelo para iniciar a conversa",
  },
  replyQuote: {
    cancelReply: "Cancelar resposta",
    image: "[Imagem]",
    video: "[Vídeo]",
    audio: "[Áudio]",
    document: "[Documento]",
    location: "[Localização]",
    template: "[Modelo]",
    message: "[Mensagem]",
  },
  templatePicker: {
    sendTemplate: "Enviar modelo",
    descriptionSelected:
      "Preencha os campos para renderizar este modelo. A Meta exige que todas as variáveis sejam definidas.",
    descriptionList:
      "Escolha um modelo aprovado do WhatsApp para enviar a este contato.",
    noApprovedTemplates: "Nenhum modelo aprovado",
    noApprovedTemplatesHint:
      "Aprove um modelo no Meta WhatsApp Manager e sincronize-o em Configurações → Modelos.",
    preview: "Pré-visualização",
    headerLabel: "Cabeçalho {{1}}",
    headerPlaceholder: "Valor para a variável do cabeçalho",
    bodyLabel: "Corpo {{{index}}}",
    bodyPlaceholder: "Valor para {{{index}}}",
    urlButtonLabel: 'Botão de URL "{text}" — valor para {{1}}',
    urlSuffixPlaceholder: "Valor do sufixo da URL",
    finalUrl: "URL final: {url}",
  },
} as const;

export default inbox;
