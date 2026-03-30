const BG_URL = 'https://img.freepik.com/free-photo/white-paper-texture_1194-2403.jpg'
const PATTERN_URL = '/pattern.jpg';
const LOGO_URL = 'https://SEU-CODESPACE-5173.app.github.dev/images/logo.png'
const REGUA_URL = '/footer_logo.jpg'

export const newsletterSexta = `
<div style="max-width:620px; margin:0 auto; font-family:Arial,sans-serif;">

  <!-- HEADER -->
  <table width="100%" cellpadding="0" cellspacing="0"
    style="background-image:url('${PATTERN_URL}'); background-size:cover; background-color:#1a1a2e; ">
    <tr>
      <td align="center" style="padding:40px 32px;">
        <img src="${LOGO_URL}" alt="Logo" width="100"
          style="display:block; margin:0 auto 16px;" />        
      </td>
    </tr>
  </table>

  <!-- BODY -->
  <table width="100%" cellpadding="0" cellspacing="0"
    style="background-image:url('${PATTERN_URL}'); background-size:cover; background-color:#1a1a2e;">
    <tr>
      <!-- Faixa esquerda (75px) -->
      <td width="75" style="background:transparent;"></td>
      <!-- Conteúdo branco -->
      <td class="newsletter-body" style="background-image:url('${BG_URL}'); padding:0;">

        <!-- BLOCO DE NOTÍCIA -->
        <table width="100%" cellpadding="0" cellspacing="0" style="padding-bottom:22px">
          <tr>
            <td style="padding:24px 28px 8px;">
              <a href="https://link-aqui.com"
                style="font-size:18px; font-weight:bold; color:#1a1a2e; text-decoration:none; display:block; margin-bottom:8px;">
                Título da Notícia
              </a>
              <p style="font-size:14px; color:#444; line-height:1.6; margin:0;">
                Escreva aqui o resumo da notícia. Seja direto e objetivo.
              </p>
            </td>
          </tr>
          <tr>
            <td align="right" style="padding:8px 28px 24px;">
              <a href="https://link-aqui.com"
                style="font-size:13px; color:#fff; background:#1a1a2e; padding:8px 20px; text-decoration:none; border-radius:4px; display:inline-block;">
                Ler mais →
              </a>
            </td>
          </tr>
          <tr>
            <td style="padding:0 28px;">
              <hr style="border:none; border-top:1px solid #eee; margin:0;" />
            </td>
          </tr>
        </table>
        <!-- /BLOCO DE NOTÍCIA -->

       </td>
      <!-- Faixa direita (10px) -->
      <td width="10" style="background:transparent;"></td>
    </tr>
    <!-- Faixa inferior -->
    <tr>
      <td colspan="3" height="24" style="background:transparent;"></td>
    </tr>
  </table>

  <!-- FOOTER -->
  <table width="100%" cellpadding="0" cellspacing="0"
    style="background-image:url('${BG_URL}'); background-size:cover; background-color:#1a1a2e; ">
    <tr>
      <td align="center" style="padding:24px 32px;">
        <img src='${REGUA_URL}' style="max-width: 100%; height: 75px" />        
      </td>
    </tr>
  </table>

</div>
`

export const newsBlock = `
<table width="100%" cellpadding="0" cellspacing="0">
  <tr>
    <td style="padding:24px 28px 8px;">
      <a href="https://link-aqui.com"
        style="font-size:18px; font-weight:bold; color:#1a1a2e; text-decoration:none; display:block; margin-bottom:8px;">
        Título da Notícia
      </a>
      <p style="font-size:14px; color:#444; line-height:1.6; margin:0;">
        Escreva aqui o resumo da notícia.
      </p>
    </td>
  </tr>
  <tr>
    <td align="right" style="padding:8px 28px 24px;">
      <a href="https://link-aqui.com"
        style="font-size:13px; color:#fff; background:#1a1a2e; padding:8px 20px; text-decoration:none; border-radius:4px; display:inline-block;">
        Ler mais →
      </a>
    </td>
  </tr>
  <tr>
    <td style="padding:0 28px;">
      <hr style="border:none; border-top:1px solid #eee; margin:0;" />
    </td>
  </tr>
</table>
`