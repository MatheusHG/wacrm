-- ============================================================
-- Seed do Supabase LOCAL (roda após as migrations em `supabase db reset`
-- e no primeiro `supabase start`).
--
-- Por que existe: no Supabase hospedado, os roles da API (anon,
-- authenticated, service_role) ganham privilégios nas tabelas do schema
-- public automaticamente (default privileges da plataforma). No banco
-- LOCAL isso não acontece, então PostgREST devolve
--   "permission denied for table <x>" (SQLSTATE 42501)
-- e o app quebra logo no fetchProfile. A segurança por linha continua
-- garantida pela RLS (as policies já vêm nas migrations) — aqui só
-- concedemos o acesso de tabela que o modelo do Supabase pressupõe.
-- ============================================================

GRANT USAGE ON SCHEMA public TO anon, authenticated, service_role;

GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public
  TO anon, authenticated, service_role;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public
  TO anon, authenticated, service_role;
GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA public
  TO anon, authenticated, service_role;

-- Cobre tabelas/sequências/funções criadas depois deste seed.
ALTER DEFAULT PRIVILEGES IN SCHEMA public
  GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES IN SCHEMA public
  GRANT USAGE, SELECT ON SEQUENCES TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES IN SCHEMA public
  GRANT EXECUTE ON FUNCTIONS TO anon, authenticated, service_role;

-- ------------------------------------------------------------
-- Usuário de teste: NÃO é criado aqui (criar usuários de auth via SQL é
-- frágil). Após um `supabase db reset`, recrie-o pela API admin:
--
--   SRK=$(npx supabase status -o env | grep '^SERVICE_ROLE_KEY=' | cut -d'"' -f2)
--   curl -s -X POST http://127.0.0.1:54321/auth/v1/admin/users \
--     -H "apikey: $SRK" -H "Authorization: Bearer $SRK" \
--     -H "Content-Type: application/json" \
--     -d '{"email":"teste@local.dev","password":"teste1234","email_confirm":true,"user_metadata":{"full_name":"Usuario Teste"}}'
--
-- O trigger on_auth_user_created cria o profile (e a conta) sozinho.
-- ------------------------------------------------------------
