<template>
    <div class="flex items-center justify-center flex-col">
        <ContentDoc v-slot="{ doc }" path="/blog/postone">
            <h2>{{ doc.title }}</h2>
            <h2>{{ doc.description }}</h2>
        </ContentDoc>
    </div>
</template>
<script></script>