<template>
    <div class="col-md-6 offset-md-3 col-12">
        <h2>Ingresar</h2>
        <form @submit.prevent="onSubmit">
            <div class="form-group mb-3">
                <label for="email" class="mb-3">Email</label>
                <input type="email" class="form-control" id="email" v-model="email">
            </div>
            <div class="form-group mb-3">
                <label for="password" class="mb-3">Password</label>
                <input type="password" class="form-control" id="password" v-model="password">
            </div>
            <button type="submit" class="btn btn-primary">Ingresar</button>
        </form>
    </div>
</template>