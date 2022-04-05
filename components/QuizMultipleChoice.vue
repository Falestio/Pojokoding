<template>
    <div class="quiz">
        <div class="question">{{ question }}</div>
        <div
            class="choice"
            :class="handleMultipleChoiceState(choice)"
            v-for="(choice, index) in c"
            :key="index"
            @click="handleAnswer(choice)"
        >{{ choice.text }}</div>
        <div class="discussion" v-if="answered">
            <span class="discussion-badge-correct" v-if="isCorrect">Benar!</span>
            <span class="discussion-badge-wrong" v-if="isWrong">Salah</span>
            {{ discussion }}
        </div>
    </div>
</template>

<script>
export default {
    props: ['question', 'discussion', 'c'],

    data() {
        return {
            isWrong: false,
            isCorrect: false,
            answered: false,

        }
    },
    
    computed: {
    },

    methods: {
        handleAnswer(choice) {
            if (!this.answered){
                if (choice.isCorrect){
                    this.isCorrect = true
                } else {
                    this.isWrong = true
                }
            }
            this.answered = true
        },

        handleMultipleChoiceState(choice){
            if(this.answered) return {
                correct: choice.isCorrect,
                wrong: !choice.isCorrect
            }
        }
    },
}
</script>

<style lang="scss" scoped>
    .quiz {
        padding: 1.5rem;
        border-radius: 10px;
        border: 3px solid $primary-color;
        .question {
            @include body-text-md;
            border-radius: 10px;
            margin-bottom: 1.5rem;
        }
        .choice {
            @include body-text-md;
            @include button;
            @include button-outline;
            @include button-md;
            margin: .5rem 0;
            cursor: pointer;
        }
        .discussion {
            @include body-text-sm;
            margin-top: 1.5rem;
            padding: 1rem;
            background-color: $n800;
            .discussion-badge-correct {
                padding: .5rem;
                background-color: #0065ff;
            }
            .discussion-badge-wrong {
                padding: .5rem;
                background-color: #ff5630;
                color: #fff;
            }
        }
    }

    .correct {
        border-color: #0065ff !important;
        border-width: 3px !important;
    }

    .wrong {
        border-color: #ff5630 !important;
    }
</style>