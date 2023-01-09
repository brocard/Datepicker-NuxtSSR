<script setup>
const date = ref(new Date());
date.value.setDate(date.value.getDate() + 2);
const range = reactive({start: new Date(), end: date.value,});

const loading = ref(false);

const nuxtApp = useNuxtApp();

onMounted(async () => {
  loading.value = true;
});
</script>

<template>
  <div class="app font-sans antialiased">

    <div class="app-search max-w-xl mx-auto mt-10">
      <ClientOnly>
        <template #placeholder>
          <input class="datepicker"/>
          <span class="-ml-6 mr-2">to</span>
          <input class="datepicker"/><br/>
        </template>

        <v-date-picker
          v-if="loading"
          v-model="range"
          is-range
          timezone="UTC"
          :modelConfig="{ timeAdjust: '00:00:00'}"
        >
          <template v-slot="{ inputValue, inputEvents}">
            <input :value="inputValue.start" v-on="inputEvents.start" class="datepicker"/>
            <span class="-ml-6 mr-2">to</span>
            <input :value="inputValue.end" v-on="inputEvents.end" class="datepicker"/><br/>
          </template>
        </v-date-picker>
      </ClientOnly>
    </div>
  </div>
</template>
