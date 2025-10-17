<script setup lang="ts">
import sourceDataRaw from '@/routing-data.json'
import { computed, ref } from 'vue'

const headerDesktopRoutes = ref(sourceDataRaw.header.routes)

// kleine Helfer
const abs  = (p: string) => (p?.startsWith('/') ? p : `/${p ?? ''}`)
const join = (parent: string, child: string) =>
  child?.startsWith('/') ? child : `${abs(parent).replace(/\/$/, '')}/${(child ?? '').replace(/^\//, '')}`

// 1) JSON-Felder vereinheitlichen: subRoutes **oder** 'sub-routes'
const normalized = computed(() =>
  headerDesktopRoutes.value.map((it: any) => ({
    ...it,
    subRoutes: it.subRoutes ?? it['sub-routes'] ?? [], // <- WICHTIG
    path: abs(it.path),                                  // Parent sofort absolut machen
  }))
)

// 2) Map aufbauen: Parent.path -> Child-Liste
const childrenByParent = computed(() => {
  const map = new Map<string, Array<{ id: string | number; text: string; path: string }>>()
  for (const it of normalized.value) {
    if (Array.isArray(it.subRoutes) && it.subRoutes.length > 0) {
      map.set(
        it.path,
        it.subRoutes.map((c: any) => ({
          id: `${c.id}`,
          text: c.text,
          path: join(it.path, c.path), // z. B. "/Activities/Quiz"
        }))
      )
    }
  }
  return map
})

// Debug
function showInput() {
  console.log('headerDesktopRoutes:', headerDesktopRoutes.value)
  console.log('normalized:', normalized.value)
  console.log('childrenMap:', childrenByParent.value)
}
</script>

<template>
  <div id="nav">
    <div
      class="dropdownBtn"
      v-for="parent in normalized"
      :key="parent.id"
    >
      <router-link class="navLink" :to="parent.path">
        {{ parent.text }}
      </router-link>

      <!-- Dropdown nur wenn es Kinder gibt -->
      <div v-if="childrenByParent.has(parent.path)"
           class="dropdownContent">
        <router-link
          class="navLink"
          v-for="child in (childrenByParent.get(parent.path) || [])"
          :key="child.id"
          :to="child.path"
        >
          {{ child.text }}
        </router-link>
      </div>
    </div>
  </div>

  <div class="dropdown">
  </div>
</template>
<style scoped>
#nav{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.dropdownBtn{
  position: relative;
}

.dropdownContent{
  position: absolute;
  top: 150%;
  width : 100%;
  display: none;
  background-color: white;
}

.dropdownBtn:hover .dropdownContent {
  display: flex;
  flex-direction: column;
}
</style>
