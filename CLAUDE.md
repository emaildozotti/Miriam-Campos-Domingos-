# LP -- Miriam Campos

Repositorio standalone da landing page de Miriam Campos.

---

## FLUXO DE DEPLOY / ATUALIZACAO

```bash
# Abrir landing-page/ no Claude Code ou antigravity -> fazer alteracoes ->
git add .
git commit -m "update: foto e video inseridos"
git push
# Vercel auto-deploya em ~30s
```

> Este diretorio tem seu proprio `.git` isolado.
> `git add .` captura APENAS arquivos desta pasta -- nunca o workspace inteiro.

---

## Identidade deste repositorio

- **Cliente:** Miriam Campos
- **GitHub:** https://github.com/emaildozotti/Miriam-Campos-Domingos-
- **Vercel:** https://miriam-campos.vercel.app
- **Auto-deploy:** ativo -- push para `main` = deploy automatico

## Stack

React 19 + TypeScript + Vite + Tailwind v4 + Framer Motion v12

## Exemplos de mensagens de commit

```bash
git commit -m "feat: foto e video inseridos -- Miriam Campos ao ar"
git commit -m "update: foto hero atualizada"
git commit -m "update: WhatsApp real configurado"
git commit -m "fix: ajuste de texto no hero"
git commit -m "update: depoimentos reais inseridos"
```

## REGRAS

- **NUNCA** fazer `git add` fora desta pasta
- **NUNCA** usar `gh` CLI ou Vercel CLI
- **SEMPRE** abrir apenas a pasta `landing-page/` no editor antes de commitar
- O remote `origin` = `emaildozotti/Miriam-Campos-Domingos-` -- nao alterar

## Arquivos ignorados (.gitignore)

`node_modules/` `dist/` `.env` `.env.local` `.vercel/`
