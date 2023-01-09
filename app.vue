<script setup>
const date = ref(new Date());
date.value.setDate(date.value.getDate() + 2);
const range = reactive({start: new Date(), end: date.value,});

const loading = ref(false);

const nuxtApp = useNuxtApp();

onMounted(async () => {
  loading.value = true;
});

const selectedDate = ref({
  start: new Date(2018, 10, 9),
  end: new Date(2018, 10, 10),
});

</script>

<template>
  <div
    class="app font-sans antialiased"
  >
    <div class="app-search max-w-xl mx-auto mt-10">
      <ClientOnly>
        <template #fallback>
          <input class="datepicker"/>
          <span class="-ml-6 mr-2">to</span>
          <input class="datepicker"/>
          <div class="vc-popover-content-wrapper is-interactive">
            <div></div>
          </div>
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
            <input :value="inputValue.end" v-on="inputEvents.end" class="datepicker"/>
          </template>
        </v-date-picker>
      </ClientOnly>
    </div>

    <div>
      <ClientOnly>
        <v-date-picker
          mode="range"
          is-range
          v-model="selectedDate"
          :min-date="new Date()"
          show-caps
        />
      </ClientOnly>
    </div>

  </div>
</template>
