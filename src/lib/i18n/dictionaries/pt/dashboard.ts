/* dashboard namespace (pt) — preenchido pela traducao por area. */
const dashboard = {
  page: {
    title: "Painel",
    subtitle:
      "Analises em tempo real de conversas, contatos, negocios, transmissoes e automacoes.",
  },
  metrics: {
    activeConversations: "Conversas ativas",
    newContactsToday: "Novos contatos hoje",
    openDealsValue: "Valor de negocios em aberto",
    messagesSentToday: "Mensagens enviadas hoje",
    openDeal: "{count} negocio em aberto",
    openDeals: "{count} negocios em aberto",
    newTodayVsYesterday: "novos hoje em relacao a ontem",
    vsYesterday: "em relacao a ontem",
    noChange: "Sem alteracao {suffix}",
    delta: "{sign}{value} {suffix}",
  },
  quickActions: {
    newContact: "Novo contato",
    newDeal: "Novo negocio",
    newBroadcast: "Nova transmissao",
    newAutomation: "Nova automacao",
  },
  conversationsChart: {
    title: "Conversas ao longo do tempo",
    subtitle: "Volume diario de mensagens por direcao",
    rangeDays: "{days} dias",
    ariaLabel: "Conversas por dia",
    emptyTitle: "Sem atividade de mensagens neste periodo",
    emptyHint: "Envie ou receba mensagens para comecar a preencher este grafico.",
    incoming: "Recebidas",
    outgoing: "Enviadas",
    tooltipIncoming: "{count} recebidas",
    tooltipOutgoing: "{count} enviadas",
  },
  pipeline: {
    title: "Valor do funil",
    subtitle: "Negocios em aberto por etapa",
    ariaLabel: "Valor do funil por etapa",
    emptyTitle: "Nenhum negocio em aberto ainda",
    emptyHint: "Crie negocios em Funis para ver a divisao por etapa aqui.",
    total: "Total",
    deal: "{count} negocio",
    deals: "{count} negocios",
  },
  responseTime: {
    title: "Tempo medio de primeira resposta",
    subtitle:
      "Minutos para responder a primeira mensagem nao respondida de um cliente, por dia da semana",
    category: "Media de minutos",
    target: "meta {minutes}m",
    thisWeek: "Esta semana:",
    lastWeek: "Semana passada:",
    emptyTitle: "Nenhuma resposta registrada ainda",
    emptyHint: "Este grafico e preenchido conforme voce responde as mensagens dos clientes.",
  },
  activity: {
    title: "Atividade recente",
    viewAll: "Ver tudo →",
    emptyTitle: "Nenhuma atividade ainda",
    emptyHint:
      "A atividade de mensagens, negocios, transmissoes e automacoes aparecera aqui.",
    showing: "Exibindo {visible} de {total}",
    showingPlus: "Exibindo {visible} de {total}+",
    show: "Exibir",
    secondsAgo: "ha {count}s",
    minutesAgo: "ha {count}min",
    hoursAgo: "ha {count}h",
    daysAgo: "ha {count}d",
  },
  emptyState: {
    defaultTitle: "Dados insuficientes ainda",
  },
} as const;

export default dashboard;
