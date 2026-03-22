const $ = (id) => document.getElementById(id);

const i18n = {
  pt: {
    htmlLang: "pt-BR",
    locale: "pt-BR",
    nextLabel: "EN",
    ui: {
      brandSub: "Gateway de portfólio",
      navDashboard: "Dashboard",
      navPayments: "Pagamentos",
      navPaymentDetails: "Detalhes de pagamento",
      navMerchants: "Lojistas e clientes",
      navSettings: "Configurações",
      sidebarNote: "Projeto de portfólio",
      documentation: "Documentação",
      dashboardTitle: "Visão rápida do mês",
      dashboardSubtitle: "Acompanhe volume, qualidade de status e atividade recente.",
      newCharge: "Criar pagamento",
      newCustomer: "Novo cliente",
      summaryLabel: "Transações no mês",
      receivedLabel: "Volume total",
      receivedHint: "Somente pagamentos confirmados no mês atual.",
      pendingLabel: "Transações pendentes",
      pendingHint: "Aguardando autorização ou liquidação.",
      successLabel: "Taxa de sucesso",
      recentTransactions: "Transações recentes",
      recentCustomers: "Clientes recentes",
      refreshView: "Atualizar",
      paymentsTitle: "Pagamentos",
      paymentsSubtitle: "Crie cobranças, filtre transações e atualize status.",
      refreshCharges: "Atualizar cobranças",
      createPayment: "Criar pagamento",
      labelCustomerId: "ID do cliente",
      labelAmount: "Valor",
      labelCurrency: "Moeda",
      labelMethod: "Forma de pagamento",
      labelDescription: "Descrição",
      labelIdempotency: "Idempotency-Key (opcional)",
      createCharge: "Criar cobrança",
      transactionsTable: "Lista de transações",
      filterStatus: "Status",
      filterDate: "Data",
      filterMerchant: "Cliente / referência",
      clearFilters: "Limpar filtros",
      all: "Todos",
      statusPending: "Pendente",
      statusAuthorized: "Em análise",
      statusPaid: "Pago",
      statusRefused: "Recusado",
      statusRefunded: "Cancelado",
      paymentDetailsTitle: "Detalhes do pagamento",
      paymentDetailsSubtitle: "Inspecione metadados e histórico da cobrança selecionada.",
      timelineLogs: "Linha do tempo / logs",
      merchantsTitle: "Lojistas e clientes",
      merchantsSubtitle: "Gerencie credenciais da conta e registros de clientes.",
      refreshCustomers: "Atualizar clientes",
      createMerchant: "Criar conta da loja",
      labelMerchantName: "Nome da loja",
      labelMerchantDocument: "Documento",
      labelMerchantEmail: "E-mail",
      createAccount: "Criar conta",
      generateKey: "Gerar chave",
      revokeKey: "Revogar",
      customersTitle: "Clientes",
      labelCustomerName: "Nome",
      labelCustomerDocument: "Documento",
      labelCustomerEmail: "E-mail",
      saveCustomer: "Salvar cliente",
      settingsTitle: "Configurações",
      settingsSubtitle: "Configuração de conexão e integrações técnicas.",
      connectionTitle: "Conexão da loja",
      connectionSubtitle: "Esses valores são usados nas requisições da API.",
      labelApiUrl: "URL da API",
      labelAccountId: "ID da conta",
      labelApiKey: "Chave da API",
      saveConnection: "Salvar conexão",
      clearConnection: "Limpar",
      webhooksTitle: "Webhooks",
      webhooksSubtitle: "Opcional para integrações avançadas.",
      addWebhook: "Adicionar webhook",
      refreshWebhooks: "Atualizar webhooks",
      activityTitle: "Atividade"
    },
    placeholders: {
      phCustomerId: "cole o ID ou crie um cliente acima",
      phDescription: "Ex.: Serviço de manutenção",
      phIdempotency: "uuid-v4",
      phMerchantDocument: "CPF ou CNPJ",
      phMerchantFilter: "busque por id, descrição ou método",
      phMerchantId: "gerado ao criar conta",
      phRevokeKey: "chave para revogar",
      phWebhook: "https://seu-endpoint.com/webhook"
    },
    viewMeta: {
      dashboard: { eyebrow: "Visão geral", title: "Dashboard" },
      payments: { eyebrow: "Fluxo", title: "Pagamentos" },
      "payment-details": { eyebrow: "Auditoria", title: "Detalhes de pagamento" },
      merchants: { eyebrow: "Cadastro", title: "Lojistas e clientes" },
      settings: { eyebrow: "Operações", title: "Configurações" }
    },
    runtime: {
      processing: "Processando...",
      creating: "Criando...",
      saving: "Salvando...",
      refreshing: "Atualizando...",
      generating: "Gerando...",
      revoking: "Revogando...",
      disabling: "Desativando...",
      defaultErrorToast: "Não foi possível concluir a ação",
      saveConnectionLog: "Conexão salva.",
      saveConnectionToast: "Conexão salva",
      clearConnectionLog: "Conexão limpa.",
      clearConnectionToast: "Conexão limpa",
      monthCharges: "{count} cobranças",
      monthAvgTicket: "Ticket médio: {value}",
      monthNoRevenue: "Sem recebimentos confirmados neste mês.",
      emptyRecentCustomers: "Cadastre seu primeiro cliente para começar.",
      emptyCustomers: "Nenhum cliente cadastrado ainda.",
      emptyPayments: "Nenhuma cobrança encontrada.",
      emptyWebhooks: "Nenhum webhook cadastrado.",
      connectCustomers: "Conecte sua conta para ver os clientes.",
      connectPayments: "Conecte sua conta para ver as cobranças.",
      emptyWebhooksPanel: "Sem webhooks configurados.",
      selectHistory: "Selecione uma cobrança e clique em 'Histórico'.",
      table: { id: "ID", name: "Nome", email: "E-mail", document: "Documento", createdAt: "Criado em", status: "Status", amount: "Valor", method: "Forma", description: "Descrição", actions: "Ações", url: "URL", chargeStatus: "Status da cobrança", action: "Ação" },
      actions: { authorize: "Autorizar", paid: "Marcar pago", refuse: "Recusar", cancel: "Cancelar", events: "Histórico", disable: "Desativar", details: "Detalhes" },
      status: { pending: "Pendente", authorized: "Em análise", paid: "Pago", refused: "Recusado", refunded: "Cancelado", active: "Ativo", inactive: "Inativo" },
      method: { "1": "Cartão de crédito", "2": "Pix", "3": "Boleto", creditcard: "Cartão de crédito", pix: "Pix", boleto: "Boleto" }
    }
  },
  en: {
    htmlLang: "en",
    locale: "en-US",
    nextLabel: "PT",
    ui: {
      brandSub: "Portfolio gateway",
      navDashboard: "Dashboard",
      navPayments: "Payments",
      navPaymentDetails: "Payment details",
      navMerchants: "Merchants & customers",
      navSettings: "Settings",
      sidebarNote: "Portfolio project",
      documentation: "Documentation",
      dashboardTitle: "Month overview",
      dashboardSubtitle: "Track volume, status quality, and latest activity.",
      newCharge: "Create payment",
      newCustomer: "New customer",
      summaryLabel: "Monthly transactions",
      receivedLabel: "Total volume",
      receivedHint: "Only paid transactions in the current month.",
      pendingLabel: "Pending transactions",
      pendingHint: "Awaiting authorization or settlement.",
      successLabel: "Success rate",
      recentTransactions: "Recent transactions",
      recentCustomers: "Recent customers",
      refreshView: "Refresh",
      paymentsTitle: "Payments",
      paymentsSubtitle: "Create charges, filter transactions, and update status.",
      refreshCharges: "Refresh charges",
      createPayment: "Create payment",
      labelCustomerId: "Customer ID",
      labelAmount: "Amount",
      labelCurrency: "Currency",
      labelMethod: "Payment method",
      labelDescription: "Description",
      labelIdempotency: "Idempotency-Key (optional)",
      createCharge: "Create charge",
      transactionsTable: "Transaction list",
      filterStatus: "Status",
      filterDate: "Date",
      filterMerchant: "Customer / reference",
      clearFilters: "Clear filters",
      all: "All",
      statusPending: "Pending",
      statusAuthorized: "Authorized",
      statusPaid: "Paid",
      statusRefused: "Refused",
      statusRefunded: "Cancelled",
      paymentDetailsTitle: "Payment details",
      paymentDetailsSubtitle: "Inspect metadata and timeline for the selected payment.",
      timelineLogs: "Timeline / logs",
      merchantsTitle: "Merchants & customers",
      merchantsSubtitle: "Manage account credentials and customer records.",
      refreshCustomers: "Refresh customers",
      createMerchant: "Create merchant account",
      labelMerchantName: "Store name",
      labelMerchantDocument: "Document",
      labelMerchantEmail: "Email",
      createAccount: "Create account",
      generateKey: "Generate key",
      revokeKey: "Revoke",
      customersTitle: "Customers",
      labelCustomerName: "Name",
      labelCustomerDocument: "Document",
      labelCustomerEmail: "Email",
      saveCustomer: "Save customer",
      settingsTitle: "Settings",
      settingsSubtitle: "Connection setup and technical integrations.",
      connectionTitle: "Merchant connection",
      connectionSubtitle: "These values are used by API requests.",
      labelApiUrl: "API URL",
      labelAccountId: "Account ID",
      labelApiKey: "API key",
      saveConnection: "Save connection",
      clearConnection: "Clear",
      webhooksTitle: "Webhooks",
      webhooksSubtitle: "Optional for advanced integrations.",
      addWebhook: "Add webhook",
      refreshWebhooks: "Refresh webhooks",
      activityTitle: "Activity log"
    },
    placeholders: {
      phCustomerId: "paste customer ID or create one above",
      phDescription: "Example: Maintenance service",
      phIdempotency: "uuid-v4",
      phMerchantDocument: "Tax ID",
      phMerchantFilter: "search by id, description, or method",
      phMerchantId: "generated when account is created",
      phRevokeKey: "key to revoke",
      phWebhook: "https://your-endpoint.com/webhook"
    },
    viewMeta: {
      dashboard: { eyebrow: "Overview", title: "Dashboard" },
      payments: { eyebrow: "Flow", title: "Payments" },
      "payment-details": { eyebrow: "Audit", title: "Payment details" },
      merchants: { eyebrow: "Records", title: "Merchants and customers" },
      settings: { eyebrow: "Operations", title: "Settings" }
    },
    runtime: {
      processing: "Processing...",
      creating: "Creating...",
      saving: "Saving...",
      refreshing: "Refreshing...",
      generating: "Generating...",
      revoking: "Revoking...",
      disabling: "Disabling...",
      defaultErrorToast: "Could not complete the action",
      saveConnectionLog: "Connection saved.",
      saveConnectionToast: "Connection saved",
      clearConnectionLog: "Connection cleared.",
      clearConnectionToast: "Connection cleared",
      monthCharges: "{count} charges",
      monthAvgTicket: "Average ticket: {value}",
      monthNoRevenue: "No confirmed revenue this month.",
      emptyRecentCustomers: "Create your first customer to get started.",
      emptyCustomers: "No customers registered yet.",
      emptyPayments: "No charges found.",
      emptyWebhooks: "No webhooks registered.",
      connectCustomers: "Connect your account to view customers.",
      connectPayments: "Connect your account to view charges.",
      emptyWebhooksPanel: "No webhooks configured.",
      selectHistory: "Select a charge and click 'History'.",
      table: { id: "ID", name: "Name", email: "Email", document: "Document", createdAt: "Created at", status: "Status", amount: "Amount", method: "Method", description: "Description", actions: "Actions", url: "URL", chargeStatus: "Charge status", action: "Action" },
      actions: { authorize: "Authorize", paid: "Mark paid", refuse: "Refuse", cancel: "Cancel", events: "History", disable: "Disable", details: "Details" },
      status: { pending: "Pending", authorized: "Authorized", paid: "Paid", refused: "Refused", refunded: "Cancelled", active: "Active", inactive: "Inactive" },
      method: { "1": "Credit card", "2": "Pix", "3": "Bank slip", creditcard: "Credit card", pix: "Pix", boleto: "Bank slip" }
    }
  }
};

const state = {
  baseUrl: localStorage.getItem("hubpay.baseUrl") || window.location.origin,
  merchantId: localStorage.getItem("hubpay.merchantId") || "",
  apiKey: localStorage.getItem("hubpay.apiKey") || "",
  lang: localStorage.getItem("hubpay.lang") || "pt",
  currentView: "dashboard",
  lastPayments: [],
  lastCustomers: [],
  selectedPaymentId: null,
  paymentEventsById: {},
  paymentFilters: { status: "all", date: "", merchant: "" }
};

const ui = {
  apiBaseUrl: $("apiBaseUrl"),
  merchantId: $("merchantId"),
  apiKey: $("apiKey"),
  activityOutput: $("activityOutput"),
  langToggle: $("langToggle"),
  pageTitle: $("pageTitle"),
  pageEyebrow: $("pageEyebrow")
};

const pack = () => i18n[state.lang] || i18n.pt;
const trUi = (key) => pack().ui[key] || key;
const rt = () => pack().runtime;
const tr = (key, values = {}) => Object.entries(values).reduce((acc, [k, v]) => acc.replaceAll(`{${k}}`, String(v)), rt()[key] ?? key);
const trStatus = (status) => rt().status[String(status || "").toLowerCase()] || status;
const trMethod = (method) => rt().method[String(method || "").toLowerCase()] || method;
const trTable = (key) => rt().table[key] || key;
const trAction = (key) => rt().actions[key] || key;
const formatMoney = (value) => new Intl.NumberFormat(pack().locale, { style: "currency", currency: "BRL" }).format(value);

function applyLanguage(lang) {
  state.lang = lang === "en" ? "en" : "pt";
  localStorage.setItem("hubpay.lang", state.lang);
  document.documentElement.lang = pack().htmlLang;
  if (ui.langToggle) ui.langToggle.textContent = pack().nextLabel;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key) el.textContent = trUi(key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (key) el.setAttribute("placeholder", pack().placeholders[key] || "");
  });

  const methodSelect = $("paymentMethod");
  if (methodSelect) {
    const options = methodSelect.querySelectorAll("option");
    if (options[0]) options[0].textContent = trMethod("1");
    if (options[1]) options[1].textContent = trMethod("2");
    if (options[2]) options[2].textContent = trMethod("3");
  }

  updatePageHeader();
  renderDashboard();
  renderCustomersTable(state.lastCustomers);
  renderPaymentsTable(state.lastPayments);
  renderPaymentDetails();
}

function bootstrapConnectionFields() {
  ui.apiBaseUrl.value = state.baseUrl;
  ui.merchantId.value = state.merchantId;
  ui.apiKey.value = state.apiKey;
}

function log(message) {
  const time = new Date().toLocaleTimeString(pack().locale);
  ui.activityOutput.textContent = `[${time}] ${message}\n${ui.activityOutput.textContent}`;
}

function toast(message, type = "info") {
  const node = document.createElement("div");
  node.textContent = message;
  const colors = { info: "#1f4654", success: "#127766", error: "#b43e37" };
  Object.assign(node.style, {
    position: "fixed", top: "16px", right: "16px", zIndex: "9999", background: colors[type] || colors.info,
    color: "#fff", padding: "10px 12px", borderRadius: "10px", fontWeight: "700", fontSize: "12px", boxShadow: "0 10px 24px rgba(0,0,0,.22)"
  });
  document.body.appendChild(node);
  setTimeout(() => node.remove(), 1900);
}

function saveConnection() {
  state.baseUrl = ui.apiBaseUrl.value.trim() || window.location.origin;
  state.merchantId = ui.merchantId.value.trim();
  state.apiKey = ui.apiKey.value.trim();
  localStorage.setItem("hubpay.baseUrl", state.baseUrl);
  localStorage.setItem("hubpay.merchantId", state.merchantId);
  localStorage.setItem("hubpay.apiKey", state.apiKey);
  log(tr("saveConnectionLog"));
  toast(tr("saveConnectionToast"), "success");
}
function clearConnection() {
  localStorage.removeItem("hubpay.baseUrl");
  localStorage.removeItem("hubpay.merchantId");
  localStorage.removeItem("hubpay.apiKey");
  state.baseUrl = window.location.origin;
  state.merchantId = "";
  state.apiKey = "";
  bootstrapConnectionFields();
  log(tr("clearConnectionLog"));
  toast(tr("clearConnectionToast"), "info");
}

function getHeaders(extra = {}) {
  const headers = { "Content-Type": "application/json", ...extra };
  if (state.apiKey) headers["x-api-key"] = state.apiKey;
  return headers;
}

async function api(path, options = {}) {
  saveConnection();
  const response = await fetch(`${state.baseUrl}${path}`, { ...options, headers: { ...getHeaders(), ...(options.headers || {}) } });
  const contentType = response.headers.get("content-type") || "";
  const body = contentType.includes("application/json") ? await response.json().catch(() => null) : await response.text().catch(() => "");
  if (!response.ok) {
    const detail = typeof body === "string" ? body : (body?.detail || JSON.stringify(body));
    throw new Error(`${response.status} ${response.statusText}: ${detail}`);
  }
  return body;
}

function setLoading(button, isLoading, text = tr("processing")) {
  if (!button) return;
  if (!button.dataset.originalText) button.dataset.originalText = button.textContent;
  button.disabled = isLoading;
  button.textContent = isLoading ? text : button.dataset.originalText;
}

async function runAction(button, fn, loadingText) {
  try {
    setLoading(button, true, loadingText);
    await fn();
  } catch (err) {
    log(err.message);
    toast(tr("defaultErrorToast"), "error");
  } finally {
    setLoading(button, false);
  }
}

function escapeHtml(text) {
  return String(text ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

function toDate(value) {
  if (!value) return null;
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function isOpenCharge(status) {
  const key = String(status || "").toLowerCase();
  return key === "pending" || key === "authorized";
}

function statusTone(status) {
  const key = String(status || "").toLowerCase();
  if (key === "paid" || key === "active") return "success";
  if (key === "pending" || key === "authorized") return "pending";
  if (key === "refused") return "failed";
  if (key === "refunded" || key === "inactive") return "neutral";
  return "info";
}

function statusBadge(status) {
  return `<span class="badge ${statusTone(status)}">${escapeHtml(trStatus(status))}</span>`;
}

function skeletonTable(cols = 6, rows = 5) {
  const lines = [];
  for (let i = 0; i < rows; i += 1) {
    const width = 82 - (i % 3) * 8;
    lines.push(`<div class="skeleton-line" style="width:${width}%"></div>`);
  }
  return `<div class="skeleton-wrap">${Array(cols).fill(0).map((_, index) => lines[index % lines.length]).join("")}</div>`;
}

function updatePageHeader() {
  const meta = pack().viewMeta[state.currentView] || pack().viewMeta.dashboard;
  ui.pageEyebrow.textContent = meta.eyebrow;
  ui.pageTitle.textContent = meta.title;
  document.querySelectorAll(".nav-link[data-view]").forEach((node) => node.classList.toggle("is-active", node.dataset.view === state.currentView));
}

function switchView(view) {
  state.currentView = view;
  document.querySelectorAll(".view").forEach((node) => node.classList.toggle("is-active", node.dataset.view === view));
  updatePageHeader();
}

function money(value) {
  return formatMoney(Number(value || 0));
}

function findPaymentById(id) {
  return state.lastPayments.find((item) => String(item.id) === String(id)) || null;
}

function paymentMatchesFilters(payment) {
  const statusKey = String(payment.status || "").toLowerCase();
  if (state.paymentFilters.status !== "all" && statusKey !== state.paymentFilters.status) return false;

  if (state.paymentFilters.date) {
    const date = toDate(payment.createdAt);
    if (!date || date.toISOString().slice(0, 10) !== state.paymentFilters.date) return false;
  }

  const keyword = state.paymentFilters.merchant.trim().toLowerCase();
  if (!keyword) return true;
  return `${payment.id || ""} ${payment.description || ""} ${payment.paymentMethod || ""}`.toLowerCase().includes(keyword);
}

function renderRecentCustomers() {
  const target = $("recentCustomers");
  const customers = state.lastCustomers.slice(0, 6);
  if (!customers.length) {
    target.className = "empty-state";
    target.textContent = tr("emptyRecentCustomers");
    return;
  }

  const rows = customers.map((c) => {
    const date = toDate(c.createdAt)?.toLocaleDateString(pack().locale) || "-";
    const initials = (c.name || "NA").split(" ").map((n) => n.slice(0, 1)).join("").slice(0, 2).toUpperCase();
    return `<tr><td><span class="badge info">${escapeHtml(initials)}</span></td><td>${escapeHtml(c.name)}</td><td>${escapeHtml(c.email)}</td><td class="mono">${date}</td></tr>`;
  }).join("");

  target.className = "table-wrap";
  target.innerHTML = `<table><thead><tr><th></th><th>${trTable("name")}</th><th>${trTable("email")}</th><th>${trTable("createdAt")}</th></tr></thead><tbody>${rows}</tbody></table>`;
}

function renderDashboardPayments() {
  const target = $("dashboardPaymentsOutput");
  const payments = state.lastPayments.slice(0, 7);
  if (!payments.length) {
    target.innerHTML = `<div class="empty-state">${escapeHtml(tr("emptyPayments"))}</div>`;
    return;
  }

  const rows = payments.map((p) => `<tr><td class="mono">${escapeHtml(p.id)}</td><td>${statusBadge(p.status)}</td><td>${money(p.amount)}</td><td>${escapeHtml(trMethod(p.paymentMethod))}</td><td class="mono">${toDate(p.createdAt)?.toLocaleDateString(pack().locale) || "-"}</td><td><button class="btn btn-ghost" data-action="open-details" data-id="${p.id}">${trAction("details")}</button></td></tr>`).join("");
  target.innerHTML = `<table><thead><tr><th>${trTable("id")}</th><th>${trTable("status")}</th><th>${trTable("amount")}</th><th>${trTable("method")}</th><th>${trTable("createdAt")}</th><th>${trTable("actions")}</th></tr></thead><tbody>${rows}</tbody></table>`;
}

function renderDashboard() {
  const now = new Date();
  const month = now.getMonth();
  const year = now.getFullYear();
  const inMonth = state.lastPayments.filter((p) => {
    const date = toDate(p.createdAt);
    return date && date.getMonth() === month && date.getFullYear() === year;
  });

  const paidInMonth = inMonth.filter((p) => String(p.status || "").toLowerCase() === "paid");
  const totalReceived = paidInMonth.reduce((acc, p) => acc + Number(p.amount || 0), 0);
  const pending = state.lastPayments.filter((p) => isOpenCharge(p.status)).length;
  const successRate = inMonth.length ? Math.round((paidInMonth.length / inMonth.length) * 10000) / 100 : 0;
  const avgTicket = paidInMonth.length ? totalReceived / paidInMonth.length : 0;

  $("monthSummary").textContent = tr("monthCharges", { count: inMonth.length });
  $("monthSummaryHint").textContent = paidInMonth.length ? tr("monthAvgTicket", { value: formatMoney(avgTicket) }) : tr("monthNoRevenue");
  $("totalReceived").textContent = money(totalReceived);
  $("pendingCharges").textContent = String(pending);
  $("successRate").textContent = `${successRate.toFixed(2)}%`;
  $("dashboardTrend").textContent = inMonth.length ? `${paidInMonth.length}/${inMonth.length} ${trStatus("paid")}` : "-";

  renderRecentCustomers();
  renderDashboardPayments();
}

function renderCustomersTable(customers) {
  const target = $("customersOutput");
  if (!customers.length) {
    target.innerHTML = `<div class="empty-state">${escapeHtml(tr("emptyCustomers"))}</div>`;
    return;
  }

  const rows = customers.map((c) => `<tr><td class="mono">${escapeHtml(c.id)}</td><td>${escapeHtml(c.name)}</td><td>${escapeHtml(c.email)}</td><td>${escapeHtml(c.document)}</td><td class="mono">${toDate(c.createdAt)?.toLocaleString(pack().locale) || "-"}</td></tr>`).join("");
  target.innerHTML = `<table><thead><tr><th>${trTable("id")}</th><th>${trTable("name")}</th><th>${trTable("email")}</th><th>${trTable("document")}</th><th>${trTable("createdAt")}</th></tr></thead><tbody>${rows}</tbody></table>`;
}

function renderPaymentsTable(payments) {
  const target = $("paymentsOutput");
  const filtered = payments.filter(paymentMatchesFilters);
  if (!filtered.length) {
    target.innerHTML = `<div class="empty-state">${escapeHtml(tr("emptyPayments"))}</div>`;
    return;
  }

  const rows = filtered.map((p) => `<tr><td class="mono">${escapeHtml(p.id)}</td><td>${statusBadge(p.status)}</td><td>${money(p.amount)}</td><td>${escapeHtml(trMethod(p.paymentMethod))}</td><td>${escapeHtml(p.description || "-")}</td><td class="mono">${toDate(p.createdAt)?.toLocaleString(pack().locale) || "-"}</td><td><div class="actions"><button class="btn btn-action-authorize" data-action="authorize" data-id="${p.id}">${trAction("authorize")}</button><button class="btn btn-action-paid" data-action="markPaid" data-id="${p.id}">${trAction("paid")}</button><button class="btn btn-action-refuse" data-action="refuse" data-id="${p.id}">${trAction("refuse")}</button><button class="btn btn-action-cancel" data-action="refund" data-id="${p.id}">${trAction("cancel")}</button><button class="btn btn-secondary" data-action="events" data-id="${p.id}">${trAction("events")}</button></div></td></tr>`).join("");
  target.innerHTML = `<table><thead><tr><th>${trTable("id")}</th><th>${trTable("chargeStatus")}</th><th>${trTable("amount")}</th><th>${trTable("method")}</th><th>${trTable("description")}</th><th>${trTable("createdAt")}</th><th>${trTable("actions")}</th></tr></thead><tbody>${rows}</tbody></table>`;
}

function renderWebhooksTable(webhooks) {
  const target = $("webhooksOutput");
  if (!webhooks.length) {
    target.innerHTML = `<div class="empty-state">${escapeHtml(tr("emptyWebhooks"))}</div>`;
    return;
  }
  const rows = webhooks.map((w) => `<tr><td class="mono">${escapeHtml(w.id)}</td><td>${escapeHtml(w.url)}</td><td>${statusBadge(w.isActive ? "active" : "inactive")}</td><td><button class="btn btn-danger" data-action="disable-webhook" data-id="${w.id}">${trAction("disable")}</button></td></tr>`).join("");
  target.innerHTML = `<table><thead><tr><th>${trTable("id")}</th><th>${trTable("url")}</th><th>${trTable("status")}</th><th>${trTable("action")}</th></tr></thead><tbody>${rows}</tbody></table>`;
}

function renderPaymentDetails() {
  const target = $("paymentDetailsSummary");
  const payment = state.selectedPaymentId ? findPaymentById(state.selectedPaymentId) : null;
  if (!payment) {
    target.innerHTML = `<div class="empty-state">${escapeHtml(tr("selectHistory"))}</div>`;
    return;
  }

  const eventPayload = state.paymentEventsById[payment.id];
  $("paymentEventsOutput").textContent = eventPayload ? JSON.stringify(eventPayload, null, 2) : tr("selectHistory");
  target.innerHTML = `<h3>${trTable("chargeStatus")}</h3><p class="muted mono">${escapeHtml(payment.id)}</p><p class="stat-value">${money(payment.amount)}</p><p>${statusBadge(payment.status)}</p><div class="table-wrap" style="margin-top:10px;"><table><tbody><tr><td>${trTable("method")}</td><td>${escapeHtml(trMethod(payment.paymentMethod))}</td></tr><tr><td>${trTable("description")}</td><td>${escapeHtml(payment.description || "-")}</td></tr><tr><td>${trTable("createdAt")}</td><td>${toDate(payment.createdAt)?.toLocaleString(pack().locale) || "-"}</td></tr><tr><td>${trTable("status")}</td><td>${escapeHtml(trStatus(payment.status))}</td></tr></tbody></table></div>`;
}
async function createMerchant(event) {
  event.preventDefault();
  const button = event.submitter || event.target.querySelector("button[type='submit']");
  await runAction(button, async () => {
    const merchant = await api("/merchants/", { method: "POST", body: JSON.stringify({ name: $("merchantName").value.trim(), document: $("merchantDocument").value.trim(), email: $("merchantEmail").value.trim() }) });
    state.merchantId = merchant.id;
    ui.merchantId.value = merchant.id;
    saveConnection();
    $("merchantsOutput").textContent = JSON.stringify(merchant, null, 2);
    switchView("settings");
  }, tr("creating"));
}

async function generateApiKey() {
  const button = $("generateApiKey");
  await runAction(button, async () => {
    if (!state.merchantId) throw new Error(state.lang === "en" ? "Fill account ID before generating key." : "Preencha o ID da conta antes de gerar a chave.");
    const response = await api(`/merchants/${state.merchantId}/api-keys`, { method: "POST" });
    if (response?.key) {
      state.apiKey = response.key;
      ui.apiKey.value = response.key;
      saveConnection();
    }
    $("merchantsOutput").textContent = JSON.stringify(response, null, 2);
    switchView("settings");
  }, tr("generating"));
}

async function revokeApiKey(event) {
  event.preventDefault();
  const button = event.submitter || event.target.querySelector("button[type='submit']");
  await runAction(button, async () => {
    if (!state.merchantId) throw new Error(state.lang === "en" ? "Provide account ID first." : "Informe o ID da conta.");
    await api(`/merchants/${state.merchantId}/api-keys/revoke`, { method: "POST", body: JSON.stringify({ key: $("revokeApiKeyInput").value.trim() }) });
  }, tr("revoking"));
}

async function createCustomer(event) {
  event.preventDefault();
  const button = event.submitter || event.target.querySelector("button[type='submit']");
  await runAction(button, async () => {
    const customer = await api("/customers/", { method: "POST", body: JSON.stringify({ name: $("customerName").value.trim(), document: $("customerDocument").value.trim(), email: $("customerEmail").value.trim() }) });
    $("paymentCustomerId").value = customer.id;
    await listCustomers();
  }, tr("saving"));
}

async function listCustomers() {
  const button = $("refreshCustomers");
  const target = $("customersOutput");
  setLoading(button, true, tr("refreshing"));
  target.innerHTML = skeletonTable(7, 7);
  try {
    state.lastCustomers = await api("/customers?take=20");
    renderCustomersTable(state.lastCustomers);
    renderDashboard();
  } catch {
    target.innerHTML = `<div class="empty-state">${escapeHtml(tr("connectCustomers"))}</div>`;
  } finally {
    setLoading(button, false);
  }
}

async function createPayment(event) {
  event.preventDefault();
  const button = event.submitter || event.target.querySelector("button[type='submit']");
  await runAction(button, async () => {
    const idempotencyKey = $("idempotencyKey").value.trim();
    const headers = {};
    if (idempotencyKey) headers["Idempotency-Key"] = idempotencyKey;
    await api("/payments/", { method: "POST", headers, body: JSON.stringify({ customerId: $("paymentCustomerId").value.trim(), amount: Number($("paymentAmount").value), currency: $("paymentCurrency").value.trim().toUpperCase(), paymentMethod: Number($("paymentMethod").value), description: $("paymentDescription").value.trim() }) });
    await listPayments();
  }, tr("creating"));
}

async function listPayments() {
  const button = $("listPayments");
  const target = $("paymentsOutput");
  setLoading(button, true, tr("refreshing"));
  target.innerHTML = skeletonTable(8, 8);
  try {
    state.lastPayments = await api("/payments/");
    renderPaymentsTable(state.lastPayments);
    renderDashboard();
    renderPaymentDetails();
  } catch {
    target.innerHTML = `<div class="empty-state">${escapeHtml(tr("connectPayments"))}</div>`;
  } finally {
    setLoading(button, false);
  }
}

async function paymentAction(action, id, button) {
  await runAction(button, async () => {
    if (action === "open-details") {
      state.selectedPaymentId = id;
      renderPaymentDetails();
      switchView("payment-details");
      return;
    }

    if (action === "events") {
      const events = await api(`/payments/${id}/events`);
      state.paymentEventsById[id] = events;
      state.selectedPaymentId = id;
      renderPaymentDetails();
      switchView("payment-details");
      return;
    }

    const routeMap = { authorize: "authorize", markPaid: "pay", refuse: "refuse", refund: "cancel" };
    await api(`/payments/${id}/${routeMap[action]}`, { method: "POST" });
    await listPayments();
  }, tr("processing"));
}

async function createWebhook(event) {
  event.preventDefault();
  const button = event.submitter || event.target.querySelector("button[type='submit']");
  await runAction(button, async () => {
    await api("/webhooks/", { method: "POST", body: JSON.stringify({ url: $("webhookUrl").value.trim() }) });
    await listWebhooks();
  }, tr("saving"));
}

async function listWebhooks() {
  const button = $("listWebhooks");
  const target = $("webhooksOutput");
  target.innerHTML = skeletonTable(5, 4);
  await runAction(button, async () => renderWebhooksTable(await api("/webhooks/")), tr("refreshing"));
}

async function disableWebhook(id, button) {
  await runAction(button, async () => {
    await api(`/webhooks/${id}/disable`, { method: "POST" });
    await listWebhooks();
  }, tr("disabling"));
}

function syncPaymentFilters() {
  state.paymentFilters.status = $("paymentStatusFilter").value;
  state.paymentFilters.date = $("paymentDateFilter").value;
  state.paymentFilters.merchant = $("paymentMerchantFilter").value;
  renderPaymentsTable(state.lastPayments);
}

function resetPaymentFilters() {
  $("paymentStatusFilter").value = "all";
  $("paymentDateFilter").value = "";
  $("paymentMerchantFilter").value = "";
  syncPaymentFilters();
}

function bindEvents() {
  $("saveConnection").addEventListener("click", saveConnection);
  $("clearConnection").addEventListener("click", clearConnection);
  $("createMerchantForm").addEventListener("submit", createMerchant);
  $("generateApiKey").addEventListener("click", generateApiKey);
  $("revokeApiKeyForm").addEventListener("submit", revokeApiKey);
  $("createCustomerForm").addEventListener("submit", createCustomer);
  $("refreshCustomers").addEventListener("click", listCustomers);
  $("createPaymentForm").addEventListener("submit", createPayment);
  $("listPayments").addEventListener("click", listPayments);

  $("paymentsOutput").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");
    if (button) paymentAction(button.dataset.action, button.dataset.id, button);
  });

  $("dashboardPaymentsOutput").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action='open-details']");
    if (button) paymentAction(button.dataset.action, button.dataset.id, button);
  });

  $("createWebhookForm").addEventListener("submit", createWebhook);
  $("listWebhooks").addEventListener("click", listWebhooks);

  $("webhooksOutput").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action='disable-webhook']");
    if (button) disableWebhook(button.dataset.id, button);
  });

  $("refreshDashboard").addEventListener("click", async () => Promise.allSettled([listCustomers(), listPayments()]));

  $("newCustomerHero").addEventListener("click", () => {
    switchView("merchants");
    $("customerName").focus();
  });

  $("newChargeHero").addEventListener("click", () => {
    switchView("payments");
    $("paymentCustomerId").focus();
  });

  if (ui.langToggle) ui.langToggle.addEventListener("click", () => applyLanguage(state.lang === "pt" ? "en" : "pt"));

  $("paymentStatusFilter").addEventListener("change", syncPaymentFilters);
  $("paymentDateFilter").addEventListener("change", syncPaymentFilters);
  $("paymentMerchantFilter").addEventListener("input", syncPaymentFilters);
  $("clearPaymentFilters").addEventListener("click", resetPaymentFilters);

  document.querySelectorAll(".nav-link[data-view]").forEach((button) => {
    button.addEventListener("click", () => switchView(button.dataset.view));
  });
}

async function bootstrap() {
  bootstrapConnectionFields();
  bindEvents();
  applyLanguage(state.lang);

  $("customersOutput").innerHTML = `<div class="empty-state">${escapeHtml(tr("connectCustomers"))}</div>`;
  $("paymentsOutput").innerHTML = `<div class="empty-state">${escapeHtml(tr("connectPayments"))}</div>`;
  $("dashboardPaymentsOutput").innerHTML = `<div class="empty-state">${escapeHtml(tr("connectPayments"))}</div>`;
  $("webhooksOutput").innerHTML = `<div class="empty-state">${escapeHtml(tr("emptyWebhooksPanel"))}</div>`;
  $("paymentEventsOutput").textContent = tr("selectHistory");
  renderPaymentDetails();
  renderDashboard();

  if (state.apiKey && state.merchantId) await Promise.allSettled([listCustomers(), listPayments(), listWebhooks()]);

  switchView("dashboard");
  log(state.lang === "en" ? "HubPay is ready." : "HubPay pronto para uso.");
  toast(state.lang === "en" ? "Panel loaded" : "Painel carregado", "info");
}

bootstrap();


