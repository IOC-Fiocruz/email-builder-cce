<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import grapesjs, { Editor } from 'grapesjs'
import 'grapesjs/dist/css/grapes.min.css'
import { newsletterSexta, newsBlock } from '../templates/newsletterSexta'

let editor: Editor | null = null
const copied = ref(false)
const activeDevice = ref<'desktop' | 'mobile'>('desktop')

onMounted(() => {
  editor = grapesjs.init({
    container: '#gjs',
    height: '100%',
    storageManager: false,
    panels: { defaults: [] },
    traitManager: {
      appendTo: '#traits'
    },

    deviceManager: {
      devices: [
        { name: 'Desktop', width: '' },
        { name: 'Mobile', width: '375px', widthMedia: '480px' }
      ]
    },

    blockManager: {
      appendTo: '#blocks',
      blocks: [] // painel de blocos esvaziado — usamos o botão da toolbar
    },

    styleManager: {
      appendTo: '#styles',
      sectors: [
        {
          name: 'Tipografia',
          open: true,
          properties: ['font-size', 'font-weight', 'color', 'text-align', 'line-height']
        },
        {
          name: 'Espaçamento',
          open: false,
          properties: ['padding', 'margin']
        },
        {
          name: 'Fundo',
          open: false,
          properties: [
            'background-color',
            'background-image',  // ← troca o objeto pelo nome simples
            'background-size',
            'background-position'
          ]
        }
      ]
    }
  })

  // Carrega o template da newsletter automaticamente
  editor.setComponents(newsletterSexta)
})

onBeforeUnmount(() => editor?.destroy())

// ✅ Insere bloco sempre no lugar certo
function addNewsBlock() {
  if (!editor) return

  let targetTd: any = null

  editor.DomComponents.getWrapper()?.onAll((component: any) => {
    const classes = component.getClasses()
    if (classes.includes('newsletter-body')) {
      targetTd = component
    }
  })

  if (targetTd) {
    targetTd.append(newsBlock)
  }
}


function copyHtml() {
  if (!editor) return
  const full = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<style>${editor.getCss()}</style>
</head>
<body style="margin:0;padding:0;background:#f4f4f4;">
${editor.getHtml()}
</body>
</html>`
  navigator.clipboard.writeText(full).then(() => {
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  })
}

function setDevice(device: 'desktop' | 'mobile') {
  activeDevice.value = device
  editor?.setDevice(device === 'mobile' ? 'Mobile' : 'Desktop')
}
</script>

<template>
  <div class="layout">

    <header class="toolbar">
      <span class="brand">✉️ Email Builder</span>

      <div class="device-toggle">
        <button
          :class="['btn-device', activeDevice === 'desktop' && 'active']"
          @click="setDevice('desktop')">
          🖥 Desktop
        </button>
        <button
          :class="['btn-device', activeDevice === 'mobile' && 'active']"
          @click="setDevice('mobile')">
          📱 Mobile
        </button>
      </div>

      <div style="display:flex; gap:8px;">
        <button class="btn-add" @click="addNewsBlock">＋ Notícia</button>
        <button class="btn-copy" @click="copyHtml">
          {{ copied ? '✅ Copiado!' : '📋 Copiar HTML' }}
        </button>
      </div>
    </header>

    <div class="editor-row">

      <main class="canvas">
        <div id="gjs"></div>
      </main>

      <aside class="panel-styles">
        <p class="panel-label">Estilos</p>
        <div id="styles"></div>

        <p class="panel-label" style="margin-top:16px;">Link</p>
        <div id="traits"></div>
      </aside>

    </div>
  </div>
</template>

<style scoped>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #0f0f1a;
  color: #eee;
  font-family: Arial, sans-serif;
}

.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background: #16213e;
  border-bottom: 1px solid #1e3a6e;
  flex-shrink: 0;
}

.brand {
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 0.5px;
}

.device-toggle {
  display: flex;
  gap: 6px;
}

.btn-device {
  padding: 6px 14px;
  border: 1px solid #2a4a8a;
  background: transparent;
  color: #aaa;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  transition: all 0.15s;
}
.btn-device.active {
  background: #1e56c8;
  border-color: #1e56c8;
  color: #fff;
}

.btn-add {
  padding: 7px 18px;
  background: #2ecc71;
  border: none;
  color: #fff;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  transition: background 0.15s;
}
.btn-add:hover { background: #27ae60; }

.btn-copy {
  padding: 7px 18px;
  background: #1e56c8;
  border: none;
  color: #fff;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  transition: background 0.15s;
}
.btn-copy:hover { background: #1744a8; }

.editor-row {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.panel-styles {
  width: 200px;
  background: #16213e;
  overflow-y: auto;
  flex-shrink: 0;
  border-left: 1px solid #1e3a6e;
}

.panel-label {
  padding: 10px 12px 6px;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #556;
}

.canvas {
  flex: 1;
  overflow: hidden;
}
#gjs { height: 100%; }
</style>