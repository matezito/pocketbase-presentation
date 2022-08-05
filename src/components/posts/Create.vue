<template>
  <div class="col-md-8 offset-md-2 col-12">
    <h2>Crear</h2>
    <form @submit.prevent="onSubmit">
      <div class="form-group mb-3">
        <label for="" class="mb-3">Titulo</label>
        <input type="text" class="form-control" id="title" v-model="title" />
      </div>
      <div class="form-group mb-3">
        <label for="" class="mb-3">Resumen</label>
        <input type="text" class="form-control" id="title" v-model="excerpt" />
      </div>
       <div class="form-group mb-3">
        <label for="" class="mb-3">Contenido</label>
        <textarea v-model="content" class="form-control"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Agregar</button>
    </form>
  </div>
</template>

<script setup>
</script>
