<template>
      <el-form :model="form" label-width="120px" v-loading="loading" @submit.prevent="onSubmit">
        <el-form-item label="Activity name">
            <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">Submit</el-button>
        </el-form-item>
      </el-form>
      <json-viewer :value="form.dictionary"></json-viewer>
</template>

<script>
import { reactive } from 'vue'
import DictionaryServices from '../../services/dictionary.services'
import { ref } from 'vue'

const loading = ref(false)
const form = reactive({
  name: '',
  dictionary: '',
})
export default {
    name: 'HomePage',
    data(){
        return {
            form,
            loading
        }
    },
    methods: {
        onSubmit: async () => {
            loading.value = true;
            const { name } = form;
            const response = await DictionaryServices.fetchDictionary(name);
            form.dictionary = response;
            loading.value = false;
        }
    }
}

</script>